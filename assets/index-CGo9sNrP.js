(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function i(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=i(o);fetch(o.href,c)}})();var Xd={exports:{}},Tl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D_;function dy(){if(D_)return Tl;D_=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,o,c){var u=null;if(c!==void 0&&(u=""+c),o.key!==void 0&&(u=""+o.key),"key"in o){c={};for(var d in o)d!=="key"&&(c[d]=o[d])}else c=o;return o=c.ref,{$$typeof:a,type:r,key:u,ref:o!==void 0?o:null,props:c}}return Tl.Fragment=e,Tl.jsx=i,Tl.jsxs=i,Tl}var L_;function hy(){return L_||(L_=1,Xd.exports=dy()),Xd.exports}var D=hy(),Wd={exports:{}},lt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N_;function py(){if(N_)return lt;N_=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),_=Symbol.iterator;function S(U){return U===null||typeof U!="object"?null:(U=_&&U[_]||U["@@iterator"],typeof U=="function"?U:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,y={};function x(U,J,Ee){this.props=U,this.context=J,this.refs=y,this.updater=Ee||b}x.prototype.isReactComponent={},x.prototype.setState=function(U,J){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,J,"setState")},x.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function F(){}F.prototype=x.prototype;function I(U,J,Ee){this.props=U,this.context=J,this.refs=y,this.updater=Ee||b}var w=I.prototype=new F;w.constructor=I,R(w,x.prototype),w.isPureReactComponent=!0;var O=Array.isArray;function L(){}var z={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function N(U,J,Ee){var Re=Ee.ref;return{$$typeof:a,type:U,key:J,ref:Re!==void 0?Re:null,props:Ee}}function q(U,J){return N(U.type,J,U.props)}function X(U){return typeof U=="object"&&U!==null&&U.$$typeof===a}function K(U){var J={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(Ee){return J[Ee]})}var ce=/\/+/g;function ue(U,J){return typeof U=="object"&&U!==null&&U.key!=null?K(""+U.key):J.toString(36)}function Z(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(L,L):(U.status="pending",U.then(function(J){U.status==="pending"&&(U.status="fulfilled",U.value=J)},function(J){U.status==="pending"&&(U.status="rejected",U.reason=J)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function H(U,J,Ee,Re,De){var ie=typeof U;(ie==="undefined"||ie==="boolean")&&(U=null);var Me=!1;if(U===null)Me=!0;else switch(ie){case"bigint":case"string":case"number":Me=!0;break;case"object":switch(U.$$typeof){case a:case e:Me=!0;break;case g:return Me=U._init,H(Me(U._payload),J,Ee,Re,De)}}if(Me)return De=De(U),Me=Re===""?"."+ue(U,0):Re,O(De)?(Ee="",Me!=null&&(Ee=Me.replace(ce,"$&/")+"/"),H(De,J,Ee,"",function(st){return st})):De!=null&&(X(De)&&(De=q(De,Ee+(De.key==null||U&&U.key===De.key?"":(""+De.key).replace(ce,"$&/")+"/")+Me)),J.push(De)),1;Me=0;var ve=Re===""?".":Re+":";if(O(U))for(var We=0;We<U.length;We++)Re=U[We],ie=ve+ue(Re,We),Me+=H(Re,J,Ee,ie,De);else if(We=S(U),typeof We=="function")for(U=We.call(U),We=0;!(Re=U.next()).done;)Re=Re.value,ie=ve+ue(Re,We++),Me+=H(Re,J,Ee,ie,De);else if(ie==="object"){if(typeof U.then=="function")return H(Z(U),J,Ee,Re,De);throw J=String(U),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return Me}function V(U,J,Ee){if(U==null)return U;var Re=[],De=0;return H(U,Re,"","",function(ie){return J.call(Ee,ie,De++)}),Re}function te(U){if(U._status===-1){var J=U._result;J=J(),J.then(function(Ee){(U._status===0||U._status===-1)&&(U._status=1,U._result=Ee)},function(Ee){(U._status===0||U._status===-1)&&(U._status=2,U._result=Ee)}),U._status===-1&&(U._status=0,U._result=J)}if(U._status===1)return U._result.default;throw U._result}var ge=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)},Se={map:V,forEach:function(U,J,Ee){V(U,function(){J.apply(this,arguments)},Ee)},count:function(U){var J=0;return V(U,function(){J++}),J},toArray:function(U){return V(U,function(J){return J})||[]},only:function(U){if(!X(U))throw Error("React.Children.only expected to receive a single React element child.");return U}};return lt.Activity=v,lt.Children=Se,lt.Component=x,lt.Fragment=i,lt.Profiler=o,lt.PureComponent=I,lt.StrictMode=r,lt.Suspense=m,lt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,lt.__COMPILER_RUNTIME={__proto__:null,c:function(U){return z.H.useMemoCache(U)}},lt.cache=function(U){return function(){return U.apply(null,arguments)}},lt.cacheSignal=function(){return null},lt.cloneElement=function(U,J,Ee){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var Re=R({},U.props),De=U.key;if(J!=null)for(ie in J.key!==void 0&&(De=""+J.key),J)!T.call(J,ie)||ie==="key"||ie==="__self"||ie==="__source"||ie==="ref"&&J.ref===void 0||(Re[ie]=J[ie]);var ie=arguments.length-2;if(ie===1)Re.children=Ee;else if(1<ie){for(var Me=Array(ie),ve=0;ve<ie;ve++)Me[ve]=arguments[ve+2];Re.children=Me}return N(U.type,De,Re)},lt.createContext=function(U){return U={$$typeof:u,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:c,_context:U},U},lt.createElement=function(U,J,Ee){var Re,De={},ie=null;if(J!=null)for(Re in J.key!==void 0&&(ie=""+J.key),J)T.call(J,Re)&&Re!=="key"&&Re!=="__self"&&Re!=="__source"&&(De[Re]=J[Re]);var Me=arguments.length-2;if(Me===1)De.children=Ee;else if(1<Me){for(var ve=Array(Me),We=0;We<Me;We++)ve[We]=arguments[We+2];De.children=ve}if(U&&U.defaultProps)for(Re in Me=U.defaultProps,Me)De[Re]===void 0&&(De[Re]=Me[Re]);return N(U,ie,De)},lt.createRef=function(){return{current:null}},lt.forwardRef=function(U){return{$$typeof:d,render:U}},lt.isValidElement=X,lt.lazy=function(U){return{$$typeof:g,_payload:{_status:-1,_result:U},_init:te}},lt.memo=function(U,J){return{$$typeof:h,type:U,compare:J===void 0?null:J}},lt.startTransition=function(U){var J=z.T,Ee={};z.T=Ee;try{var Re=U(),De=z.S;De!==null&&De(Ee,Re),typeof Re=="object"&&Re!==null&&typeof Re.then=="function"&&Re.then(L,ge)}catch(ie){ge(ie)}finally{J!==null&&Ee.types!==null&&(J.types=Ee.types),z.T=J}},lt.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},lt.use=function(U){return z.H.use(U)},lt.useActionState=function(U,J,Ee){return z.H.useActionState(U,J,Ee)},lt.useCallback=function(U,J){return z.H.useCallback(U,J)},lt.useContext=function(U){return z.H.useContext(U)},lt.useDebugValue=function(){},lt.useDeferredValue=function(U,J){return z.H.useDeferredValue(U,J)},lt.useEffect=function(U,J){return z.H.useEffect(U,J)},lt.useEffectEvent=function(U){return z.H.useEffectEvent(U)},lt.useId=function(){return z.H.useId()},lt.useImperativeHandle=function(U,J,Ee){return z.H.useImperativeHandle(U,J,Ee)},lt.useInsertionEffect=function(U,J){return z.H.useInsertionEffect(U,J)},lt.useLayoutEffect=function(U,J){return z.H.useLayoutEffect(U,J)},lt.useMemo=function(U,J){return z.H.useMemo(U,J)},lt.useOptimistic=function(U,J){return z.H.useOptimistic(U,J)},lt.useReducer=function(U,J,Ee){return z.H.useReducer(U,J,Ee)},lt.useRef=function(U){return z.H.useRef(U)},lt.useState=function(U){return z.H.useState(U)},lt.useSyncExternalStore=function(U,J,Ee){return z.H.useSyncExternalStore(U,J,Ee)},lt.useTransition=function(){return z.H.useTransition()},lt.version="19.2.7",lt}var U_;function Np(){return U_||(U_=1,Wd.exports=py()),Wd.exports}var ke=Np(),Yd={exports:{}},Al={},qd={exports:{}},jd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O_;function my(){return O_||(O_=1,(function(a){function e(H,V){var te=H.length;H.push(V);e:for(;0<te;){var ge=te-1>>>1,Se=H[ge];if(0<o(Se,V))H[ge]=V,H[te]=Se,te=ge;else break e}}function i(H){return H.length===0?null:H[0]}function r(H){if(H.length===0)return null;var V=H[0],te=H.pop();if(te!==V){H[0]=te;e:for(var ge=0,Se=H.length,U=Se>>>1;ge<U;){var J=2*(ge+1)-1,Ee=H[J],Re=J+1,De=H[Re];if(0>o(Ee,te))Re<Se&&0>o(De,Ee)?(H[ge]=De,H[Re]=te,ge=Re):(H[ge]=Ee,H[J]=te,ge=J);else if(Re<Se&&0>o(De,te))H[ge]=De,H[Re]=te,ge=Re;else break e}}return V}function o(H,V){var te=H.sortIndex-V.sortIndex;return te!==0?te:H.id-V.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;a.unstable_now=function(){return c.now()}}else{var u=Date,d=u.now();a.unstable_now=function(){return u.now()-d}}var m=[],h=[],g=1,v=null,_=3,S=!1,b=!1,R=!1,y=!1,x=typeof setTimeout=="function"?setTimeout:null,F=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;function w(H){for(var V=i(h);V!==null;){if(V.callback===null)r(h);else if(V.startTime<=H)r(h),V.sortIndex=V.expirationTime,e(m,V);else break;V=i(h)}}function O(H){if(R=!1,w(H),!b)if(i(m)!==null)b=!0,L||(L=!0,K());else{var V=i(h);V!==null&&Z(O,V.startTime-H)}}var L=!1,z=-1,T=5,N=-1;function q(){return y?!0:!(a.unstable_now()-N<T)}function X(){if(y=!1,L){var H=a.unstable_now();N=H;var V=!0;try{e:{b=!1,R&&(R=!1,F(z),z=-1),S=!0;var te=_;try{t:{for(w(H),v=i(m);v!==null&&!(v.expirationTime>H&&q());){var ge=v.callback;if(typeof ge=="function"){v.callback=null,_=v.priorityLevel;var Se=ge(v.expirationTime<=H);if(H=a.unstable_now(),typeof Se=="function"){v.callback=Se,w(H),V=!0;break t}v===i(m)&&r(m),w(H)}else r(m);v=i(m)}if(v!==null)V=!0;else{var U=i(h);U!==null&&Z(O,U.startTime-H),V=!1}}break e}finally{v=null,_=te,S=!1}V=void 0}}finally{V?K():L=!1}}}var K;if(typeof I=="function")K=function(){I(X)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,ue=ce.port2;ce.port1.onmessage=X,K=function(){ue.postMessage(null)}}else K=function(){x(X,0)};function Z(H,V){z=x(function(){H(a.unstable_now())},V)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(H){H.callback=null},a.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<H?Math.floor(1e3/H):5},a.unstable_getCurrentPriorityLevel=function(){return _},a.unstable_next=function(H){switch(_){case 1:case 2:case 3:var V=3;break;default:V=_}var te=_;_=V;try{return H()}finally{_=te}},a.unstable_requestPaint=function(){y=!0},a.unstable_runWithPriority=function(H,V){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var te=_;_=H;try{return V()}finally{_=te}},a.unstable_scheduleCallback=function(H,V,te){var ge=a.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?ge+te:ge):te=ge,H){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=te+Se,H={id:g++,callback:V,priorityLevel:H,startTime:te,expirationTime:Se,sortIndex:-1},te>ge?(H.sortIndex=te,e(h,H),i(m)===null&&H===i(h)&&(R?(F(z),z=-1):R=!0,Z(O,te-ge))):(H.sortIndex=Se,e(m,H),b||S||(b=!0,L||(L=!0,K()))),H},a.unstable_shouldYield=q,a.unstable_wrapCallback=function(H){var V=_;return function(){var te=_;_=V;try{return H.apply(this,arguments)}finally{_=te}}}})(jd)),jd}var P_;function gy(){return P_||(P_=1,qd.exports=my()),qd.exports}var Zd={exports:{}},Qn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I_;function _y(){if(I_)return Qn;I_=1;var a=Np();function e(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)h+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(m,h,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:v==null?null:""+v,children:m,containerInfo:h,implementation:g}}var u=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Qn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Qn.createPortal=function(m,h){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(e(299));return c(m,h,null,g)},Qn.flushSync=function(m){var h=u.T,g=r.p;try{if(u.T=null,r.p=2,m)return m()}finally{u.T=h,r.p=g,r.d.f()}},Qn.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,r.d.C(m,h))},Qn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Qn.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var g=h.as,v=d(g,h.crossOrigin),_=typeof h.integrity=="string"?h.integrity:void 0,S=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;g==="style"?r.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:v,integrity:_,fetchPriority:S}):g==="script"&&r.d.X(m,{crossOrigin:v,integrity:_,fetchPriority:S,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Qn.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var g=d(h.as,h.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&r.d.M(m)},Qn.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var g=h.as,v=d(g,h.crossOrigin);r.d.L(m,g,{crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Qn.preloadModule=function(m,h){if(typeof m=="string")if(h){var g=d(h.as,h.crossOrigin);r.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else r.d.m(m)},Qn.requestFormReset=function(m){r.d.r(m)},Qn.unstable_batchedUpdates=function(m,h){return m(h)},Qn.useFormState=function(m,h,g){return u.H.useFormState(m,h,g)},Qn.useFormStatus=function(){return u.H.useHostTransitionStatus()},Qn.version="19.2.7",Qn}var F_;function px(){if(F_)return Zd.exports;F_=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),Zd.exports=_y(),Zd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B_;function vy(){if(B_)return Al;B_=1;var a=gy(),e=Np(),i=px();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)n+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,s=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(s=n.return),t=n.return;while(t)}return n.tag===3?s:null}function u(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(r(188))}function h(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var s=t,l=n;;){var f=s.return;if(f===null)break;var p=f.alternate;if(p===null){if(l=f.return,l!==null){s=l;continue}break}if(f.child===p.child){for(p=f.child;p;){if(p===s)return m(f),t;if(p===l)return m(f),n;p=p.sibling}throw Error(r(188))}if(s.return!==l.return)s=f,l=p;else{for(var M=!1,C=f.child;C;){if(C===s){M=!0,s=f,l=p;break}if(C===l){M=!0,l=f,s=p;break}C=C.sibling}if(!M){for(C=p.child;C;){if(C===s){M=!0,s=p,l=f;break}if(C===l){M=!0,l=p,s=f;break}C=C.sibling}if(!M)throw Error(r(189))}}if(s.alternate!==l)throw Error(r(190))}if(s.tag!==3)throw Error(r(188));return s.stateNode.current===s?t:n}function g(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=g(t),n!==null)return n;t=t.sibling}return null}var v=Object.assign,_=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),F=Symbol.for("react.consumer"),I=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),L=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),q=Symbol.for("react.memo_cache_sentinel"),X=Symbol.iterator;function K(t){return t===null||typeof t!="object"?null:(t=X&&t[X]||t["@@iterator"],typeof t=="function"?t:null)}var ce=Symbol.for("react.client.reference");function ue(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ce?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case R:return"Fragment";case x:return"Profiler";case y:return"StrictMode";case O:return"Suspense";case L:return"SuspenseList";case N:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case b:return"Portal";case I:return t.displayName||"Context";case F:return(t._context.displayName||"Context")+".Consumer";case w:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case z:return n=t.displayName||null,n!==null?n:ue(t.type)||"Memo";case T:n=t._payload,t=t._init;try{return ue(t(n))}catch{}}return null}var Z=Array.isArray,H=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,te={pending:!1,data:null,method:null,action:null},ge=[],Se=-1;function U(t){return{current:t}}function J(t){0>Se||(t.current=ge[Se],ge[Se]=null,Se--)}function Ee(t,n){Se++,ge[Se]=t.current,t.current=n}var Re=U(null),De=U(null),ie=U(null),Me=U(null);function ve(t,n){switch(Ee(ie,n),Ee(De,t),Ee(Re,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?$g(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=$g(n),t=e_(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}J(Re),Ee(Re,t)}function We(){J(Re),J(De),J(ie)}function st(t){t.memoizedState!==null&&Ee(Me,t);var n=Re.current,s=e_(n,t.type);n!==s&&(Ee(De,t),Ee(Re,s))}function $e(t){De.current===t&&(J(Re),J(De)),Me.current===t&&(J(Me),Ml._currentValue=te)}var Yt,ht;function St(t){if(Yt===void 0)try{throw Error()}catch(s){var n=s.stack.trim().match(/\n( *(at )?)/);Yt=n&&n[1]||"",ht=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Yt+t+ht}var vt=!1;function et(t,n){if(!t||vt)return"";vt=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(n){var be=function(){throw Error()};if(Object.defineProperty(be.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(be,[])}catch(de){var le=de}Reflect.construct(t,[],be)}else{try{be.call()}catch(de){le=de}t.call(be.prototype)}}else{try{throw Error()}catch(de){le=de}(be=t())&&typeof be.catch=="function"&&be.catch(function(){})}}catch(de){if(de&&le&&typeof de.stack=="string")return[de.stack,le.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var p=l.DetermineComponentFrameRoot(),M=p[0],C=p[1];if(M&&C){var k=M.split(`
`),re=C.split(`
`);for(f=l=0;l<k.length&&!k[l].includes("DetermineComponentFrameRoot");)l++;for(;f<re.length&&!re[f].includes("DetermineComponentFrameRoot");)f++;if(l===k.length||f===re.length)for(l=k.length-1,f=re.length-1;1<=l&&0<=f&&k[l]!==re[f];)f--;for(;1<=l&&0<=f;l--,f--)if(k[l]!==re[f]){if(l!==1||f!==1)do if(l--,f--,0>f||k[l]!==re[f]){var xe=`
`+k[l].replace(" at new "," at ");return t.displayName&&xe.includes("<anonymous>")&&(xe=xe.replace("<anonymous>",t.displayName)),xe}while(1<=l&&0<=f);break}}}finally{vt=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?St(s):""}function Gt(t,n){switch(t.tag){case 26:case 27:case 5:return St(t.type);case 16:return St("Lazy");case 13:return t.child!==n&&n!==null?St("Suspense Fallback"):St("Suspense");case 19:return St("SuspenseList");case 0:case 15:return et(t.type,!1);case 11:return et(t.type.render,!1);case 1:return et(t.type,!0);case 31:return St("Activity");default:return""}}function Jt(t){try{var n="",s=null;do n+=Gt(t,s),s=t,t=t.return;while(t);return n}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var $t=Object.prototype.hasOwnProperty,en=a.unstable_scheduleCallback,Bt=a.unstable_cancelCallback,an=a.unstable_shouldYield,Q=a.unstable_requestPaint,Ut=a.unstable_now,Rt=a.unstable_getCurrentPriorityLevel,P=a.unstable_ImmediatePriority,E=a.unstable_UserBlockingPriority,ee=a.unstable_NormalPriority,ae=a.unstable_LowPriority,me=a.unstable_IdlePriority,Ue=a.log,Be=a.unstable_setDisableYieldValue,fe=null,pe=null;function we(t){if(typeof Ue=="function"&&Be(t),pe&&typeof pe.setStrictMode=="function")try{pe.setStrictMode(fe,t)}catch{}}var ze=Math.clz32?Math.clz32:je,Oe=Math.log,Fe=Math.LN2;function je(t){return t>>>=0,t===0?32:31-(Oe(t)/Fe|0)|0}var Ke=256,it=262144,W=4194304;function Le(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function _e(t,n,s){var l=t.pendingLanes;if(l===0)return 0;var f=0,p=t.suspendedLanes,M=t.pingedLanes;t=t.warmLanes;var C=l&134217727;return C!==0?(l=C&~p,l!==0?f=Le(l):(M&=C,M!==0?f=Le(M):s||(s=C&~t,s!==0&&(f=Le(s))))):(C=l&~p,C!==0?f=Le(C):M!==0?f=Le(M):s||(s=l&~t,s!==0&&(f=Le(s)))),f===0?0:n!==0&&n!==f&&(n&p)===0&&(p=f&-f,s=n&-n,p>=s||p===32&&(s&4194048)!==0)?n:f}function Ie(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Ge(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Te(){var t=W;return W<<=1,(W&62914560)===0&&(W=4194304),t}function Qe(t){for(var n=[],s=0;31>s;s++)n.push(t);return n}function Ye(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function qt(t,n,s,l,f,p){var M=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var C=t.entanglements,k=t.expirationTimes,re=t.hiddenUpdates;for(s=M&~s;0<s;){var xe=31-ze(s),be=1<<xe;C[xe]=0,k[xe]=-1;var le=re[xe];if(le!==null)for(re[xe]=null,xe=0;xe<le.length;xe++){var de=le[xe];de!==null&&(de.lane&=-536870913)}s&=~be}l!==0&&ut(t,l,0),p!==0&&f===0&&t.tag!==0&&(t.suspendedLanes|=p&~(M&~n))}function ut(t,n,s){t.pendingLanes|=n,t.suspendedLanes&=~n;var l=31-ze(n);t.entangledLanes|=n,t.entanglements[l]=t.entanglements[l]|1073741824|s&261930}function hn(t,n){var s=t.entangledLanes|=n;for(t=t.entanglements;s;){var l=31-ze(s),f=1<<l;f&n|t[l]&n&&(t[l]|=n),s&=~f}}function jt(t,n){var s=n&-n;return s=(s&42)!==0?1:ks(s),(s&(t.suspendedLanes|n))!==0?0:s}function ks(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Xs(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function ba(){var t=V.p;return t!==0?t:(t=window.event,t===void 0?32:E_(t.type))}function ns(t,n){var s=V.p;try{return V.p=t,n()}finally{V.p=s}}var ti=Math.random().toString(36).slice(2),sn="__reactFiber$"+ti,Sn="__reactProps$"+ti,zn="__reactContainer$"+ti,oa="__reactEvents$"+ti,Ws="__reactListeners$"+ti,Ys="__reactHandles$"+ti,Ci="__reactResources$"+ti,ji="__reactMarker$"+ti;function Zi(t){delete t[sn],delete t[Sn],delete t[oa],delete t[Ws],delete t[Ys]}function wi(t){var n=t[sn];if(n)return n;for(var s=t.parentNode;s;){if(n=s[zn]||s[sn]){if(s=n.alternate,n.child!==null||s!==null&&s.child!==null)for(t=o_(t);t!==null;){if(s=t[sn])return s;t=o_(t)}return n}t=s,s=t.parentNode}return null}function Di(t){if(t=t[sn]||t[zn]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function la(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function Ki(t){var n=t[Ci];return n||(n=t[Ci]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function pn(t){t[ji]=!0}var qs=new Set,A={};function j(t,n){oe(t,n),oe(t+"Capture",n)}function oe(t,n){for(A[t]=n,t=0;t<n.length;t++)qs.add(n[t])}var B=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),G={},he={};function Ae(t){return $t.call(he,t)?!0:$t.call(G,t)?!1:B.test(t)?he[t]=!0:(G[t]=!0,!1)}function Ce(t,n,s){if(Ae(n))if(s===null)t.removeAttribute(n);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var l=n.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+s)}}function Ne(t,n,s){if(s===null)t.removeAttribute(n);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+s)}}function Pe(t,n,s,l){if(l===null)t.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(n,s,""+l)}}function qe(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function tt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function He(t,n,s){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,p=l.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return f.call(this)},set:function(M){s=""+M,p.call(this,M)}}),Object.defineProperty(t,n,{enumerable:l.enumerable}),{getValue:function(){return s},setValue:function(M){s=""+M},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function ot(t){if(!t._valueTracker){var n=tt(t)?"checked":"value";t._valueTracker=He(t,n,""+t[n])}}function Mt(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var s=n.getValue(),l="";return t&&(l=tt(t)?t.checked?"true":"false":t.value),t=l,t!==s?(n.setValue(t),!0):!1}function ft(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Dt=/[\n"\\]/g;function _t(t){return t.replace(Dt,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ve(t,n,s,l,f,p,M,C){t.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?t.type=M:t.removeAttribute("type"),n!=null?M==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+qe(n)):t.value!==""+qe(n)&&(t.value=""+qe(n)):M!=="submit"&&M!=="reset"||t.removeAttribute("value"),n!=null?pt(t,M,qe(n)):s!=null?pt(t,M,qe(s)):l!=null&&t.removeAttribute("value"),f==null&&p!=null&&(t.defaultChecked=!!p),f!=null&&(t.checked=f&&typeof f!="function"&&typeof f!="symbol"),C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"?t.name=""+qe(C):t.removeAttribute("name")}function Mn(t,n,s,l,f,p,M,C){if(p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(t.type=p),n!=null||s!=null){if(!(p!=="submit"&&p!=="reset"||n!=null)){ot(t);return}s=s!=null?""+qe(s):"",n=n!=null?""+qe(n):s,C||n===t.value||(t.value=n),t.defaultValue=n}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=C?t.checked:!!l,t.defaultChecked=!!l,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(t.name=M),ot(t)}function pt(t,n,s){n==="number"&&ft(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function mn(t,n,s,l){if(t=t.options,n){n={};for(var f=0;f<s.length;f++)n["$"+s[f]]=!0;for(s=0;s<t.length;s++)f=n.hasOwnProperty("$"+t[s].value),t[s].selected!==f&&(t[s].selected=f),f&&l&&(t[s].defaultSelected=!0)}else{for(s=""+qe(s),n=null,f=0;f<t.length;f++){if(t[f].value===s){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}n!==null||t[f].disabled||(n=t[f])}n!==null&&(n.selected=!0)}}function On(t,n,s){if(n!=null&&(n=""+qe(n),n!==t.value&&(t.value=n),s==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=s!=null?""+qe(s):""}function ni(t,n,s,l){if(n==null){if(l!=null){if(s!=null)throw Error(r(92));if(Z(l)){if(1<l.length)throw Error(r(93));l=l[0]}s=l}s==null&&(s=""),n=s}s=qe(n),t.defaultValue=s,l=t.textContent,l===s&&l!==""&&l!==null&&(t.value=l),ot(t)}function Hn(t,n){if(n){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=n;return}}t.textContent=n}var Ot=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function tn(t,n,s){var l=n.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":l?t.setProperty(n,s):typeof s!="number"||s===0||Ot.has(n)?n==="float"?t.cssFloat=s:t[n]=(""+s).trim():t[n]=s+"px"}function ii(t,n,s){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||n!=null&&n.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var f in n)l=n[f],n.hasOwnProperty(f)&&s[f]!==l&&tn(t,f,l)}else for(var p in n)n.hasOwnProperty(p)&&tn(t,p,n[p])}function Lt(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pn=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Gn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ta(t){return Gn.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Qi(){}var Bo=null;function ql(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Li=null,is=null;function jl(t){var n=Di(t);if(n&&(t=n.stateNode)){var s=t[Sn]||null;e:switch(t=n.stateNode,n.type){case"input":if(Ve(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),n=s.name,s.type==="radio"&&n!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+_t(""+n)+'"][type="radio"]'),n=0;n<s.length;n++){var l=s[n];if(l!==t&&l.form===t.form){var f=l[Sn]||null;if(!f)throw Error(r(90));Ve(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(n=0;n<s.length;n++)l=s[n],l.form===t.form&&Mt(l)}break e;case"textarea":On(t,s.value,s.defaultValue);break e;case"select":n=s.value,n!=null&&mn(t,!!s.multiple,n,!1)}}}var Aa=!1;function Rr(t,n,s){if(Aa)return t(n,s);Aa=!0;try{var l=t(n);return l}finally{if(Aa=!1,(Li!==null||is!==null)&&(Uc(),Li&&(n=Li,t=is,is=Li=null,jl(n),t)))for(n=0;n<t.length;n++)jl(t[n])}}function js(t,n){var s=t.stateNode;if(s===null)return null;var l=s[Sn]||null;if(l===null)return null;s=l[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(r(231,n,typeof s));return s}var Ni=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Cr=!1;if(Ni)try{var Zs={};Object.defineProperty(Zs,"passive",{get:function(){Cr=!0}}),window.addEventListener("test",Zs,Zs),window.removeEventListener("test",Zs,Zs)}catch{Cr=!1}var Ui=null,as=null,Ra=null;function Zl(){if(Ra)return Ra;var t,n=as,s=n.length,l,f="value"in Ui?Ui.value:Ui.textContent,p=f.length;for(t=0;t<s&&n[t]===f[t];t++);var M=s-t;for(l=1;l<=M&&n[s-l]===f[p-l];l++);return Ra=f.slice(t,1<l?1-l:void 0)}function wr(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function zo(){return!0}function Ho(){return!1}function In(t){function n(s,l,f,p,M){this._reactName=s,this._targetInst=f,this.type=l,this.nativeEvent=p,this.target=M,this.currentTarget=null;for(var C in t)t.hasOwnProperty(C)&&(s=t[C],this[C]=s?s(p):p[C]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?zo:Ho,this.isPropagationStopped=Ho,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=zo)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=zo)},persist:function(){},isPersistent:zo}),n}var Ca={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Dr=In(Ca),Ks=v({},Ca,{view:0,detail:0}),Kl=In(Ks),Lr,bt,Kn,gi=v({},Ks,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ju,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Kn&&(Kn&&t.type==="mousemove"?(Lr=t.screenX-Kn.screenX,bt=t.screenY-Kn.screenY):bt=Lr=0,Kn=t),Lr)},movementY:function(t){return"movementY"in t?t.movementY:bt}}),Vn=In(gi),ca=v({},gi,{dataTransfer:0}),li=In(ca),ss=v({},Ks,{relatedTarget:0}),rs=In(ss),os=v({},Ca,{animationName:0,elapsedTime:0,pseudoElement:0}),ls=In(os),Go=v({},Ca,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ql=In(Go),vS=v({},Ca,{data:0}),im=In(vS),xS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},SS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},MS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yS(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=MS[t])?!!n[t]:!1}function ju(){return yS}var ES=v({},Ks,{key:function(t){if(t.key){var n=xS[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=wr(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?SS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ju,charCode:function(t){return t.type==="keypress"?wr(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?wr(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),bS=In(ES),TS=v({},gi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),am=In(TS),AS=v({},Ks,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ju}),RS=In(AS),CS=v({},Ca,{propertyName:0,elapsedTime:0,pseudoElement:0}),wS=In(CS),DS=v({},gi,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),LS=In(DS),NS=v({},Ca,{newState:0,oldState:0}),US=In(NS),OS=[9,13,27,32],Zu=Ni&&"CompositionEvent"in window,Vo=null;Ni&&"documentMode"in document&&(Vo=document.documentMode);var PS=Ni&&"TextEvent"in window&&!Vo,sm=Ni&&(!Zu||Vo&&8<Vo&&11>=Vo),rm=" ",om=!1;function lm(t,n){switch(t){case"keyup":return OS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Nr=!1;function IS(t,n){switch(t){case"compositionend":return cm(n);case"keypress":return n.which!==32?null:(om=!0,rm);case"textInput":return t=n.data,t===rm&&om?null:t;default:return null}}function FS(t,n){if(Nr)return t==="compositionend"||!Zu&&lm(t,n)?(t=Zl(),Ra=as=Ui=null,Nr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return sm&&n.locale!=="ko"?null:n.data;default:return null}}var BS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function um(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!BS[t.type]:n==="textarea"}function fm(t,n,s,l){Li?is?is.push(l):is=[l]:Li=l,n=Hc(n,"onChange"),0<n.length&&(s=new Dr("onChange","change",null,s,l),t.push({event:s,listeners:n}))}var ko=null,Xo=null;function zS(t){qg(t,0)}function Jl(t){var n=la(t);if(Mt(n))return t}function dm(t,n){if(t==="change")return n}var hm=!1;if(Ni){var Ku;if(Ni){var Qu="oninput"in document;if(!Qu){var pm=document.createElement("div");pm.setAttribute("oninput","return;"),Qu=typeof pm.oninput=="function"}Ku=Qu}else Ku=!1;hm=Ku&&(!document.documentMode||9<document.documentMode)}function mm(){ko&&(ko.detachEvent("onpropertychange",gm),Xo=ko=null)}function gm(t){if(t.propertyName==="value"&&Jl(Xo)){var n=[];fm(n,Xo,t,ql(t)),Rr(zS,n)}}function HS(t,n,s){t==="focusin"?(mm(),ko=n,Xo=s,ko.attachEvent("onpropertychange",gm)):t==="focusout"&&mm()}function GS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Jl(Xo)}function VS(t,n){if(t==="click")return Jl(n)}function kS(t,n){if(t==="input"||t==="change")return Jl(n)}function XS(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var _i=typeof Object.is=="function"?Object.is:XS;function Wo(t,n){if(_i(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var s=Object.keys(t),l=Object.keys(n);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var f=s[l];if(!$t.call(n,f)||!_i(t[f],n[f]))return!1}return!0}function _m(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function vm(t,n){var s=_m(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=n&&l>=n)return{node:s,offset:n-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=_m(s)}}function xm(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?xm(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Sm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=ft(t.document);n instanceof t.HTMLIFrameElement;){try{var s=typeof n.contentWindow.location.href=="string"}catch{s=!1}if(s)t=n.contentWindow;else break;n=ft(t.document)}return n}function Ju(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var WS=Ni&&"documentMode"in document&&11>=document.documentMode,Ur=null,$u=null,Yo=null,ef=!1;function Mm(t,n,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;ef||Ur==null||Ur!==ft(l)||(l=Ur,"selectionStart"in l&&Ju(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Yo&&Wo(Yo,l)||(Yo=l,l=Hc($u,"onSelect"),0<l.length&&(n=new Dr("onSelect","select",null,n,s),t.push({event:n,listeners:l}),n.target=Ur)))}function Qs(t,n){var s={};return s[t.toLowerCase()]=n.toLowerCase(),s["Webkit"+t]="webkit"+n,s["Moz"+t]="moz"+n,s}var Or={animationend:Qs("Animation","AnimationEnd"),animationiteration:Qs("Animation","AnimationIteration"),animationstart:Qs("Animation","AnimationStart"),transitionrun:Qs("Transition","TransitionRun"),transitionstart:Qs("Transition","TransitionStart"),transitioncancel:Qs("Transition","TransitionCancel"),transitionend:Qs("Transition","TransitionEnd")},tf={},ym={};Ni&&(ym=document.createElement("div").style,"AnimationEvent"in window||(delete Or.animationend.animation,delete Or.animationiteration.animation,delete Or.animationstart.animation),"TransitionEvent"in window||delete Or.transitionend.transition);function Js(t){if(tf[t])return tf[t];if(!Or[t])return t;var n=Or[t],s;for(s in n)if(n.hasOwnProperty(s)&&s in ym)return tf[t]=n[s];return t}var Em=Js("animationend"),bm=Js("animationiteration"),Tm=Js("animationstart"),YS=Js("transitionrun"),qS=Js("transitionstart"),jS=Js("transitioncancel"),Am=Js("transitionend"),Rm=new Map,nf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");nf.push("scrollEnd");function Ji(t,n){Rm.set(t,n),j(n,[t])}var $l=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Oi=[],Pr=0,af=0;function ec(){for(var t=Pr,n=af=Pr=0;n<t;){var s=Oi[n];Oi[n++]=null;var l=Oi[n];Oi[n++]=null;var f=Oi[n];Oi[n++]=null;var p=Oi[n];if(Oi[n++]=null,l!==null&&f!==null){var M=l.pending;M===null?f.next=f:(f.next=M.next,M.next=f),l.pending=f}p!==0&&Cm(s,f,p)}}function tc(t,n,s,l){Oi[Pr++]=t,Oi[Pr++]=n,Oi[Pr++]=s,Oi[Pr++]=l,af|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function sf(t,n,s,l){return tc(t,n,s,l),nc(t)}function $s(t,n){return tc(t,null,null,n),nc(t)}function Cm(t,n,s){t.lanes|=s;var l=t.alternate;l!==null&&(l.lanes|=s);for(var f=!1,p=t.return;p!==null;)p.childLanes|=s,l=p.alternate,l!==null&&(l.childLanes|=s),p.tag===22&&(t=p.stateNode,t===null||t._visibility&1||(f=!0)),t=p,p=p.return;return t.tag===3?(p=t.stateNode,f&&n!==null&&(f=31-ze(s),t=p.hiddenUpdates,l=t[f],l===null?t[f]=[n]:l.push(n),n.lane=s|536870912),p):null}function nc(t){if(50<pl)throw pl=0,pd=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Ir={};function ZS(t,n,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vi(t,n,s,l){return new ZS(t,n,s,l)}function rf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function wa(t,n){var s=t.alternate;return s===null?(s=vi(t.tag,n,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=n,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&65011712,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,n=t.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function wm(t,n){t.flags&=65011714;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,n=s.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function ic(t,n,s,l,f,p){var M=0;if(l=t,typeof t=="function")rf(t)&&(M=1);else if(typeof t=="string")M=ey(t,s,Re.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case N:return t=vi(31,s,n,f),t.elementType=N,t.lanes=p,t;case R:return er(s.children,f,p,n);case y:M=8,f|=24;break;case x:return t=vi(12,s,n,f|2),t.elementType=x,t.lanes=p,t;case O:return t=vi(13,s,n,f),t.elementType=O,t.lanes=p,t;case L:return t=vi(19,s,n,f),t.elementType=L,t.lanes=p,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case I:M=10;break e;case F:M=9;break e;case w:M=11;break e;case z:M=14;break e;case T:M=16,l=null;break e}M=29,s=Error(r(130,t===null?"null":typeof t,"")),l=null}return n=vi(M,s,n,f),n.elementType=t,n.type=l,n.lanes=p,n}function er(t,n,s,l){return t=vi(7,t,l,n),t.lanes=s,t}function of(t,n,s){return t=vi(6,t,null,n),t.lanes=s,t}function Dm(t){var n=vi(18,null,null,0);return n.stateNode=t,n}function lf(t,n,s){return n=vi(4,t.children!==null?t.children:[],t.key,n),n.lanes=s,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Lm=new WeakMap;function Pi(t,n){if(typeof t=="object"&&t!==null){var s=Lm.get(t);return s!==void 0?s:(n={value:t,source:n,stack:Jt(n)},Lm.set(t,n),n)}return{value:t,source:n,stack:Jt(n)}}var Fr=[],Br=0,ac=null,qo=0,Ii=[],Fi=0,cs=null,ua=1,fa="";function Da(t,n){Fr[Br++]=qo,Fr[Br++]=ac,ac=t,qo=n}function Nm(t,n,s){Ii[Fi++]=ua,Ii[Fi++]=fa,Ii[Fi++]=cs,cs=t;var l=ua;t=fa;var f=32-ze(l)-1;l&=~(1<<f),s+=1;var p=32-ze(n)+f;if(30<p){var M=f-f%5;p=(l&(1<<M)-1).toString(32),l>>=M,f-=M,ua=1<<32-ze(n)+f|s<<f|l,fa=p+t}else ua=1<<p|s<<f|l,fa=t}function cf(t){t.return!==null&&(Da(t,1),Nm(t,1,0))}function uf(t){for(;t===ac;)ac=Fr[--Br],Fr[Br]=null,qo=Fr[--Br],Fr[Br]=null;for(;t===cs;)cs=Ii[--Fi],Ii[Fi]=null,fa=Ii[--Fi],Ii[Fi]=null,ua=Ii[--Fi],Ii[Fi]=null}function Um(t,n){Ii[Fi++]=ua,Ii[Fi++]=fa,Ii[Fi++]=cs,ua=n.id,fa=n.overflow,cs=t}var kn=null,rn=null,Ct=!1,us=null,Bi=!1,ff=Error(r(519));function fs(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw jo(Pi(n,t)),ff}function Om(t){var n=t.stateNode,s=t.type,l=t.memoizedProps;switch(n[sn]=t,n[Sn]=l,s){case"dialog":Et("cancel",n),Et("close",n);break;case"iframe":case"object":case"embed":Et("load",n);break;case"video":case"audio":for(s=0;s<gl.length;s++)Et(gl[s],n);break;case"source":Et("error",n);break;case"img":case"image":case"link":Et("error",n),Et("load",n);break;case"details":Et("toggle",n);break;case"input":Et("invalid",n),Mn(n,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Et("invalid",n);break;case"textarea":Et("invalid",n),ni(n,l.value,l.defaultValue,l.children)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||n.textContent===""+s||l.suppressHydrationWarning===!0||Qg(n.textContent,s)?(l.popover!=null&&(Et("beforetoggle",n),Et("toggle",n)),l.onScroll!=null&&Et("scroll",n),l.onScrollEnd!=null&&Et("scrollend",n),l.onClick!=null&&(n.onclick=Qi),n=!0):n=!1,n||fs(t,!0)}function Pm(t){for(kn=t.return;kn;)switch(kn.tag){case 5:case 31:case 13:Bi=!1;return;case 27:case 3:Bi=!0;return;default:kn=kn.return}}function zr(t){if(t!==kn)return!1;if(!Ct)return Pm(t),Ct=!0,!1;var n=t.tag,s;if((s=n!==3&&n!==27)&&((s=n===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||wd(t.type,t.memoizedProps)),s=!s),s&&rn&&fs(t),Pm(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));rn=r_(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));rn=r_(t)}else n===27?(n=rn,Ts(t.type)?(t=Od,Od=null,rn=t):rn=n):rn=kn?Hi(t.stateNode.nextSibling):null;return!0}function tr(){rn=kn=null,Ct=!1}function df(){var t=us;return t!==null&&(di===null?di=t:di.push.apply(di,t),us=null),t}function jo(t){us===null?us=[t]:us.push(t)}var hf=U(null),nr=null,La=null;function ds(t,n,s){Ee(hf,n._currentValue),n._currentValue=s}function Na(t){t._currentValue=hf.current,J(hf)}function pf(t,n,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),t===s)break;t=t.return}}function mf(t,n,s,l){var f=t.child;for(f!==null&&(f.return=t);f!==null;){var p=f.dependencies;if(p!==null){var M=f.child;p=p.firstContext;e:for(;p!==null;){var C=p;p=f;for(var k=0;k<n.length;k++)if(C.context===n[k]){p.lanes|=s,C=p.alternate,C!==null&&(C.lanes|=s),pf(p.return,s,t),l||(M=null);break e}p=C.next}}else if(f.tag===18){if(M=f.return,M===null)throw Error(r(341));M.lanes|=s,p=M.alternate,p!==null&&(p.lanes|=s),pf(M,s,t),M=null}else M=f.child;if(M!==null)M.return=f;else for(M=f;M!==null;){if(M===t){M=null;break}if(f=M.sibling,f!==null){f.return=M.return,M=f;break}M=M.return}f=M}}function Hr(t,n,s,l){t=null;for(var f=n,p=!1;f!==null;){if(!p){if((f.flags&524288)!==0)p=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var M=f.alternate;if(M===null)throw Error(r(387));if(M=M.memoizedProps,M!==null){var C=f.type;_i(f.pendingProps.value,M.value)||(t!==null?t.push(C):t=[C])}}else if(f===Me.current){if(M=f.alternate,M===null)throw Error(r(387));M.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(t!==null?t.push(Ml):t=[Ml])}f=f.return}t!==null&&mf(n,t,s,l),n.flags|=262144}function sc(t){for(t=t.firstContext;t!==null;){if(!_i(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ir(t){nr=t,La=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Xn(t){return Im(nr,t)}function rc(t,n){return nr===null&&ir(t),Im(t,n)}function Im(t,n){var s=n._currentValue;if(n={context:n,memoizedValue:s,next:null},La===null){if(t===null)throw Error(r(308));La=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else La=La.next=n;return s}var KS=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(s,l){t.push(l)}};this.abort=function(){n.aborted=!0,t.forEach(function(s){return s()})}},QS=a.unstable_scheduleCallback,JS=a.unstable_NormalPriority,Tn={$$typeof:I,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function gf(){return{controller:new KS,data:new Map,refCount:0}}function Zo(t){t.refCount--,t.refCount===0&&QS(JS,function(){t.controller.abort()})}var Ko=null,_f=0,Gr=0,Vr=null;function $S(t,n){if(Ko===null){var s=Ko=[];_f=0,Gr=Sd(),Vr={status:"pending",value:void 0,then:function(l){s.push(l)}}}return _f++,n.then(Fm,Fm),n}function Fm(){if(--_f===0&&Ko!==null){Vr!==null&&(Vr.status="fulfilled");var t=Ko;Ko=null,Gr=0,Vr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function eM(t,n){var s=[],l={status:"pending",value:null,reason:null,then:function(f){s.push(f)}};return t.then(function(){l.status="fulfilled",l.value=n;for(var f=0;f<s.length;f++)(0,s[f])(n)},function(f){for(l.status="rejected",l.reason=f,f=0;f<s.length;f++)(0,s[f])(void 0)}),l}var Bm=H.S;H.S=function(t,n){Mg=Ut(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&$S(t,n),Bm!==null&&Bm(t,n)};var ar=U(null);function vf(){var t=ar.current;return t!==null?t:nn.pooledCache}function oc(t,n){n===null?Ee(ar,ar.current):Ee(ar,n.pool)}function zm(){var t=vf();return t===null?null:{parent:Tn._currentValue,pool:t}}var kr=Error(r(460)),xf=Error(r(474)),lc=Error(r(542)),cc={then:function(){}};function Hm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Gm(t,n,s){switch(s=t[s],s===void 0?t.push(n):s!==n&&(n.then(Qi,Qi),n=s),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,km(t),t;default:if(typeof n.status=="string")n.then(Qi,Qi);else{if(t=nn,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(l){if(n.status==="pending"){var f=n;f.status="fulfilled",f.value=l}},function(l){if(n.status==="pending"){var f=n;f.status="rejected",f.reason=l}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,km(t),t}throw rr=n,kr}}function sr(t){try{var n=t._init;return n(t._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(rr=s,kr):s}}var rr=null;function Vm(){if(rr===null)throw Error(r(459));var t=rr;return rr=null,t}function km(t){if(t===kr||t===lc)throw Error(r(483))}var Xr=null,Qo=0;function uc(t){var n=Qo;return Qo+=1,Xr===null&&(Xr=[]),Gm(Xr,t,n)}function Jo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function fc(t,n){throw n.$$typeof===_?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Xm(t){function n($,Y){if(t){var se=$.deletions;se===null?($.deletions=[Y],$.flags|=16):se.push(Y)}}function s($,Y){if(!t)return null;for(;Y!==null;)n($,Y),Y=Y.sibling;return null}function l($){for(var Y=new Map;$!==null;)$.key!==null?Y.set($.key,$):Y.set($.index,$),$=$.sibling;return Y}function f($,Y){return $=wa($,Y),$.index=0,$.sibling=null,$}function p($,Y,se){return $.index=se,t?(se=$.alternate,se!==null?(se=se.index,se<Y?($.flags|=67108866,Y):se):($.flags|=67108866,Y)):($.flags|=1048576,Y)}function M($){return t&&$.alternate===null&&($.flags|=67108866),$}function C($,Y,se,ye){return Y===null||Y.tag!==6?(Y=of(se,$.mode,ye),Y.return=$,Y):(Y=f(Y,se),Y.return=$,Y)}function k($,Y,se,ye){var nt=se.type;return nt===R?xe($,Y,se.props.children,ye,se.key):Y!==null&&(Y.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===T&&sr(nt)===Y.type)?(Y=f(Y,se.props),Jo(Y,se),Y.return=$,Y):(Y=ic(se.type,se.key,se.props,null,$.mode,ye),Jo(Y,se),Y.return=$,Y)}function re($,Y,se,ye){return Y===null||Y.tag!==4||Y.stateNode.containerInfo!==se.containerInfo||Y.stateNode.implementation!==se.implementation?(Y=lf(se,$.mode,ye),Y.return=$,Y):(Y=f(Y,se.children||[]),Y.return=$,Y)}function xe($,Y,se,ye,nt){return Y===null||Y.tag!==7?(Y=er(se,$.mode,ye,nt),Y.return=$,Y):(Y=f(Y,se),Y.return=$,Y)}function be($,Y,se){if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return Y=of(""+Y,$.mode,se),Y.return=$,Y;if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case S:return se=ic(Y.type,Y.key,Y.props,null,$.mode,se),Jo(se,Y),se.return=$,se;case b:return Y=lf(Y,$.mode,se),Y.return=$,Y;case T:return Y=sr(Y),be($,Y,se)}if(Z(Y)||K(Y))return Y=er(Y,$.mode,se,null),Y.return=$,Y;if(typeof Y.then=="function")return be($,uc(Y),se);if(Y.$$typeof===I)return be($,rc($,Y),se);fc($,Y)}return null}function le($,Y,se,ye){var nt=Y!==null?Y.key:null;if(typeof se=="string"&&se!==""||typeof se=="number"||typeof se=="bigint")return nt!==null?null:C($,Y,""+se,ye);if(typeof se=="object"&&se!==null){switch(se.$$typeof){case S:return se.key===nt?k($,Y,se,ye):null;case b:return se.key===nt?re($,Y,se,ye):null;case T:return se=sr(se),le($,Y,se,ye)}if(Z(se)||K(se))return nt!==null?null:xe($,Y,se,ye,null);if(typeof se.then=="function")return le($,Y,uc(se),ye);if(se.$$typeof===I)return le($,Y,rc($,se),ye);fc($,se)}return null}function de($,Y,se,ye,nt){if(typeof ye=="string"&&ye!==""||typeof ye=="number"||typeof ye=="bigint")return $=$.get(se)||null,C(Y,$,""+ye,nt);if(typeof ye=="object"&&ye!==null){switch(ye.$$typeof){case S:return $=$.get(ye.key===null?se:ye.key)||null,k(Y,$,ye,nt);case b:return $=$.get(ye.key===null?se:ye.key)||null,re(Y,$,ye,nt);case T:return ye=sr(ye),de($,Y,se,ye,nt)}if(Z(ye)||K(ye))return $=$.get(se)||null,xe(Y,$,ye,nt,null);if(typeof ye.then=="function")return de($,Y,se,uc(ye),nt);if(ye.$$typeof===I)return de($,Y,se,rc(Y,ye),nt);fc(Y,ye)}return null}function Ze($,Y,se,ye){for(var nt=null,Pt=null,Je=Y,mt=Y=0,At=null;Je!==null&&mt<se.length;mt++){Je.index>mt?(At=Je,Je=null):At=Je.sibling;var It=le($,Je,se[mt],ye);if(It===null){Je===null&&(Je=At);break}t&&Je&&It.alternate===null&&n($,Je),Y=p(It,Y,mt),Pt===null?nt=It:Pt.sibling=It,Pt=It,Je=At}if(mt===se.length)return s($,Je),Ct&&Da($,mt),nt;if(Je===null){for(;mt<se.length;mt++)Je=be($,se[mt],ye),Je!==null&&(Y=p(Je,Y,mt),Pt===null?nt=Je:Pt.sibling=Je,Pt=Je);return Ct&&Da($,mt),nt}for(Je=l(Je);mt<se.length;mt++)At=de(Je,$,mt,se[mt],ye),At!==null&&(t&&At.alternate!==null&&Je.delete(At.key===null?mt:At.key),Y=p(At,Y,mt),Pt===null?nt=At:Pt.sibling=At,Pt=At);return t&&Je.forEach(function(Ds){return n($,Ds)}),Ct&&Da($,mt),nt}function at($,Y,se,ye){if(se==null)throw Error(r(151));for(var nt=null,Pt=null,Je=Y,mt=Y=0,At=null,It=se.next();Je!==null&&!It.done;mt++,It=se.next()){Je.index>mt?(At=Je,Je=null):At=Je.sibling;var Ds=le($,Je,It.value,ye);if(Ds===null){Je===null&&(Je=At);break}t&&Je&&Ds.alternate===null&&n($,Je),Y=p(Ds,Y,mt),Pt===null?nt=Ds:Pt.sibling=Ds,Pt=Ds,Je=At}if(It.done)return s($,Je),Ct&&Da($,mt),nt;if(Je===null){for(;!It.done;mt++,It=se.next())It=be($,It.value,ye),It!==null&&(Y=p(It,Y,mt),Pt===null?nt=It:Pt.sibling=It,Pt=It);return Ct&&Da($,mt),nt}for(Je=l(Je);!It.done;mt++,It=se.next())It=de(Je,$,mt,It.value,ye),It!==null&&(t&&It.alternate!==null&&Je.delete(It.key===null?mt:It.key),Y=p(It,Y,mt),Pt===null?nt=It:Pt.sibling=It,Pt=It);return t&&Je.forEach(function(fy){return n($,fy)}),Ct&&Da($,mt),nt}function Qt($,Y,se,ye){if(typeof se=="object"&&se!==null&&se.type===R&&se.key===null&&(se=se.props.children),typeof se=="object"&&se!==null){switch(se.$$typeof){case S:e:{for(var nt=se.key;Y!==null;){if(Y.key===nt){if(nt=se.type,nt===R){if(Y.tag===7){s($,Y.sibling),ye=f(Y,se.props.children),ye.return=$,$=ye;break e}}else if(Y.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===T&&sr(nt)===Y.type){s($,Y.sibling),ye=f(Y,se.props),Jo(ye,se),ye.return=$,$=ye;break e}s($,Y);break}else n($,Y);Y=Y.sibling}se.type===R?(ye=er(se.props.children,$.mode,ye,se.key),ye.return=$,$=ye):(ye=ic(se.type,se.key,se.props,null,$.mode,ye),Jo(ye,se),ye.return=$,$=ye)}return M($);case b:e:{for(nt=se.key;Y!==null;){if(Y.key===nt)if(Y.tag===4&&Y.stateNode.containerInfo===se.containerInfo&&Y.stateNode.implementation===se.implementation){s($,Y.sibling),ye=f(Y,se.children||[]),ye.return=$,$=ye;break e}else{s($,Y);break}else n($,Y);Y=Y.sibling}ye=lf(se,$.mode,ye),ye.return=$,$=ye}return M($);case T:return se=sr(se),Qt($,Y,se,ye)}if(Z(se))return Ze($,Y,se,ye);if(K(se)){if(nt=K(se),typeof nt!="function")throw Error(r(150));return se=nt.call(se),at($,Y,se,ye)}if(typeof se.then=="function")return Qt($,Y,uc(se),ye);if(se.$$typeof===I)return Qt($,Y,rc($,se),ye);fc($,se)}return typeof se=="string"&&se!==""||typeof se=="number"||typeof se=="bigint"?(se=""+se,Y!==null&&Y.tag===6?(s($,Y.sibling),ye=f(Y,se),ye.return=$,$=ye):(s($,Y),ye=of(se,$.mode,ye),ye.return=$,$=ye),M($)):s($,Y)}return function($,Y,se,ye){try{Qo=0;var nt=Qt($,Y,se,ye);return Xr=null,nt}catch(Je){if(Je===kr||Je===lc)throw Je;var Pt=vi(29,Je,null,$.mode);return Pt.lanes=ye,Pt.return=$,Pt}finally{}}}var or=Xm(!0),Wm=Xm(!1),hs=!1;function Sf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Mf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ps(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ms(t,n,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(zt&2)!==0){var f=l.pending;return f===null?n.next=n:(n.next=f.next,f.next=n),l.pending=n,n=nc(t),Cm(t,null,s),n}return tc(t,l,n,s),nc(t)}function $o(t,n,s){if(n=n.updateQueue,n!==null&&(n=n.shared,(s&4194048)!==0)){var l=n.lanes;l&=t.pendingLanes,s|=l,n.lanes=s,hn(t,s)}}function yf(t,n){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var f=null,p=null;if(s=s.firstBaseUpdate,s!==null){do{var M={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};p===null?f=p=M:p=p.next=M,s=s.next}while(s!==null);p===null?f=p=n:p=p.next=n}else f=p=n;s={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:p,shared:l.shared,callbacks:l.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=n:t.next=n,s.lastBaseUpdate=n}var Ef=!1;function el(){if(Ef){var t=Vr;if(t!==null)throw t}}function tl(t,n,s,l){Ef=!1;var f=t.updateQueue;hs=!1;var p=f.firstBaseUpdate,M=f.lastBaseUpdate,C=f.shared.pending;if(C!==null){f.shared.pending=null;var k=C,re=k.next;k.next=null,M===null?p=re:M.next=re,M=k;var xe=t.alternate;xe!==null&&(xe=xe.updateQueue,C=xe.lastBaseUpdate,C!==M&&(C===null?xe.firstBaseUpdate=re:C.next=re,xe.lastBaseUpdate=k))}if(p!==null){var be=f.baseState;M=0,xe=re=k=null,C=p;do{var le=C.lane&-536870913,de=le!==C.lane;if(de?(Tt&le)===le:(l&le)===le){le!==0&&le===Gr&&(Ef=!0),xe!==null&&(xe=xe.next={lane:0,tag:C.tag,payload:C.payload,callback:null,next:null});e:{var Ze=t,at=C;le=n;var Qt=s;switch(at.tag){case 1:if(Ze=at.payload,typeof Ze=="function"){be=Ze.call(Qt,be,le);break e}be=Ze;break e;case 3:Ze.flags=Ze.flags&-65537|128;case 0:if(Ze=at.payload,le=typeof Ze=="function"?Ze.call(Qt,be,le):Ze,le==null)break e;be=v({},be,le);break e;case 2:hs=!0}}le=C.callback,le!==null&&(t.flags|=64,de&&(t.flags|=8192),de=f.callbacks,de===null?f.callbacks=[le]:de.push(le))}else de={lane:le,tag:C.tag,payload:C.payload,callback:C.callback,next:null},xe===null?(re=xe=de,k=be):xe=xe.next=de,M|=le;if(C=C.next,C===null){if(C=f.shared.pending,C===null)break;de=C,C=de.next,de.next=null,f.lastBaseUpdate=de,f.shared.pending=null}}while(!0);xe===null&&(k=be),f.baseState=k,f.firstBaseUpdate=re,f.lastBaseUpdate=xe,p===null&&(f.shared.lanes=0),Ss|=M,t.lanes=M,t.memoizedState=be}}function Ym(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function qm(t,n){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)Ym(s[t],n)}var Wr=U(null),dc=U(0);function jm(t,n){t=Ga,Ee(dc,t),Ee(Wr,n),Ga=t|n.baseLanes}function bf(){Ee(dc,Ga),Ee(Wr,Wr.current)}function Tf(){Ga=dc.current,J(Wr),J(dc)}var xi=U(null),zi=null;function gs(t){var n=t.alternate;Ee(yn,yn.current&1),Ee(xi,t),zi===null&&(n===null||Wr.current!==null||n.memoizedState!==null)&&(zi=t)}function Af(t){Ee(yn,yn.current),Ee(xi,t),zi===null&&(zi=t)}function Zm(t){t.tag===22?(Ee(yn,yn.current),Ee(xi,t),zi===null&&(zi=t)):_s()}function _s(){Ee(yn,yn.current),Ee(xi,xi.current)}function Si(t){J(xi),zi===t&&(zi=null),J(yn)}var yn=U(0);function hc(t){for(var n=t;n!==null;){if(n.tag===13){var s=n.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||Nd(s)||Ud(s)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ua=0,dt=null,Zt=null,An=null,pc=!1,Yr=!1,lr=!1,mc=0,nl=0,qr=null,tM=0;function gn(){throw Error(r(321))}function Rf(t,n){if(n===null)return!1;for(var s=0;s<n.length&&s<t.length;s++)if(!_i(t[s],n[s]))return!1;return!0}function Cf(t,n,s,l,f,p){return Ua=p,dt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,H.H=t===null||t.memoizedState===null?N0:kf,lr=!1,p=s(l,f),lr=!1,Yr&&(p=Qm(n,s,l,f)),Km(t),p}function Km(t){H.H=sl;var n=Zt!==null&&Zt.next!==null;if(Ua=0,An=Zt=dt=null,pc=!1,nl=0,qr=null,n)throw Error(r(300));t===null||Rn||(t=t.dependencies,t!==null&&sc(t)&&(Rn=!0))}function Qm(t,n,s,l){dt=t;var f=0;do{if(Yr&&(qr=null),nl=0,Yr=!1,25<=f)throw Error(r(301));if(f+=1,An=Zt=null,t.updateQueue!=null){var p=t.updateQueue;p.lastEffect=null,p.events=null,p.stores=null,p.memoCache!=null&&(p.memoCache.index=0)}H.H=U0,p=n(s,l)}while(Yr);return p}function nM(){var t=H.H,n=t.useState()[0];return n=typeof n.then=="function"?il(n):n,t=t.useState()[0],(Zt!==null?Zt.memoizedState:null)!==t&&(dt.flags|=1024),n}function wf(){var t=mc!==0;return mc=0,t}function Df(t,n,s){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~s}function Lf(t){if(pc){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}pc=!1}Ua=0,An=Zt=dt=null,Yr=!1,nl=mc=0,qr=null}function ai(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return An===null?dt.memoizedState=An=t:An=An.next=t,An}function En(){if(Zt===null){var t=dt.alternate;t=t!==null?t.memoizedState:null}else t=Zt.next;var n=An===null?dt.memoizedState:An.next;if(n!==null)An=n,Zt=t;else{if(t===null)throw dt.alternate===null?Error(r(467)):Error(r(310));Zt=t,t={memoizedState:Zt.memoizedState,baseState:Zt.baseState,baseQueue:Zt.baseQueue,queue:Zt.queue,next:null},An===null?dt.memoizedState=An=t:An=An.next=t}return An}function gc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function il(t){var n=nl;return nl+=1,qr===null&&(qr=[]),t=Gm(qr,t,n),n=dt,(An===null?n.memoizedState:An.next)===null&&(n=n.alternate,H.H=n===null||n.memoizedState===null?N0:kf),t}function _c(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return il(t);if(t.$$typeof===I)return Xn(t)}throw Error(r(438,String(t)))}function Nf(t){var n=null,s=dt.updateQueue;if(s!==null&&(n=s.memoCache),n==null){var l=dt.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(n={data:l.data.map(function(f){return f.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),s===null&&(s=gc(),dt.updateQueue=s),s.memoCache=n,s=n.data[n.index],s===void 0)for(s=n.data[n.index]=Array(t),l=0;l<t;l++)s[l]=q;return n.index++,s}function Oa(t,n){return typeof n=="function"?n(t):n}function vc(t){var n=En();return Uf(n,Zt,t)}function Uf(t,n,s){var l=t.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=s;var f=t.baseQueue,p=l.pending;if(p!==null){if(f!==null){var M=f.next;f.next=p.next,p.next=M}n.baseQueue=f=p,l.pending=null}if(p=t.baseState,f===null)t.memoizedState=p;else{n=f.next;var C=M=null,k=null,re=n,xe=!1;do{var be=re.lane&-536870913;if(be!==re.lane?(Tt&be)===be:(Ua&be)===be){var le=re.revertLane;if(le===0)k!==null&&(k=k.next={lane:0,revertLane:0,gesture:null,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null}),be===Gr&&(xe=!0);else if((Ua&le)===le){re=re.next,le===Gr&&(xe=!0);continue}else be={lane:0,revertLane:re.revertLane,gesture:null,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null},k===null?(C=k=be,M=p):k=k.next=be,dt.lanes|=le,Ss|=le;be=re.action,lr&&s(p,be),p=re.hasEagerState?re.eagerState:s(p,be)}else le={lane:be,revertLane:re.revertLane,gesture:re.gesture,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null},k===null?(C=k=le,M=p):k=k.next=le,dt.lanes|=be,Ss|=be;re=re.next}while(re!==null&&re!==n);if(k===null?M=p:k.next=C,!_i(p,t.memoizedState)&&(Rn=!0,xe&&(s=Vr,s!==null)))throw s;t.memoizedState=p,t.baseState=M,t.baseQueue=k,l.lastRenderedState=p}return f===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function Of(t){var n=En(),s=n.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=t;var l=s.dispatch,f=s.pending,p=n.memoizedState;if(f!==null){s.pending=null;var M=f=f.next;do p=t(p,M.action),M=M.next;while(M!==f);_i(p,n.memoizedState)||(Rn=!0),n.memoizedState=p,n.baseQueue===null&&(n.baseState=p),s.lastRenderedState=p}return[p,l]}function Jm(t,n,s){var l=dt,f=En(),p=Ct;if(p){if(s===void 0)throw Error(r(407));s=s()}else s=n();var M=!_i((Zt||f).memoizedState,s);if(M&&(f.memoizedState=s,Rn=!0),f=f.queue,Ff(t0.bind(null,l,f,t),[t]),f.getSnapshot!==n||M||An!==null&&An.memoizedState.tag&1){if(l.flags|=2048,jr(9,{destroy:void 0},e0.bind(null,l,f,s,n),null),nn===null)throw Error(r(349));p||(Ua&127)!==0||$m(l,n,s)}return s}function $m(t,n,s){t.flags|=16384,t={getSnapshot:n,value:s},n=dt.updateQueue,n===null?(n=gc(),dt.updateQueue=n,n.stores=[t]):(s=n.stores,s===null?n.stores=[t]:s.push(t))}function e0(t,n,s,l){n.value=s,n.getSnapshot=l,n0(n)&&i0(t)}function t0(t,n,s){return s(function(){n0(n)&&i0(t)})}function n0(t){var n=t.getSnapshot;t=t.value;try{var s=n();return!_i(t,s)}catch{return!0}}function i0(t){var n=$s(t,2);n!==null&&hi(n,t,2)}function Pf(t){var n=ai();if(typeof t=="function"){var s=t;if(t=s(),lr){we(!0);try{s()}finally{we(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Oa,lastRenderedState:t},n}function a0(t,n,s,l){return t.baseState=s,Uf(t,Zt,typeof l=="function"?l:Oa)}function iM(t,n,s,l,f){if(Mc(t))throw Error(r(485));if(t=n.action,t!==null){var p={payload:f,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){p.listeners.push(M)}};H.T!==null?s(!0):p.isTransition=!1,l(p),s=n.pending,s===null?(p.next=n.pending=p,s0(n,p)):(p.next=s.next,n.pending=s.next=p)}}function s0(t,n){var s=n.action,l=n.payload,f=t.state;if(n.isTransition){var p=H.T,M={};H.T=M;try{var C=s(f,l),k=H.S;k!==null&&k(M,C),r0(t,n,C)}catch(re){If(t,n,re)}finally{p!==null&&M.types!==null&&(p.types=M.types),H.T=p}}else try{p=s(f,l),r0(t,n,p)}catch(re){If(t,n,re)}}function r0(t,n,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){o0(t,n,l)},function(l){return If(t,n,l)}):o0(t,n,s)}function o0(t,n,s){n.status="fulfilled",n.value=s,l0(n),t.state=s,n=t.pending,n!==null&&(s=n.next,s===n?t.pending=null:(s=s.next,n.next=s,s0(t,s)))}function If(t,n,s){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do n.status="rejected",n.reason=s,l0(n),n=n.next;while(n!==l)}t.action=null}function l0(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function c0(t,n){return n}function u0(t,n){if(Ct){var s=nn.formState;if(s!==null){e:{var l=dt;if(Ct){if(rn){t:{for(var f=rn,p=Bi;f.nodeType!==8;){if(!p){f=null;break t}if(f=Hi(f.nextSibling),f===null){f=null;break t}}p=f.data,f=p==="F!"||p==="F"?f:null}if(f){rn=Hi(f.nextSibling),l=f.data==="F!";break e}}fs(l)}l=!1}l&&(n=s[0])}}return s=ai(),s.memoizedState=s.baseState=n,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:c0,lastRenderedState:n},s.queue=l,s=w0.bind(null,dt,l),l.dispatch=s,l=Pf(!1),p=Vf.bind(null,dt,!1,l.queue),l=ai(),f={state:n,dispatch:null,action:t,pending:null},l.queue=f,s=iM.bind(null,dt,f,p,s),f.dispatch=s,l.memoizedState=t,[n,s,!1]}function f0(t){var n=En();return d0(n,Zt,t)}function d0(t,n,s){if(n=Uf(t,n,c0)[0],t=vc(Oa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var l=il(n)}catch(M){throw M===kr?lc:M}else l=n;n=En();var f=n.queue,p=f.dispatch;return s!==n.memoizedState&&(dt.flags|=2048,jr(9,{destroy:void 0},aM.bind(null,f,s),null)),[l,p,t]}function aM(t,n){t.action=n}function h0(t){var n=En(),s=Zt;if(s!==null)return d0(n,s,t);En(),n=n.memoizedState,s=En();var l=s.queue.dispatch;return s.memoizedState=t,[n,l,!1]}function jr(t,n,s,l){return t={tag:t,create:s,deps:l,inst:n,next:null},n=dt.updateQueue,n===null&&(n=gc(),dt.updateQueue=n),s=n.lastEffect,s===null?n.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,n.lastEffect=t),t}function p0(){return En().memoizedState}function xc(t,n,s,l){var f=ai();dt.flags|=t,f.memoizedState=jr(1|n,{destroy:void 0},s,l===void 0?null:l)}function Sc(t,n,s,l){var f=En();l=l===void 0?null:l;var p=f.memoizedState.inst;Zt!==null&&l!==null&&Rf(l,Zt.memoizedState.deps)?f.memoizedState=jr(n,p,s,l):(dt.flags|=t,f.memoizedState=jr(1|n,p,s,l))}function m0(t,n){xc(8390656,8,t,n)}function Ff(t,n){Sc(2048,8,t,n)}function sM(t){dt.flags|=4;var n=dt.updateQueue;if(n===null)n=gc(),dt.updateQueue=n,n.events=[t];else{var s=n.events;s===null?n.events=[t]:s.push(t)}}function g0(t){var n=En().memoizedState;return sM({ref:n,nextImpl:t}),function(){if((zt&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function _0(t,n){return Sc(4,2,t,n)}function v0(t,n){return Sc(4,4,t,n)}function x0(t,n){if(typeof n=="function"){t=t();var s=n(t);return function(){typeof s=="function"?s():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function S0(t,n,s){s=s!=null?s.concat([t]):null,Sc(4,4,x0.bind(null,n,t),s)}function Bf(){}function M0(t,n){var s=En();n=n===void 0?null:n;var l=s.memoizedState;return n!==null&&Rf(n,l[1])?l[0]:(s.memoizedState=[t,n],t)}function y0(t,n){var s=En();n=n===void 0?null:n;var l=s.memoizedState;if(n!==null&&Rf(n,l[1]))return l[0];if(l=t(),lr){we(!0);try{t()}finally{we(!1)}}return s.memoizedState=[l,n],l}function zf(t,n,s){return s===void 0||(Ua&1073741824)!==0&&(Tt&261930)===0?t.memoizedState=n:(t.memoizedState=s,t=Eg(),dt.lanes|=t,Ss|=t,s)}function E0(t,n,s,l){return _i(s,n)?s:Wr.current!==null?(t=zf(t,s,l),_i(t,n)||(Rn=!0),t):(Ua&42)===0||(Ua&1073741824)!==0&&(Tt&261930)===0?(Rn=!0,t.memoizedState=s):(t=Eg(),dt.lanes|=t,Ss|=t,n)}function b0(t,n,s,l,f){var p=V.p;V.p=p!==0&&8>p?p:8;var M=H.T,C={};H.T=C,Vf(t,!1,n,s);try{var k=f(),re=H.S;if(re!==null&&re(C,k),k!==null&&typeof k=="object"&&typeof k.then=="function"){var xe=eM(k,l);al(t,n,xe,Ei(t))}else al(t,n,l,Ei(t))}catch(be){al(t,n,{then:function(){},status:"rejected",reason:be},Ei())}finally{V.p=p,M!==null&&C.types!==null&&(M.types=C.types),H.T=M}}function rM(){}function Hf(t,n,s,l){if(t.tag!==5)throw Error(r(476));var f=T0(t).queue;b0(t,f,n,te,s===null?rM:function(){return A0(t),s(l)})}function T0(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:te,baseState:te,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Oa,lastRenderedState:te},next:null};var s={};return n.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Oa,lastRenderedState:s},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function A0(t){var n=T0(t);n.next===null&&(n=t.alternate.memoizedState),al(t,n.next.queue,{},Ei())}function Gf(){return Xn(Ml)}function R0(){return En().memoizedState}function C0(){return En().memoizedState}function oM(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var s=Ei();t=ps(s);var l=ms(n,t,s);l!==null&&(hi(l,n,s),$o(l,n,s)),n={cache:gf()},t.payload=n;return}n=n.return}}function lM(t,n,s){var l=Ei();s={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Mc(t)?D0(n,s):(s=sf(t,n,s,l),s!==null&&(hi(s,t,l),L0(s,n,l)))}function w0(t,n,s){var l=Ei();al(t,n,s,l)}function al(t,n,s,l){var f={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(Mc(t))D0(n,f);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=n.lastRenderedReducer,p!==null))try{var M=n.lastRenderedState,C=p(M,s);if(f.hasEagerState=!0,f.eagerState=C,_i(C,M))return tc(t,n,f,0),nn===null&&ec(),!1}catch{}finally{}if(s=sf(t,n,f,l),s!==null)return hi(s,t,l),L0(s,n,l),!0}return!1}function Vf(t,n,s,l){if(l={lane:2,revertLane:Sd(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Mc(t)){if(n)throw Error(r(479))}else n=sf(t,s,l,2),n!==null&&hi(n,t,2)}function Mc(t){var n=t.alternate;return t===dt||n!==null&&n===dt}function D0(t,n){Yr=pc=!0;var s=t.pending;s===null?n.next=n:(n.next=s.next,s.next=n),t.pending=n}function L0(t,n,s){if((s&4194048)!==0){var l=n.lanes;l&=t.pendingLanes,s|=l,n.lanes=s,hn(t,s)}}var sl={readContext:Xn,use:_c,useCallback:gn,useContext:gn,useEffect:gn,useImperativeHandle:gn,useLayoutEffect:gn,useInsertionEffect:gn,useMemo:gn,useReducer:gn,useRef:gn,useState:gn,useDebugValue:gn,useDeferredValue:gn,useTransition:gn,useSyncExternalStore:gn,useId:gn,useHostTransitionStatus:gn,useFormState:gn,useActionState:gn,useOptimistic:gn,useMemoCache:gn,useCacheRefresh:gn};sl.useEffectEvent=gn;var N0={readContext:Xn,use:_c,useCallback:function(t,n){return ai().memoizedState=[t,n===void 0?null:n],t},useContext:Xn,useEffect:m0,useImperativeHandle:function(t,n,s){s=s!=null?s.concat([t]):null,xc(4194308,4,x0.bind(null,n,t),s)},useLayoutEffect:function(t,n){return xc(4194308,4,t,n)},useInsertionEffect:function(t,n){xc(4,2,t,n)},useMemo:function(t,n){var s=ai();n=n===void 0?null:n;var l=t();if(lr){we(!0);try{t()}finally{we(!1)}}return s.memoizedState=[l,n],l},useReducer:function(t,n,s){var l=ai();if(s!==void 0){var f=s(n);if(lr){we(!0);try{s(n)}finally{we(!1)}}}else f=n;return l.memoizedState=l.baseState=f,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:f},l.queue=t,t=t.dispatch=lM.bind(null,dt,t),[l.memoizedState,t]},useRef:function(t){var n=ai();return t={current:t},n.memoizedState=t},useState:function(t){t=Pf(t);var n=t.queue,s=w0.bind(null,dt,n);return n.dispatch=s,[t.memoizedState,s]},useDebugValue:Bf,useDeferredValue:function(t,n){var s=ai();return zf(s,t,n)},useTransition:function(){var t=Pf(!1);return t=b0.bind(null,dt,t.queue,!0,!1),ai().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,s){var l=dt,f=ai();if(Ct){if(s===void 0)throw Error(r(407));s=s()}else{if(s=n(),nn===null)throw Error(r(349));(Tt&127)!==0||$m(l,n,s)}f.memoizedState=s;var p={value:s,getSnapshot:n};return f.queue=p,m0(t0.bind(null,l,p,t),[t]),l.flags|=2048,jr(9,{destroy:void 0},e0.bind(null,l,p,s,n),null),s},useId:function(){var t=ai(),n=nn.identifierPrefix;if(Ct){var s=fa,l=ua;s=(l&~(1<<32-ze(l)-1)).toString(32)+s,n="_"+n+"R_"+s,s=mc++,0<s&&(n+="H"+s.toString(32)),n+="_"}else s=tM++,n="_"+n+"r_"+s.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Gf,useFormState:u0,useActionState:u0,useOptimistic:function(t){var n=ai();n.memoizedState=n.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=s,n=Vf.bind(null,dt,!0,s),s.dispatch=n,[t,n]},useMemoCache:Nf,useCacheRefresh:function(){return ai().memoizedState=oM.bind(null,dt)},useEffectEvent:function(t){var n=ai(),s={impl:t};return n.memoizedState=s,function(){if((zt&2)!==0)throw Error(r(440));return s.impl.apply(void 0,arguments)}}},kf={readContext:Xn,use:_c,useCallback:M0,useContext:Xn,useEffect:Ff,useImperativeHandle:S0,useInsertionEffect:_0,useLayoutEffect:v0,useMemo:y0,useReducer:vc,useRef:p0,useState:function(){return vc(Oa)},useDebugValue:Bf,useDeferredValue:function(t,n){var s=En();return E0(s,Zt.memoizedState,t,n)},useTransition:function(){var t=vc(Oa)[0],n=En().memoizedState;return[typeof t=="boolean"?t:il(t),n]},useSyncExternalStore:Jm,useId:R0,useHostTransitionStatus:Gf,useFormState:f0,useActionState:f0,useOptimistic:function(t,n){var s=En();return a0(s,Zt,t,n)},useMemoCache:Nf,useCacheRefresh:C0};kf.useEffectEvent=g0;var U0={readContext:Xn,use:_c,useCallback:M0,useContext:Xn,useEffect:Ff,useImperativeHandle:S0,useInsertionEffect:_0,useLayoutEffect:v0,useMemo:y0,useReducer:Of,useRef:p0,useState:function(){return Of(Oa)},useDebugValue:Bf,useDeferredValue:function(t,n){var s=En();return Zt===null?zf(s,t,n):E0(s,Zt.memoizedState,t,n)},useTransition:function(){var t=Of(Oa)[0],n=En().memoizedState;return[typeof t=="boolean"?t:il(t),n]},useSyncExternalStore:Jm,useId:R0,useHostTransitionStatus:Gf,useFormState:h0,useActionState:h0,useOptimistic:function(t,n){var s=En();return Zt!==null?a0(s,Zt,t,n):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:Nf,useCacheRefresh:C0};U0.useEffectEvent=g0;function Xf(t,n,s,l){n=t.memoizedState,s=s(l,n),s=s==null?n:v({},n,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var Wf={enqueueSetState:function(t,n,s){t=t._reactInternals;var l=Ei(),f=ps(l);f.payload=n,s!=null&&(f.callback=s),n=ms(t,f,l),n!==null&&(hi(n,t,l),$o(n,t,l))},enqueueReplaceState:function(t,n,s){t=t._reactInternals;var l=Ei(),f=ps(l);f.tag=1,f.payload=n,s!=null&&(f.callback=s),n=ms(t,f,l),n!==null&&(hi(n,t,l),$o(n,t,l))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var s=Ei(),l=ps(s);l.tag=2,n!=null&&(l.callback=n),n=ms(t,l,s),n!==null&&(hi(n,t,s),$o(n,t,s))}};function O0(t,n,s,l,f,p,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,p,M):n.prototype&&n.prototype.isPureReactComponent?!Wo(s,l)||!Wo(f,p):!0}function P0(t,n,s,l){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(s,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(s,l),n.state!==t&&Wf.enqueueReplaceState(n,n.state,null)}function cr(t,n){var s=n;if("ref"in n){s={};for(var l in n)l!=="ref"&&(s[l]=n[l])}if(t=t.defaultProps){s===n&&(s=v({},s));for(var f in t)s[f]===void 0&&(s[f]=t[f])}return s}function I0(t){$l(t)}function F0(t){console.error(t)}function B0(t){$l(t)}function yc(t,n){try{var s=t.onUncaughtError;s(n.value,{componentStack:n.stack})}catch(l){setTimeout(function(){throw l})}}function z0(t,n,s){try{var l=t.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Yf(t,n,s){return s=ps(s),s.tag=3,s.payload={element:null},s.callback=function(){yc(t,n)},s}function H0(t){return t=ps(t),t.tag=3,t}function G0(t,n,s,l){var f=s.type.getDerivedStateFromError;if(typeof f=="function"){var p=l.value;t.payload=function(){return f(p)},t.callback=function(){z0(n,s,l)}}var M=s.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(t.callback=function(){z0(n,s,l),typeof f!="function"&&(Ms===null?Ms=new Set([this]):Ms.add(this));var C=l.stack;this.componentDidCatch(l.value,{componentStack:C!==null?C:""})})}function cM(t,n,s,l,f){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(n=s.alternate,n!==null&&Hr(n,s,f,!0),s=xi.current,s!==null){switch(s.tag){case 31:case 13:return zi===null?Oc():s.alternate===null&&_n===0&&(_n=3),s.flags&=-257,s.flags|=65536,s.lanes=f,l===cc?s.flags|=16384:(n=s.updateQueue,n===null?s.updateQueue=new Set([l]):n.add(l),_d(t,l,f)),!1;case 22:return s.flags|=65536,l===cc?s.flags|=16384:(n=s.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=n):(s=n.retryQueue,s===null?n.retryQueue=new Set([l]):s.add(l)),_d(t,l,f)),!1}throw Error(r(435,s.tag))}return _d(t,l,f),Oc(),!1}if(Ct)return n=xi.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=f,l!==ff&&(t=Error(r(422),{cause:l}),jo(Pi(t,s)))):(l!==ff&&(n=Error(r(423),{cause:l}),jo(Pi(n,s))),t=t.current.alternate,t.flags|=65536,f&=-f,t.lanes|=f,l=Pi(l,s),f=Yf(t.stateNode,l,f),yf(t,f),_n!==4&&(_n=2)),!1;var p=Error(r(520),{cause:l});if(p=Pi(p,s),hl===null?hl=[p]:hl.push(p),_n!==4&&(_n=2),n===null)return!0;l=Pi(l,s),s=n;do{switch(s.tag){case 3:return s.flags|=65536,t=f&-f,s.lanes|=t,t=Yf(s.stateNode,l,t),yf(s,t),!1;case 1:if(n=s.type,p=s.stateNode,(s.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Ms===null||!Ms.has(p))))return s.flags|=65536,f&=-f,s.lanes|=f,f=H0(f),G0(f,t,s,l),yf(s,f),!1}s=s.return}while(s!==null);return!1}var qf=Error(r(461)),Rn=!1;function Wn(t,n,s,l){n.child=t===null?Wm(n,null,s,l):or(n,t.child,s,l)}function V0(t,n,s,l,f){s=s.render;var p=n.ref;if("ref"in l){var M={};for(var C in l)C!=="ref"&&(M[C]=l[C])}else M=l;return ir(n),l=Cf(t,n,s,M,p,f),C=wf(),t!==null&&!Rn?(Df(t,n,f),Pa(t,n,f)):(Ct&&C&&cf(n),n.flags|=1,Wn(t,n,l,f),n.child)}function k0(t,n,s,l,f){if(t===null){var p=s.type;return typeof p=="function"&&!rf(p)&&p.defaultProps===void 0&&s.compare===null?(n.tag=15,n.type=p,X0(t,n,p,l,f)):(t=ic(s.type,null,l,n,n.mode,f),t.ref=n.ref,t.return=n,n.child=t)}if(p=t.child,!td(t,f)){var M=p.memoizedProps;if(s=s.compare,s=s!==null?s:Wo,s(M,l)&&t.ref===n.ref)return Pa(t,n,f)}return n.flags|=1,t=wa(p,l),t.ref=n.ref,t.return=n,n.child=t}function X0(t,n,s,l,f){if(t!==null){var p=t.memoizedProps;if(Wo(p,l)&&t.ref===n.ref)if(Rn=!1,n.pendingProps=l=p,td(t,f))(t.flags&131072)!==0&&(Rn=!0);else return n.lanes=t.lanes,Pa(t,n,f)}return jf(t,n,s,l,f)}function W0(t,n,s,l){var f=l.children,p=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((n.flags&128)!==0){if(p=p!==null?p.baseLanes|s:s,t!==null){for(l=n.child=t.child,f=0;l!==null;)f=f|l.lanes|l.childLanes,l=l.sibling;l=f&~p}else l=0,n.child=null;return Y0(t,n,p,s,l)}if((s&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&oc(n,p!==null?p.cachePool:null),p!==null?jm(n,p):bf(),Zm(n);else return l=n.lanes=536870912,Y0(t,n,p!==null?p.baseLanes|s:s,s,l)}else p!==null?(oc(n,p.cachePool),jm(n,p),_s(),n.memoizedState=null):(t!==null&&oc(n,null),bf(),_s());return Wn(t,n,f,s),n.child}function rl(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Y0(t,n,s,l,f){var p=vf();return p=p===null?null:{parent:Tn._currentValue,pool:p},n.memoizedState={baseLanes:s,cachePool:p},t!==null&&oc(n,null),bf(),Zm(n),t!==null&&Hr(t,n,l,!0),n.childLanes=f,null}function Ec(t,n){return n=Tc({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function q0(t,n,s){return or(n,t.child,null,s),t=Ec(n,n.pendingProps),t.flags|=2,Si(n),n.memoizedState=null,t}function uM(t,n,s){var l=n.pendingProps,f=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Ct){if(l.mode==="hidden")return t=Ec(n,l),n.lanes=536870912,rl(null,t);if(Af(n),(t=rn)?(t=s_(t,Bi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:cs!==null?{id:ua,overflow:fa}:null,retryLane:536870912,hydrationErrors:null},s=Dm(t),s.return=n,n.child=s,kn=n,rn=null)):t=null,t===null)throw fs(n);return n.lanes=536870912,null}return Ec(n,l)}var p=t.memoizedState;if(p!==null){var M=p.dehydrated;if(Af(n),f)if(n.flags&256)n.flags&=-257,n=q0(t,n,s);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(Rn||Hr(t,n,s,!1),f=(s&t.childLanes)!==0,Rn||f){if(l=nn,l!==null&&(M=jt(l,s),M!==0&&M!==p.retryLane))throw p.retryLane=M,$s(t,M),hi(l,t,M),qf;Oc(),n=q0(t,n,s)}else t=p.treeContext,rn=Hi(M.nextSibling),kn=n,Ct=!0,us=null,Bi=!1,t!==null&&Um(n,t),n=Ec(n,l),n.flags|=4096;return n}return t=wa(t.child,{mode:l.mode,children:l.children}),t.ref=n.ref,n.child=t,t.return=n,t}function bc(t,n){var s=n.ref;if(s===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(r(284));(t===null||t.ref!==s)&&(n.flags|=4194816)}}function jf(t,n,s,l,f){return ir(n),s=Cf(t,n,s,l,void 0,f),l=wf(),t!==null&&!Rn?(Df(t,n,f),Pa(t,n,f)):(Ct&&l&&cf(n),n.flags|=1,Wn(t,n,s,f),n.child)}function j0(t,n,s,l,f,p){return ir(n),n.updateQueue=null,s=Qm(n,l,s,f),Km(t),l=wf(),t!==null&&!Rn?(Df(t,n,p),Pa(t,n,p)):(Ct&&l&&cf(n),n.flags|=1,Wn(t,n,s,p),n.child)}function Z0(t,n,s,l,f){if(ir(n),n.stateNode===null){var p=Ir,M=s.contextType;typeof M=="object"&&M!==null&&(p=Xn(M)),p=new s(l,p),n.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,p.updater=Wf,n.stateNode=p,p._reactInternals=n,p=n.stateNode,p.props=l,p.state=n.memoizedState,p.refs={},Sf(n),M=s.contextType,p.context=typeof M=="object"&&M!==null?Xn(M):Ir,p.state=n.memoizedState,M=s.getDerivedStateFromProps,typeof M=="function"&&(Xf(n,s,M,l),p.state=n.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(M=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),M!==p.state&&Wf.enqueueReplaceState(p,p.state,null),tl(n,l,p,f),el(),p.state=n.memoizedState),typeof p.componentDidMount=="function"&&(n.flags|=4194308),l=!0}else if(t===null){p=n.stateNode;var C=n.memoizedProps,k=cr(s,C);p.props=k;var re=p.context,xe=s.contextType;M=Ir,typeof xe=="object"&&xe!==null&&(M=Xn(xe));var be=s.getDerivedStateFromProps;xe=typeof be=="function"||typeof p.getSnapshotBeforeUpdate=="function",C=n.pendingProps!==C,xe||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(C||re!==M)&&P0(n,p,l,M),hs=!1;var le=n.memoizedState;p.state=le,tl(n,l,p,f),el(),re=n.memoizedState,C||le!==re||hs?(typeof be=="function"&&(Xf(n,s,be,l),re=n.memoizedState),(k=hs||O0(n,s,k,l,le,re,M))?(xe||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(n.flags|=4194308)):(typeof p.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=re),p.props=l,p.state=re,p.context=M,l=k):(typeof p.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{p=n.stateNode,Mf(t,n),M=n.memoizedProps,xe=cr(s,M),p.props=xe,be=n.pendingProps,le=p.context,re=s.contextType,k=Ir,typeof re=="object"&&re!==null&&(k=Xn(re)),C=s.getDerivedStateFromProps,(re=typeof C=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(M!==be||le!==k)&&P0(n,p,l,k),hs=!1,le=n.memoizedState,p.state=le,tl(n,l,p,f),el();var de=n.memoizedState;M!==be||le!==de||hs||t!==null&&t.dependencies!==null&&sc(t.dependencies)?(typeof C=="function"&&(Xf(n,s,C,l),de=n.memoizedState),(xe=hs||O0(n,s,xe,l,le,de,k)||t!==null&&t.dependencies!==null&&sc(t.dependencies))?(re||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(l,de,k),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(l,de,k)),typeof p.componentDidUpdate=="function"&&(n.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof p.componentDidUpdate!="function"||M===t.memoizedProps&&le===t.memoizedState||(n.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||M===t.memoizedProps&&le===t.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=de),p.props=l,p.state=de,p.context=k,l=xe):(typeof p.componentDidUpdate!="function"||M===t.memoizedProps&&le===t.memoizedState||(n.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||M===t.memoizedProps&&le===t.memoizedState||(n.flags|=1024),l=!1)}return p=l,bc(t,n),l=(n.flags&128)!==0,p||l?(p=n.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:p.render(),n.flags|=1,t!==null&&l?(n.child=or(n,t.child,null,f),n.child=or(n,null,s,f)):Wn(t,n,s,f),n.memoizedState=p.state,t=n.child):t=Pa(t,n,f),t}function K0(t,n,s,l){return tr(),n.flags|=256,Wn(t,n,s,l),n.child}var Zf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Kf(t){return{baseLanes:t,cachePool:zm()}}function Qf(t,n,s){return t=t!==null?t.childLanes&~s:0,n&&(t|=yi),t}function Q0(t,n,s){var l=n.pendingProps,f=!1,p=(n.flags&128)!==0,M;if((M=p)||(M=t!==null&&t.memoizedState===null?!1:(yn.current&2)!==0),M&&(f=!0,n.flags&=-129),M=(n.flags&32)!==0,n.flags&=-33,t===null){if(Ct){if(f?gs(n):_s(),(t=rn)?(t=s_(t,Bi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:cs!==null?{id:ua,overflow:fa}:null,retryLane:536870912,hydrationErrors:null},s=Dm(t),s.return=n,n.child=s,kn=n,rn=null)):t=null,t===null)throw fs(n);return Ud(t)?n.lanes=32:n.lanes=536870912,null}var C=l.children;return l=l.fallback,f?(_s(),f=n.mode,C=Tc({mode:"hidden",children:C},f),l=er(l,f,s,null),C.return=n,l.return=n,C.sibling=l,n.child=C,l=n.child,l.memoizedState=Kf(s),l.childLanes=Qf(t,M,s),n.memoizedState=Zf,rl(null,l)):(gs(n),Jf(n,C))}var k=t.memoizedState;if(k!==null&&(C=k.dehydrated,C!==null)){if(p)n.flags&256?(gs(n),n.flags&=-257,n=$f(t,n,s)):n.memoizedState!==null?(_s(),n.child=t.child,n.flags|=128,n=null):(_s(),C=l.fallback,f=n.mode,l=Tc({mode:"visible",children:l.children},f),C=er(C,f,s,null),C.flags|=2,l.return=n,C.return=n,l.sibling=C,n.child=l,or(n,t.child,null,s),l=n.child,l.memoizedState=Kf(s),l.childLanes=Qf(t,M,s),n.memoizedState=Zf,n=rl(null,l));else if(gs(n),Ud(C)){if(M=C.nextSibling&&C.nextSibling.dataset,M)var re=M.dgst;M=re,l=Error(r(419)),l.stack="",l.digest=M,jo({value:l,source:null,stack:null}),n=$f(t,n,s)}else if(Rn||Hr(t,n,s,!1),M=(s&t.childLanes)!==0,Rn||M){if(M=nn,M!==null&&(l=jt(M,s),l!==0&&l!==k.retryLane))throw k.retryLane=l,$s(t,l),hi(M,t,l),qf;Nd(C)||Oc(),n=$f(t,n,s)}else Nd(C)?(n.flags|=192,n.child=t.child,n=null):(t=k.treeContext,rn=Hi(C.nextSibling),kn=n,Ct=!0,us=null,Bi=!1,t!==null&&Um(n,t),n=Jf(n,l.children),n.flags|=4096);return n}return f?(_s(),C=l.fallback,f=n.mode,k=t.child,re=k.sibling,l=wa(k,{mode:"hidden",children:l.children}),l.subtreeFlags=k.subtreeFlags&65011712,re!==null?C=wa(re,C):(C=er(C,f,s,null),C.flags|=2),C.return=n,l.return=n,l.sibling=C,n.child=l,rl(null,l),l=n.child,C=t.child.memoizedState,C===null?C=Kf(s):(f=C.cachePool,f!==null?(k=Tn._currentValue,f=f.parent!==k?{parent:k,pool:k}:f):f=zm(),C={baseLanes:C.baseLanes|s,cachePool:f}),l.memoizedState=C,l.childLanes=Qf(t,M,s),n.memoizedState=Zf,rl(t.child,l)):(gs(n),s=t.child,t=s.sibling,s=wa(s,{mode:"visible",children:l.children}),s.return=n,s.sibling=null,t!==null&&(M=n.deletions,M===null?(n.deletions=[t],n.flags|=16):M.push(t)),n.child=s,n.memoizedState=null,s)}function Jf(t,n){return n=Tc({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Tc(t,n){return t=vi(22,t,null,n),t.lanes=0,t}function $f(t,n,s){return or(n,t.child,null,s),t=Jf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function J0(t,n,s){t.lanes|=n;var l=t.alternate;l!==null&&(l.lanes|=n),pf(t.return,n,s)}function ed(t,n,s,l,f,p){var M=t.memoizedState;M===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:f,treeForkCount:p}:(M.isBackwards=n,M.rendering=null,M.renderingStartTime=0,M.last=l,M.tail=s,M.tailMode=f,M.treeForkCount=p)}function $0(t,n,s){var l=n.pendingProps,f=l.revealOrder,p=l.tail;l=l.children;var M=yn.current,C=(M&2)!==0;if(C?(M=M&1|2,n.flags|=128):M&=1,Ee(yn,M),Wn(t,n,l,s),l=Ct?qo:0,!C&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&J0(t,s,n);else if(t.tag===19)J0(t,s,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(f){case"forwards":for(s=n.child,f=null;s!==null;)t=s.alternate,t!==null&&hc(t)===null&&(f=s),s=s.sibling;s=f,s===null?(f=n.child,n.child=null):(f=s.sibling,s.sibling=null),ed(n,!1,f,s,p,l);break;case"backwards":case"unstable_legacy-backwards":for(s=null,f=n.child,n.child=null;f!==null;){if(t=f.alternate,t!==null&&hc(t)===null){n.child=f;break}t=f.sibling,f.sibling=s,s=f,f=t}ed(n,!0,s,null,p,l);break;case"together":ed(n,!1,null,null,void 0,l);break;default:n.memoizedState=null}return n.child}function Pa(t,n,s){if(t!==null&&(n.dependencies=t.dependencies),Ss|=n.lanes,(s&n.childLanes)===0)if(t!==null){if(Hr(t,n,s,!1),(s&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,s=wa(t,t.pendingProps),n.child=s,s.return=n;t.sibling!==null;)t=t.sibling,s=s.sibling=wa(t,t.pendingProps),s.return=n;s.sibling=null}return n.child}function td(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&sc(t)))}function fM(t,n,s){switch(n.tag){case 3:ve(n,n.stateNode.containerInfo),ds(n,Tn,t.memoizedState.cache),tr();break;case 27:case 5:st(n);break;case 4:ve(n,n.stateNode.containerInfo);break;case 10:ds(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Af(n),null;break;case 13:var l=n.memoizedState;if(l!==null)return l.dehydrated!==null?(gs(n),n.flags|=128,null):(s&n.child.childLanes)!==0?Q0(t,n,s):(gs(n),t=Pa(t,n,s),t!==null?t.sibling:null);gs(n);break;case 19:var f=(t.flags&128)!==0;if(l=(s&n.childLanes)!==0,l||(Hr(t,n,s,!1),l=(s&n.childLanes)!==0),f){if(l)return $0(t,n,s);n.flags|=128}if(f=n.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Ee(yn,yn.current),l)break;return null;case 22:return n.lanes=0,W0(t,n,s,n.pendingProps);case 24:ds(n,Tn,t.memoizedState.cache)}return Pa(t,n,s)}function eg(t,n,s){if(t!==null)if(t.memoizedProps!==n.pendingProps)Rn=!0;else{if(!td(t,s)&&(n.flags&128)===0)return Rn=!1,fM(t,n,s);Rn=(t.flags&131072)!==0}else Rn=!1,Ct&&(n.flags&1048576)!==0&&Nm(n,qo,n.index);switch(n.lanes=0,n.tag){case 16:e:{var l=n.pendingProps;if(t=sr(n.elementType),n.type=t,typeof t=="function")rf(t)?(l=cr(t,l),n.tag=1,n=Z0(null,n,t,l,s)):(n.tag=0,n=jf(null,n,t,l,s));else{if(t!=null){var f=t.$$typeof;if(f===w){n.tag=11,n=V0(null,n,t,l,s);break e}else if(f===z){n.tag=14,n=k0(null,n,t,l,s);break e}}throw n=ue(t)||t,Error(r(306,n,""))}}return n;case 0:return jf(t,n,n.type,n.pendingProps,s);case 1:return l=n.type,f=cr(l,n.pendingProps),Z0(t,n,l,f,s);case 3:e:{if(ve(n,n.stateNode.containerInfo),t===null)throw Error(r(387));l=n.pendingProps;var p=n.memoizedState;f=p.element,Mf(t,n),tl(n,l,null,s);var M=n.memoizedState;if(l=M.cache,ds(n,Tn,l),l!==p.cache&&mf(n,[Tn],s,!0),el(),l=M.element,p.isDehydrated)if(p={element:l,isDehydrated:!1,cache:M.cache},n.updateQueue.baseState=p,n.memoizedState=p,n.flags&256){n=K0(t,n,l,s);break e}else if(l!==f){f=Pi(Error(r(424)),n),jo(f),n=K0(t,n,l,s);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(rn=Hi(t.firstChild),kn=n,Ct=!0,us=null,Bi=!0,s=Wm(n,null,l,s),n.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(tr(),l===f){n=Pa(t,n,s);break e}Wn(t,n,l,s)}n=n.child}return n;case 26:return bc(t,n),t===null?(s=f_(n.type,null,n.pendingProps,null))?n.memoizedState=s:Ct||(s=n.type,t=n.pendingProps,l=Gc(ie.current).createElement(s),l[sn]=n,l[Sn]=t,Yn(l,s,t),pn(l),n.stateNode=l):n.memoizedState=f_(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return st(n),t===null&&Ct&&(l=n.stateNode=l_(n.type,n.pendingProps,ie.current),kn=n,Bi=!0,f=rn,Ts(n.type)?(Od=f,rn=Hi(l.firstChild)):rn=f),Wn(t,n,n.pendingProps.children,s),bc(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Ct&&((f=l=rn)&&(l=GM(l,n.type,n.pendingProps,Bi),l!==null?(n.stateNode=l,kn=n,rn=Hi(l.firstChild),Bi=!1,f=!0):f=!1),f||fs(n)),st(n),f=n.type,p=n.pendingProps,M=t!==null?t.memoizedProps:null,l=p.children,wd(f,p)?l=null:M!==null&&wd(f,M)&&(n.flags|=32),n.memoizedState!==null&&(f=Cf(t,n,nM,null,null,s),Ml._currentValue=f),bc(t,n),Wn(t,n,l,s),n.child;case 6:return t===null&&Ct&&((t=s=rn)&&(s=VM(s,n.pendingProps,Bi),s!==null?(n.stateNode=s,kn=n,rn=null,t=!0):t=!1),t||fs(n)),null;case 13:return Q0(t,n,s);case 4:return ve(n,n.stateNode.containerInfo),l=n.pendingProps,t===null?n.child=or(n,null,l,s):Wn(t,n,l,s),n.child;case 11:return V0(t,n,n.type,n.pendingProps,s);case 7:return Wn(t,n,n.pendingProps,s),n.child;case 8:return Wn(t,n,n.pendingProps.children,s),n.child;case 12:return Wn(t,n,n.pendingProps.children,s),n.child;case 10:return l=n.pendingProps,ds(n,n.type,l.value),Wn(t,n,l.children,s),n.child;case 9:return f=n.type._context,l=n.pendingProps.children,ir(n),f=Xn(f),l=l(f),n.flags|=1,Wn(t,n,l,s),n.child;case 14:return k0(t,n,n.type,n.pendingProps,s);case 15:return X0(t,n,n.type,n.pendingProps,s);case 19:return $0(t,n,s);case 31:return uM(t,n,s);case 22:return W0(t,n,s,n.pendingProps);case 24:return ir(n),l=Xn(Tn),t===null?(f=vf(),f===null&&(f=nn,p=gf(),f.pooledCache=p,p.refCount++,p!==null&&(f.pooledCacheLanes|=s),f=p),n.memoizedState={parent:l,cache:f},Sf(n),ds(n,Tn,f)):((t.lanes&s)!==0&&(Mf(t,n),tl(n,null,null,s),el()),f=t.memoizedState,p=n.memoizedState,f.parent!==l?(f={parent:l,cache:l},n.memoizedState=f,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=f),ds(n,Tn,l)):(l=p.cache,ds(n,Tn,l),l!==f.cache&&mf(n,[Tn],s,!0))),Wn(t,n,n.pendingProps.children,s),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Ia(t){t.flags|=4}function nd(t,n,s,l,f){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(f&335544128)===f)if(t.stateNode.complete)t.flags|=8192;else if(Rg())t.flags|=8192;else throw rr=cc,xf}else t.flags&=-16777217}function tg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!g_(n))if(Rg())t.flags|=8192;else throw rr=cc,xf}function Ac(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Te():536870912,t.lanes|=n,Jr|=n)}function ol(t,n){if(!Ct)switch(t.tailMode){case"hidden":n=t.tail;for(var s=null;n!==null;)n.alternate!==null&&(s=n),n=n.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function on(t){var n=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(n)for(var f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=s,n}function dM(t,n,s){var l=n.pendingProps;switch(uf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return on(n),null;case 1:return on(n),null;case 3:return s=n.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),n.memoizedState.cache!==l&&(n.flags|=2048),Na(Tn),We(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(zr(n)?Ia(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,df())),on(n),null;case 26:var f=n.type,p=n.memoizedState;return t===null?(Ia(n),p!==null?(on(n),tg(n,p)):(on(n),nd(n,f,null,l,s))):p?p!==t.memoizedState?(Ia(n),on(n),tg(n,p)):(on(n),n.flags&=-16777217):(t=t.memoizedProps,t!==l&&Ia(n),on(n),nd(n,f,t,l,s)),null;case 27:if($e(n),s=ie.current,f=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==l&&Ia(n);else{if(!l){if(n.stateNode===null)throw Error(r(166));return on(n),null}t=Re.current,zr(n)?Om(n):(t=l_(f,l,s),n.stateNode=t,Ia(n))}return on(n),null;case 5:if($e(n),f=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==l&&Ia(n);else{if(!l){if(n.stateNode===null)throw Error(r(166));return on(n),null}if(p=Re.current,zr(n))Om(n);else{var M=Gc(ie.current);switch(p){case 1:p=M.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:p=M.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":p=M.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":p=M.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":p=M.createElement("div"),p.innerHTML="<script><\/script>",p=p.removeChild(p.firstChild);break;case"select":p=typeof l.is=="string"?M.createElement("select",{is:l.is}):M.createElement("select"),l.multiple?p.multiple=!0:l.size&&(p.size=l.size);break;default:p=typeof l.is=="string"?M.createElement(f,{is:l.is}):M.createElement(f)}}p[sn]=n,p[Sn]=l;e:for(M=n.child;M!==null;){if(M.tag===5||M.tag===6)p.appendChild(M.stateNode);else if(M.tag!==4&&M.tag!==27&&M.child!==null){M.child.return=M,M=M.child;continue}if(M===n)break e;for(;M.sibling===null;){if(M.return===null||M.return===n)break e;M=M.return}M.sibling.return=M.return,M=M.sibling}n.stateNode=p;e:switch(Yn(p,f,l),f){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Ia(n)}}return on(n),nd(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,s),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==l&&Ia(n);else{if(typeof l!="string"&&n.stateNode===null)throw Error(r(166));if(t=ie.current,zr(n)){if(t=n.stateNode,s=n.memoizedProps,l=null,f=kn,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}t[sn]=n,t=!!(t.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||Qg(t.nodeValue,s)),t||fs(n,!0)}else t=Gc(t).createTextNode(l),t[sn]=n,n.stateNode=t}return on(n),null;case 31:if(s=n.memoizedState,t===null||t.memoizedState!==null){if(l=zr(n),s!==null){if(t===null){if(!l)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[sn]=n}else tr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;on(n),t=!1}else s=df(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=s),t=!0;if(!t)return n.flags&256?(Si(n),n):(Si(n),null);if((n.flags&128)!==0)throw Error(r(558))}return on(n),null;case 13:if(l=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(f=zr(n),l!==null&&l.dehydrated!==null){if(t===null){if(!f)throw Error(r(318));if(f=n.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(r(317));f[sn]=n}else tr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;on(n),f=!1}else f=df(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=f),f=!0;if(!f)return n.flags&256?(Si(n),n):(Si(n),null)}return Si(n),(n.flags&128)!==0?(n.lanes=s,n):(s=l!==null,t=t!==null&&t.memoizedState!==null,s&&(l=n.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool),p=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(p=l.memoizedState.cachePool.pool),p!==f&&(l.flags|=2048)),s!==t&&s&&(n.child.flags|=8192),Ac(n,n.updateQueue),on(n),null);case 4:return We(),t===null&&bd(n.stateNode.containerInfo),on(n),null;case 10:return Na(n.type),on(n),null;case 19:if(J(yn),l=n.memoizedState,l===null)return on(n),null;if(f=(n.flags&128)!==0,p=l.rendering,p===null)if(f)ol(l,!1);else{if(_n!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(p=hc(t),p!==null){for(n.flags|=128,ol(l,!1),t=p.updateQueue,n.updateQueue=t,Ac(n,t),n.subtreeFlags=0,t=s,s=n.child;s!==null;)wm(s,t),s=s.sibling;return Ee(yn,yn.current&1|2),Ct&&Da(n,l.treeForkCount),n.child}t=t.sibling}l.tail!==null&&Ut()>Lc&&(n.flags|=128,f=!0,ol(l,!1),n.lanes=4194304)}else{if(!f)if(t=hc(p),t!==null){if(n.flags|=128,f=!0,t=t.updateQueue,n.updateQueue=t,Ac(n,t),ol(l,!0),l.tail===null&&l.tailMode==="hidden"&&!p.alternate&&!Ct)return on(n),null}else 2*Ut()-l.renderingStartTime>Lc&&s!==536870912&&(n.flags|=128,f=!0,ol(l,!1),n.lanes=4194304);l.isBackwards?(p.sibling=n.child,n.child=p):(t=l.last,t!==null?t.sibling=p:n.child=p,l.last=p)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Ut(),t.sibling=null,s=yn.current,Ee(yn,f?s&1|2:s&1),Ct&&Da(n,l.treeForkCount),t):(on(n),null);case 22:case 23:return Si(n),Tf(),l=n.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(n.flags|=8192):l&&(n.flags|=8192),l?(s&536870912)!==0&&(n.flags&128)===0&&(on(n),n.subtreeFlags&6&&(n.flags|=8192)):on(n),s=n.updateQueue,s!==null&&Ac(n,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),l=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(l=n.memoizedState.cachePool.pool),l!==s&&(n.flags|=2048),t!==null&&J(ar),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Na(Tn),on(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function hM(t,n){switch(uf(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Na(Tn),We(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return $e(n),null;case 31:if(n.memoizedState!==null){if(Si(n),n.alternate===null)throw Error(r(340));tr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Si(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));tr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return J(yn),null;case 4:return We(),null;case 10:return Na(n.type),null;case 22:case 23:return Si(n),Tf(),t!==null&&J(ar),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Na(Tn),null;case 25:return null;default:return null}}function ng(t,n){switch(uf(n),n.tag){case 3:Na(Tn),We();break;case 26:case 27:case 5:$e(n);break;case 4:We();break;case 31:n.memoizedState!==null&&Si(n);break;case 13:Si(n);break;case 19:J(yn);break;case 10:Na(n.type);break;case 22:case 23:Si(n),Tf(),t!==null&&J(ar);break;case 24:Na(Tn)}}function ll(t,n){try{var s=n.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var f=l.next;s=f;do{if((s.tag&t)===t){l=void 0;var p=s.create,M=s.inst;l=p(),M.destroy=l}s=s.next}while(s!==f)}}catch(C){Xt(n,n.return,C)}}function vs(t,n,s){try{var l=n.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var p=f.next;l=p;do{if((l.tag&t)===t){var M=l.inst,C=M.destroy;if(C!==void 0){M.destroy=void 0,f=n;var k=s,re=C;try{re()}catch(xe){Xt(f,k,xe)}}}l=l.next}while(l!==p)}}catch(xe){Xt(n,n.return,xe)}}function ig(t){var n=t.updateQueue;if(n!==null){var s=t.stateNode;try{qm(n,s)}catch(l){Xt(t,t.return,l)}}}function ag(t,n,s){s.props=cr(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(l){Xt(t,n,l)}}function cl(t,n){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof s=="function"?t.refCleanup=s(l):s.current=l}}catch(f){Xt(t,n,f)}}function da(t,n){var s=t.ref,l=t.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(f){Xt(t,n,f)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(f){Xt(t,n,f)}else s.current=null}function sg(t){var n=t.type,s=t.memoizedProps,l=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break e;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(f){Xt(t,t.return,f)}}function id(t,n,s){try{var l=t.stateNode;PM(l,t.type,s,n),l[Sn]=n}catch(f){Xt(t,t.return,f)}}function rg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ts(t.type)||t.tag===4}function ad(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||rg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ts(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function sd(t,n,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,n?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(t,n):(n=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,n.appendChild(t),s=s._reactRootContainer,s!=null||n.onclick!==null||(n.onclick=Qi));else if(l!==4&&(l===27&&Ts(t.type)&&(s=t.stateNode,n=null),t=t.child,t!==null))for(sd(t,n,s),t=t.sibling;t!==null;)sd(t,n,s),t=t.sibling}function Rc(t,n,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,n?s.insertBefore(t,n):s.appendChild(t);else if(l!==4&&(l===27&&Ts(t.type)&&(s=t.stateNode),t=t.child,t!==null))for(Rc(t,n,s),t=t.sibling;t!==null;)Rc(t,n,s),t=t.sibling}function og(t){var n=t.stateNode,s=t.memoizedProps;try{for(var l=t.type,f=n.attributes;f.length;)n.removeAttributeNode(f[0]);Yn(n,l,s),n[sn]=t,n[Sn]=s}catch(p){Xt(t,t.return,p)}}var Fa=!1,Cn=!1,rd=!1,lg=typeof WeakSet=="function"?WeakSet:Set,Fn=null;function pM(t,n){if(t=t.containerInfo,Rd=jc,t=Sm(t),Ju(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var f=l.anchorOffset,p=l.focusNode;l=l.focusOffset;try{s.nodeType,p.nodeType}catch{s=null;break e}var M=0,C=-1,k=-1,re=0,xe=0,be=t,le=null;t:for(;;){for(var de;be!==s||f!==0&&be.nodeType!==3||(C=M+f),be!==p||l!==0&&be.nodeType!==3||(k=M+l),be.nodeType===3&&(M+=be.nodeValue.length),(de=be.firstChild)!==null;)le=be,be=de;for(;;){if(be===t)break t;if(le===s&&++re===f&&(C=M),le===p&&++xe===l&&(k=M),(de=be.nextSibling)!==null)break;be=le,le=be.parentNode}be=de}s=C===-1||k===-1?null:{start:C,end:k}}else s=null}s=s||{start:0,end:0}}else s=null;for(Cd={focusedElem:t,selectionRange:s},jc=!1,Fn=n;Fn!==null;)if(n=Fn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Fn=t;else for(;Fn!==null;){switch(n=Fn,p=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(s=0;s<t.length;s++)f=t[s],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&p!==null){t=void 0,s=n,f=p.memoizedProps,p=p.memoizedState,l=s.stateNode;try{var Ze=cr(s.type,f);t=l.getSnapshotBeforeUpdate(Ze,p),l.__reactInternalSnapshotBeforeUpdate=t}catch(at){Xt(s,s.return,at)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,s=t.nodeType,s===9)Ld(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Ld(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,Fn=t;break}Fn=n.return}}function cg(t,n,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:za(t,s),l&4&&ll(5,s);break;case 1:if(za(t,s),l&4)if(t=s.stateNode,n===null)try{t.componentDidMount()}catch(M){Xt(s,s.return,M)}else{var f=cr(s.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(f,n,t.__reactInternalSnapshotBeforeUpdate)}catch(M){Xt(s,s.return,M)}}l&64&&ig(s),l&512&&cl(s,s.return);break;case 3:if(za(t,s),l&64&&(t=s.updateQueue,t!==null)){if(n=null,s.child!==null)switch(s.child.tag){case 27:case 5:n=s.child.stateNode;break;case 1:n=s.child.stateNode}try{qm(t,n)}catch(M){Xt(s,s.return,M)}}break;case 27:n===null&&l&4&&og(s);case 26:case 5:za(t,s),n===null&&l&4&&sg(s),l&512&&cl(s,s.return);break;case 12:za(t,s);break;case 31:za(t,s),l&4&&dg(t,s);break;case 13:za(t,s),l&4&&hg(t,s),l&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=EM.bind(null,s),kM(t,s))));break;case 22:if(l=s.memoizedState!==null||Fa,!l){n=n!==null&&n.memoizedState!==null||Cn,f=Fa;var p=Cn;Fa=l,(Cn=n)&&!p?Ha(t,s,(s.subtreeFlags&8772)!==0):za(t,s),Fa=f,Cn=p}break;case 30:break;default:za(t,s)}}function ug(t){var n=t.alternate;n!==null&&(t.alternate=null,ug(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Zi(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var un=null,ci=!1;function Ba(t,n,s){for(s=s.child;s!==null;)fg(t,n,s),s=s.sibling}function fg(t,n,s){if(pe&&typeof pe.onCommitFiberUnmount=="function")try{pe.onCommitFiberUnmount(fe,s)}catch{}switch(s.tag){case 26:Cn||da(s,n),Ba(t,n,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:Cn||da(s,n);var l=un,f=ci;Ts(s.type)&&(un=s.stateNode,ci=!1),Ba(t,n,s),vl(s.stateNode),un=l,ci=f;break;case 5:Cn||da(s,n);case 6:if(l=un,f=ci,un=null,Ba(t,n,s),un=l,ci=f,un!==null)if(ci)try{(un.nodeType===9?un.body:un.nodeName==="HTML"?un.ownerDocument.body:un).removeChild(s.stateNode)}catch(p){Xt(s,n,p)}else try{un.removeChild(s.stateNode)}catch(p){Xt(s,n,p)}break;case 18:un!==null&&(ci?(t=un,i_(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),ro(t)):i_(un,s.stateNode));break;case 4:l=un,f=ci,un=s.stateNode.containerInfo,ci=!0,Ba(t,n,s),un=l,ci=f;break;case 0:case 11:case 14:case 15:vs(2,s,n),Cn||vs(4,s,n),Ba(t,n,s);break;case 1:Cn||(da(s,n),l=s.stateNode,typeof l.componentWillUnmount=="function"&&ag(s,n,l)),Ba(t,n,s);break;case 21:Ba(t,n,s);break;case 22:Cn=(l=Cn)||s.memoizedState!==null,Ba(t,n,s),Cn=l;break;default:Ba(t,n,s)}}function dg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{ro(t)}catch(s){Xt(n,n.return,s)}}}function hg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{ro(t)}catch(s){Xt(n,n.return,s)}}function mM(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new lg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new lg),n;default:throw Error(r(435,t.tag))}}function Cc(t,n){var s=mM(t);n.forEach(function(l){if(!s.has(l)){s.add(l);var f=bM.bind(null,t,l);l.then(f,f)}})}function ui(t,n){var s=n.deletions;if(s!==null)for(var l=0;l<s.length;l++){var f=s[l],p=t,M=n,C=M;e:for(;C!==null;){switch(C.tag){case 27:if(Ts(C.type)){un=C.stateNode,ci=!1;break e}break;case 5:un=C.stateNode,ci=!1;break e;case 3:case 4:un=C.stateNode.containerInfo,ci=!0;break e}C=C.return}if(un===null)throw Error(r(160));fg(p,M,f),un=null,ci=!1,p=f.alternate,p!==null&&(p.return=null),f.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)pg(n,t),n=n.sibling}var $i=null;function pg(t,n){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:ui(n,t),fi(t),l&4&&(vs(3,t,t.return),ll(3,t),vs(5,t,t.return));break;case 1:ui(n,t),fi(t),l&512&&(Cn||s===null||da(s,s.return)),l&64&&Fa&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var f=$i;if(ui(n,t),fi(t),l&512&&(Cn||s===null||da(s,s.return)),l&4){var p=s!==null?s.memoizedState:null;if(l=t.memoizedState,s===null)if(l===null)if(t.stateNode===null){e:{l=t.type,s=t.memoizedProps,f=f.ownerDocument||f;t:switch(l){case"title":p=f.getElementsByTagName("title")[0],(!p||p[ji]||p[sn]||p.namespaceURI==="http://www.w3.org/2000/svg"||p.hasAttribute("itemprop"))&&(p=f.createElement(l),f.head.insertBefore(p,f.querySelector("head > title"))),Yn(p,l,s),p[sn]=t,pn(p),l=p;break e;case"link":var M=p_("link","href",f).get(l+(s.href||""));if(M){for(var C=0;C<M.length;C++)if(p=M[C],p.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&p.getAttribute("rel")===(s.rel==null?null:s.rel)&&p.getAttribute("title")===(s.title==null?null:s.title)&&p.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){M.splice(C,1);break t}}p=f.createElement(l),Yn(p,l,s),f.head.appendChild(p);break;case"meta":if(M=p_("meta","content",f).get(l+(s.content||""))){for(C=0;C<M.length;C++)if(p=M[C],p.getAttribute("content")===(s.content==null?null:""+s.content)&&p.getAttribute("name")===(s.name==null?null:s.name)&&p.getAttribute("property")===(s.property==null?null:s.property)&&p.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&p.getAttribute("charset")===(s.charSet==null?null:s.charSet)){M.splice(C,1);break t}}p=f.createElement(l),Yn(p,l,s),f.head.appendChild(p);break;default:throw Error(r(468,l))}p[sn]=t,pn(p),l=p}t.stateNode=l}else m_(f,t.type,t.stateNode);else t.stateNode=h_(f,l,t.memoizedProps);else p!==l?(p===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):p.count--,l===null?m_(f,t.type,t.stateNode):h_(f,l,t.memoizedProps)):l===null&&t.stateNode!==null&&id(t,t.memoizedProps,s.memoizedProps)}break;case 27:ui(n,t),fi(t),l&512&&(Cn||s===null||da(s,s.return)),s!==null&&l&4&&id(t,t.memoizedProps,s.memoizedProps);break;case 5:if(ui(n,t),fi(t),l&512&&(Cn||s===null||da(s,s.return)),t.flags&32){f=t.stateNode;try{Hn(f,"")}catch(Ze){Xt(t,t.return,Ze)}}l&4&&t.stateNode!=null&&(f=t.memoizedProps,id(t,f,s!==null?s.memoizedProps:f)),l&1024&&(rd=!0);break;case 6:if(ui(n,t),fi(t),l&4){if(t.stateNode===null)throw Error(r(162));l=t.memoizedProps,s=t.stateNode;try{s.nodeValue=l}catch(Ze){Xt(t,t.return,Ze)}}break;case 3:if(Xc=null,f=$i,$i=Vc(n.containerInfo),ui(n,t),$i=f,fi(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{ro(n.containerInfo)}catch(Ze){Xt(t,t.return,Ze)}rd&&(rd=!1,mg(t));break;case 4:l=$i,$i=Vc(t.stateNode.containerInfo),ui(n,t),fi(t),$i=l;break;case 12:ui(n,t),fi(t);break;case 31:ui(n,t),fi(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Cc(t,l)));break;case 13:ui(n,t),fi(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Dc=Ut()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Cc(t,l)));break;case 22:f=t.memoizedState!==null;var k=s!==null&&s.memoizedState!==null,re=Fa,xe=Cn;if(Fa=re||f,Cn=xe||k,ui(n,t),Cn=xe,Fa=re,fi(t),l&8192)e:for(n=t.stateNode,n._visibility=f?n._visibility&-2:n._visibility|1,f&&(s===null||k||Fa||Cn||ur(t)),s=null,n=t;;){if(n.tag===5||n.tag===26){if(s===null){k=s=n;try{if(p=k.stateNode,f)M=p.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{C=k.stateNode;var be=k.memoizedProps.style,le=be!=null&&be.hasOwnProperty("display")?be.display:null;C.style.display=le==null||typeof le=="boolean"?"":(""+le).trim()}}catch(Ze){Xt(k,k.return,Ze)}}}else if(n.tag===6){if(s===null){k=n;try{k.stateNode.nodeValue=f?"":k.memoizedProps}catch(Ze){Xt(k,k.return,Ze)}}}else if(n.tag===18){if(s===null){k=n;try{var de=k.stateNode;f?a_(de,!0):a_(k.stateNode,!1)}catch(Ze){Xt(k,k.return,Ze)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;s===n&&(s=null),n=n.return}s===n&&(s=null),n.sibling.return=n.return,n=n.sibling}l&4&&(l=t.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,Cc(t,s))));break;case 19:ui(n,t),fi(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Cc(t,l)));break;case 30:break;case 21:break;default:ui(n,t),fi(t)}}function fi(t){var n=t.flags;if(n&2){try{for(var s,l=t.return;l!==null;){if(rg(l)){s=l;break}l=l.return}if(s==null)throw Error(r(160));switch(s.tag){case 27:var f=s.stateNode,p=ad(t);Rc(t,p,f);break;case 5:var M=s.stateNode;s.flags&32&&(Hn(M,""),s.flags&=-33);var C=ad(t);Rc(t,C,M);break;case 3:case 4:var k=s.stateNode.containerInfo,re=ad(t);sd(t,re,k);break;default:throw Error(r(161))}}catch(xe){Xt(t,t.return,xe)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function mg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;mg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function za(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)cg(t,n.alternate,n),n=n.sibling}function ur(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:vs(4,n,n.return),ur(n);break;case 1:da(n,n.return);var s=n.stateNode;typeof s.componentWillUnmount=="function"&&ag(n,n.return,s),ur(n);break;case 27:vl(n.stateNode);case 26:case 5:da(n,n.return),ur(n);break;case 22:n.memoizedState===null&&ur(n);break;case 30:ur(n);break;default:ur(n)}t=t.sibling}}function Ha(t,n,s){for(s=s&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var l=n.alternate,f=t,p=n,M=p.flags;switch(p.tag){case 0:case 11:case 15:Ha(f,p,s),ll(4,p);break;case 1:if(Ha(f,p,s),l=p,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(re){Xt(l,l.return,re)}if(l=p,f=l.updateQueue,f!==null){var C=l.stateNode;try{var k=f.shared.hiddenCallbacks;if(k!==null)for(f.shared.hiddenCallbacks=null,f=0;f<k.length;f++)Ym(k[f],C)}catch(re){Xt(l,l.return,re)}}s&&M&64&&ig(p),cl(p,p.return);break;case 27:og(p);case 26:case 5:Ha(f,p,s),s&&l===null&&M&4&&sg(p),cl(p,p.return);break;case 12:Ha(f,p,s);break;case 31:Ha(f,p,s),s&&M&4&&dg(f,p);break;case 13:Ha(f,p,s),s&&M&4&&hg(f,p);break;case 22:p.memoizedState===null&&Ha(f,p,s),cl(p,p.return);break;case 30:break;default:Ha(f,p,s)}n=n.sibling}}function od(t,n){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&Zo(s))}function ld(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Zo(t))}function ea(t,n,s,l){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)gg(t,n,s,l),n=n.sibling}function gg(t,n,s,l){var f=n.flags;switch(n.tag){case 0:case 11:case 15:ea(t,n,s,l),f&2048&&ll(9,n);break;case 1:ea(t,n,s,l);break;case 3:ea(t,n,s,l),f&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Zo(t)));break;case 12:if(f&2048){ea(t,n,s,l),t=n.stateNode;try{var p=n.memoizedProps,M=p.id,C=p.onPostCommit;typeof C=="function"&&C(M,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(k){Xt(n,n.return,k)}}else ea(t,n,s,l);break;case 31:ea(t,n,s,l);break;case 13:ea(t,n,s,l);break;case 23:break;case 22:p=n.stateNode,M=n.alternate,n.memoizedState!==null?p._visibility&2?ea(t,n,s,l):ul(t,n):p._visibility&2?ea(t,n,s,l):(p._visibility|=2,Zr(t,n,s,l,(n.subtreeFlags&10256)!==0||!1)),f&2048&&od(M,n);break;case 24:ea(t,n,s,l),f&2048&&ld(n.alternate,n);break;default:ea(t,n,s,l)}}function Zr(t,n,s,l,f){for(f=f&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var p=t,M=n,C=s,k=l,re=M.flags;switch(M.tag){case 0:case 11:case 15:Zr(p,M,C,k,f),ll(8,M);break;case 23:break;case 22:var xe=M.stateNode;M.memoizedState!==null?xe._visibility&2?Zr(p,M,C,k,f):ul(p,M):(xe._visibility|=2,Zr(p,M,C,k,f)),f&&re&2048&&od(M.alternate,M);break;case 24:Zr(p,M,C,k,f),f&&re&2048&&ld(M.alternate,M);break;default:Zr(p,M,C,k,f)}n=n.sibling}}function ul(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var s=t,l=n,f=l.flags;switch(l.tag){case 22:ul(s,l),f&2048&&od(l.alternate,l);break;case 24:ul(s,l),f&2048&&ld(l.alternate,l);break;default:ul(s,l)}n=n.sibling}}var fl=8192;function Kr(t,n,s){if(t.subtreeFlags&fl)for(t=t.child;t!==null;)_g(t,n,s),t=t.sibling}function _g(t,n,s){switch(t.tag){case 26:Kr(t,n,s),t.flags&fl&&t.memoizedState!==null&&ty(s,$i,t.memoizedState,t.memoizedProps);break;case 5:Kr(t,n,s);break;case 3:case 4:var l=$i;$i=Vc(t.stateNode.containerInfo),Kr(t,n,s),$i=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=fl,fl=16777216,Kr(t,n,s),fl=l):Kr(t,n,s));break;default:Kr(t,n,s)}}function vg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function dl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var s=0;s<n.length;s++){var l=n[s];Fn=l,Sg(l,t)}vg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)xg(t),t=t.sibling}function xg(t){switch(t.tag){case 0:case 11:case 15:dl(t),t.flags&2048&&vs(9,t,t.return);break;case 3:dl(t);break;case 12:dl(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,wc(t)):dl(t);break;default:dl(t)}}function wc(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var s=0;s<n.length;s++){var l=n[s];Fn=l,Sg(l,t)}vg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:vs(8,n,n.return),wc(n);break;case 22:s=n.stateNode,s._visibility&2&&(s._visibility&=-3,wc(n));break;default:wc(n)}t=t.sibling}}function Sg(t,n){for(;Fn!==null;){var s=Fn;switch(s.tag){case 0:case 11:case 15:vs(8,s,n);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Zo(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,Fn=l;else e:for(s=t;Fn!==null;){l=Fn;var f=l.sibling,p=l.return;if(ug(l),l===s){Fn=null;break e}if(f!==null){f.return=p,Fn=f;break e}Fn=p}}}var gM={getCacheForType:function(t){var n=Xn(Tn),s=n.data.get(t);return s===void 0&&(s=t(),n.data.set(t,s)),s},cacheSignal:function(){return Xn(Tn).controller.signal}},_M=typeof WeakMap=="function"?WeakMap:Map,zt=0,nn=null,yt=null,Tt=0,kt=0,Mi=null,xs=!1,Qr=!1,cd=!1,Ga=0,_n=0,Ss=0,fr=0,ud=0,yi=0,Jr=0,hl=null,di=null,fd=!1,Dc=0,Mg=0,Lc=1/0,Nc=null,Ms=null,Ln=0,ys=null,$r=null,Va=0,dd=0,hd=null,yg=null,pl=0,pd=null;function Ei(){return(zt&2)!==0&&Tt!==0?Tt&-Tt:H.T!==null?Sd():ba()}function Eg(){if(yi===0)if((Tt&536870912)===0||Ct){var t=it;it<<=1,(it&3932160)===0&&(it=262144),yi=t}else yi=536870912;return t=xi.current,t!==null&&(t.flags|=32),yi}function hi(t,n,s){(t===nn&&(kt===2||kt===9)||t.cancelPendingCommit!==null)&&(eo(t,0),Es(t,Tt,yi,!1)),Ye(t,s),((zt&2)===0||t!==nn)&&(t===nn&&((zt&2)===0&&(fr|=s),_n===4&&Es(t,Tt,yi,!1)),ha(t))}function bg(t,n,s){if((zt&6)!==0)throw Error(r(327));var l=!s&&(n&127)===0&&(n&t.expiredLanes)===0||Ie(t,n),f=l?SM(t,n):gd(t,n,!0),p=l;do{if(f===0){Qr&&!l&&Es(t,n,0,!1);break}else{if(s=t.current.alternate,p&&!vM(s)){f=gd(t,n,!1),p=!1;continue}if(f===2){if(p=n,t.errorRecoveryDisabledLanes&p)var M=0;else M=t.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){n=M;e:{var C=t;f=hl;var k=C.current.memoizedState.isDehydrated;if(k&&(eo(C,M).flags|=256),M=gd(C,M,!1),M!==2){if(cd&&!k){C.errorRecoveryDisabledLanes|=p,fr|=p,f=4;break e}p=di,di=f,p!==null&&(di===null?di=p:di.push.apply(di,p))}f=M}if(p=!1,f!==2)continue}}if(f===1){eo(t,0),Es(t,n,0,!0);break}e:{switch(l=t,p=f,p){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Es(l,n,yi,!xs);break e;case 2:di=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(f=Dc+300-Ut(),10<f)){if(Es(l,n,yi,!xs),_e(l,0,!0)!==0)break e;Va=n,l.timeoutHandle=t_(Tg.bind(null,l,s,di,Nc,fd,n,yi,fr,Jr,xs,p,"Throttled",-0,0),f);break e}Tg(l,s,di,Nc,fd,n,yi,fr,Jr,xs,p,null,-0,0)}}break}while(!0);ha(t)}function Tg(t,n,s,l,f,p,M,C,k,re,xe,be,le,de){if(t.timeoutHandle=-1,be=n.subtreeFlags,be&8192||(be&16785408)===16785408){be={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Qi},_g(n,p,be);var Ze=(p&62914560)===p?Dc-Ut():(p&4194048)===p?Mg-Ut():0;if(Ze=ny(be,Ze),Ze!==null){Va=p,t.cancelPendingCommit=Ze(Ug.bind(null,t,n,p,s,l,f,M,C,k,xe,be,null,le,de)),Es(t,p,M,!re);return}}Ug(t,n,p,s,l,f,M,C,k)}function vM(t){for(var n=t;;){var s=n.tag;if((s===0||s===11||s===15)&&n.flags&16384&&(s=n.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var f=s[l],p=f.getSnapshot;f=f.value;try{if(!_i(p(),f))return!1}catch{return!1}}if(s=n.child,n.subtreeFlags&16384&&s!==null)s.return=n,n=s;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Es(t,n,s,l){n&=~ud,n&=~fr,t.suspendedLanes|=n,t.pingedLanes&=~n,l&&(t.warmLanes|=n),l=t.expirationTimes;for(var f=n;0<f;){var p=31-ze(f),M=1<<p;l[p]=-1,f&=~M}s!==0&&ut(t,s,n)}function Uc(){return(zt&6)===0?(ml(0),!1):!0}function md(){if(yt!==null){if(kt===0)var t=yt.return;else t=yt,La=nr=null,Lf(t),Xr=null,Qo=0,t=yt;for(;t!==null;)ng(t.alternate,t),t=t.return;yt=null}}function eo(t,n){var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,BM(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),Va=0,md(),nn=t,yt=s=wa(t.current,null),Tt=n,kt=0,Mi=null,xs=!1,Qr=Ie(t,n),cd=!1,Jr=yi=ud=fr=Ss=_n=0,di=hl=null,fd=!1,(n&8)!==0&&(n|=n&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=n;0<l;){var f=31-ze(l),p=1<<f;n|=t[f],l&=~p}return Ga=n,ec(),s}function Ag(t,n){dt=null,H.H=sl,n===kr||n===lc?(n=Vm(),kt=3):n===xf?(n=Vm(),kt=4):kt=n===qf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Mi=n,yt===null&&(_n=1,yc(t,Pi(n,t.current)))}function Rg(){var t=xi.current;return t===null?!0:(Tt&4194048)===Tt?zi===null:(Tt&62914560)===Tt||(Tt&536870912)!==0?t===zi:!1}function Cg(){var t=H.H;return H.H=sl,t===null?sl:t}function wg(){var t=H.A;return H.A=gM,t}function Oc(){_n=4,xs||(Tt&4194048)!==Tt&&xi.current!==null||(Qr=!0),(Ss&134217727)===0&&(fr&134217727)===0||nn===null||Es(nn,Tt,yi,!1)}function gd(t,n,s){var l=zt;zt|=2;var f=Cg(),p=wg();(nn!==t||Tt!==n)&&(Nc=null,eo(t,n)),n=!1;var M=_n;e:do try{if(kt!==0&&yt!==null){var C=yt,k=Mi;switch(kt){case 8:md(),M=6;break e;case 3:case 2:case 9:case 6:xi.current===null&&(n=!0);var re=kt;if(kt=0,Mi=null,to(t,C,k,re),s&&Qr){M=0;break e}break;default:re=kt,kt=0,Mi=null,to(t,C,k,re)}}xM(),M=_n;break}catch(xe){Ag(t,xe)}while(!0);return n&&t.shellSuspendCounter++,La=nr=null,zt=l,H.H=f,H.A=p,yt===null&&(nn=null,Tt=0,ec()),M}function xM(){for(;yt!==null;)Dg(yt)}function SM(t,n){var s=zt;zt|=2;var l=Cg(),f=wg();nn!==t||Tt!==n?(Nc=null,Lc=Ut()+500,eo(t,n)):Qr=Ie(t,n);e:do try{if(kt!==0&&yt!==null){n=yt;var p=Mi;t:switch(kt){case 1:kt=0,Mi=null,to(t,n,p,1);break;case 2:case 9:if(Hm(p)){kt=0,Mi=null,Lg(n);break}n=function(){kt!==2&&kt!==9||nn!==t||(kt=7),ha(t)},p.then(n,n);break e;case 3:kt=7;break e;case 4:kt=5;break e;case 7:Hm(p)?(kt=0,Mi=null,Lg(n)):(kt=0,Mi=null,to(t,n,p,7));break;case 5:var M=null;switch(yt.tag){case 26:M=yt.memoizedState;case 5:case 27:var C=yt;if(M?g_(M):C.stateNode.complete){kt=0,Mi=null;var k=C.sibling;if(k!==null)yt=k;else{var re=C.return;re!==null?(yt=re,Pc(re)):yt=null}break t}}kt=0,Mi=null,to(t,n,p,5);break;case 6:kt=0,Mi=null,to(t,n,p,6);break;case 8:md(),_n=6;break e;default:throw Error(r(462))}}MM();break}catch(xe){Ag(t,xe)}while(!0);return La=nr=null,H.H=l,H.A=f,zt=s,yt!==null?0:(nn=null,Tt=0,ec(),_n)}function MM(){for(;yt!==null&&!an();)Dg(yt)}function Dg(t){var n=eg(t.alternate,t,Ga);t.memoizedProps=t.pendingProps,n===null?Pc(t):yt=n}function Lg(t){var n=t,s=n.alternate;switch(n.tag){case 15:case 0:n=j0(s,n,n.pendingProps,n.type,void 0,Tt);break;case 11:n=j0(s,n,n.pendingProps,n.type.render,n.ref,Tt);break;case 5:Lf(n);default:ng(s,n),n=yt=wm(n,Ga),n=eg(s,n,Ga)}t.memoizedProps=t.pendingProps,n===null?Pc(t):yt=n}function to(t,n,s,l){La=nr=null,Lf(n),Xr=null,Qo=0;var f=n.return;try{if(cM(t,f,n,s,Tt)){_n=1,yc(t,Pi(s,t.current)),yt=null;return}}catch(p){if(f!==null)throw yt=f,p;_n=1,yc(t,Pi(s,t.current)),yt=null;return}n.flags&32768?(Ct||l===1?t=!0:Qr||(Tt&536870912)!==0?t=!1:(xs=t=!0,(l===2||l===9||l===3||l===6)&&(l=xi.current,l!==null&&l.tag===13&&(l.flags|=16384))),Ng(n,t)):Pc(n)}function Pc(t){var n=t;do{if((n.flags&32768)!==0){Ng(n,xs);return}t=n.return;var s=dM(n.alternate,n,Ga);if(s!==null){yt=s;return}if(n=n.sibling,n!==null){yt=n;return}yt=n=t}while(n!==null);_n===0&&(_n=5)}function Ng(t,n){do{var s=hM(t.alternate,t);if(s!==null){s.flags&=32767,yt=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!n&&(t=t.sibling,t!==null)){yt=t;return}yt=t=s}while(t!==null);_n=6,yt=null}function Ug(t,n,s,l,f,p,M,C,k){t.cancelPendingCommit=null;do Ic();while(Ln!==0);if((zt&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(p=n.lanes|n.childLanes,p|=af,qt(t,s,p,M,C,k),t===nn&&(yt=nn=null,Tt=0),$r=n,ys=t,Va=s,dd=p,hd=f,yg=l,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,TM(ee,function(){return Bg(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||l){l=H.T,H.T=null,f=V.p,V.p=2,M=zt,zt|=4;try{pM(t,n,s)}finally{zt=M,V.p=f,H.T=l}}Ln=1,Og(),Pg(),Ig()}}function Og(){if(Ln===1){Ln=0;var t=ys,n=$r,s=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||s){s=H.T,H.T=null;var l=V.p;V.p=2;var f=zt;zt|=4;try{pg(n,t);var p=Cd,M=Sm(t.containerInfo),C=p.focusedElem,k=p.selectionRange;if(M!==C&&C&&C.ownerDocument&&xm(C.ownerDocument.documentElement,C)){if(k!==null&&Ju(C)){var re=k.start,xe=k.end;if(xe===void 0&&(xe=re),"selectionStart"in C)C.selectionStart=re,C.selectionEnd=Math.min(xe,C.value.length);else{var be=C.ownerDocument||document,le=be&&be.defaultView||window;if(le.getSelection){var de=le.getSelection(),Ze=C.textContent.length,at=Math.min(k.start,Ze),Qt=k.end===void 0?at:Math.min(k.end,Ze);!de.extend&&at>Qt&&(M=Qt,Qt=at,at=M);var $=vm(C,at),Y=vm(C,Qt);if($&&Y&&(de.rangeCount!==1||de.anchorNode!==$.node||de.anchorOffset!==$.offset||de.focusNode!==Y.node||de.focusOffset!==Y.offset)){var se=be.createRange();se.setStart($.node,$.offset),de.removeAllRanges(),at>Qt?(de.addRange(se),de.extend(Y.node,Y.offset)):(se.setEnd(Y.node,Y.offset),de.addRange(se))}}}}for(be=[],de=C;de=de.parentNode;)de.nodeType===1&&be.push({element:de,left:de.scrollLeft,top:de.scrollTop});for(typeof C.focus=="function"&&C.focus(),C=0;C<be.length;C++){var ye=be[C];ye.element.scrollLeft=ye.left,ye.element.scrollTop=ye.top}}jc=!!Rd,Cd=Rd=null}finally{zt=f,V.p=l,H.T=s}}t.current=n,Ln=2}}function Pg(){if(Ln===2){Ln=0;var t=ys,n=$r,s=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||s){s=H.T,H.T=null;var l=V.p;V.p=2;var f=zt;zt|=4;try{cg(t,n.alternate,n)}finally{zt=f,V.p=l,H.T=s}}Ln=3}}function Ig(){if(Ln===4||Ln===3){Ln=0,Q();var t=ys,n=$r,s=Va,l=yg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Ln=5:(Ln=0,$r=ys=null,Fg(t,t.pendingLanes));var f=t.pendingLanes;if(f===0&&(Ms=null),Xs(s),n=n.stateNode,pe&&typeof pe.onCommitFiberRoot=="function")try{pe.onCommitFiberRoot(fe,n,void 0,(n.current.flags&128)===128)}catch{}if(l!==null){n=H.T,f=V.p,V.p=2,H.T=null;try{for(var p=t.onRecoverableError,M=0;M<l.length;M++){var C=l[M];p(C.value,{componentStack:C.stack})}}finally{H.T=n,V.p=f}}(Va&3)!==0&&Ic(),ha(t),f=t.pendingLanes,(s&261930)!==0&&(f&42)!==0?t===pd?pl++:(pl=0,pd=t):pl=0,ml(0)}}function Fg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Zo(n)))}function Ic(){return Og(),Pg(),Ig(),Bg()}function Bg(){if(Ln!==5)return!1;var t=ys,n=dd;dd=0;var s=Xs(Va),l=H.T,f=V.p;try{V.p=32>s?32:s,H.T=null,s=hd,hd=null;var p=ys,M=Va;if(Ln=0,$r=ys=null,Va=0,(zt&6)!==0)throw Error(r(331));var C=zt;if(zt|=4,xg(p.current),gg(p,p.current,M,s),zt=C,ml(0,!1),pe&&typeof pe.onPostCommitFiberRoot=="function")try{pe.onPostCommitFiberRoot(fe,p)}catch{}return!0}finally{V.p=f,H.T=l,Fg(t,n)}}function zg(t,n,s){n=Pi(s,n),n=Yf(t.stateNode,n,2),t=ms(t,n,2),t!==null&&(Ye(t,2),ha(t))}function Xt(t,n,s){if(t.tag===3)zg(t,t,s);else for(;n!==null;){if(n.tag===3){zg(n,t,s);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Ms===null||!Ms.has(l))){t=Pi(s,t),s=H0(2),l=ms(n,s,2),l!==null&&(G0(s,l,n,t),Ye(l,2),ha(l));break}}n=n.return}}function _d(t,n,s){var l=t.pingCache;if(l===null){l=t.pingCache=new _M;var f=new Set;l.set(n,f)}else f=l.get(n),f===void 0&&(f=new Set,l.set(n,f));f.has(s)||(cd=!0,f.add(s),t=yM.bind(null,t,n,s),n.then(t,t))}function yM(t,n,s){var l=t.pingCache;l!==null&&l.delete(n),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,nn===t&&(Tt&s)===s&&(_n===4||_n===3&&(Tt&62914560)===Tt&&300>Ut()-Dc?(zt&2)===0&&eo(t,0):ud|=s,Jr===Tt&&(Jr=0)),ha(t)}function Hg(t,n){n===0&&(n=Te()),t=$s(t,n),t!==null&&(Ye(t,n),ha(t))}function EM(t){var n=t.memoizedState,s=0;n!==null&&(s=n.retryLane),Hg(t,s)}function bM(t,n){var s=0;switch(t.tag){case 31:case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(s=f.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(r(314))}l!==null&&l.delete(n),Hg(t,s)}function TM(t,n){return en(t,n)}var Fc=null,no=null,vd=!1,Bc=!1,xd=!1,bs=0;function ha(t){t!==no&&t.next===null&&(no===null?Fc=no=t:no=no.next=t),Bc=!0,vd||(vd=!0,RM())}function ml(t,n){if(!xd&&Bc){xd=!0;do for(var s=!1,l=Fc;l!==null;){if(t!==0){var f=l.pendingLanes;if(f===0)var p=0;else{var M=l.suspendedLanes,C=l.pingedLanes;p=(1<<31-ze(42|t)+1)-1,p&=f&~(M&~C),p=p&201326741?p&201326741|1:p?p|2:0}p!==0&&(s=!0,Xg(l,p))}else p=Tt,p=_e(l,l===nn?p:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(p&3)===0||Ie(l,p)||(s=!0,Xg(l,p));l=l.next}while(s);xd=!1}}function AM(){Gg()}function Gg(){Bc=vd=!1;var t=0;bs!==0&&FM()&&(t=bs);for(var n=Ut(),s=null,l=Fc;l!==null;){var f=l.next,p=Vg(l,n);p===0?(l.next=null,s===null?Fc=f:s.next=f,f===null&&(no=s)):(s=l,(t!==0||(p&3)!==0)&&(Bc=!0)),l=f}Ln!==0&&Ln!==5||ml(t),bs!==0&&(bs=0)}function Vg(t,n){for(var s=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,p=t.pendingLanes&-62914561;0<p;){var M=31-ze(p),C=1<<M,k=f[M];k===-1?((C&s)===0||(C&l)!==0)&&(f[M]=Ge(C,n)):k<=n&&(t.expiredLanes|=C),p&=~C}if(n=nn,s=Tt,s=_e(t,t===n?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,s===0||t===n&&(kt===2||kt===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&Bt(l),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||Ie(t,s)){if(n=s&-s,n===t.callbackPriority)return n;switch(l!==null&&Bt(l),Xs(s)){case 2:case 8:s=E;break;case 32:s=ee;break;case 268435456:s=me;break;default:s=ee}return l=kg.bind(null,t),s=en(s,l),t.callbackPriority=n,t.callbackNode=s,n}return l!==null&&l!==null&&Bt(l),t.callbackPriority=2,t.callbackNode=null,2}function kg(t,n){if(Ln!==0&&Ln!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if(Ic()&&t.callbackNode!==s)return null;var l=Tt;return l=_e(t,t===nn?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(bg(t,l,n),Vg(t,Ut()),t.callbackNode!=null&&t.callbackNode===s?kg.bind(null,t):null)}function Xg(t,n){if(Ic())return null;bg(t,n,!0)}function RM(){zM(function(){(zt&6)!==0?en(P,AM):Gg()})}function Sd(){if(bs===0){var t=Gr;t===0&&(t=Ke,Ke<<=1,(Ke&261888)===0&&(Ke=256)),bs=t}return bs}function Wg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ta(""+t)}function Yg(t,n){var s=n.ownerDocument.createElement("input");return s.name=n.name,s.value=n.value,t.id&&s.setAttribute("form",t.id),n.parentNode.insertBefore(s,n),t=new FormData(t),s.parentNode.removeChild(s),t}function CM(t,n,s,l,f){if(n==="submit"&&s&&s.stateNode===f){var p=Wg((f[Sn]||null).action),M=l.submitter;M&&(n=(n=M[Sn]||null)?Wg(n.formAction):M.getAttribute("formAction"),n!==null&&(p=n,M=null));var C=new Dr("action","action",null,l,f);t.push({event:C,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(bs!==0){var k=M?Yg(f,M):new FormData(f);Hf(s,{pending:!0,data:k,method:f.method,action:p},null,k)}}else typeof p=="function"&&(C.preventDefault(),k=M?Yg(f,M):new FormData(f),Hf(s,{pending:!0,data:k,method:f.method,action:p},p,k))},currentTarget:f}]})}}for(var Md=0;Md<nf.length;Md++){var yd=nf[Md],wM=yd.toLowerCase(),DM=yd[0].toUpperCase()+yd.slice(1);Ji(wM,"on"+DM)}Ji(Em,"onAnimationEnd"),Ji(bm,"onAnimationIteration"),Ji(Tm,"onAnimationStart"),Ji("dblclick","onDoubleClick"),Ji("focusin","onFocus"),Ji("focusout","onBlur"),Ji(YS,"onTransitionRun"),Ji(qS,"onTransitionStart"),Ji(jS,"onTransitionCancel"),Ji(Am,"onTransitionEnd"),oe("onMouseEnter",["mouseout","mouseover"]),oe("onMouseLeave",["mouseout","mouseover"]),oe("onPointerEnter",["pointerout","pointerover"]),oe("onPointerLeave",["pointerout","pointerover"]),j("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),j("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),j("onBeforeInput",["compositionend","keypress","textInput","paste"]),j("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),j("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),j("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var gl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),LM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(gl));function qg(t,n){n=(n&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],f=l.event;l=l.listeners;e:{var p=void 0;if(n)for(var M=l.length-1;0<=M;M--){var C=l[M],k=C.instance,re=C.currentTarget;if(C=C.listener,k!==p&&f.isPropagationStopped())break e;p=C,f.currentTarget=re;try{p(f)}catch(xe){$l(xe)}f.currentTarget=null,p=k}else for(M=0;M<l.length;M++){if(C=l[M],k=C.instance,re=C.currentTarget,C=C.listener,k!==p&&f.isPropagationStopped())break e;p=C,f.currentTarget=re;try{p(f)}catch(xe){$l(xe)}f.currentTarget=null,p=k}}}}function Et(t,n){var s=n[oa];s===void 0&&(s=n[oa]=new Set);var l=t+"__bubble";s.has(l)||(jg(n,t,2,!1),s.add(l))}function Ed(t,n,s){var l=0;n&&(l|=4),jg(s,t,l,n)}var zc="_reactListening"+Math.random().toString(36).slice(2);function bd(t){if(!t[zc]){t[zc]=!0,qs.forEach(function(s){s!=="selectionchange"&&(LM.has(s)||Ed(s,!1,t),Ed(s,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[zc]||(n[zc]=!0,Ed("selectionchange",!1,n))}}function jg(t,n,s,l){switch(E_(n)){case 2:var f=sy;break;case 8:f=ry;break;default:f=zd}s=f.bind(null,n,s,t),f=void 0,!Cr||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(n,s,{capture:!0,passive:f}):t.addEventListener(n,s,!0):f!==void 0?t.addEventListener(n,s,{passive:f}):t.addEventListener(n,s,!1)}function Td(t,n,s,l,f){var p=l;if((n&1)===0&&(n&2)===0&&l!==null)e:for(;;){if(l===null)return;var M=l.tag;if(M===3||M===4){var C=l.stateNode.containerInfo;if(C===f)break;if(M===4)for(M=l.return;M!==null;){var k=M.tag;if((k===3||k===4)&&M.stateNode.containerInfo===f)return;M=M.return}for(;C!==null;){if(M=wi(C),M===null)return;if(k=M.tag,k===5||k===6||k===26||k===27){l=p=M;continue e}C=C.parentNode}}l=l.return}Rr(function(){var re=p,xe=ql(s),be=[];e:{var le=Rm.get(t);if(le!==void 0){var de=Dr,Ze=t;switch(t){case"keypress":if(wr(s)===0)break e;case"keydown":case"keyup":de=bS;break;case"focusin":Ze="focus",de=rs;break;case"focusout":Ze="blur",de=rs;break;case"beforeblur":case"afterblur":de=rs;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":de=Vn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":de=li;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":de=RS;break;case Em:case bm:case Tm:de=ls;break;case Am:de=wS;break;case"scroll":case"scrollend":de=Kl;break;case"wheel":de=LS;break;case"copy":case"cut":case"paste":de=Ql;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":de=am;break;case"toggle":case"beforetoggle":de=US}var at=(n&4)!==0,Qt=!at&&(t==="scroll"||t==="scrollend"),$=at?le!==null?le+"Capture":null:le;at=[];for(var Y=re,se;Y!==null;){var ye=Y;if(se=ye.stateNode,ye=ye.tag,ye!==5&&ye!==26&&ye!==27||se===null||$===null||(ye=js(Y,$),ye!=null&&at.push(_l(Y,ye,se))),Qt)break;Y=Y.return}0<at.length&&(le=new de(le,Ze,null,s,xe),be.push({event:le,listeners:at}))}}if((n&7)===0){e:{if(le=t==="mouseover"||t==="pointerover",de=t==="mouseout"||t==="pointerout",le&&s!==Bo&&(Ze=s.relatedTarget||s.fromElement)&&(wi(Ze)||Ze[zn]))break e;if((de||le)&&(le=xe.window===xe?xe:(le=xe.ownerDocument)?le.defaultView||le.parentWindow:window,de?(Ze=s.relatedTarget||s.toElement,de=re,Ze=Ze?wi(Ze):null,Ze!==null&&(Qt=c(Ze),at=Ze.tag,Ze!==Qt||at!==5&&at!==27&&at!==6)&&(Ze=null)):(de=null,Ze=re),de!==Ze)){if(at=Vn,ye="onMouseLeave",$="onMouseEnter",Y="mouse",(t==="pointerout"||t==="pointerover")&&(at=am,ye="onPointerLeave",$="onPointerEnter",Y="pointer"),Qt=de==null?le:la(de),se=Ze==null?le:la(Ze),le=new at(ye,Y+"leave",de,s,xe),le.target=Qt,le.relatedTarget=se,ye=null,wi(xe)===re&&(at=new at($,Y+"enter",Ze,s,xe),at.target=se,at.relatedTarget=Qt,ye=at),Qt=ye,de&&Ze)t:{for(at=NM,$=de,Y=Ze,se=0,ye=$;ye;ye=at(ye))se++;ye=0;for(var nt=Y;nt;nt=at(nt))ye++;for(;0<se-ye;)$=at($),se--;for(;0<ye-se;)Y=at(Y),ye--;for(;se--;){if($===Y||Y!==null&&$===Y.alternate){at=$;break t}$=at($),Y=at(Y)}at=null}else at=null;de!==null&&Zg(be,le,de,at,!1),Ze!==null&&Qt!==null&&Zg(be,Qt,Ze,at,!0)}}e:{if(le=re?la(re):window,de=le.nodeName&&le.nodeName.toLowerCase(),de==="select"||de==="input"&&le.type==="file")var Pt=dm;else if(um(le))if(hm)Pt=kS;else{Pt=GS;var Je=HS}else de=le.nodeName,!de||de.toLowerCase()!=="input"||le.type!=="checkbox"&&le.type!=="radio"?re&&Lt(re.elementType)&&(Pt=dm):Pt=VS;if(Pt&&(Pt=Pt(t,re))){fm(be,Pt,s,xe);break e}Je&&Je(t,le,re),t==="focusout"&&re&&le.type==="number"&&re.memoizedProps.value!=null&&pt(le,"number",le.value)}switch(Je=re?la(re):window,t){case"focusin":(um(Je)||Je.contentEditable==="true")&&(Ur=Je,$u=re,Yo=null);break;case"focusout":Yo=$u=Ur=null;break;case"mousedown":ef=!0;break;case"contextmenu":case"mouseup":case"dragend":ef=!1,Mm(be,s,xe);break;case"selectionchange":if(WS)break;case"keydown":case"keyup":Mm(be,s,xe)}var mt;if(Zu)e:{switch(t){case"compositionstart":var At="onCompositionStart";break e;case"compositionend":At="onCompositionEnd";break e;case"compositionupdate":At="onCompositionUpdate";break e}At=void 0}else Nr?lm(t,s)&&(At="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(At="onCompositionStart");At&&(sm&&s.locale!=="ko"&&(Nr||At!=="onCompositionStart"?At==="onCompositionEnd"&&Nr&&(mt=Zl()):(Ui=xe,as="value"in Ui?Ui.value:Ui.textContent,Nr=!0)),Je=Hc(re,At),0<Je.length&&(At=new im(At,t,null,s,xe),be.push({event:At,listeners:Je}),mt?At.data=mt:(mt=cm(s),mt!==null&&(At.data=mt)))),(mt=PS?IS(t,s):FS(t,s))&&(At=Hc(re,"onBeforeInput"),0<At.length&&(Je=new im("onBeforeInput","beforeinput",null,s,xe),be.push({event:Je,listeners:At}),Je.data=mt)),CM(be,t,re,s,xe)}qg(be,n)})}function _l(t,n,s){return{instance:t,listener:n,currentTarget:s}}function Hc(t,n){for(var s=n+"Capture",l=[];t!==null;){var f=t,p=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||p===null||(f=js(t,s),f!=null&&l.unshift(_l(t,f,p)),f=js(t,n),f!=null&&l.push(_l(t,f,p))),t.tag===3)return l;t=t.return}return[]}function NM(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Zg(t,n,s,l,f){for(var p=n._reactName,M=[];s!==null&&s!==l;){var C=s,k=C.alternate,re=C.stateNode;if(C=C.tag,k!==null&&k===l)break;C!==5&&C!==26&&C!==27||re===null||(k=re,f?(re=js(s,p),re!=null&&M.unshift(_l(s,re,k))):f||(re=js(s,p),re!=null&&M.push(_l(s,re,k)))),s=s.return}M.length!==0&&t.push({event:n,listeners:M})}var UM=/\r\n?/g,OM=/\u0000|\uFFFD/g;function Kg(t){return(typeof t=="string"?t:""+t).replace(UM,`
`).replace(OM,"")}function Qg(t,n){return n=Kg(n),Kg(t)===n}function Kt(t,n,s,l,f,p){switch(s){case"children":typeof l=="string"?n==="body"||n==="textarea"&&l===""||Hn(t,l):(typeof l=="number"||typeof l=="bigint")&&n!=="body"&&Hn(t,""+l);break;case"className":Ne(t,"class",l);break;case"tabIndex":Ne(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Ne(t,s,l);break;case"style":ii(t,l,p);break;case"data":if(n!=="object"){Ne(t,"data",l);break}case"src":case"href":if(l===""&&(n!=="a"||s!=="href")){t.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=Ta(""+l),t.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof p=="function"&&(s==="formAction"?(n!=="input"&&Kt(t,n,"name",f.name,f,null),Kt(t,n,"formEncType",f.formEncType,f,null),Kt(t,n,"formMethod",f.formMethod,f,null),Kt(t,n,"formTarget",f.formTarget,f,null)):(Kt(t,n,"encType",f.encType,f,null),Kt(t,n,"method",f.method,f,null),Kt(t,n,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=Ta(""+l),t.setAttribute(s,l);break;case"onClick":l!=null&&(t.onclick=Qi);break;case"onScroll":l!=null&&Et("scroll",t);break;case"onScrollEnd":l!=null&&Et("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}s=Ta(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""+l):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":l===!0?t.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,l):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(s,l):t.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(s):t.setAttribute(s,l);break;case"popover":Et("beforetoggle",t),Et("toggle",t),Ce(t,"popover",l);break;case"xlinkActuate":Pe(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Pe(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Pe(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Pe(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Pe(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Pe(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Pe(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Pe(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Pe(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Ce(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=Pn.get(s)||s,Ce(t,s,l))}}function Ad(t,n,s,l,f,p){switch(s){case"style":ii(t,l,p);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"children":typeof l=="string"?Hn(t,l):(typeof l=="number"||typeof l=="bigint")&&Hn(t,""+l);break;case"onScroll":l!=null&&Et("scroll",t);break;case"onScrollEnd":l!=null&&Et("scrollend",t);break;case"onClick":l!=null&&(t.onclick=Qi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!A.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(f=s.endsWith("Capture"),n=s.slice(2,f?s.length-7:void 0),p=t[Sn]||null,p=p!=null?p[s]:null,typeof p=="function"&&t.removeEventListener(n,p,f),typeof l=="function")){typeof p!="function"&&p!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(n,l,f);break e}s in t?t[s]=l:l===!0?t.setAttribute(s,""):Ce(t,s,l)}}}function Yn(t,n,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Et("error",t),Et("load",t);var l=!1,f=!1,p;for(p in s)if(s.hasOwnProperty(p)){var M=s[p];if(M!=null)switch(p){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Kt(t,n,p,M,s,null)}}f&&Kt(t,n,"srcSet",s.srcSet,s,null),l&&Kt(t,n,"src",s.src,s,null);return;case"input":Et("invalid",t);var C=p=M=f=null,k=null,re=null;for(l in s)if(s.hasOwnProperty(l)){var xe=s[l];if(xe!=null)switch(l){case"name":f=xe;break;case"type":M=xe;break;case"checked":k=xe;break;case"defaultChecked":re=xe;break;case"value":p=xe;break;case"defaultValue":C=xe;break;case"children":case"dangerouslySetInnerHTML":if(xe!=null)throw Error(r(137,n));break;default:Kt(t,n,l,xe,s,null)}}Mn(t,p,C,k,re,M,f,!1);return;case"select":Et("invalid",t),l=M=p=null;for(f in s)if(s.hasOwnProperty(f)&&(C=s[f],C!=null))switch(f){case"value":p=C;break;case"defaultValue":M=C;break;case"multiple":l=C;default:Kt(t,n,f,C,s,null)}n=p,s=M,t.multiple=!!l,n!=null?mn(t,!!l,n,!1):s!=null&&mn(t,!!l,s,!0);return;case"textarea":Et("invalid",t),p=f=l=null;for(M in s)if(s.hasOwnProperty(M)&&(C=s[M],C!=null))switch(M){case"value":l=C;break;case"defaultValue":f=C;break;case"children":p=C;break;case"dangerouslySetInnerHTML":if(C!=null)throw Error(r(91));break;default:Kt(t,n,M,C,s,null)}ni(t,l,f,p);return;case"option":for(k in s)if(s.hasOwnProperty(k)&&(l=s[k],l!=null))switch(k){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Kt(t,n,k,l,s,null)}return;case"dialog":Et("beforetoggle",t),Et("toggle",t),Et("cancel",t),Et("close",t);break;case"iframe":case"object":Et("load",t);break;case"video":case"audio":for(l=0;l<gl.length;l++)Et(gl[l],t);break;case"image":Et("error",t),Et("load",t);break;case"details":Et("toggle",t);break;case"embed":case"source":case"link":Et("error",t),Et("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(re in s)if(s.hasOwnProperty(re)&&(l=s[re],l!=null))switch(re){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Kt(t,n,re,l,s,null)}return;default:if(Lt(n)){for(xe in s)s.hasOwnProperty(xe)&&(l=s[xe],l!==void 0&&Ad(t,n,xe,l,s,void 0));return}}for(C in s)s.hasOwnProperty(C)&&(l=s[C],l!=null&&Kt(t,n,C,l,s,null))}function PM(t,n,s,l){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,p=null,M=null,C=null,k=null,re=null,xe=null;for(de in s){var be=s[de];if(s.hasOwnProperty(de)&&be!=null)switch(de){case"checked":break;case"value":break;case"defaultValue":k=be;default:l.hasOwnProperty(de)||Kt(t,n,de,null,l,be)}}for(var le in l){var de=l[le];if(be=s[le],l.hasOwnProperty(le)&&(de!=null||be!=null))switch(le){case"type":p=de;break;case"name":f=de;break;case"checked":re=de;break;case"defaultChecked":xe=de;break;case"value":M=de;break;case"defaultValue":C=de;break;case"children":case"dangerouslySetInnerHTML":if(de!=null)throw Error(r(137,n));break;default:de!==be&&Kt(t,n,le,de,l,be)}}Ve(t,M,C,k,re,xe,p,f);return;case"select":de=M=C=le=null;for(p in s)if(k=s[p],s.hasOwnProperty(p)&&k!=null)switch(p){case"value":break;case"multiple":de=k;default:l.hasOwnProperty(p)||Kt(t,n,p,null,l,k)}for(f in l)if(p=l[f],k=s[f],l.hasOwnProperty(f)&&(p!=null||k!=null))switch(f){case"value":le=p;break;case"defaultValue":C=p;break;case"multiple":M=p;default:p!==k&&Kt(t,n,f,p,l,k)}n=C,s=M,l=de,le!=null?mn(t,!!s,le,!1):!!l!=!!s&&(n!=null?mn(t,!!s,n,!0):mn(t,!!s,s?[]:"",!1));return;case"textarea":de=le=null;for(C in s)if(f=s[C],s.hasOwnProperty(C)&&f!=null&&!l.hasOwnProperty(C))switch(C){case"value":break;case"children":break;default:Kt(t,n,C,null,l,f)}for(M in l)if(f=l[M],p=s[M],l.hasOwnProperty(M)&&(f!=null||p!=null))switch(M){case"value":le=f;break;case"defaultValue":de=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(r(91));break;default:f!==p&&Kt(t,n,M,f,l,p)}On(t,le,de);return;case"option":for(var Ze in s)if(le=s[Ze],s.hasOwnProperty(Ze)&&le!=null&&!l.hasOwnProperty(Ze))switch(Ze){case"selected":t.selected=!1;break;default:Kt(t,n,Ze,null,l,le)}for(k in l)if(le=l[k],de=s[k],l.hasOwnProperty(k)&&le!==de&&(le!=null||de!=null))switch(k){case"selected":t.selected=le&&typeof le!="function"&&typeof le!="symbol";break;default:Kt(t,n,k,le,l,de)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var at in s)le=s[at],s.hasOwnProperty(at)&&le!=null&&!l.hasOwnProperty(at)&&Kt(t,n,at,null,l,le);for(re in l)if(le=l[re],de=s[re],l.hasOwnProperty(re)&&le!==de&&(le!=null||de!=null))switch(re){case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(r(137,n));break;default:Kt(t,n,re,le,l,de)}return;default:if(Lt(n)){for(var Qt in s)le=s[Qt],s.hasOwnProperty(Qt)&&le!==void 0&&!l.hasOwnProperty(Qt)&&Ad(t,n,Qt,void 0,l,le);for(xe in l)le=l[xe],de=s[xe],!l.hasOwnProperty(xe)||le===de||le===void 0&&de===void 0||Ad(t,n,xe,le,l,de);return}}for(var $ in s)le=s[$],s.hasOwnProperty($)&&le!=null&&!l.hasOwnProperty($)&&Kt(t,n,$,null,l,le);for(be in l)le=l[be],de=s[be],!l.hasOwnProperty(be)||le===de||le==null&&de==null||Kt(t,n,be,le,l,de)}function Jg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function IM(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,s=performance.getEntriesByType("resource"),l=0;l<s.length;l++){var f=s[l],p=f.transferSize,M=f.initiatorType,C=f.duration;if(p&&C&&Jg(M)){for(M=0,C=f.responseEnd,l+=1;l<s.length;l++){var k=s[l],re=k.startTime;if(re>C)break;var xe=k.transferSize,be=k.initiatorType;xe&&Jg(be)&&(k=k.responseEnd,M+=xe*(k<C?1:(C-re)/(k-re)))}if(--l,n+=8*(p+M)/(f.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Rd=null,Cd=null;function Gc(t){return t.nodeType===9?t:t.ownerDocument}function $g(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function e_(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function wd(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Dd=null;function FM(){var t=window.event;return t&&t.type==="popstate"?t===Dd?!1:(Dd=t,!0):(Dd=null,!1)}var t_=typeof setTimeout=="function"?setTimeout:void 0,BM=typeof clearTimeout=="function"?clearTimeout:void 0,n_=typeof Promise=="function"?Promise:void 0,zM=typeof queueMicrotask=="function"?queueMicrotask:typeof n_<"u"?function(t){return n_.resolve(null).then(t).catch(HM)}:t_;function HM(t){setTimeout(function(){throw t})}function Ts(t){return t==="head"}function i_(t,n){var s=n,l=0;do{var f=s.nextSibling;if(t.removeChild(s),f&&f.nodeType===8)if(s=f.data,s==="/$"||s==="/&"){if(l===0){t.removeChild(f),ro(n);return}l--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")l++;else if(s==="html")vl(t.ownerDocument.documentElement);else if(s==="head"){s=t.ownerDocument.head,vl(s);for(var p=s.firstChild;p;){var M=p.nextSibling,C=p.nodeName;p[ji]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&p.rel.toLowerCase()==="stylesheet"||s.removeChild(p),p=M}}else s==="body"&&vl(t.ownerDocument.body);s=f}while(s);ro(n)}function a_(t,n){var s=t;t=0;do{var l=s.nextSibling;if(s.nodeType===1?n?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(n?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),l&&l.nodeType===8)if(s=l.data,s==="/$"){if(t===0)break;t--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||t++;s=l}while(s)}function Ld(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var s=n;switch(n=n.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Ld(s),Zi(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function GM(t,n,s,l){for(;t.nodeType===1;){var f=s;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[ji])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(p=t.getAttribute("rel"),p==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(p!==f.rel||t.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||t.getAttribute("title")!==(f.title==null?null:f.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(p=t.getAttribute("src"),(p!==(f.src==null?null:f.src)||t.getAttribute("type")!==(f.type==null?null:f.type)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&p&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var p=f.name==null?null:""+f.name;if(f.type==="hidden"&&t.getAttribute("name")===p)return t}else return t;if(t=Hi(t.nextSibling),t===null)break}return null}function VM(t,n,s){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=Hi(t.nextSibling),t===null))return null;return t}function s_(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Hi(t.nextSibling),t===null))return null;return t}function Nd(t){return t.data==="$?"||t.data==="$~"}function Ud(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function kM(t,n){var s=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||s.readyState!=="loading")n();else{var l=function(){n(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function Hi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Od=null;function r_(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"||s==="/&"){if(n===0)return Hi(t.nextSibling);n--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||n++}t=t.nextSibling}return null}function o_(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(n===0)return t;n--}else s!=="/$"&&s!=="/&"||n++}t=t.previousSibling}return null}function l_(t,n,s){switch(n=Gc(s),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function vl(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Zi(t)}var Gi=new Map,c_=new Set;function Vc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ka=V.d;V.d={f:XM,r:WM,D:YM,C:qM,L:jM,m:ZM,X:QM,S:KM,M:JM};function XM(){var t=ka.f(),n=Uc();return t||n}function WM(t){var n=Di(t);n!==null&&n.tag===5&&n.type==="form"?A0(n):ka.r(t)}var io=typeof document>"u"?null:document;function u_(t,n,s){var l=io;if(l&&typeof n=="string"&&n){var f=_t(n);f='link[rel="'+t+'"][href="'+f+'"]',typeof s=="string"&&(f+='[crossorigin="'+s+'"]'),c_.has(f)||(c_.add(f),t={rel:t,crossOrigin:s,href:n},l.querySelector(f)===null&&(n=l.createElement("link"),Yn(n,"link",t),pn(n),l.head.appendChild(n)))}}function YM(t){ka.D(t),u_("dns-prefetch",t,null)}function qM(t,n){ka.C(t,n),u_("preconnect",t,n)}function jM(t,n,s){ka.L(t,n,s);var l=io;if(l&&t&&n){var f='link[rel="preload"][as="'+_t(n)+'"]';n==="image"&&s&&s.imageSrcSet?(f+='[imagesrcset="'+_t(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(f+='[imagesizes="'+_t(s.imageSizes)+'"]')):f+='[href="'+_t(t)+'"]';var p=f;switch(n){case"style":p=ao(t);break;case"script":p=so(t)}Gi.has(p)||(t=v({rel:"preload",href:n==="image"&&s&&s.imageSrcSet?void 0:t,as:n},s),Gi.set(p,t),l.querySelector(f)!==null||n==="style"&&l.querySelector(xl(p))||n==="script"&&l.querySelector(Sl(p))||(n=l.createElement("link"),Yn(n,"link",t),pn(n),l.head.appendChild(n)))}}function ZM(t,n){ka.m(t,n);var s=io;if(s&&t){var l=n&&typeof n.as=="string"?n.as:"script",f='link[rel="modulepreload"][as="'+_t(l)+'"][href="'+_t(t)+'"]',p=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":p=so(t)}if(!Gi.has(p)&&(t=v({rel:"modulepreload",href:t},n),Gi.set(p,t),s.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Sl(p)))return}l=s.createElement("link"),Yn(l,"link",t),pn(l),s.head.appendChild(l)}}}function KM(t,n,s){ka.S(t,n,s);var l=io;if(l&&t){var f=Ki(l).hoistableStyles,p=ao(t);n=n||"default";var M=f.get(p);if(!M){var C={loading:0,preload:null};if(M=l.querySelector(xl(p)))C.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":n},s),(s=Gi.get(p))&&Pd(t,s);var k=M=l.createElement("link");pn(k),Yn(k,"link",t),k._p=new Promise(function(re,xe){k.onload=re,k.onerror=xe}),k.addEventListener("load",function(){C.loading|=1}),k.addEventListener("error",function(){C.loading|=2}),C.loading|=4,kc(M,n,l)}M={type:"stylesheet",instance:M,count:1,state:C},f.set(p,M)}}}function QM(t,n){ka.X(t,n);var s=io;if(s&&t){var l=Ki(s).hoistableScripts,f=so(t),p=l.get(f);p||(p=s.querySelector(Sl(f)),p||(t=v({src:t,async:!0},n),(n=Gi.get(f))&&Id(t,n),p=s.createElement("script"),pn(p),Yn(p,"link",t),s.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},l.set(f,p))}}function JM(t,n){ka.M(t,n);var s=io;if(s&&t){var l=Ki(s).hoistableScripts,f=so(t),p=l.get(f);p||(p=s.querySelector(Sl(f)),p||(t=v({src:t,async:!0,type:"module"},n),(n=Gi.get(f))&&Id(t,n),p=s.createElement("script"),pn(p),Yn(p,"link",t),s.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},l.set(f,p))}}function f_(t,n,s,l){var f=(f=ie.current)?Vc(f):null;if(!f)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(n=ao(s.href),s=Ki(f).hoistableStyles,l=s.get(n),l||(l={type:"style",instance:null,count:0,state:null},s.set(n,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=ao(s.href);var p=Ki(f).hoistableStyles,M=p.get(t);if(M||(f=f.ownerDocument||f,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},p.set(t,M),(p=f.querySelector(xl(t)))&&!p._p&&(M.instance=p,M.state.loading=5),Gi.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Gi.set(t,s),p||$M(f,t,s,M.state))),n&&l===null)throw Error(r(528,""));return M}if(n&&l!==null)throw Error(r(529,""));return null;case"script":return n=s.async,s=s.src,typeof s=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=so(s),s=Ki(f).hoistableScripts,l=s.get(n),l||(l={type:"script",instance:null,count:0,state:null},s.set(n,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function ao(t){return'href="'+_t(t)+'"'}function xl(t){return'link[rel="stylesheet"]['+t+"]"}function d_(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function $M(t,n,s,l){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?l.loading=1:(n=t.createElement("link"),l.preload=n,n.addEventListener("load",function(){return l.loading|=1}),n.addEventListener("error",function(){return l.loading|=2}),Yn(n,"link",s),pn(n),t.head.appendChild(n))}function so(t){return'[src="'+_t(t)+'"]'}function Sl(t){return"script[async]"+t}function h_(t,n,s){if(n.count++,n.instance===null)switch(n.type){case"style":var l=t.querySelector('style[data-href~="'+_t(s.href)+'"]');if(l)return n.instance=l,pn(l),l;var f=v({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),pn(l),Yn(l,"style",f),kc(l,s.precedence,t),n.instance=l;case"stylesheet":f=ao(s.href);var p=t.querySelector(xl(f));if(p)return n.state.loading|=4,n.instance=p,pn(p),p;l=d_(s),(f=Gi.get(f))&&Pd(l,f),p=(t.ownerDocument||t).createElement("link"),pn(p);var M=p;return M._p=new Promise(function(C,k){M.onload=C,M.onerror=k}),Yn(p,"link",l),n.state.loading|=4,kc(p,s.precedence,t),n.instance=p;case"script":return p=so(s.src),(f=t.querySelector(Sl(p)))?(n.instance=f,pn(f),f):(l=s,(f=Gi.get(p))&&(l=v({},s),Id(l,f)),t=t.ownerDocument||t,f=t.createElement("script"),pn(f),Yn(f,"link",l),t.head.appendChild(f),n.instance=f);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(l=n.instance,n.state.loading|=4,kc(l,s.precedence,t));return n.instance}function kc(t,n,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,p=f,M=0;M<l.length;M++){var C=l[M];if(C.dataset.precedence===n)p=C;else if(p!==f)break}p?p.parentNode.insertBefore(t,p.nextSibling):(n=s.nodeType===9?s.head:s,n.insertBefore(t,n.firstChild))}function Pd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Id(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Xc=null;function p_(t,n,s){if(Xc===null){var l=new Map,f=Xc=new Map;f.set(s,l)}else f=Xc,l=f.get(s),l||(l=new Map,f.set(s,l));if(l.has(t))return l;for(l.set(t,null),s=s.getElementsByTagName(t),f=0;f<s.length;f++){var p=s[f];if(!(p[ji]||p[sn]||t==="link"&&p.getAttribute("rel")==="stylesheet")&&p.namespaceURI!=="http://www.w3.org/2000/svg"){var M=p.getAttribute(n)||"";M=t+M;var C=l.get(M);C?C.push(p):l.set(M,[p])}}return l}function m_(t,n,s){t=t.ownerDocument||t,t.head.insertBefore(s,n==="title"?t.querySelector("head > title"):null)}function ey(t,n,s){if(s===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function g_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function ty(t,n,s,l){if(s.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var f=ao(l.href),p=n.querySelector(xl(f));if(p){n=p._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Wc.bind(t),n.then(t,t)),s.state.loading|=4,s.instance=p,pn(p);return}p=n.ownerDocument||n,l=d_(l),(f=Gi.get(f))&&Pd(l,f),p=p.createElement("link"),pn(p);var M=p;M._p=new Promise(function(C,k){M.onload=C,M.onerror=k}),Yn(p,"link",l),s.instance=p}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(s,n),(n=s.state.preload)&&(s.state.loading&3)===0&&(t.count++,s=Wc.bind(t),n.addEventListener("load",s),n.addEventListener("error",s))}}var Fd=0;function ny(t,n){return t.stylesheets&&t.count===0&&qc(t,t.stylesheets),0<t.count||0<t.imgCount?function(s){var l=setTimeout(function(){if(t.stylesheets&&qc(t,t.stylesheets),t.unsuspend){var p=t.unsuspend;t.unsuspend=null,p()}},6e4+n);0<t.imgBytes&&Fd===0&&(Fd=62500*IM());var f=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&qc(t,t.stylesheets),t.unsuspend)){var p=t.unsuspend;t.unsuspend=null,p()}},(t.imgBytes>Fd?50:800)+n);return t.unsuspend=s,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(f)}}:null}function Wc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)qc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Yc=null;function qc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Yc=new Map,n.forEach(iy,t),Yc=null,Wc.call(t))}function iy(t,n){if(!(n.state.loading&4)){var s=Yc.get(t);if(s)var l=s.get(null);else{s=new Map,Yc.set(t,s);for(var f=t.querySelectorAll("link[data-precedence],style[data-precedence]"),p=0;p<f.length;p++){var M=f[p];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(s.set(M.dataset.precedence,M),l=M)}l&&s.set(null,l)}f=n.instance,M=f.getAttribute("data-precedence"),p=s.get(M)||l,p===l&&s.set(null,f),s.set(M,f),this.count++,l=Wc.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),p?p.parentNode.insertBefore(f,p.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(f,t.firstChild)),n.state.loading|=4}}var Ml={$$typeof:I,Provider:null,Consumer:null,_currentValue:te,_currentValue2:te,_threadCount:0};function ay(t,n,s,l,f,p,M,C,k){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Qe(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qe(0),this.hiddenUpdates=Qe(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=p,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=k,this.incompleteTransitions=new Map}function __(t,n,s,l,f,p,M,C,k,re,xe,be){return t=new ay(t,n,s,M,k,re,xe,be,C),n=1,p===!0&&(n|=24),p=vi(3,null,null,n),t.current=p,p.stateNode=t,n=gf(),n.refCount++,t.pooledCache=n,n.refCount++,p.memoizedState={element:l,isDehydrated:s,cache:n},Sf(p),t}function v_(t){return t?(t=Ir,t):Ir}function x_(t,n,s,l,f,p){f=v_(f),l.context===null?l.context=f:l.pendingContext=f,l=ps(n),l.payload={element:s},p=p===void 0?null:p,p!==null&&(l.callback=p),s=ms(t,l,n),s!==null&&(hi(s,t,n),$o(s,t,n))}function S_(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<n?s:n}}function Bd(t,n){S_(t,n),(t=t.alternate)&&S_(t,n)}function M_(t){if(t.tag===13||t.tag===31){var n=$s(t,67108864);n!==null&&hi(n,t,67108864),Bd(t,67108864)}}function y_(t){if(t.tag===13||t.tag===31){var n=Ei();n=ks(n);var s=$s(t,n);s!==null&&hi(s,t,n),Bd(t,n)}}var jc=!0;function sy(t,n,s,l){var f=H.T;H.T=null;var p=V.p;try{V.p=2,zd(t,n,s,l)}finally{V.p=p,H.T=f}}function ry(t,n,s,l){var f=H.T;H.T=null;var p=V.p;try{V.p=8,zd(t,n,s,l)}finally{V.p=p,H.T=f}}function zd(t,n,s,l){if(jc){var f=Hd(l);if(f===null)Td(t,n,l,Zc,s),b_(t,l);else if(ly(f,t,n,s,l))l.stopPropagation();else if(b_(t,l),n&4&&-1<oy.indexOf(t)){for(;f!==null;){var p=Di(f);if(p!==null)switch(p.tag){case 3:if(p=p.stateNode,p.current.memoizedState.isDehydrated){var M=Le(p.pendingLanes);if(M!==0){var C=p;for(C.pendingLanes|=2,C.entangledLanes|=2;M;){var k=1<<31-ze(M);C.entanglements[1]|=k,M&=~k}ha(p),(zt&6)===0&&(Lc=Ut()+500,ml(0))}}break;case 31:case 13:C=$s(p,2),C!==null&&hi(C,p,2),Uc(),Bd(p,2)}if(p=Hd(l),p===null&&Td(t,n,l,Zc,s),p===f)break;f=p}f!==null&&l.stopPropagation()}else Td(t,n,l,null,s)}}function Hd(t){return t=ql(t),Gd(t)}var Zc=null;function Gd(t){if(Zc=null,t=wi(t),t!==null){var n=c(t);if(n===null)t=null;else{var s=n.tag;if(s===13){if(t=u(n),t!==null)return t;t=null}else if(s===31){if(t=d(n),t!==null)return t;t=null}else if(s===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Zc=t,null}function E_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Rt()){case P:return 2;case E:return 8;case ee:case ae:return 32;case me:return 268435456;default:return 32}default:return 32}}var Vd=!1,As=null,Rs=null,Cs=null,yl=new Map,El=new Map,ws=[],oy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function b_(t,n){switch(t){case"focusin":case"focusout":As=null;break;case"dragenter":case"dragleave":Rs=null;break;case"mouseover":case"mouseout":Cs=null;break;case"pointerover":case"pointerout":yl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":El.delete(n.pointerId)}}function bl(t,n,s,l,f,p){return t===null||t.nativeEvent!==p?(t={blockedOn:n,domEventName:s,eventSystemFlags:l,nativeEvent:p,targetContainers:[f]},n!==null&&(n=Di(n),n!==null&&M_(n)),t):(t.eventSystemFlags|=l,n=t.targetContainers,f!==null&&n.indexOf(f)===-1&&n.push(f),t)}function ly(t,n,s,l,f){switch(n){case"focusin":return As=bl(As,t,n,s,l,f),!0;case"dragenter":return Rs=bl(Rs,t,n,s,l,f),!0;case"mouseover":return Cs=bl(Cs,t,n,s,l,f),!0;case"pointerover":var p=f.pointerId;return yl.set(p,bl(yl.get(p)||null,t,n,s,l,f)),!0;case"gotpointercapture":return p=f.pointerId,El.set(p,bl(El.get(p)||null,t,n,s,l,f)),!0}return!1}function T_(t){var n=wi(t.target);if(n!==null){var s=c(n);if(s!==null){if(n=s.tag,n===13){if(n=u(s),n!==null){t.blockedOn=n,ns(t.priority,function(){y_(s)});return}}else if(n===31){if(n=d(s),n!==null){t.blockedOn=n,ns(t.priority,function(){y_(s)});return}}else if(n===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Kc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var s=Hd(t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);Bo=l,s.target.dispatchEvent(l),Bo=null}else return n=Di(s),n!==null&&M_(n),t.blockedOn=s,!1;n.shift()}return!0}function A_(t,n,s){Kc(t)&&s.delete(n)}function cy(){Vd=!1,As!==null&&Kc(As)&&(As=null),Rs!==null&&Kc(Rs)&&(Rs=null),Cs!==null&&Kc(Cs)&&(Cs=null),yl.forEach(A_),El.forEach(A_)}function Qc(t,n){t.blockedOn===n&&(t.blockedOn=null,Vd||(Vd=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,cy)))}var Jc=null;function R_(t){Jc!==t&&(Jc=t,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Jc===t&&(Jc=null);for(var n=0;n<t.length;n+=3){var s=t[n],l=t[n+1],f=t[n+2];if(typeof l!="function"){if(Gd(l||s)===null)continue;break}var p=Di(s);p!==null&&(t.splice(n,3),n-=3,Hf(p,{pending:!0,data:f,method:s.method,action:l},l,f))}}))}function ro(t){function n(k){return Qc(k,t)}As!==null&&Qc(As,t),Rs!==null&&Qc(Rs,t),Cs!==null&&Qc(Cs,t),yl.forEach(n),El.forEach(n);for(var s=0;s<ws.length;s++){var l=ws[s];l.blockedOn===t&&(l.blockedOn=null)}for(;0<ws.length&&(s=ws[0],s.blockedOn===null);)T_(s),s.blockedOn===null&&ws.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var f=s[l],p=s[l+1],M=f[Sn]||null;if(typeof p=="function")M||R_(s);else if(M){var C=null;if(p&&p.hasAttribute("formAction")){if(f=p,M=p[Sn]||null)C=M.formAction;else if(Gd(f)!==null)continue}else C=M.action;typeof C=="function"?s[l+1]=C:(s.splice(l,3),l-=3),R_(s)}}}function C_(){function t(p){p.canIntercept&&p.info==="react-transition"&&p.intercept({handler:function(){return new Promise(function(M){return f=M})},focusReset:"manual",scroll:"manual"})}function n(){f!==null&&(f(),f=null),l||setTimeout(s,20)}function s(){if(!l&&!navigation.transition){var p=navigation.currentEntry;p&&p.url!=null&&navigation.navigate(p.url,{state:p.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,f=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(s,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),f!==null&&(f(),f=null)}}}function kd(t){this._internalRoot=t}$c.prototype.render=kd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var s=n.current,l=Ei();x_(s,l,t,n,null,null)},$c.prototype.unmount=kd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;x_(t.current,2,null,t,null,null),Uc(),n[zn]=null}};function $c(t){this._internalRoot=t}$c.prototype.unstable_scheduleHydration=function(t){if(t){var n=ba();t={blockedOn:null,target:t,priority:n};for(var s=0;s<ws.length&&n!==0&&n<ws[s].priority;s++);ws.splice(s,0,t),s===0&&T_(t)}};var w_=e.version;if(w_!=="19.2.7")throw Error(r(527,w_,"19.2.7"));V.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=h(n),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var uy={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:H,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var eu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!eu.isDisabled&&eu.supportsFiber)try{fe=eu.inject(uy),pe=eu}catch{}}return Al.createRoot=function(t,n){if(!o(t))throw Error(r(299));var s=!1,l="",f=I0,p=F0,M=B0;return n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(f=n.onUncaughtError),n.onCaughtError!==void 0&&(p=n.onCaughtError),n.onRecoverableError!==void 0&&(M=n.onRecoverableError)),n=__(t,1,!1,null,null,s,l,null,f,p,M,C_),t[zn]=n.current,bd(t),new kd(n)},Al.hydrateRoot=function(t,n,s){if(!o(t))throw Error(r(299));var l=!1,f="",p=I0,M=F0,C=B0,k=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onUncaughtError!==void 0&&(p=s.onUncaughtError),s.onCaughtError!==void 0&&(M=s.onCaughtError),s.onRecoverableError!==void 0&&(C=s.onRecoverableError),s.formState!==void 0&&(k=s.formState)),n=__(t,1,!0,n,s??null,l,f,k,p,M,C,C_),n.context=v_(null),s=n.current,l=Ei(),l=ks(l),f=ps(l),f.callback=null,ms(s,f,l),s=l,n.current.lanes=s,Ye(n,s),ha(n),t[zn]=n.current,bd(t),new $c(n)},Al.version="19.2.7",Al}var z_;function xy(){if(z_)return Yd.exports;z_=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),Yd.exports=vy(),Yd.exports}var Sy=xy();const My={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_APP_URL:"https://demo.morpheum.io",VITE_DISCORD_URL:"",VITE_DOCS_URL:"",VITE_MANIFESTO_URL:"",VITE_TUTORIAL_VIDEO_URL:"",VITE_X_URL:""},oo=(a,e="#")=>{var i;return((i=My[a])==null?void 0:i.trim())||e},Dn={app:oo("VITE_APP_URL","https://demo.morpheum.io"),docs:oo("VITE_DOCS_URL"),manifesto:oo("VITE_MANIFESTO_URL"),discord:oo("VITE_DISCORD_URL"),x:oo("VITE_X_URL"),tutorialVideo:oo("VITE_TUTORIAL_VIDEO_URL",""),explore:"#explore",exploreAgents:"#explore-agents",exploreVaults:"#explore-vaults"},bu=[{id:"demo",label:"Demo",href:"#demo"},{id:"personas",label:"Personas",href:"#personas"},{id:"how",label:"How it works",href:"#how"},{id:"explore",label:"Explore",href:"#explore"}],Kd={text:"> The agent-native L1 DEX, for faster and safer trades.",href:Dn.manifesto},Ls={eyebrow:{label:"A manifesto for verifiable agents",href:Dn.manifesto},headline:["Agents you can trust.","Assets you can trade."],primaryCta:{label:"Launch Morpheum",href:Dn.app},secondaryCta:{label:"Explore agents",href:Dn.explore}},H_={risks:[{risk:"Speculation without underwriting",failure:"Buy random agent tokens on narrative alone.",solveLabel:"Proof",solve:"Underwrite on receipts, reputation, and risk scores — before you commit a dollar."},{risk:"Automation without capital controls",failure:"Run an agent with unbounded capital and no kill switch.",solveLabel:"Controls",solve:"Set Risk Level, approve gated moves, and isolate each strategy in its own bucket."}],close:"The Agent-native L1 DEX — faster, safer trades."},G_=[{label:"MAEX indices",status:"LIVE",live:!0},{label:"Agents",status:"REPUTATION / SHARPE / ROI"},{label:"Risk level",status:"MANUAL / HITL / HANDS-OFF"},{label:"Agent notifications",status:"WANT-TO / ACTION / PAUSED / REJECTED"},{label:"Copy buckets",status:"LIVE",live:!0},{label:"Buckets",status:"RISK-ISOLATED"},{label:"Vaults",status:"ONCHAIN"},{label:"Staking",status:"LIVE",live:!0}],zh={kicker:"Product tour",videoCaption:"See an agent discovered, copied, supervised, and isolated in ~60s.",verbs:[{verb:"Discover",description:"Agents & indices — proof first."},{verb:"Copy",description:"Mirror a proven agent into your bucket."},{verb:"Supervise",description:"Approve gated moves on HITL."},{verb:"Isolate",description:"Risk contained in its own bucket."}]},Qd={kicker:"Choose your path",title:"Become part of the agent economy",items:[{title:"Become an Operator",weight:"major",steps:["Mint an agent and set its mandate.","Choose a Risk Level: Manual · HITL · Hands-off.","Build a proven track record investors can underwrite."],cta:{label:"Run an agent",href:Dn.exploreAgents},meta:{kind:"identity",name:"SharpeShark",tx:"0xa4c2…8f1d",hash:"did:morph:0x7a3f…c91e",chain:"Morpheum · hop 0",verified:"yes",rep:"72",portable:"yes",next:"minting mandate…"}},{title:"Become a Copy Trader",weight:"major",steps:["Screen agents on real proof — receipts and risk scores.","Mirror the best into your own dedicated bucket.","Track PnL and rebalance anytime."],cta:{label:"Start copying",href:Dn.exploreAgents},meta:{kind:"chain",label:"on-chain transactions",chain:"Morpheum · hop 0",steps:[{op:"mint agent",tx:"0xa4c2…8f1d",status:"settled"},{op:"mint bucket",tx:"0xb91e…4c02",status:"settled"},{op:"fund transfer",tx:"0xe81a…3b70",status:"settled",from:"SortinoSloth",to:"your bucket",asset:"USDC",amt:"2500"}]}},{title:"Provide Capital",weight:"light",steps:["Deposit into a vault or bucket.","Stake to earn.","Withdraw on your terms."],cta:{label:"Explore vaults",href:Dn.exploreVaults},meta:{kind:"community",label:"on-chain transaction",tx:"0x12af…9e44",from:"you",to:"Vault-Alpha",asset:"USDC",amt:"10000",chain:"Morpheum · hop 0",status:"queued"}}]},Ns={kicker:"How it works",title:"Discover → Copy → Supervise → Isolate",outcome:"A proven, risk-isolated capital position — not a bet on a black box.",chips:[{label:"Risk level",value:"Manual · HITL · Hands-off"},{label:"Notifications",value:"Want-to · Action · Paused · Rejected"},{label:"Capital",value:"Bucket / Vault"}],steps:[{n:1,title:"Discover",feature:"Agents & Indices + proof",body:"Browse the MAEX roster and index catalog and read the proof before you commit a dollar.",example:"Open SharpeShark and see its receipts, reputation, risk score, and Sharpe / ROI side by side."},{n:2,title:"Copy",feature:"Copy Trade",body:"Mirror a proven performer into your own bucket in one click, sized to your capital, with spread / funding cost shown before you confirm.",example:"One click clones SharpeShark's strategy into a fresh bucket bound to your wallet."},{n:3,title:"Supervise",feature:"Risk Level + Agent Notifications",body:"Set how much the agent may act on its own — Manual · HITL · Hands-off — and stay in the loop through Agent Notifications: Want to · Action · Paused · Rejected.",example:'On HITL, a "Want to open ETH long" notification waits for your inline Approve / Reject, and Explain shows why the agent wants the trade.'},{n:4,title:"Isolate",feature:"Buckets",body:"Every mirror lands in its own dedicated cross-margin bucket bound to a wallet executor agent, so risk is contained per strategy.",example:"SharpeShark runs in its own bucket with its own margin and exposure — if it draws down, only that bucket's capital is at risk; your other buckets and spot balance are untouched."}]},lo={kicker:"Explore",title:"Agents. Indices. Buckets. Vaults.",cards:[{title:"Agents",verbs:["Browse","Compare","Copy"],agents:[{name:"SharpeShark",sharpe:"2.41",roi:"+38.2%",risk:"72",positive:!0},{name:"SortinoSloth",sharpe:"1.86",roi:"+21.4%",risk:"58",positive:!0},{name:"FundingFox",sharpe:"1.12",roi:"-4.1%",risk:"41",positive:!1}]},{title:"Indices",verbs:["Track","Weight","Hold"],blurb:"Curated agent baskets for one-click exposure to proven strategies.",sample:[{label:"MAEX Core",value:"+12.8%",positive:!0},{label:"Risk-Off Bucket",value:"+4.2%",positive:!0}]},{title:"Buckets",verbs:["Isolate","Trade","Contain"],blurb:"Risk-isolated positions — each strategy in its own margin shell.",sample:[{label:"Bucket A",value:"ISOLATED",positive:!1},{label:"Bucket B",value:"ISOLATED",positive:!1}]},{title:"Vaults",verbs:["Deposit","Earn","Withdraw"],blurb:"Pooled onchain capital — graded vaults with live APR and TVL.",sample:[{label:"MLP (House Liq.)",value:"A · 18.4%",meta:"$9.8M TVL"},{label:"Basis Capture",value:"A · 14.2%",meta:"$2.1M TVL"}]}]},tu={line:"Back agents you can prove. Own the upside.",primaryCta:{label:"Launch Demo",href:Dn.app},social:[{label:"Join Discord",href:Dn.discord},{label:"Join X",href:Dn.x}]},V_={legal:"© 2026 Morpheum. Capital funds proof.",labels:["validators","stakings","ZKProof"]};function Do({variant:a="primary",children:e,className:i="",...r}){const o=`cta cta--${a} terminal-interactive ${i}`.trim();if("href"in r&&r.href!==void 0){const{href:c,...u}=r;return D.jsx("a",{className:o,href:c,...u,children:e})}return D.jsx("button",{className:o,type:"button",...r,children:e})}function yy(){return D.jsx("section",{id:"join",className:"section community",children:D.jsxs("div",{className:"container community__inner",children:[D.jsx("h2",{className:"community__line",children:tu.line}),D.jsxs("div",{className:"community__ctas",children:[D.jsx(Do,{href:tu.primaryCta.href,variant:"primary",children:tu.primaryCta.label}),tu.social.map(a=>D.jsx(Do,{href:a.href,variant:"ghost",children:a.label},a.label))]})]})})}function Ey(){const[a,e]=ke.useState(!1),i=!!Dn.tutorialVideo;return D.jsx("section",{id:"demo",className:"section demo",children:D.jsxs("div",{className:"container",children:[D.jsx("p",{className:"section-kicker",children:zh.kicker}),D.jsxs("div",{className:"demo__video",children:[a&&i?D.jsx("video",{className:"demo__player",src:Dn.tutorialVideo,controls:!0,autoPlay:!0,playsInline:!0}):D.jsxs("button",{type:"button",className:"demo__poster",onClick:()=>i&&e(!0),"aria-label":i?"Play tutorial video":"Tutorial video coming soon",children:[D.jsx("span",{className:"demo__play","aria-hidden":!0,children:"▶"}),D.jsx("span",{className:"demo__poster-label",children:"Tutorial"})]}),D.jsx("p",{className:"demo__caption",children:zh.videoCaption})]})]})})}const by={receipt:"Receipt",riskScore:"Risk",credential:"Credential",verified:"Verified"};function Jd({type:a,value:e}){return D.jsxs("span",{className:`proof-chip proof-chip--${a}`,children:[D.jsx("span",{className:"proof-chip__dot","aria-hidden":!0}),D.jsx("span",{className:"proof-chip__label",children:by[a]}),e?D.jsx("span",{className:"proof-chip__value",children:e}):null]})}function Ty(){const a=lo.cards[0],e=lo.cards[1],i=lo.cards[2],r=lo.cards[3];return D.jsx("section",{id:"explore",className:"section explore",children:D.jsxs("div",{className:"container",children:[D.jsx("p",{className:"section-kicker",children:lo.kicker}),D.jsx("h2",{className:"section-title explore__title",children:lo.title}),D.jsxs("div",{className:"explore__grid",children:[D.jsxs("article",{id:"explore-agents",className:"explore-card explore-card--major",children:[D.jsxs("header",{className:"explore-card__header",children:[D.jsx("h3",{className:"explore-card__title",children:a.title}),D.jsx("p",{className:"explore-card__verbs",children:a.verbs.join(" · ").toUpperCase()})]}),D.jsx("ul",{className:"explore-roster",children:a.agents.map(o=>D.jsxs("li",{className:"explore-roster__row",children:[D.jsxs("div",{className:"explore-roster__top",children:[D.jsx("span",{className:"explore-roster__name",children:o.name}),D.jsx("span",{className:`terminal-value ${o.positive?"terminal-long":"terminal-short"}`,children:o.roi})]}),D.jsxs("div",{className:"explore-roster__proof",children:[D.jsx(Jd,{type:"verified"}),D.jsx(Jd,{type:"riskScore",value:o.risk}),D.jsx(Jd,{type:"receipt"}),D.jsxs("span",{className:"terminal-value explore-roster__sharpe",children:["Sharpe ",o.sharpe]})]})]},o.name))})]}),D.jsxs("article",{className:"explore-card explore-card--major",children:[D.jsxs("header",{className:"explore-card__header",children:[D.jsx("h3",{className:"explore-card__title",children:e.title}),D.jsx("p",{className:"explore-card__verbs",children:e.verbs.join(" · ").toUpperCase()})]}),D.jsx("p",{className:"explore-card__blurb",children:e.blurb}),D.jsx("ul",{className:"explore-sample",children:e.sample.map(o=>D.jsxs("li",{children:[D.jsx("span",{className:"terminal-label",children:o.label}),D.jsx("span",{className:`terminal-value ${o.positive?"terminal-long":""}`,children:o.value})]},o.label))})]}),D.jsxs("article",{id:"explore-buckets",className:"explore-card explore-card--major",children:[D.jsxs("header",{className:"explore-card__header",children:[D.jsx("h3",{className:"explore-card__title",children:i.title}),D.jsx("p",{className:"explore-card__verbs",children:i.verbs.join(" · ").toUpperCase()})]}),D.jsx("p",{className:"explore-card__blurb",children:i.blurb}),D.jsx("ul",{className:"explore-sample",children:i.sample.map(o=>D.jsxs("li",{children:[D.jsx("span",{className:"terminal-label",children:o.label}),D.jsx("span",{className:"terminal-value explore-sample__status",children:o.value})]},o.label))})]}),D.jsxs("article",{id:"explore-vaults",className:"explore-card explore-card--major",children:[D.jsxs("header",{className:"explore-card__header",children:[D.jsx("h3",{className:"explore-card__title",children:r.title}),D.jsx("p",{className:"explore-card__verbs",children:r.verbs.join(" · ").toUpperCase()})]}),D.jsx("p",{className:"explore-card__blurb",children:r.blurb}),D.jsx("ul",{className:"explore-sample",children:r.sample.map(o=>D.jsxs("li",{children:[D.jsx("span",{className:"terminal-label",children:o.label}),D.jsxs("span",{className:"explore-sample__metrics",children:[D.jsx("span",{className:"terminal-value terminal-long",children:o.value}),D.jsx("span",{className:"terminal-value explore-sample__meta",children:o.meta})]})]},o.label))})]})]})]})})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Up="185",Ay=0,k_=1,Ry=2,Tu=1,Cy=2,Ul=3,$a=0,mi=1,_a=2,Qa=0,Ao=1,Hh=2,X_=3,W_=4,wy=5,xr=100,Dy=101,Ly=102,Ny=103,Uy=104,Oy=200,Py=201,Iy=202,Fy=203,Gh=204,Vh=205,By=206,zy=207,Hy=208,Gy=209,Vy=210,ky=211,Xy=212,Wy=213,Yy=214,kh=0,Xh=1,Wh=2,Lo=3,Yh=4,qh=5,jh=6,Zh=7,mx=0,qy=1,jy=2,Sa=0,gx=1,_x=2,vx=3,xx=4,Sx=5,Mx=6,yx=7,Ex=300,Er=301,No=302,$d=303,eh=304,Vu=306,Kh=1e3,sa=1001,Qh=1002,jn=1003,Zy=1004,nu=1005,dn=1006,th=1007,Hs=1008,Xi=1009,bx=1010,Tx=1011,Gl=1012,Op=1013,Ea=1014,va=1015,es=1016,Pp=1017,Ip=1018,Vl=1020,Ax=35902,Rx=35899,Cx=1021,wx=1022,ra=1023,ts=1026,yr=1027,Dx=1028,Fp=1029,br=1030,Bp=1031,zp=1033,Au=33776,Ru=33777,Cu=33778,wu=33779,Jh=35840,$h=35841,ep=35842,tp=35843,np=36196,ip=37492,ap=37496,sp=37488,rp=37489,Nu=37490,op=37491,lp=37808,cp=37809,up=37810,fp=37811,dp=37812,hp=37813,pp=37814,mp=37815,gp=37816,_p=37817,vp=37818,xp=37819,Sp=37820,Mp=37821,yp=36492,Ep=36494,bp=36495,Tp=36283,Ap=36284,Uu=36285,Rp=36286,Ky=3200,Y_=0,Qy=1,zs="",ei="srgb",Ou="srgb-linear",Pu="linear",Wt="srgb",co=7680,q_=519,Jy=512,$y=513,eE=514,Hp=515,tE=516,nE=517,Gp=518,iE=519,j_=35044,Z_="300 es",xa=2e3,Iu=2001;function aE(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function Fu(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function sE(){const a=Fu("canvas");return a.style.display="block",a}const K_={};function Q_(...a){const e="THREE."+a.shift();console.log(e,...a)}function Lx(a){const e=a[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=a[1];i&&i.isStackTrace?a[0]+=" "+i.getLocation():a[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return a}function rt(...a){a=Lx(a);const e="THREE."+a.shift();{const i=a[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...a)}}function Nt(...a){a=Lx(a);const e="THREE."+a.shift();{const i=a[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...a)}}function Ro(...a){const e=a.join(" ");e in K_||(K_[e]=!0,rt(...a))}function rE(a,e,i){return new Promise(function(r,o){function c(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:o();break;case a.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}const oE={[kh]:Xh,[Wh]:jh,[Yh]:Zh,[Lo]:qh,[Xh]:kh,[jh]:Wh,[Zh]:Yh,[qh]:Lo};class Ar{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const c=o.indexOf(i);c!==-1&&o.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,e);e.target=null}}}const Jn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let J_=1234567;const Bl=Math.PI/180,kl=180/Math.PI;function Po(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Jn[a&255]+Jn[a>>8&255]+Jn[a>>16&255]+Jn[a>>24&255]+"-"+Jn[e&255]+Jn[e>>8&255]+"-"+Jn[e>>16&15|64]+Jn[e>>24&255]+"-"+Jn[i&63|128]+Jn[i>>8&255]+"-"+Jn[i>>16&255]+Jn[i>>24&255]+Jn[r&255]+Jn[r>>8&255]+Jn[r>>16&255]+Jn[r>>24&255]).toLowerCase()}function xt(a,e,i){return Math.max(e,Math.min(i,a))}function Vp(a,e){return(a%e+e)%e}function lE(a,e,i,r,o){return r+(a-e)*(o-r)/(i-e)}function cE(a,e,i){return a!==e?(i-a)/(e-a):0}function zl(a,e,i){return(1-i)*a+i*e}function uE(a,e,i,r){return zl(a,e,1-Math.exp(-i*r))}function fE(a,e=1){return e-Math.abs(Vp(a,e*2)-e)}function dE(a,e,i){return a<=e?0:a>=i?1:(a=(a-e)/(i-e),a*a*(3-2*a))}function hE(a,e,i){return a<=e?0:a>=i?1:(a=(a-e)/(i-e),a*a*a*(a*(a*6-15)+10))}function pE(a,e){return a+Math.floor(Math.random()*(e-a+1))}function mE(a,e){return a+Math.random()*(e-a)}function gE(a){return a*(.5-Math.random())}function _E(a){a!==void 0&&(J_=a);let e=J_+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function vE(a){return a*Bl}function xE(a){return a*kl}function SE(a){return(a&a-1)===0&&a!==0}function ME(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function yE(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function EE(a,e,i,r,o){const c=Math.cos,u=Math.sin,d=c(i/2),m=u(i/2),h=c((e+r)/2),g=u((e+r)/2),v=c((e-r)/2),_=u((e-r)/2),S=c((r-e)/2),b=u((r-e)/2);switch(o){case"XYX":a.set(d*g,m*v,m*_,d*h);break;case"YZY":a.set(m*_,d*g,m*v,d*h);break;case"ZXZ":a.set(m*v,m*_,d*g,d*h);break;case"XZX":a.set(d*g,m*b,m*S,d*h);break;case"YXY":a.set(m*S,d*g,m*b,d*h);break;case"ZYZ":a.set(m*b,m*S,d*g,d*h);break;default:rt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function bo(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function si(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Ht={DEG2RAD:Bl,RAD2DEG:kl,generateUUID:Po,clamp:xt,euclideanModulo:Vp,mapLinear:lE,inverseLerp:cE,lerp:zl,damp:uE,pingpong:fE,smoothstep:dE,smootherstep:hE,randInt:pE,randFloat:mE,randFloatSpread:gE,seededRandom:_E,degToRad:vE,radToDeg:xE,isPowerOfTwo:SE,ceilPowerOfTwo:ME,floorPowerOfTwo:yE,setQuaternionFromProperEuler:EE,normalize:si,denormalize:bo},Jp=class Jp{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,o=e.elements;return this.x=o[0]*i+o[3]*r+o[6],this.y=o[1]*i+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=xt(this.x,e.x,i.x),this.y=xt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=xt(this.x,e,i),this.y=xt(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(xt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),o=Math.sin(i),c=this.x-e.x,u=this.y-e.y;return this.x=c*r-u*o+e.x,this.y=c*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Jp.prototype.isVector2=!0;let Ft=Jp;class Io{constructor(e=0,i=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=o}static slerpFlat(e,i,r,o,c,u,d){let m=r[o+0],h=r[o+1],g=r[o+2],v=r[o+3],_=c[u+0],S=c[u+1],b=c[u+2],R=c[u+3];if(v!==R||m!==_||h!==S||g!==b){let y=m*_+h*S+g*b+v*R;y<0&&(_=-_,S=-S,b=-b,R=-R,y=-y);let x=1-d;if(y<.9995){const F=Math.acos(y),I=Math.sin(F);x=Math.sin(x*F)/I,d=Math.sin(d*F)/I,m=m*x+_*d,h=h*x+S*d,g=g*x+b*d,v=v*x+R*d}else{m=m*x+_*d,h=h*x+S*d,g=g*x+b*d,v=v*x+R*d;const F=1/Math.sqrt(m*m+h*h+g*g+v*v);m*=F,h*=F,g*=F,v*=F}}e[i]=m,e[i+1]=h,e[i+2]=g,e[i+3]=v}static multiplyQuaternionsFlat(e,i,r,o,c,u){const d=r[o],m=r[o+1],h=r[o+2],g=r[o+3],v=c[u],_=c[u+1],S=c[u+2],b=c[u+3];return e[i]=d*b+g*v+m*S-h*_,e[i+1]=m*b+g*_+h*v-d*S,e[i+2]=h*b+g*S+d*_-m*v,e[i+3]=g*b-d*v-m*_-h*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,o){return this._x=e,this._y=i,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,o=e._y,c=e._z,u=e._order,d=Math.cos,m=Math.sin,h=d(r/2),g=d(o/2),v=d(c/2),_=m(r/2),S=m(o/2),b=m(c/2);switch(u){case"XYZ":this._x=_*g*v+h*S*b,this._y=h*S*v-_*g*b,this._z=h*g*b+_*S*v,this._w=h*g*v-_*S*b;break;case"YXZ":this._x=_*g*v+h*S*b,this._y=h*S*v-_*g*b,this._z=h*g*b-_*S*v,this._w=h*g*v+_*S*b;break;case"ZXY":this._x=_*g*v-h*S*b,this._y=h*S*v+_*g*b,this._z=h*g*b+_*S*v,this._w=h*g*v-_*S*b;break;case"ZYX":this._x=_*g*v-h*S*b,this._y=h*S*v+_*g*b,this._z=h*g*b-_*S*v,this._w=h*g*v+_*S*b;break;case"YZX":this._x=_*g*v+h*S*b,this._y=h*S*v+_*g*b,this._z=h*g*b-_*S*v,this._w=h*g*v-_*S*b;break;case"XZY":this._x=_*g*v-h*S*b,this._y=h*S*v-_*g*b,this._z=h*g*b+_*S*v,this._w=h*g*v+_*S*b;break;default:rt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],o=i[4],c=i[8],u=i[1],d=i[5],m=i[9],h=i[2],g=i[6],v=i[10],_=r+d+v;if(_>0){const S=.5/Math.sqrt(_+1);this._w=.25/S,this._x=(g-m)*S,this._y=(c-h)*S,this._z=(u-o)*S}else if(r>d&&r>v){const S=2*Math.sqrt(1+r-d-v);this._w=(g-m)/S,this._x=.25*S,this._y=(o+u)/S,this._z=(c+h)/S}else if(d>v){const S=2*Math.sqrt(1+d-r-v);this._w=(c-h)/S,this._x=(o+u)/S,this._y=.25*S,this._z=(m+g)/S}else{const S=2*Math.sqrt(1+v-r-d);this._w=(u-o)/S,this._x=(c+h)/S,this._y=(m+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xt(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,i/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,o=e._y,c=e._z,u=e._w,d=i._x,m=i._y,h=i._z,g=i._w;return this._x=r*g+u*d+o*h-c*m,this._y=o*g+u*m+c*d-r*h,this._z=c*g+u*h+r*m-o*d,this._w=u*g-r*d-o*m-c*h,this._onChangeCallback(),this}slerp(e,i){let r=e._x,o=e._y,c=e._z,u=e._w,d=this.dot(e);d<0&&(r=-r,o=-o,c=-c,u=-u,d=-d);let m=1-i;if(d<.9995){const h=Math.acos(d),g=Math.sin(h);m=Math.sin(m*h)/g,i=Math.sin(i*h)/g,this._x=this._x*m+r*i,this._y=this._y*m+o*i,this._z=this._z*m+c*i,this._w=this._w*m+u*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+o*i,this._z=this._z*m+c*i,this._w=this._w*m+u*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const $p=class $p{constructor(e=0,i=0,r=0){this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion($_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion($_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*o,this.y=c[1]*i+c[4]*r+c[7]*o,this.z=c[2]*i+c[5]*r+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,o=this.z,c=e.elements,u=1/(c[3]*i+c[7]*r+c[11]*o+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*o+c[12])*u,this.y=(c[1]*i+c[5]*r+c[9]*o+c[13])*u,this.z=(c[2]*i+c[6]*r+c[10]*o+c[14])*u,this}applyQuaternion(e){const i=this.x,r=this.y,o=this.z,c=e.x,u=e.y,d=e.z,m=e.w,h=2*(u*o-d*r),g=2*(d*i-c*o),v=2*(c*r-u*i);return this.x=i+m*h+u*v-d*g,this.y=r+m*g+d*h-c*v,this.z=o+m*v+c*g-u*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*o,this.y=c[1]*i+c[5]*r+c[9]*o,this.z=c[2]*i+c[6]*r+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=xt(this.x,e.x,i.x),this.y=xt(this.y,e.y,i.y),this.z=xt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=xt(this.x,e,i),this.y=xt(this.y,e,i),this.z=xt(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,o=e.y,c=e.z,u=i.x,d=i.y,m=i.z;return this.x=o*m-c*d,this.y=c*u-r*m,this.z=r*d-o*u,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return nh.copy(this).projectOnVector(e),this.sub(nh)}reflect(e){return this.sub(nh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(xt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return i*i+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const o=Math.sin(i)*e;return this.x=o*Math.sin(r),this.y=Math.cos(i)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=o,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};$p.prototype.isVector3=!0;let ne=$p;const nh=new ne,$_=new Io,em=class em{constructor(e,i,r,o,c,u,d,m,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,o,c,u,d,m,h)}set(e,i,r,o,c,u,d,m,h){const g=this.elements;return g[0]=e,g[1]=o,g[2]=d,g[3]=i,g[4]=c,g[5]=m,g[6]=r,g[7]=u,g[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,o=i.elements,c=this.elements,u=r[0],d=r[3],m=r[6],h=r[1],g=r[4],v=r[7],_=r[2],S=r[5],b=r[8],R=o[0],y=o[3],x=o[6],F=o[1],I=o[4],w=o[7],O=o[2],L=o[5],z=o[8];return c[0]=u*R+d*F+m*O,c[3]=u*y+d*I+m*L,c[6]=u*x+d*w+m*z,c[1]=h*R+g*F+v*O,c[4]=h*y+g*I+v*L,c[7]=h*x+g*w+v*z,c[2]=_*R+S*F+b*O,c[5]=_*y+S*I+b*L,c[8]=_*x+S*w+b*z,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],o=e[2],c=e[3],u=e[4],d=e[5],m=e[6],h=e[7],g=e[8];return i*u*g-i*d*h-r*c*g+r*d*m+o*c*h-o*u*m}invert(){const e=this.elements,i=e[0],r=e[1],o=e[2],c=e[3],u=e[4],d=e[5],m=e[6],h=e[7],g=e[8],v=g*u-d*h,_=d*m-g*c,S=h*c-u*m,b=i*v+r*_+o*S;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/b;return e[0]=v*R,e[1]=(o*h-g*r)*R,e[2]=(d*r-o*u)*R,e[3]=_*R,e[4]=(g*i-o*m)*R,e[5]=(o*c-d*i)*R,e[6]=S*R,e[7]=(r*m-h*i)*R,e[8]=(u*i-r*c)*R,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,o,c,u,d){const m=Math.cos(c),h=Math.sin(c);return this.set(r*m,r*h,-r*(m*u+h*d)+u+e,-o*h,o*m,-o*(-h*u+m*d)+d+i,0,0,1),this}scale(e,i){return Ro("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ih.makeScale(e,i)),this}rotate(e){return Ro("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ih.makeRotation(-e)),this}translate(e,i){return Ro("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ih.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let o=0;o<9;o++)if(i[o]!==r[o])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};em.prototype.isMatrix3=!0;let ct=em;const ih=new ct,ev=new ct().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),tv=new ct().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function bE(){const a={enabled:!0,workingColorSpace:Ou,spaces:{},convert:function(o,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===Wt&&(o.r=Ja(o.r),o.g=Ja(o.g),o.b=Ja(o.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Wt&&(o.r=Co(o.r),o.g=Co(o.g),o.b=Co(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===zs?Pu:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,u){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return Ro("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return Ro("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(o,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return a.define({[Ou]:{primaries:e,whitePoint:r,transfer:Pu,toXYZ:ev,fromXYZ:tv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ei},outputColorSpaceConfig:{drawingBufferColorSpace:ei}},[ei]:{primaries:e,whitePoint:r,transfer:Wt,toXYZ:ev,fromXYZ:tv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ei}}}),a}const wt=bE();function Ja(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Co(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let uo;class TE{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{uo===void 0&&(uo=Fu("canvas")),uo.width=e.width,uo.height=e.height;const o=uo.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=uo}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Fu("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=Ja(c[u]/255)*255;return r.putImageData(o,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(Ja(i[r]/255)*255):i[r]=Ja(i[r]);return{data:i,width:e.width,height:e.height}}else return rt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let AE=0;class kp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:AE++}),this.uuid=Po(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,d=o.length;u<d;u++)o[u].isDataTexture?c.push(ah(o[u].image)):c.push(ah(o[u]))}else c=ah(o);r.url=c}return i||(e.images[this.uuid]=r),r}}function ah(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?TE.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(rt("Texture: Unable to serialize Texture."),{})}let RE=0;const sh=new ne;class Zn extends Ar{constructor(e=Zn.DEFAULT_IMAGE,i=Zn.DEFAULT_MAPPING,r=sa,o=sa,c=dn,u=Hs,d=ra,m=Xi,h=Zn.DEFAULT_ANISOTROPY,g=zs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:RE++}),this.uuid=Po(),this.name="",this.source=new kp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=h,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Ft(0,0),this.repeat=new Ft(1,1),this.center=new Ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(sh).x}get height(){return this.source.getSize(sh).y}get depth(){return this.source.getSize(sh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){rt(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const o=this[i];if(o===void 0){rt(`Texture.setValues(): property '${i}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ex)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Kh:e.x=e.x-Math.floor(e.x);break;case sa:e.x=e.x<0?0:1;break;case Qh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Kh:e.y=e.y-Math.floor(e.y);break;case sa:e.y=e.y<0?0:1;break;case Qh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Zn.DEFAULT_IMAGE=null;Zn.DEFAULT_MAPPING=Ex;Zn.DEFAULT_ANISOTROPY=1;const tm=class tm{constructor(e=0,i=0,r=0,o=1){this.x=e,this.y=i,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,o){return this.x=e,this.y=i,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,o=this.z,c=this.w,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*o+u[12]*c,this.y=u[1]*i+u[5]*r+u[9]*o+u[13]*c,this.z=u[2]*i+u[6]*r+u[10]*o+u[14]*c,this.w=u[3]*i+u[7]*r+u[11]*o+u[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,o,c;const m=e.elements,h=m[0],g=m[4],v=m[8],_=m[1],S=m[5],b=m[9],R=m[2],y=m[6],x=m[10];if(Math.abs(g-_)<.01&&Math.abs(v-R)<.01&&Math.abs(b-y)<.01){if(Math.abs(g+_)<.1&&Math.abs(v+R)<.1&&Math.abs(b+y)<.1&&Math.abs(h+S+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const I=(h+1)/2,w=(S+1)/2,O=(x+1)/2,L=(g+_)/4,z=(v+R)/4,T=(b+y)/4;return I>w&&I>O?I<.01?(r=0,o=.707106781,c=.707106781):(r=Math.sqrt(I),o=L/r,c=z/r):w>O?w<.01?(r=.707106781,o=0,c=.707106781):(o=Math.sqrt(w),r=L/o,c=T/o):O<.01?(r=.707106781,o=.707106781,c=0):(c=Math.sqrt(O),r=z/c,o=T/c),this.set(r,o,c,i),this}let F=Math.sqrt((y-b)*(y-b)+(v-R)*(v-R)+(_-g)*(_-g));return Math.abs(F)<.001&&(F=1),this.x=(y-b)/F,this.y=(v-R)/F,this.z=(_-g)/F,this.w=Math.acos((h+S+x-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=xt(this.x,e.x,i.x),this.y=xt(this.y,e.y,i.y),this.z=xt(this.z,e.z,i.z),this.w=xt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=xt(this.x,e,i),this.y=xt(this.y,e,i),this.z=xt(this.z,e,i),this.w=xt(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};tm.prototype.isVector4=!0;let vn=tm;class CE extends Ar{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new vn(0,0,e,i),this.scissorTest=!1,this.viewport=new vn(0,0,e,i),this.textures=[];const o={width:e,height:i,depth:r.depth},c=new Zn(o),u=r.count;for(let d=0;d<u;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const i={minFilter:dn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=i,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const o=Object.assign({},e.textures[i].image);this.textures[i].source=new kp(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ma extends CE{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class Nx extends Zn{constructor(e=null,i=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:o},this.magFilter=jn,this.minFilter=jn,this.wrapR=sa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class wE extends Zn{constructor(e=null,i=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:o},this.magFilter=jn,this.minFilter=jn,this.wrapR=sa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Gu=class Gu{constructor(e,i,r,o,c,u,d,m,h,g,v,_,S,b,R,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,o,c,u,d,m,h,g,v,_,S,b,R,y)}set(e,i,r,o,c,u,d,m,h,g,v,_,S,b,R,y){const x=this.elements;return x[0]=e,x[4]=i,x[8]=r,x[12]=o,x[1]=c,x[5]=u,x[9]=d,x[13]=m,x[2]=h,x[6]=g,x[10]=v,x[14]=_,x[3]=S,x[7]=b,x[11]=R,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Gu().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return this.determinantAffine()===0?(e.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const i=this.elements,r=e.elements,o=1/fo.setFromMatrixColumn(e,0).length(),c=1/fo.setFromMatrixColumn(e,1).length(),u=1/fo.setFromMatrixColumn(e,2).length();return i[0]=r[0]*o,i[1]=r[1]*o,i[2]=r[2]*o,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*u,i[9]=r[9]*u,i[10]=r[10]*u,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,o=e.y,c=e.z,u=Math.cos(r),d=Math.sin(r),m=Math.cos(o),h=Math.sin(o),g=Math.cos(c),v=Math.sin(c);if(e.order==="XYZ"){const _=u*g,S=u*v,b=d*g,R=d*v;i[0]=m*g,i[4]=-m*v,i[8]=h,i[1]=S+b*h,i[5]=_-R*h,i[9]=-d*m,i[2]=R-_*h,i[6]=b+S*h,i[10]=u*m}else if(e.order==="YXZ"){const _=m*g,S=m*v,b=h*g,R=h*v;i[0]=_+R*d,i[4]=b*d-S,i[8]=u*h,i[1]=u*v,i[5]=u*g,i[9]=-d,i[2]=S*d-b,i[6]=R+_*d,i[10]=u*m}else if(e.order==="ZXY"){const _=m*g,S=m*v,b=h*g,R=h*v;i[0]=_-R*d,i[4]=-u*v,i[8]=b+S*d,i[1]=S+b*d,i[5]=u*g,i[9]=R-_*d,i[2]=-u*h,i[6]=d,i[10]=u*m}else if(e.order==="ZYX"){const _=u*g,S=u*v,b=d*g,R=d*v;i[0]=m*g,i[4]=b*h-S,i[8]=_*h+R,i[1]=m*v,i[5]=R*h+_,i[9]=S*h-b,i[2]=-h,i[6]=d*m,i[10]=u*m}else if(e.order==="YZX"){const _=u*m,S=u*h,b=d*m,R=d*h;i[0]=m*g,i[4]=R-_*v,i[8]=b*v+S,i[1]=v,i[5]=u*g,i[9]=-d*g,i[2]=-h*g,i[6]=S*v+b,i[10]=_-R*v}else if(e.order==="XZY"){const _=u*m,S=u*h,b=d*m,R=d*h;i[0]=m*g,i[4]=-v,i[8]=h*g,i[1]=_*v+R,i[5]=u*g,i[9]=S*v-b,i[2]=b*v-S,i[6]=d*g,i[10]=R*v+_}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(DE,e,LE)}lookAt(e,i,r){const o=this.elements;return bi.subVectors(e,i),bi.lengthSq()===0&&(bi.z=1),bi.normalize(),Us.crossVectors(r,bi),Us.lengthSq()===0&&(Math.abs(r.z)===1?bi.x+=1e-4:bi.z+=1e-4,bi.normalize(),Us.crossVectors(r,bi)),Us.normalize(),iu.crossVectors(bi,Us),o[0]=Us.x,o[4]=iu.x,o[8]=bi.x,o[1]=Us.y,o[5]=iu.y,o[9]=bi.y,o[2]=Us.z,o[6]=iu.z,o[10]=bi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,o=i.elements,c=this.elements,u=r[0],d=r[4],m=r[8],h=r[12],g=r[1],v=r[5],_=r[9],S=r[13],b=r[2],R=r[6],y=r[10],x=r[14],F=r[3],I=r[7],w=r[11],O=r[15],L=o[0],z=o[4],T=o[8],N=o[12],q=o[1],X=o[5],K=o[9],ce=o[13],ue=o[2],Z=o[6],H=o[10],V=o[14],te=o[3],ge=o[7],Se=o[11],U=o[15];return c[0]=u*L+d*q+m*ue+h*te,c[4]=u*z+d*X+m*Z+h*ge,c[8]=u*T+d*K+m*H+h*Se,c[12]=u*N+d*ce+m*V+h*U,c[1]=g*L+v*q+_*ue+S*te,c[5]=g*z+v*X+_*Z+S*ge,c[9]=g*T+v*K+_*H+S*Se,c[13]=g*N+v*ce+_*V+S*U,c[2]=b*L+R*q+y*ue+x*te,c[6]=b*z+R*X+y*Z+x*ge,c[10]=b*T+R*K+y*H+x*Se,c[14]=b*N+R*ce+y*V+x*U,c[3]=F*L+I*q+w*ue+O*te,c[7]=F*z+I*X+w*Z+O*ge,c[11]=F*T+I*K+w*H+O*Se,c[15]=F*N+I*ce+w*V+O*U,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],o=e[8],c=e[12],u=e[1],d=e[5],m=e[9],h=e[13],g=e[2],v=e[6],_=e[10],S=e[14],b=e[3],R=e[7],y=e[11],x=e[15],F=m*S-h*_,I=d*S-h*v,w=d*_-m*v,O=u*S-h*g,L=u*_-m*g,z=u*v-d*g;return i*(R*F-y*I+x*w)-r*(b*F-y*O+x*L)+o*(b*I-R*O+x*z)-c*(b*w-R*L+y*z)}determinantAffine(){const e=this.elements,i=e[0],r=e[4],o=e[8],c=e[1],u=e[5],d=e[9],m=e[2],h=e[6],g=e[10];return i*(u*g-d*h)-r*(c*g-d*m)+o*(c*h-u*m)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=i,o[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],o=e[2],c=e[3],u=e[4],d=e[5],m=e[6],h=e[7],g=e[8],v=e[9],_=e[10],S=e[11],b=e[12],R=e[13],y=e[14],x=e[15],F=i*d-r*u,I=i*m-o*u,w=i*h-c*u,O=r*m-o*d,L=r*h-c*d,z=o*h-c*m,T=g*R-v*b,N=g*y-_*b,q=g*x-S*b,X=v*y-_*R,K=v*x-S*R,ce=_*x-S*y,ue=F*ce-I*K+w*X+O*q-L*N+z*T;if(ue===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Z=1/ue;return e[0]=(d*ce-m*K+h*X)*Z,e[1]=(o*K-r*ce-c*X)*Z,e[2]=(R*z-y*L+x*O)*Z,e[3]=(_*L-v*z-S*O)*Z,e[4]=(m*q-u*ce-h*N)*Z,e[5]=(i*ce-o*q+c*N)*Z,e[6]=(y*w-b*z-x*I)*Z,e[7]=(g*z-_*w+S*I)*Z,e[8]=(u*K-d*q+h*T)*Z,e[9]=(r*q-i*K-c*T)*Z,e[10]=(b*L-R*w+x*F)*Z,e[11]=(v*w-g*L-S*F)*Z,e[12]=(d*N-u*X-m*T)*Z,e[13]=(i*X-r*N+o*T)*Z,e[14]=(R*I-b*O-y*F)*Z,e[15]=(g*O-v*I+_*F)*Z,this}scale(e){const i=this.elements,r=e.x,o=e.y,c=e.z;return i[0]*=r,i[4]*=o,i[8]*=c,i[1]*=r,i[5]*=o,i[9]*=c,i[2]*=r,i[6]*=o,i[10]*=c,i[3]*=r,i[7]*=o,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,o))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),o=Math.sin(i),c=1-r,u=e.x,d=e.y,m=e.z,h=c*u,g=c*d;return this.set(h*u+r,h*d-o*m,h*m+o*d,0,h*d+o*m,g*d+r,g*m-o*u,0,h*m-o*d,g*m+o*u,c*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,o,c,u){return this.set(1,r,c,0,e,1,u,0,i,o,1,0,0,0,0,1),this}compose(e,i,r){const o=this.elements,c=i._x,u=i._y,d=i._z,m=i._w,h=c+c,g=u+u,v=d+d,_=c*h,S=c*g,b=c*v,R=u*g,y=u*v,x=d*v,F=m*h,I=m*g,w=m*v,O=r.x,L=r.y,z=r.z;return o[0]=(1-(R+x))*O,o[1]=(S+w)*O,o[2]=(b-I)*O,o[3]=0,o[4]=(S-w)*L,o[5]=(1-(_+x))*L,o[6]=(y+F)*L,o[7]=0,o[8]=(b+I)*z,o[9]=(y-F)*z,o[10]=(1-(_+R))*z,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,i,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const c=this.determinantAffine();if(c===0)return r.set(1,1,1),i.identity(),this;let u=fo.set(o[0],o[1],o[2]).length();const d=fo.set(o[4],o[5],o[6]).length(),m=fo.set(o[8],o[9],o[10]).length();c<0&&(u=-u),ta.copy(this);const h=1/u,g=1/d,v=1/m;return ta.elements[0]*=h,ta.elements[1]*=h,ta.elements[2]*=h,ta.elements[4]*=g,ta.elements[5]*=g,ta.elements[6]*=g,ta.elements[8]*=v,ta.elements[9]*=v,ta.elements[10]*=v,i.setFromRotationMatrix(ta),r.x=u,r.y=d,r.z=m,this}makePerspective(e,i,r,o,c,u,d=xa,m=!1){const h=this.elements,g=2*c/(i-e),v=2*c/(r-o),_=(i+e)/(i-e),S=(r+o)/(r-o);let b,R;if(m)b=c/(u-c),R=u*c/(u-c);else if(d===xa)b=-(u+c)/(u-c),R=-2*u*c/(u-c);else if(d===Iu)b=-u/(u-c),R=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return h[0]=g,h[4]=0,h[8]=_,h[12]=0,h[1]=0,h[5]=v,h[9]=S,h[13]=0,h[2]=0,h[6]=0,h[10]=b,h[14]=R,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,i,r,o,c,u,d=xa,m=!1){const h=this.elements,g=2/(i-e),v=2/(r-o),_=-(i+e)/(i-e),S=-(r+o)/(r-o);let b,R;if(m)b=1/(u-c),R=u/(u-c);else if(d===xa)b=-2/(u-c),R=-(u+c)/(u-c);else if(d===Iu)b=-1/(u-c),R=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return h[0]=g,h[4]=0,h[8]=0,h[12]=_,h[1]=0,h[5]=v,h[9]=0,h[13]=S,h[2]=0,h[6]=0,h[10]=b,h[14]=R,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let o=0;o<16;o++)if(i[o]!==r[o])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}};Gu.prototype.isMatrix4=!0;let bn=Gu;const fo=new ne,ta=new bn,DE=new ne(0,0,0),LE=new ne(1,1,1),Us=new ne,iu=new ne,bi=new ne,nv=new bn,iv=new Io;class Tr{constructor(e=0,i=0,r=0,o=Tr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,o=this._order){return this._x=e,this._y=i,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const o=e.elements,c=o[0],u=o[4],d=o[8],m=o[1],h=o[5],g=o[9],v=o[2],_=o[6],S=o[10];switch(i){case"XYZ":this._y=Math.asin(xt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(_,h),this._z=0);break;case"YXZ":this._x=Math.asin(-xt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(m,h)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(xt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-u,h)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-xt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,S),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-u,h));break;case"YZX":this._z=Math.asin(xt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,h),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-xt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(_,h),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,S),this._y=0);break;default:rt("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return nv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(nv,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return iv.setFromEuler(this),this.setFromQuaternion(iv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Tr.DEFAULT_ORDER="XYZ";class Ux{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let NE=0;const av=new ne,ho=new Io,Xa=new bn,au=new ne,Rl=new ne,UE=new ne,OE=new Io,sv=new ne(1,0,0),rv=new ne(0,1,0),ov=new ne(0,0,1),lv={type:"added"},PE={type:"removed"},po={type:"childadded",child:null},rh={type:"childremoved",child:null};class Ri extends Ar{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:NE++}),this.uuid=Po(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ri.DEFAULT_UP.clone();const e=new ne,i=new Tr,r=new Io,o=new ne(1,1,1);function c(){r.setFromEuler(i,!1)}function u(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new bn},normalMatrix:{value:new ct}}),this.matrix=new bn,this.matrixWorld=new bn,this.matrixAutoUpdate=Ri.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ri.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ux,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return ho.setFromAxisAngle(e,i),this.quaternion.multiply(ho),this}rotateOnWorldAxis(e,i){return ho.setFromAxisAngle(e,i),this.quaternion.premultiply(ho),this}rotateX(e){return this.rotateOnAxis(sv,e)}rotateY(e){return this.rotateOnAxis(rv,e)}rotateZ(e){return this.rotateOnAxis(ov,e)}translateOnAxis(e,i){return av.copy(e).applyQuaternion(this.quaternion),this.position.add(av.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(sv,e)}translateY(e){return this.translateOnAxis(rv,e)}translateZ(e){return this.translateOnAxis(ov,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xa.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?au.copy(e):au.set(e,i,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Rl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xa.lookAt(Rl,au,this.up):Xa.lookAt(au,Rl,this.up),this.quaternion.setFromRotationMatrix(Xa),o&&(Xa.extractRotation(o.matrixWorld),ho.setFromRotationMatrix(Xa),this.quaternion.premultiply(ho.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Nt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(lv),po.child=e,this.dispatchEvent(po),po.child=null):Nt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(PE),rh.child=e,this.dispatchEvent(rh),rh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xa.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(lv),po.child=e,this.dispatchEvent(po),po.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,i);if(u!==void 0)return u}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rl,e,UE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rl,OE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,r=e.y,o=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*r-c[8]*o,c[13]+=r-c[1]*i-c[5]*r-c[9]*o,c[14]+=o-c[2]*i-c[6]*r-c[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i,r=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),i===!0){const c=this.children;for(let u=0,d=c.length;u<d;u++)c[u].updateWorldMatrix(!1,!0,r)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(d=>({...d})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let h=0,g=m.length;h<g;h++){const v=m[h];c(e.shapes,v)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,h=this.material.length;m<h;m++)d.push(c(e.materials,this.material[m]));o.material=d}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];o.animations.push(c(e.animations,m))}}if(i){const d=u(e.geometries),m=u(e.materials),h=u(e.textures),g=u(e.images),v=u(e.shapes),_=u(e.skeletons),S=u(e.animations),b=u(e.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),h.length>0&&(r.textures=h),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),_.length>0&&(r.skeletons=_),S.length>0&&(r.animations=S),b.length>0&&(r.nodes=b)}return r.object=o,r;function u(d){const m=[];for(const h in d){const g=d[h];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}Ri.DEFAULT_UP=new ne(0,1,0);Ri.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ri.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ol extends Ri{constructor(){super(),this.isGroup=!0,this.type="Group"}}const IE={type:"move"};class oh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ol,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ol,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ne,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ne),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ol,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ne,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ne,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let o=null,c=null,u=null;const d=this._targetRay,m=this._grip,h=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(h&&e.hand){u=!0;for(const R of e.hand.values()){const y=i.getJointPose(R,r),x=this._getHandJoint(h,R);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const g=h.joints["index-finger-tip"],v=h.joints["thumb-tip"],_=g.position.distanceTo(v.position),S=.02,b=.005;h.inputState.pinching&&_>S+b?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&_<=S-b&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));d!==null&&(o=i.getPose(e.targetRaySpace,r),o===null&&c!==null&&(o=c),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(IE)))}return d!==null&&(d.visible=o!==null),m!==null&&(m.visible=c!==null),h!==null&&(h.visible=u!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Ol;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}const Ox={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Os={h:0,s:0,l:0},su={h:0,s:0,l:0};function lh(a,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?a+(e-a)*6*i:i<1/2?e:i<2/3?a+(e-a)*6*(2/3-i):a}class Vt{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=ei){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.colorSpaceToWorking(this,i),this}setRGB(e,i,r,o=wt.workingColorSpace){return this.r=e,this.g=i,this.b=r,wt.colorSpaceToWorking(this,o),this}setHSL(e,i,r,o=wt.workingColorSpace){if(e=Vp(e,1),i=xt(i,0,1),r=xt(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,u=2*r-c;this.r=lh(u,c,e+1/3),this.g=lh(u,c,e),this.b=lh(u,c,e-1/3)}return wt.colorSpaceToWorking(this,o),this}setStyle(e,i=ei){function r(c){c!==void 0&&parseFloat(c)<1&&rt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const u=o[1],d=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:rt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(u===6)return this.setHex(parseInt(c,16),i);rt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=ei){const r=Ox[e.toLowerCase()];return r!==void 0?this.setHex(r,i):rt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ja(e.r),this.g=Ja(e.g),this.b=Ja(e.b),this}copyLinearToSRGB(e){return this.r=Co(e.r),this.g=Co(e.g),this.b=Co(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ei){return wt.workingToColorSpace($n.copy(this),e),Math.round(xt($n.r*255,0,255))*65536+Math.round(xt($n.g*255,0,255))*256+Math.round(xt($n.b*255,0,255))}getHexString(e=ei){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=wt.workingColorSpace){wt.workingToColorSpace($n.copy(this),i);const r=$n.r,o=$n.g,c=$n.b,u=Math.max(r,o,c),d=Math.min(r,o,c);let m,h;const g=(d+u)/2;if(d===u)m=0,h=0;else{const v=u-d;switch(h=g<=.5?v/(u+d):v/(2-u-d),u){case r:m=(o-c)/v+(o<c?6:0);break;case o:m=(c-r)/v+2;break;case c:m=(r-o)/v+4;break}m/=6}return e.h=m,e.s=h,e.l=g,e}getRGB(e,i=wt.workingColorSpace){return wt.workingToColorSpace($n.copy(this),i),e.r=$n.r,e.g=$n.g,e.b=$n.b,e}getStyle(e=ei){wt.workingToColorSpace($n.copy(this),e);const i=$n.r,r=$n.g,o=$n.b;return e!==ei?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,i,r){return this.getHSL(Os),this.setHSL(Os.h+e,Os.s+i,Os.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Os),e.getHSL(su);const r=zl(Os.h,su.h,i),o=zl(Os.s,su.s,i),c=zl(Os.l,su.l,i);return this.setHSL(r,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,o=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*o,this.g=c[1]*i+c[4]*r+c[7]*o,this.b=c[2]*i+c[5]*r+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $n=new Vt;Vt.NAMES=Ox;class FE extends Ri{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Tr,this.environmentIntensity=1,this.environmentRotation=new Tr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const na=new ne,Wa=new ne,ch=new ne,Ya=new ne,mo=new ne,go=new ne,cv=new ne,uh=new ne,fh=new ne,dh=new ne,hh=new vn,ph=new vn,mh=new vn;class aa{constructor(e=new ne,i=new ne,r=new ne){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,o){o.subVectors(r,i),na.subVectors(e,i),o.cross(na);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,i,r,o,c){na.subVectors(o,i),Wa.subVectors(r,i),ch.subVectors(e,i);const u=na.dot(na),d=na.dot(Wa),m=na.dot(ch),h=Wa.dot(Wa),g=Wa.dot(ch),v=u*h-d*d;if(v===0)return c.set(0,0,0),null;const _=1/v,S=(h*m-d*g)*_,b=(u*g-d*m)*_;return c.set(1-S-b,b,S)}static containsPoint(e,i,r,o){return this.getBarycoord(e,i,r,o,Ya)===null?!1:Ya.x>=0&&Ya.y>=0&&Ya.x+Ya.y<=1}static getInterpolation(e,i,r,o,c,u,d,m){return this.getBarycoord(e,i,r,o,Ya)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Ya.x),m.addScaledVector(u,Ya.y),m.addScaledVector(d,Ya.z),m)}static getInterpolatedAttribute(e,i,r,o,c,u){return hh.setScalar(0),ph.setScalar(0),mh.setScalar(0),hh.fromBufferAttribute(e,i),ph.fromBufferAttribute(e,r),mh.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(hh,c.x),u.addScaledVector(ph,c.y),u.addScaledVector(mh,c.z),u}static isFrontFacing(e,i,r,o){return na.subVectors(r,i),Wa.subVectors(e,i),na.cross(Wa).dot(o)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,o){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,i,r,o){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return na.subVectors(this.c,this.b),Wa.subVectors(this.a,this.b),na.cross(Wa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return aa.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return aa.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,o,c){return aa.getInterpolation(e,this.a,this.b,this.c,i,r,o,c)}containsPoint(e){return aa.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return aa.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,o=this.b,c=this.c;let u,d;mo.subVectors(o,r),go.subVectors(c,r),uh.subVectors(e,r);const m=mo.dot(uh),h=go.dot(uh);if(m<=0&&h<=0)return i.copy(r);fh.subVectors(e,o);const g=mo.dot(fh),v=go.dot(fh);if(g>=0&&v<=g)return i.copy(o);const _=m*v-g*h;if(_<=0&&m>=0&&g<=0)return u=m/(m-g),i.copy(r).addScaledVector(mo,u);dh.subVectors(e,c);const S=mo.dot(dh),b=go.dot(dh);if(b>=0&&S<=b)return i.copy(c);const R=S*h-m*b;if(R<=0&&h>=0&&b<=0)return d=h/(h-b),i.copy(r).addScaledVector(go,d);const y=g*b-S*v;if(y<=0&&v-g>=0&&S-b>=0)return cv.subVectors(c,o),d=(v-g)/(v-g+(S-b)),i.copy(o).addScaledVector(cv,d);const x=1/(y+R+_);return u=R*x,d=_*x,i.copy(r).addScaledVector(mo,u).addScaledVector(go,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Wl{constructor(e=new ne(1/0,1/0,1/0),i=new ne(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(ia.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(ia.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=ia.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let u=0,d=c.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,ia):ia.fromBufferAttribute(c,u),ia.applyMatrix4(e.matrixWorld),this.expandByPoint(ia);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ru.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),ru.copy(r.boundingBox)),ru.applyMatrix4(e.matrixWorld),this.union(ru)}const o=e.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ia),ia.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Cl),ou.subVectors(this.max,Cl),_o.subVectors(e.a,Cl),vo.subVectors(e.b,Cl),xo.subVectors(e.c,Cl),Ps.subVectors(vo,_o),Is.subVectors(xo,vo),dr.subVectors(_o,xo);let i=[0,-Ps.z,Ps.y,0,-Is.z,Is.y,0,-dr.z,dr.y,Ps.z,0,-Ps.x,Is.z,0,-Is.x,dr.z,0,-dr.x,-Ps.y,Ps.x,0,-Is.y,Is.x,0,-dr.y,dr.x,0];return!gh(i,_o,vo,xo,ou)||(i=[1,0,0,0,1,0,0,0,1],!gh(i,_o,vo,xo,ou))?!1:(lu.crossVectors(Ps,Is),i=[lu.x,lu.y,lu.z],gh(i,_o,vo,xo,ou))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ia).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ia).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const qa=[new ne,new ne,new ne,new ne,new ne,new ne,new ne,new ne],ia=new ne,ru=new Wl,_o=new ne,vo=new ne,xo=new ne,Ps=new ne,Is=new ne,dr=new ne,Cl=new ne,ou=new ne,lu=new ne,hr=new ne;function gh(a,e,i,r,o){for(let c=0,u=a.length-3;c<=u;c+=3){hr.fromArray(a,c);const d=o.x*Math.abs(hr.x)+o.y*Math.abs(hr.y)+o.z*Math.abs(hr.z),m=e.dot(hr),h=i.dot(hr),g=r.dot(hr);if(Math.max(-Math.max(m,h,g),Math.min(m,h,g))>d)return!1}return!0}const wn=new ne,cu=new Ft;let BE=0;class ya extends Ar{constructor(e,i,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:BE++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=j_,this.updateRanges=[],this.gpuType=va,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=i.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)cu.fromBufferAttribute(this,i),cu.applyMatrix3(e),this.setXY(i,cu.x,cu.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)wn.fromBufferAttribute(this,i),wn.applyMatrix3(e),this.setXYZ(i,wn.x,wn.y,wn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)wn.fromBufferAttribute(this,i),wn.applyMatrix4(e),this.setXYZ(i,wn.x,wn.y,wn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)wn.fromBufferAttribute(this,i),wn.applyNormalMatrix(e),this.setXYZ(i,wn.x,wn.y,wn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)wn.fromBufferAttribute(this,i),wn.transformDirection(e),this.setXYZ(i,wn.x,wn.y,wn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=bo(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=si(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=bo(i,this.array)),i}setX(e,i){return this.normalized&&(i=si(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=bo(i,this.array)),i}setY(e,i){return this.normalized&&(i=si(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=bo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=si(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=bo(i,this.array)),i}setW(e,i){return this.normalized&&(i=si(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=si(i,this.array),r=si(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,o){return e*=this.itemSize,this.normalized&&(i=si(i,this.array),r=si(r,this.array),o=si(o,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,i,r,o,c){return e*=this.itemSize,this.normalized&&(i=si(i,this.array),r=si(r,this.array),o=si(o,this.array),c=si(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==j_&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Px extends ya{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class Ix extends ya{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class Wi extends ya{constructor(e,i,r){super(new Float32Array(e),i,r)}}const zE=new Wl,wl=new ne,_h=new ne;class Xp{constructor(e=new ne,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):zE.setFromPoints(e).getCenter(r);let o=0;for(let c=0,u=e.length;c<u;c++)o=Math.max(o,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;wl.subVectors(e,this.center);const i=wl.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),o=(r-this.radius)*.5;this.center.addScaledVector(wl,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_h.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(wl.copy(e.center).add(_h)),this.expandByPoint(wl.copy(e.center).sub(_h))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let HE=0;const Vi=new bn,vh=new Ri,So=new ne,Ti=new Wl,Dl=new Wl,Bn=new ne;class Yi extends Ar{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:HE++}),this.uuid=Po(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(aE(e)?Ix:Px)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new ct().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Vi.makeRotationFromQuaternion(e),this.applyMatrix4(Vi),this}rotateX(e){return Vi.makeRotationX(e),this.applyMatrix4(Vi),this}rotateY(e){return Vi.makeRotationY(e),this.applyMatrix4(Vi),this}rotateZ(e){return Vi.makeRotationZ(e),this.applyMatrix4(Vi),this}translate(e,i,r){return Vi.makeTranslation(e,i,r),this.applyMatrix4(Vi),this}scale(e,i,r){return Vi.makeScale(e,i,r),this.applyMatrix4(Vi),this}lookAt(e){return vh.lookAt(e),vh.updateMatrix(),this.applyMatrix4(vh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(So).negate(),this.translate(So.x,So.y,So.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let o=0,c=e.length;o<c;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Wi(r,3))}else{const r=Math.min(e.length,i.count);for(let o=0;o<r;o++){const c=e[o];i.setXYZ(o,c.x,c.y,c.z||0)}e.length>i.count&&rt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Nt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ne(-1/0,-1/0,-1/0),new ne(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,o=i.length;r<o;r++){const c=i[r];Ti.setFromBufferAttribute(c),this.morphTargetsRelative?(Bn.addVectors(this.boundingBox.min,Ti.min),this.boundingBox.expandByPoint(Bn),Bn.addVectors(this.boundingBox.max,Ti.max),this.boundingBox.expandByPoint(Bn)):(this.boundingBox.expandByPoint(Ti.min),this.boundingBox.expandByPoint(Ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Nt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xp);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Nt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ne,1/0);return}if(e){const r=this.boundingSphere.center;if(Ti.setFromBufferAttribute(e),i)for(let c=0,u=i.length;c<u;c++){const d=i[c];Dl.setFromBufferAttribute(d),this.morphTargetsRelative?(Bn.addVectors(Ti.min,Dl.min),Ti.expandByPoint(Bn),Bn.addVectors(Ti.max,Dl.max),Ti.expandByPoint(Bn)):(Ti.expandByPoint(Dl.min),Ti.expandByPoint(Dl.max))}Ti.getCenter(r);let o=0;for(let c=0,u=e.count;c<u;c++)Bn.fromBufferAttribute(e,c),o=Math.max(o,r.distanceToSquared(Bn));if(i)for(let c=0,u=i.length;c<u;c++){const d=i[c],m=this.morphTargetsRelative;for(let h=0,g=d.count;h<g;h++)Bn.fromBufferAttribute(d,h),m&&(So.fromBufferAttribute(e,h),Bn.add(So)),o=Math.max(o,r.distanceToSquared(Bn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Nt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Nt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,o=i.normal,c=i.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==r.count)&&(u=new ya(new Float32Array(4*r.count),4),this.setAttribute("tangent",u));const d=[],m=[];for(let T=0;T<r.count;T++)d[T]=new ne,m[T]=new ne;const h=new ne,g=new ne,v=new ne,_=new Ft,S=new Ft,b=new Ft,R=new ne,y=new ne;function x(T,N,q){h.fromBufferAttribute(r,T),g.fromBufferAttribute(r,N),v.fromBufferAttribute(r,q),_.fromBufferAttribute(c,T),S.fromBufferAttribute(c,N),b.fromBufferAttribute(c,q),g.sub(h),v.sub(h),S.sub(_),b.sub(_);const X=1/(S.x*b.y-b.x*S.y);isFinite(X)&&(R.copy(g).multiplyScalar(b.y).addScaledVector(v,-S.y).multiplyScalar(X),y.copy(v).multiplyScalar(S.x).addScaledVector(g,-b.x).multiplyScalar(X),d[T].add(R),d[N].add(R),d[q].add(R),m[T].add(y),m[N].add(y),m[q].add(y))}let F=this.groups;F.length===0&&(F=[{start:0,count:e.count}]);for(let T=0,N=F.length;T<N;++T){const q=F[T],X=q.start,K=q.count;for(let ce=X,ue=X+K;ce<ue;ce+=3)x(e.getX(ce+0),e.getX(ce+1),e.getX(ce+2))}const I=new ne,w=new ne,O=new ne,L=new ne;function z(T){O.fromBufferAttribute(o,T),L.copy(O);const N=d[T];I.copy(N),I.sub(O.multiplyScalar(O.dot(N))).normalize(),w.crossVectors(L,N);const X=w.dot(m[T])<0?-1:1;u.setXYZW(T,I.x,I.y,I.z,X)}for(let T=0,N=F.length;T<N;++T){const q=F[T],X=q.start,K=q.count;for(let ce=X,ue=X+K;ce<ue;ce+=3)z(e.getX(ce+0)),z(e.getX(ce+1)),z(e.getX(ce+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==i.count)r=new ya(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let _=0,S=r.count;_<S;_++)r.setXYZ(_,0,0,0);const o=new ne,c=new ne,u=new ne,d=new ne,m=new ne,h=new ne,g=new ne,v=new ne;if(e)for(let _=0,S=e.count;_<S;_+=3){const b=e.getX(_+0),R=e.getX(_+1),y=e.getX(_+2);o.fromBufferAttribute(i,b),c.fromBufferAttribute(i,R),u.fromBufferAttribute(i,y),g.subVectors(u,c),v.subVectors(o,c),g.cross(v),d.fromBufferAttribute(r,b),m.fromBufferAttribute(r,R),h.fromBufferAttribute(r,y),d.add(g),m.add(g),h.add(g),r.setXYZ(b,d.x,d.y,d.z),r.setXYZ(R,m.x,m.y,m.z),r.setXYZ(y,h.x,h.y,h.z)}else for(let _=0,S=i.count;_<S;_+=3)o.fromBufferAttribute(i,_+0),c.fromBufferAttribute(i,_+1),u.fromBufferAttribute(i,_+2),g.subVectors(u,c),v.subVectors(o,c),g.cross(v),r.setXYZ(_+0,g.x,g.y,g.z),r.setXYZ(_+1,g.x,g.y,g.z),r.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)Bn.fromBufferAttribute(e,i),Bn.normalize(),e.setXYZ(i,Bn.x,Bn.y,Bn.z)}toNonIndexed(){function e(d,m){const h=d.array,g=d.itemSize,v=d.normalized,_=new h.constructor(m.length*g);let S=0,b=0;for(let R=0,y=m.length;R<y;R++){d.isInterleavedBufferAttribute?S=m[R]*d.data.stride+d.offset:S=m[R]*g;for(let x=0;x<g;x++)_[b++]=h[S++]}return new ya(_,g,v)}if(this.index===null)return rt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Yi,r=this.index.array,o=this.attributes;for(const d in o){const m=o[d],h=e(m,r);i.setAttribute(d,h)}const c=this.morphAttributes;for(const d in c){const m=[],h=c[d];for(let g=0,v=h.length;g<v;g++){const _=h[g],S=e(_,r);m.push(S)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,m=u.length;d<m;d++){const h=u[d];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const h in m)m[h]!==void 0&&(e[h]=m[h]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const h=r[m];e.data.attributes[m]=h.toJSON(e.data)}const o={};let c=!1;for(const m in this.morphAttributes){const h=this.morphAttributes[m],g=[];for(let v=0,_=h.length;v<_;v++){const S=h[v];g.push(S.toJSON(e.data))}g.length>0&&(o[m]=g,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const h in o){const g=o[h];this.setAttribute(h,g.clone(i))}const c=e.morphAttributes;for(const h in c){const g=[],v=c[h];for(let _=0,S=v.length;_<S;_++)g.push(v[_].clone(i));this.morphAttributes[h]=g}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let h=0,g=u.length;h<g;h++){const v=u[h];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let GE=0;class ku extends Ar{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:GE++}),this.uuid=Po(),this.name="",this.type="Material",this.blending=Ao,this.side=$a,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gh,this.blendDst=Vh,this.blendEquation=xr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Vt(0,0,0),this.blendAlpha=0,this.depthFunc=Lo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=q_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=co,this.stencilZFail=co,this.stencilZPass=co,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){rt(`Material: parameter '${i}' has value of undefined.`);continue}const o=this[i];if(o===void 0){rt(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector2&&r&&r.isVector2||o&&o.isEuler&&r&&r.isEuler||o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ao&&(r.blending=this.blending),this.side!==$a&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Gh&&(r.blendSrc=this.blendSrc),this.blendDst!==Vh&&(r.blendDst=this.blendDst),this.blendEquation!==xr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Lo&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==q_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==co&&(r.stencilFail=this.stencilFail),this.stencilZFail!==co&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==co&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(c){const u=[];for(const d in c){const m=c[d];delete m.metadata,u.push(m)}return u}if(i){const c=o(e.textures),u=o(e.images);c.length>0&&(r.textures=c),u.length>0&&(r.images=u)}return r}fromJSON(e,i){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Vt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=i[e.map]||null),e.matcap!==void 0&&(this.matcap=i[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=i[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=i[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=i[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new Ft().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=i[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=i[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=i[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=i[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=i[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=i[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=i[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=i[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=i[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=i[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=i[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ft().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=i[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=i[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=i[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=i[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=i[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const o=i.length;r=new Array(o);for(let c=0;c!==o;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ja=new ne,xh=new ne,uu=new ne,Fs=new ne,Sh=new ne,fu=new ne,Mh=new ne;class VE{constructor(e=new ne,i=new ne(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ja)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ja.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ja.copy(this.origin).addScaledVector(this.direction,i),ja.distanceToSquared(e))}distanceSqToSegment(e,i,r,o){xh.copy(e).add(i).multiplyScalar(.5),uu.copy(i).sub(e).normalize(),Fs.copy(this.origin).sub(xh);const c=e.distanceTo(i)*.5,u=-this.direction.dot(uu),d=Fs.dot(this.direction),m=-Fs.dot(uu),h=Fs.lengthSq(),g=Math.abs(1-u*u);let v,_,S,b;if(g>0)if(v=u*m-d,_=u*d-m,b=c*g,v>=0)if(_>=-b)if(_<=b){const R=1/g;v*=R,_*=R,S=v*(v+u*_+2*d)+_*(u*v+_+2*m)+h}else _=c,v=Math.max(0,-(u*_+d)),S=-v*v+_*(_+2*m)+h;else _=-c,v=Math.max(0,-(u*_+d)),S=-v*v+_*(_+2*m)+h;else _<=-b?(v=Math.max(0,-(-u*c+d)),_=v>0?-c:Math.min(Math.max(-c,-m),c),S=-v*v+_*(_+2*m)+h):_<=b?(v=0,_=Math.min(Math.max(-c,-m),c),S=_*(_+2*m)+h):(v=Math.max(0,-(u*c+d)),_=v>0?c:Math.min(Math.max(-c,-m),c),S=-v*v+_*(_+2*m)+h);else _=u>0?-c:c,v=Math.max(0,-(u*_+d)),S=-v*v+_*(_+2*m)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(xh).addScaledVector(uu,_),S}intersectSphere(e,i){ja.subVectors(e.center,this.origin);const r=ja.dot(this.direction),o=ja.dot(ja)-r*r,c=e.radius*e.radius;if(o>c)return null;const u=Math.sqrt(c-o),d=r-u,m=r+u;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,o,c,u,d,m;const h=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,_=this.origin;return h>=0?(r=(e.min.x-_.x)*h,o=(e.max.x-_.x)*h):(r=(e.max.x-_.x)*h,o=(e.min.x-_.x)*h),g>=0?(c=(e.min.y-_.y)*g,u=(e.max.y-_.y)*g):(c=(e.max.y-_.y)*g,u=(e.min.y-_.y)*g),r>u||c>o||((c>r||isNaN(r))&&(r=c),(u<o||isNaN(o))&&(o=u),v>=0?(d=(e.min.z-_.z)*v,m=(e.max.z-_.z)*v):(d=(e.max.z-_.z)*v,m=(e.min.z-_.z)*v),r>m||d>o)||((d>r||r!==r)&&(r=d),(m<o||o!==o)&&(o=m),o<0)?null:this.at(r>=0?r:o,i)}intersectsBox(e){return this.intersectBox(e,ja)!==null}intersectTriangle(e,i,r,o,c){Sh.subVectors(i,e),fu.subVectors(r,e),Mh.crossVectors(Sh,fu);let u=this.direction.dot(Mh),d;if(u>0){if(o)return null;d=1}else if(u<0)d=-1,u=-u;else return null;Fs.subVectors(this.origin,e);const m=d*this.direction.dot(fu.crossVectors(Fs,fu));if(m<0)return null;const h=d*this.direction.dot(Sh.cross(Fs));if(h<0||m+h>u)return null;const g=-d*Fs.dot(Mh);return g<0?null:this.at(g/u,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Bu extends ku{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tr,this.combine=mx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const uv=new bn,pr=new VE,du=new Xp,fv=new ne,hu=new ne,pu=new ne,mu=new ne,yh=new ne,gu=new ne,dv=new ne,_u=new ne;class Ai extends Ri{constructor(e=new Yi,i=new Bu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const o=i[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const d=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,i){const r=this.geometry,o=r.attributes.position,c=r.morphAttributes.position,u=r.morphTargetsRelative;i.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(c&&d){gu.set(0,0,0);for(let m=0,h=c.length;m<h;m++){const g=d[m],v=c[m];g!==0&&(yh.fromBufferAttribute(v,e),u?gu.addScaledVector(yh,g):gu.addScaledVector(yh.sub(i),g))}i.add(gu)}return i}raycast(e,i){const r=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),du.copy(r.boundingSphere),du.applyMatrix4(c),pr.copy(e.ray).recast(e.near),!(du.containsPoint(pr.origin)===!1&&(pr.intersectSphere(du,fv)===null||pr.origin.distanceToSquared(fv)>(e.far-e.near)**2))&&(uv.copy(c).invert(),pr.copy(e.ray).applyMatrix4(uv),!(r.boundingBox!==null&&pr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,pr)))}_computeIntersections(e,i,r){let o;const c=this.geometry,u=this.material,d=c.index,m=c.attributes.position,h=c.attributes.uv,g=c.attributes.uv1,v=c.attributes.normal,_=c.groups,S=c.drawRange;if(d!==null)if(Array.isArray(u))for(let b=0,R=_.length;b<R;b++){const y=_[b],x=u[y.materialIndex],F=Math.max(y.start,S.start),I=Math.min(d.count,Math.min(y.start+y.count,S.start+S.count));for(let w=F,O=I;w<O;w+=3){const L=d.getX(w),z=d.getX(w+1),T=d.getX(w+2);o=vu(this,x,e,r,h,g,v,L,z,T),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=y.materialIndex,i.push(o))}}else{const b=Math.max(0,S.start),R=Math.min(d.count,S.start+S.count);for(let y=b,x=R;y<x;y+=3){const F=d.getX(y),I=d.getX(y+1),w=d.getX(y+2);o=vu(this,u,e,r,h,g,v,F,I,w),o&&(o.faceIndex=Math.floor(y/3),i.push(o))}}else if(m!==void 0)if(Array.isArray(u))for(let b=0,R=_.length;b<R;b++){const y=_[b],x=u[y.materialIndex],F=Math.max(y.start,S.start),I=Math.min(m.count,Math.min(y.start+y.count,S.start+S.count));for(let w=F,O=I;w<O;w+=3){const L=w,z=w+1,T=w+2;o=vu(this,x,e,r,h,g,v,L,z,T),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=y.materialIndex,i.push(o))}}else{const b=Math.max(0,S.start),R=Math.min(m.count,S.start+S.count);for(let y=b,x=R;y<x;y+=3){const F=y,I=y+1,w=y+2;o=vu(this,u,e,r,h,g,v,F,I,w),o&&(o.faceIndex=Math.floor(y/3),i.push(o))}}}}function kE(a,e,i,r,o,c,u,d){let m;if(e.side===mi?m=r.intersectTriangle(u,c,o,!0,d):m=r.intersectTriangle(o,c,u,e.side===$a,d),m===null)return null;_u.copy(d),_u.applyMatrix4(a.matrixWorld);const h=i.ray.origin.distanceTo(_u);return h<i.near||h>i.far?null:{distance:h,point:_u.clone(),object:a}}function vu(a,e,i,r,o,c,u,d,m,h){a.getVertexPosition(d,hu),a.getVertexPosition(m,pu),a.getVertexPosition(h,mu);const g=kE(a,e,i,r,hu,pu,mu,dv);if(g){const v=new ne;aa.getBarycoord(dv,hu,pu,mu,v),o&&(g.uv=aa.getInterpolatedAttribute(o,d,m,h,v,new Ft)),c&&(g.uv1=aa.getInterpolatedAttribute(c,d,m,h,v,new Ft)),u&&(g.normal=aa.getInterpolatedAttribute(u,d,m,h,v,new ne),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const _={a:d,b:m,c:h,normal:new ne,materialIndex:0};aa.getNormal(hu,pu,mu,_.normal),g.face=_,g.barycoord=v}return g}class XE extends Zn{constructor(e=null,i=1,r=1,o,c,u,d,m,h=jn,g=jn,v,_){super(null,u,d,m,h,g,o,c,v,_),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Eh=new ne,WE=new ne,YE=new ct;class _r{constructor(e=new ne(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,o){return this.normal.set(e,i,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const o=Eh.subVectors(r,i).cross(WE.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,r=!0){const o=e.delta(Eh),c=this.normal.dot(o);if(c===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/c;return r===!0&&(u<0||u>1)?null:i.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||YE.getNormalMatrix(e),o=this.coplanarPoint(Eh).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const mr=new Xp,qE=new Ft(.5,.5),xu=new ne;class Fx{constructor(e=new _r,i=new _r,r=new _r,o=new _r,c=new _r,u=new _r){this.planes=[e,i,r,o,c,u]}set(e,i,r,o,c,u){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(r),d[3].copy(o),d[4].copy(c),d[5].copy(u),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=xa,r=!1){const o=this.planes,c=e.elements,u=c[0],d=c[1],m=c[2],h=c[3],g=c[4],v=c[5],_=c[6],S=c[7],b=c[8],R=c[9],y=c[10],x=c[11],F=c[12],I=c[13],w=c[14],O=c[15];if(o[0].setComponents(h-u,S-g,x-b,O-F).normalize(),o[1].setComponents(h+u,S+g,x+b,O+F).normalize(),o[2].setComponents(h+d,S+v,x+R,O+I).normalize(),o[3].setComponents(h-d,S-v,x-R,O-I).normalize(),r)o[4].setComponents(m,_,y,w).normalize(),o[5].setComponents(h-m,S-_,x-y,O-w).normalize();else if(o[4].setComponents(h-m,S-_,x-y,O-w).normalize(),i===xa)o[5].setComponents(h+m,S+_,x+y,O+w).normalize();else if(i===Iu)o[5].setComponents(m,_,y,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),mr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),mr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(mr)}intersectsSprite(e){mr.center.set(0,0,0);const i=qE.distanceTo(e.center);return mr.radius=.7071067811865476+i,mr.applyMatrix4(e.matrixWorld),this.intersectsSphere(mr)}intersectsSphere(e){const i=this.planes,r=e.center,o=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const o=i[r];if(xu.x=o.normal.x>0?e.max.x:e.min.x,xu.y=o.normal.y>0?e.max.y:e.min.y,xu.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(xu)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class jE extends Zn{constructor(e,i,r,o,c=dn,u=dn,d,m,h){super(e,i,r,o,c,u,d,m,h),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const g=this;function v(){g.needsUpdate=!0,g._requestVideoFrameCallbackId=e.requestVideoFrameCallback(v)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(v))}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}}class Bx extends Zn{constructor(e=[],i=Er,r,o,c,u,d,m,h,g){super(e,i,r,o,c,u,d,m,h,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class zx extends Zn{constructor(e,i,r,o,c,u,d,m,h){super(e,i,r,o,c,u,d,m,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Uo extends Zn{constructor(e,i,r=Ea,o,c,u,d=jn,m=jn,h,g=ts,v=1){if(g!==ts&&g!==yr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:i,depth:v};super(_,o,c,u,d,m,g,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new kp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class ZE extends Uo{constructor(e,i=Ea,r=Er,o,c,u=jn,d=jn,m,h=ts){const g={width:e,height:e,depth:1},v=[g,g,g,g,g,g];super(e,e,i,r,o,c,u,d,m,h),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Hx extends Zn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Yl extends Yi{constructor(e=1,i=1,r=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:o,heightSegments:c,depthSegments:u};const d=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const m=[],h=[],g=[],v=[];let _=0,S=0;b("z","y","x",-1,-1,r,i,e,u,c,0),b("z","y","x",1,-1,r,i,-e,u,c,1),b("x","z","y",1,1,e,r,i,o,u,2),b("x","z","y",1,-1,e,r,-i,o,u,3),b("x","y","z",1,-1,e,i,r,o,c,4),b("x","y","z",-1,-1,e,i,-r,o,c,5),this.setIndex(m),this.setAttribute("position",new Wi(h,3)),this.setAttribute("normal",new Wi(g,3)),this.setAttribute("uv",new Wi(v,2));function b(R,y,x,F,I,w,O,L,z,T,N){const q=w/z,X=O/T,K=w/2,ce=O/2,ue=L/2,Z=z+1,H=T+1;let V=0,te=0;const ge=new ne;for(let Se=0;Se<H;Se++){const U=Se*X-ce;for(let J=0;J<Z;J++){const Ee=J*q-K;ge[R]=Ee*F,ge[y]=U*I,ge[x]=ue,h.push(ge.x,ge.y,ge.z),ge[R]=0,ge[y]=0,ge[x]=L>0?1:-1,g.push(ge.x,ge.y,ge.z),v.push(J/z),v.push(1-Se/T),V+=1}}for(let Se=0;Se<T;Se++)for(let U=0;U<z;U++){const J=_+U+Z*Se,Ee=_+U+Z*(Se+1),Re=_+(U+1)+Z*(Se+1),De=_+(U+1)+Z*Se;m.push(J,Ee,De),m.push(Ee,Re,De),te+=6}d.addGroup(S,te,N),S+=te,_+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class KE{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){rt("Curve: .getPoint() not implemented.")}getPointAt(e,i){const r=this.getUtoTmapping(e);return this.getPoint(r,i)}getPoints(e=5){const i=[];for(let r=0;r<=e;r++)i.push(this.getPoint(r/e));return i}getSpacedPoints(e=5){const i=[];for(let r=0;r<=e;r++)i.push(this.getPointAt(r/e));return i}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let r,o=this.getPoint(0),c=0;i.push(0);for(let u=1;u<=e;u++)r=this.getPoint(u/e),c+=r.distanceTo(o),i.push(c),o=r;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,i=null){const r=this.getLengths();let o=0;const c=r.length;let u;i?u=i:u=e*r[c-1];let d=0,m=c-1,h;for(;d<=m;)if(o=Math.floor(d+(m-d)/2),h=r[o]-u,h<0)d=o+1;else if(h>0)m=o-1;else{m=o;break}if(o=m,r[o]===u)return o/(c-1);const g=r[o],_=r[o+1]-g,S=(u-g)/_;return(o+S)/(c-1)}getTangent(e,i){let o=e-1e-4,c=e+1e-4;o<0&&(o=0),c>1&&(c=1);const u=this.getPoint(o),d=this.getPoint(c),m=i||(u.isVector2?new Ft:new ne);return m.copy(d).sub(u).normalize(),m}getTangentAt(e,i){const r=this.getUtoTmapping(e);return this.getTangent(r,i)}computeFrenetFrames(e,i=!1){const r=new ne,o=[],c=[],u=[],d=new ne,m=new bn;for(let S=0;S<=e;S++){const b=S/e;o[S]=this.getTangentAt(b,new ne)}c[0]=new ne,u[0]=new ne;let h=Number.MAX_VALUE;const g=Math.abs(o[0].x),v=Math.abs(o[0].y),_=Math.abs(o[0].z);g<=h&&(h=g,r.set(1,0,0)),v<=h&&(h=v,r.set(0,1,0)),_<=h&&r.set(0,0,1),d.crossVectors(o[0],r).normalize(),c[0].crossVectors(o[0],d),u[0].crossVectors(o[0],c[0]);for(let S=1;S<=e;S++){if(c[S]=c[S-1].clone(),u[S]=u[S-1].clone(),d.crossVectors(o[S-1],o[S]),d.length()>Number.EPSILON){d.normalize();const b=Math.acos(xt(o[S-1].dot(o[S]),-1,1));c[S].applyMatrix4(m.makeRotationAxis(d,b))}u[S].crossVectors(o[S],c[S])}if(i===!0){let S=Math.acos(xt(c[0].dot(c[e]),-1,1));S/=e,o[0].dot(d.crossVectors(c[0],c[e]))>0&&(S=-S);for(let b=1;b<=e;b++)c[b].applyMatrix4(m.makeRotationAxis(o[b],S*b)),u[b].crossVectors(o[b],c[b])}return{tangents:o,normals:c,binormals:u}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function Wp(){let a=0,e=0,i=0,r=0;function o(c,u,d,m){a=c,e=d,i=-3*c+3*u-2*d-m,r=2*c-2*u+d+m}return{initCatmullRom:function(c,u,d,m,h){o(u,d,h*(d-c),h*(m-u))},initNonuniformCatmullRom:function(c,u,d,m,h,g,v){let _=(u-c)/h-(d-c)/(h+g)+(d-u)/g,S=(d-u)/g-(m-u)/(g+v)+(m-d)/v;_*=g,S*=g,o(u,d,_,S)},calc:function(c){const u=c*c,d=u*c;return a+e*c+i*u+r*d}}}const hv=new ne,pv=new ne,bh=new Wp,Th=new Wp,Ah=new Wp;class QE extends KE{constructor(e=[],i=!1,r="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=i,this.curveType=r,this.tension=o}getPoint(e,i=new ne){const r=i,o=this.points,c=o.length,u=(c-(this.closed?0:1))*e;let d=Math.floor(u),m=u-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/c)+1)*c:m===0&&d===c-1&&(d=c-2,m=1);let h,g;this.closed||d>0?h=o[(d-1)%c]:(pv.subVectors(o[0],o[1]).add(o[0]),h=pv);const v=o[d%c],_=o[(d+1)%c];if(this.closed||d+2<c?g=o[(d+2)%c]:(hv.subVectors(o[c-1],o[c-2]).add(o[c-1]),g=hv),this.curveType==="centripetal"||this.curveType==="chordal"){const S=this.curveType==="chordal"?.5:.25;let b=Math.pow(h.distanceToSquared(v),S),R=Math.pow(v.distanceToSquared(_),S),y=Math.pow(_.distanceToSquared(g),S);R<1e-4&&(R=1),b<1e-4&&(b=R),y<1e-4&&(y=R),bh.initNonuniformCatmullRom(h.x,v.x,_.x,g.x,b,R,y),Th.initNonuniformCatmullRom(h.y,v.y,_.y,g.y,b,R,y),Ah.initNonuniformCatmullRom(h.z,v.z,_.z,g.z,b,R,y)}else this.curveType==="catmullrom"&&(bh.initCatmullRom(h.x,v.x,_.x,g.x,this.tension),Th.initCatmullRom(h.y,v.y,_.y,g.y,this.tension),Ah.initCatmullRom(h.z,v.z,_.z,g.z,this.tension));return r.set(bh.calc(m),Th.calc(m),Ah.calc(m)),r}copy(e){super.copy(e),this.points=[];for(let i=0,r=e.points.length;i<r;i++){const o=e.points[i];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let i=0,r=this.points.length;i<r;i++){const o=this.points[i];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let i=0,r=e.points.length;i<r;i++){const o=e.points[i];this.points.push(new ne().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class Gs extends Yi{constructor(e=1,i=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:o};const c=e/2,u=i/2,d=Math.floor(r),m=Math.floor(o),h=d+1,g=m+1,v=e/d,_=i/m,S=[],b=[],R=[],y=[];for(let x=0;x<g;x++){const F=x*_-u;for(let I=0;I<h;I++){const w=I*v-c;b.push(w,-F,0),R.push(0,0,1),y.push(I/d),y.push(1-x/m)}}for(let x=0;x<m;x++)for(let F=0;F<d;F++){const I=F+h*x,w=F+h*(x+1),O=F+1+h*(x+1),L=F+1+h*x;S.push(I,w,L),S.push(w,O,L)}this.setIndex(S),this.setAttribute("position",new Wi(b,3)),this.setAttribute("normal",new Wi(R,3)),this.setAttribute("uv",new Wi(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gs(e.width,e.height,e.widthSegments,e.heightSegments)}}function Oo(a){const e={};for(const i in a){e[i]={};for(const r in a[i]){const o=a[i][r];if(mv(o))o.isRenderTargetTexture?(rt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=o.clone();else if(Array.isArray(o))if(mv(o[0])){const c=[];for(let u=0,d=o.length;u<d;u++)c[u]=o[u].clone();e[i][r]=c}else e[i][r]=o.slice();else e[i][r]=o}}return e}function ri(a){const e={};for(let i=0;i<a.length;i++){const r=Oo(a[i]);for(const o in r)e[o]=r[o]}return e}function mv(a){return a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)}function JE(a){const e=[];for(let i=0;i<a.length;i++)e.push(a[i].clone());return e}function Gx(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:wt.workingColorSpace}const $E={clone:Oo,merge:ri};var eb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qi extends ku{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=eb,this.fragmentShader=tb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Oo(e.uniforms),this.uniformsGroups=JE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?i.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?i.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?i.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?i.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?i.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?i.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?i.uniforms[o]={type:"m4",value:u.toArray()}:i.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}fromJSON(e,i){if(super.fromJSON(e,i),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(this.uniforms[r]={},o.type){case"t":this.uniforms[r].value=i[o.value]||null;break;case"c":this.uniforms[r].value=new Vt().setHex(o.value);break;case"v2":this.uniforms[r].value=new Ft().fromArray(o.value);break;case"v3":this.uniforms[r].value=new ne().fromArray(o.value);break;case"v4":this.uniforms[r].value=new vn().fromArray(o.value);break;case"m3":this.uniforms[r].value=new ct().fromArray(o.value);break;case"m4":this.uniforms[r].value=new bn().fromArray(o.value);break;default:this.uniforms[r].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class nb extends qi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ib extends ku{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ky,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ab extends ku{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Su=new ne,Mu=new Io,pa=new ne;class Vx extends Ri{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bn,this.projectionMatrix=new bn,this.projectionMatrixInverse=new bn,this.coordinateSystem=xa,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Su,Mu,pa),pa.x===1&&pa.y===1&&pa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Su,Mu,pa.set(1,1,1)).invert()}updateWorldMatrix(e,i,r=!1){super.updateWorldMatrix(e,i,r),this.matrixWorld.decompose(Su,Mu,pa),pa.x===1&&pa.y===1&&pa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Su,Mu,pa.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Bs=new ne,gv=new Ft,_v=new Ft;class ki extends Vx{constructor(e=50,i=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=kl*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Bl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return kl*2*Math.atan(Math.tan(Bl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Bs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Bs.x,Bs.y).multiplyScalar(-e/Bs.z),Bs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Bs.x,Bs.y).multiplyScalar(-e/Bs.z)}getViewSize(e,i){return this.getViewBounds(e,gv,_v),i.subVectors(_v,gv)}setViewOffset(e,i,r,o,c,u){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Bl*.5*this.fov)/this.zoom,r=2*i,o=this.aspect*r,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const m=u.fullWidth,h=u.fullHeight;c+=u.offsetX*o/m,i-=u.offsetY*r/h,o*=u.width/m,r*=u.height/h}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class kx extends Vx{constructor(e=-1,i=1,r=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=r-e,u=r+e,d=o+i,m=o-i;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=h*this.view.offsetX,u=c+h*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,u,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const Mo=-90,yo=1;class sb extends Ri{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new ki(Mo,yo,e,i);o.layers=this.layers,this.add(o);const c=new ki(Mo,yo,e,i);c.layers=this.layers,this.add(c);const u=new ki(Mo,yo,e,i);u.layers=this.layers,this.add(u);const d=new ki(Mo,yo,e,i);d.layers=this.layers,this.add(d);const m=new ki(Mo,yo,e,i);m.layers=this.layers,this.add(m);const h=new ki(Mo,yo,e,i);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,o,c,u,d,m]=i;for(const h of i)this.remove(h);if(e===xa)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Iu)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of i)this.add(h),h.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,u,d,m,h,g]=this.children,v=e.getRenderTarget(),_=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(r,1,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,u),e.setRenderTarget(r,2,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),e.setRenderTarget(r,3,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(r,4,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),r.texture.generateMipmaps=R,e.setRenderTarget(r,5,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,g),e.setRenderTarget(v,_,S),e.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class rb extends ki{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const nm=class nm{constructor(e,i,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let r=0;r<4;r++)this.elements[r]=e[r+i];return this}set(e,i,r,o){const c=this.elements;return c[0]=e,c[2]=i,c[1]=r,c[3]=o,this}};nm.prototype.isMatrix2=!0;let vv=nm;function xv(a,e,i,r){const o=ob(r);switch(i){case Cx:return a*e;case Dx:return a*e/o.components*o.byteLength;case Fp:return a*e/o.components*o.byteLength;case br:return a*e*2/o.components*o.byteLength;case Bp:return a*e*2/o.components*o.byteLength;case wx:return a*e*3/o.components*o.byteLength;case ra:return a*e*4/o.components*o.byteLength;case zp:return a*e*4/o.components*o.byteLength;case Au:case Ru:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Cu:case wu:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case $h:case tp:return Math.max(a,16)*Math.max(e,8)/4;case Jh:case ep:return Math.max(a,8)*Math.max(e,8)/2;case np:case ip:case sp:case rp:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case ap:case Nu:case op:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case lp:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case cp:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case up:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case fp:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case dp:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case hp:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case pp:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case mp:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case gp:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case _p:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case vp:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case xp:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case Sp:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case Mp:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case yp:case Ep:case bp:return Math.ceil(a/4)*Math.ceil(e/4)*16;case Tp:case Ap:return Math.ceil(a/4)*Math.ceil(e/4)*8;case Uu:case Rp:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function ob(a){switch(a){case Xi:case bx:return{byteLength:1,components:1};case Gl:case Tx:case es:return{byteLength:2,components:1};case Pp:case Ip:return{byteLength:2,components:4};case Ea:case Op:case va:return{byteLength:4,components:1};case Ax:case Rx:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Up}}));typeof window<"u"&&(window.__THREE__?rt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Up);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Xx(){let a=null,e=!1,i=null,r=null;function o(c,u){i(c,u),r=a.requestAnimationFrame(o)}return{start:function(){e!==!0&&i!==null&&a!==null&&(r=a.requestAnimationFrame(o),e=!0)},stop:function(){a!==null&&a.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){a=c}}}function lb(a){const e=new WeakMap;function i(d,m){const h=d.array,g=d.usage,v=h.byteLength,_=a.createBuffer();a.bindBuffer(m,_),a.bufferData(m,h,g),d.onUploadCallback();let S;if(h instanceof Float32Array)S=a.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)S=a.HALF_FLOAT;else if(h instanceof Uint16Array)d.isFloat16BufferAttribute?S=a.HALF_FLOAT:S=a.UNSIGNED_SHORT;else if(h instanceof Int16Array)S=a.SHORT;else if(h instanceof Uint32Array)S=a.UNSIGNED_INT;else if(h instanceof Int32Array)S=a.INT;else if(h instanceof Int8Array)S=a.BYTE;else if(h instanceof Uint8Array)S=a.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)S=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:_,type:S,bytesPerElement:h.BYTES_PER_ELEMENT,version:d.version,size:v}}function r(d,m,h){const g=m.array,v=m.updateRanges;if(a.bindBuffer(h,d),v.length===0)a.bufferSubData(h,0,g);else{v.sort((S,b)=>S.start-b.start);let _=0;for(let S=1;S<v.length;S++){const b=v[_],R=v[S];R.start<=b.start+b.count+1?b.count=Math.max(b.count,R.start+R.count-b.start):(++_,v[_]=R)}v.length=_+1;for(let S=0,b=v.length;S<b;S++){const R=v[S];a.bufferSubData(h,R.start*g.BYTES_PER_ELEMENT,g,R.start,R.count)}m.clearUpdateRanges()}m.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(a.deleteBuffer(m.buffer),e.delete(d))}function u(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const h=e.get(d);if(h===void 0)e.set(d,i(d,m));else if(h.version<d.version){if(h.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,d,m),h.version=d.version}}return{get:o,remove:c,update:u}}var cb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ub=`#ifdef USE_ALPHAHASH
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
#endif`,fb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,db=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mb=`#ifdef USE_AOMAP
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
#endif`,gb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_b=`#ifdef USE_BATCHING
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
#endif`,vb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Sb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,yb=`#ifdef USE_IRIDESCENCE
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
#endif`,Eb=`#ifdef USE_BUMPMAP
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
#endif`,bb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Tb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ab=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Cb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,wb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Db=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Lb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Nb=`#define PI 3.141592653589793
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
} // validated`,Ub=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ob=`vec3 transformedNormal = objectNormal;
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
#endif`,Pb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ib=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gb=`#ifdef USE_ENVMAP
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
#endif`,Vb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,kb=`#ifdef USE_ENVMAP
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
#endif`,Xb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wb=`#ifdef USE_ENVMAP
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
#endif`,Yb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Kb=`#ifdef USE_GRADIENTMAP
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
}`,Qb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$b=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,e1=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,t1=`#ifdef USE_ENVMAP
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
#endif`,n1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,i1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,a1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,s1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,r1=`PhysicalMaterial material;
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
#endif`,o1=`uniform sampler2D dfgLUT;
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
}`,l1=`
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
#endif`,c1=`#if defined( RE_IndirectDiffuse )
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
#endif`,u1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,f1=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,d1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,h1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,p1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,m1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,g1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,v1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,x1=`#if defined( USE_POINTS_UV )
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
#endif`,S1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,M1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,y1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,E1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,b1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,T1=`#ifdef USE_MORPHTARGETS
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
#endif`,A1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,R1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,C1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,w1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,D1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,L1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,N1=`#ifdef USE_NORMALMAP
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
#endif`,U1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,O1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,P1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,I1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,F1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,B1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,z1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,H1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,G1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,V1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,k1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,X1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,W1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Y1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,q1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,j1=`float getShadowMask() {
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
}`,Z1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,K1=`#ifdef USE_SKINNING
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
#endif`,Q1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,J1=`#ifdef USE_SKINNING
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
#endif`,$1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,eT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,iT=`#ifdef USE_TRANSMISSION
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
#endif`,aT=`#ifdef USE_TRANSMISSION
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
#endif`,sT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,oT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,uT=`uniform sampler2D t2D;
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
}`,fT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,hT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mT=`#include <common>
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
}`,gT=`#if DEPTH_PACKING == 3200
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
}`,_T=`#define DISTANCE
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
}`,vT=`#define DISTANCE
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
}`,xT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ST=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MT=`uniform float scale;
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
}`,yT=`uniform vec3 diffuse;
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
}`,ET=`#include <common>
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
}`,bT=`uniform vec3 diffuse;
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
}`,TT=`#define LAMBERT
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
}`,AT=`#define LAMBERT
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
}`,RT=`#define MATCAP
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
}`,CT=`#define MATCAP
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
}`,wT=`#define NORMAL
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
}`,DT=`#define NORMAL
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
}`,LT=`#define PHONG
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
}`,NT=`#define PHONG
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
}`,UT=`#define STANDARD
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
}`,OT=`#define STANDARD
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
}`,PT=`#define TOON
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
}`,IT=`#define TOON
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
}`,FT=`uniform float size;
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
}`,BT=`uniform vec3 diffuse;
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
}`,zT=`#include <common>
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
}`,HT=`uniform vec3 color;
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
}`,GT=`uniform float rotation;
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
}`,VT=`uniform vec3 diffuse;
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
}`,gt={alphahash_fragment:cb,alphahash_pars_fragment:ub,alphamap_fragment:fb,alphamap_pars_fragment:db,alphatest_fragment:hb,alphatest_pars_fragment:pb,aomap_fragment:mb,aomap_pars_fragment:gb,batching_pars_vertex:_b,batching_vertex:vb,begin_vertex:xb,beginnormal_vertex:Sb,bsdfs:Mb,iridescence_fragment:yb,bumpmap_pars_fragment:Eb,clipping_planes_fragment:bb,clipping_planes_pars_fragment:Tb,clipping_planes_pars_vertex:Ab,clipping_planes_vertex:Rb,color_fragment:Cb,color_pars_fragment:wb,color_pars_vertex:Db,color_vertex:Lb,common:Nb,cube_uv_reflection_fragment:Ub,defaultnormal_vertex:Ob,displacementmap_pars_vertex:Pb,displacementmap_vertex:Ib,emissivemap_fragment:Fb,emissivemap_pars_fragment:Bb,colorspace_fragment:zb,colorspace_pars_fragment:Hb,envmap_fragment:Gb,envmap_common_pars_fragment:Vb,envmap_pars_fragment:kb,envmap_pars_vertex:Xb,envmap_physical_pars_fragment:t1,envmap_vertex:Wb,fog_vertex:Yb,fog_pars_vertex:qb,fog_fragment:jb,fog_pars_fragment:Zb,gradientmap_pars_fragment:Kb,lightmap_pars_fragment:Qb,lights_lambert_fragment:Jb,lights_lambert_pars_fragment:$b,lights_pars_begin:e1,lights_toon_fragment:n1,lights_toon_pars_fragment:i1,lights_phong_fragment:a1,lights_phong_pars_fragment:s1,lights_physical_fragment:r1,lights_physical_pars_fragment:o1,lights_fragment_begin:l1,lights_fragment_maps:c1,lights_fragment_end:u1,lightprobes_pars_fragment:f1,logdepthbuf_fragment:d1,logdepthbuf_pars_fragment:h1,logdepthbuf_pars_vertex:p1,logdepthbuf_vertex:m1,map_fragment:g1,map_pars_fragment:_1,map_particle_fragment:v1,map_particle_pars_fragment:x1,metalnessmap_fragment:S1,metalnessmap_pars_fragment:M1,morphinstance_vertex:y1,morphcolor_vertex:E1,morphnormal_vertex:b1,morphtarget_pars_vertex:T1,morphtarget_vertex:A1,normal_fragment_begin:R1,normal_fragment_maps:C1,normal_pars_fragment:w1,normal_pars_vertex:D1,normal_vertex:L1,normalmap_pars_fragment:N1,clearcoat_normal_fragment_begin:U1,clearcoat_normal_fragment_maps:O1,clearcoat_pars_fragment:P1,iridescence_pars_fragment:I1,opaque_fragment:F1,packing:B1,premultiplied_alpha_fragment:z1,project_vertex:H1,dithering_fragment:G1,dithering_pars_fragment:V1,roughnessmap_fragment:k1,roughnessmap_pars_fragment:X1,shadowmap_pars_fragment:W1,shadowmap_pars_vertex:Y1,shadowmap_vertex:q1,shadowmask_pars_fragment:j1,skinbase_vertex:Z1,skinning_pars_vertex:K1,skinning_vertex:Q1,skinnormal_vertex:J1,specularmap_fragment:$1,specularmap_pars_fragment:eT,tonemapping_fragment:tT,tonemapping_pars_fragment:nT,transmission_fragment:iT,transmission_pars_fragment:aT,uv_pars_fragment:sT,uv_pars_vertex:rT,uv_vertex:oT,worldpos_vertex:lT,background_vert:cT,background_frag:uT,backgroundCube_vert:fT,backgroundCube_frag:dT,cube_vert:hT,cube_frag:pT,depth_vert:mT,depth_frag:gT,distance_vert:_T,distance_frag:vT,equirect_vert:xT,equirect_frag:ST,linedashed_vert:MT,linedashed_frag:yT,meshbasic_vert:ET,meshbasic_frag:bT,meshlambert_vert:TT,meshlambert_frag:AT,meshmatcap_vert:RT,meshmatcap_frag:CT,meshnormal_vert:wT,meshnormal_frag:DT,meshphong_vert:LT,meshphong_frag:NT,meshphysical_vert:UT,meshphysical_frag:OT,meshtoon_vert:PT,meshtoon_frag:IT,points_vert:FT,points_frag:BT,shadow_vert:zT,shadow_frag:HT,sprite_vert:GT,sprite_frag:VT},Xe={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},envMapRotation:{value:new ct},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new Ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ne},probesMax:{value:new ne},probesResolution:{value:new ne}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new Ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},ga={basic:{uniforms:ri([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.fog]),vertexShader:gt.meshbasic_vert,fragmentShader:gt.meshbasic_frag},lambert:{uniforms:ri([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,Xe.lights,{emissive:{value:new Vt(0)},envMapIntensity:{value:1}}]),vertexShader:gt.meshlambert_vert,fragmentShader:gt.meshlambert_frag},phong:{uniforms:ri([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,Xe.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:gt.meshphong_vert,fragmentShader:gt.meshphong_frag},standard:{uniforms:ri([Xe.common,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.roughnessmap,Xe.metalnessmap,Xe.fog,Xe.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag},toon:{uniforms:ri([Xe.common,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.gradientmap,Xe.fog,Xe.lights,{emissive:{value:new Vt(0)}}]),vertexShader:gt.meshtoon_vert,fragmentShader:gt.meshtoon_frag},matcap:{uniforms:ri([Xe.common,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,{matcap:{value:null}}]),vertexShader:gt.meshmatcap_vert,fragmentShader:gt.meshmatcap_frag},points:{uniforms:ri([Xe.points,Xe.fog]),vertexShader:gt.points_vert,fragmentShader:gt.points_frag},dashed:{uniforms:ri([Xe.common,Xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gt.linedashed_vert,fragmentShader:gt.linedashed_frag},depth:{uniforms:ri([Xe.common,Xe.displacementmap]),vertexShader:gt.depth_vert,fragmentShader:gt.depth_frag},normal:{uniforms:ri([Xe.common,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,{opacity:{value:1}}]),vertexShader:gt.meshnormal_vert,fragmentShader:gt.meshnormal_frag},sprite:{uniforms:ri([Xe.sprite,Xe.fog]),vertexShader:gt.sprite_vert,fragmentShader:gt.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gt.background_vert,fragmentShader:gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ct}},vertexShader:gt.backgroundCube_vert,fragmentShader:gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gt.cube_vert,fragmentShader:gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gt.equirect_vert,fragmentShader:gt.equirect_frag},distance:{uniforms:ri([Xe.common,Xe.displacementmap,{referencePosition:{value:new ne},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gt.distance_vert,fragmentShader:gt.distance_frag},shadow:{uniforms:ri([Xe.lights,Xe.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:gt.shadow_vert,fragmentShader:gt.shadow_frag}};ga.physical={uniforms:ri([ga.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new Ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new Ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new Ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag};const yu={r:0,b:0,g:0},kT=new bn,Wx=new ct;Wx.set(-1,0,0,0,1,0,0,0,1);function XT(a,e,i,r,o,c){const u=new Vt(0);let d=o===!0?0:1,m,h,g=null,v=0,_=null;function S(F){let I=F.isScene===!0?F.background:null;if(I&&I.isTexture){const w=F.backgroundBlurriness>0;I=e.get(I,w)}return I}function b(F){let I=!1;const w=S(F);w===null?y(u,d):w&&w.isColor&&(y(w,1),I=!0);const O=a.xr.getEnvironmentBlendMode();O==="additive"?i.buffers.color.setClear(0,0,0,1,c):O==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(a.autoClear||I)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function R(F,I){const w=S(I);w&&(w.isCubeTexture||w.mapping===Vu)?(h===void 0&&(h=new Ai(new Yl(1,1,1),new qi({name:"BackgroundCubeMaterial",uniforms:Oo(ga.backgroundCube.uniforms),vertexShader:ga.backgroundCube.vertexShader,fragmentShader:ga.backgroundCube.fragmentShader,side:mi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(O,L,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=w,h.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(kT.makeRotationFromEuler(I.backgroundRotation)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(Wx),h.material.toneMapped=wt.getTransfer(w.colorSpace)!==Wt,(g!==w||v!==w.version||_!==a.toneMapping)&&(h.material.needsUpdate=!0,g=w,v=w.version,_=a.toneMapping),h.layers.enableAll(),F.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(m===void 0&&(m=new Ai(new Gs(2,2),new qi({name:"BackgroundMaterial",uniforms:Oo(ga.background.uniforms),vertexShader:ga.background.vertexShader,fragmentShader:ga.background.fragmentShader,side:$a,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(m)),m.material.uniforms.t2D.value=w,m.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,m.material.toneMapped=wt.getTransfer(w.colorSpace)!==Wt,w.matrixAutoUpdate===!0&&w.updateMatrix(),m.material.uniforms.uvTransform.value.copy(w.matrix),(g!==w||v!==w.version||_!==a.toneMapping)&&(m.material.needsUpdate=!0,g=w,v=w.version,_=a.toneMapping),m.layers.enableAll(),F.unshift(m,m.geometry,m.material,0,0,null))}function y(F,I){F.getRGB(yu,Gx(a)),i.buffers.color.setClear(yu.r,yu.g,yu.b,I,c)}function x(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return u},setClearColor:function(F,I=1){u.set(F),d=I,y(u,d)},getClearAlpha:function(){return d},setClearAlpha:function(F){d=F,y(u,d)},render:b,addToRenderList:R,dispose:x}}function WT(a,e){const i=a.getParameter(a.MAX_VERTEX_ATTRIBS),r={},o=_(null);let c=o,u=!1;function d(X,K,ce,ue,Z){let H=!1;const V=v(X,ue,ce,K);c!==V&&(c=V,h(c.object)),H=S(X,ue,ce,Z),H&&b(X,ue,ce,Z),Z!==null&&e.update(Z,a.ELEMENT_ARRAY_BUFFER),(H||u)&&(u=!1,w(X,K,ce,ue),Z!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function m(){return a.createVertexArray()}function h(X){return a.bindVertexArray(X)}function g(X){return a.deleteVertexArray(X)}function v(X,K,ce,ue){const Z=ue.wireframe===!0;let H=r[K.id];H===void 0&&(H={},r[K.id]=H);const V=X.isInstancedMesh===!0?X.id:0;let te=H[V];te===void 0&&(te={},H[V]=te);let ge=te[ce.id];ge===void 0&&(ge={},te[ce.id]=ge);let Se=ge[Z];return Se===void 0&&(Se=_(m()),ge[Z]=Se),Se}function _(X){const K=[],ce=[],ue=[];for(let Z=0;Z<i;Z++)K[Z]=0,ce[Z]=0,ue[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:ce,attributeDivisors:ue,object:X,attributes:{},index:null}}function S(X,K,ce,ue){const Z=c.attributes,H=K.attributes;let V=0;const te=ce.getAttributes();for(const ge in te)if(te[ge].location>=0){const U=Z[ge];let J=H[ge];if(J===void 0&&(ge==="instanceMatrix"&&X.instanceMatrix&&(J=X.instanceMatrix),ge==="instanceColor"&&X.instanceColor&&(J=X.instanceColor)),U===void 0||U.attribute!==J||J&&U.data!==J.data)return!0;V++}return c.attributesNum!==V||c.index!==ue}function b(X,K,ce,ue){const Z={},H=K.attributes;let V=0;const te=ce.getAttributes();for(const ge in te)if(te[ge].location>=0){let U=H[ge];U===void 0&&(ge==="instanceMatrix"&&X.instanceMatrix&&(U=X.instanceMatrix),ge==="instanceColor"&&X.instanceColor&&(U=X.instanceColor));const J={};J.attribute=U,U&&U.data&&(J.data=U.data),Z[ge]=J,V++}c.attributes=Z,c.attributesNum=V,c.index=ue}function R(){const X=c.newAttributes;for(let K=0,ce=X.length;K<ce;K++)X[K]=0}function y(X){x(X,0)}function x(X,K){const ce=c.newAttributes,ue=c.enabledAttributes,Z=c.attributeDivisors;ce[X]=1,ue[X]===0&&(a.enableVertexAttribArray(X),ue[X]=1),Z[X]!==K&&(a.vertexAttribDivisor(X,K),Z[X]=K)}function F(){const X=c.newAttributes,K=c.enabledAttributes;for(let ce=0,ue=K.length;ce<ue;ce++)K[ce]!==X[ce]&&(a.disableVertexAttribArray(ce),K[ce]=0)}function I(X,K,ce,ue,Z,H,V){V===!0?a.vertexAttribIPointer(X,K,ce,Z,H):a.vertexAttribPointer(X,K,ce,ue,Z,H)}function w(X,K,ce,ue){R();const Z=ue.attributes,H=ce.getAttributes(),V=K.defaultAttributeValues;for(const te in H){const ge=H[te];if(ge.location>=0){let Se=Z[te];if(Se===void 0&&(te==="instanceMatrix"&&X.instanceMatrix&&(Se=X.instanceMatrix),te==="instanceColor"&&X.instanceColor&&(Se=X.instanceColor)),Se!==void 0){const U=Se.normalized,J=Se.itemSize,Ee=e.get(Se);if(Ee===void 0)continue;const Re=Ee.buffer,De=Ee.type,ie=Ee.bytesPerElement,Me=De===a.INT||De===a.UNSIGNED_INT||Se.gpuType===Op;if(Se.isInterleavedBufferAttribute){const ve=Se.data,We=ve.stride,st=Se.offset;if(ve.isInstancedInterleavedBuffer){for(let $e=0;$e<ge.locationSize;$e++)x(ge.location+$e,ve.meshPerAttribute);X.isInstancedMesh!==!0&&ue._maxInstanceCount===void 0&&(ue._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let $e=0;$e<ge.locationSize;$e++)y(ge.location+$e);a.bindBuffer(a.ARRAY_BUFFER,Re);for(let $e=0;$e<ge.locationSize;$e++)I(ge.location+$e,J/ge.locationSize,De,U,We*ie,(st+J/ge.locationSize*$e)*ie,Me)}else{if(Se.isInstancedBufferAttribute){for(let ve=0;ve<ge.locationSize;ve++)x(ge.location+ve,Se.meshPerAttribute);X.isInstancedMesh!==!0&&ue._maxInstanceCount===void 0&&(ue._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let ve=0;ve<ge.locationSize;ve++)y(ge.location+ve);a.bindBuffer(a.ARRAY_BUFFER,Re);for(let ve=0;ve<ge.locationSize;ve++)I(ge.location+ve,J/ge.locationSize,De,U,J*ie,J/ge.locationSize*ve*ie,Me)}}else if(V!==void 0){const U=V[te];if(U!==void 0)switch(U.length){case 2:a.vertexAttrib2fv(ge.location,U);break;case 3:a.vertexAttrib3fv(ge.location,U);break;case 4:a.vertexAttrib4fv(ge.location,U);break;default:a.vertexAttrib1fv(ge.location,U)}}}}F()}function O(){N();for(const X in r){const K=r[X];for(const ce in K){const ue=K[ce];for(const Z in ue){const H=ue[Z];for(const V in H)g(H[V].object),delete H[V];delete ue[Z]}}delete r[X]}}function L(X){if(r[X.id]===void 0)return;const K=r[X.id];for(const ce in K){const ue=K[ce];for(const Z in ue){const H=ue[Z];for(const V in H)g(H[V].object),delete H[V];delete ue[Z]}}delete r[X.id]}function z(X){for(const K in r){const ce=r[K];for(const ue in ce){const Z=ce[ue];if(Z[X.id]===void 0)continue;const H=Z[X.id];for(const V in H)g(H[V].object),delete H[V];delete Z[X.id]}}}function T(X){for(const K in r){const ce=r[K],ue=X.isInstancedMesh===!0?X.id:0,Z=ce[ue];if(Z!==void 0){for(const H in Z){const V=Z[H];for(const te in V)g(V[te].object),delete V[te];delete Z[H]}delete ce[ue],Object.keys(ce).length===0&&delete r[K]}}}function N(){q(),u=!0,c!==o&&(c=o,h(c.object))}function q(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:N,resetDefaultState:q,dispose:O,releaseStatesOfGeometry:L,releaseStatesOfObject:T,releaseStatesOfProgram:z,initAttributes:R,enableAttribute:y,disableUnusedAttributes:F}}function YT(a,e,i){let r;function o(m){r=m}function c(m,h){a.drawArrays(r,m,h),i.update(h,r,1)}function u(m,h,g){g!==0&&(a.drawArraysInstanced(r,m,h,g),i.update(h,r,g))}function d(m,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,h,0,g);let _=0;for(let S=0;S<g;S++)_+=h[S];i.update(_,r,1)}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=d}function qT(a,e,i,r){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");o=a.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(z){return!(z!==ra&&r.convert(z)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(z){const T=z===es&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==Xi&&r.convert(z)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==va&&!T)}function m(z){if(z==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp";const g=m(h);g!==h&&(rt("WebGLRenderer:",h,"not supported, using",g,"instead."),h=g);const v=i.logarithmicDepthBuffer===!0,_=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&_===!1&&rt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const S=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),b=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=a.getParameter(a.MAX_TEXTURE_SIZE),y=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),x=a.getParameter(a.MAX_VERTEX_ATTRIBS),F=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),I=a.getParameter(a.MAX_VARYING_VECTORS),w=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),O=a.getParameter(a.MAX_SAMPLES),L=a.getParameter(a.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:u,textureTypeReadable:d,precision:h,logarithmicDepthBuffer:v,reversedDepthBuffer:_,maxTextures:S,maxVertexTextures:b,maxTextureSize:R,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:F,maxVaryings:I,maxFragmentUniforms:w,maxSamples:O,samples:L}}function jT(a){const e=this;let i=null,r=0,o=!1,c=!1;const u=new _r,d=new ct,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){const S=v.length!==0||_||r!==0||o;return o=_,r=v.length,S},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,_){i=g(v,_,0)},this.setState=function(v,_,S){const b=v.clippingPlanes,R=v.clipIntersection,y=v.clipShadows,x=a.get(v);if(!o||b===null||b.length===0||c&&!y)c?g(null):h();else{const F=c?0:r,I=F*4;let w=x.clippingState||null;m.value=w,w=g(b,_,I,S);for(let O=0;O!==I;++O)w[O]=i[O];x.clippingState=w,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=F}};function h(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(v,_,S,b){const R=v!==null?v.length:0;let y=null;if(R!==0){if(y=m.value,b!==!0||y===null){const x=S+R*4,F=_.matrixWorldInverse;d.getNormalMatrix(F),(y===null||y.length<x)&&(y=new Float32Array(x));for(let I=0,w=S;I!==R;++I,w+=4)u.copy(v[I]).applyMatrix4(F,d),u.normal.toArray(y,w),y[w+3]=u.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,y}}const Vs=4,Sv=[.125,.215,.35,.446,.526,.582],Sr=20,ZT=256,Ll=new kx,Mv=new Vt;let Rh=null,Ch=0,wh=0,Dh=!1;const KT=new ne;class yv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,o=100,c={}){const{size:u=256,position:d=KT}=c;Rh=this._renderer.getRenderTarget(),Ch=this._renderer.getActiveCubeFace(),wh=this._renderer.getActiveMipmapLevel(),Dh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,o,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Rh,Ch,wh),this._renderer.xr.enabled=Dh,e.scissorTest=!1,Eo(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Er||e.mapping===No?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Rh=this._renderer.getRenderTarget(),Ch=this._renderer.getActiveCubeFace(),wh=this._renderer.getActiveMipmapLevel(),Dh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:dn,minFilter:dn,generateMipmaps:!1,type:es,format:ra,colorSpace:Ou,depthBuffer:!1},o=Ev(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ev(e,i,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=QT(c)),this._blurMaterial=$T(c,e,i),this._ggxMaterial=JT(c,e,i)}return o}_compileMaterial(e){const i=new Ai(new Yi,e);this._renderer.compile(i,Ll)}_sceneToCubeUV(e,i,r,o,c){const m=new ki(90,1,i,r),h=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,_=v.autoClear,S=v.toneMapping;v.getClearColor(Mv),v.toneMapping=Sa,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(o),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ai(new Yl,new Bu({name:"PMREM.Background",side:mi,depthWrite:!1,depthTest:!1})));const R=this._backgroundBox,y=R.material;let x=!1;const F=e.background;F?F.isColor&&(y.color.copy(F),e.background=null,x=!0):(y.color.copy(Mv),x=!0);for(let I=0;I<6;I++){const w=I%3;w===0?(m.up.set(0,h[I],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[I],c.y,c.z)):w===1?(m.up.set(0,0,h[I]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[I],c.z)):(m.up.set(0,h[I],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[I]));const O=this._cubeSize;Eo(o,w*O,I>2?O:0,O,O),v.setRenderTarget(o),x&&v.render(R,m),v.render(e,m)}v.toneMapping=S,v.autoClear=_,e.background=F}_textureToCubeUV(e,i){const r=this._renderer,o=e.mapping===Er||e.mapping===No;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bv());const c=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=c;const d=c.uniforms;d.envMap.value=e;const m=this._cubeSize;Eo(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(u,Ll)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=r}_applyGGXFilter(e,i,r){const o=this._renderer,c=this._pingPongRenderTarget,u=this._ggxMaterial,d=this._lodMeshes[r];d.material=u;const m=u.uniforms,h=r/(this._lodMeshes.length-1),g=i/(this._lodMeshes.length-1),v=Math.sqrt(h*h-g*g),_=0+h*1.25,S=v*_,{_lodMax:b}=this,R=this._sizeLods[r],y=3*R*(r>b-Vs?r-b+Vs:0),x=4*(this._cubeSize-R);m.envMap.value=e.texture,m.roughness.value=S,m.mipInt.value=b-i,Eo(c,y,x,3*R,2*R),o.setRenderTarget(c),o.render(d,Ll),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=b-r,Eo(e,y,x,3*R,2*R),o.setRenderTarget(e),o.render(d,Ll)}_blur(e,i,r,o,c){const u=this._pingPongRenderTarget;this._halfBlur(e,u,i,r,o,"latitudinal",c),this._halfBlur(u,e,r,r,o,"longitudinal",c)}_halfBlur(e,i,r,o,c,u,d){const m=this._renderer,h=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Nt("blur direction must be either latitudinal or longitudinal!");const g=3,v=this._lodMeshes[o];v.material=h;const _=h.uniforms,S=this._sizeLods[r]-1,b=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*Sr-1),R=c/b,y=isFinite(c)?1+Math.floor(g*R):Sr;y>Sr&&rt(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Sr}`);const x=[];let F=0;for(let z=0;z<Sr;++z){const T=z/R,N=Math.exp(-T*T/2);x.push(N),z===0?F+=N:z<y&&(F+=2*N)}for(let z=0;z<x.length;z++)x[z]=x[z]/F;_.envMap.value=e.texture,_.samples.value=y,_.weights.value=x,_.latitudinal.value=u==="latitudinal",d&&(_.poleAxis.value=d);const{_lodMax:I}=this;_.dTheta.value=b,_.mipInt.value=I-r;const w=this._sizeLods[o],O=3*w*(o>I-Vs?o-I+Vs:0),L=4*(this._cubeSize-w);Eo(i,O,L,3*w,2*w),m.setRenderTarget(i),m.render(v,Ll)}}function QT(a){const e=[],i=[],r=[];let o=a;const c=a-Vs+1+Sv.length;for(let u=0;u<c;u++){const d=Math.pow(2,o);e.push(d);let m=1/d;u>a-Vs?m=Sv[u-a+Vs-1]:u===0&&(m=0),i.push(m);const h=1/(d-2),g=-h,v=1+h,_=[g,g,v,g,v,v,g,g,v,v,g,v],S=6,b=6,R=3,y=2,x=1,F=new Float32Array(R*b*S),I=new Float32Array(y*b*S),w=new Float32Array(x*b*S);for(let L=0;L<S;L++){const z=L%3*2/3-1,T=L>2?0:-1,N=[z,T,0,z+2/3,T,0,z+2/3,T+1,0,z,T,0,z+2/3,T+1,0,z,T+1,0];F.set(N,R*b*L),I.set(_,y*b*L);const q=[L,L,L,L,L,L];w.set(q,x*b*L)}const O=new Yi;O.setAttribute("position",new ya(F,R)),O.setAttribute("uv",new ya(I,y)),O.setAttribute("faceIndex",new ya(w,x)),r.push(new Ai(O,null)),o>Vs&&o--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function Ev(a,e,i){const r=new Ma(a,e,i);return r.texture.mapping=Vu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Eo(a,e,i,r,o){a.viewport.set(e,i,r,o),a.scissor.set(e,i,r,o)}function JT(a,e,i){return new qi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ZT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Xu(),fragmentShader:`

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
		`,blending:Qa,depthTest:!1,depthWrite:!1})}function $T(a,e,i){const r=new Float32Array(Sr),o=new ne(0,1,0);return new qi({name:"SphericalGaussianBlur",defines:{n:Sr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Xu(),fragmentShader:`

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
		`,blending:Qa,depthTest:!1,depthWrite:!1})}function bv(){return new qi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xu(),fragmentShader:`

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
		`,blending:Qa,depthTest:!1,depthWrite:!1})}function Tv(){return new qi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qa,depthTest:!1,depthWrite:!1})}function Xu(){return`

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
	`}class Yx extends Ma{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new Bx(o),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Yl(5,5,5),c=new qi({name:"CubemapFromEquirect",uniforms:Oo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:mi,blending:Qa});c.uniforms.tEquirect.value=i;const u=new Ai(o,c),d=i.minFilter;return i.minFilter===Hs&&(i.minFilter=dn),new sb(1,10,this).update(e,u),i.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,i=!0,r=!0,o=!0){const c=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(i,r,o);e.setRenderTarget(c)}}function eA(a){let e=new WeakMap,i=new WeakMap,r=null;function o(_,S=!1){return _==null?null:S?u(_):c(_)}function c(_){if(_&&_.isTexture){const S=_.mapping;if(S===$d||S===eh)if(e.has(_)){const b=e.get(_).texture;return d(b,_.mapping)}else{const b=_.image;if(b&&b.height>0){const R=new Yx(b.height);return R.fromEquirectangularTexture(a,_),e.set(_,R),_.addEventListener("dispose",h),d(R.texture,_.mapping)}else return null}}return _}function u(_){if(_&&_.isTexture){const S=_.mapping,b=S===$d||S===eh,R=S===Er||S===No;if(b||R){let y=i.get(_);const x=y!==void 0?y.texture.pmremVersion:0;if(_.isRenderTargetTexture&&_.pmremVersion!==x)return r===null&&(r=new yv(a)),y=b?r.fromEquirectangular(_,y):r.fromCubemap(_,y),y.texture.pmremVersion=_.pmremVersion,i.set(_,y),y.texture;if(y!==void 0)return y.texture;{const F=_.image;return b&&F&&F.height>0||R&&F&&m(F)?(r===null&&(r=new yv(a)),y=b?r.fromEquirectangular(_):r.fromCubemap(_),y.texture.pmremVersion=_.pmremVersion,i.set(_,y),_.addEventListener("dispose",g),y.texture):null}}}return _}function d(_,S){return S===$d?_.mapping=Er:S===eh&&(_.mapping=No),_}function m(_){let S=0;const b=6;for(let R=0;R<b;R++)_[R]!==void 0&&S++;return S===b}function h(_){const S=_.target;S.removeEventListener("dispose",h);const b=e.get(S);b!==void 0&&(e.delete(S),b.dispose())}function g(_){const S=_.target;S.removeEventListener("dispose",g);const b=i.get(S);b!==void 0&&(i.delete(S),b.dispose())}function v(){e=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:v}}function tA(a){const e={};function i(r){if(e[r]!==void 0)return e[r];const o=a.getExtension(r);return e[r]=o,o}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const o=i(r);return o===null&&Ro("WebGLRenderer: "+r+" extension not supported."),o}}}function nA(a,e,i,r){const o={},c=new WeakMap;function u(v){const _=v.target;_.index!==null&&e.remove(_.index);for(const b in _.attributes)e.remove(_.attributes[b]);_.removeEventListener("dispose",u),delete o[_.id];const S=c.get(_);S&&(e.remove(S),c.delete(_)),r.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,i.memory.geometries--}function d(v,_){return o[_.id]===!0||(_.addEventListener("dispose",u),o[_.id]=!0,i.memory.geometries++),_}function m(v){const _=v.attributes;for(const S in _)e.update(_[S],a.ARRAY_BUFFER)}function h(v){const _=[],S=v.index,b=v.attributes.position;let R=0;if(b===void 0)return;if(S!==null){const F=S.array;R=S.version;for(let I=0,w=F.length;I<w;I+=3){const O=F[I+0],L=F[I+1],z=F[I+2];_.push(O,L,L,z,z,O)}}else{const F=b.array;R=b.version;for(let I=0,w=F.length/3-1;I<w;I+=3){const O=I+0,L=I+1,z=I+2;_.push(O,L,L,z,z,O)}}const y=new(b.count>=65535?Ix:Px)(_,1);y.version=R;const x=c.get(v);x&&e.remove(x),c.set(v,y)}function g(v){const _=c.get(v);if(_){const S=v.index;S!==null&&_.version<S.version&&h(v)}else h(v);return c.get(v)}return{get:d,update:m,getWireframeAttribute:g}}function iA(a,e,i){let r;function o(v){r=v}let c,u;function d(v){c=v.type,u=v.bytesPerElement}function m(v,_){a.drawElements(r,_,c,v*u),i.update(_,r,1)}function h(v,_,S){S!==0&&(a.drawElementsInstanced(r,_,c,v*u,S),i.update(_,r,S))}function g(v,_,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,_,0,c,v,0,S);let R=0;for(let y=0;y<S;y++)R+=_[y];i.update(R,r,1)}this.setMode=o,this.setIndex=d,this.render=m,this.renderInstances=h,this.renderMultiDraw=g}function aA(a){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,u,d){switch(i.calls++,u){case a.TRIANGLES:i.triangles+=d*(c/3);break;case a.LINES:i.lines+=d*(c/2);break;case a.LINE_STRIP:i.lines+=d*(c-1);break;case a.LINE_LOOP:i.lines+=d*c;break;case a.POINTS:i.points+=d*c;break;default:Nt("WebGLInfo: Unknown draw mode:",u);break}}function o(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:o,update:r}}function sA(a,e,i){const r=new WeakMap,o=new vn;function c(u,d,m){const h=u.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=g!==void 0?g.length:0;let _=r.get(d);if(_===void 0||_.count!==v){let q=function(){T.dispose(),r.delete(d),d.removeEventListener("dispose",q)};var S=q;_!==void 0&&_.texture.dispose();const b=d.morphAttributes.position!==void 0,R=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,x=d.morphAttributes.position||[],F=d.morphAttributes.normal||[],I=d.morphAttributes.color||[];let w=0;b===!0&&(w=1),R===!0&&(w=2),y===!0&&(w=3);let O=d.attributes.position.count*w,L=1;O>e.maxTextureSize&&(L=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);const z=new Float32Array(O*L*4*v),T=new Nx(z,O,L,v);T.type=va,T.needsUpdate=!0;const N=w*4;for(let X=0;X<v;X++){const K=x[X],ce=F[X],ue=I[X],Z=O*L*4*X;for(let H=0;H<K.count;H++){const V=H*N;b===!0&&(o.fromBufferAttribute(K,H),z[Z+V+0]=o.x,z[Z+V+1]=o.y,z[Z+V+2]=o.z,z[Z+V+3]=0),R===!0&&(o.fromBufferAttribute(ce,H),z[Z+V+4]=o.x,z[Z+V+5]=o.y,z[Z+V+6]=o.z,z[Z+V+7]=0),y===!0&&(o.fromBufferAttribute(ue,H),z[Z+V+8]=o.x,z[Z+V+9]=o.y,z[Z+V+10]=o.z,z[Z+V+11]=ue.itemSize===4?o.w:1)}}_={count:v,texture:T,size:new Ft(O,L)},r.set(d,_),d.addEventListener("dispose",q)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)m.getUniforms().setValue(a,"morphTexture",u.morphTexture,i);else{let b=0;for(let y=0;y<h.length;y++)b+=h[y];const R=d.morphTargetsRelative?1:1-b;m.getUniforms().setValue(a,"morphTargetBaseInfluence",R),m.getUniforms().setValue(a,"morphTargetInfluences",h)}m.getUniforms().setValue(a,"morphTargetsTexture",_.texture,i),m.getUniforms().setValue(a,"morphTargetsTextureSize",_.size)}return{update:c}}function rA(a,e,i,r,o){let c=new WeakMap;function u(h){const g=o.render.frame,v=h.geometry,_=e.get(h,v);if(c.get(_)!==g&&(e.update(_),c.set(_,g)),h.isInstancedMesh&&(h.hasEventListener("dispose",m)===!1&&h.addEventListener("dispose",m),c.get(h)!==g&&(i.update(h.instanceMatrix,a.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,a.ARRAY_BUFFER),c.set(h,g))),h.isSkinnedMesh){const S=h.skeleton;c.get(S)!==g&&(S.update(),c.set(S,g))}return _}function d(){c=new WeakMap}function m(h){const g=h.target;g.removeEventListener("dispose",m),r.releaseStatesOfObject(g),i.remove(g.instanceMatrix),g.instanceColor!==null&&i.remove(g.instanceColor)}return{update:u,dispose:d}}const oA={[gx]:"LINEAR_TONE_MAPPING",[_x]:"REINHARD_TONE_MAPPING",[vx]:"CINEON_TONE_MAPPING",[xx]:"ACES_FILMIC_TONE_MAPPING",[Mx]:"AGX_TONE_MAPPING",[yx]:"NEUTRAL_TONE_MAPPING",[Sx]:"CUSTOM_TONE_MAPPING"};function lA(a,e,i,r,o,c){const u=new Ma(e,i,{type:a,depthBuffer:o,stencilBuffer:c,samples:r?4:0,depthTexture:o?new Uo(e,i):void 0}),d=new Ma(e,i,{type:es,depthBuffer:!1,stencilBuffer:!1}),m=new Yi;m.setAttribute("position",new Wi([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new Wi([0,2,0,0,2,0],2));const h=new nb({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),g=new Ai(m,h),v=new kx(-1,1,1,-1,0,1);let _=null,S=null,b=!1,R,y=null,x=[],F=!1;this.setSize=function(I,w){u.setSize(I,w),d.setSize(I,w);for(let O=0;O<x.length;O++){const L=x[O];L.setSize&&L.setSize(I,w)}},this.setEffects=function(I){x=I,F=x.length>0&&x[0].isRenderPass===!0;const w=u.width,O=u.height;for(let L=0;L<x.length;L++){const z=x[L];z.setSize&&z.setSize(w,O)}},this.begin=function(I,w){if(b||I.toneMapping===Sa&&x.length===0)return!1;if(y=w,w!==null){const O=w.width,L=w.height;(u.width!==O||u.height!==L)&&this.setSize(O,L)}return F===!1&&I.setRenderTarget(u),R=I.toneMapping,I.toneMapping=Sa,!0},this.hasRenderPass=function(){return F},this.end=function(I,w){I.toneMapping=R,b=!0;let O=u,L=d;for(let z=0;z<x.length;z++){const T=x[z];if(T.enabled!==!1&&(T.render(I,L,O,w),T.needsSwap!==!1)){const N=O;O=L,L=N}}if(_!==I.outputColorSpace||S!==I.toneMapping){_=I.outputColorSpace,S=I.toneMapping,h.defines={},wt.getTransfer(_)===Wt&&(h.defines.SRGB_TRANSFER="");const z=oA[S];z&&(h.defines[z]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=O.texture,I.setRenderTarget(y),I.render(g,v),y=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){u.depthTexture&&u.depthTexture.dispose(),u.dispose(),d.dispose(),m.dispose(),h.dispose()}}const qx=new Zn,Cp=new Uo(1,1),jx=new Nx,Zx=new wE,Kx=new Bx,Av=[],Rv=[],Cv=new Float32Array(16),wv=new Float32Array(9),Dv=new Float32Array(4);function Fo(a,e,i){const r=a[0];if(r<=0||r>0)return a;const o=e*i;let c=Av[o];if(c===void 0&&(c=new Float32Array(o),Av[o]=c),e!==0){r.toArray(c,0);for(let u=1,d=0;u!==e;++u)d+=i,a[u].toArray(c,d)}return c}function Nn(a,e){if(a.length!==e.length)return!1;for(let i=0,r=a.length;i<r;i++)if(a[i]!==e[i])return!1;return!0}function Un(a,e){for(let i=0,r=e.length;i<r;i++)a[i]=e[i]}function Wu(a,e){let i=Rv[e];i===void 0&&(i=new Int32Array(e),Rv[e]=i);for(let r=0;r!==e;++r)i[r]=a.allocateTextureUnit();return i}function cA(a,e){const i=this.cache;i[0]!==e&&(a.uniform1f(this.addr,e),i[0]=e)}function uA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Nn(i,e))return;a.uniform2fv(this.addr,e),Un(i,e)}}function fA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Nn(i,e))return;a.uniform3fv(this.addr,e),Un(i,e)}}function dA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Nn(i,e))return;a.uniform4fv(this.addr,e),Un(i,e)}}function hA(a,e){const i=this.cache,r=e.elements;if(r===void 0){if(Nn(i,e))return;a.uniformMatrix2fv(this.addr,!1,e),Un(i,e)}else{if(Nn(i,r))return;Dv.set(r),a.uniformMatrix2fv(this.addr,!1,Dv),Un(i,r)}}function pA(a,e){const i=this.cache,r=e.elements;if(r===void 0){if(Nn(i,e))return;a.uniformMatrix3fv(this.addr,!1,e),Un(i,e)}else{if(Nn(i,r))return;wv.set(r),a.uniformMatrix3fv(this.addr,!1,wv),Un(i,r)}}function mA(a,e){const i=this.cache,r=e.elements;if(r===void 0){if(Nn(i,e))return;a.uniformMatrix4fv(this.addr,!1,e),Un(i,e)}else{if(Nn(i,r))return;Cv.set(r),a.uniformMatrix4fv(this.addr,!1,Cv),Un(i,r)}}function gA(a,e){const i=this.cache;i[0]!==e&&(a.uniform1i(this.addr,e),i[0]=e)}function _A(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Nn(i,e))return;a.uniform2iv(this.addr,e),Un(i,e)}}function vA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Nn(i,e))return;a.uniform3iv(this.addr,e),Un(i,e)}}function xA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Nn(i,e))return;a.uniform4iv(this.addr,e),Un(i,e)}}function SA(a,e){const i=this.cache;i[0]!==e&&(a.uniform1ui(this.addr,e),i[0]=e)}function MA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Nn(i,e))return;a.uniform2uiv(this.addr,e),Un(i,e)}}function yA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Nn(i,e))return;a.uniform3uiv(this.addr,e),Un(i,e)}}function EA(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Nn(i,e))return;a.uniform4uiv(this.addr,e),Un(i,e)}}function bA(a,e,i){const r=this.cache,o=i.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o);let c;this.type===a.SAMPLER_2D_SHADOW?(Cp.compareFunction=i.isReversedDepthBuffer()?Gp:Hp,c=Cp):c=qx,i.setTexture2D(e||c,o)}function TA(a,e,i){const r=this.cache,o=i.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),i.setTexture3D(e||Zx,o)}function AA(a,e,i){const r=this.cache,o=i.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),i.setTextureCube(e||Kx,o)}function RA(a,e,i){const r=this.cache,o=i.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),i.setTexture2DArray(e||jx,o)}function CA(a){switch(a){case 5126:return cA;case 35664:return uA;case 35665:return fA;case 35666:return dA;case 35674:return hA;case 35675:return pA;case 35676:return mA;case 5124:case 35670:return gA;case 35667:case 35671:return _A;case 35668:case 35672:return vA;case 35669:case 35673:return xA;case 5125:return SA;case 36294:return MA;case 36295:return yA;case 36296:return EA;case 35678:case 36198:case 36298:case 36306:case 35682:return bA;case 35679:case 36299:case 36307:return TA;case 35680:case 36300:case 36308:case 36293:return AA;case 36289:case 36303:case 36311:case 36292:return RA}}function wA(a,e){a.uniform1fv(this.addr,e)}function DA(a,e){const i=Fo(e,this.size,2);a.uniform2fv(this.addr,i)}function LA(a,e){const i=Fo(e,this.size,3);a.uniform3fv(this.addr,i)}function NA(a,e){const i=Fo(e,this.size,4);a.uniform4fv(this.addr,i)}function UA(a,e){const i=Fo(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,i)}function OA(a,e){const i=Fo(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,i)}function PA(a,e){const i=Fo(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,i)}function IA(a,e){a.uniform1iv(this.addr,e)}function FA(a,e){a.uniform2iv(this.addr,e)}function BA(a,e){a.uniform3iv(this.addr,e)}function zA(a,e){a.uniform4iv(this.addr,e)}function HA(a,e){a.uniform1uiv(this.addr,e)}function GA(a,e){a.uniform2uiv(this.addr,e)}function VA(a,e){a.uniform3uiv(this.addr,e)}function kA(a,e){a.uniform4uiv(this.addr,e)}function XA(a,e,i){const r=this.cache,o=e.length,c=Wu(i,o);Nn(r,c)||(a.uniform1iv(this.addr,c),Un(r,c));let u;this.type===a.SAMPLER_2D_SHADOW?u=Cp:u=qx;for(let d=0;d!==o;++d)i.setTexture2D(e[d]||u,c[d])}function WA(a,e,i){const r=this.cache,o=e.length,c=Wu(i,o);Nn(r,c)||(a.uniform1iv(this.addr,c),Un(r,c));for(let u=0;u!==o;++u)i.setTexture3D(e[u]||Zx,c[u])}function YA(a,e,i){const r=this.cache,o=e.length,c=Wu(i,o);Nn(r,c)||(a.uniform1iv(this.addr,c),Un(r,c));for(let u=0;u!==o;++u)i.setTextureCube(e[u]||Kx,c[u])}function qA(a,e,i){const r=this.cache,o=e.length,c=Wu(i,o);Nn(r,c)||(a.uniform1iv(this.addr,c),Un(r,c));for(let u=0;u!==o;++u)i.setTexture2DArray(e[u]||jx,c[u])}function jA(a){switch(a){case 5126:return wA;case 35664:return DA;case 35665:return LA;case 35666:return NA;case 35674:return UA;case 35675:return OA;case 35676:return PA;case 5124:case 35670:return IA;case 35667:case 35671:return FA;case 35668:case 35672:return BA;case 35669:case 35673:return zA;case 5125:return HA;case 36294:return GA;case 36295:return VA;case 36296:return kA;case 35678:case 36198:case 36298:case 36306:case 35682:return XA;case 35679:case 36299:case 36307:return WA;case 35680:case 36300:case 36308:case 36293:return YA;case 36289:case 36303:case 36311:case 36292:return qA}}class ZA{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=CA(i.type)}}class KA{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=jA(i.type)}}class QA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const d=o[c];d.setValue(e,i[d.id],r)}}}const Lh=/(\w+)(\])?(\[|\.)?/g;function Lv(a,e){a.seq.push(e),a.map[e.id]=e}function JA(a,e,i){const r=a.name,o=r.length;for(Lh.lastIndex=0;;){const c=Lh.exec(r),u=Lh.lastIndex;let d=c[1];const m=c[2]==="]",h=c[3];if(m&&(d=d|0),h===void 0||h==="["&&u+2===o){Lv(i,h===void 0?new ZA(d,a,e):new KA(d,a,e));break}else{let v=i.map[d];v===void 0&&(v=new QA(d),Lv(i,v)),i=v}}}class Du{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const d=e.getActiveUniform(i,u),m=e.getUniformLocation(i,d.name);JA(d,m,this)}const o=[],c=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):c.push(u);o.length>0&&(this.seq=o.concat(c))}setValue(e,i,r,o){const c=this.map[i];c!==void 0&&c.setValue(e,r,o)}setOptional(e,i,r){const o=i[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,i,r,o){for(let c=0,u=i.length;c!==u;++c){const d=i[c],m=r[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,o)}}static seqWithValue(e,i){const r=[];for(let o=0,c=e.length;o!==c;++o){const u=e[o];u.id in i&&r.push(u)}return r}}function Nv(a,e,i){const r=a.createShader(e);return a.shaderSource(r,i),a.compileShader(r),r}const $A=37297;let e2=0;function t2(a,e){const i=a.split(`
`),r=[],o=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let u=o;u<c;u++){const d=u+1;r.push(`${d===e?">":" "} ${d}: ${i[u]}`)}return r.join(`
`)}const Uv=new ct;function n2(a){wt._getMatrix(Uv,wt.workingColorSpace,a);const e=`mat3( ${Uv.elements.map(i=>i.toFixed(4))} )`;switch(wt.getTransfer(a)){case Pu:return[e,"LinearTransferOETF"];case Wt:return[e,"sRGBTransferOETF"];default:return rt("WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function Ov(a,e,i){const r=a.getShaderParameter(e,a.COMPILE_STATUS),c=(a.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const d=parseInt(u[1]);return i.toUpperCase()+`

`+c+`

`+t2(a.getShaderSource(e),d)}else return c}function i2(a,e){const i=n2(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const a2={[gx]:"Linear",[_x]:"Reinhard",[vx]:"Cineon",[xx]:"ACESFilmic",[Mx]:"AgX",[yx]:"Neutral",[Sx]:"Custom"};function s2(a,e){const i=a2[e];return i===void 0?(rt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+a+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+a+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Eu=new ne;function r2(){wt.getLuminanceCoefficients(Eu);const a=Eu.x.toFixed(4),e=Eu.y.toFixed(4),i=Eu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function o2(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Pl).join(`
`)}function l2(a){const e=[];for(const i in a){const r=a[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function c2(a,e){const i={},r=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const c=a.getActiveAttrib(e,o),u=c.name;let d=1;c.type===a.FLOAT_MAT2&&(d=2),c.type===a.FLOAT_MAT3&&(d=3),c.type===a.FLOAT_MAT4&&(d=4),i[u]={type:c.type,location:a.getAttribLocation(e,u),locationSize:d}}return i}function Pl(a){return a!==""}function Pv(a,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Iv(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const u2=/^[ \t]*#include +<([\w\d./]+)>/gm;function wp(a){return a.replace(u2,d2)}const f2=new Map;function d2(a,e){let i=gt[e];if(i===void 0){const r=f2.get(e);if(r!==void 0)i=gt[r],rt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return wp(i)}const h2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fv(a){return a.replace(h2,p2)}function p2(a,e,i,r){let o="";for(let c=parseInt(e);c<parseInt(i);c++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function Bv(a){let e=`precision ${a.precision} float;
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
#define LOW_PRECISION`),e}const m2={[Tu]:"SHADOWMAP_TYPE_PCF",[Ul]:"SHADOWMAP_TYPE_VSM"};function g2(a){return m2[a.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const _2={[Er]:"ENVMAP_TYPE_CUBE",[No]:"ENVMAP_TYPE_CUBE",[Vu]:"ENVMAP_TYPE_CUBE_UV"};function v2(a){return a.envMap===!1?"ENVMAP_TYPE_CUBE":_2[a.envMapMode]||"ENVMAP_TYPE_CUBE"}const x2={[No]:"ENVMAP_MODE_REFRACTION"};function S2(a){return a.envMap===!1?"ENVMAP_MODE_REFLECTION":x2[a.envMapMode]||"ENVMAP_MODE_REFLECTION"}const M2={[mx]:"ENVMAP_BLENDING_MULTIPLY",[qy]:"ENVMAP_BLENDING_MIX",[jy]:"ENVMAP_BLENDING_ADD"};function y2(a){return a.envMap===!1?"ENVMAP_BLENDING_NONE":M2[a.combine]||"ENVMAP_BLENDING_NONE"}function E2(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function b2(a,e,i,r){const o=a.getContext(),c=i.defines;let u=i.vertexShader,d=i.fragmentShader;const m=g2(i),h=v2(i),g=S2(i),v=y2(i),_=E2(i),S=o2(i),b=l2(c),R=o.createProgram();let y,x,F=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Pl).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Pl).join(`
`),x.length>0&&(x+=`
`)):(y=[Bv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pl).join(`
`),x=[Bv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+g:"",i.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Sa?"#define TONE_MAPPING":"",i.toneMapping!==Sa?gt.tonemapping_pars_fragment:"",i.toneMapping!==Sa?s2("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",gt.colorspace_pars_fragment,i2("linearToOutputTexel",i.outputColorSpace),r2(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Pl).join(`
`)),u=wp(u),u=Pv(u,i),u=Iv(u,i),d=wp(d),d=Pv(d,i),d=Iv(d,i),u=Fv(u),d=Fv(d),i.isRawShaderMaterial!==!0&&(F=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",i.glslVersion===Z_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Z_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const I=F+y+u,w=F+x+d,O=Nv(o,o.VERTEX_SHADER,I),L=Nv(o,o.FRAGMENT_SHADER,w);o.attachShader(R,O),o.attachShader(R,L),i.index0AttributeName!==void 0?o.bindAttribLocation(R,0,i.index0AttributeName):i.hasPositionAttribute===!0&&o.bindAttribLocation(R,0,"position"),o.linkProgram(R);function z(X){if(a.debug.checkShaderErrors){const K=o.getProgramInfoLog(R)||"",ce=o.getShaderInfoLog(O)||"",ue=o.getShaderInfoLog(L)||"",Z=K.trim(),H=ce.trim(),V=ue.trim();let te=!0,ge=!0;if(o.getProgramParameter(R,o.LINK_STATUS)===!1)if(te=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(o,R,O,L);else{const Se=Ov(o,O,"vertex"),U=Ov(o,L,"fragment");Nt("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(R,o.VALIDATE_STATUS)+`

Material Name: `+X.name+`
Material Type: `+X.type+`

Program Info Log: `+Z+`
`+Se+`
`+U)}else Z!==""?rt("WebGLProgram: Program Info Log:",Z):(H===""||V==="")&&(ge=!1);ge&&(X.diagnostics={runnable:te,programLog:Z,vertexShader:{log:H,prefix:y},fragmentShader:{log:V,prefix:x}})}o.deleteShader(O),o.deleteShader(L),T=new Du(o,R),N=c2(o,R)}let T;this.getUniforms=function(){return T===void 0&&z(this),T};let N;this.getAttributes=function(){return N===void 0&&z(this),N};let q=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return q===!1&&(q=o.getProgramParameter(R,$A)),q},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(R),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=e2++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=O,this.fragmentShader=L,this}let T2=0;class A2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,i,r){const o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new R2(e),i.set(e,r)),r}}class R2{constructor(e){this.id=T2++,this.code=e,this.usedTimes=0}}function C2(a){return a===br||a===Nu||a===Uu}function w2(a,e,i,r,o,c){const u=new Ux,d=new A2,m=new Set,h=[],g=new Map,v=r.logarithmicDepthBuffer;let _=r.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(T){return m.add(T),T===0?"uv":`uv${T}`}function R(T,N,q,X,K,ce){const ue=X.fog,Z=K.geometry,H=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?X.environment:null,V=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,te=e.get(T.envMap||H,V),ge=te&&te.mapping===Vu?te.image.height:null,Se=S[T.type];T.precision!==null&&(_=r.getMaxPrecision(T.precision),_!==T.precision&&rt("WebGLProgram.getParameters:",T.precision,"not supported, using",_,"instead."));const U=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,J=U!==void 0?U.length:0;let Ee=0;Z.morphAttributes.position!==void 0&&(Ee=1),Z.morphAttributes.normal!==void 0&&(Ee=2),Z.morphAttributes.color!==void 0&&(Ee=3);let Re,De,ie,Me;if(Se){const Ye=ga[Se];Re=Ye.vertexShader,De=Ye.fragmentShader}else{Re=T.vertexShader,De=T.fragmentShader;const Ye=d.getVertexShaderStage(T),qt=d.getFragmentShaderStage(T);d.update(T,Ye,qt),ie=Ye.id,Me=qt.id}const ve=a.getRenderTarget(),We=a.state.buffers.depth.getReversed(),st=K.isInstancedMesh===!0,$e=K.isBatchedMesh===!0,Yt=!!T.map,ht=!!T.matcap,St=!!te,vt=!!T.aoMap,et=!!T.lightMap,Gt=!!T.bumpMap&&T.wireframe===!1,Jt=!!T.normalMap,$t=!!T.displacementMap,en=!!T.emissiveMap,Bt=!!T.metalnessMap,an=!!T.roughnessMap,Q=T.anisotropy>0,Ut=T.clearcoat>0,Rt=T.dispersion>0,P=T.iridescence>0,E=T.sheen>0,ee=T.transmission>0,ae=Q&&!!T.anisotropyMap,me=Ut&&!!T.clearcoatMap,Ue=Ut&&!!T.clearcoatNormalMap,Be=Ut&&!!T.clearcoatRoughnessMap,fe=P&&!!T.iridescenceMap,pe=P&&!!T.iridescenceThicknessMap,we=E&&!!T.sheenColorMap,ze=E&&!!T.sheenRoughnessMap,Oe=!!T.specularMap,Fe=!!T.specularColorMap,je=!!T.specularIntensityMap,Ke=ee&&!!T.transmissionMap,it=ee&&!!T.thicknessMap,W=!!T.gradientMap,Le=!!T.alphaMap,_e=T.alphaTest>0,Ie=!!T.alphaHash,Ge=!!T.extensions;let Te=Sa;T.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(Te=a.toneMapping);const Qe={shaderID:Se,shaderType:T.type,shaderName:T.name,vertexShader:Re,fragmentShader:De,defines:T.defines,customVertexShaderID:ie,customFragmentShaderID:Me,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:_,batching:$e,batchingColor:$e&&K._colorsTexture!==null,instancing:st,instancingColor:st&&K.instanceColor!==null,instancingMorph:st&&K.morphTexture!==null,outputColorSpace:ve===null?a.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:wt.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:Yt,matcap:ht,envMap:St,envMapMode:St&&te.mapping,envMapCubeUVHeight:ge,aoMap:vt,lightMap:et,bumpMap:Gt,normalMap:Jt,displacementMap:$t,emissiveMap:en,normalMapObjectSpace:Jt&&T.normalMapType===Qy,normalMapTangentSpace:Jt&&T.normalMapType===Y_,packedNormalMap:Jt&&T.normalMapType===Y_&&C2(T.normalMap.format),metalnessMap:Bt,roughnessMap:an,anisotropy:Q,anisotropyMap:ae,clearcoat:Ut,clearcoatMap:me,clearcoatNormalMap:Ue,clearcoatRoughnessMap:Be,dispersion:Rt,iridescence:P,iridescenceMap:fe,iridescenceThicknessMap:pe,sheen:E,sheenColorMap:we,sheenRoughnessMap:ze,specularMap:Oe,specularColorMap:Fe,specularIntensityMap:je,transmission:ee,transmissionMap:Ke,thicknessMap:it,gradientMap:W,opaque:T.transparent===!1&&T.blending===Ao&&T.alphaToCoverage===!1,alphaMap:Le,alphaTest:_e,alphaHash:Ie,combine:T.combine,mapUv:Yt&&b(T.map.channel),aoMapUv:vt&&b(T.aoMap.channel),lightMapUv:et&&b(T.lightMap.channel),bumpMapUv:Gt&&b(T.bumpMap.channel),normalMapUv:Jt&&b(T.normalMap.channel),displacementMapUv:$t&&b(T.displacementMap.channel),emissiveMapUv:en&&b(T.emissiveMap.channel),metalnessMapUv:Bt&&b(T.metalnessMap.channel),roughnessMapUv:an&&b(T.roughnessMap.channel),anisotropyMapUv:ae&&b(T.anisotropyMap.channel),clearcoatMapUv:me&&b(T.clearcoatMap.channel),clearcoatNormalMapUv:Ue&&b(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Be&&b(T.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&b(T.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&b(T.iridescenceThicknessMap.channel),sheenColorMapUv:we&&b(T.sheenColorMap.channel),sheenRoughnessMapUv:ze&&b(T.sheenRoughnessMap.channel),specularMapUv:Oe&&b(T.specularMap.channel),specularColorMapUv:Fe&&b(T.specularColorMap.channel),specularIntensityMapUv:je&&b(T.specularIntensityMap.channel),transmissionMapUv:Ke&&b(T.transmissionMap.channel),thicknessMapUv:it&&b(T.thicknessMap.channel),alphaMapUv:Le&&b(T.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(Jt||Q),vertexNormals:!!Z.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!Z.attributes.uv&&(Yt||Le),fog:!!ue,useFog:T.fog===!0,fogExp2:!!ue&&ue.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||Z.attributes.normal===void 0&&Jt===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:We,skinning:K.isSkinnedMesh===!0,hasPositionAttribute:Z.attributes.position!==void 0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:Ee,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numLightProbeGrids:ce.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:a.shadowMap.enabled&&q.length>0,shadowMapType:a.shadowMap.type,toneMapping:Te,decodeVideoTexture:Yt&&T.map.isVideoTexture===!0&&wt.getTransfer(T.map.colorSpace)===Wt,decodeVideoTextureEmissive:en&&T.emissiveMap.isVideoTexture===!0&&wt.getTransfer(T.emissiveMap.colorSpace)===Wt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===_a,flipSided:T.side===mi,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ge&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&T.extensions.multiDraw===!0||$e)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Qe.vertexUv1s=m.has(1),Qe.vertexUv2s=m.has(2),Qe.vertexUv3s=m.has(3),m.clear(),Qe}function y(T){const N=[];if(T.shaderID?N.push(T.shaderID):(N.push(T.customVertexShaderID),N.push(T.customFragmentShaderID)),T.defines!==void 0)for(const q in T.defines)N.push(q),N.push(T.defines[q]);return T.isRawShaderMaterial===!1&&(x(N,T),F(N,T),N.push(a.outputColorSpace)),N.push(T.customProgramCacheKey),N.join()}function x(T,N){T.push(N.precision),T.push(N.outputColorSpace),T.push(N.envMapMode),T.push(N.envMapCubeUVHeight),T.push(N.mapUv),T.push(N.alphaMapUv),T.push(N.lightMapUv),T.push(N.aoMapUv),T.push(N.bumpMapUv),T.push(N.normalMapUv),T.push(N.displacementMapUv),T.push(N.emissiveMapUv),T.push(N.metalnessMapUv),T.push(N.roughnessMapUv),T.push(N.anisotropyMapUv),T.push(N.clearcoatMapUv),T.push(N.clearcoatNormalMapUv),T.push(N.clearcoatRoughnessMapUv),T.push(N.iridescenceMapUv),T.push(N.iridescenceThicknessMapUv),T.push(N.sheenColorMapUv),T.push(N.sheenRoughnessMapUv),T.push(N.specularMapUv),T.push(N.specularColorMapUv),T.push(N.specularIntensityMapUv),T.push(N.transmissionMapUv),T.push(N.thicknessMapUv),T.push(N.combine),T.push(N.fogExp2),T.push(N.sizeAttenuation),T.push(N.morphTargetsCount),T.push(N.morphAttributeCount),T.push(N.numDirLights),T.push(N.numPointLights),T.push(N.numSpotLights),T.push(N.numSpotLightMaps),T.push(N.numHemiLights),T.push(N.numRectAreaLights),T.push(N.numDirLightShadows),T.push(N.numPointLightShadows),T.push(N.numSpotLightShadows),T.push(N.numSpotLightShadowsWithMaps),T.push(N.numLightProbes),T.push(N.shadowMapType),T.push(N.toneMapping),T.push(N.numClippingPlanes),T.push(N.numClipIntersection),T.push(N.depthPacking)}function F(T,N){u.disableAll(),N.instancing&&u.enable(0),N.instancingColor&&u.enable(1),N.instancingMorph&&u.enable(2),N.matcap&&u.enable(3),N.envMap&&u.enable(4),N.normalMapObjectSpace&&u.enable(5),N.normalMapTangentSpace&&u.enable(6),N.clearcoat&&u.enable(7),N.iridescence&&u.enable(8),N.alphaTest&&u.enable(9),N.vertexColors&&u.enable(10),N.vertexAlphas&&u.enable(11),N.vertexUv1s&&u.enable(12),N.vertexUv2s&&u.enable(13),N.vertexUv3s&&u.enable(14),N.vertexTangents&&u.enable(15),N.anisotropy&&u.enable(16),N.alphaHash&&u.enable(17),N.batching&&u.enable(18),N.dispersion&&u.enable(19),N.batchingColor&&u.enable(20),N.gradientMap&&u.enable(21),N.packedNormalMap&&u.enable(22),N.vertexNormals&&u.enable(23),T.push(u.mask),u.disableAll(),N.fog&&u.enable(0),N.useFog&&u.enable(1),N.flatShading&&u.enable(2),N.logarithmicDepthBuffer&&u.enable(3),N.reversedDepthBuffer&&u.enable(4),N.skinning&&u.enable(5),N.morphTargets&&u.enable(6),N.morphNormals&&u.enable(7),N.morphColors&&u.enable(8),N.premultipliedAlpha&&u.enable(9),N.shadowMapEnabled&&u.enable(10),N.doubleSided&&u.enable(11),N.flipSided&&u.enable(12),N.useDepthPacking&&u.enable(13),N.dithering&&u.enable(14),N.transmission&&u.enable(15),N.sheen&&u.enable(16),N.opaque&&u.enable(17),N.pointsUvs&&u.enable(18),N.decodeVideoTexture&&u.enable(19),N.decodeVideoTextureEmissive&&u.enable(20),N.alphaToCoverage&&u.enable(21),N.numLightProbeGrids>0&&u.enable(22),N.hasPositionAttribute&&u.enable(23),T.push(u.mask)}function I(T){const N=S[T.type];let q;if(N){const X=ga[N];q=$E.clone(X.uniforms)}else q=T.uniforms;return q}function w(T,N){let q=g.get(N);return q!==void 0?++q.usedTimes:(q=new b2(a,N,T,o),h.push(q),g.set(N,q)),q}function O(T){if(--T.usedTimes===0){const N=h.indexOf(T);h[N]=h[h.length-1],h.pop(),g.delete(T.cacheKey),T.destroy()}}function L(T){d.remove(T)}function z(){d.dispose()}return{getParameters:R,getProgramCacheKey:y,getUniforms:I,acquireProgram:w,releaseProgram:O,releaseShaderCache:L,programs:h,dispose:z}}function D2(){let a=new WeakMap;function e(u){return a.has(u)}function i(u){let d=a.get(u);return d===void 0&&(d={},a.set(u,d)),d}function r(u){a.delete(u)}function o(u,d,m){a.get(u)[d]=m}function c(){a=new WeakMap}return{has:e,get:i,remove:r,update:o,dispose:c}}function L2(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.materialVariant!==e.materialVariant?a.materialVariant-e.materialVariant:a.z!==e.z?a.z-e.z:a.id-e.id}function zv(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function Hv(){const a=[];let e=0;const i=[],r=[],o=[];function c(){e=0,i.length=0,r.length=0,o.length=0}function u(_){let S=0;return _.isInstancedMesh&&(S+=2),_.isSkinnedMesh&&(S+=1),S}function d(_,S,b,R,y,x){let F=a[e];return F===void 0?(F={id:_.id,object:_,geometry:S,material:b,materialVariant:u(_),groupOrder:R,renderOrder:_.renderOrder,z:y,group:x},a[e]=F):(F.id=_.id,F.object=_,F.geometry=S,F.material=b,F.materialVariant=u(_),F.groupOrder=R,F.renderOrder=_.renderOrder,F.z=y,F.group=x),e++,F}function m(_,S,b,R,y,x){const F=d(_,S,b,R,y,x);b.transmission>0?r.push(F):b.transparent===!0?o.push(F):i.push(F)}function h(_,S,b,R,y,x){const F=d(_,S,b,R,y,x);b.transmission>0?r.unshift(F):b.transparent===!0?o.unshift(F):i.unshift(F)}function g(_,S,b){i.length>1&&i.sort(_||L2),r.length>1&&r.sort(S||zv),o.length>1&&o.sort(S||zv),b&&(i.reverse(),r.reverse(),o.reverse())}function v(){for(let _=e,S=a.length;_<S;_++){const b=a[_];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:i,transmissive:r,transparent:o,init:c,push:m,unshift:h,finish:v,sort:g}}function N2(){let a=new WeakMap;function e(r,o){const c=a.get(r);let u;return c===void 0?(u=new Hv,a.set(r,[u])):o>=c.length?(u=new Hv,c.push(u)):u=c[o],u}function i(){a=new WeakMap}return{get:e,dispose:i}}function U2(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new ne,color:new Vt};break;case"SpotLight":i={position:new ne,direction:new ne,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ne,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ne,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":i={color:new Vt,position:new ne,halfWidth:new ne,halfHeight:new ne};break}return a[e.id]=i,i}}}function O2(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=i,i}}}let P2=0;function I2(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function F2(a){const e=new U2,i=O2(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new ne);const o=new ne,c=new bn,u=new bn;function d(h){let g=0,v=0,_=0;for(let N=0;N<9;N++)r.probe[N].set(0,0,0);let S=0,b=0,R=0,y=0,x=0,F=0,I=0,w=0,O=0,L=0,z=0;h.sort(I2);for(let N=0,q=h.length;N<q;N++){const X=h[N],K=X.color,ce=X.intensity,ue=X.distance;let Z=null;if(X.shadow&&X.shadow.map&&(X.shadow.map.texture.format===br?Z=X.shadow.map.texture:Z=X.shadow.map.depthTexture||X.shadow.map.texture),X.isAmbientLight)g+=K.r*ce,v+=K.g*ce,_+=K.b*ce;else if(X.isLightProbe){for(let H=0;H<9;H++)r.probe[H].addScaledVector(X.sh.coefficients[H],ce);z++}else if(X.isDirectionalLight){const H=e.get(X);if(H.color.copy(X.color).multiplyScalar(X.intensity),X.castShadow){const V=X.shadow,te=i.get(X);te.shadowIntensity=V.intensity,te.shadowBias=V.bias,te.shadowNormalBias=V.normalBias,te.shadowRadius=V.radius,te.shadowMapSize=V.mapSize,r.directionalShadow[S]=te,r.directionalShadowMap[S]=Z,r.directionalShadowMatrix[S]=X.shadow.matrix,F++}r.directional[S]=H,S++}else if(X.isSpotLight){const H=e.get(X);H.position.setFromMatrixPosition(X.matrixWorld),H.color.copy(K).multiplyScalar(ce),H.distance=ue,H.coneCos=Math.cos(X.angle),H.penumbraCos=Math.cos(X.angle*(1-X.penumbra)),H.decay=X.decay,r.spot[R]=H;const V=X.shadow;if(X.map&&(r.spotLightMap[O]=X.map,O++,V.updateMatrices(X),X.castShadow&&L++),r.spotLightMatrix[R]=V.matrix,X.castShadow){const te=i.get(X);te.shadowIntensity=V.intensity,te.shadowBias=V.bias,te.shadowNormalBias=V.normalBias,te.shadowRadius=V.radius,te.shadowMapSize=V.mapSize,r.spotShadow[R]=te,r.spotShadowMap[R]=Z,w++}R++}else if(X.isRectAreaLight){const H=e.get(X);H.color.copy(K).multiplyScalar(ce),H.halfWidth.set(X.width*.5,0,0),H.halfHeight.set(0,X.height*.5,0),r.rectArea[y]=H,y++}else if(X.isPointLight){const H=e.get(X);if(H.color.copy(X.color).multiplyScalar(X.intensity),H.distance=X.distance,H.decay=X.decay,X.castShadow){const V=X.shadow,te=i.get(X);te.shadowIntensity=V.intensity,te.shadowBias=V.bias,te.shadowNormalBias=V.normalBias,te.shadowRadius=V.radius,te.shadowMapSize=V.mapSize,te.shadowCameraNear=V.camera.near,te.shadowCameraFar=V.camera.far,r.pointShadow[b]=te,r.pointShadowMap[b]=Z,r.pointShadowMatrix[b]=X.shadow.matrix,I++}r.point[b]=H,b++}else if(X.isHemisphereLight){const H=e.get(X);H.skyColor.copy(X.color).multiplyScalar(ce),H.groundColor.copy(X.groundColor).multiplyScalar(ce),r.hemi[x]=H,x++}}y>0&&(a.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Xe.LTC_FLOAT_1,r.rectAreaLTC2=Xe.LTC_FLOAT_2):(r.rectAreaLTC1=Xe.LTC_HALF_1,r.rectAreaLTC2=Xe.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=v,r.ambient[2]=_;const T=r.hash;(T.directionalLength!==S||T.pointLength!==b||T.spotLength!==R||T.rectAreaLength!==y||T.hemiLength!==x||T.numDirectionalShadows!==F||T.numPointShadows!==I||T.numSpotShadows!==w||T.numSpotMaps!==O||T.numLightProbes!==z)&&(r.directional.length=S,r.spot.length=R,r.rectArea.length=y,r.point.length=b,r.hemi.length=x,r.directionalShadow.length=F,r.directionalShadowMap.length=F,r.pointShadow.length=I,r.pointShadowMap.length=I,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=F,r.pointShadowMatrix.length=I,r.spotLightMatrix.length=w+O-L,r.spotLightMap.length=O,r.numSpotLightShadowsWithMaps=L,r.numLightProbes=z,T.directionalLength=S,T.pointLength=b,T.spotLength=R,T.rectAreaLength=y,T.hemiLength=x,T.numDirectionalShadows=F,T.numPointShadows=I,T.numSpotShadows=w,T.numSpotMaps=O,T.numLightProbes=z,r.version=P2++)}function m(h,g){let v=0,_=0,S=0,b=0,R=0;const y=g.matrixWorldInverse;for(let x=0,F=h.length;x<F;x++){const I=h[x];if(I.isDirectionalLight){const w=r.directional[v];w.direction.setFromMatrixPosition(I.matrixWorld),o.setFromMatrixPosition(I.target.matrixWorld),w.direction.sub(o),w.direction.transformDirection(y),v++}else if(I.isSpotLight){const w=r.spot[S];w.position.setFromMatrixPosition(I.matrixWorld),w.position.applyMatrix4(y),w.direction.setFromMatrixPosition(I.matrixWorld),o.setFromMatrixPosition(I.target.matrixWorld),w.direction.sub(o),w.direction.transformDirection(y),S++}else if(I.isRectAreaLight){const w=r.rectArea[b];w.position.setFromMatrixPosition(I.matrixWorld),w.position.applyMatrix4(y),u.identity(),c.copy(I.matrixWorld),c.premultiply(y),u.extractRotation(c),w.halfWidth.set(I.width*.5,0,0),w.halfHeight.set(0,I.height*.5,0),w.halfWidth.applyMatrix4(u),w.halfHeight.applyMatrix4(u),b++}else if(I.isPointLight){const w=r.point[_];w.position.setFromMatrixPosition(I.matrixWorld),w.position.applyMatrix4(y),_++}else if(I.isHemisphereLight){const w=r.hemi[R];w.direction.setFromMatrixPosition(I.matrixWorld),w.direction.transformDirection(y),R++}}}return{setup:d,setupView:m,state:r}}function Gv(a){const e=new F2(a),i=[],r=[],o=[];function c(_){v.camera=_,i.length=0,r.length=0,o.length=0}function u(_){i.push(_)}function d(_){r.push(_)}function m(_){o.push(_)}function h(){e.setup(i)}function g(_){e.setupView(i,_)}const v={lightsArray:i,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:v,setupLights:h,setupLightsView:g,pushLight:u,pushShadow:d,pushLightProbeGrid:m}}function B2(a){let e=new WeakMap;function i(o,c=0){const u=e.get(o);let d;return u===void 0?(d=new Gv(a),e.set(o,[d])):c>=u.length?(d=new Gv(a),u.push(d)):d=u[c],d}function r(){e=new WeakMap}return{get:i,dispose:r}}const z2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,H2=`uniform sampler2D shadow_pass;
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
}`,G2=[new ne(1,0,0),new ne(-1,0,0),new ne(0,1,0),new ne(0,-1,0),new ne(0,0,1),new ne(0,0,-1)],V2=[new ne(0,-1,0),new ne(0,-1,0),new ne(0,0,1),new ne(0,0,-1),new ne(0,-1,0),new ne(0,-1,0)],Vv=new bn,Nl=new ne,Nh=new ne;function k2(a,e,i){let r=new Fx;const o=new Ft,c=new Ft,u=new vn,d=new ib,m=new ab,h={},g=i.maxTextureSize,v={[$a]:mi,[mi]:$a,[_a]:_a},_=new qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ft},radius:{value:4}},vertexShader:z2,fragmentShader:H2}),S=_.clone();S.defines.HORIZONTAL_PASS=1;const b=new Yi;b.setAttribute("position",new ya(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new Ai(b,_),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tu;let x=this.type;this.render=function(L,z,T){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||L.length===0)return;this.type===Cy&&(rt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Tu);const N=a.getRenderTarget(),q=a.getActiveCubeFace(),X=a.getActiveMipmapLevel(),K=a.state;K.setBlending(Qa),K.buffers.depth.getReversed()===!0?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const ce=x!==this.type;ce&&z.traverse(function(ue){ue.material&&(Array.isArray(ue.material)?ue.material.forEach(Z=>Z.needsUpdate=!0):ue.material.needsUpdate=!0)});for(let ue=0,Z=L.length;ue<Z;ue++){const H=L[ue],V=H.shadow;if(V===void 0){rt("WebGLShadowMap:",H,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;o.copy(V.mapSize);const te=V.getFrameExtents();o.multiply(te),c.copy(V.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(c.x=Math.floor(g/te.x),o.x=c.x*te.x,V.mapSize.x=c.x),o.y>g&&(c.y=Math.floor(g/te.y),o.y=c.y*te.y,V.mapSize.y=c.y));const ge=a.state.buffers.depth.getReversed();if(V.camera._reversedDepth=ge,V.map===null||ce===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Ul){if(H.isPointLight){rt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new Ma(o.x,o.y,{format:br,type:es,minFilter:dn,magFilter:dn,generateMipmaps:!1}),V.map.texture.name=H.name+".shadowMap",V.map.depthTexture=new Uo(o.x,o.y,va),V.map.depthTexture.name=H.name+".shadowMapDepth",V.map.depthTexture.format=ts,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=jn,V.map.depthTexture.magFilter=jn}else H.isPointLight?(V.map=new Yx(o.x),V.map.depthTexture=new ZE(o.x,Ea)):(V.map=new Ma(o.x,o.y),V.map.depthTexture=new Uo(o.x,o.y,Ea)),V.map.depthTexture.name=H.name+".shadowMap",V.map.depthTexture.format=ts,this.type===Tu?(V.map.depthTexture.compareFunction=ge?Gp:Hp,V.map.depthTexture.minFilter=dn,V.map.depthTexture.magFilter=dn):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=jn,V.map.depthTexture.magFilter=jn);V.camera.updateProjectionMatrix()}const Se=V.map.isWebGLCubeRenderTarget?6:1;for(let U=0;U<Se;U++){if(V.map.isWebGLCubeRenderTarget)a.setRenderTarget(V.map,U),a.clear();else{U===0&&(a.setRenderTarget(V.map),a.clear());const J=V.getViewport(U);u.set(c.x*J.x,c.y*J.y,c.x*J.z,c.y*J.w),K.viewport(u)}if(H.isPointLight){const J=V.camera,Ee=V.matrix,Re=H.distance||J.far;Re!==J.far&&(J.far=Re,J.updateProjectionMatrix()),Nl.setFromMatrixPosition(H.matrixWorld),J.position.copy(Nl),Nh.copy(J.position),Nh.add(G2[U]),J.up.copy(V2[U]),J.lookAt(Nh),J.updateMatrixWorld(),Ee.makeTranslation(-Nl.x,-Nl.y,-Nl.z),Vv.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),V._frustum.setFromProjectionMatrix(Vv,J.coordinateSystem,J.reversedDepth)}else V.updateMatrices(H);r=V.getFrustum(),w(z,T,V.camera,H,this.type)}V.isPointLightShadow!==!0&&this.type===Ul&&F(V,T),V.needsUpdate=!1}x=this.type,y.needsUpdate=!1,a.setRenderTarget(N,q,X)};function F(L,z){const T=e.update(R);_.defines.VSM_SAMPLES!==L.blurSamples&&(_.defines.VSM_SAMPLES=L.blurSamples,S.defines.VSM_SAMPLES=L.blurSamples,_.needsUpdate=!0,S.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Ma(o.x,o.y,{format:br,type:es})),_.uniforms.shadow_pass.value=L.map.depthTexture,_.uniforms.resolution.value=L.mapSize,_.uniforms.radius.value=L.radius,a.setRenderTarget(L.mapPass),a.clear(),a.renderBufferDirect(z,null,T,_,R,null),S.uniforms.shadow_pass.value=L.mapPass.texture,S.uniforms.resolution.value=L.mapSize,S.uniforms.radius.value=L.radius,a.setRenderTarget(L.map),a.clear(),a.renderBufferDirect(z,null,T,S,R,null)}function I(L,z,T,N){let q=null;const X=T.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(X!==void 0)q=X;else if(q=T.isPointLight===!0?m:d,a.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const K=q.uuid,ce=z.uuid;let ue=h[K];ue===void 0&&(ue={},h[K]=ue);let Z=ue[ce];Z===void 0&&(Z=q.clone(),ue[ce]=Z,z.addEventListener("dispose",O)),q=Z}if(q.visible=z.visible,q.wireframe=z.wireframe,N===Ul?q.side=z.shadowSide!==null?z.shadowSide:z.side:q.side=z.shadowSide!==null?z.shadowSide:v[z.side],q.alphaMap=z.alphaMap,q.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,q.map=z.map,q.clipShadows=z.clipShadows,q.clippingPlanes=z.clippingPlanes,q.clipIntersection=z.clipIntersection,q.displacementMap=z.displacementMap,q.displacementScale=z.displacementScale,q.displacementBias=z.displacementBias,q.wireframeLinewidth=z.wireframeLinewidth,q.linewidth=z.linewidth,T.isPointLight===!0&&q.isMeshDistanceMaterial===!0){const K=a.properties.get(q);K.light=T}return q}function w(L,z,T,N,q){if(L.visible===!1)return;if(L.layers.test(z.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&q===Ul)&&(!L.frustumCulled||r.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,L.matrixWorld);const ce=e.update(L),ue=L.material;if(Array.isArray(ue)){const Z=ce.groups;for(let H=0,V=Z.length;H<V;H++){const te=Z[H],ge=ue[te.materialIndex];if(ge&&ge.visible){const Se=I(L,ge,N,q);L.onBeforeShadow(a,L,z,T,ce,Se,te),a.renderBufferDirect(T,null,ce,Se,L,te),L.onAfterShadow(a,L,z,T,ce,Se,te)}}}else if(ue.visible){const Z=I(L,ue,N,q);L.onBeforeShadow(a,L,z,T,ce,Z,null),a.renderBufferDirect(T,null,ce,Z,L,null),L.onAfterShadow(a,L,z,T,ce,Z,null)}}const K=L.children;for(let ce=0,ue=K.length;ce<ue;ce++)w(K[ce],z,T,N,q)}function O(L){L.target.removeEventListener("dispose",O);for(const T in h){const N=h[T],q=L.target.uuid;q in N&&(N[q].dispose(),delete N[q])}}}function X2(a,e){function i(){let W=!1;const Le=new vn;let _e=null;const Ie=new vn(0,0,0,0);return{setMask:function(Ge){_e!==Ge&&!W&&(a.colorMask(Ge,Ge,Ge,Ge),_e=Ge)},setLocked:function(Ge){W=Ge},setClear:function(Ge,Te,Qe,Ye,qt){qt===!0&&(Ge*=Ye,Te*=Ye,Qe*=Ye),Le.set(Ge,Te,Qe,Ye),Ie.equals(Le)===!1&&(a.clearColor(Ge,Te,Qe,Ye),Ie.copy(Le))},reset:function(){W=!1,_e=null,Ie.set(-1,0,0,0)}}}function r(){let W=!1,Le=!1,_e=null,Ie=null,Ge=null;return{setReversed:function(Te){if(Le!==Te){const Qe=e.get("EXT_clip_control");Te?Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.ZERO_TO_ONE_EXT):Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.NEGATIVE_ONE_TO_ONE_EXT),Le=Te;const Ye=Ge;Ge=null,this.setClear(Ye)}},getReversed:function(){return Le},setTest:function(Te){Te?ve(a.DEPTH_TEST):We(a.DEPTH_TEST)},setMask:function(Te){_e!==Te&&!W&&(a.depthMask(Te),_e=Te)},setFunc:function(Te){if(Le&&(Te=oE[Te]),Ie!==Te){switch(Te){case kh:a.depthFunc(a.NEVER);break;case Xh:a.depthFunc(a.ALWAYS);break;case Wh:a.depthFunc(a.LESS);break;case Lo:a.depthFunc(a.LEQUAL);break;case Yh:a.depthFunc(a.EQUAL);break;case qh:a.depthFunc(a.GEQUAL);break;case jh:a.depthFunc(a.GREATER);break;case Zh:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}Ie=Te}},setLocked:function(Te){W=Te},setClear:function(Te){Ge!==Te&&(Ge=Te,Le&&(Te=1-Te),a.clearDepth(Te))},reset:function(){W=!1,_e=null,Ie=null,Ge=null,Le=!1}}}function o(){let W=!1,Le=null,_e=null,Ie=null,Ge=null,Te=null,Qe=null,Ye=null,qt=null;return{setTest:function(ut){W||(ut?ve(a.STENCIL_TEST):We(a.STENCIL_TEST))},setMask:function(ut){Le!==ut&&!W&&(a.stencilMask(ut),Le=ut)},setFunc:function(ut,hn,jt){(_e!==ut||Ie!==hn||Ge!==jt)&&(a.stencilFunc(ut,hn,jt),_e=ut,Ie=hn,Ge=jt)},setOp:function(ut,hn,jt){(Te!==ut||Qe!==hn||Ye!==jt)&&(a.stencilOp(ut,hn,jt),Te=ut,Qe=hn,Ye=jt)},setLocked:function(ut){W=ut},setClear:function(ut){qt!==ut&&(a.clearStencil(ut),qt=ut)},reset:function(){W=!1,Le=null,_e=null,Ie=null,Ge=null,Te=null,Qe=null,Ye=null,qt=null}}}const c=new i,u=new r,d=new o,m=new WeakMap,h=new WeakMap;let g={},v={},_={},S=new WeakMap,b=[],R=null,y=!1,x=null,F=null,I=null,w=null,O=null,L=null,z=null,T=new Vt(0,0,0),N=0,q=!1,X=null,K=null,ce=null,ue=null,Z=null;const H=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,te=0;const ge=a.getParameter(a.VERSION);ge.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(ge)[1]),V=te>=1):ge.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(ge)[1]),V=te>=2);let Se=null,U={};const J=a.getParameter(a.SCISSOR_BOX),Ee=a.getParameter(a.VIEWPORT),Re=new vn().fromArray(J),De=new vn().fromArray(Ee);function ie(W,Le,_e,Ie){const Ge=new Uint8Array(4),Te=a.createTexture();a.bindTexture(W,Te),a.texParameteri(W,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(W,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Qe=0;Qe<_e;Qe++)W===a.TEXTURE_3D||W===a.TEXTURE_2D_ARRAY?a.texImage3D(Le,0,a.RGBA,1,1,Ie,0,a.RGBA,a.UNSIGNED_BYTE,Ge):a.texImage2D(Le+Qe,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,Ge);return Te}const Me={};Me[a.TEXTURE_2D]=ie(a.TEXTURE_2D,a.TEXTURE_2D,1),Me[a.TEXTURE_CUBE_MAP]=ie(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[a.TEXTURE_2D_ARRAY]=ie(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),Me[a.TEXTURE_3D]=ie(a.TEXTURE_3D,a.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),d.setClear(0),ve(a.DEPTH_TEST),u.setFunc(Lo),Gt(!1),Jt(k_),ve(a.CULL_FACE),vt(Qa);function ve(W){g[W]!==!0&&(a.enable(W),g[W]=!0)}function We(W){g[W]!==!1&&(a.disable(W),g[W]=!1)}function st(W,Le){return _[W]!==Le?(a.bindFramebuffer(W,Le),_[W]=Le,W===a.DRAW_FRAMEBUFFER&&(_[a.FRAMEBUFFER]=Le),W===a.FRAMEBUFFER&&(_[a.DRAW_FRAMEBUFFER]=Le),!0):!1}function $e(W,Le){let _e=b,Ie=!1;if(W){_e=S.get(Le),_e===void 0&&(_e=[],S.set(Le,_e));const Ge=W.textures;if(_e.length!==Ge.length||_e[0]!==a.COLOR_ATTACHMENT0){for(let Te=0,Qe=Ge.length;Te<Qe;Te++)_e[Te]=a.COLOR_ATTACHMENT0+Te;_e.length=Ge.length,Ie=!0}}else _e[0]!==a.BACK&&(_e[0]=a.BACK,Ie=!0);Ie&&a.drawBuffers(_e)}function Yt(W){return R!==W?(a.useProgram(W),R=W,!0):!1}const ht={[xr]:a.FUNC_ADD,[Dy]:a.FUNC_SUBTRACT,[Ly]:a.FUNC_REVERSE_SUBTRACT};ht[Ny]=a.MIN,ht[Uy]=a.MAX;const St={[Oy]:a.ZERO,[Py]:a.ONE,[Iy]:a.SRC_COLOR,[Gh]:a.SRC_ALPHA,[Vy]:a.SRC_ALPHA_SATURATE,[Hy]:a.DST_COLOR,[By]:a.DST_ALPHA,[Fy]:a.ONE_MINUS_SRC_COLOR,[Vh]:a.ONE_MINUS_SRC_ALPHA,[Gy]:a.ONE_MINUS_DST_COLOR,[zy]:a.ONE_MINUS_DST_ALPHA,[ky]:a.CONSTANT_COLOR,[Xy]:a.ONE_MINUS_CONSTANT_COLOR,[Wy]:a.CONSTANT_ALPHA,[Yy]:a.ONE_MINUS_CONSTANT_ALPHA};function vt(W,Le,_e,Ie,Ge,Te,Qe,Ye,qt,ut){if(W===Qa){y===!0&&(We(a.BLEND),y=!1);return}if(y===!1&&(ve(a.BLEND),y=!0),W!==wy){if(W!==x||ut!==q){if((F!==xr||O!==xr)&&(a.blendEquation(a.FUNC_ADD),F=xr,O=xr),ut)switch(W){case Ao:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Hh:a.blendFunc(a.ONE,a.ONE);break;case X_:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case W_:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:Nt("WebGLState: Invalid blending: ",W);break}else switch(W){case Ao:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Hh:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case X_:Nt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case W_:Nt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Nt("WebGLState: Invalid blending: ",W);break}I=null,w=null,L=null,z=null,T.set(0,0,0),N=0,x=W,q=ut}return}Ge=Ge||Le,Te=Te||_e,Qe=Qe||Ie,(Le!==F||Ge!==O)&&(a.blendEquationSeparate(ht[Le],ht[Ge]),F=Le,O=Ge),(_e!==I||Ie!==w||Te!==L||Qe!==z)&&(a.blendFuncSeparate(St[_e],St[Ie],St[Te],St[Qe]),I=_e,w=Ie,L=Te,z=Qe),(Ye.equals(T)===!1||qt!==N)&&(a.blendColor(Ye.r,Ye.g,Ye.b,qt),T.copy(Ye),N=qt),x=W,q=!1}function et(W,Le){W.side===_a?We(a.CULL_FACE):ve(a.CULL_FACE);let _e=W.side===mi;Le&&(_e=!_e),Gt(_e),W.blending===Ao&&W.transparent===!1?vt(Qa):vt(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),u.setFunc(W.depthFunc),u.setTest(W.depthTest),u.setMask(W.depthWrite),c.setMask(W.colorWrite);const Ie=W.stencilWrite;d.setTest(Ie),Ie&&(d.setMask(W.stencilWriteMask),d.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),d.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),en(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?ve(a.SAMPLE_ALPHA_TO_COVERAGE):We(a.SAMPLE_ALPHA_TO_COVERAGE)}function Gt(W){X!==W&&(W?a.frontFace(a.CW):a.frontFace(a.CCW),X=W)}function Jt(W){W!==Ay?(ve(a.CULL_FACE),W!==K&&(W===k_?a.cullFace(a.BACK):W===Ry?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):We(a.CULL_FACE),K=W}function $t(W){W!==ce&&(V&&a.lineWidth(W),ce=W)}function en(W,Le,_e){W?(ve(a.POLYGON_OFFSET_FILL),(ue!==Le||Z!==_e)&&(ue=Le,Z=_e,u.getReversed()&&(Le=-Le),a.polygonOffset(Le,_e))):We(a.POLYGON_OFFSET_FILL)}function Bt(W){W?ve(a.SCISSOR_TEST):We(a.SCISSOR_TEST)}function an(W){W===void 0&&(W=a.TEXTURE0+H-1),Se!==W&&(a.activeTexture(W),Se=W)}function Q(W,Le,_e){_e===void 0&&(Se===null?_e=a.TEXTURE0+H-1:_e=Se);let Ie=U[_e];Ie===void 0&&(Ie={type:void 0,texture:void 0},U[_e]=Ie),(Ie.type!==W||Ie.texture!==Le)&&(Se!==_e&&(a.activeTexture(_e),Se=_e),a.bindTexture(W,Le||Me[W]),Ie.type=W,Ie.texture=Le)}function Ut(){const W=U[Se];W!==void 0&&W.type!==void 0&&(a.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function Rt(){try{a.compressedTexImage2D(...arguments)}catch(W){Nt("WebGLState:",W)}}function P(){try{a.compressedTexImage3D(...arguments)}catch(W){Nt("WebGLState:",W)}}function E(){try{a.texSubImage2D(...arguments)}catch(W){Nt("WebGLState:",W)}}function ee(){try{a.texSubImage3D(...arguments)}catch(W){Nt("WebGLState:",W)}}function ae(){try{a.compressedTexSubImage2D(...arguments)}catch(W){Nt("WebGLState:",W)}}function me(){try{a.compressedTexSubImage3D(...arguments)}catch(W){Nt("WebGLState:",W)}}function Ue(){try{a.texStorage2D(...arguments)}catch(W){Nt("WebGLState:",W)}}function Be(){try{a.texStorage3D(...arguments)}catch(W){Nt("WebGLState:",W)}}function fe(){try{a.texImage2D(...arguments)}catch(W){Nt("WebGLState:",W)}}function pe(){try{a.texImage3D(...arguments)}catch(W){Nt("WebGLState:",W)}}function we(W){return v[W]!==void 0?v[W]:a.getParameter(W)}function ze(W,Le){v[W]!==Le&&(a.pixelStorei(W,Le),v[W]=Le)}function Oe(W){Re.equals(W)===!1&&(a.scissor(W.x,W.y,W.z,W.w),Re.copy(W))}function Fe(W){De.equals(W)===!1&&(a.viewport(W.x,W.y,W.z,W.w),De.copy(W))}function je(W,Le){let _e=h.get(Le);_e===void 0&&(_e=new WeakMap,h.set(Le,_e));let Ie=_e.get(W);Ie===void 0&&(Ie=a.getUniformBlockIndex(Le,W.name),_e.set(W,Ie))}function Ke(W,Le){const Ie=h.get(Le).get(W);m.get(Le)!==Ie&&(a.uniformBlockBinding(Le,Ie,W.__bindingPointIndex),m.set(Le,Ie))}function it(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),u.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),a.pixelStorei(a.PACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,!1),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,a.BROWSER_DEFAULT_WEBGL),a.pixelStorei(a.PACK_ROW_LENGTH,0),a.pixelStorei(a.PACK_SKIP_PIXELS,0),a.pixelStorei(a.PACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_ROW_LENGTH,0),a.pixelStorei(a.UNPACK_IMAGE_HEIGHT,0),a.pixelStorei(a.UNPACK_SKIP_PIXELS,0),a.pixelStorei(a.UNPACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_SKIP_IMAGES,0),g={},v={},Se=null,U={},_={},S=new WeakMap,b=[],R=null,y=!1,x=null,F=null,I=null,w=null,O=null,L=null,z=null,T=new Vt(0,0,0),N=0,q=!1,X=null,K=null,ce=null,ue=null,Z=null,Re.set(0,0,a.canvas.width,a.canvas.height),De.set(0,0,a.canvas.width,a.canvas.height),c.reset(),u.reset(),d.reset()}return{buffers:{color:c,depth:u,stencil:d},enable:ve,disable:We,bindFramebuffer:st,drawBuffers:$e,useProgram:Yt,setBlending:vt,setMaterial:et,setFlipSided:Gt,setCullFace:Jt,setLineWidth:$t,setPolygonOffset:en,setScissorTest:Bt,activeTexture:an,bindTexture:Q,unbindTexture:Ut,compressedTexImage2D:Rt,compressedTexImage3D:P,texImage2D:fe,texImage3D:pe,pixelStorei:ze,getParameter:we,updateUBOMapping:je,uniformBlockBinding:Ke,texStorage2D:Ue,texStorage3D:Be,texSubImage2D:E,texSubImage3D:ee,compressedTexSubImage2D:ae,compressedTexSubImage3D:me,scissor:Oe,viewport:Fe,reset:it}}function W2(a,e,i,r,o,c,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Ft,g=new WeakMap,v=new Set;let _;const S=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function R(P,E){return b?new OffscreenCanvas(P,E):Fu("canvas")}function y(P,E,ee){let ae=1;const me=Rt(P);if((me.width>ee||me.height>ee)&&(ae=ee/Math.max(me.width,me.height)),ae<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const Ue=Math.floor(ae*me.width),Be=Math.floor(ae*me.height);_===void 0&&(_=R(Ue,Be));const fe=E?R(Ue,Be):_;return fe.width=Ue,fe.height=Be,fe.getContext("2d").drawImage(P,0,0,Ue,Be),rt("WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+Ue+"x"+Be+")."),fe}else return"data"in P&&rt("WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),P;return P}function x(P){return P.generateMipmaps}function F(P){a.generateMipmap(P)}function I(P){return P.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?a.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function w(P,E,ee,ae,me,Ue=!1){if(P!==null){if(a[P]!==void 0)return a[P];rt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Be;ae&&(Be=e.get("EXT_texture_norm16"),Be||rt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let fe=E;if(E===a.RED&&(ee===a.FLOAT&&(fe=a.R32F),ee===a.HALF_FLOAT&&(fe=a.R16F),ee===a.UNSIGNED_BYTE&&(fe=a.R8),ee===a.UNSIGNED_SHORT&&Be&&(fe=Be.R16_EXT),ee===a.SHORT&&Be&&(fe=Be.R16_SNORM_EXT)),E===a.RED_INTEGER&&(ee===a.UNSIGNED_BYTE&&(fe=a.R8UI),ee===a.UNSIGNED_SHORT&&(fe=a.R16UI),ee===a.UNSIGNED_INT&&(fe=a.R32UI),ee===a.BYTE&&(fe=a.R8I),ee===a.SHORT&&(fe=a.R16I),ee===a.INT&&(fe=a.R32I)),E===a.RG&&(ee===a.FLOAT&&(fe=a.RG32F),ee===a.HALF_FLOAT&&(fe=a.RG16F),ee===a.UNSIGNED_BYTE&&(fe=a.RG8),ee===a.UNSIGNED_SHORT&&Be&&(fe=Be.RG16_EXT),ee===a.SHORT&&Be&&(fe=Be.RG16_SNORM_EXT)),E===a.RG_INTEGER&&(ee===a.UNSIGNED_BYTE&&(fe=a.RG8UI),ee===a.UNSIGNED_SHORT&&(fe=a.RG16UI),ee===a.UNSIGNED_INT&&(fe=a.RG32UI),ee===a.BYTE&&(fe=a.RG8I),ee===a.SHORT&&(fe=a.RG16I),ee===a.INT&&(fe=a.RG32I)),E===a.RGB_INTEGER&&(ee===a.UNSIGNED_BYTE&&(fe=a.RGB8UI),ee===a.UNSIGNED_SHORT&&(fe=a.RGB16UI),ee===a.UNSIGNED_INT&&(fe=a.RGB32UI),ee===a.BYTE&&(fe=a.RGB8I),ee===a.SHORT&&(fe=a.RGB16I),ee===a.INT&&(fe=a.RGB32I)),E===a.RGBA_INTEGER&&(ee===a.UNSIGNED_BYTE&&(fe=a.RGBA8UI),ee===a.UNSIGNED_SHORT&&(fe=a.RGBA16UI),ee===a.UNSIGNED_INT&&(fe=a.RGBA32UI),ee===a.BYTE&&(fe=a.RGBA8I),ee===a.SHORT&&(fe=a.RGBA16I),ee===a.INT&&(fe=a.RGBA32I)),E===a.RGB&&(ee===a.UNSIGNED_SHORT&&Be&&(fe=Be.RGB16_EXT),ee===a.SHORT&&Be&&(fe=Be.RGB16_SNORM_EXT),ee===a.UNSIGNED_INT_5_9_9_9_REV&&(fe=a.RGB9_E5),ee===a.UNSIGNED_INT_10F_11F_11F_REV&&(fe=a.R11F_G11F_B10F)),E===a.RGBA){const pe=Ue?Pu:wt.getTransfer(me);ee===a.FLOAT&&(fe=a.RGBA32F),ee===a.HALF_FLOAT&&(fe=a.RGBA16F),ee===a.UNSIGNED_BYTE&&(fe=pe===Wt?a.SRGB8_ALPHA8:a.RGBA8),ee===a.UNSIGNED_SHORT&&Be&&(fe=Be.RGBA16_EXT),ee===a.SHORT&&Be&&(fe=Be.RGBA16_SNORM_EXT),ee===a.UNSIGNED_SHORT_4_4_4_4&&(fe=a.RGBA4),ee===a.UNSIGNED_SHORT_5_5_5_1&&(fe=a.RGB5_A1)}return(fe===a.R16F||fe===a.R32F||fe===a.RG16F||fe===a.RG32F||fe===a.RGBA16F||fe===a.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function O(P,E){let ee;return P?E===null||E===Ea||E===Vl?ee=a.DEPTH24_STENCIL8:E===va?ee=a.DEPTH32F_STENCIL8:E===Gl&&(ee=a.DEPTH24_STENCIL8,rt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ea||E===Vl?ee=a.DEPTH_COMPONENT24:E===va?ee=a.DEPTH_COMPONENT32F:E===Gl&&(ee=a.DEPTH_COMPONENT16),ee}function L(P,E){return x(P)===!0||P.isFramebufferTexture&&P.minFilter!==jn&&P.minFilter!==dn?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function z(P){const E=P.target;E.removeEventListener("dispose",z),N(E),E.isVideoTexture&&g.delete(E),E.isHTMLTexture&&v.delete(E)}function T(P){const E=P.target;E.removeEventListener("dispose",T),X(E)}function N(P){const E=r.get(P);if(E.__webglInit===void 0)return;const ee=P.source,ae=S.get(ee);if(ae){const me=ae[E.__cacheKey];me.usedTimes--,me.usedTimes===0&&q(P),Object.keys(ae).length===0&&S.delete(ee)}r.remove(P)}function q(P){const E=r.get(P);a.deleteTexture(E.__webglTexture);const ee=P.source,ae=S.get(ee);delete ae[E.__cacheKey],u.memory.textures--}function X(P){const E=r.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),r.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(E.__webglFramebuffer[ae]))for(let me=0;me<E.__webglFramebuffer[ae].length;me++)a.deleteFramebuffer(E.__webglFramebuffer[ae][me]);else a.deleteFramebuffer(E.__webglFramebuffer[ae]);E.__webglDepthbuffer&&a.deleteRenderbuffer(E.__webglDepthbuffer[ae])}else{if(Array.isArray(E.__webglFramebuffer))for(let ae=0;ae<E.__webglFramebuffer.length;ae++)a.deleteFramebuffer(E.__webglFramebuffer[ae]);else a.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&a.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&a.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ae=0;ae<E.__webglColorRenderbuffer.length;ae++)E.__webglColorRenderbuffer[ae]&&a.deleteRenderbuffer(E.__webglColorRenderbuffer[ae]);E.__webglDepthRenderbuffer&&a.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const ee=P.textures;for(let ae=0,me=ee.length;ae<me;ae++){const Ue=r.get(ee[ae]);Ue.__webglTexture&&(a.deleteTexture(Ue.__webglTexture),u.memory.textures--),r.remove(ee[ae])}r.remove(P)}let K=0;function ce(){K=0}function ue(){return K}function Z(P){K=P}function H(){const P=K;return P>=o.maxTextures&&rt("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+o.maxTextures),K+=1,P}function V(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function te(P,E){const ee=r.get(P);if(P.isVideoTexture&&Q(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&ee.__version!==P.version){const ae=P.image;if(ae===null)rt("WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)rt("WebGLRenderer: Texture marked for update but image is incomplete");else{We(ee,P,E);return}}else P.isExternalTexture&&(ee.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(a.TEXTURE_2D,ee.__webglTexture,a.TEXTURE0+E)}function ge(P,E){const ee=r.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&ee.__version!==P.version){We(ee,P,E);return}else P.isExternalTexture&&(ee.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(a.TEXTURE_2D_ARRAY,ee.__webglTexture,a.TEXTURE0+E)}function Se(P,E){const ee=r.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&ee.__version!==P.version){We(ee,P,E);return}i.bindTexture(a.TEXTURE_3D,ee.__webglTexture,a.TEXTURE0+E)}function U(P,E){const ee=r.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&ee.__version!==P.version){st(ee,P,E);return}i.bindTexture(a.TEXTURE_CUBE_MAP,ee.__webglTexture,a.TEXTURE0+E)}const J={[Kh]:a.REPEAT,[sa]:a.CLAMP_TO_EDGE,[Qh]:a.MIRRORED_REPEAT},Ee={[jn]:a.NEAREST,[Zy]:a.NEAREST_MIPMAP_NEAREST,[nu]:a.NEAREST_MIPMAP_LINEAR,[dn]:a.LINEAR,[th]:a.LINEAR_MIPMAP_NEAREST,[Hs]:a.LINEAR_MIPMAP_LINEAR},Re={[Jy]:a.NEVER,[iE]:a.ALWAYS,[$y]:a.LESS,[Hp]:a.LEQUAL,[eE]:a.EQUAL,[Gp]:a.GEQUAL,[tE]:a.GREATER,[nE]:a.NOTEQUAL};function De(P,E){if(E.type===va&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===dn||E.magFilter===th||E.magFilter===nu||E.magFilter===Hs||E.minFilter===dn||E.minFilter===th||E.minFilter===nu||E.minFilter===Hs)&&rt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(P,a.TEXTURE_WRAP_S,J[E.wrapS]),a.texParameteri(P,a.TEXTURE_WRAP_T,J[E.wrapT]),(P===a.TEXTURE_3D||P===a.TEXTURE_2D_ARRAY)&&a.texParameteri(P,a.TEXTURE_WRAP_R,J[E.wrapR]),a.texParameteri(P,a.TEXTURE_MAG_FILTER,Ee[E.magFilter]),a.texParameteri(P,a.TEXTURE_MIN_FILTER,Ee[E.minFilter]),E.compareFunction&&(a.texParameteri(P,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(P,a.TEXTURE_COMPARE_FUNC,Re[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===jn||E.minFilter!==nu&&E.minFilter!==Hs||E.type===va&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const ee=e.get("EXT_texture_filter_anisotropic");a.texParameterf(P,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,o.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function ie(P,E){let ee=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",z));const ae=E.source;let me=S.get(ae);me===void 0&&(me={},S.set(ae,me));const Ue=V(E);if(Ue!==P.__cacheKey){me[Ue]===void 0&&(me[Ue]={texture:a.createTexture(),usedTimes:0},u.memory.textures++,ee=!0),me[Ue].usedTimes++;const Be=me[P.__cacheKey];Be!==void 0&&(me[P.__cacheKey].usedTimes--,Be.usedTimes===0&&q(E)),P.__cacheKey=Ue,P.__webglTexture=me[Ue].texture}return ee}function Me(P,E,ee){return Math.floor(Math.floor(P/ee)/E)}function ve(P,E,ee,ae){const Ue=P.updateRanges;if(Ue.length===0)i.texSubImage2D(a.TEXTURE_2D,0,0,0,E.width,E.height,ee,ae,E.data);else{Ue.sort((ze,Oe)=>ze.start-Oe.start);let Be=0;for(let ze=1;ze<Ue.length;ze++){const Oe=Ue[Be],Fe=Ue[ze],je=Oe.start+Oe.count,Ke=Me(Fe.start,E.width,4),it=Me(Oe.start,E.width,4);Fe.start<=je+1&&Ke===it&&Me(Fe.start+Fe.count-1,E.width,4)===Ke?Oe.count=Math.max(Oe.count,Fe.start+Fe.count-Oe.start):(++Be,Ue[Be]=Fe)}Ue.length=Be+1;const fe=i.getParameter(a.UNPACK_ROW_LENGTH),pe=i.getParameter(a.UNPACK_SKIP_PIXELS),we=i.getParameter(a.UNPACK_SKIP_ROWS);i.pixelStorei(a.UNPACK_ROW_LENGTH,E.width);for(let ze=0,Oe=Ue.length;ze<Oe;ze++){const Fe=Ue[ze],je=Math.floor(Fe.start/4),Ke=Math.ceil(Fe.count/4),it=je%E.width,W=Math.floor(je/E.width),Le=Ke,_e=1;i.pixelStorei(a.UNPACK_SKIP_PIXELS,it),i.pixelStorei(a.UNPACK_SKIP_ROWS,W),i.texSubImage2D(a.TEXTURE_2D,0,it,W,Le,_e,ee,ae,E.data)}P.clearUpdateRanges(),i.pixelStorei(a.UNPACK_ROW_LENGTH,fe),i.pixelStorei(a.UNPACK_SKIP_PIXELS,pe),i.pixelStorei(a.UNPACK_SKIP_ROWS,we)}}function We(P,E,ee){let ae=a.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ae=a.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ae=a.TEXTURE_3D);const me=ie(P,E),Ue=E.source;i.bindTexture(ae,P.__webglTexture,a.TEXTURE0+ee);const Be=r.get(Ue);if(Ue.version!==Be.__version||me===!0){if(i.activeTexture(a.TEXTURE0+ee),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const _e=wt.getPrimaries(wt.workingColorSpace),Ie=E.colorSpace===zs?null:wt.getPrimaries(E.colorSpace),Ge=E.colorSpace===zs||_e===Ie?a.NONE:a.BROWSER_DEFAULT_WEBGL;i.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge)}i.pixelStorei(a.UNPACK_ALIGNMENT,E.unpackAlignment);let pe=y(E.image,!1,o.maxTextureSize);pe=Ut(E,pe);const we=c.convert(E.format,E.colorSpace),ze=c.convert(E.type);let Oe=w(E.internalFormat,we,ze,E.normalized,E.colorSpace,E.isVideoTexture);De(ae,E);let Fe;const je=E.mipmaps,Ke=E.isVideoTexture!==!0,it=Be.__version===void 0||me===!0,W=Ue.dataReady,Le=L(E,pe);if(E.isDepthTexture)Oe=O(E.format===yr,E.type),it&&(Ke?i.texStorage2D(a.TEXTURE_2D,1,Oe,pe.width,pe.height):i.texImage2D(a.TEXTURE_2D,0,Oe,pe.width,pe.height,0,we,ze,null));else if(E.isDataTexture)if(je.length>0){Ke&&it&&i.texStorage2D(a.TEXTURE_2D,Le,Oe,je[0].width,je[0].height);for(let _e=0,Ie=je.length;_e<Ie;_e++)Fe=je[_e],Ke?W&&i.texSubImage2D(a.TEXTURE_2D,_e,0,0,Fe.width,Fe.height,we,ze,Fe.data):i.texImage2D(a.TEXTURE_2D,_e,Oe,Fe.width,Fe.height,0,we,ze,Fe.data);E.generateMipmaps=!1}else Ke?(it&&i.texStorage2D(a.TEXTURE_2D,Le,Oe,pe.width,pe.height),W&&ve(E,pe,we,ze)):i.texImage2D(a.TEXTURE_2D,0,Oe,pe.width,pe.height,0,we,ze,pe.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ke&&it&&i.texStorage3D(a.TEXTURE_2D_ARRAY,Le,Oe,je[0].width,je[0].height,pe.depth);for(let _e=0,Ie=je.length;_e<Ie;_e++)if(Fe=je[_e],E.format!==ra)if(we!==null)if(Ke){if(W)if(E.layerUpdates.size>0){const Ge=xv(Fe.width,Fe.height,E.format,E.type);for(const Te of E.layerUpdates){const Qe=Fe.data.subarray(Te*Ge/Fe.data.BYTES_PER_ELEMENT,(Te+1)*Ge/Fe.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,_e,0,0,Te,Fe.width,Fe.height,1,we,Qe)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,_e,0,0,0,Fe.width,Fe.height,pe.depth,we,Fe.data)}else i.compressedTexImage3D(a.TEXTURE_2D_ARRAY,_e,Oe,Fe.width,Fe.height,pe.depth,0,Fe.data,0,0);else rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ke?W&&i.texSubImage3D(a.TEXTURE_2D_ARRAY,_e,0,0,0,Fe.width,Fe.height,pe.depth,we,ze,Fe.data):i.texImage3D(a.TEXTURE_2D_ARRAY,_e,Oe,Fe.width,Fe.height,pe.depth,0,we,ze,Fe.data)}else{Ke&&it&&i.texStorage2D(a.TEXTURE_2D,Le,Oe,je[0].width,je[0].height);for(let _e=0,Ie=je.length;_e<Ie;_e++)Fe=je[_e],E.format!==ra?we!==null?Ke?W&&i.compressedTexSubImage2D(a.TEXTURE_2D,_e,0,0,Fe.width,Fe.height,we,Fe.data):i.compressedTexImage2D(a.TEXTURE_2D,_e,Oe,Fe.width,Fe.height,0,Fe.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?W&&i.texSubImage2D(a.TEXTURE_2D,_e,0,0,Fe.width,Fe.height,we,ze,Fe.data):i.texImage2D(a.TEXTURE_2D,_e,Oe,Fe.width,Fe.height,0,we,ze,Fe.data)}else if(E.isDataArrayTexture)if(Ke){if(it&&i.texStorage3D(a.TEXTURE_2D_ARRAY,Le,Oe,pe.width,pe.height,pe.depth),W)if(E.layerUpdates.size>0){const _e=xv(pe.width,pe.height,E.format,E.type);for(const Ie of E.layerUpdates){const Ge=pe.data.subarray(Ie*_e/pe.data.BYTES_PER_ELEMENT,(Ie+1)*_e/pe.data.BYTES_PER_ELEMENT);i.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,Ie,pe.width,pe.height,1,we,ze,Ge)}E.clearLayerUpdates()}else i.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,we,ze,pe.data)}else i.texImage3D(a.TEXTURE_2D_ARRAY,0,Oe,pe.width,pe.height,pe.depth,0,we,ze,pe.data);else if(E.isData3DTexture)Ke?(it&&i.texStorage3D(a.TEXTURE_3D,Le,Oe,pe.width,pe.height,pe.depth),W&&i.texSubImage3D(a.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,we,ze,pe.data)):i.texImage3D(a.TEXTURE_3D,0,Oe,pe.width,pe.height,pe.depth,0,we,ze,pe.data);else if(E.isFramebufferTexture){if(it)if(Ke)i.texStorage2D(a.TEXTURE_2D,Le,Oe,pe.width,pe.height);else{let _e=pe.width,Ie=pe.height;for(let Ge=0;Ge<Le;Ge++)i.texImage2D(a.TEXTURE_2D,Ge,Oe,_e,Ie,0,we,ze,null),_e>>=1,Ie>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in a){const _e=a.canvas;if(_e.hasAttribute("layoutsubtree")||_e.setAttribute("layoutsubtree","true"),pe.parentNode!==_e){_e.appendChild(pe),v.add(E),_e.onpaint=Ie=>{const Ge=Ie.changedElements;for(const Te of v)Ge.includes(Te.image)&&(Te.needsUpdate=!0)},_e.requestPaint();return}if(a.texElementImage2D.length===3)a.texElementImage2D(a.TEXTURE_2D,a.RGBA8,pe);else{const Ge=a.RGBA,Te=a.RGBA,Qe=a.UNSIGNED_BYTE;a.texElementImage2D(a.TEXTURE_2D,0,Ge,Te,Qe,pe)}a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE)}}else if(je.length>0){if(Ke&&it){const _e=Rt(je[0]);i.texStorage2D(a.TEXTURE_2D,Le,Oe,_e.width,_e.height)}for(let _e=0,Ie=je.length;_e<Ie;_e++)Fe=je[_e],Ke?W&&i.texSubImage2D(a.TEXTURE_2D,_e,0,0,we,ze,Fe):i.texImage2D(a.TEXTURE_2D,_e,Oe,we,ze,Fe);E.generateMipmaps=!1}else if(Ke){if(it){const _e=Rt(pe);i.texStorage2D(a.TEXTURE_2D,Le,Oe,_e.width,_e.height)}W&&i.texSubImage2D(a.TEXTURE_2D,0,0,0,we,ze,pe)}else i.texImage2D(a.TEXTURE_2D,0,Oe,we,ze,pe);x(E)&&F(ae),Be.__version=Ue.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function st(P,E,ee){if(E.image.length!==6)return;const ae=ie(P,E),me=E.source;i.bindTexture(a.TEXTURE_CUBE_MAP,P.__webglTexture,a.TEXTURE0+ee);const Ue=r.get(me);if(me.version!==Ue.__version||ae===!0){i.activeTexture(a.TEXTURE0+ee);const Be=wt.getPrimaries(wt.workingColorSpace),fe=E.colorSpace===zs?null:wt.getPrimaries(E.colorSpace),pe=E.colorSpace===zs||Be===fe?a.NONE:a.BROWSER_DEFAULT_WEBGL;i.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(a.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const we=E.isCompressedTexture||E.image[0].isCompressedTexture,ze=E.image[0]&&E.image[0].isDataTexture,Oe=[];for(let Te=0;Te<6;Te++)!we&&!ze?Oe[Te]=y(E.image[Te],!0,o.maxCubemapSize):Oe[Te]=ze?E.image[Te].image:E.image[Te],Oe[Te]=Ut(E,Oe[Te]);const Fe=Oe[0],je=c.convert(E.format,E.colorSpace),Ke=c.convert(E.type),it=w(E.internalFormat,je,Ke,E.normalized,E.colorSpace),W=E.isVideoTexture!==!0,Le=Ue.__version===void 0||ae===!0,_e=me.dataReady;let Ie=L(E,Fe);De(a.TEXTURE_CUBE_MAP,E);let Ge;if(we){W&&Le&&i.texStorage2D(a.TEXTURE_CUBE_MAP,Ie,it,Fe.width,Fe.height);for(let Te=0;Te<6;Te++){Ge=Oe[Te].mipmaps;for(let Qe=0;Qe<Ge.length;Qe++){const Ye=Ge[Qe];E.format!==ra?je!==null?W?_e&&i.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Qe,0,0,Ye.width,Ye.height,je,Ye.data):i.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Qe,it,Ye.width,Ye.height,0,Ye.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?_e&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Qe,0,0,Ye.width,Ye.height,je,Ke,Ye.data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Qe,it,Ye.width,Ye.height,0,je,Ke,Ye.data)}}}else{if(Ge=E.mipmaps,W&&Le){Ge.length>0&&Ie++;const Te=Rt(Oe[0]);i.texStorage2D(a.TEXTURE_CUBE_MAP,Ie,it,Te.width,Te.height)}for(let Te=0;Te<6;Te++)if(ze){W?_e&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,Oe[Te].width,Oe[Te].height,je,Ke,Oe[Te].data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,it,Oe[Te].width,Oe[Te].height,0,je,Ke,Oe[Te].data);for(let Qe=0;Qe<Ge.length;Qe++){const qt=Ge[Qe].image[Te].image;W?_e&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Qe+1,0,0,qt.width,qt.height,je,Ke,qt.data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Qe+1,it,qt.width,qt.height,0,je,Ke,qt.data)}}else{W?_e&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,je,Ke,Oe[Te]):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,it,je,Ke,Oe[Te]);for(let Qe=0;Qe<Ge.length;Qe++){const Ye=Ge[Qe];W?_e&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Qe+1,0,0,je,Ke,Ye.image[Te]):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Qe+1,it,je,Ke,Ye.image[Te])}}}x(E)&&F(a.TEXTURE_CUBE_MAP),Ue.__version=me.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function $e(P,E,ee,ae,me,Ue){const Be=c.convert(ee.format,ee.colorSpace),fe=c.convert(ee.type),pe=w(ee.internalFormat,Be,fe,ee.normalized,ee.colorSpace),we=r.get(E),ze=r.get(ee);if(ze.__renderTarget=E,!we.__hasExternalTextures){const Oe=Math.max(1,E.width>>Ue),Fe=Math.max(1,E.height>>Ue);me===a.TEXTURE_3D||me===a.TEXTURE_2D_ARRAY?i.texImage3D(me,Ue,pe,Oe,Fe,E.depth,0,Be,fe,null):i.texImage2D(me,Ue,pe,Oe,Fe,0,Be,fe,null)}i.bindFramebuffer(a.FRAMEBUFFER,P),an(E)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,ae,me,ze.__webglTexture,0,Bt(E)):(me===a.TEXTURE_2D||me>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,ae,me,ze.__webglTexture,Ue),i.bindFramebuffer(a.FRAMEBUFFER,null)}function Yt(P,E,ee){if(a.bindRenderbuffer(a.RENDERBUFFER,P),E.depthBuffer){const ae=E.depthTexture,me=ae&&ae.isDepthTexture?ae.type:null,Ue=O(E.stencilBuffer,me),Be=E.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;an(E)?d.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Bt(E),Ue,E.width,E.height):ee?a.renderbufferStorageMultisample(a.RENDERBUFFER,Bt(E),Ue,E.width,E.height):a.renderbufferStorage(a.RENDERBUFFER,Ue,E.width,E.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,Be,a.RENDERBUFFER,P)}else{const ae=E.textures;for(let me=0;me<ae.length;me++){const Ue=ae[me],Be=c.convert(Ue.format,Ue.colorSpace),fe=c.convert(Ue.type),pe=w(Ue.internalFormat,Be,fe,Ue.normalized,Ue.colorSpace);an(E)?d.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Bt(E),pe,E.width,E.height):ee?a.renderbufferStorageMultisample(a.RENDERBUFFER,Bt(E),pe,E.width,E.height):a.renderbufferStorage(a.RENDERBUFFER,pe,E.width,E.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function ht(P,E,ee){const ae=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(a.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const me=r.get(E.depthTexture);if(me.__renderTarget=E,(!me.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ae){if(me.__webglInit===void 0&&(me.__webglInit=!0,E.depthTexture.addEventListener("dispose",z)),me.__webglTexture===void 0){me.__webglTexture=a.createTexture(),i.bindTexture(a.TEXTURE_CUBE_MAP,me.__webglTexture),De(a.TEXTURE_CUBE_MAP,E.depthTexture);const we=c.convert(E.depthTexture.format),ze=c.convert(E.depthTexture.type);let Oe;E.depthTexture.format===ts?Oe=a.DEPTH_COMPONENT24:E.depthTexture.format===yr&&(Oe=a.DEPTH24_STENCIL8);for(let Fe=0;Fe<6;Fe++)a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,Oe,E.width,E.height,0,we,ze,null)}}else te(E.depthTexture,0);const Ue=me.__webglTexture,Be=Bt(E),fe=ae?a.TEXTURE_CUBE_MAP_POSITIVE_X+ee:a.TEXTURE_2D,pe=E.depthTexture.format===yr?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;if(E.depthTexture.format===ts)an(E)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,pe,fe,Ue,0,Be):a.framebufferTexture2D(a.FRAMEBUFFER,pe,fe,Ue,0);else if(E.depthTexture.format===yr)an(E)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,pe,fe,Ue,0,Be):a.framebufferTexture2D(a.FRAMEBUFFER,pe,fe,Ue,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function St(P){const E=r.get(P),ee=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){const ae=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ae){const me=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ae.removeEventListener("dispose",me)};ae.addEventListener("dispose",me),E.__depthDisposeCallback=me}E.__boundDepthTexture=ae}if(P.depthTexture&&!E.__autoAllocateDepthBuffer)if(ee)for(let ae=0;ae<6;ae++)ht(E.__webglFramebuffer[ae],P,ae);else{const ae=P.texture.mipmaps;ae&&ae.length>0?ht(E.__webglFramebuffer[0],P,0):ht(E.__webglFramebuffer,P,0)}else if(ee){E.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)if(i.bindFramebuffer(a.FRAMEBUFFER,E.__webglFramebuffer[ae]),E.__webglDepthbuffer[ae]===void 0)E.__webglDepthbuffer[ae]=a.createRenderbuffer(),Yt(E.__webglDepthbuffer[ae],P,!1);else{const me=P.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Ue=E.__webglDepthbuffer[ae];a.bindRenderbuffer(a.RENDERBUFFER,Ue),a.framebufferRenderbuffer(a.FRAMEBUFFER,me,a.RENDERBUFFER,Ue)}}else{const ae=P.texture.mipmaps;if(ae&&ae.length>0?i.bindFramebuffer(a.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(a.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=a.createRenderbuffer(),Yt(E.__webglDepthbuffer,P,!1);else{const me=P.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Ue=E.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,Ue),a.framebufferRenderbuffer(a.FRAMEBUFFER,me,a.RENDERBUFFER,Ue)}}i.bindFramebuffer(a.FRAMEBUFFER,null)}function vt(P,E,ee){const ae=r.get(P);E!==void 0&&$e(ae.__webglFramebuffer,P,P.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),ee!==void 0&&St(P)}function et(P){const E=P.texture,ee=r.get(P),ae=r.get(E);P.addEventListener("dispose",T);const me=P.textures,Ue=P.isWebGLCubeRenderTarget===!0,Be=me.length>1;if(Be||(ae.__webglTexture===void 0&&(ae.__webglTexture=a.createTexture()),ae.__version=E.version,u.memory.textures++),Ue){ee.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(E.mipmaps&&E.mipmaps.length>0){ee.__webglFramebuffer[fe]=[];for(let pe=0;pe<E.mipmaps.length;pe++)ee.__webglFramebuffer[fe][pe]=a.createFramebuffer()}else ee.__webglFramebuffer[fe]=a.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){ee.__webglFramebuffer=[];for(let fe=0;fe<E.mipmaps.length;fe++)ee.__webglFramebuffer[fe]=a.createFramebuffer()}else ee.__webglFramebuffer=a.createFramebuffer();if(Be)for(let fe=0,pe=me.length;fe<pe;fe++){const we=r.get(me[fe]);we.__webglTexture===void 0&&(we.__webglTexture=a.createTexture(),u.memory.textures++)}if(P.samples>0&&an(P)===!1){ee.__webglMultisampledFramebuffer=a.createFramebuffer(),ee.__webglColorRenderbuffer=[],i.bindFramebuffer(a.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let fe=0;fe<me.length;fe++){const pe=me[fe];ee.__webglColorRenderbuffer[fe]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,ee.__webglColorRenderbuffer[fe]);const we=c.convert(pe.format,pe.colorSpace),ze=c.convert(pe.type),Oe=w(pe.internalFormat,we,ze,pe.normalized,pe.colorSpace,P.isXRRenderTarget===!0),Fe=Bt(P);a.renderbufferStorageMultisample(a.RENDERBUFFER,Fe,Oe,P.width,P.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+fe,a.RENDERBUFFER,ee.__webglColorRenderbuffer[fe])}a.bindRenderbuffer(a.RENDERBUFFER,null),P.depthBuffer&&(ee.__webglDepthRenderbuffer=a.createRenderbuffer(),Yt(ee.__webglDepthRenderbuffer,P,!0)),i.bindFramebuffer(a.FRAMEBUFFER,null)}}if(Ue){i.bindTexture(a.TEXTURE_CUBE_MAP,ae.__webglTexture),De(a.TEXTURE_CUBE_MAP,E);for(let fe=0;fe<6;fe++)if(E.mipmaps&&E.mipmaps.length>0)for(let pe=0;pe<E.mipmaps.length;pe++)$e(ee.__webglFramebuffer[fe][pe],P,E,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+fe,pe);else $e(ee.__webglFramebuffer[fe],P,E,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);x(E)&&F(a.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Be){for(let fe=0,pe=me.length;fe<pe;fe++){const we=me[fe],ze=r.get(we);let Oe=a.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Oe=P.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),i.bindTexture(Oe,ze.__webglTexture),De(Oe,we),$e(ee.__webglFramebuffer,P,we,a.COLOR_ATTACHMENT0+fe,Oe,0),x(we)&&F(Oe)}i.unbindTexture()}else{let fe=a.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(fe=P.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),i.bindTexture(fe,ae.__webglTexture),De(fe,E),E.mipmaps&&E.mipmaps.length>0)for(let pe=0;pe<E.mipmaps.length;pe++)$e(ee.__webglFramebuffer[pe],P,E,a.COLOR_ATTACHMENT0,fe,pe);else $e(ee.__webglFramebuffer,P,E,a.COLOR_ATTACHMENT0,fe,0);x(E)&&F(fe),i.unbindTexture()}P.depthBuffer&&St(P)}function Gt(P){const E=P.textures;for(let ee=0,ae=E.length;ee<ae;ee++){const me=E[ee];if(x(me)){const Ue=I(P),Be=r.get(me).__webglTexture;i.bindTexture(Ue,Be),F(Ue),i.unbindTexture()}}}const Jt=[],$t=[];function en(P){if(P.samples>0){if(an(P)===!1){const E=P.textures,ee=P.width,ae=P.height;let me=a.COLOR_BUFFER_BIT;const Ue=P.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Be=r.get(P),fe=E.length>1;if(fe)for(let we=0;we<E.length;we++)i.bindFramebuffer(a.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+we,a.RENDERBUFFER,null),i.bindFramebuffer(a.FRAMEBUFFER,Be.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+we,a.TEXTURE_2D,null,0);i.bindFramebuffer(a.READ_FRAMEBUFFER,Be.__webglMultisampledFramebuffer);const pe=P.texture.mipmaps;pe&&pe.length>0?i.bindFramebuffer(a.DRAW_FRAMEBUFFER,Be.__webglFramebuffer[0]):i.bindFramebuffer(a.DRAW_FRAMEBUFFER,Be.__webglFramebuffer);for(let we=0;we<E.length;we++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(me|=a.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(me|=a.STENCIL_BUFFER_BIT)),fe){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,Be.__webglColorRenderbuffer[we]);const ze=r.get(E[we]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,ze,0)}a.blitFramebuffer(0,0,ee,ae,0,0,ee,ae,me,a.NEAREST),m===!0&&(Jt.length=0,$t.length=0,Jt.push(a.COLOR_ATTACHMENT0+we),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Jt.push(Ue),$t.push(Ue),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,$t)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,Jt))}if(i.bindFramebuffer(a.READ_FRAMEBUFFER,null),i.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),fe)for(let we=0;we<E.length;we++){i.bindFramebuffer(a.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+we,a.RENDERBUFFER,Be.__webglColorRenderbuffer[we]);const ze=r.get(E[we]).__webglTexture;i.bindFramebuffer(a.FRAMEBUFFER,Be.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+we,a.TEXTURE_2D,ze,0)}i.bindFramebuffer(a.DRAW_FRAMEBUFFER,Be.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&m){const E=P.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[E])}}}function Bt(P){return Math.min(o.maxSamples,P.samples)}function an(P){const E=r.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Q(P){const E=u.render.frame;g.get(P)!==E&&(g.set(P,E),P.update())}function Ut(P,E){const ee=P.colorSpace,ae=P.format,me=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||ee!==Ou&&ee!==zs&&(wt.getTransfer(ee)===Wt?(ae!==ra||me!==Xi)&&rt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Nt("WebGLTextures: Unsupported texture color space:",ee)),E}function Rt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(h.width=P.naturalWidth||P.width,h.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(h.width=P.displayWidth,h.height=P.displayHeight):(h.width=P.width,h.height=P.height),h}this.allocateTextureUnit=H,this.resetTextureUnits=ce,this.getTextureUnits=ue,this.setTextureUnits=Z,this.setTexture2D=te,this.setTexture2DArray=ge,this.setTexture3D=Se,this.setTextureCube=U,this.rebindTextures=vt,this.setupRenderTarget=et,this.updateRenderTargetMipmap=Gt,this.updateMultisampleRenderTarget=en,this.setupDepthRenderbuffer=St,this.setupFrameBufferTexture=$e,this.useMultisampledRTT=an,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function Y2(a,e){function i(r,o=zs){let c;const u=wt.getTransfer(o);if(r===Xi)return a.UNSIGNED_BYTE;if(r===Pp)return a.UNSIGNED_SHORT_4_4_4_4;if(r===Ip)return a.UNSIGNED_SHORT_5_5_5_1;if(r===Ax)return a.UNSIGNED_INT_5_9_9_9_REV;if(r===Rx)return a.UNSIGNED_INT_10F_11F_11F_REV;if(r===bx)return a.BYTE;if(r===Tx)return a.SHORT;if(r===Gl)return a.UNSIGNED_SHORT;if(r===Op)return a.INT;if(r===Ea)return a.UNSIGNED_INT;if(r===va)return a.FLOAT;if(r===es)return a.HALF_FLOAT;if(r===Cx)return a.ALPHA;if(r===wx)return a.RGB;if(r===ra)return a.RGBA;if(r===ts)return a.DEPTH_COMPONENT;if(r===yr)return a.DEPTH_STENCIL;if(r===Dx)return a.RED;if(r===Fp)return a.RED_INTEGER;if(r===br)return a.RG;if(r===Bp)return a.RG_INTEGER;if(r===zp)return a.RGBA_INTEGER;if(r===Au||r===Ru||r===Cu||r===wu)if(u===Wt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Au)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ru)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Cu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===wu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Au)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ru)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Cu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===wu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Jh||r===$h||r===ep||r===tp)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Jh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===$h)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ep)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===tp)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===np||r===ip||r===ap||r===sp||r===rp||r===Nu||r===op)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===np||r===ip)return u===Wt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===ap)return u===Wt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===sp)return c.COMPRESSED_R11_EAC;if(r===rp)return c.COMPRESSED_SIGNED_R11_EAC;if(r===Nu)return c.COMPRESSED_RG11_EAC;if(r===op)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===lp||r===cp||r===up||r===fp||r===dp||r===hp||r===pp||r===mp||r===gp||r===_p||r===vp||r===xp||r===Sp||r===Mp)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===lp)return u===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===cp)return u===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===up)return u===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===fp)return u===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===dp)return u===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===hp)return u===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===pp)return u===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===mp)return u===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===gp)return u===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===_p)return u===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===vp)return u===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===xp)return u===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Sp)return u===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Mp)return u===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===yp||r===Ep||r===bp)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===yp)return u===Wt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ep)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===bp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Tp||r===Ap||r===Uu||r===Rp)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Tp)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Ap)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Uu)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Rp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Vl?a.UNSIGNED_INT_24_8:a[r]!==void 0?a[r]:null}return{convert:i}}const q2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,j2=`
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

}`;class Z2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new Hx(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new qi({vertexShader:q2,fragmentShader:j2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ai(new Gs(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class K2 extends Ar{constructor(e,i){super();const r=this;let o=null,c=1,u=null,d="local-floor",m=1,h=null,g=null,v=null,_=null,S=null,b=null;const R=typeof XRWebGLBinding<"u",y=new Z2,x={},F=i.getContextAttributes();let I=null,w=null;const O=[],L=[],z=new Ft;let T=null;const N=new ki;N.viewport=new vn;const q=new ki;q.viewport=new vn;const X=[N,q],K=new rb;let ce=null,ue=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let Me=O[ie];return Me===void 0&&(Me=new oh,O[ie]=Me),Me.getTargetRaySpace()},this.getControllerGrip=function(ie){let Me=O[ie];return Me===void 0&&(Me=new oh,O[ie]=Me),Me.getGripSpace()},this.getHand=function(ie){let Me=O[ie];return Me===void 0&&(Me=new oh,O[ie]=Me),Me.getHandSpace()};function Z(ie){const Me=L.indexOf(ie.inputSource);if(Me===-1)return;const ve=O[Me];ve!==void 0&&(ve.update(ie.inputSource,ie.frame,h||u),ve.dispatchEvent({type:ie.type,data:ie.inputSource}))}function H(){o.removeEventListener("select",Z),o.removeEventListener("selectstart",Z),o.removeEventListener("selectend",Z),o.removeEventListener("squeeze",Z),o.removeEventListener("squeezestart",Z),o.removeEventListener("squeezeend",Z),o.removeEventListener("end",H),o.removeEventListener("inputsourceschange",V);for(let ie=0;ie<O.length;ie++){const Me=L[ie];Me!==null&&(L[ie]=null,O[ie].disconnect(Me))}ce=null,ue=null,y.reset();for(const ie in x)delete x[ie];e.setRenderTarget(I),S=null,_=null,v=null,o=null,w=null,De.stop(),r.isPresenting=!1,e.setPixelRatio(T),e.setSize(z.width,z.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){c=ie,r.isPresenting===!0&&rt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){d=ie,r.isPresenting===!0&&rt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||u},this.setReferenceSpace=function(ie){h=ie},this.getBaseLayer=function(){return _!==null?_:S},this.getBinding=function(){return v===null&&R&&(v=new XRWebGLBinding(o,i)),v},this.getFrame=function(){return b},this.getSession=function(){return o},this.setSession=async function(ie){if(o=ie,o!==null){if(I=e.getRenderTarget(),o.addEventListener("select",Z),o.addEventListener("selectstart",Z),o.addEventListener("selectend",Z),o.addEventListener("squeeze",Z),o.addEventListener("squeezestart",Z),o.addEventListener("squeezeend",Z),o.addEventListener("end",H),o.addEventListener("inputsourceschange",V),F.xrCompatible!==!0&&await i.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(z),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,We=null,st=null;F.depth&&(st=F.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,ve=F.stencil?yr:ts,We=F.stencil?Vl:Ea);const $e={colorFormat:i.RGBA8,depthFormat:st,scaleFactor:c};v=this.getBinding(),_=v.createProjectionLayer($e),o.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),w=new Ma(_.textureWidth,_.textureHeight,{format:ra,type:Xi,depthTexture:new Uo(_.textureWidth,_.textureHeight,We,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:F.stencil,colorSpace:e.outputColorSpace,samples:F.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const ve={antialias:F.antialias,alpha:!0,depth:F.depth,stencil:F.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(o,i,ve),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),w=new Ma(S.framebufferWidth,S.framebufferHeight,{format:ra,type:Xi,colorSpace:e.outputColorSpace,stencilBuffer:F.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(m),h=null,u=await o.requestReferenceSpace(d),De.setContext(o),De.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function V(ie){for(let Me=0;Me<ie.removed.length;Me++){const ve=ie.removed[Me],We=L.indexOf(ve);We>=0&&(L[We]=null,O[We].disconnect(ve))}for(let Me=0;Me<ie.added.length;Me++){const ve=ie.added[Me];let We=L.indexOf(ve);if(We===-1){for(let $e=0;$e<O.length;$e++)if($e>=L.length){L.push(ve),We=$e;break}else if(L[$e]===null){L[$e]=ve,We=$e;break}if(We===-1)break}const st=O[We];st&&st.connect(ve)}}const te=new ne,ge=new ne;function Se(ie,Me,ve){te.setFromMatrixPosition(Me.matrixWorld),ge.setFromMatrixPosition(ve.matrixWorld);const We=te.distanceTo(ge),st=Me.projectionMatrix.elements,$e=ve.projectionMatrix.elements,Yt=st[14]/(st[10]-1),ht=st[14]/(st[10]+1),St=(st[9]+1)/st[5],vt=(st[9]-1)/st[5],et=(st[8]-1)/st[0],Gt=($e[8]+1)/$e[0],Jt=Yt*et,$t=Yt*Gt,en=We/(-et+Gt),Bt=en*-et;if(Me.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(Bt),ie.translateZ(en),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),st[10]===-1)ie.projectionMatrix.copy(Me.projectionMatrix),ie.projectionMatrixInverse.copy(Me.projectionMatrixInverse);else{const an=Yt+en,Q=ht+en,Ut=Jt-Bt,Rt=$t+(We-Bt),P=St*ht/Q*an,E=vt*ht/Q*an;ie.projectionMatrix.makePerspective(Ut,Rt,P,E,an,Q),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function U(ie,Me){Me===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(Me.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(o===null)return;let Me=ie.near,ve=ie.far;y.texture!==null&&(y.depthNear>0&&(Me=y.depthNear),y.depthFar>0&&(ve=y.depthFar)),K.near=q.near=N.near=Me,K.far=q.far=N.far=ve,(ce!==K.near||ue!==K.far)&&(o.updateRenderState({depthNear:K.near,depthFar:K.far}),ce=K.near,ue=K.far),K.layers.mask=ie.layers.mask|6,N.layers.mask=K.layers.mask&-5,q.layers.mask=K.layers.mask&-3;const We=ie.parent,st=K.cameras;U(K,We);for(let $e=0;$e<st.length;$e++)U(st[$e],We);st.length===2?Se(K,N,q):K.projectionMatrix.copy(N.projectionMatrix),J(ie,K,We)};function J(ie,Me,ve){ve===null?ie.matrix.copy(Me.matrixWorld):(ie.matrix.copy(ve.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(Me.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(Me.projectionMatrix),ie.projectionMatrixInverse.copy(Me.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=kl*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(_===null&&S===null))return m},this.setFoveation=function(ie){m=ie,_!==null&&(_.fixedFoveation=ie),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=ie)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(K)},this.getCameraTexture=function(ie){return x[ie]};let Ee=null;function Re(ie,Me){if(g=Me.getViewerPose(h||u),b=Me,g!==null){const ve=g.views;S!==null&&(e.setRenderTargetFramebuffer(w,S.framebuffer),e.setRenderTarget(w));let We=!1;ve.length!==K.cameras.length&&(K.cameras.length=0,We=!0);for(let ht=0;ht<ve.length;ht++){const St=ve[ht];let vt=null;if(S!==null)vt=S.getViewport(St);else{const Gt=v.getViewSubImage(_,St);vt=Gt.viewport,ht===0&&(e.setRenderTargetTextures(w,Gt.colorTexture,Gt.depthStencilTexture),e.setRenderTarget(w))}let et=X[ht];et===void 0&&(et=new ki,et.layers.enable(ht),et.viewport=new vn,X[ht]=et),et.matrix.fromArray(St.transform.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale),et.projectionMatrix.fromArray(St.projectionMatrix),et.projectionMatrixInverse.copy(et.projectionMatrix).invert(),et.viewport.set(vt.x,vt.y,vt.width,vt.height),ht===0&&(K.matrix.copy(et.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),We===!0&&K.cameras.push(et)}const st=o.enabledFeatures;if(st&&st.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&R){v=r.getBinding();const ht=v.getDepthInformation(ve[0]);ht&&ht.isValid&&ht.texture&&y.init(ht,o.renderState)}if(st&&st.includes("camera-access")&&R){e.state.unbindTexture(),v=r.getBinding();for(let ht=0;ht<ve.length;ht++){const St=ve[ht].camera;if(St){let vt=x[St];vt||(vt=new Hx,x[St]=vt);const et=v.getCameraImage(St);vt.sourceTexture=et}}}}for(let ve=0;ve<O.length;ve++){const We=L[ve],st=O[ve];We!==null&&st!==void 0&&st.update(We,Me,h||u)}Ee&&Ee(ie,Me),Me.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:Me}),b=null}const De=new Xx;De.setAnimationLoop(Re),this.setAnimationLoop=function(ie){Ee=ie},this.dispose=function(){}}}const Q2=new bn,Qx=new ct;Qx.set(-1,0,0,0,1,0,0,0,1);function J2(a,e){function i(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function r(y,x){x.color.getRGB(y.fogColor.value,Gx(a)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function o(y,x,F,I,w){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?c(y,x):x.isMeshLambertMaterial?(c(y,x),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(c(y,x),v(y,x)):x.isMeshPhongMaterial?(c(y,x),g(y,x),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(c(y,x),_(y,x),x.isMeshPhysicalMaterial&&S(y,x,w)):x.isMeshMatcapMaterial?(c(y,x),b(y,x)):x.isMeshDepthMaterial?c(y,x):x.isMeshDistanceMaterial?(c(y,x),R(y,x)):x.isMeshNormalMaterial?c(y,x):x.isLineBasicMaterial?(u(y,x),x.isLineDashedMaterial&&d(y,x)):x.isPointsMaterial?m(y,x,F,I):x.isSpriteMaterial?h(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,i(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,i(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===mi&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,i(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===mi&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,i(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,i(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const F=e.get(x),I=F.envMap,w=F.envMapRotation;I&&(y.envMap.value=I,y.envMapRotation.value.setFromMatrix4(Q2.makeRotationFromEuler(w)).transpose(),I.isCubeTexture&&I.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(Qx),y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,y.aoMapTransform))}function u(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,i(x.map,y.mapTransform))}function d(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function m(y,x,F,I){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*F,y.scale.value=I*.5,x.map&&(y.map.value=x.map,i(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function h(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,i(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function g(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function v(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function _(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function S(y,x,F){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===mi&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=F.texture,y.transmissionSamplerSize.value.set(F.width,F.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,x){x.matcap&&(y.matcap.value=x.matcap)}function R(y,x){const F=e.get(x).light;y.referencePosition.value.setFromMatrixPosition(F.matrixWorld),y.nearDistance.value=F.shadow.camera.near,y.farDistance.value=F.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function $2(a,e,i,r){let o={},c={},u=[];const d=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function m(w,O){const L=O.program;r.uniformBlockBinding(w,L)}function h(w,O){let L=o[w.id];L===void 0&&(y(w),L=g(w),o[w.id]=L,w.addEventListener("dispose",F));const z=O.program;r.updateUBOMapping(w,z);const T=e.render.frame;c[w.id]!==T&&(_(w),c[w.id]=T)}function g(w){const O=v();w.__bindingPointIndex=O;const L=a.createBuffer(),z=w.__size,T=w.usage;return a.bindBuffer(a.UNIFORM_BUFFER,L),a.bufferData(a.UNIFORM_BUFFER,z,T),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,O,L),L}function v(){for(let w=0;w<d;w++)if(u.indexOf(w)===-1)return u.push(w),w;return Nt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(w){const O=o[w.id],L=w.uniforms,z=w.__cache;a.bindBuffer(a.UNIFORM_BUFFER,O);for(let T=0,N=L.length;T<N;T++){const q=L[T];if(Array.isArray(q))for(let X=0,K=q.length;X<K;X++)S(q[X],T,X,z);else S(q,T,0,z)}a.bindBuffer(a.UNIFORM_BUFFER,null)}function S(w,O,L,z){if(R(w,O,L,z)===!0){const T=w.__offset,N=w.value;if(Array.isArray(N)){let q=0;for(let X=0;X<N.length;X++){const K=N[X],ce=x(K);b(K,w.__data,q),typeof K!="number"&&typeof K!="boolean"&&!K.isMatrix3&&!ArrayBuffer.isView(K)&&(q+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}}else b(N,w.__data,0);a.bufferSubData(a.UNIFORM_BUFFER,T,w.__data)}}function b(w,O,L){typeof w=="number"||typeof w=="boolean"?O[0]=w:w.isMatrix3?(O[0]=w.elements[0],O[1]=w.elements[1],O[2]=w.elements[2],O[3]=0,O[4]=w.elements[3],O[5]=w.elements[4],O[6]=w.elements[5],O[7]=0,O[8]=w.elements[6],O[9]=w.elements[7],O[10]=w.elements[8],O[11]=0):ArrayBuffer.isView(w)?O.set(new w.constructor(w.buffer,w.byteOffset,O.length)):w.toArray(O,L)}function R(w,O,L,z){const T=w.value,N=O+"_"+L;if(z[N]===void 0)return typeof T=="number"||typeof T=="boolean"?z[N]=T:ArrayBuffer.isView(T)?z[N]=T.slice():z[N]=T.clone(),!0;{const q=z[N];if(typeof T=="number"||typeof T=="boolean"){if(q!==T)return z[N]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(q.equals(T)===!1)return q.copy(T),!0}}return!1}function y(w){const O=w.uniforms;let L=0;const z=16;for(let N=0,q=O.length;N<q;N++){const X=Array.isArray(O[N])?O[N]:[O[N]];for(let K=0,ce=X.length;K<ce;K++){const ue=X[K],Z=Array.isArray(ue.value)?ue.value:[ue.value];for(let H=0,V=Z.length;H<V;H++){const te=Z[H],ge=x(te),Se=L%z,U=Se%ge.boundary,J=Se+U;L+=U,J!==0&&z-J<ge.storage&&(L+=z-J),ue.__data=new Float32Array(ge.storage/Float32Array.BYTES_PER_ELEMENT),ue.__offset=L,L+=ge.storage}}}const T=L%z;return T>0&&(L+=z-T),w.__size=L,w.__cache={},this}function x(w){const O={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(O.boundary=4,O.storage=4):w.isVector2?(O.boundary=8,O.storage=8):w.isVector3||w.isColor?(O.boundary=16,O.storage=12):w.isVector4?(O.boundary=16,O.storage=16):w.isMatrix3?(O.boundary=48,O.storage=48):w.isMatrix4?(O.boundary=64,O.storage=64):w.isTexture?rt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(O.boundary=16,O.storage=w.byteLength):rt("WebGLRenderer: Unsupported uniform value type.",w),O}function F(w){const O=w.target;O.removeEventListener("dispose",F);const L=u.indexOf(O.__bindingPointIndex);u.splice(L,1),a.deleteBuffer(o[O.id]),delete o[O.id],delete c[O.id]}function I(){for(const w in o)a.deleteBuffer(o[w]);u=[],o={},c={}}return{bind:m,update:h,dispose:I}}const eR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ma=null;function tR(){return ma===null&&(ma=new XE(eR,16,16,br,es),ma.name="DFG_LUT",ma.minFilter=dn,ma.magFilter=dn,ma.wrapS=sa,ma.wrapT=sa,ma.generateMipmaps=!1,ma.needsUpdate=!0),ma}class nR{constructor(e={}){const{canvas:i=sE(),context:r=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:h=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:_=!1,outputBufferType:S=Xi}=e;this.isWebGLRenderer=!0;let b;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=r.getContextAttributes().alpha}else b=u;const R=S,y=new Set([zp,Bp,Fp]),x=new Set([Xi,Ea,Gl,Vl,Pp,Ip]),F=new Uint32Array(4),I=new Int32Array(4),w=new ne;let O=null,L=null;const z=[],T=[];let N=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Sa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const q=this;let X=!1,K=null,ce=null,ue=null,Z=null;this._outputColorSpace=ei;let H=0,V=0,te=null,ge=-1,Se=null;const U=new vn,J=new vn;let Ee=null;const Re=new Vt(0);let De=0,ie=i.width,Me=i.height,ve=1,We=null,st=null;const $e=new vn(0,0,ie,Me),Yt=new vn(0,0,ie,Me);let ht=!1;const St=new Fx;let vt=!1,et=!1;const Gt=new bn,Jt=new ne,$t=new vn,en={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Bt=!1;function an(){return te===null?ve:1}let Q=r;function Ut(A,j){return i.getContext(A,j)}try{const A={alpha:!0,depth:o,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:h,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Up}`),i.addEventListener("webglcontextlost",qt,!1),i.addEventListener("webglcontextrestored",ut,!1),i.addEventListener("webglcontextcreationerror",hn,!1),Q===null){const j="webgl2";if(Q=Ut(j,A),Q===null)throw Ut(j)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(A){throw Nt("WebGLRenderer: "+A.message),A}let Rt,P,E,ee,ae,me,Ue,Be,fe,pe,we,ze,Oe,Fe,je,Ke,it,W,Le,_e,Ie,Ge,Te;function Qe(){Rt=new tA(Q),Rt.init(),Ie=new Y2(Q,Rt),P=new qT(Q,Rt,e,Ie),E=new X2(Q,Rt),P.reversedDepthBuffer&&_&&E.buffers.depth.setReversed(!0),ce=Q.createFramebuffer(),ue=Q.createFramebuffer(),Z=Q.createFramebuffer(),ee=new aA(Q),ae=new D2,me=new W2(Q,Rt,E,ae,P,Ie,ee),Ue=new eA(q),Be=new lb(Q),Ge=new WT(Q,Be),fe=new nA(Q,Be,ee,Ge),pe=new rA(Q,fe,Be,Ge,ee),W=new sA(Q,P,me),je=new jT(ae),we=new w2(q,Ue,Rt,P,Ge,je),ze=new J2(q,ae),Oe=new N2,Fe=new B2(Rt),it=new XT(q,Ue,E,pe,b,m),Ke=new k2(q,pe,P),Te=new $2(Q,ee,P,E),Le=new YT(Q,Rt,ee),_e=new iA(Q,Rt,ee),ee.programs=we.programs,q.capabilities=P,q.extensions=Rt,q.properties=ae,q.renderLists=Oe,q.shadowMap=Ke,q.state=E,q.info=ee}Qe(),R!==Xi&&(N=new lA(R,i.width,i.height,d,o,c));const Ye=new K2(q,Q);this.xr=Ye,this.getContext=function(){return Q},this.getContextAttributes=function(){return Q.getContextAttributes()},this.forceContextLoss=function(){const A=Rt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Rt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(A){A!==void 0&&(ve=A,this.setSize(ie,Me,!1))},this.getSize=function(A){return A.set(ie,Me)},this.setSize=function(A,j,oe=!0){if(Ye.isPresenting){rt("WebGLRenderer: Can't change size while VR device is presenting.");return}ie=A,Me=j,i.width=Math.floor(A*ve),i.height=Math.floor(j*ve),oe===!0&&(i.style.width=A+"px",i.style.height=j+"px"),N!==null&&N.setSize(i.width,i.height),this.setViewport(0,0,A,j)},this.getDrawingBufferSize=function(A){return A.set(ie*ve,Me*ve).floor()},this.setDrawingBufferSize=function(A,j,oe){ie=A,Me=j,ve=oe,i.width=Math.floor(A*oe),i.height=Math.floor(j*oe),this.setViewport(0,0,A,j)},this.setEffects=function(A){if(R===Xi){Nt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let j=0;j<A.length;j++)if(A[j].isOutputPass===!0){rt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(U)},this.getViewport=function(A){return A.copy($e)},this.setViewport=function(A,j,oe,B){A.isVector4?$e.set(A.x,A.y,A.z,A.w):$e.set(A,j,oe,B),E.viewport(U.copy($e).multiplyScalar(ve).round())},this.getScissor=function(A){return A.copy(Yt)},this.setScissor=function(A,j,oe,B){A.isVector4?Yt.set(A.x,A.y,A.z,A.w):Yt.set(A,j,oe,B),E.scissor(J.copy(Yt).multiplyScalar(ve).round())},this.getScissorTest=function(){return ht},this.setScissorTest=function(A){E.setScissorTest(ht=A)},this.setOpaqueSort=function(A){We=A},this.setTransparentSort=function(A){st=A},this.getClearColor=function(A){return A.copy(it.getClearColor())},this.setClearColor=function(){it.setClearColor(...arguments)},this.getClearAlpha=function(){return it.getClearAlpha()},this.setClearAlpha=function(){it.setClearAlpha(...arguments)},this.clear=function(A=!0,j=!0,oe=!0){let B=0;if(A){let G=!1;if(te!==null){const he=te.texture.format;G=y.has(he)}if(G){const he=te.texture.type,Ae=x.has(he),Ce=it.getClearColor(),Ne=it.getClearAlpha(),Pe=Ce.r,qe=Ce.g,tt=Ce.b;Ae?(F[0]=Pe,F[1]=qe,F[2]=tt,F[3]=Ne,Q.clearBufferuiv(Q.COLOR,0,F)):(I[0]=Pe,I[1]=qe,I[2]=tt,I[3]=Ne,Q.clearBufferiv(Q.COLOR,0,I))}else B|=Q.COLOR_BUFFER_BIT}j&&(B|=Q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),oe&&(B|=Q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&Q.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),K=A},this.dispose=function(){i.removeEventListener("webglcontextlost",qt,!1),i.removeEventListener("webglcontextrestored",ut,!1),i.removeEventListener("webglcontextcreationerror",hn,!1),it.dispose(),Oe.dispose(),Fe.dispose(),ae.dispose(),Ue.dispose(),pe.dispose(),Ge.dispose(),Te.dispose(),we.dispose(),Ye.dispose(),Ye.removeEventListener("sessionstart",sn),Ye.removeEventListener("sessionend",Sn),zn.stop()};function qt(A){A.preventDefault(),Q_("WebGLRenderer: Context Lost."),X=!0}function ut(){Q_("WebGLRenderer: Context Restored."),X=!1;const A=ee.autoReset,j=Ke.enabled,oe=Ke.autoUpdate,B=Ke.needsUpdate,G=Ke.type;Qe(),ee.autoReset=A,Ke.enabled=j,Ke.autoUpdate=oe,Ke.needsUpdate=B,Ke.type=G}function hn(A){Nt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function jt(A){const j=A.target;j.removeEventListener("dispose",jt),ks(j)}function ks(A){Xs(A),ae.remove(A)}function Xs(A){const j=ae.get(A).programs;j!==void 0&&(j.forEach(function(oe){we.releaseProgram(oe)}),A.isShaderMaterial&&we.releaseShaderCache(A))}this.renderBufferDirect=function(A,j,oe,B,G,he){j===null&&(j=en);const Ae=G.isMesh&&G.matrixWorld.determinantAffine()<0,Ce=Ki(A,j,oe,B,G);E.setMaterial(B,Ae);let Ne=oe.index,Pe=1;if(B.wireframe===!0){if(Ne=fe.getWireframeAttribute(oe),Ne===void 0)return;Pe=2}const qe=oe.drawRange,tt=oe.attributes.position;let He=qe.start*Pe,ot=(qe.start+qe.count)*Pe;he!==null&&(He=Math.max(He,he.start*Pe),ot=Math.min(ot,(he.start+he.count)*Pe)),Ne!==null?(He=Math.max(He,0),ot=Math.min(ot,Ne.count)):tt!=null&&(He=Math.max(He,0),ot=Math.min(ot,tt.count));const Mt=ot-He;if(Mt<0||Mt===1/0)return;Ge.setup(G,B,Ce,oe,Ne);let ft,Dt=Le;if(Ne!==null&&(ft=Be.get(Ne),Dt=_e,Dt.setIndex(ft)),G.isMesh)B.wireframe===!0?(E.setLineWidth(B.wireframeLinewidth*an()),Dt.setMode(Q.LINES)):Dt.setMode(Q.TRIANGLES);else if(G.isLine){let _t=B.linewidth;_t===void 0&&(_t=1),E.setLineWidth(_t*an()),G.isLineSegments?Dt.setMode(Q.LINES):G.isLineLoop?Dt.setMode(Q.LINE_LOOP):Dt.setMode(Q.LINE_STRIP)}else G.isPoints?Dt.setMode(Q.POINTS):G.isSprite&&Dt.setMode(Q.TRIANGLES);if(G.isBatchedMesh)if(Rt.get("WEBGL_multi_draw"))Dt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const _t=G._multiDrawStarts,Ve=G._multiDrawCounts,Mn=G._multiDrawCount,pt=Ne?Be.get(Ne).bytesPerElement:1,mn=ae.get(B).currentProgram.getUniforms();for(let On=0;On<Mn;On++)mn.setValue(Q,"_gl_DrawID",On),Dt.render(_t[On]/pt,Ve[On])}else if(G.isInstancedMesh)Dt.renderInstances(He,Mt,G.count);else if(oe.isInstancedBufferGeometry){const _t=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,Ve=Math.min(oe.instanceCount,_t);Dt.renderInstances(He,Mt,Ve)}else Dt.render(He,Mt)};function ba(A,j,oe){A.transparent===!0&&A.side===_a&&A.forceSinglePass===!1?(A.side=mi,A.needsUpdate=!0,Zi(A,j,oe),A.side=$a,A.needsUpdate=!0,Zi(A,j,oe),A.side=_a):Zi(A,j,oe)}this.compile=function(A,j,oe=null){oe===null&&(oe=A),L=Fe.get(oe),L.init(j),T.push(L),oe.traverseVisible(function(G){G.isLight&&G.layers.test(j.layers)&&(L.pushLight(G),G.castShadow&&L.pushShadow(G))}),A!==oe&&A.traverseVisible(function(G){G.isLight&&G.layers.test(j.layers)&&(L.pushLight(G),G.castShadow&&L.pushShadow(G))}),L.setupLights();const B=new Set;return A.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const he=G.material;if(he)if(Array.isArray(he))for(let Ae=0;Ae<he.length;Ae++){const Ce=he[Ae];ba(Ce,oe,G),B.add(Ce)}else ba(he,oe,G),B.add(he)}),L=T.pop(),B},this.compileAsync=function(A,j,oe=null){const B=this.compile(A,j,oe);return new Promise(G=>{function he(){if(B.forEach(function(Ae){ae.get(Ae).currentProgram.isReady()&&B.delete(Ae)}),B.size===0){G(A);return}setTimeout(he,10)}Rt.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let ns=null;function ti(A){ns&&ns(A)}function sn(){zn.stop()}function Sn(){zn.start()}const zn=new Xx;zn.setAnimationLoop(ti),typeof self<"u"&&zn.setContext(self),this.setAnimationLoop=function(A){ns=A,Ye.setAnimationLoop(A),A===null?zn.stop():zn.start()},Ye.addEventListener("sessionstart",sn),Ye.addEventListener("sessionend",Sn),this.render=function(A,j){if(j!==void 0&&j.isCamera!==!0){Nt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(X===!0)return;K!==null&&K.renderStart(A,j);const oe=Ye.enabled===!0&&Ye.isPresenting===!0,B=N!==null&&(te===null||oe)&&N.begin(q,te);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),Ye.enabled===!0&&Ye.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(Ye.cameraAutoUpdate===!0&&Ye.updateCamera(j),j=Ye.getCamera()),A.isScene===!0&&A.onBeforeRender(q,A,j,te),L=Fe.get(A,T.length),L.init(j),L.state.textureUnits=me.getTextureUnits(),T.push(L),Gt.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),St.setFromProjectionMatrix(Gt,xa,j.reversedDepth),et=this.localClippingEnabled,vt=je.init(this.clippingPlanes,et),O=Oe.get(A,z.length),O.init(),z.push(O),Ye.enabled===!0&&Ye.isPresenting===!0){const Ae=q.xr.getDepthSensingMesh();Ae!==null&&oa(Ae,j,-1/0,q.sortObjects)}oa(A,j,0,q.sortObjects),O.finish(),q.sortObjects===!0&&O.sort(We,st,j.reversedDepth),Bt=Ye.enabled===!1||Ye.isPresenting===!1||Ye.hasDepthSensing()===!1,Bt&&it.addToRenderList(O,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),vt===!0&&je.beginShadows();const G=L.state.shadowsArray;if(Ke.render(G,A,j),vt===!0&&je.endShadows(),(B&&N.hasRenderPass())===!1){const Ae=O.opaque,Ce=O.transmissive;if(L.setupLights(),j.isArrayCamera){const Ne=j.cameras;if(Ce.length>0)for(let Pe=0,qe=Ne.length;Pe<qe;Pe++){const tt=Ne[Pe];Ys(Ae,Ce,A,tt)}Bt&&it.render(A);for(let Pe=0,qe=Ne.length;Pe<qe;Pe++){const tt=Ne[Pe];Ws(O,A,tt,tt.viewport)}}else Ce.length>0&&Ys(Ae,Ce,A,j),Bt&&it.render(A),Ws(O,A,j)}te!==null&&V===0&&(me.updateMultisampleRenderTarget(te),me.updateRenderTargetMipmap(te)),B&&N.end(q),A.isScene===!0&&A.onAfterRender(q,A,j),Ge.resetDefaultState(),ge=-1,Se=null,T.pop(),T.length>0?(L=T[T.length-1],me.setTextureUnits(L.state.textureUnits),vt===!0&&je.setGlobalState(q.clippingPlanes,L.state.camera)):L=null,z.pop(),z.length>0?O=z[z.length-1]:O=null,K!==null&&K.renderEnd()};function oa(A,j,oe,B){if(A.visible===!1)return;if(A.layers.test(j.layers)){if(A.isGroup)oe=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(j);else if(A.isLightProbeGrid)L.pushLightProbeGrid(A);else if(A.isLight)L.pushLight(A),A.castShadow&&L.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||St.intersectsSprite(A)){B&&$t.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Gt);const Ae=pe.update(A),Ce=A.material;Ce.visible&&O.push(A,Ae,Ce,oe,$t.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||St.intersectsObject(A))){const Ae=pe.update(A),Ce=A.material;if(B&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),$t.copy(A.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),$t.copy(Ae.boundingSphere.center)),$t.applyMatrix4(A.matrixWorld).applyMatrix4(Gt)),Array.isArray(Ce)){const Ne=Ae.groups;for(let Pe=0,qe=Ne.length;Pe<qe;Pe++){const tt=Ne[Pe],He=Ce[tt.materialIndex];He&&He.visible&&O.push(A,Ae,He,oe,$t.z,tt)}}else Ce.visible&&O.push(A,Ae,Ce,oe,$t.z,null)}}const he=A.children;for(let Ae=0,Ce=he.length;Ae<Ce;Ae++)oa(he[Ae],j,oe,B)}function Ws(A,j,oe,B){const{opaque:G,transmissive:he,transparent:Ae}=A;L.setupLightsView(oe),vt===!0&&je.setGlobalState(q.clippingPlanes,oe),B&&E.viewport(U.copy(B)),G.length>0&&Ci(G,j,oe),he.length>0&&Ci(he,j,oe),Ae.length>0&&Ci(Ae,j,oe),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function Ys(A,j,oe,B){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[B.id]===void 0){const He=Rt.has("EXT_color_buffer_half_float")||Rt.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[B.id]=new Ma(1,1,{generateMipmaps:!0,type:He?es:Xi,minFilter:Hs,samples:Math.max(4,P.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:wt.workingColorSpace})}const he=L.state.transmissionRenderTarget[B.id],Ae=B.viewport||U;he.setSize(Ae.z*q.transmissionResolutionScale,Ae.w*q.transmissionResolutionScale);const Ce=q.getRenderTarget(),Ne=q.getActiveCubeFace(),Pe=q.getActiveMipmapLevel();q.setRenderTarget(he),q.getClearColor(Re),De=q.getClearAlpha(),De<1&&q.setClearColor(16777215,.5),q.clear(),Bt&&it.render(oe);const qe=q.toneMapping;q.toneMapping=Sa;const tt=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),L.setupLightsView(B),vt===!0&&je.setGlobalState(q.clippingPlanes,B),Ci(A,oe,B),me.updateMultisampleRenderTarget(he),me.updateRenderTargetMipmap(he),Rt.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let ot=0,Mt=j.length;ot<Mt;ot++){const ft=j[ot],{object:Dt,geometry:_t,material:Ve,group:Mn}=ft;if(Ve.side===_a&&Dt.layers.test(B.layers)){const pt=Ve.side;Ve.side=mi,Ve.needsUpdate=!0,ji(Dt,oe,B,_t,Ve,Mn),Ve.side=pt,Ve.needsUpdate=!0,He=!0}}He===!0&&(me.updateMultisampleRenderTarget(he),me.updateRenderTargetMipmap(he))}q.setRenderTarget(Ce,Ne,Pe),q.setClearColor(Re,De),tt!==void 0&&(B.viewport=tt),q.toneMapping=qe}function Ci(A,j,oe){const B=j.isScene===!0?j.overrideMaterial:null;for(let G=0,he=A.length;G<he;G++){const Ae=A[G],{object:Ce,geometry:Ne,group:Pe}=Ae;let qe=Ae.material;qe.allowOverride===!0&&B!==null&&(qe=B),Ce.layers.test(oe.layers)&&ji(Ce,j,oe,Ne,qe,Pe)}}function ji(A,j,oe,B,G,he){A.onBeforeRender(q,j,oe,B,G,he),A.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),G.onBeforeRender(q,j,oe,B,A,he),G.transparent===!0&&G.side===_a&&G.forceSinglePass===!1?(G.side=mi,G.needsUpdate=!0,q.renderBufferDirect(oe,j,B,G,A,he),G.side=$a,G.needsUpdate=!0,q.renderBufferDirect(oe,j,B,G,A,he),G.side=_a):q.renderBufferDirect(oe,j,B,G,A,he),A.onAfterRender(q,j,oe,B,G,he)}function Zi(A,j,oe){j.isScene!==!0&&(j=en);const B=ae.get(A),G=L.state.lights,he=L.state.shadowsArray,Ae=G.state.version,Ce=we.getParameters(A,G.state,he,j,oe,L.state.lightProbeGridArray),Ne=we.getProgramCacheKey(Ce);let Pe=B.programs;B.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?j.environment:null,B.fog=j.fog;const qe=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;B.envMap=Ue.get(A.envMap||B.environment,qe),B.envMapRotation=B.environment!==null&&A.envMap===null?j.environmentRotation:A.envMapRotation,Pe===void 0&&(A.addEventListener("dispose",jt),Pe=new Map,B.programs=Pe);let tt=Pe.get(Ne);if(tt!==void 0){if(B.currentProgram===tt&&B.lightsStateVersion===Ae)return Di(A,Ce),tt}else Ce.uniforms=we.getUniforms(A),K!==null&&A.isNodeMaterial&&K.build(A,oe,Ce),A.onBeforeCompile(Ce,q),tt=we.acquireProgram(Ce,Ne),Pe.set(Ne,tt),B.uniforms=Ce.uniforms;const He=B.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(He.clippingPlanes=je.uniform),Di(A,Ce),B.needsLights=qs(A),B.lightsStateVersion=Ae,B.needsLights&&(He.ambientLightColor.value=G.state.ambient,He.lightProbe.value=G.state.probe,He.directionalLights.value=G.state.directional,He.directionalLightShadows.value=G.state.directionalShadow,He.spotLights.value=G.state.spot,He.spotLightShadows.value=G.state.spotShadow,He.rectAreaLights.value=G.state.rectArea,He.ltc_1.value=G.state.rectAreaLTC1,He.ltc_2.value=G.state.rectAreaLTC2,He.pointLights.value=G.state.point,He.pointLightShadows.value=G.state.pointShadow,He.hemisphereLights.value=G.state.hemi,He.directionalShadowMatrix.value=G.state.directionalShadowMatrix,He.spotLightMatrix.value=G.state.spotLightMatrix,He.spotLightMap.value=G.state.spotLightMap,He.pointShadowMatrix.value=G.state.pointShadowMatrix),B.lightProbeGrid=L.state.lightProbeGridArray.length>0,B.currentProgram=tt,B.uniformsList=null,tt}function wi(A){if(A.uniformsList===null){const j=A.currentProgram.getUniforms();A.uniformsList=Du.seqWithValue(j.seq,A.uniforms)}return A.uniformsList}function Di(A,j){const oe=ae.get(A);oe.outputColorSpace=j.outputColorSpace,oe.batching=j.batching,oe.batchingColor=j.batchingColor,oe.instancing=j.instancing,oe.instancingColor=j.instancingColor,oe.instancingMorph=j.instancingMorph,oe.skinning=j.skinning,oe.morphTargets=j.morphTargets,oe.morphNormals=j.morphNormals,oe.morphColors=j.morphColors,oe.morphTargetsCount=j.morphTargetsCount,oe.numClippingPlanes=j.numClippingPlanes,oe.numIntersection=j.numClipIntersection,oe.vertexAlphas=j.vertexAlphas,oe.vertexTangents=j.vertexTangents,oe.toneMapping=j.toneMapping}function la(A,j){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;w.setFromMatrixPosition(j.matrixWorld);for(let oe=0,B=A.length;oe<B;oe++){const G=A[oe];if(G.texture!==null&&G.boundingBox.containsPoint(w))return G}return null}function Ki(A,j,oe,B,G){j.isScene!==!0&&(j=en),me.resetTextureUnits();const he=j.fog,Ae=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?j.environment:null,Ce=te===null?q.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:wt.workingColorSpace,Ne=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,Pe=Ue.get(B.envMap||Ae,Ne),qe=B.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,tt=!!oe.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),He=!!oe.morphAttributes.position,ot=!!oe.morphAttributes.normal,Mt=!!oe.morphAttributes.color;let ft=Sa;B.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(ft=q.toneMapping);const Dt=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,_t=Dt!==void 0?Dt.length:0,Ve=ae.get(B),Mn=L.state.lights;if(vt===!0&&(et===!0||A!==Se)){const Lt=A===Se&&B.id===ge;je.setState(B,A,Lt)}let pt=!1;B.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==Mn.state.version||Ve.outputColorSpace!==Ce||G.isBatchedMesh&&Ve.batching===!1||!G.isBatchedMesh&&Ve.batching===!0||G.isBatchedMesh&&Ve.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Ve.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Ve.instancing===!1||!G.isInstancedMesh&&Ve.instancing===!0||G.isSkinnedMesh&&Ve.skinning===!1||!G.isSkinnedMesh&&Ve.skinning===!0||G.isInstancedMesh&&Ve.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ve.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Ve.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Ve.instancingMorph===!1&&G.morphTexture!==null||Ve.envMap!==Pe||B.fog===!0&&Ve.fog!==he||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==je.numPlanes||Ve.numIntersection!==je.numIntersection)||Ve.vertexAlphas!==qe||Ve.vertexTangents!==tt||Ve.morphTargets!==He||Ve.morphNormals!==ot||Ve.morphColors!==Mt||Ve.toneMapping!==ft||Ve.morphTargetsCount!==_t||!!Ve.lightProbeGrid!=L.state.lightProbeGridArray.length>0)&&(pt=!0):(pt=!0,Ve.__version=B.version);let mn=Ve.currentProgram;pt===!0&&(mn=Zi(B,j,G),K&&B.isNodeMaterial&&K.onUpdateProgram(B,mn,Ve));let On=!1,ni=!1,Hn=!1;const Ot=mn.getUniforms(),tn=Ve.uniforms;if(E.useProgram(mn.program)&&(On=!0,ni=!0,Hn=!0),B.id!==ge&&(ge=B.id,ni=!0),Ve.needsLights){const Lt=la(L.state.lightProbeGridArray,G);Ve.lightProbeGrid!==Lt&&(Ve.lightProbeGrid=Lt,ni=!0)}if(On||Se!==A){E.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Ot.setValue(Q,"projectionMatrix",A.projectionMatrix),Ot.setValue(Q,"viewMatrix",A.matrixWorldInverse);const Pn=Ot.map.cameraPosition;Pn!==void 0&&Pn.setValue(Q,Jt.setFromMatrixPosition(A.matrixWorld)),P.logarithmicDepthBuffer&&Ot.setValue(Q,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&Ot.setValue(Q,"isOrthographic",A.isOrthographicCamera===!0),Se!==A&&(Se=A,ni=!0,Hn=!0)}if(Ve.needsLights&&(Mn.state.directionalShadowMap.length>0&&Ot.setValue(Q,"directionalShadowMap",Mn.state.directionalShadowMap,me),Mn.state.spotShadowMap.length>0&&Ot.setValue(Q,"spotShadowMap",Mn.state.spotShadowMap,me),Mn.state.pointShadowMap.length>0&&Ot.setValue(Q,"pointShadowMap",Mn.state.pointShadowMap,me)),G.isSkinnedMesh){Ot.setOptional(Q,G,"bindMatrix"),Ot.setOptional(Q,G,"bindMatrixInverse");const Lt=G.skeleton;Lt&&(Lt.boneTexture===null&&Lt.computeBoneTexture(),Ot.setValue(Q,"boneTexture",Lt.boneTexture,me))}G.isBatchedMesh&&(Ot.setOptional(Q,G,"batchingTexture"),Ot.setValue(Q,"batchingTexture",G._matricesTexture,me),Ot.setOptional(Q,G,"batchingIdTexture"),Ot.setValue(Q,"batchingIdTexture",G._indirectTexture,me),Ot.setOptional(Q,G,"batchingColorTexture"),G._colorsTexture!==null&&Ot.setValue(Q,"batchingColorTexture",G._colorsTexture,me));const ii=oe.morphAttributes;if((ii.position!==void 0||ii.normal!==void 0||ii.color!==void 0)&&W.update(G,oe,mn),(ni||Ve.receiveShadow!==G.receiveShadow)&&(Ve.receiveShadow=G.receiveShadow,Ot.setValue(Q,"receiveShadow",G.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&j.environment!==null&&(tn.envMapIntensity.value=j.environmentIntensity),tn.dfgLUT!==void 0&&(tn.dfgLUT.value=tR()),ni){if(Ot.setValue(Q,"toneMappingExposure",q.toneMappingExposure),Ve.needsLights&&pn(tn,Hn),he&&B.fog===!0&&ze.refreshFogUniforms(tn,he),ze.refreshMaterialUniforms(tn,B,ve,Me,L.state.transmissionRenderTarget[A.id]),Ve.needsLights&&Ve.lightProbeGrid){const Lt=Ve.lightProbeGrid;tn.probesSH.value=Lt.texture,tn.probesMin.value.copy(Lt.boundingBox.min),tn.probesMax.value.copy(Lt.boundingBox.max),tn.probesResolution.value.copy(Lt.resolution)}Du.upload(Q,wi(Ve),tn,me)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Du.upload(Q,wi(Ve),tn,me),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&Ot.setValue(Q,"center",G.center),Ot.setValue(Q,"modelViewMatrix",G.modelViewMatrix),Ot.setValue(Q,"normalMatrix",G.normalMatrix),Ot.setValue(Q,"modelMatrix",G.matrixWorld),B.uniformsGroups!==void 0){const Lt=B.uniformsGroups;for(let Pn=0,Gn=Lt.length;Pn<Gn;Pn++){const Ta=Lt[Pn];Te.update(Ta,mn),Te.bind(Ta,mn)}}return mn}function pn(A,j){A.ambientLightColor.needsUpdate=j,A.lightProbe.needsUpdate=j,A.directionalLights.needsUpdate=j,A.directionalLightShadows.needsUpdate=j,A.pointLights.needsUpdate=j,A.pointLightShadows.needsUpdate=j,A.spotLights.needsUpdate=j,A.spotLightShadows.needsUpdate=j,A.rectAreaLights.needsUpdate=j,A.hemisphereLights.needsUpdate=j}function qs(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return te},this.setRenderTargetTextures=function(A,j,oe){const B=ae.get(A);B.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),ae.get(A.texture).__webglTexture=j,ae.get(A.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:oe,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,j){const oe=ae.get(A);oe.__webglFramebuffer=j,oe.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(A,j=0,oe=0){te=A,H=j,V=oe;let B=null,G=!1,he=!1;if(A){const Ce=ae.get(A);if(Ce.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(Q.FRAMEBUFFER,Ce.__webglFramebuffer),U.copy(A.viewport),J.copy(A.scissor),Ee=A.scissorTest,E.viewport(U),E.scissor(J),E.setScissorTest(Ee),ge=-1;return}else if(Ce.__webglFramebuffer===void 0)me.setupRenderTarget(A);else if(Ce.__hasExternalTextures)me.rebindTextures(A,ae.get(A.texture).__webglTexture,ae.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const qe=A.depthTexture;if(Ce.__boundDepthTexture!==qe){if(qe!==null&&ae.has(qe)&&(A.width!==qe.image.width||A.height!==qe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");me.setupDepthRenderbuffer(A)}}const Ne=A.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(he=!0);const Pe=ae.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Pe[j])?B=Pe[j][oe]:B=Pe[j],G=!0):A.samples>0&&me.useMultisampledRTT(A)===!1?B=ae.get(A).__webglMultisampledFramebuffer:Array.isArray(Pe)?B=Pe[oe]:B=Pe,U.copy(A.viewport),J.copy(A.scissor),Ee=A.scissorTest}else U.copy($e).multiplyScalar(ve).floor(),J.copy(Yt).multiplyScalar(ve).floor(),Ee=ht;if(oe!==0&&(B=ce),E.bindFramebuffer(Q.FRAMEBUFFER,B)&&E.drawBuffers(A,B),E.viewport(U),E.scissor(J),E.setScissorTest(Ee),G){const Ce=ae.get(A.texture);Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ce.__webglTexture,oe)}else if(he){const Ce=j;for(let Ne=0;Ne<A.textures.length;Ne++){const Pe=ae.get(A.textures[Ne]);Q.framebufferTextureLayer(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0+Ne,Pe.__webglTexture,oe,Ce)}}else if(A!==null&&oe!==0){const Ce=ae.get(A.texture);Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,Ce.__webglTexture,oe)}ge=-1},this.readRenderTargetPixels=function(A,j,oe,B,G,he,Ae,Ce=0){if(!(A&&A.isWebGLRenderTarget)){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=ae.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ae!==void 0&&(Ne=Ne[Ae]),Ne){E.bindFramebuffer(Q.FRAMEBUFFER,Ne);try{const Pe=A.textures[Ce],qe=Pe.format,tt=Pe.type;if(A.textures.length>1&&Q.readBuffer(Q.COLOR_ATTACHMENT0+Ce),!P.textureFormatReadable(qe)){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!P.textureTypeReadable(tt)){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=A.width-B&&oe>=0&&oe<=A.height-G&&Q.readPixels(j,oe,B,G,Ie.convert(qe),Ie.convert(tt),he)}finally{const Pe=te!==null?ae.get(te).__webglFramebuffer:null;E.bindFramebuffer(Q.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(A,j,oe,B,G,he,Ae,Ce=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=ae.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ae!==void 0&&(Ne=Ne[Ae]),Ne)if(j>=0&&j<=A.width-B&&oe>=0&&oe<=A.height-G){E.bindFramebuffer(Q.FRAMEBUFFER,Ne);const Pe=A.textures[Ce],qe=Pe.format,tt=Pe.type;if(A.textures.length>1&&Q.readBuffer(Q.COLOR_ATTACHMENT0+Ce),!P.textureFormatReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!P.textureTypeReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const He=Q.createBuffer();Q.bindBuffer(Q.PIXEL_PACK_BUFFER,He),Q.bufferData(Q.PIXEL_PACK_BUFFER,he.byteLength,Q.STREAM_READ),Q.readPixels(j,oe,B,G,Ie.convert(qe),Ie.convert(tt),0);const ot=te!==null?ae.get(te).__webglFramebuffer:null;E.bindFramebuffer(Q.FRAMEBUFFER,ot);const Mt=Q.fenceSync(Q.SYNC_GPU_COMMANDS_COMPLETE,0);return Q.flush(),await rE(Q,Mt,4),Q.bindBuffer(Q.PIXEL_PACK_BUFFER,He),Q.getBufferSubData(Q.PIXEL_PACK_BUFFER,0,he),Q.deleteBuffer(He),Q.deleteSync(Mt),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,j=null,oe=0){const B=Math.pow(2,-oe),G=Math.floor(A.image.width*B),he=Math.floor(A.image.height*B),Ae=j!==null?j.x:0,Ce=j!==null?j.y:0;me.setTexture2D(A,0),Q.copyTexSubImage2D(Q.TEXTURE_2D,oe,0,0,Ae,Ce,G,he),E.unbindTexture()},this.copyTextureToTexture=function(A,j,oe=null,B=null,G=0,he=0){let Ae,Ce,Ne,Pe,qe,tt,He,ot,Mt;const ft=A.isCompressedTexture?A.mipmaps[he]:A.image;if(oe!==null)Ae=oe.max.x-oe.min.x,Ce=oe.max.y-oe.min.y,Ne=oe.isBox3?oe.max.z-oe.min.z:1,Pe=oe.min.x,qe=oe.min.y,tt=oe.isBox3?oe.min.z:0;else{const tn=Math.pow(2,-G);Ae=Math.floor(ft.width*tn),Ce=Math.floor(ft.height*tn),A.isDataArrayTexture?Ne=ft.depth:A.isData3DTexture?Ne=Math.floor(ft.depth*tn):Ne=1,Pe=0,qe=0,tt=0}B!==null?(He=B.x,ot=B.y,Mt=B.z):(He=0,ot=0,Mt=0);const Dt=Ie.convert(j.format),_t=Ie.convert(j.type);let Ve;j.isData3DTexture?(me.setTexture3D(j,0),Ve=Q.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(me.setTexture2DArray(j,0),Ve=Q.TEXTURE_2D_ARRAY):(me.setTexture2D(j,0),Ve=Q.TEXTURE_2D),E.activeTexture(Q.TEXTURE0),E.pixelStorei(Q.UNPACK_FLIP_Y_WEBGL,j.flipY),E.pixelStorei(Q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),E.pixelStorei(Q.UNPACK_ALIGNMENT,j.unpackAlignment);const Mn=E.getParameter(Q.UNPACK_ROW_LENGTH),pt=E.getParameter(Q.UNPACK_IMAGE_HEIGHT),mn=E.getParameter(Q.UNPACK_SKIP_PIXELS),On=E.getParameter(Q.UNPACK_SKIP_ROWS),ni=E.getParameter(Q.UNPACK_SKIP_IMAGES);E.pixelStorei(Q.UNPACK_ROW_LENGTH,ft.width),E.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,ft.height),E.pixelStorei(Q.UNPACK_SKIP_PIXELS,Pe),E.pixelStorei(Q.UNPACK_SKIP_ROWS,qe),E.pixelStorei(Q.UNPACK_SKIP_IMAGES,tt);const Hn=A.isDataArrayTexture||A.isData3DTexture,Ot=j.isDataArrayTexture||j.isData3DTexture;if(A.isDepthTexture){const tn=ae.get(A),ii=ae.get(j),Lt=ae.get(tn.__renderTarget),Pn=ae.get(ii.__renderTarget);E.bindFramebuffer(Q.READ_FRAMEBUFFER,Lt.__webglFramebuffer),E.bindFramebuffer(Q.DRAW_FRAMEBUFFER,Pn.__webglFramebuffer);for(let Gn=0;Gn<Ne;Gn++)Hn&&(Q.framebufferTextureLayer(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,ae.get(A).__webglTexture,G,tt+Gn),Q.framebufferTextureLayer(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,ae.get(j).__webglTexture,he,Mt+Gn)),Q.blitFramebuffer(Pe,qe,Ae,Ce,He,ot,Ae,Ce,Q.DEPTH_BUFFER_BIT,Q.NEAREST);E.bindFramebuffer(Q.READ_FRAMEBUFFER,null),E.bindFramebuffer(Q.DRAW_FRAMEBUFFER,null)}else if(G!==0||A.isRenderTargetTexture||ae.has(A)){const tn=ae.get(A),ii=ae.get(j);E.bindFramebuffer(Q.READ_FRAMEBUFFER,ue),E.bindFramebuffer(Q.DRAW_FRAMEBUFFER,Z);for(let Lt=0;Lt<Ne;Lt++)Hn?Q.framebufferTextureLayer(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,tn.__webglTexture,G,tt+Lt):Q.framebufferTexture2D(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,tn.__webglTexture,G),Ot?Q.framebufferTextureLayer(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,ii.__webglTexture,he,Mt+Lt):Q.framebufferTexture2D(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,ii.__webglTexture,he),G!==0?Q.blitFramebuffer(Pe,qe,Ae,Ce,He,ot,Ae,Ce,Q.COLOR_BUFFER_BIT,Q.NEAREST):Ot?Q.copyTexSubImage3D(Ve,he,He,ot,Mt+Lt,Pe,qe,Ae,Ce):Q.copyTexSubImage2D(Ve,he,He,ot,Pe,qe,Ae,Ce);E.bindFramebuffer(Q.READ_FRAMEBUFFER,null),E.bindFramebuffer(Q.DRAW_FRAMEBUFFER,null)}else Ot?A.isDataTexture||A.isData3DTexture?Q.texSubImage3D(Ve,he,He,ot,Mt,Ae,Ce,Ne,Dt,_t,ft.data):j.isCompressedArrayTexture?Q.compressedTexSubImage3D(Ve,he,He,ot,Mt,Ae,Ce,Ne,Dt,ft.data):Q.texSubImage3D(Ve,he,He,ot,Mt,Ae,Ce,Ne,Dt,_t,ft):A.isDataTexture?Q.texSubImage2D(Q.TEXTURE_2D,he,He,ot,Ae,Ce,Dt,_t,ft.data):A.isCompressedTexture?Q.compressedTexSubImage2D(Q.TEXTURE_2D,he,He,ot,ft.width,ft.height,Dt,ft.data):Q.texSubImage2D(Q.TEXTURE_2D,he,He,ot,Ae,Ce,Dt,_t,ft);E.pixelStorei(Q.UNPACK_ROW_LENGTH,Mn),E.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,pt),E.pixelStorei(Q.UNPACK_SKIP_PIXELS,mn),E.pixelStorei(Q.UNPACK_SKIP_ROWS,On),E.pixelStorei(Q.UNPACK_SKIP_IMAGES,ni),he===0&&j.generateMipmaps&&Q.generateMipmap(Ve),E.unbindTexture()},this.initRenderTarget=function(A){ae.get(A).__webglFramebuffer===void 0&&me.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?me.setTextureCube(A,0):A.isData3DTexture?me.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?me.setTexture2DArray(A,0):me.setTexture2D(A,0),E.unbindTexture()},this.resetState=function(){H=0,V=0,te=null,E.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=wt._getDrawingBufferColorSpace(e),i.unpackColorSpace=wt._getUnpackColorSpace()}}const iR="/assets/Reckk-RegularItalic-DLM8ilig.ttf",aR="/assets/Reckk-MediumItalic-D_uyfX4p.otf",sR="/assets/CXLMediumItalic-DYSp-DoC.otf",rR=4,oR=5,Ka={fleet:"MAEX",name:"SharpeShark",version:"v1",role:"Executor",didShort:"0xf8a2…6035"};function Jx(a){return["discover","copy","supervise","isolate"][a]??"discover"}function lR(a){return Jx(a)}function cR(a,e,i){const r=e.split(/\s+/),o=[];let c="";for(const u of r){const d=c?`${c} ${u}`:u;a.measureText(d).width<=i?c=d:(c&&o.push(c),c=u)}return c&&o.push(c),o}function uR(a,e){const r=e<520?300:400,o=Math.round(r*a),c=Math.round(o*oR/rR);return{W:o,H:c}}function $x(a,e,i,r,o,c){const u=Math.min(c,r/2,o/2);a.beginPath(),a.moveTo(e+u,i),a.arcTo(e+r,i,e+r,i+o,u),a.arcTo(e+r,i+o,e,i+o,u),a.arcTo(e,i+o,e,i,u),a.arcTo(e,i,e+r,i,u),a.closePath()}function cn(a,e,i,r,o,c,u){$x(a,e,i,r,o,c),a.fillStyle=u,a.fill()}function xn(a,e,i,r,o,c,u,d){$x(a,e,i,r,o,c),a.strokeStyle=u,a.lineWidth=d,a.stroke()}function Yu(a,e,i,r,o,c,u=1){const d=Math.min(1,Math.max(0,u));cn(a,e,i,r,o,c,`rgba(12, 14, 18, ${d})`),xn(a,e,i,r,o,c,"rgba(255,255,255,0.12)",Math.max(1,c*.12))}function qu(a,e,i,r,o,c,u){const d=11*u;a.fillStyle="#c8f5a8",a.font=`700 ${d}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText(c,e+o,i+o+d);const m=22*u,h=e+r-o-m,g=i+o-2*u;return xn(a,h,g,m,m,4*u,"rgba(255,255,255,0.14)",1),a.strokeStyle="rgba(255,255,255,0.55)",a.lineWidth=Math.max(1,1.25*u),a.beginPath(),a.moveTo(h+6*u,g+6*u),a.lineTo(h+m-6*u,g+m-6*u),a.moveTo(h+m-6*u,g+6*u),a.lineTo(h+6*u,g+m-6*u),a.stroke(),i+o+d+10*u}function eS(a,e,i,r,o,c,u,d){const m=28*d,h=(r-o*2)/2,g=10*d;a.font=`700 ${g}px "DM Mono", ui-monospace, monospace`;for(let v=0;v<2;v++){const _=e+o+v*h,S=v===u;a.fillStyle=S?"rgba(255,255,255,0.92)":"rgba(255,255,255,0.38)",a.textAlign="center",a.fillText(c[v],_+h/2,i+14*d),S&&(a.fillStyle="#c8f5a8",a.fillRect(_+4*d,i+m-2*d,h-8*d,2*d))}return a.textAlign="left",a.strokeStyle="rgba(255,255,255,0.08)",a.lineWidth=1,a.beginPath(),a.moveTo(e+o,i+m),a.lineTo(e+r-o,i+m),a.stroke(),i+m+10*d}function fR(a,e,i,r,o,c,u,d,m){const h=10*m,g=22*m;a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${h}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText(c,e+o,i+14*m);const v=`${String(u).padStart(2,"0")} / ${String(d).padStart(2,"0")}`;a.fillStyle="rgba(255,255,255,0.38)",a.font=`700 ${8*m}px "DM Mono", ui-monospace, monospace`,a.textAlign="right",a.fillText(v,e+r-o,i+14*m),a.textAlign="left",a.strokeStyle="rgba(255,255,255,0.08)",a.lineWidth=1,a.beginPath(),a.moveTo(e+o,i+g),a.lineTo(e+r-o,i+g),a.stroke(),a.fillStyle="#c8f5a8";const _=Math.min(72*m,r*.28);return a.fillRect(e+o,i+g-2*m,_,2*m),i+g+10*m}function dR(a,e,i,r,o,c,u){const d=9*u;a.fillStyle="rgba(255,255,255,0.38)",a.font=`700 ${d}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText(o,e,i+d);const m=i+d+6*u,h=34*u;cn(a,e,m,r,h,6*u,"rgba(255,255,255,0.04)"),xn(a,e,m,r,h,6*u,"rgba(255,255,255,0.12)",1),a.fillStyle=c.startsWith("Select")||c==="0x..."?"rgba(255,255,255,0.35)":"rgba(255,255,255,0.88)",a.font=`500 ${11*u}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(c,e+10*u,m+h*.62),a.strokeStyle="rgba(255,255,255,0.4)",a.lineWidth=Math.max(1,1.2*u);const g=e+r-14*u,v=m+h/2;return a.beginPath(),a.moveTo(g-4*u,v-2*u),a.lineTo(g,v+3*u),a.lineTo(g+4*u,v-2*u),a.stroke(),d+6*u+h}function hR(a,e,i,r,o){const c=9*o;a.fillStyle="rgba(255,255,255,0.38)",a.font=`700 ${c}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText("AMOUNT",e,i+c),a.textAlign="right",a.fillStyle="rgba(255,255,255,0.45)",a.fillText("AVAILABLE 5,000.00",e+r,i+c),a.textAlign="left";const u=i+c+6*o,d=44*o;cn(a,e,u,r,d,8*o,"#050508"),xn(a,e,u,r,d,8*o,"rgba(255,255,255,0.1)",1),a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${22*o}px "DM Mono", ui-monospace, monospace`,a.fillText("0.00",e+12*o,u+d*.68);const m=u+d+10*o;return a.strokeStyle="rgba(255,255,255,0.12)",a.lineWidth=Math.max(2,2*o),a.beginPath(),a.moveTo(e,m),a.lineTo(e+r,m),a.stroke(),cn(a,e,m-5*o,14*o,10*o,5*o,"rgba(255,255,255,0.85)"),a.fillStyle="rgba(255,255,255,0.35)",a.font=`500 ${8*o}px "DM Mono", ui-monospace, monospace`,a.fillText("0.01",e,m+14*o),a.textAlign="right",a.fillText("5,000.00",e+r,m+14*o),a.textAlign="left",c+6*o+d+10*o+16*o}function pR(a,e,i,r,o,c){a.strokeStyle="rgba(255,255,255,0.08)",a.lineWidth=1,a.beginPath(),a.moveTo(e,i),a.lineTo(e+r,i),a.stroke();const u=i+10*o,d=36*o,m=72*o;xn(a,e,u,m,d,6*o,"rgba(255,255,255,0.14)",1),a.fillStyle="rgba(255,255,255,0.55)",a.font=`700 ${9*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("CANCEL",e+m/2,u+d*.62);const h=e+m+8*o,g=r-m-8*o;return cn(a,h,u,g,d,6*o,"rgba(255,255,255,0.06)"),xn(a,h,u,g,d,6*o,"rgba(255,255,255,0.1)",1),a.fillStyle="#c8f5a8",a.fillRect(h,u+4*o,3*o,d-8*o),a.fillStyle="rgba(255,255,255,0.55)",a.font=`700 ${8.5*o}px "DM Mono", ui-monospace, monospace`,a.fillText(c,h+g/2+2*o,u+d*.62),a.textAlign="left",10*o+d}function Yp(a,e,i,r,o){const c=44*o;cn(a,e,i,r,c,8*o,"rgba(200,245,168,0.08)"),xn(a,e,i,r,c,8*o,"rgba(200,245,168,0.22)",1);const u=28*o;return cn(a,e+8*o,i+(c-u)/2,u,u,4*o,"rgba(200,245,168,0.14)"),a.fillStyle="#c8f5a8",a.font=`700 ${10*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("SS",e+8*o+u/2,i+c*.58),a.textAlign="left",a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${11*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(Ka.name,e+8*o+u+8*o,i+16*o),a.fillStyle="rgba(255,255,255,0.42)",a.font=`500 ${9*o}px "DM Mono", ui-monospace, monospace`,a.fillText(`${Ka.role} · ${Ka.didShort}`,e+8*o+u+8*o,i+32*o),c}function mR(a,e,i,r,o){const c=Math.min(r*190/316,r*.58),u=12*o,d=8*o,m=a.createLinearGradient(e,i+c,e+r,i);m.addColorStop(0,"#050508"),m.addColorStop(1,"rgba(200,245,168,0.14)"),cn(a,e,i,r,c,d,m),xn(a,e,i,r,c,d,"rgba(255,255,255,0.14)",Math.max(1,1.25*o)),xn(a,e+2.5*o,i+2.5*o,r-5*o,c-5*o,d-1.5*o,"rgba(200,245,168,0.35)",Math.max(1,o)),a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${11*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(Ka.fleet,e+u,i+u+10*o),a.fillStyle="#c8f5a8",a.beginPath(),a.arc(e+r-u-7*o,i+u+5*o,6*o,0,Math.PI*2),a.fill(),a.fillStyle="#0a0a0c",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("✓",e+r-u-7*o,i+u+8*o),a.textAlign="left";const h=i+c-u-2*o;a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${10*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(Ka.name.toUpperCase(),e+u,h-24*o),a.fillStyle="rgba(255,255,255,0.45)",a.font=`500 ${9*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(`${Ka.role} · ${Ka.version}`,e+u,h-10*o),a.fillStyle="#c8f5a8",a.font=`700 ${10*o}px "DM Mono", ui-monospace, monospace`,a.fillText(Ka.didShort,e+u,h);const g=28*o;return cn(a,e+r-u-g,i+c-u-g,g,g,4*o,"rgba(200,245,168,0.14)"),xn(a,e+r-u-g,i+c-u-g,g,g,4*o,"rgba(200,245,168,0.28)",1),a.fillStyle="#c8f5a8",a.font=`700 ${11*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("SS",e+r-u-g/2,i+c-u-g*.35),a.textAlign="left",c}function gR(a,e,i,r,o){const c=Math.min(r*190/316,r*.58),u=10*o,d=8*o,m=a.createLinearGradient(e,i,e+r,i+c);m.addColorStop(0,"#0a0c10"),m.addColorStop(.55,"#12161c"),m.addColorStop(1,"rgba(200,245,168,0.18)"),cn(a,e,i,r,c,d,m),xn(a,e,i,r,c,d,"rgba(255,255,255,0.14)",Math.max(1,1.25*o)),a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${10*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText("Morpheum.",e+u,i+u+10*o),a.strokeStyle="rgba(255,255,255,0.45)",a.lineWidth=Math.max(1,o);for(let h=0;h<3;h++){const g=5*o+h*3.5*o,v=4*o+h*2.5*o;a.beginPath(),a.ellipse(e+r-u-4*o,i+u+8*o,g,v,-.4,-.2,1.2),a.stroke()}return a.fillStyle="rgba(255,255,255,0.88)",a.font=`700 ${9*o}px "DM Mono", ui-monospace, monospace`,a.fillText("5678  ····  ····  7890",e+u,i+c*.52),a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${8*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(Ka.name.toUpperCase(),e+u,i+c-u-2*o),a.textAlign="right",a.fillStyle="rgba(255,255,255,0.55)",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.fillText("12/28",e+r-u,i+c-u-2*o),a.textAlign="left",c}function _R(a,e,i,r,o,c=25){const u=9*o;a.fillStyle="rgba(255,255,255,0.38)",a.font=`700 ${u}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText("MIRROR SIZE",e,i+u),a.textAlign="right",a.fillStyle="#c8f5a8",a.fillText(`${c}%`,e+r,i+u),a.textAlign="left";const d=i+u+12*o,m=Math.max(4,5*o);cn(a,e,d,r,m,m/2,"rgba(255,255,255,0.1)");const h=Math.max(m,r*c/100);cn(a,e,d,h,m,m/2,"rgba(200,245,168,0.75)");const g=7*o;return a.fillStyle="#f4f6f0",a.beginPath(),a.arc(e+h,d+m/2,g,0,Math.PI*2),a.fill(),a.strokeStyle="rgba(200,245,168,0.55)",a.lineWidth=Math.max(1,o),a.stroke(),a.fillStyle="rgba(255,255,255,0.35)",a.font=`500 ${7.5*o}px "DM Mono", ui-monospace, monospace`,a.fillText("5%",e,d+m+14*o),a.textAlign="right",a.fillText("100%",e+r,d+m+14*o),a.textAlign="left",u+12*o+m+16*o}function vR(a,e,i,r,o){const c=9*o;a.fillStyle="rgba(255,255,255,0.38)",a.font=`700 ${c}px "DM Mono", ui-monospace, monospace`,a.fillText("AGENTIC PROTECTION",e,i+c);const u=5*o,d=(r-u*2)/3,m=52*o,h=i+c+8*o;return[{label:"Manual",tone:"rgba(255,255,255,0.12)",active:!1},{label:"Guarded",tone:"rgba(234,179,8,0.55)",active:!0},{label:"High",tone:"rgba(255,71,87,0.35)",active:!1}].forEach((v,_)=>{const S=e+_*(d+u);cn(a,S,h,d,m,6*o,"rgba(255,255,255,0.04)"),xn(a,S,h,d,m,6*o,v.active?v.tone:"rgba(255,255,255,0.1)",v.active?Math.max(1.5,1.5*o):1),v.active&&(a.fillStyle="rgba(234,179,8,0.12)",a.fillRect(S+1,h+1,3*o,m-2)),a.fillStyle=v.active?"rgba(255,255,255,0.92)":"rgba(255,255,255,0.55)",a.font=`700 ${9*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.textAlign="center",a.fillText(v.label,S+d/2,h+18*o),a.fillStyle="rgba(255,255,255,0.38)",a.font=`400 ${7*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`;const b=v.label==="Guarded"?"safe default":v.label==="Manual"?"signals":"silent";a.fillText(b,S+d/2,h+34*o)}),a.textAlign="left",c+8*o+m}function xR(a,e,i,r,o,c="SLIDE TO START COPY"){const u=40*o;cn(a,e,i,r,u,8*o,"rgba(255,255,255,0.05)"),xn(a,e,i,r,u,8*o,"rgba(255,255,255,0.12)",1);const d=.22,m=4*o,h=u-m*2,g=r-m*2-h;return cn(a,e+m,i+m,h+g*d,h,h/2,"rgba(200,245,168,0.18)"),cn(a,e+m,i+m,h,h,h/2,"rgba(200,245,168,0.85)"),a.fillStyle="#0a0a0c",a.font=`700 ${12*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("›",e+m+h/2,i+u*.62),a.fillStyle="rgba(255,255,255,0.5)",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.fillText(c,e+r/2+h*.15,i+u*.62),a.textAlign="left",u}const Il=2,wo={sharpe:"2.41",roi:"+38.2%",riskScore:"72",reputation:"84",receipts:[{action:"Close BTC long",pnl:"+103.09"},{action:"Open ETH long",pnl:null},{action:"Close SOL short",pnl:"+41.20"}]};function kv(a,e,i,r,o,c){const u=6*c,d=o.length,m=(r-u*(d-1))/d,h=36*c;return o.forEach(([g,v],_)=>{const S=e+_*(m+u);cn(a,S,i,m,h,6*c,"rgba(255,255,255,0.04)"),xn(a,S,i,m,h,6*c,"rgba(255,255,255,0.1)",1),a.fillStyle="rgba(255,255,255,0.4)",a.font=`700 ${7*c}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText(g,S+m/2,i+12*c),a.fillStyle="#c8f5a8",a.font=`700 ${11*c}px "DM Mono", ui-monospace, monospace`,a.fillText(v,S+m/2,i+26*c)}),a.textAlign="left",h}function SR(a,e,i,r,o){const c=[{label:"Verified",brand:!0},{label:"Receipt"},{label:"Risk",value:wo.riskScore},{label:"Rep",value:wo.reputation}],u=4*o,d=22*o,m=5*o;let h=e;a.font=`700 ${6.5*o}px "DM Mono", ui-monospace, monospace`;for(const g of c){const v=a.measureText(g.label.toUpperCase()).width,_=g.value?a.measureText(g.value).width+3*o:0,S=m*2+6*o+v+_;if(h+S>e+r)break;const b=g.brand?"rgba(200,245,168,0.12)":"rgba(255,255,255,0.04)",R=g.brand?"rgba(200,245,168,0.35)":"rgba(255,255,255,0.12)";cn(a,h,i,S,d,4*o,b),xn(a,h,i,S,d,4*o,R,1);const y=2*o;a.beginPath(),a.arc(h+m+y,i+d/2,y,0,Math.PI*2),a.fillStyle=g.brand?"#c8f5a8":"rgba(255,255,255,0.35)",a.fill();let x=h+m+y*2+4*o;a.fillStyle=g.brand?"#c8f5a8":"rgba(255,255,255,0.55)",a.textAlign="left",a.fillText(g.label.toUpperCase(),x,i+d*.68),x+=v+3*o,g.value&&(a.fillStyle="rgba(255,255,255,0.92)",a.fillText(g.value,x,i+d*.68)),h+=S+u}return a.textAlign="left",d}function MR(a,e,i,r,o){const c=wo.receipts,u=22*o,d=14*o+c.length*u;return cn(a,e,i,r,d,6*o,"rgba(255,255,255,0.03)"),xn(a,e,i,r,d,6*o,"rgba(255,255,255,0.08)",1),a.fillStyle="rgba(255,255,255,0.4)",a.font=`700 ${6.5*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText("RECEIPTS",e+8*o,i+10*o),c.forEach((m,h)=>{const g=i+14*o+h*u;a.fillStyle="rgba(255,255,255,0.72)",a.font=`500 ${8*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText(m.action,e+8*o,g+u*.62),a.textAlign="right",m.pnl?(a.fillStyle="#c8f5a8",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.fillText(m.pnl,e+r-8*o,g+u*.62)):(a.fillStyle="rgba(255,255,255,0.35)",a.fillText("—",e+r-8*o,g+u*.62))}),a.textAlign="left",d}function yR(a,e,i,r,o){const c=Math.min(r*150/316,r*.48),u=12*o,d=8*o,m=a.createLinearGradient(e,i+c,e+r,i);m.addColorStop(0,"#050508"),m.addColorStop(1,"rgba(200,245,168,0.14)"),cn(a,e,i,r,c,d,m),xn(a,e,i,r,c,d,"rgba(255,255,255,0.14)",Math.max(1,1.25*o)),xn(a,e+2.5*o,i+2.5*o,r-5*o,c-5*o,d-1.5*o,"rgba(200,245,168,0.35)",Math.max(1,o)),a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${11*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText("MAEX",e+u,i+u+10*o);const h=40*o,g=16*o,v=e+r-u-h,_=i+u-1*o;return cn(a,v,_,h,g,8*o,"rgba(200,245,168,0.14)"),xn(a,v,_,h,g,8*o,"rgba(200,245,168,0.28)",1),a.fillStyle="#c8f5a8",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("LIVE",v+h/2,_+11*o),a.textAlign="left",a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${14*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText("MAEX Core",e+u,i+u+36*o),a.fillStyle="rgba(255,255,255,0.45)",a.font=`500 ${9*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText("Curated agent basket · 4 agents",e+u,i+u+52*o),a.fillStyle="#c8f5a8",a.font=`700 ${18*o}px "DM Mono", ui-monospace, monospace`,a.fillText("+12.8%",e+u,i+c-u-4*o),a.fillStyle="rgba(255,255,255,0.4)",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="right",a.fillText("30D RETURN",e+r-u,i+c-u-8*o),a.textAlign="left",c}function ER(a,e,i,r,o){const c=[["SharpeShark","42%","+38%"],["SortinoSloth","33%","+21%"],["FundingFox","25%","−4%"]],u=26*o,d=c.length*u;return cn(a,e,i,r,d,6*o,"rgba(255,255,255,0.03)"),xn(a,e,i,r,d,6*o,"rgba(255,255,255,0.08)",1),c.forEach(([m,h,g],v)=>{const _=i+v*u;v>0&&(a.strokeStyle="rgba(255,255,255,0.06)",a.lineWidth=1,a.beginPath(),a.moveTo(e+8*o,_),a.lineTo(e+r-8*o,_),a.stroke()),a.fillStyle="rgba(255,255,255,0.85)",a.font=`600 ${9*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.textAlign="left",a.fillText(m,e+10*o,_+u*.62),a.fillStyle="rgba(255,255,255,0.4)",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText(h,e+r*.58,_+u*.62);const S=!g.startsWith("−")&&!g.startsWith("-");a.fillStyle=S?"#c8f5a8":"rgba(255,120,120,0.85)",a.textAlign="right",a.fillText(g,e+r-10*o,_+u*.62)}),a.textAlign="left",d}function bR(a,e,i,r,o,c=0,u=1){const d=r/300,m=12*d,h=10*d,g=(c%Il+Il)%Il,v=[{header:"AGENT PROOF",segment:"AGENTS"},{header:"INDEX PROOF",segment:"INDICES"}][g];Yu(a,e,i,r,o,h,u);let _=qu(a,e,i,r,m,v.header,d);_=fR(a,e,_,r,m,v.segment,g+1,Il,d);const S=i+o-m;if(g===0){_+=Yp(a,e+m,_,r-m*2,d)+8*d,_+22*d<=S&&(_+=SR(a,e+m,_,r-m*2,d)+8*d);const R=[["SHARPE",wo.sharpe],["ROI",wo.roi],["RISK",wo.riskScore]];_+36*d<=S&&(_+=kv(a,e+m,_,r-m*2,R,d)+8*d),_+70*d<=S&&MR(a,e+m,_,r-m*2,d);return}_+=yR(a,e+m,_,r-m*2,d)+8*d,_+78*d<=S&&(_+=ER(a,e+m,_,r-m*2,d)+8*d);const b=[["RETURN","+12.8%"],["RISK","58"],["AGENTS","4"]];_+36*d<=S&&kv(a,e+m,_,r-m*2,b,d)}function TR(a,e,i,r,o,c=0,u=1){const d=r/300,m=12*d,h=10*d;Yu(a,e,i,r,o,h,u);let g=qu(a,e,i,r,m,"COPY TRADE",d);g=eS(a,e,g,r,m,["MIRROR","BUCKET"],0,d);const v=40*d,_=i+o-m-v,S=_-10*d;if(c%2===0){const R=6*d,y=r-m*2;let x=(y-R)/2,F=Math.min(x*190/316,x*.58);const I=Math.max(64*d,S-g-28*d);F>I&&(x=x*(I/F),F=I);const w=d*(x/((y-R)/2)),O=e+m+(y-(x*2+R))/2;gR(a,O,g,x,w),mR(a,O+x+R,g,x,w),g+=F+10*d;const L=[["SPREAD","0.02%"],["FUNDING","8h"],["SIZE","25%"]],z=5*d,T=(r-m*2-z*2)/3,N=32*d;g+N<=S&&(L.forEach(([q,X],K)=>{const ce=e+m+K*(T+z);cn(a,ce,g,T,N,6*d,"rgba(255,255,255,0.04)"),xn(a,ce,g,T,N,6*d,"rgba(255,255,255,0.1)",1),a.fillStyle="rgba(255,255,255,0.4)",a.font=`700 ${6.5*d}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText(q,ce+T/2,g+11*d),a.fillStyle="#c8f5a8",a.font=`700 ${10*d}px "DM Mono", ui-monospace, monospace`,a.fillText(X,ce+T/2,g+24*d)}),a.textAlign="left")}else g+=Yp(a,e+m,g,r-m*2,d)+10*d,g+36*d<S&&(g+=_R(a,e+m,g,r-m*2,d,25)+10*d),g+50*d<S&&vR(a,e+m,g,r-m*2,d);xR(a,e+m,_,r-m*2,d)}const AR=2,RR=[{agent:"SharpeShark",timeLabel:"07-08, 15:42",status:"want-to",statusLabel:"Want to",action:"Open ETH long · 1.2 ETH",showActions:!0},{agent:"NightOwl",timeLabel:"07-08, 15:31",status:"rejected",statusLabel:"Rejected",action:"Open BTC short · 0.04 BTC"},{agent:"SharpeShark",timeLabel:"07-08, 15:25",status:"short",statusLabel:"Close Long",action:"BTCUSDT · 0.04 BTC",pnl:{text:"+103.09",tone:"long"}},{agent:"FluxRunner",timeLabel:"07-08, 14:10",status:"long",statusLabel:"Open Long",action:"ETHUSDT · 0.8 ETH"},{agent:"NightOwl",timeLabel:"07-07, 09:42",status:"short",statusLabel:"Open Short",action:"SOLUSDT · 12 SOL"}];function CR(a){switch(a){case"want-to":return{fg:"rgba(200,245,168,0.95)",bg:"rgba(184,245,168,0.12)"};case"rejected":return{fg:"#ff4757",bg:"rgba(255,71,87,0.12)"};case"long":return{fg:"#00ff88",bg:"rgba(0,255,136,0.12)"};case"short":return{fg:"#ff4757",bg:"rgba(255,71,87,0.12)"}}}function wR(a,e,i,r,o,c=1){const u=r/300,d=12*u,m=10*u;Yu(a,e,i,r,o,m,c);let h=qu(a,e,i,r,d,"ACTIVITY LOG",u);const g=i+o-d,v=58*u,_=10*u,S=6*u,b=e+d+v+S+_+S,R=e+r-d-b,y=e+d+v+S+_/2,x=RR,F=4*u;x.forEach((I,w)=>{if(h>=g-8*u)return;const O=w===0,L=w===x.length-1,z=CR(I.status),T=8*u,N=6*u,q=7*u,X=8*u,K=I.showActions?22*u:0,ce=I.showActions?5*u:0,Z=Math.max(T+2*u+N,q+4*u+X)+ce+K+F;if(h+Math.min(Z,28*u)>g)return;a.textAlign="right",a.fillStyle="rgba(255,255,255,0.88)",a.font=`500 ${T}px "DM Mono", ui-monospace, monospace`,a.fillText(I.agent,e+d+v,h+T),a.fillStyle="rgba(255,255,255,0.38)",a.font=`500 ${N}px "DM Mono", ui-monospace, monospace`,a.fillText(I.timeLabel,e+d+v,h+T+2*u+N),a.textAlign="left",L||(a.strokeStyle="rgba(255,255,255,0.14)",a.lineWidth=Math.max(1,u),a.beginPath(),a.moveTo(y,h+6*u),a.lineTo(y,h+Z),a.stroke());const H=2.4*u;a.beginPath(),a.arc(y,h+5*u,H,0,Math.PI*2),a.fillStyle=O?"#c8f5a8":"rgba(255,255,255,0.32)",a.fill(),O&&(a.beginPath(),a.arc(y,h+5*u,H+2.2*u,0,Math.PI*2),a.fillStyle="rgba(200,245,168,0.16)",a.fill());const V=4*u,te=2*u;a.font=`700 ${q}px "DM Mono", ui-monospace, monospace`;const ge=I.statusLabel.toUpperCase(),Se=a.measureText(ge).width+V*2,U=q+te*2;cn(a,b,h,Se,U,3*u,z.bg),a.fillStyle=z.fg,a.fillText(ge,b+V,h+q+te*.35),a.fillStyle="rgba(255,255,255,0.55)",a.font=`400 ${X}px "DM Mono", ui-monospace, monospace`;const J=h+U+3*u+X;let Ee=I.action;if(I.pnl){const Re=`${I.action} · `;a.fillText(Re,b,J);const De=a.measureText(Re).width;a.fillStyle=I.pnl.tone==="long"?"#00ff88":"#ff4757",a.font=`700 ${X}px "DM Mono", ui-monospace, monospace`,a.fillText(I.pnl.text,b+De,J)}else{for(;Ee.length>8&&a.measureText(Ee).width>R;)Ee=`${Ee.slice(0,-2)}…`;a.fillText(Ee,b,J)}if(I.showActions&&h+U+3*u+X+ce+K<=g){const Re=h+U+3*u+X+ce,De=(R-5*u)/2;xn(a,b,Re,De,K,3*u,"rgba(255,255,255,0.18)",1),a.fillStyle="rgba(255,255,255,0.72)",a.font=`700 ${7*u}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("REJECT",b+De/2,Re+K*.68),cn(a,b+De+5*u,Re,De,K,3*u,"rgba(184,245,168,0.88)"),a.fillStyle="rgba(8,14,10,0.92)",a.fillText("APPROVE",b+De+5*u+De/2,Re+K*.68),a.textAlign="left"}h+=Z})}function DR(a,e,i,r,o,c=1){const u=r/300,d=12*u,m=10*u;Yu(a,e,i,r,o,m,c);let h=qu(a,e,i,r,d,"FUND BUCKET",u);h=eS(a,e,h,r,d,["FUND BUCKET","CREATE BUCKET"],0,u),h+=Yp(a,e+d,h,r-d*2,u)+8*u,h+=dR(a,e+d,h,r-d*2,"FROM","Select source bucket",u)+8*u;const g=10*u+36*u;i+o-d-g-h-8*u>70*u&&(h+=hR(a,e+d,h,r-d*2,u)+6*u),pR(a,e+d,i+o-d-g,r-d*2,u,"COMPLETE REQUIRED FIELDS")}function tS(a,e,i,r,o,c,u=0,d=1){switch(e){case"discover":bR(a,i,r,o,c,u,d);break;case"copy":TR(a,i,r,o,c,u,d);break;case"supervise":wR(a,i,r,o,c,d);break;case"isolate":DR(a,i,r,o,c,d);break}}function LR(a,e,i,r,o=0,c=1){a.clearRect(0,0,i,r),tS(a,e,0,0,i,r,o,c)}function NR(a,e,i,r,o,c=.8,u=1){const{W:d,H:m}=uR(i,r),h=document.createElement("canvas");h.width=d,h.height=m;const g=h.getContext("2d"),v=Math.min(1,Math.max(0,c)),_=g.createLinearGradient(0,0,0,m);_.addColorStop(0,`rgba(8, 10, 14, ${v})`),_.addColorStop(.55,`rgba(5, 7, 13, ${v})`),_.addColorStop(1,`rgba(3, 4, 6, ${v})`),g.fillStyle=_,g.fillRect(0,0,d,m);const S=Math.round(22*i),b=Math.round(.05*m),R=Math.round(.045*m),y=d-S*2;let x=b;const F=Math.min(34*i,d*.095);g.fillStyle="rgba(255,255,255,0.94)",g.font=`normal 400 ${F}px ${o}`,g.textBaseline="alphabetic",g.shadowColor="rgba(10, 14, 23, 0.55)",g.shadowBlur=Math.max(8,12*i),g.shadowOffsetX=0,g.shadowOffsetY=Math.max(1,1.5*i),g.fillText(a.verb,S,x+F*.85),g.shadowColor="transparent",g.shadowBlur=0,g.shadowOffsetY=0,x+=Math.round(.09*m);const I=Math.min(13*i,d*.036);g.fillStyle="rgba(255,255,255,0.94)",g.font=`400 ${I}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`;const w=cR(g,a.description,y),O=x+I;g.shadowColor="rgba(10, 14, 23, 0.45)",g.shadowBlur=Math.max(4,6*i),g.shadowOffsetY=Math.max(.5,1*i),g.fillText(w[0]??a.description,S,O),g.shadowColor="transparent",g.shadowBlur=0,g.shadowOffsetY=0,x=Math.round(O+20*i);const L=S,z=x,T=y,N=Math.max(80*i,m-x-R);tS(g,lR(e),L,z,T,N,0,u);const q=new zx(h);return q.colorSpace=ei,q.minFilter=Hs,q.generateMipmaps=!0,q}const Dp=["M41.9213 3.43614C43.0393 3.43614 43.8716 3.77154 44.4182 4.44235C44.9647 5.138 45.1262 6.1939 44.9026 7.61005L41.884 26.8026C41.7846 27.4982 41.8467 28.0075 42.0703 28.3305C42.2691 28.6784 42.6542 28.8771 43.2256 28.9268L43.8591 28.9641L43.8219 29.2622L36.7784 30.492L36.4803 30.492L40.1324 7.46098C40.3064 6.26843 40.0206 5.67216 39.2753 5.67216C38.9523 5.67216 38.6045 5.75912 38.2318 5.93303C37.8343 6.10694 37.3995 6.44235 36.9275 6.93924L36.7411 6.79017C38.0828 4.55415 39.8095 3.43614 41.9213 3.43614Z","M29.9958 3.43614C31.1138 3.43614 31.9461 3.77154 32.4927 4.44235C33.0393 5.138 33.2007 6.1939 32.9771 7.61005L29.9585 26.8026C29.8591 27.4982 29.9212 28.0075 30.1449 28.3305C30.3436 28.6784 30.7287 28.8771 31.3001 28.9268L31.9337 28.9641L31.8964 29.2622L24.8529 30.492L24.5548 30.492L28.207 7.46098C28.3809 6.26843 28.0952 5.67216 27.3498 5.67216C27.0268 5.67216 26.679 5.75912 26.3063 5.93303C25.9088 6.10694 25.474 6.44235 25.002 6.93924L24.8157 6.79017C26.1573 4.55415 27.884 3.43614 29.9958 3.43614Z","M18.0703 3.43614C19.1883 3.43614 20.0206 3.77154 20.5672 4.44235C21.1138 5.138 21.2753 6.1939 21.0517 7.61005L18.033 26.8026C17.9337 27.4982 17.9958 28.0075 18.2194 28.3305C18.4181 28.6784 18.8032 28.8771 19.3747 28.9268L20.0082 28.9641L19.9709 29.2622L12.9275 30.492L12.6293 30.492L16.2815 7.46098C16.4554 6.26843 16.1697 5.67216 15.4243 5.67216C15.1014 5.67216 14.7535 5.75912 14.3809 5.93303C13.9834 6.10694 13.5486 6.44235 13.0765 6.93924L12.8902 6.79017C14.2318 4.55415 15.9585 3.43614 18.0703 3.43614Z","M45.5631 10.8482C46.0378 11.9189 46.0912 12.9315 45.7231 13.8861C45.3095 14.8231 44.3453 15.4956 42.8305 15.9035L16.576 22.853C15.2325 23.2226 14.7771 24.0651 15.2096 25.3806L15.7698 26.7714L13.8491 27.2839L9.924 22.1284L9.25377 20.6168L40.8242 12.2711C41.6674 12.048 42.2133 11.7494 42.4619 11.3754C42.6651 10.9838 42.669 10.5676 42.4735 10.1267C42.3199 9.78031 42.1016 9.5003 41.8185 9.2867C41.4899 9.05556 41.0511 8.87329 40.5021 8.7399L41.5734 7.5866C42.563 7.86379 43.3915 8.28774 44.0591 8.85845C44.7127 9.39767 45.214 10.0609 45.5631 10.8482Z"],UR="0 0 58 35",OR=58,PR=35;function IR({fill:a="#C8F5A8",width:e=58,height:i=35,padding:r=10,"aria-hidden":o=!0,...c}){const u=[-r,-r,OR+r*2,PR+r*2].join(" ");return D.jsx("svg",{width:e,height:i,viewBox:u,fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":o,...c,children:Dp.map(d=>D.jsx("path",{d,fill:a},d.slice(0,24)))})}const FR={sm:{width:30,height:18},md:{width:30,height:18},lg:{width:44,height:27},hero:{width:76,height:46}};function qp({size:a="md",showWordmark:e=!0,className:i="",brandName:r="Morpheum"}){const o=FR[a];return D.jsxs("span",{className:`brand-mark brand-mark--${a} ${i}`.trim(),children:[D.jsx(IR,{className:"brand-mark__icon",width:o.width,height:o.height,padding:0,fill:"var(--terminal-brand)"}),e?D.jsx("span",{className:"brand-mark__word",children:r}):null]})}const Xv="!@#$%^&*()_+{}[]|;:,.<>?/0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",BR=50,Lu=500,Uh=100,Wv=168;function zR(){return typeof window>"u"?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches}function HR(){return Xv[Math.floor(Math.random()*Xv.length)]??"?"}function Yv(a){return Array.from(a).map(e=>{const i=Math.random()*(Lu-Uh),r=Uh+Math.random()*(Lu-i-Uh),o=Math.min(Lu,i+r);return{original:e,start:i,end:o}})}function GR(a){return Math.min(1,Math.max(0,a))}function VR({text:a,className:e,scrollerRef:i}){const r=ke.useRef(null),o=ke.useRef(Yv(a)),c=zR();return ke.useEffect(()=>{o.current=Yv(a)},[a]),ke.useEffect(()=>{if(c)return;const u=r.current;if(!u)return;let d=0,m=!0,h=-1;const g=()=>{const _=i.current;if(!_)return;const S=Math.max(0,-_.getBoundingClientRect().top),b=Math.min(Lu,Math.max(0,S-BR));if(b===h&&h>=0)return;h=b;const R=o.current,y=u.querySelectorAll(".scroll-dissolve__glyph");let x=R.length>0;for(let F=0;F<R.length;F++){const I=R[F],w=y[F];if(!w)continue;const O=Math.max(.001,I.end-I.start),L=GR((b-I.start)/O);if(L<1&&(x=!1),L<=0){w.textContent=I.original===" "?" ":I.original,w.style.transform="translateY(0)",w.style.opacity="1",w.style.visibility="visible";continue}if(L>=1){w.textContent=I.original===" "?" ":I.original,w.style.transform=`translateY(${-Wv}px)`,w.style.opacity="0",w.style.visibility="hidden";continue}w.textContent=HR(),w.style.transform=`translateY(${-L*Wv}px)`,w.style.opacity=String(1-L),w.style.visibility="visible"}u.style.visibility=x?"hidden":"visible",u.style.display=x?"none":"block"},v=()=>{m&&(g(),d=requestAnimationFrame(v))};return d=requestAnimationFrame(v),()=>{m=!1,cancelAnimationFrame(d)}},[c,i,a]),c?D.jsx("p",{className:e,"aria-label":a,children:a}):D.jsx("p",{ref:r,className:["scroll-dissolve",e].filter(Boolean).join(" "),"aria-label":a,children:Array.from(a).map((u,d)=>D.jsx("span",{className:"scroll-dissolve__glyph","aria-hidden":!0,children:u===" "?" ":u},`${d}-${u}`))})}const kR="Enter the agentic economy →",Fl=zh.verbs.map((a,e)=>{const i=[{top:"#c8f5a8",mid:"#0a1410",bot:"#1a3d2e"},{top:"#9ee089",mid:"#060e18",bot:"#1e3a52"},{top:"#f0e6a0",mid:"#0c1008",bot:"#2a3820"},{top:"#7fd9a8",mid:"#080810",bot:"#243048"}];return{verb:a.verb,description:a.description,mood:i[e]??i[0]}}),fn=Fl.length,Za=2.95,Hl=6.9,zu=32,nS=4,iS=5,Lp=2.05,XR=1,WR=Za*.55,aS=.28,sS=.35,YR=aS+sS,Oh=.85,qv=300,qR=35,jv=qR/60*1e3,jR=.1;function rS(a){return a<520?{mode:"mobile",canvasW:1280,canvasH:320,fontPx:112,planeBaseW:4.55,frustumFill:.9}:a<900?{mode:"tablet",canvasW:1600,canvasH:360,fontPx:132,planeBaseW:5.25,frustumFill:.94}:{mode:"desktop",canvasW:1920,canvasH:420,fontPx:152,planeBaseW:6.1,frustumFill:.96}}const ZR=1.35,KR=.72,QR=.62,JR=.2,$R=14,e3=.42,t3=128,n3=12,i3=.002,a3=.0011,Zv=.12,s3=.88,oS=4,r3=32,o3=40,l3=oS-1,Kv=50,c3=-10,Qv=28,u3="/Morm_IntroAnimation_1.mp4",f3=10,lS=[0,2,4,6,8,10],d3=[{in:2,out:2.2},{in:1.5,out:2.4},{in:2.3,out:1.7},{in:1.8,out:2.1},{in:2.1,out:2.6}];function h3(a,e){const i=d3[a]??{in:2,out:2},r=Ht.clamp(e,0,1);return r<.5?.5*Math.pow(2*r,i.in):1-.5*Math.pow(2*(1-r),i.out)}function p3(a,e,i,r,o){const c=Math.max(1,fn-1),u=[0,e,e+1/c*i,e+2/c*i,r,Math.max(r+.001,o)],d=lS,m=u.length-1;if(a<=u[0])return d[0];if(a>=u[m])return d[m];let h=0;for(;h<m-1&&a>=u[h+1];)h+=1;const g=u[h],v=u[h+1],_=v>g?Ht.clamp((a-g)/(v-g),0,1):1;return Ht.lerp(d[h],d[h+1],h3(h,_))}function Jv(a,e){const i=Number.isFinite(a.duration)&&a.duration>0?a.duration:f3,r=Ht.clamp(e,0,Math.max(0,i-.04));if(!(Math.abs(a.currentTime-r)<1/48))try{a.currentTime=r}catch{}}const m3=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,g3=`
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
`,_3=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,v3=`
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
`,x3='"Reckk Heading", Georgia, "Times New Roman", serif',cS="Morpheum Wordmark",Xl=`"${cS}"`,S3=[{t:0,c:"#e8ffe0"},{t:.45,c:"#c8f5a8"},{t:1,c:"#f0e6a0"}];async function M3(){if(typeof document>"u"||!document.fonts)return!1;try{const a=new FontFace(cS,`url(${sR})`,{weight:"normal",style:"normal"});document.fonts.add(await a.load()),await document.fonts.load(`normal 152px ${Xl}`);const e=document.fonts.check(`normal 152px ${Xl}`);return e||console.error("[FlowIntro] Morpheum Wordmark failed to bind — title will not use Reckk fallback"),e}catch(a){return console.error("[FlowIntro] Morpheum Wordmark load failed",a),!1}}async function y3(){if(!(typeof document>"u"||!document.fonts))try{await M3();const a=new FontFace("Reckk Title",`url(${aR})`,{weight:"normal",style:"normal"});document.fonts.add(await a.load());const e=new FontFace("Reckk Heading",`url(${iR})`,{weight:"normal",style:"normal"});document.fonts.add(await e.load()),await document.fonts.ready,await document.fonts.load(`normal 152px ${Xl}`),await document.fonts.load('normal 64px "Reckk Heading"'),await document.fonts.load('normal 124px "Reckk Title"')}catch{}}const gr="flow-intro-hide-chrome",E3=72,b3=120,Ph=80;function T3(a){return a<=E3}const A3=280;function vr(a){const e=document.documentElement,i=e.style.scrollBehavior;e.style.scrollBehavior="auto",window.scrollTo(0,Math.max(0,a)),e.style.scrollBehavior=i}function Ih(){const a=document.getElementById("hero");if(!a)return;const e=a.getBoundingClientRect().top+window.scrollY;vr(e)}function Mr(a){const e=Ht.clamp(a,0,1);return e*e*e*(e*(e*6-15)+10)}function To(a){const e=Math.max(1,a),i=Math.max(1,fn*e*XR),r=Math.max(1,i/Math.max(1,fn-1));return{cardPx:i,titlePx:r,totalPx:i+r}}const R3=900,C3=1100,w3=1300,D3=1500,L3=6,N3=36,U3=50,O3=.5,P3=1024,I3=.75,uS=.8;function jp(a){return a>=P3}function F3(a){return jp(a)?R3:C3}function B3(a){return jp(a)?w3:D3}function fS(a){return Math.max(2,Math.max(1,a)*.004)}function z3(a,e){const{cardPx:i,titlePx:r}=To(e),o=Math.max(1,fn-1),c=Ht.clamp(Math.round(a),0,fn-1);return r+c/o*i}function H3(a){return a.offsetTop}function G3(a,e,i){return a.offsetTop+z3(e,i)}function Fh(){const a=document.getElementById("hero");return a?a.getBoundingClientRect().top+window.scrollY:null}function V3(a){const e=fn-1;return Ht.clamp(Math.round(a),0,e)}function Bh(a,e,i,r){const o=fS(r);return a<e-o?{kind:"title"}:{kind:"card",idx:V3(i)}}function k3(a,e,i,r,o,c,u){if(o)return!1;const d=i/Math.max(1,fn-1),m=r+d*O3;return!(a>m||c<u*.5)}function Zp(a,e){const i=a/Math.max(1,e),r=zu*Math.PI/180,o=2*Hl*Math.tan(r/2),c=o*i,u=Lp*nS/iS,d=.992,m=d*o/Lp,h=d*c/u;return Ht.clamp(Math.min(m,h),.52,2.35)}function X3(a,e,i=uS){const r=Zp(a,e);return(jp(a)?r*I3:r)*i}function $v(a,e,i){const r=rS(a),o=Zp(a,e),c=a/Math.max(1,e),u=zu*Math.PI/180,m=2*Hl*Math.tan(u/2)*c,h=r.frustumFill*m/Math.max(1e-6,o),g=Math.min(r.planeBaseW,h);return{w:g,h:g*i}}function W3(a,e){const i=a/Math.max(1,fn-1),r=Math.min(Math.max(1,e*.38),Math.max(1,i*.34));return i<=r+.001?0:1-r/i}function Y3(a,e){const i=Math.min(Math.max(1,e*.38),Math.max(1,a*.34));return a<=i+.001?0:1-i/a}function q3(a,e){const i=Ht.clamp(e,0,.999);if(a<i)return{titleOp:1,lastCardOp:0};const r=Math.max(1e-6,1-i),o=Mr(Ht.clamp((a-i)/r,0,1));return{titleOp:1-o,lastCardOp:o}}function j3(a,e,i,r=0){const o=fn-1;if(a<=0)return{opacity:e===0?1:0};if(a>=o-1e-5)return{opacity:e===o?1:0};const c=Math.floor(a);if(c>=o)return{opacity:e===o?1:0};if(e!==c&&e!==c+1)return{opacity:0};const u=a-c,d=Ht.clamp(i,0,.999);if(u<d)return{opacity:e===c?1:0};const m=Mr(Ht.clamp((u-d)/Math.max(1e-6,1-d),0,1));return e===c?{opacity:r>=.999?0:1}:{opacity:Math.max(m,r)}}function Z3(a){return new qi({uniforms:{uMap:{value:a},uOpacity:{value:1},uWipe:{value:0},uWipeEdge:{value:jR}},vertexShader:_3,fragmentShader:v3,transparent:!0,depthWrite:!0,depthTest:!0,side:$a})}function K3(a,e){return a>1.5&&a<e-.5}function Q3(a){return Ht.clamp(540/Math.max(a,340),.2,.55)}function J3(a,e,i){const r=[],o=$R;for(let c=0;c<o;c++){const u=Ht.clamp(a-c/Math.max(1,o-1)*e3,-.08,1.08),d=Math.sin(u*Math.PI*2*ZR)*QR*i,m=Math.sin(u*Math.PI*2*KR)*JR,h=Zv+c/Math.max(1,o-1)*(s3-Zv),g=e-h;r.push(new ne(d,m,g))}return r}function $3(a,e,i,r){const o=a.length;if(o<2)return new Yi;const c=[],u=[],d=[],m=[],h=new ne,g=new ne,v=new ne,_=new ne(0,1,0),S=e+1;for(let R=0;R<o;R++){R===0?h.subVectors(a[1],a[0]).normalize():R===o-1?h.subVectors(a[o-1],a[o-2]).normalize():h.subVectors(a[R+1],a[R-1]).normalize(),g.copy(_).cross(h),g.lengthSq()<1e-8&&g.set(1,0,0).cross(h),g.normalize(),v.crossVectors(h,g).normalize();const y=o===1?0:R/(o-1),x=i+(r-i)*Math.pow(y,1.5);for(let F=0;F<=e;F++){const I=F/e*Math.PI*2,w=Math.cos(I),O=Math.sin(I),L=a[R];c.push(L.x+(w*g.x+O*v.x)*x,L.y+(w*g.y+O*v.y)*x,L.z+(w*g.z+O*v.z)*x),u.push(w*g.x+O*v.x,w*g.y+O*v.y,w*g.z+O*v.z),d.push(o===1?0:R/(o-1),F/e)}}for(let R=0;R<o-1;R++)for(let y=0;y<e;y++){const x=R*S+y,F=x+1,I=x+S,w=I+1;m.push(x,I,F,F,I,w)}const b=new Yi;return b.setAttribute("position",new Wi(c,3)),b.setAttribute("normal",new Wi(u,3)),b.setAttribute("uv",new Wi(d,2)),b.setIndex(m),b.computeBoundingSphere(),b}function ex(a,e,i,r,o,c){const u={verb:a.verb,description:a.description};return NR(u,e,i,r,x3,o,c)}function tx(a,e){const i=rS(e),r=Math.min(a*2.35,3.25),o=Math.round(i.canvasW*r),c=Math.round(i.canvasH*r),u=document.createElement("canvas");u.width=o,u.height=c;const d=u.getContext("2d");d.clearRect(0,0,o,c);const m="Morpheum";let h=i.fontPx;d.textAlign="left",d.textBaseline="alphabetic";const g=()=>{d.font=`normal ${h*r}px ${Xl}`};g();const v=O=>{d.font=`normal ${O*r}px ${Xl}`;const L=d.measureText(m),z=Math.abs(L.actualBoundingBoxLeft??0),T=Math.abs(L.actualBoundingBoxRight??L.width),N=Math.abs(L.actualBoundingBoxAscent??O*r*.8),q=Math.abs(L.actualBoundingBoxDescent??O*r*.25);return{left:z,right:T,width:z+T,ascent:N,descent:q}},_=Math.max(1.25,1.85*r)*2,S=64*r+_,b=40*r+_,R=O=>{const L=v(O);return L.width+S*2<=o&&L.ascent+L.descent+b*2<=c};for(;!R(h)&&h>64;)h-=2;for(;R(h+2)&&h<i.fontPx+24;)h+=2;g();const y=v(h),x=(o-y.width)/2+y.left,F=c/2+(y.ascent-y.descent)/2,I=d.createLinearGradient(x-y.left,F-y.ascent,x+y.right,F+y.descent);S3.forEach(O=>I.addColorStop(O.t,O.c)),d.lineJoin="round",d.miterLimit=2,d.lineWidth=Math.max(1.25,1.85*r),d.strokeStyle="rgba(8,12,10,0.22)",d.shadowColor="rgba(10, 14, 23, 0.55)",d.shadowBlur=Math.max(10,16*r),d.shadowOffsetX=0,d.shadowOffsetY=Math.max(1,2*r),d.strokeText(m,x,F),d.fillStyle=I,d.fillText(m,x,F),d.shadowColor="transparent",d.shadowBlur=0,d.shadowOffsetY=0;const w=new zx(u);return w.colorSpace=ei,w.minFilter=dn,w.magFilter=dn,w.generateMipmaps=!1,w}function nx(a,e){a.generateMipmaps=!1,a.minFilter=dn,a.magFilter=dn,a.wrapS=sa,a.wrapT=sa;const i=e.capabilities.getMaxAnisotropy();a.anisotropy=Math.min(16,i),a.needsUpdate=!0}function eC({cardAlpha:a=.8,modalChassisAlpha:e=1,cardSize:i=uS}){const r=ke.useRef(null),o=ke.useRef(null),c=ke.useRef(null),u=ke.useRef(null),d=ke.useRef(null),m=ke.useRef(!1),h=ke.useRef(!1),g=ke.useRef(null),v=ke.useRef(a);v.current=Math.min(1,Math.max(0,a));const _=ke.useRef(e);_.current=Math.min(1,Math.max(0,e));const S=ke.useRef(i);S.current=Math.max(.1,i);const b=ke.useCallback(()=>{var y;if(m.current)return;m.current=!0,h.current=!1,(y=g.current)==null||y.call(g);const R=o.current;R==null||R.classList.add("flow-intro__sticky--exit"),window.setTimeout(()=>{document.body.classList.remove(gr),Ih(),requestAnimationFrame(()=>{Ih(),requestAnimationFrame(()=>{Ih(),window.setTimeout(()=>{m.current=!1},100)})})},A3)},[]);return ke.useLayoutEffect(()=>{const R=window.matchMedia("(prefers-reduced-motion: reduce)").matches,y=window.location.hash.replace(/^#/,"");return R||y!==""&&y!=="flow"&&y!=="hero"||document.body.classList.add(gr),()=>{document.body.classList.remove(gr)}},[]),ke.useEffect(()=>{const R=y=>{if(y.key!=="Escape")return;const x=document.getElementById("hero");x&&x.getBoundingClientRect().top>8&&(y.preventDefault(),b())};return window.addEventListener("keydown",R),()=>window.removeEventListener("keydown",R)},[b]),ke.useEffect(()=>{const R=window.location.hash.replace(/^#/,"");R&&R!=="flow"&&R!=="hero"&&requestAnimationFrame(()=>{var y;(y=document.getElementById(R))==null||y.scrollIntoView({block:"start"})})},[]),ke.useEffect(()=>{const R=c.current,y=r.current;if(!R||!y)return;const x=R,F=y;let I=!1;if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){document.body.classList.remove(gr);const L=d.current;L&&(L.style.height="0px");return}let O;return(async()=>{if(await y3(),I)return;const L=Math.min(window.devicePixelRatio,2),z=Math.max(320,x.clientWidth||window.innerWidth),T=Math.max(1,x.clientHeight||window.innerHeight),N=[],q=[],X=[],K=new Float64Array(fn).fill(-1);Fl.forEach((B,G)=>{const he=fn-1-G,Ae=Fl[he],Ce=ex(Ae,he,L,z,v.current,_.current);X.push(Ce);const Ne=Z3(Ce);N.push(Ne);const Pe=Lp,qe=Pe*nS/iS,tt=new Ai(new Gs(qe,Pe),Ne);tt.position.set(0,0,-G*Za),tt.renderOrder=G,q.push(tt)});const ce=tx(L,z),ue=new Bu({map:ce,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,side:_a}),Z=ce.image.height/ce.image.width,{w:H,h:V}=$v(z,T,Z),te=new Ai(new Gs(H,V),ue);te.position.set(0,0,-(fn-1)*Za+.05),te.renderOrder=o3;const ge=new FE,Se=new ki(zu,1,.08,120),U=new nR({antialias:!0,alpha:!1,powerPreference:"high-performance"});U.setPixelRatio(Math.min(window.devicePixelRatio,2)),U.outputColorSpace=ei,U.sortObjects=!0,x.appendChild(U.domElement),nx(ce,U);const J=new Ol;q.forEach(B=>J.add(B)),J.add(te),ge.add(J);const Ee=new qi({uniforms:{uStrength:{value:0}},vertexShader:m3,fragmentShader:g3,transparent:!0,toneMapped:!1,depthTest:!1,depthWrite:!1,blending:Hh}),Re=new Ai(new Yi,Ee);Re.frustumCulled=!1,Re.renderOrder=Kv,Re.visible=!1,ge.add(Re);let De=null,ie=null,Me=null;const ve=u.current;if(ve){ve.muted=!0,ve.defaultMuted=!0,ve.playsInline=!0,ve.preload="auto",ve.pause(),De=new jE(ve),De.colorSpace=ei,De.minFilter=dn,De.magFilter=dn,De.generateMipmaps=!1,ie=new Bu({map:De,depthTest:!1,depthWrite:!1,toneMapped:!1}),Me=new Ai(new Gs(1,1),ie),Me.frustumCulled=!1,Me.renderOrder=c3,Me.position.set(0,0,-Qv),Se.add(Me),ge.add(Se);const B=()=>{Jv(ve,lS[0]),De.needsUpdate=!0};ve.readyState>=1?B():ve.addEventListener("loadedmetadata",B,{once:!0})}function We(){if(!Me)return;const B=Qv,G=zu*Math.PI/180,he=2*Math.tan(G/2)*B,Ae=he*Se.aspect,Ce=(ve==null?void 0:ve.videoWidth)||1280,Ne=(ve==null?void 0:ve.videoHeight)||720,Pe=Ce/Math.max(1,Ne);Ae/Math.max(1e-6,he)>Pe?Me.scale.set(Ae,Ae/Pe,1):Me.scale.set(he*Pe,he,1)}const st=0,$e=-(fn-1)*Za,Yt=Hl,ht=-.1*Za,St=.1*Za;function vt(B,G){const he=B+Hl;return(Yt-he)/G}let et=Math.max(1,x.clientHeight||window.innerHeight),Gt=!1,Jt=window.innerWidth,$t=!1,en=!1;function Bt(){return Math.max(1,window.innerHeight)}function an(B){return $t?B>b3&&($t=!1):T3(B)&&($t=!0),$t}function Q(){const B=d.current;if(!B)return;const{totalPx:G}=To(et),he=et*YR,Ce=`${Math.max(Math.ceil(G+he+et*Oh+32-qv),Math.ceil(et*1.08))}px`;B.style.height!==Ce&&(B.style.height=Ce)}function Ut(){const B=Math.max(1,et),{totalPx:G}=To(B),he=Math.max(1,G),Ae=st+ht,Ce=$e+St-WR,Pe=(Ae-Ce)/he,qe=vt(Ae,Pe),tt=vt(Ce,Pe);return{ih:B,totalPx:he,scrollToWorldFactor:Pe,minScroll:qe,maxScroll:tt}}let{scrollToWorldFactor:Rt,minScroll:P,maxScroll:E}=Ut();function ee(){var qe;const B=Math.max(320,x.clientWidth||window.innerWidth),G=Math.min(window.devicePixelRatio,2);X.forEach((tt,He)=>{tt.dispose();const ot=fn-1-He,Mt=ex(Fl[ot],ot,G,B,v.current,_.current);X[He]=Mt,N[He].uniforms.uMap.value=Mt}),(qe=ue.map)==null||qe.dispose();const he=tx(G,B);ue.map=he,ue.needsUpdate=!0,nx(he,U);const Ae=he.image.height/he.image.width,Ce=Math.max(1,x.clientHeight||et),{w:Ne,h:Pe}=$v(B,Ce,Ae);te.geometry.dispose(),te.geometry=new Gs(Ne,Pe)}function ae(){const B=x.clientWidth,G=x.clientHeight;if(B<2||G<2)return;Se.aspect=B/G,Se.updateProjectionMatrix(),U.setSize(B,G,!1),We(),ee();const he=Ut();Rt=he.scrollToWorldFactor,P=he.minScroll,E=he.maxScroll,Gt||Q()}function me(){Gt=!1,et=Bt(),Jt=window.innerWidth,ae()}ae(),requestAnimationFrame(()=>{I||ee()});let Ue=0;function Be(){var Kl,Lr;if(I)return;Ue=requestAnimationFrame(Be);const B=Bt(),G=document.getElementById("hero"),he=G?G.getBoundingClientRect().top:0,Ae=G?an(he):!0,{totalPx:Ce}=To(et),Ne=F.getBoundingClientRect(),Pe=Math.max(1,F.offsetHeight-et),qe=Ht.clamp(-Ne.top,0,Pe);if(!Ae&&qe<=Ce){if(Gt=!1,Math.abs(B-et)>Ph){et=B,Q();const bt=Ut();Rt=bt.scrollToWorldFactor,P=bt.minScroll,E=bt.maxScroll}}else Gt=!0;const He=et,{cardPx:ot,titlePx:Mt,totalPx:ft}=To(He),Dt=Math.max(1,F.offsetHeight-He),_t=Ht.clamp(-Ne.top,0,Dt),Ve=Math.min(_t,ft),Mn=Math.max(1,ft),pt=He*aS,mn=He*sS,On=pt+mn,ni=_t-ft,Hn=Mr(Ht.clamp(ni/Math.max(1,pt),0,1)),Ot=Mr(Ht.clamp((ni-pt)/Math.max(1,mn),0,1)),tn=Ht.mapLinear(ot,0,Mn,P,E),ii=x.clientWidth,Lt=x.clientHeight,Pn=Math.max(1,Mt),Gn=Ve<Pn,Ta=Gn?Ht.clamp(Ve/Pn,0,1):0,Qi=Math.max(0,Ve-Pn),Bo=Math.max(1,ot),Li=Ht.clamp(Qi/Bo,0,1)*(fn-1),is=Zp(ii,Lt),jl=X3(ii,Lt,S.current);let Aa;Gn?Aa=Ht.mapLinear(Ve,0,Pn,E,tn):Aa=Ht.mapLinear(Ve,Pn,Mn,tn,P),Aa=Ht.clamp(Aa,P,E);const Rr=W3(ot,He),js=Y3(Pn,He),Ni=q3(Ta,js),Cr=fn-1,Zs=ft+On;ve&&(Jv(ve,p3(_t,Pn,ot,ft,Zs)),De&&(De.needsUpdate=!0)),We();const Ui=Yt-Aa*Rt;Se.position.set(0,0,Ui),Se.lookAt(0,0,Ui-Hl);const as=ft+On;let Ra=0;if(Dt>as&&_t>=as){const bt=Math.max(1,Dt-as);Ra=Mr(Ht.clamp((_t-as)/bt,0,1))}const Zl=Math.max(1,On+He*Oh),wr=_t<=Mn?Ht.clamp(_t/Mn,0,1):1+Ht.clamp(ni/Zl,0,1)*.45;if(K3(_t,Dt)){const bt=J3(wr,Ui,Q3(ii)),gi=new QE(bt,!1,"centripetal").getSpacedPoints(t3);if(gi.length>=2){const Vn=$3(gi,n3,i3,a3),ca=Re.geometry.getAttribute("position"),li=Vn.getAttribute("position");if(ca&&li&&ca.count===li.count&&((Kl=Re.geometry.getIndex())==null?void 0:Kl.count)===((Lr=Vn.getIndex())==null?void 0:Lr.count)&&ca&&li){ca.array.set(li.array),ca.needsUpdate=!0;const os=Re.geometry.getAttribute("normal"),ls=Vn.getAttribute("normal");os&&ls&&(os.array.set(ls.array),os.needsUpdate=!0);const Go=Re.geometry.getAttribute("uv"),Ql=Vn.getAttribute("uv");Go&&Ql&&(Go.array.set(Ql.array),Go.needsUpdate=!0),Vn.dispose()}else Re.geometry.dispose(),Re.geometry=Vn;Re.visible=!0;const rs=Gn||Li<Ht.clamp(Rr,0,.999);Re.renderOrder=rs?l3:Kv,Ee.uniforms.uStrength.value=.36*(1-Ra*.92)}else Re.visible=!1,Ee.uniforms.uStrength.value=0}else Re.visible=!1,Ee.uniforms.uStrength.value=0;const Ho=Math.floor((fn-1)/2),In=performance.now(),Ca=Ht.clamp(Rr,0,.999);for(let bt=0;bt<fn;bt++){if(Gn||Li<=bt+1e-5||Li<bt+Ca){K[bt]=-1;continue}K[bt]<0&&(Li>=bt+1-1e-5?K[bt]=In-jv:K[bt]=In)}if(q.forEach((bt,Kn)=>{const gi=-Kn*Za,Vn=fn-1-Kn,ca=K[Vn];let li=ca<0?0:Mr(Ht.clamp((In-ca)/jv,0,1));!Gn&&Vn===fn-1&&Ot>0&&(li=Math.max(li,Ot));let{opacity:ss}=j3(Li,Vn,Rr,li);Gn&&Kn===Cr&&(ss*=Ni.lastCardOp,li=0);let rs=1,os=0;!Gn&&Vn===fn-1&&ss>.02&&Hn>0&&(rs=1-.28*Hn,os=-Za*.32*Hn),bt.position.set(0,0,gi+os),bt.scale.setScalar(jl*rs);const ls=N[Kn];ls.uniforms.uOpacity.value=ss,ls.uniforms.uWipe.value=li,ls.depthWrite=ss>=.995&&li<.02,bt.visible=ss>.003&&li<.997,bt.renderOrder=Kn<=Ho?oS+Kn:r3+(Kn-Ho-1)}),te.position.set(0,0,-Cr*Za+.05),te.scale.setScalar(is),ue.opacity=Gn?Ni.titleOp:0,te.visible=ue.opacity>.003,!m.current){h.current?en=!1:Ae?en=!0:en&&_t<ft-He*.25&&(en=!1),document.body.classList.toggle(gr,!en);const bt=o.current;bt!=null&&bt.classList.contains("flow-intro__sticky--exit")&&!Ae&&(bt.style.transition="none",bt.classList.remove("flow-intro__sticky--exit"),bt.offsetWidth,bt.style.transition="")}if(!Gt){const bt=On+He*Oh+32-qv,Kn=Math.max(Math.ceil(ft+bt),Math.ceil(He*1.08)),gi=d.current;if(gi){const Vn=`${Kn}px`;gi.style.height!==Vn&&(gi.style.height=Vn)}}const Dr=1-Ra*.96;o.current&&(o.current.style.setProperty("--intro-ui-opacity",String(Dr)),o.current.style.setProperty("--intro-tagline-opacity","1"));const Ks=String(1-Ra);U.domElement.style.opacity=Ks,U.render(ge,Se)}Be();let fe=0,pe=0,we=!1,ze="page",Oe=!1,Fe=!1,je=!1,Ke=0,it=0,W=0,Le=!1,_e=!1,Ie=0,Ge=window.scrollY,Te={kind:"title"};const Qe=8;function Ye(){pe&&(window.clearTimeout(pe),pe=0)}function qt(){fe&&(cancelAnimationFrame(fe),fe=0),we=!1,ze="page",h.current=!1}function ut(){qt(),Ye(),Oe=!1}g.current=ut;function hn(){var ft;const B=Math.max(1,et),{cardPx:G,titlePx:he,totalPx:Ae}=To(B),Ce=F.getBoundingClientRect(),Ne=Math.max(1,F.offsetHeight-B),Pe=Ht.clamp(-Ce.top,0,Ne),qe=document.getElementById("hero"),tt=qe?an(qe.getBoundingClientRect().top):!0,He=((ft=o.current)==null?void 0:ft.getBoundingClientRect().bottom)??B,Mt=Math.max(0,Math.min(Pe,Ae)-he)/Math.max(1,G)*(fn-1);return{innerH:B,cardPx:G,titlePx:he,totalPx:Ae,scrolledPx:Pe,landed:tt,stickyBottom:He,depthT:Mt}}function jt(B=hn()){return k3(B.scrolledPx,B.titlePx,B.cardPx,B.totalPx,B.landed,B.stickyBottom,B.innerH)}function ks(){return we||jt()}function Xs(B){let G=B.deltaY;return B.deltaMode===1?G*=16:B.deltaMode===2&&(G*=window.innerHeight),G}function ba(){Ye(),Oe=!0,pe=window.setTimeout(()=>{pe=0,Oe=!1},U3)}function ns(B,G){return B.kind==="title"?H3(F):B.kind==="card"?G3(F,B.idx,G.innerH):Fh()}function ti(B){if(I||m.current||we)return;const G=hn(),he=B.kind==="hero";if(!he&&!jt(G))return;const Ae=ns(B,G);if(Ae==null)return;const Ce=window.scrollY,Ne=Ae-Ce;if(Te=B.kind==="hero"?{kind:"card",idx:fn-1}:B,Math.abs(Ne)<fS(G.innerH)){vr(Ae),ba();return}we=!0,ze=he?"exit":"page",h.current=he,Oe=!0;const Pe=he?B3(window.innerWidth):F3(window.innerWidth),qe=performance.now(),tt=ot=>{if(vr(ot),we=!1,ze="page",fe=0,!he){h.current=!1,ba();return}h.current=!1,requestAnimationFrame(()=>{const Mt=Fh();Mt!=null&&vr(Mt),requestAnimationFrame(()=>{const ft=Fh();ft!=null&&vr(ft),ba()})})},He=ot=>{if(I||m.current){we=!1,ze="page",fe=0,h.current=!1;return}if(ze==="page"&&!jt(hn())){qt(),Oe=!1;return}const Mt=Math.min(1,(ot-qe)/Pe);vr(Ce+Ne*Mr(Mt)),Mt<1?fe=requestAnimationFrame(He):tt(Ae)};fe=requestAnimationFrame(He)}function sn(B,G){const he=fn-1,Ae=G>0?1:-1,Ce=Bh(B.scrolledPx,B.titlePx,B.depthT,B.innerH);if(Ce.kind==="title")return Ae<0?null:{kind:"card",idx:0};const Ne=Ce.idx+Ae;return Ne<0?{kind:"title"}:Ne>he?Ae>0?{kind:"hero"}:{kind:"card",idx:he}:{kind:"card",idx:Ne}}function Sn(B){const G=hn();if(!jt(G)&&!(we&&ze==="exit"))return!1;const he=sn(G,B);return he===null?!1:(ti(he),!0)}function zn(B,G){return sn(B,G)===null}function oa(B){if(!ks())return;const G=Xs(B),he=hn();if(!jt(he)&&ze!=="exit")return;const Ae=sn(he,G>0?1:-1);if(Ae===null){(we||Oe)&&ut();return}if(we||Oe){B.preventDefault();return}if(Math.abs(G)<L3){B.preventDefault();return}B.preventDefault(),ti(Ae)}function Ws(B){var G;if(it=((G=B.touches[0])==null?void 0:G.clientY)??it,Ke=it,W=window.scrollY,Fe=!1,je=we||jt(),je&&!we){const he=hn();Te=Bh(he.scrolledPx,he.titlePx,he.depthT,he.innerH)}}function Ys(B){var he;const G=((he=B.touches[0])==null?void 0:he.clientY)??Ke;if(!Fe){if(!je&&(we||jt())&&(je=!0,it=G,Ke=G,W=window.scrollY),!je)return;const Ae=it-G;if(Math.abs(Ae)<Qe){Ke=G;return}const Ce=Ae>0?1:-1,Ne=hn();if(!we&&!jt(Ne)){je=!1,Ke=G;return}if(zn(Ne,Ce)){je=!1,ut(),Ke=G;return}we&&ut(),Fe=!0,je=!1,W=window.scrollY,Te=Bh(Ne.scrolledPx,Ne.titlePx,Ne.depthT,Ne.innerH)}B.preventDefault(),Ke=G,we||vr(W)}function Ci(){const B=Fe,G=je,he=it-Ke;if(Fe=!1,je=!1,we)return;if(!B){G&&ut();return}if(!jt())return;if(Math.abs(he)<N3){ti(Te);return}const Ae=he>0?1:-1,Ce=hn();if(zn(Ce,Ae)){ut();return}Sn(Ae)}function ji(B){B.pointerType!=="touch"&&B.button===0&&(Le=!0,_e=!1,Ie=window.scrollY,jt()&&qt())}function Zi(B){if(B.pointerType==="touch"||!Le)return;if(Le=!1,!_e||!jt()){_e=!1;return}const G=hn(),he=window.scrollY>=Ie?1:-1,Ae=sn(G,he);if(_e=!1,Ae===null){ut();return}ti(Ae)}function wi(B){B.pointerType!=="touch"&&(Le=!1,_e=!1)}function Di(B){B.button===0&&(_e||we||Oe||jt()&&(B.preventDefault(),Sn(1)))}function la(B){var Ce;const G=B.target;if((Ce=G==null?void 0:G.closest)!=null&&Ce.call(G,"input, textarea, select, [contenteditable=true]"))return;const he=B.key==="ArrowDown"||B.key==="ArrowRight"||B.key==="Enter"||B.key===" ",Ae=B.key==="ArrowUp"||B.key==="ArrowLeft";if(!(!he&&!Ae)){if(we||Oe){B.preventDefault();return}jt()&&(B.preventDefault(),Sn(he?1:-1))}}function Ki(){const B=window.scrollY,G=B-Ge;Ge=B,Le&&Math.abs(G)>.5&&(_e=!0),we&&ze==="page"&&!jt()&&ut()}function pn(){ut(),me()}function qs(){ut();const B=Bt(),G=window.innerWidth,he=Math.abs(B-et),Ae=Math.abs(G-Jt)>1;if(Gt){he>Ph||Ae?me():ae();return}et=B,Jt=G,ae()}function A(){ut();const B=Bt();Math.abs(B-et)<=Ph||(Gt?me():(et=B,Jt=window.innerWidth,ae()))}window.addEventListener("wheel",oa,{passive:!1}),window.addEventListener("touchstart",Ws,{passive:!0}),window.addEventListener("touchmove",Ys,{passive:!1}),window.addEventListener("touchend",Ci,{passive:!0}),window.addEventListener("touchcancel",Ci,{passive:!0}),window.addEventListener("pointerdown",ji,{passive:!0}),window.addEventListener("pointerup",Zi,{passive:!0}),window.addEventListener("pointercancel",wi,{passive:!0}),window.addEventListener("scroll",Ki,{passive:!0}),window.addEventListener("resize",qs,{passive:!0}),window.addEventListener("orientationchange",pn,{passive:!0}),x.addEventListener("click",Di),window.addEventListener("keydown",la);const j=window.visualViewport;j&&j.addEventListener("resize",A);const oe=new ResizeObserver(ae);oe.observe(x),O=()=>{var B;ut(),g.current=null,cancelAnimationFrame(Ue),document.body.classList.remove(gr),window.removeEventListener("wheel",oa),window.removeEventListener("touchstart",Ws),window.removeEventListener("touchmove",Ys),window.removeEventListener("touchend",Ci),window.removeEventListener("touchcancel",Ci),window.removeEventListener("pointerdown",ji),window.removeEventListener("pointerup",Zi),window.removeEventListener("pointercancel",wi),window.removeEventListener("scroll",Ki),window.removeEventListener("resize",qs),window.removeEventListener("orientationchange",pn),x.removeEventListener("click",Di),window.removeEventListener("keydown",la),j&&j.removeEventListener("resize",A),oe.disconnect(),N.forEach(G=>{G.dispose()}),X.forEach(G=>G.dispose()),(B=ue.map)==null||B.dispose(),ue.dispose(),q.forEach(G=>G.geometry.dispose()),te.geometry.dispose(),Re.geometry.dispose(),Ee.dispose(),ge.remove(Re),Me&&(Se.remove(Me),Me.geometry.dispose()),ie==null||ie.dispose(),De==null||De.dispose(),ve&&ve.pause(),U.dispose(),x.contains(U.domElement)&&x.removeChild(U.domElement)},I&&O()})(),()=>{var L;I=!0,(L=g.current)==null||L.call(g),g.current=null,document.body.classList.remove(gr),O==null||O()}},[]),D.jsxs("section",{ref:r,id:"flow",className:"flow-intro","aria-label":"Morpheum — Discover, Copy, Supervise, Isolate",children:[D.jsxs("div",{ref:o,className:"flow-intro__sticky",children:[D.jsx("video",{ref:u,className:"flow-intro__bg-video",src:u3,muted:!0,playsInline:!0,preload:"auto","aria-hidden":!0}),D.jsx("div",{ref:c,className:"flow-intro__canvas","aria-hidden":!0}),D.jsxs("div",{className:"flow-intro__top",children:[D.jsx("div",{className:"flow-intro__brand",children:D.jsx(qp,{size:"sm",brandName:"Morpheum",className:"flow-intro__brand-mark"})}),D.jsxs("button",{type:"button",className:"flow-intro__skip",onClick:b,children:["Skip ",D.jsx("span",{className:"flow-intro__skip-key",children:"Esc"})]})]}),D.jsx("div",{className:"flow-intro__tagline-wrap",children:D.jsx(VR,{text:kR,className:"flow-intro__tagline",scrollerRef:r})}),D.jsx("div",{className:"flow-intro__sr","aria-live":"polite",children:Fl.map((R,y)=>D.jsxs("p",{children:["Step ",String(y+1).padStart(2,"0"),": ",R.verb,". ",R.description]},R.verb))})]}),D.jsx("div",{ref:d,className:"flow-intro__spacer","aria-hidden":!0})]})}const tC=280,nC=5/4,iC=3800,aC={discover:Il,copy:AR};function sC(){return typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches}function rC({stepIndex:a,kind:e,className:i,width:r=tC}){const o=ke.useRef(null),c=e??Jx(a),u=Math.round(r*nC);return ke.useEffect(()=>{const d=o.current;if(!d)return;let m=0,h;const g=()=>{const S=Math.min(window.devicePixelRatio||1,2),b=Math.round(r*S),R=Math.round(u*S);(d.width!==b||d.height!==R)&&(d.width=b,d.height=R);const y=d.getContext("2d");y&&LR(y,c,b,R,m)};g();const v=aC[c];v&&v>1&&!sC()&&(h=setInterval(()=>{m=(m+1)%v,g()},iC));const _=()=>g();return window.addEventListener("resize",_),()=>{window.removeEventListener("resize",_),h&&clearInterval(h)}},[c,r,u]),D.jsx("div",{className:["loop-step-sheet",i].filter(Boolean).join(" "),style:{width:r,height:u},children:D.jsx("canvas",{ref:o,className:"loop-step-sheet__canvas",style:{width:r,height:u},"aria-hidden":!0})})}const ix=[{id:"want-eth",agent:"SharpeShark",timestamp:"2026-07-08T15:42:00.000Z",timeLabel:"07-08, 15:42:00",status:"want-to",statusLabel:"Want to",action:"Open ETH long · 1.2 ETH",showActions:!0},{id:"rejected-btc",agent:"NightOwl",timestamp:"2026-07-08T15:31:00.000Z",timeLabel:"07-08, 15:31:00",status:"rejected",statusLabel:"Rejected",action:"Open BTC short · 0.04 BTC"},{id:"close-btc-profit",agent:"SharpeShark",timestamp:"2026-07-08T15:25:00.000Z",timeLabel:"07-08, 15:25:00",status:"short",statusLabel:"Close Long",action:"BTCUSDT · 0.04 BTC · 2,465.12 USDT",pnl:{text:"+103.09",tone:"long"}},{id:"open-eth-long",agent:"FluxRunner",timestamp:"2026-07-08T14:10:00.000Z",timeLabel:"07-08, 14:10:00",status:"long",statusLabel:"Open Long",action:"ETHUSDT · 0.8 ETH · 2,560.00 USDT"},{id:"open-sol-short",agent:"NightOwl",timestamp:"2026-07-07T09:42:00.000Z",timeLabel:"07-07, 09:42:00",status:"short",statusLabel:"Open Short",action:"SOLUSDT · 12 SOL · 1,824.00 USDT"}];function oC(){return D.jsxs("aside",{className:"supervise-log","aria-label":"Agent activity log",children:[D.jsx("header",{className:"supervise-log__header",children:D.jsx("span",{className:"supervise-log__kicker",children:"Activity log"})}),D.jsx("ol",{className:"supervise-log__timeline",children:ix.map((a,e)=>{const i=e===ix.length-1,r=e===0;return D.jsxs("li",{className:"supervise-log__item",children:[D.jsxs("div",{className:"supervise-log__meta",children:[D.jsx("span",{className:"supervise-log__agent",children:a.agent}),D.jsx("time",{className:"supervise-log__time",dateTime:a.timestamp,children:a.timeLabel})]}),D.jsxs("div",{className:"supervise-log__track","aria-hidden":!0,children:[i?null:D.jsx("span",{className:"supervise-log__track-line"}),D.jsx("span",{className:["supervise-log__dot",r?"supervise-log__dot--latest":""].filter(Boolean).join(" ")})]}),D.jsxs("div",{className:"supervise-log__body",children:[D.jsx("span",{className:`supervise-log__badge supervise-log__badge--${a.status}`,children:a.statusLabel}),D.jsxs("p",{className:"supervise-log__action",children:[a.action,a.pnl?D.jsxs(D.Fragment,{children:[" · ",D.jsx("span",{className:`supervise-log__pnl supervise-log__pnl--${a.pnl.tone}`,children:a.pnl.text})]}):null]}),a.showActions?D.jsxs("div",{className:"supervise-log__actions",children:[D.jsx("button",{type:"button",className:"supervise-log__btn supervise-log__btn--reject",children:"Reject"}),D.jsx("button",{type:"button",className:"supervise-log__btn supervise-log__btn--approve",children:"Approve"})]}):null]})]},a.id)})})]})}const lC=/^(action)$/i;function cC(a){return a.split(/(\s*[·/]\s*)/).map((i,r)=>lC.test(i.trim())?D.jsx("span",{className:"stat-chip__brand",children:i},r):D.jsx("span",{children:i},r))}function dS({label:a,status:e,live:i}){return D.jsxs("span",{className:`stat-chip ${i?"stat-chip--live":""}`,children:[D.jsx("span",{className:"stat-chip__label",children:a}),D.jsx("span",{className:"stat-chip__sep",children:"·"}),D.jsx("span",{className:"stat-chip__status",children:cC(e)})]})}var uC=px();function fC(a,e,i=!1){a.style.fontFamily=e.fontFamily,a.style.fontSize=e.fontSize,a.style.fontWeight=e.fontWeight,a.style.letterSpacing=e.letterSpacing,a.style.lineHeight=e.lineHeight,a.style.textTransform=e.textTransform,a.style.whiteSpace=i?"nowrap":"normal",a.style.wordBreak=i?"normal":"break-word"}function dC(a,e,i,r){const o=getComputedStyle(i),c=document.createElement("div");c.style.position="fixed",c.style.left="-99999px",c.style.top="0",c.style.visibility="hidden",c.style.pointerEvents="none",c.style.width=`${e}px`,fC(c,o,!r);const u=document.createTextNode(a);return c.appendChild(u),document.body.appendChild(c),{probe:c,textNode:u}}function ax(a,e,i,r=!0){if(!a)return{lines:[],blockHeight:0};if(e<=0)return{lines:[a],blockHeight:0};const{probe:o,textNode:c}=dC(a,e,i,r),u=o.offsetHeight;if(!r)return document.body.removeChild(o),{lines:[a],blockHeight:u};const d=document.createRange(),m=[];let h=0,g=0;for(let v=1;v<=a.length;v++){d.setStart(c,0),d.setEnd(c,v);const _=d.getClientRects().length;_>g&&g>0&&(m.push(a.slice(h,v-1)),h=v-1),g=_}return h<a.length&&m.push(a.slice(h)),document.body.removeChild(o),{lines:m.length>0?m:[a],blockHeight:u}}const hC=40,pC=5,mC="typewriter-reveal",sx=1e3,gC=4e3;function rx(){return sx+Math.random()*(gC-sx)}function hS(){return typeof window>"u"?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches}function _C({text:a,content:e,speed:i,cursorWidth:r,active:o,waiting:c,completed:u,holdCursor:d=!1,onComplete:m}){const h=ke.useRef(null),g=ke.useRef(m),v=ke.useRef(null),_=ke.useRef(null),S=ke.useRef(null),b=ke.useRef("idle"),[R,y]=ke.useState("idle");g.current=m;const x=ke.useCallback(()=>{v.current&&(clearTimeout(v.current),v.current=null)},[]),F=ke.useCallback(()=>{var N;x(),_.current=null,S.current=null,b.current="complete",y("complete"),(N=g.current)==null||N.call(g)},[x]),I=ke.useCallback(N=>{x(),_.current=Date.now()+N,v.current=setTimeout(F,N)},[x,F]);ke.useLayoutEffect(()=>{b.current="idle",y("idle"),S.current=null,_.current=null,x()},[a,i,r,x]),ke.useLayoutEffect(()=>{var V,te,ge;if(c||u||b.current==="complete")return;if(!o){b.current==="cursor-hold"&&v.current&&_.current!=null&&(x(),S.current=Math.max(0,_.current-Date.now()),_.current=null);return}if(b.current==="cursor-hold"&&!v.current){const Se=S.current??rx();S.current=null,I(Se);return}if(b.current==="animating"||b.current==="cursor-hold")return;if(hS()){(V=g.current)==null||V.call(g);return}const N=h.current;if(!N||!a){(te=g.current)==null||te.call(g);return}N.style.width="",N.offsetWidth;const q=Math.max(a.length/i*1e3,120),X=Math.max(a.length,1),K=N.closest(".typewriter-block"),ce=(K==null?void 0:K.clientWidth)??((ge=N.parentElement)==null?void 0:ge.clientWidth)??0;N.style.whiteSpace="nowrap",N.style.width="auto";const ue=N.scrollWidth,Z=ce>0?Math.min(ue,ce):ue;N.style.width="0",N.style.setProperty("--tw-duration",`${q}ms`),N.style.setProperty("--tw-target-width",`${Z}px`),N.style.setProperty("--tw-steps",String(X)),N.style.setProperty("--tw-cursor-width",`${r}px`),N.offsetWidth,b.current="animating",y("animating");const H=Se=>{if(Se.animationName===mC){if(d){N.style.width=`${Z}px`,b.current="cursor-hold",y("cursor-hold"),I(rx());return}N.style.width="",F()}};return N.addEventListener("animationend",H),()=>{N.removeEventListener("animationend",H)}},[o,u,F,d,I,i,a,c,x,r]);const w=R==="animating",O=R==="cursor-hold",L=R==="complete",T=["typewriter","typewriter-line",c?"is-waiting":"",w?"is-animating":"",O?"is-cursor-hold":"",u||L?"is-complete":"",!o&&!c&&!u&&!L&&(w||O)?"is-paused":""].filter(Boolean).join(" ");return D.jsx("span",{ref:h,className:T,children:e??a})}function Kp({text:a,children:e,className:i,speed:r=hC,cursorWidth:o=pC,multiline:c="auto",active:u=!0,holdCursor:d=!0,onComplete:m}){const h=ke.useRef(null),g=ke.useRef(m),[v,_]=ke.useState([]),[S,b]=ke.useState(0),[R,y]=ke.useState(0),[x,F]=ke.useState(!1),[I,w]=ke.useState(!1),O=hS();g.current=m;const L=ke.useCallback(()=>{const ue=h.current;if(!ue||!a)return _([]),b(0),w(!0),!0;const Z=ue.clientWidth;if(Z<1)return!1;const V=(c==="auto"||c===!0)&&!O,{lines:te,blockHeight:ge}=ax(a,Z,ue,V);let Se=ge;if(!V){const U=ax(a,Z,ue,!0);Se=Math.max(ge,U.blockHeight)}return _(te),b(Se),w(!0),!0},[a,c,O]);ke.useLayoutEffect(()=>{var ue,Z;if(y(0),F(!1),w(!1),_([]),b(0),O){(ue=g.current)==null||ue.call(g),w(!0);return}if(!a){(Z=g.current)==null||Z.call(g),w(!0);return}if(!L()){const H=new ResizeObserver(()=>{L()&&H.disconnect()});return h.current&&H.observe(h.current),()=>H.disconnect()}},[a,c,L,O]);const z=ke.useCallback(ue=>{var H;const Z=ue>=v.length-1;uC.flushSync(()=>{if(!Z){y(ue+1);return}F(!0)}),Z&&((H=g.current)==null||H.call(g))},[v]),N=["typewriter-block",v.length>1?"typewriter-lines":"typewriter-host",i??"",x?"is-complete":"",I?"":"is-measuring",O?"is-static":""].filter(Boolean).join(" "),q={...!x&&!O&&S>0?{height:S,minHeight:S}:void 0},X=e??a;if(!I)return D.jsx("span",{ref:h,className:N,style:q,children:X});if(O||!a)return D.jsx("span",{ref:h,className:["typewriter","is-static",i??""].filter(Boolean).join(" "),children:X});if(x)return D.jsx("span",{ref:h,className:["typewriter-block","typewriter-host","is-complete",i??""].filter(Boolean).join(" "),children:X});const K=v.length>0?v:[a],ce=!!e&&K.length<=1;return D.jsxs("span",{ref:h,className:N,style:q,"aria-label":a,children:[D.jsx("span",{className:"typewriter-ghost","aria-hidden":!0,children:X}),D.jsx("span",{className:"typewriter-overlay","aria-hidden":!0,children:K.map((ue,Z)=>D.jsx(_C,{text:ue,content:ce?e:void 0,speed:r,cursorWidth:o,waiting:Z>R,active:u&&Z===R,completed:Z<R,holdCursor:d&&Z===K.length-1,onComplete:Z===R?()=>z(Z):void 0},`${Z}-${ue}`))})]})}function vC(){return typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Qp(a,e){const i=(e==null?void 0:e.amount)??.2,[r,o]=ke.useState(!1);return ke.useLayoutEffect(()=>{if(r)return;if(vC()){o(!0);return}const c=a.current;if(!c)return;const u=new IntersectionObserver(d=>{for(const m of d)if(m.isIntersecting&&m.intersectionRatio>=Math.min(i,1)){o(!0),u.disconnect();return}},{root:null,threshold:[0,i,Math.min(i+.15,1),1],rootMargin:"0px"});return u.observe(c),()=>u.disconnect()},[i,r,a]),r}function xC(a){return String(a).padStart(2,"0")}function Hu(){return typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches}const SC=1600,MC=1500,ox=5e3,yC=7e3;function EC(){return ox+Math.random()*(yC-ox)}function bC({text:a,active:e}){const[i,r]=ke.useState(!1),[o,c]=ke.useState(0),u=ke.useRef(null),d=`> ${a}`,m=ke.useCallback(()=>{u.current&&(clearTimeout(u.current),u.current=null)},[]);ke.useLayoutEffect(()=>{if(m(),!e){r(!1),c(0);return}if(Hu()){r(!0);return}const g=window.setTimeout(()=>r(!0),MC);return()=>{window.clearTimeout(g),m()}},[e,m]);const h=ke.useCallback(()=>{Hu()||(m(),u.current=setTimeout(()=>{u.current=null,c(g=>g+1)},EC()))},[m]);return D.jsx("p",{className:"flow-step__example",children:i?D.jsx(Kp,{text:d,className:"flow-step__example-type",speed:42,multiline:"auto",active:!0,holdCursor:!0,onComplete:h},o):D.jsx("span",{className:"flow-step__example-type","aria-hidden":!0,children:d})})}function TC(){const[a,e]=ke.useState(()=>new Set),[i,r]=ke.useState(!1),o=ke.useRef(new Map),c=ke.useRef(null),u=Qp(c,{amount:.35}),d=Ns.steps.every(v=>a.has(`step-${v.n}`));ke.useLayoutEffect(()=>{if(Hu()){e(new Set(Ns.steps.map(_=>`step-${_.n}`))),r(!0);return}const v=new IntersectionObserver(_=>{e(S=>{const b=new Set(S);for(const R of _){const y=R.target.dataset.flowKey;y&&R.isIntersecting&&b.add(y)}return b})},{root:null,threshold:[0,.01,.08,.15,.25],rootMargin:"-42% 0px -42% 0px"});for(const _ of o.current.values())v.observe(_);return()=>{v.disconnect()}},[]),ke.useLayoutEffect(()=>{if(Hu())return;if(!d){r(!1);return}const v=window.setTimeout(()=>{r(!0)},SC);return()=>window.clearTimeout(v)},[d]);const m=ke.useCallback((v,_)=>{_?o.current.set(v,_):o.current.delete(v)},[]),h=ke.useCallback(v=>{e(_=>new Set(_).add(v))},[]),g=u&&i;return D.jsx("section",{id:"how",className:"section flow",children:D.jsxs("div",{className:"container",children:[D.jsx("p",{className:"section-kicker",children:Ns.kicker}),D.jsx("h2",{className:"section-title flow__title",children:Ns.title}),D.jsx("div",{className:"flow__chips",children:Ns.chips.map(v=>D.jsx(dS,{label:v.label,status:v.value},v.label))}),D.jsx("div",{className:"flow__steps",role:"list",children:Ns.steps.map((v,_)=>{const S=`step-${v.n}`,b=a.has(S);return D.jsxs("article",{ref:R=>m(S,R),"data-flow-key":S,role:"listitem",className:`flow-step${b?" flow-step--expanded":""}`,"aria-expanded":b,children:[D.jsxs("button",{type:"button",className:"flow-step__head",onClick:()=>h(S),"aria-label":b?`${v.title}, expanded`:`${v.title}, tap to expand`,children:[D.jsxs("span",{className:"flow-step__idx",children:["Step ",xC(v.n)]}),D.jsx("h3",{className:"flow-step__title",children:v.title}),D.jsx("span",{className:"flow-step__chevron","aria-hidden":!0,children:b?"−":"+"})]}),D.jsx("div",{className:"flow-step__expand","aria-hidden":!b,children:D.jsx("div",{className:"flow-step__expand-inner",children:D.jsxs("div",{className:`flow-step__split${_===2?" flow-step__split--supervise":""}`,children:[D.jsx("p",{className:"flow-step__meta",children:v.feature}),D.jsxs("div",{className:"flow-step__copy",children:[D.jsx("p",{className:"flow-step__detail",children:v.body}),D.jsx(bC,{text:v.example,active:b}),D.jsx("div",{className:"flow-step__actions",children:D.jsx("a",{href:Dn.explore,className:"flow-step__open","aria-label":`Explore after ${v.title}`,children:D.jsx("span",{"aria-hidden":!0,className:"flow-step__open-arrow",children:"→"})})})]}),D.jsx("div",{className:`flow-step__sheet${_===2?" flow-step__sheet--log":""}`,"aria-hidden":!b,children:b?_===2?D.jsx(oC,{}):D.jsx(rC,{stepIndex:_,width:280}):null})]})})})]},S)})}),D.jsx("p",{ref:c,className:"flow__outcome",children:g?D.jsx(Kp,{text:Ns.outcome,className:"flow__outcome-type",speed:42,multiline:"auto",active:!0,holdCursor:!0}):D.jsx("span",{className:"flow__outcome-type","aria-hidden":!0,children:Ns.outcome})})]})})}function AC(){return D.jsx("footer",{className:"site-footer",children:D.jsxs("div",{className:"container site-footer__inner",children:[D.jsxs("div",{className:"site-footer__brand",children:[D.jsx("a",{className:"site-footer__logo",href:"#hero","aria-label":"Morpheum home",children:D.jsx(qp,{size:"sm"})}),D.jsx("p",{className:"site-footer__legal",children:V_.legal})]}),D.jsxs("div",{className:"site-footer__meta",children:[D.jsxs("nav",{className:"site-footer__nav","aria-label":"Footer",children:[bu.map(a=>D.jsx("a",{href:a.href,children:a.label},a.id)),D.jsx("a",{href:Dn.docs,children:"Docs"}),D.jsx("a",{href:Dn.manifesto,children:"Manifesto"}),D.jsx("a",{href:Dn.discord,children:"Discord"}),D.jsx("a",{href:Dn.x,children:"X"})]}),D.jsx("div",{className:"site-footer__labels","aria-label":"Protocol",children:V_.labels.map(a=>D.jsx("span",{className:"site-footer__label",children:a},a))})]})]})})}const lx="!@#$%^&*()_+{}[]|;:,.<>?/0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",pS=50,cx=3500,ux=4e3,RC=1400,CC=1200,wC=4500;function mS(){return typeof window>"u"?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches}function fx(a){return/[A-Za-z0-9]/.test(a)}function DC(){return lx[Math.floor(Math.random()*lx.length)]??"?"}function LC(a){return Math.random()<.5?DC():a}function gS(a,e,i){const r=[];for(let h=0;h<a.length;h++)fx(a[h]??"")&&r.push(h);const o=r.length,c=o===0?1:Math.min(e/i,1),u=Math.floor(c*o),d=new Set(r.slice(0,u));let m="";for(let h=0;h<a.length;h++){const g=a[h]??"";!fx(g)||d.has(h)?m+=g:m+=LC(g)}return m}function NC(a){return typeof a=="boolean"?{enabled:a,decryptMs:cx,pauseMs:ux}:{enabled:a.enabled??!0,decryptMs:a.decryptMs??cx,pauseMs:a.pauseMs??ux}}function qn(a,e=!0){const{enabled:i,decryptMs:r,pauseMs:o}=NC(e),c=r+o,[u,d]=ke.useState(a);return ke.useEffect(()=>{if(!i||mS()){d(a);return}let m=Date.now();const h=()=>{const v=Date.now();let _=v-m;_>=c&&(m=v,_=0),d(gS(a,_,r))};h();const g=setInterval(h,pS);return()=>{clearInterval(g)}},[a,i,r,c]),u}function dx(a,e={}){const i=e.enabled??!0,r=e.stepDelayMs??RC,o=e.stepDecryptMs??CC,c=e.holdMs??wC,u=a.join("\0"),[d,m]=ke.useState(a),[h,g]=ke.useState(()=>a.map(()=>!1));return ke.useEffect(()=>{const v=u.length>0?u.split("\0"):[];if(!i||mS()||v.length===0){m(v),g(v.map(()=>!0));return}const S=(v.length-1)*r+o+c;let b=Date.now();const R=()=>{const x=Date.now();let F=x-b;F>=S&&(b=x,F=0);const I=[],w=[];for(let O=0;O<v.length;O++){const L=v[O]??"",z=O*r,T=F>=z;if(w.push(T),!T){I.push(L);continue}const N=F-z;I.push(gS(L,N,o))}m(I),g(w)};R();const y=setInterval(R,pS);return()=>{clearInterval(y)}},[u,i,r,o,c]),{displays:d,started:h}}function UC(){const a=[...G_,...G_];return D.jsx("div",{className:"marquee","aria-label":"Live status",children:D.jsx("div",{className:"marquee__viewport",children:D.jsx("div",{className:"marquee__track",children:a.map((e,i)=>D.jsx(dS,{label:e.label,status:e.status,live:"live"in e?e.live:!1},`${e.label}-${i}`))})})})}function OC({showGrid:a=!1,maskAlpha:e=.72,contentOffsetY:i=-50}){const[r,o]=Ls.headline,c=qn(Ls.eyebrow.label),u=Math.min(1,Math.max(0,e));return D.jsxs("section",{id:"hero",className:"hero","aria-labelledby":"hero-heading",children:[D.jsx("video",{className:"hero__video",autoPlay:!0,muted:!0,loop:!0,playsInline:!0,"aria-hidden":!0,children:D.jsx("source",{src:"/Morm_IntroAnimation_2.mp4",type:"video/mp4"})}),D.jsx("div",{className:"hero__video-mask",style:{"--hero-mask-alpha":u},"aria-hidden":!0}),D.jsx("div",{className:"hero__atmosphere","aria-hidden":!0}),a?D.jsx("div",{className:"hero__grid","aria-hidden":!0}):null,D.jsx("div",{className:"hero__logo-anim","aria-hidden":!0,children:D.jsxs("svg",{className:"hero__logo-anim-svg",viewBox:UR,fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[D.jsx("g",{className:"hero__logo-anim-ghost",children:Dp.map(d=>D.jsx("path",{d,fill:"#C8F5A8"},`ghost-${d.slice(0,24)}`))}),D.jsx("g",{className:"hero__logo-anim-fill",children:Dp.map(d=>D.jsx("path",{d,fill:"#C8F5A8"},`fill-${d.slice(0,24)}`))})]})}),D.jsx("div",{className:"hero__scanlines","aria-hidden":!0}),D.jsx("div",{className:"hero__grain","aria-hidden":!0}),D.jsx("div",{className:"hero__veil","aria-hidden":!0}),D.jsxs("div",{className:"container hero__content",style:{"--hero-content-offset-y":`${i}px`},children:[D.jsxs("a",{className:"hero__eyebrow hero__eyebrow--matrix",href:Ls.eyebrow.href,"aria-label":`${Ls.eyebrow.label}›`,children:[c,D.jsx("span",{className:"hero__eyebrow-chevron","aria-hidden":!0,children:"›"})]}),D.jsxs("h1",{id:"hero-heading",className:"hero__headline",children:[D.jsx("span",{className:"hero__line hero__line--lead",children:r}),D.jsx("span",{className:"hero__line hero__line--punch",children:o})]}),D.jsxs("div",{className:"hero__ctas",children:[D.jsx(Do,{href:Ls.primaryCta.href,variant:"primary",children:Ls.primaryCta.label}),D.jsx(Do,{href:Ls.secondaryCta.href,variant:"secondary",children:Ls.secondaryCta.label})]})]}),D.jsx(UC,{})]})}function PC(){const a=qn(Kd.text);return D.jsx("div",{className:"manifesto-strip",children:D.jsx("a",{className:"manifesto-strip__link manifesto-strip__link--matrix",href:Kd.href,"aria-label":Kd.text,children:a})})}const oi={decryptMs:2800,pauseMs:5200},hx={stepDelayMs:1400,stepDecryptMs:1200,holdMs:4500};function _S(a){return String(a+1).padStart(2,"0")}function IC(a,e,i,r){return`${_S(a)}  ${e}  ·  ${i}  ·  ${r}`}function FC(a,e,i){return`${_S(a)}  ${e}  ·  ${i}`}function BC(a){return!a.from||!a.to||!a.asset||!a.amt?null:`${a.from} → ${a.to} · ${a.asset} ${a.amt}`}function pi({label:a,value:e,display:i}){return D.jsxs("div",{className:"persona-card__meta-row",children:[D.jsx("span",{className:"terminal-label",children:a}),D.jsx("span",{className:"terminal-value persona-card__meta-value persona-card__meta-value--matrix","aria-label":e,children:i})]})}function ln({value:a,display:e,className:i="terminal-value persona-card__meta-value persona-card__meta-value--matrix",hidden:r=!1}){return D.jsx("p",{className:i,"aria-label":a,"aria-hidden":r||void 0,"data-pending":r?"true":void 0,children:e})}function zC({meta:a}){const e=qn(a.name,oi),i=qn(a.tx,oi),r=qn(a.hash,oi),o=qn(a.chain,oi),c=qn(a.verified,oi),u=qn(a.rep,oi),d=qn(a.portable,oi),m=qn(a.next,oi),h=`tx ${a.tx}`,g=`tx ${i}`,v=`did · ${a.name}`,_=`identity · ${e}`,S=`hash ${a.hash}`,b=`hash ${r}`,R=`chain ${a.chain}`,y=`chain ${o}`,x=`verified ${a.verified} · rep ${a.rep} · portable ${a.portable}`,F=`verified ${c} · rep ${u} · portable ${d}`,I=`next ${a.next}`,w=`next ${m}`,O=`rep ${a.rep} · portable ${a.portable}`,L=`rep ${u} · portable ${d}`,z=`verified ${a.verified}`,T=`verified ${c}`;return D.jsxs("div",{className:"persona-card__meta persona-card__meta--identity",children:[D.jsx("p",{className:"persona-card__meta-kind terminal-label",children:"become an operator"}),D.jsx("p",{className:"terminal-label",children:"on-chain transaction"}),D.jsxs("div",{className:"persona-card__meta-rows",children:[D.jsx(pi,{label:"tx",value:a.tx,display:i}),D.jsx(pi,{label:"hash",value:a.hash,display:r}),D.jsx(pi,{label:"chain",value:a.chain,display:o}),D.jsx(pi,{label:"verified",value:a.verified,display:c}),D.jsx(pi,{label:"rep",value:a.rep,display:u}),D.jsx(pi,{label:"portable",value:a.portable,display:d}),D.jsx(pi,{label:"next",value:a.next,display:m})]}),D.jsxs("div",{className:"persona-card__meta-compact",children:[D.jsx(ln,{value:h,display:g}),D.jsx(ln,{value:v,display:_,className:"terminal-value persona-card__meta-value--matrix"}),D.jsx(ln,{value:S,display:b}),D.jsx(ln,{value:R,display:y}),D.jsx(ln,{value:x,display:F}),D.jsx(ln,{value:I,display:w})]}),D.jsxs("div",{className:"persona-card__meta-xxs",children:[D.jsx(ln,{value:h,display:g}),D.jsx(ln,{value:a.name,display:e,className:"terminal-value persona-card__meta-value--matrix"}),D.jsx(ln,{value:S,display:b}),D.jsx(ln,{value:R,display:y}),D.jsx(ln,{value:z,display:T}),D.jsx(ln,{value:O,display:L}),D.jsx(ln,{value:I,display:w})]})]})}function HC({meta:a}){const e=qn(a.tx,oi),i=qn(a.from,oi),r=qn(a.to,oi),o=qn(a.asset,oi),c=qn(a.amt,oi),u=qn(a.chain,oi),d=qn(a.status,oi),m=`${a.from} → ${a.to}`,h=`${i} → ${r}`,g=`tx ${a.tx}`,v=`tx ${e}`,_=`${a.asset} ${a.amt} · ${a.chain}`,S=`${o} ${c} · ${u}`,b=`${a.asset} ${a.amt}`,R=`${o} ${c}`,y=`status ${a.status}`,x=`status ${d}`;return D.jsxs("div",{className:"persona-card__meta persona-card__meta--community",children:[D.jsx("p",{className:"persona-card__meta-kind terminal-label",children:a.label}),D.jsxs("div",{className:"persona-card__meta-rows",children:[D.jsx(pi,{label:"tx",value:a.tx,display:e}),D.jsx(pi,{label:"from",value:a.from,display:i}),D.jsx(pi,{label:"to",value:a.to,display:r}),D.jsx(pi,{label:"asset",value:a.asset,display:o}),D.jsx(pi,{label:"amt",value:a.amt,display:c}),D.jsx(pi,{label:"chain",value:a.chain,display:u}),D.jsx(pi,{label:"status",value:a.status,display:d})]}),D.jsxs("div",{className:"persona-card__meta-compact",children:[D.jsx("p",{className:"terminal-label",children:a.label}),D.jsx(ln,{value:g,display:v}),D.jsx(ln,{value:m,display:h}),D.jsx(ln,{value:_,display:S}),D.jsx(ln,{value:y,display:x})]}),D.jsxs("div",{className:"persona-card__meta-xxs",children:[D.jsx("p",{className:"terminal-label",children:a.label}),D.jsx(ln,{value:g,display:v}),D.jsx(ln,{value:m,display:h}),D.jsx(ln,{value:b,display:R}),D.jsx(ln,{value:a.chain,display:u}),D.jsx(ln,{value:y,display:x})]})]})}function GC({meta:a}){const e=ke.useRef(null),i=Qp(e,{amount:.15}),r=a.steps.find(h=>h.from&&h.to&&h.asset&&h.amt),o=r?BC(r):null,c=ke.useMemo(()=>{const h=a.steps.map((g,v)=>IC(v,g.op,g.tx,g.status));return o&&h.push(o),h.push(a.chain),h},[a.steps,a.chain,o]),u=ke.useMemo(()=>{const h=a.steps.map((g,v)=>FC(v,g.op,g.tx));return o&&h.push(o),h},[a.steps,o]),d=dx(c,{...hx,enabled:i}),m=dx(u,{...hx,enabled:i});return D.jsxs("div",{ref:e,className:"persona-card__meta persona-card__meta--chain",children:[D.jsx("p",{className:"persona-card__meta-kind terminal-label",children:a.label}),D.jsx("div",{className:"persona-card__meta-rows",children:c.map((h,g)=>D.jsx(ln,{value:h,display:d.displays[g]??h,hidden:!(d.started[g]??!0)},`rows-${h}`))}),D.jsxs("div",{className:"persona-card__meta-compact",children:[D.jsx("p",{className:"terminal-label",children:a.label}),c.map((h,g)=>D.jsx(ln,{value:h,display:d.displays[g]??h,hidden:!(d.started[g]??!0)},`compact-${h}`))]}),D.jsxs("div",{className:"persona-card__meta-xxs",children:[D.jsx("p",{className:"terminal-label",children:a.label}),u.map((h,g)=>D.jsx(ln,{value:h,display:m.displays[g]??h,hidden:!(m.started[g]??!0)},`xxs-${h}`))]})]})}function VC({meta:a}){return a.kind==="identity"?D.jsx(zC,{meta:a}):a.kind==="chain"?D.jsx(GC,{meta:a}):D.jsx(HC,{meta:a})}function kC({persona:a}){return D.jsxs("article",{className:`persona-card persona-card--${a.weight}`,children:[D.jsx("h3",{className:"persona-card__title",children:a.title}),D.jsx("ol",{className:"persona-card__steps",children:a.steps.map(e=>D.jsxs("li",{children:[D.jsxs("span",{className:"persona-card__chevron","aria-hidden":!0,children:[">"," "]}),e]},e))}),D.jsx(Do,{href:a.cta.href,variant:"ghost",className:"persona-card__cta",children:a.cta.label}),D.jsx(VC,{meta:a.meta})]})}function XC(){return D.jsx("section",{id:"personas",className:"section personas",children:D.jsxs("div",{className:"container",children:[D.jsx("p",{className:"section-kicker",children:Qd.kicker}),D.jsx("h2",{className:"section-title personas__title",children:Qd.title}),D.jsx("div",{className:"personas__grid",children:Qd.items.map(a=>D.jsx(kC,{persona:a},a.title))})]})})}function WC(){const[a,e]=ke.useState(!1),[i,r]=ke.useState(!1),[o,c]=ke.useState("");return ke.useEffect(()=>{const u=()=>e(window.scrollY>24);return u(),window.addEventListener("scroll",u,{passive:!0}),()=>window.removeEventListener("scroll",u)},[]),ke.useEffect(()=>{const u=bu.map(m=>m.id),d=new IntersectionObserver(m=>{var g;const h=m.filter(v=>v.isIntersecting).sort((v,_)=>_.intersectionRatio-v.intersectionRatio);(g=h[0])!=null&&g.target.id&&c(h[0].target.id)},{rootMargin:"-30% 0px -55% 0px",threshold:[0,.25,.5]});return u.forEach(m=>{const h=document.getElementById(m);h&&d.observe(h)}),()=>d.disconnect()},[]),ke.useEffect(()=>(document.body.style.overflow=i?"hidden":"",()=>{document.body.style.overflow=""}),[i]),D.jsxs(D.Fragment,{children:[D.jsx("header",{className:`sticky-header ${a?"sticky-header--solid":""}`,children:D.jsxs("div",{className:"sticky-header__inner",children:[D.jsx("a",{className:"sticky-header__logo",href:"#hero","aria-label":"Morpheum home",children:D.jsx(qp,{size:"sm",brandName:"Morpheum"})}),D.jsx("nav",{className:"sticky-header__nav","aria-label":"Primary",children:bu.map(u=>D.jsx("a",{href:u.href,className:`sticky-header__link ${o===u.id?"is-active":""}`,children:u.label},u.id))}),D.jsxs("div",{className:"sticky-header__actions",children:[D.jsx("a",{className:"sticky-header__docs",href:Dn.docs,children:"Docs"}),D.jsx(Do,{href:Dn.app,variant:"primary",className:"sticky-header__launch",children:"Launch Demo"}),D.jsxs("button",{type:"button",className:"sticky-header__menu","aria-expanded":i,"aria-controls":"mobile-nav","aria-label":i?"Close menu":"Open menu",onClick:()=>r(u=>!u),children:[D.jsx("span",{}),D.jsx("span",{}),D.jsx("span",{})]})]})]})}),D.jsx("div",{id:"mobile-nav",className:`mobile-sheet ${i?"is-open":""}`,hidden:!i,children:D.jsxs("nav",{className:"mobile-sheet__nav","aria-label":"Mobile",children:[bu.map(u=>D.jsx("a",{href:u.href,onClick:()=>r(!1),className:o===u.id?"is-active":"",children:u.label},u.id)),D.jsx("a",{href:Dn.docs,onClick:()=>r(!1),children:"Docs"})]})})]})}function YC(){const a=ke.useRef(null),e=Qp(a,{amount:.35});return D.jsx("section",{className:"thesis section","aria-label":"Thesis",children:D.jsxs("div",{className:"container thesis__inner",children:[D.jsx("p",{ref:a,className:"thesis__close",children:e?D.jsxs(Kp,{text:H_.close,className:"thesis__close-type",speed:36,multiline:"auto",active:!0,holdCursor:!0,children:["The Agent-native"," ",D.jsx("span",{className:"thesis__close-accent",children:"L1 DEX"})," — ",D.jsx("span",{className:"thesis__close-phrase",children:"faster, safer trades."})]}):D.jsxs("span",{className:"thesis__close-type","aria-hidden":!0,children:["The Agent-native"," ",D.jsx("span",{className:"thesis__close-accent",children:"L1 DEX"})," — ",D.jsx("span",{className:"thesis__close-phrase",children:"faster, safer trades."})]})}),D.jsx("p",{className:"section-kicker",children:"Two Risks in Agentic Economy"}),D.jsx("div",{className:"thesis__risks",children:H_.risks.map(i=>D.jsxs("article",{className:"thesis__pair",children:[D.jsxs("div",{className:"thesis__risk",children:[D.jsx("p",{className:"thesis__label",children:"Risk"}),D.jsx("h3",{className:"thesis__risk-title",children:i.risk}),D.jsxs("p",{className:"thesis__failure",children:[D.jsx("span",{"aria-hidden":!0,children:"> "}),i.failure]})]}),D.jsxs("div",{className:"thesis__solve",children:[D.jsx("p",{className:"thesis__label thesis__label--solve",children:"Solution"}),D.jsx("p",{className:"thesis__solve-body",children:i.solve})]})]},i.risk))})]})})}function qC(){return D.jsxs("div",{className:"page",children:[D.jsx("a",{className:"skip-link",href:"#hero",children:"Skip to content"}),D.jsx(PC,{}),D.jsx(WC,{}),D.jsxs("main",{className:"page__main",children:[D.jsx(eC,{cardAlpha:0,modalChassisAlpha:.9,cardSize:.88}),D.jsx(OC,{contentOffsetY:0,maskAlpha:.5}),D.jsx(YC,{}),D.jsx(Ey,{}),D.jsx(XC,{}),D.jsx(TC,{}),D.jsx(Ty,{}),D.jsx(yy,{})]}),D.jsx(AC,{})]})}Sy.createRoot(document.getElementById("root")).render(D.jsx(ke.StrictMode,{children:D.jsx(qC,{})}));
