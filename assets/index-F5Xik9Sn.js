(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function i(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=i(o);fetch(o.href,c)}})();var yd={exports:{}},Qo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s_;function NM(){if(s_)return Qo;s_=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,o,c){var u=null;if(c!==void 0&&(u=""+c),o.key!==void 0&&(u=""+o.key),"key"in o){c={};for(var h in o)h!=="key"&&(c[h]=o[h])}else c=o;return o=c.ref,{$$typeof:a,type:r,key:u,ref:o!==void 0?o:null,props:c}}return Qo.Fragment=e,Qo.jsx=i,Qo.jsxs=i,Qo}var r_;function LM(){return r_||(r_=1,yd.exports=NM()),yd.exports}var H=LM(),Ed={exports:{}},lt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o_;function UM(){if(o_)return lt;o_=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),g=Symbol.iterator;function S(N){return N===null||typeof N!="object"?null:(N=g&&N[g]||N["@@iterator"],typeof N=="function"?N:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,M={};function y(N,j,ve){this.props=N,this.context=j,this.refs=M,this.updater=ve||E}y.prototype.isReactComponent={},y.prototype.setState=function(N,j){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,j,"setState")},y.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function O(){}O.prototype=y.prototype;function F(N,j,ve){this.props=N,this.context=j,this.refs=M,this.updater=ve||E}var w=F.prototype=new O;w.constructor=F,C(w,y.prototype),w.isPureReactComponent=!0;var P=Array.isArray;function D(){}var I={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function U(N,j,ve){var Te=ve.ref;return{$$typeof:a,type:N,key:j,ref:Te!==void 0?Te:null,props:ve}}function X(N,j){return U(N.type,j,N.props)}function z(N){return typeof N=="object"&&N!==null&&N.$$typeof===a}function k(N){var j={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(ve){return j[ve]})}var ce=/\/+/g;function ue(N,j){return typeof N=="object"&&N!==null&&N.key!=null?k(""+N.key):j.toString(36)}function Q(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(D,D):(N.status="pending",N.then(function(j){N.status==="pending"&&(N.status="fulfilled",N.value=j)},function(j){N.status==="pending"&&(N.status="rejected",N.reason=j)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function B(N,j,ve,Te,Ue){var ie=typeof N;(ie==="undefined"||ie==="boolean")&&(N=null);var ye=!1;if(N===null)ye=!0;else switch(ie){case"bigint":case"string":case"number":ye=!0;break;case"object":switch(N.$$typeof){case a:case e:ye=!0;break;case _:return ye=N._init,B(ye(N._payload),j,ve,Te,Ue)}}if(ye)return Ue=Ue(N),ye=Te===""?"."+ue(N,0):Te,P(Ue)?(ve="",ye!=null&&(ve=ye.replace(ce,"$&/")+"/"),B(Ue,j,ve,"",function(it){return it})):Ue!=null&&(z(Ue)&&(Ue=X(Ue,ve+(Ue.key==null||N&&N.key===Ue.key?"":(""+Ue.key).replace(ce,"$&/")+"/")+ye)),j.push(Ue)),1;ye=0;var Ee=Te===""?".":Te+":";if(P(N))for(var ze=0;ze<N.length;ze++)Te=N[ze],ie=Ee+ue(Te,ze),ye+=B(Te,j,ve,ie,Ue);else if(ze=S(N),typeof ze=="function")for(N=ze.call(N),ze=0;!(Te=N.next()).done;)Te=Te.value,ie=Ee+ue(Te,ze++),ye+=B(Te,j,ve,ie,Ue);else if(ie==="object"){if(typeof N.then=="function")return B(Q(N),j,ve,Te,Ue);throw j=String(N),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.")}return ye}function G(N,j,ve){if(N==null)return N;var Te=[],Ue=0;return B(N,Te,"","",function(ie){return j.call(ve,ie,Ue++)}),Te}function Y(N){if(N._status===-1){var j=N._result;j=j(),j.then(function(ve){(N._status===0||N._status===-1)&&(N._status=1,N._result=ve)},function(ve){(N._status===0||N._status===-1)&&(N._status=2,N._result=ve)}),N._status===-1&&(N._status=0,N._result=j)}if(N._status===1)return N._result.default;throw N._result}var fe=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var j=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(j))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},xe={map:G,forEach:function(N,j,ve){G(N,function(){j.apply(this,arguments)},ve)},count:function(N){var j=0;return G(N,function(){j++}),j},toArray:function(N){return G(N,function(j){return j})||[]},only:function(N){if(!z(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return lt.Activity=v,lt.Children=xe,lt.Component=y,lt.Fragment=i,lt.Profiler=o,lt.PureComponent=F,lt.StrictMode=r,lt.Suspense=m,lt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,lt.__COMPILER_RUNTIME={__proto__:null,c:function(N){return I.H.useMemoCache(N)}},lt.cache=function(N){return function(){return N.apply(null,arguments)}},lt.cacheSignal=function(){return null},lt.cloneElement=function(N,j,ve){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var Te=C({},N.props),Ue=N.key;if(j!=null)for(ie in j.key!==void 0&&(Ue=""+j.key),j)!T.call(j,ie)||ie==="key"||ie==="__self"||ie==="__source"||ie==="ref"&&j.ref===void 0||(Te[ie]=j[ie]);var ie=arguments.length-2;if(ie===1)Te.children=ve;else if(1<ie){for(var ye=Array(ie),Ee=0;Ee<ie;Ee++)ye[Ee]=arguments[Ee+2];Te.children=ye}return U(N.type,Ue,Te)},lt.createContext=function(N){return N={$$typeof:u,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:c,_context:N},N},lt.createElement=function(N,j,ve){var Te,Ue={},ie=null;if(j!=null)for(Te in j.key!==void 0&&(ie=""+j.key),j)T.call(j,Te)&&Te!=="key"&&Te!=="__self"&&Te!=="__source"&&(Ue[Te]=j[Te]);var ye=arguments.length-2;if(ye===1)Ue.children=ve;else if(1<ye){for(var Ee=Array(ye),ze=0;ze<ye;ze++)Ee[ze]=arguments[ze+2];Ue.children=Ee}if(N&&N.defaultProps)for(Te in ye=N.defaultProps,ye)Ue[Te]===void 0&&(Ue[Te]=ye[Te]);return U(N,ie,Ue)},lt.createRef=function(){return{current:null}},lt.forwardRef=function(N){return{$$typeof:h,render:N}},lt.isValidElement=z,lt.lazy=function(N){return{$$typeof:_,_payload:{_status:-1,_result:N},_init:Y}},lt.memo=function(N,j){return{$$typeof:p,type:N,compare:j===void 0?null:j}},lt.startTransition=function(N){var j=I.T,ve={};I.T=ve;try{var Te=N(),Ue=I.S;Ue!==null&&Ue(ve,Te),typeof Te=="object"&&Te!==null&&typeof Te.then=="function"&&Te.then(D,fe)}catch(ie){fe(ie)}finally{j!==null&&ve.types!==null&&(j.types=ve.types),I.T=j}},lt.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},lt.use=function(N){return I.H.use(N)},lt.useActionState=function(N,j,ve){return I.H.useActionState(N,j,ve)},lt.useCallback=function(N,j){return I.H.useCallback(N,j)},lt.useContext=function(N){return I.H.useContext(N)},lt.useDebugValue=function(){},lt.useDeferredValue=function(N,j){return I.H.useDeferredValue(N,j)},lt.useEffect=function(N,j){return I.H.useEffect(N,j)},lt.useEffectEvent=function(N){return I.H.useEffectEvent(N)},lt.useId=function(){return I.H.useId()},lt.useImperativeHandle=function(N,j,ve){return I.H.useImperativeHandle(N,j,ve)},lt.useInsertionEffect=function(N,j){return I.H.useInsertionEffect(N,j)},lt.useLayoutEffect=function(N,j){return I.H.useLayoutEffect(N,j)},lt.useMemo=function(N,j){return I.H.useMemo(N,j)},lt.useOptimistic=function(N,j){return I.H.useOptimistic(N,j)},lt.useReducer=function(N,j,ve){return I.H.useReducer(N,j,ve)},lt.useRef=function(N){return I.H.useRef(N)},lt.useState=function(N){return I.H.useState(N)},lt.useSyncExternalStore=function(N,j,ve){return I.H.useSyncExternalStore(N,j,ve)},lt.useTransition=function(){return I.H.useTransition()},lt.version="19.2.7",lt}var l_;function op(){return l_||(l_=1,Ed.exports=UM()),Ed.exports}var nt=op(),bd={exports:{}},Jo={},Td={exports:{}},Ad={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c_;function OM(){return c_||(c_=1,(function(a){function e(B,G){var Y=B.length;B.push(G);e:for(;0<Y;){var fe=Y-1>>>1,xe=B[fe];if(0<o(xe,G))B[fe]=G,B[Y]=xe,Y=fe;else break e}}function i(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var G=B[0],Y=B.pop();if(Y!==G){B[0]=Y;e:for(var fe=0,xe=B.length,N=xe>>>1;fe<N;){var j=2*(fe+1)-1,ve=B[j],Te=j+1,Ue=B[Te];if(0>o(ve,Y))Te<xe&&0>o(Ue,ve)?(B[fe]=Ue,B[Te]=Y,fe=Te):(B[fe]=ve,B[j]=Y,fe=j);else if(Te<xe&&0>o(Ue,Y))B[fe]=Ue,B[Te]=Y,fe=Te;else break e}}return G}function o(B,G){var Y=B.sortIndex-G.sortIndex;return Y!==0?Y:B.id-G.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;a.unstable_now=function(){return c.now()}}else{var u=Date,h=u.now();a.unstable_now=function(){return u.now()-h}}var m=[],p=[],_=1,v=null,g=3,S=!1,E=!1,C=!1,M=!1,y=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,F=typeof setImmediate<"u"?setImmediate:null;function w(B){for(var G=i(p);G!==null;){if(G.callback===null)r(p);else if(G.startTime<=B)r(p),G.sortIndex=G.expirationTime,e(m,G);else break;G=i(p)}}function P(B){if(C=!1,w(B),!E)if(i(m)!==null)E=!0,D||(D=!0,k());else{var G=i(p);G!==null&&Q(P,G.startTime-B)}}var D=!1,I=-1,T=5,U=-1;function X(){return M?!0:!(a.unstable_now()-U<T)}function z(){if(M=!1,D){var B=a.unstable_now();U=B;var G=!0;try{e:{E=!1,C&&(C=!1,O(I),I=-1),S=!0;var Y=g;try{t:{for(w(B),v=i(m);v!==null&&!(v.expirationTime>B&&X());){var fe=v.callback;if(typeof fe=="function"){v.callback=null,g=v.priorityLevel;var xe=fe(v.expirationTime<=B);if(B=a.unstable_now(),typeof xe=="function"){v.callback=xe,w(B),G=!0;break t}v===i(m)&&r(m),w(B)}else r(m);v=i(m)}if(v!==null)G=!0;else{var N=i(p);N!==null&&Q(P,N.startTime-B),G=!1}}break e}finally{v=null,g=Y,S=!1}G=void 0}}finally{G?k():D=!1}}}var k;if(typeof F=="function")k=function(){F(z)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,ue=ce.port2;ce.port1.onmessage=z,k=function(){ue.postMessage(null)}}else k=function(){y(z,0)};function Q(B,G){I=y(function(){B(a.unstable_now())},G)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(B){B.callback=null},a.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<B?Math.floor(1e3/B):5},a.unstable_getCurrentPriorityLevel=function(){return g},a.unstable_next=function(B){switch(g){case 1:case 2:case 3:var G=3;break;default:G=g}var Y=g;g=G;try{return B()}finally{g=Y}},a.unstable_requestPaint=function(){M=!0},a.unstable_runWithPriority=function(B,G){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var Y=g;g=B;try{return G()}finally{g=Y}},a.unstable_scheduleCallback=function(B,G,Y){var fe=a.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?fe+Y:fe):Y=fe,B){case 1:var xe=-1;break;case 2:xe=250;break;case 5:xe=1073741823;break;case 4:xe=1e4;break;default:xe=5e3}return xe=Y+xe,B={id:_++,callback:G,priorityLevel:B,startTime:Y,expirationTime:xe,sortIndex:-1},Y>fe?(B.sortIndex=Y,e(p,B),i(m)===null&&B===i(p)&&(C?(O(I),I=-1):C=!0,Q(P,Y-fe))):(B.sortIndex=xe,e(m,B),E||S||(E=!0,D||(D=!0,k()))),B},a.unstable_shouldYield=X,a.unstable_wrapCallback=function(B){var G=g;return function(){var Y=g;g=G;try{return B.apply(this,arguments)}finally{g=Y}}}})(Ad)),Ad}var u_;function PM(){return u_||(u_=1,Td.exports=OM()),Td.exports}var Rd={exports:{}},Gn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f_;function IM(){if(f_)return Gn;f_=1;var a=op();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(m,p,_){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:v==null?null:""+v,children:m,containerInfo:p,implementation:_}}var u=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Gn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Gn.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,_)},Gn.flushSync=function(m){var p=u.T,_=r.p;try{if(u.T=null,r.p=2,m)return m()}finally{u.T=p,r.p=_,r.d.f()}},Gn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Gn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Gn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,v=h(_,p.crossOrigin),g=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:g,fetchPriority:S}):_==="script"&&r.d.X(m,{crossOrigin:v,integrity:g,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Gn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=h(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Gn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,v=h(_,p.crossOrigin);r.d.L(m,_,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Gn.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=h(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Gn.requestFormReset=function(m){r.d.r(m)},Gn.unstable_batchedUpdates=function(m,p){return m(p)},Gn.useFormState=function(m,p,_){return u.H.useFormState(m,p,_)},Gn.useFormStatus=function(){return u.H.useHostTransitionStatus()},Gn.version="19.2.7",Gn}var d_;function wv(){if(d_)return Rd.exports;d_=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),Rd.exports=IM(),Rd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h_;function FM(){if(h_)return Jo;h_=1;var a=PM(),e=op(),i=wv();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)n+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,s=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(s=n.return),t=n.return;while(t)}return n.tag===3?s:null}function u(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(r(188))}function p(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var s=t,l=n;;){var f=s.return;if(f===null)break;var d=f.alternate;if(d===null){if(l=f.return,l!==null){s=l;continue}break}if(f.child===d.child){for(d=f.child;d;){if(d===s)return m(f),t;if(d===l)return m(f),n;d=d.sibling}throw Error(r(188))}if(s.return!==l.return)s=f,l=d;else{for(var x=!1,R=f.child;R;){if(R===s){x=!0,s=f,l=d;break}if(R===l){x=!0,l=f,s=d;break}R=R.sibling}if(!x){for(R=d.child;R;){if(R===s){x=!0,s=d,l=f;break}if(R===l){x=!0,l=d,s=f;break}R=R.sibling}if(!x)throw Error(r(189))}}if(s.alternate!==l)throw Error(r(190))}if(s.tag!==3)throw Error(r(188));return s.stateNode.current===s?t:n}function _(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=_(t),n!==null)return n;t=t.sibling}return null}var v=Object.assign,g=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),O=Symbol.for("react.consumer"),F=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),D=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),X=Symbol.for("react.memo_cache_sentinel"),z=Symbol.iterator;function k(t){return t===null||typeof t!="object"?null:(t=z&&t[z]||t["@@iterator"],typeof t=="function"?t:null)}var ce=Symbol.for("react.client.reference");function ue(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ce?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case C:return"Fragment";case y:return"Profiler";case M:return"StrictMode";case P:return"Suspense";case D:return"SuspenseList";case U:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case E:return"Portal";case F:return t.displayName||"Context";case O:return(t._context.displayName||"Context")+".Consumer";case w:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case I:return n=t.displayName||null,n!==null?n:ue(t.type)||"Memo";case T:n=t._payload,t=t._init;try{return ue(t(n))}catch{}}return null}var Q=Array.isArray,B=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},fe=[],xe=-1;function N(t){return{current:t}}function j(t){0>xe||(t.current=fe[xe],fe[xe]=null,xe--)}function ve(t,n){xe++,fe[xe]=t.current,t.current=n}var Te=N(null),Ue=N(null),ie=N(null),ye=N(null);function Ee(t,n){switch(ve(ie,n),ve(Ue,t),ve(Te,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Cg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Cg(n),t=wg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}j(Te),ve(Te,t)}function ze(){j(Te),j(Ue),j(ie)}function it(t){t.memoizedState!==null&&ve(ye,t);var n=Te.current,s=wg(n,t.type);n!==s&&(ve(Ue,t),ve(Te,s))}function Qe(t){Ue.current===t&&(j(Te),j(Ue)),ye.current===t&&(j(ye),Yo._currentValue=Y)}var Zt,ut;function vt(t){if(Zt===void 0)try{throw Error()}catch(s){var n=s.stack.trim().match(/\n( *(at )?)/);Zt=n&&n[1]||"",ut=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Zt+t+ut}var Ye=!1;function Ze(t,n){if(!t||Ye)return"";Ye=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(n){var Me=function(){throw Error()};if(Object.defineProperty(Me.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Me,[])}catch(de){var le=de}Reflect.construct(t,[],Me)}else{try{Me.call()}catch(de){le=de}t.call(Me.prototype)}}else{try{throw Error()}catch(de){le=de}(Me=t())&&typeof Me.catch=="function"&&Me.catch(function(){})}}catch(de){if(de&&le&&typeof de.stack=="string")return[de.stack,le.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),x=d[0],R=d[1];if(x&&R){var V=x.split(`
`),ae=R.split(`
`);for(f=l=0;l<V.length&&!V[l].includes("DetermineComponentFrameRoot");)l++;for(;f<ae.length&&!ae[f].includes("DetermineComponentFrameRoot");)f++;if(l===V.length||f===ae.length)for(l=V.length-1,f=ae.length-1;1<=l&&0<=f&&V[l]!==ae[f];)f--;for(;1<=l&&0<=f;l--,f--)if(V[l]!==ae[f]){if(l!==1||f!==1)do if(l--,f--,0>f||V[l]!==ae[f]){var _e=`
`+V[l].replace(" at new "," at ");return t.displayName&&_e.includes("<anonymous>")&&(_e=_e.replace("<anonymous>",t.displayName)),_e}while(1<=l&&0<=f);break}}}finally{Ye=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?vt(s):""}function ot(t,n){switch(t.tag){case 26:case 27:case 5:return vt(t.type);case 16:return vt("Lazy");case 13:return t.child!==n&&n!==null?vt("Suspense Fallback"):vt("Suspense");case 19:return vt("SuspenseList");case 0:case 15:return Ze(t.type,!1);case 11:return Ze(t.type.render,!1);case 1:return Ze(t.type,!0);case 31:return vt("Activity");default:return""}}function mt(t){try{var n="",s=null;do n+=ot(t,s),s=t,t=t.return;while(t);return n}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var wt=Object.prototype.hasOwnProperty,Dt=a.unstable_scheduleCallback,ft=a.unstable_cancelCallback,_t=a.unstable_shouldYield,q=a.unstable_requestPaint,Mt=a.unstable_now,St=a.unstable_getCurrentPriorityLevel,L=a.unstable_ImmediatePriority,b=a.unstable_UserBlockingPriority,$=a.unstable_NormalPriority,te=a.unstable_LowPriority,he=a.unstable_IdlePriority,Ce=a.log,De=a.unstable_setDisableYieldValue,pe=null,me=null;function Ae(t){if(typeof Ce=="function"&&De(t),me&&typeof me.setStrictMode=="function")try{me.setStrictMode(pe,t)}catch{}}var Be=Math.clz32?Math.clz32:Je,Ne=Math.log,Le=Math.LN2;function Je(t){return t>>>=0,t===0?32:31-(Ne(t)/Le|0)|0}var je=256,st=262144,Z=4194304;function Re(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ge(t,n,s){var l=t.pendingLanes;if(l===0)return 0;var f=0,d=t.suspendedLanes,x=t.pingedLanes;t=t.warmLanes;var R=l&134217727;return R!==0?(l=R&~d,l!==0?f=Re(l):(x&=R,x!==0?f=Re(x):s||(s=R&~t,s!==0&&(f=Re(s))))):(R=l&~d,R!==0?f=Re(R):x!==0?f=Re(x):s||(s=l&~t,s!==0&&(f=Re(s)))),f===0?0:n!==0&&n!==f&&(n&d)===0&&(d=f&-f,s=n&-n,d>=s||d===32&&(s&4194048)!==0)?n:f}function we(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Pe(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function be(){var t=Z;return Z<<=1,(Z&62914560)===0&&(Z=4194304),t}function Xe(t){for(var n=[],s=0;31>s;s++)n.push(t);return n}function He(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Gt(t,n,s,l,f,d){var x=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var R=t.entanglements,V=t.expirationTimes,ae=t.hiddenUpdates;for(s=x&~s;0<s;){var _e=31-Be(s),Me=1<<_e;R[_e]=0,V[_e]=-1;var le=ae[_e];if(le!==null)for(ae[_e]=null,_e=0;_e<le.length;_e++){var de=le[_e];de!==null&&(de.lane&=-536870913)}s&=~Me}l!==0&&Lt(t,l,0),d!==0&&f===0&&t.tag!==0&&(t.suspendedLanes|=d&~(x&~n))}function Lt(t,n,s){t.pendingLanes|=n,t.suspendedLanes&=~n;var l=31-Be(n);t.entangledLanes|=n,t.entanglements[l]=t.entanglements[l]|1073741824|s&261930}function Wn(t,n){var s=t.entangledLanes|=n;for(t=t.entanglements;s;){var l=31-Be(s),f=1<<l;f&n|t[l]&n&&(t[l]|=n),s&=~f}}function zn(t,n){var s=n&-n;return s=(s&42)!==0?1:Fa(s),(s&(t.suspendedLanes|n))!==0?0:s}function Fa(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function mn(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Tn(){var t=G.p;return t!==0?t:(t=window.event,t===void 0?32:Jg(t.type))}function ri(t,n){var s=G.p;try{return G.p=t,n()}finally{G.p=s}}var gn=Math.random().toString(36).slice(2),Ot="__reactFiber$"+gn,tn="__reactProps$"+gn,Dn="__reactContainer$"+gn,Jn="__reactEvents$"+gn,ys="__reactListeners$"+gn,Ba="__reactHandles$"+gn,Wi="__reactResources$"+gn,za="__reactMarker$"+gn;function Ha(t){delete t[Ot],delete t[tn],delete t[Jn],delete t[ys],delete t[Ba]}function oa(t){var n=t[Ot];if(n)return n;for(var s=t.parentNode;s;){if(n=s[Dn]||s[Ot]){if(s=n.alternate,n.child!==null||s!==null&&s.child!==null)for(t=Ig(t);t!==null;){if(s=t[Ot])return s;t=Ig(t)}return n}t=s,s=t.parentNode}return null}function la(t){if(t=t[Ot]||t[Dn]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function Es(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function Ga(t){var n=t[Wi];return n||(n=t[Wi]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function _n(t){t[za]=!0}var Sl=new Set,A={};function K(t,n){oe(t,n),oe(t+"Capture",n)}function oe(t,n){for(A[t]=n,t=0;t<n.length;t++)Sl.add(n[t])}var se=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),re={},Ie={};function Ve(t){return wt.call(Ie,t)?!0:wt.call(re,t)?!1:se.test(t)?Ie[t]=!0:(re[t]=!0,!1)}function Oe(t,n,s){if(Ve(n))if(s===null)t.removeAttribute(n);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var l=n.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+s)}}function We(t,n,s){if(s===null)t.removeAttribute(n);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+s)}}function ke(t,n,s,l){if(l===null)t.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(n,s,""+l)}}function et(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function dt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function $e(t,n,s){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,d=l.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return f.call(this)},set:function(x){s=""+x,d.call(this,x)}}),Object.defineProperty(t,n,{enumerable:l.enumerable}),{getValue:function(){return s},setValue:function(x){s=""+x},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Pt(t){if(!t._valueTracker){var n=dt(t)?"checked":"value";t._valueTracker=$e(t,n,""+t[n])}}function rn(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var s=n.getValue(),l="";return t&&(l=dt(t)?t.checked?"true":"false":t.value),t=l,t!==s?(n.setValue(t),!0):!1}function Jt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Vt=/[\n"\\]/g;function kt(t){return t.replace(Vt,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ge(t,n,s,l,f,d,x,R){t.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?t.type=x:t.removeAttribute("type"),n!=null?x==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+et(n)):t.value!==""+et(n)&&(t.value=""+et(n)):x!=="submit"&&x!=="reset"||t.removeAttribute("value"),n!=null?yt(t,x,et(n)):s!=null?yt(t,x,et(s)):l!=null&&t.removeAttribute("value"),f==null&&d!=null&&(t.defaultChecked=!!d),f!=null&&(t.checked=f&&typeof f!="function"&&typeof f!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?t.name=""+et(R):t.removeAttribute("name")}function Hn(t,n,s,l,f,d,x,R){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),n!=null||s!=null){if(!(d!=="submit"&&d!=="reset"||n!=null)){Pt(t);return}s=s!=null?""+et(s):"",n=n!=null?""+et(n):s,R||n===t.value||(t.value=n),t.defaultValue=n}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=R?t.checked:!!l,t.defaultChecked=!!l,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(t.name=x),Pt(t)}function yt(t,n,s){n==="number"&&Jt(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function An(t,n,s,l){if(t=t.options,n){n={};for(var f=0;f<s.length;f++)n["$"+s[f]]=!0;for(s=0;s<t.length;s++)f=n.hasOwnProperty("$"+t[s].value),t[s].selected!==f&&(t[s].selected=f),f&&l&&(t[s].defaultSelected=!0)}else{for(s=""+et(s),n=null,f=0;f<t.length;f++){if(t[f].value===s){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}n!==null||t[f].disabled||(n=t[f])}n!==null&&(n.selected=!0)}}function oi(t,n,s){if(n!=null&&(n=""+et(n),n!==t.value&&(t.value=n),s==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=s!=null?""+et(s):""}function Ui(t,n,s,l){if(n==null){if(l!=null){if(s!=null)throw Error(r(92));if(Q(l)){if(1<l.length)throw Error(r(93));l=l[0]}s=l}s==null&&(s=""),n=s}s=et(n),t.defaultValue=s,l=t.textContent,l===s&&l!==""&&l!==null&&(t.value=l),Pt(t)}function li(t,n){if(n){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=n;return}}t.textContent=n}var Xt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function on(t,n,s){var l=n.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":l?t.setProperty(n,s):typeof s!="number"||s===0||Xt.has(n)?n==="float"?t.cssFloat=s:t[n]=(""+s).trim():t[n]=s+"px"}function Oi(t,n,s){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||n!=null&&n.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var f in n)l=n[f],n.hasOwnProperty(f)&&s[f]!==l&&on(t,f,l)}else for(var d in n)n.hasOwnProperty(d)&&on(t,d,n[d])}function Ht(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Va=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function bs(t){return Va.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ca(){}var vu=null;function Su(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var nr=null,ir=null;function Rp(t){var n=la(t);if(n&&(t=n.stateNode)){var s=t[tn]||null;e:switch(t=n.stateNode,n.type){case"input":if(Ge(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),n=s.name,s.type==="radio"&&n!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+kt(""+n)+'"][type="radio"]'),n=0;n<s.length;n++){var l=s[n];if(l!==t&&l.form===t.form){var f=l[tn]||null;if(!f)throw Error(r(90));Ge(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(n=0;n<s.length;n++)l=s[n],l.form===t.form&&rn(l)}break e;case"textarea":oi(t,s.value,s.defaultValue);break e;case"select":n=s.value,n!=null&&An(t,!!s.multiple,n,!1)}}}var xu=!1;function Cp(t,n,s){if(xu)return t(n,s);xu=!0;try{var l=t(n);return l}finally{if(xu=!1,(nr!==null||ir!==null)&&(rc(),nr&&(n=nr,t=ir,ir=nr=null,Rp(n),t)))for(n=0;n<t.length;n++)Rp(t[n])}}function co(t,n){var s=t.stateNode;if(s===null)return null;var l=s[tn]||null;if(l===null)return null;s=l[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(r(231,n,typeof s));return s}var ua=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Mu=!1;if(ua)try{var uo={};Object.defineProperty(uo,"passive",{get:function(){Mu=!0}}),window.addEventListener("test",uo,uo),window.removeEventListener("test",uo,uo)}catch{Mu=!1}var ka=null,yu=null,xl=null;function wp(){if(xl)return xl;var t,n=yu,s=n.length,l,f="value"in ka?ka.value:ka.textContent,d=f.length;for(t=0;t<s&&n[t]===f[t];t++);var x=s-t;for(l=1;l<=x&&n[s-l]===f[d-l];l++);return xl=f.slice(t,1<l?1-l:void 0)}function Ml(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function yl(){return!0}function Dp(){return!1}function $n(t){function n(s,l,f,d,x){this._reactName=s,this._targetInst=f,this.type=l,this.nativeEvent=d,this.target=x,this.currentTarget=null;for(var R in t)t.hasOwnProperty(R)&&(s=t[R],this[R]=s?s(d):d[R]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?yl:Dp,this.isPropagationStopped=Dp,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=yl)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=yl)},persist:function(){},isPersistent:yl}),n}var Ts={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},El=$n(Ts),fo=v({},Ts,{view:0,detail:0}),wS=$n(fo),Eu,bu,ho,bl=v({},fo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Au,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ho&&(ho&&t.type==="mousemove"?(Eu=t.screenX-ho.screenX,bu=t.screenY-ho.screenY):bu=Eu=0,ho=t),Eu)},movementY:function(t){return"movementY"in t?t.movementY:bu}}),Np=$n(bl),DS=v({},bl,{dataTransfer:0}),NS=$n(DS),LS=v({},fo,{relatedTarget:0}),Tu=$n(LS),US=v({},Ts,{animationName:0,elapsedTime:0,pseudoElement:0}),OS=$n(US),PS=v({},Ts,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),IS=$n(PS),FS=v({},Ts,{data:0}),Lp=$n(FS),BS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},HS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function GS(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=HS[t])?!!n[t]:!1}function Au(){return GS}var VS=v({},fo,{key:function(t){if(t.key){var n=BS[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Ml(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?zS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Au,charCode:function(t){return t.type==="keypress"?Ml(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ml(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),kS=$n(VS),XS=v({},bl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Up=$n(XS),WS=v({},fo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Au}),qS=$n(WS),YS=v({},Ts,{propertyName:0,elapsedTime:0,pseudoElement:0}),ZS=$n(YS),jS=v({},bl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),KS=$n(jS),QS=v({},Ts,{newState:0,oldState:0}),JS=$n(QS),$S=[9,13,27,32],Ru=ua&&"CompositionEvent"in window,po=null;ua&&"documentMode"in document&&(po=document.documentMode);var ex=ua&&"TextEvent"in window&&!po,Op=ua&&(!Ru||po&&8<po&&11>=po),Pp=" ",Ip=!1;function Fp(t,n){switch(t){case"keyup":return $S.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ar=!1;function tx(t,n){switch(t){case"compositionend":return Bp(n);case"keypress":return n.which!==32?null:(Ip=!0,Pp);case"textInput":return t=n.data,t===Pp&&Ip?null:t;default:return null}}function nx(t,n){if(ar)return t==="compositionend"||!Ru&&Fp(t,n)?(t=wp(),xl=yu=ka=null,ar=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Op&&n.locale!=="ko"?null:n.data;default:return null}}var ix={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!ix[t.type]:n==="textarea"}function Hp(t,n,s,l){nr?ir?ir.push(l):ir=[l]:nr=l,n=hc(n,"onChange"),0<n.length&&(s=new El("onChange","change",null,s,l),t.push({event:s,listeners:n}))}var mo=null,go=null;function ax(t){yg(t,0)}function Tl(t){var n=Es(t);if(rn(n))return t}function Gp(t,n){if(t==="change")return n}var Vp=!1;if(ua){var Cu;if(ua){var wu="oninput"in document;if(!wu){var kp=document.createElement("div");kp.setAttribute("oninput","return;"),wu=typeof kp.oninput=="function"}Cu=wu}else Cu=!1;Vp=Cu&&(!document.documentMode||9<document.documentMode)}function Xp(){mo&&(mo.detachEvent("onpropertychange",Wp),go=mo=null)}function Wp(t){if(t.propertyName==="value"&&Tl(go)){var n=[];Hp(n,go,t,Su(t)),Cp(ax,n)}}function sx(t,n,s){t==="focusin"?(Xp(),mo=n,go=s,mo.attachEvent("onpropertychange",Wp)):t==="focusout"&&Xp()}function rx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Tl(go)}function ox(t,n){if(t==="click")return Tl(n)}function lx(t,n){if(t==="input"||t==="change")return Tl(n)}function cx(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var ci=typeof Object.is=="function"?Object.is:cx;function _o(t,n){if(ci(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var s=Object.keys(t),l=Object.keys(n);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var f=s[l];if(!wt.call(n,f)||!ci(t[f],n[f]))return!1}return!0}function qp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Yp(t,n){var s=qp(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=n&&l>=n)return{node:s,offset:n-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=qp(s)}}function Zp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Zp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function jp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Jt(t.document);n instanceof t.HTMLIFrameElement;){try{var s=typeof n.contentWindow.location.href=="string"}catch{s=!1}if(s)t=n.contentWindow;else break;n=Jt(t.document)}return n}function Du(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var ux=ua&&"documentMode"in document&&11>=document.documentMode,sr=null,Nu=null,vo=null,Lu=!1;function Kp(t,n,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Lu||sr==null||sr!==Jt(l)||(l=sr,"selectionStart"in l&&Du(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),vo&&_o(vo,l)||(vo=l,l=hc(Nu,"onSelect"),0<l.length&&(n=new El("onSelect","select",null,n,s),t.push({event:n,listeners:l}),n.target=sr)))}function As(t,n){var s={};return s[t.toLowerCase()]=n.toLowerCase(),s["Webkit"+t]="webkit"+n,s["Moz"+t]="moz"+n,s}var rr={animationend:As("Animation","AnimationEnd"),animationiteration:As("Animation","AnimationIteration"),animationstart:As("Animation","AnimationStart"),transitionrun:As("Transition","TransitionRun"),transitionstart:As("Transition","TransitionStart"),transitioncancel:As("Transition","TransitionCancel"),transitionend:As("Transition","TransitionEnd")},Uu={},Qp={};ua&&(Qp=document.createElement("div").style,"AnimationEvent"in window||(delete rr.animationend.animation,delete rr.animationiteration.animation,delete rr.animationstart.animation),"TransitionEvent"in window||delete rr.transitionend.transition);function Rs(t){if(Uu[t])return Uu[t];if(!rr[t])return t;var n=rr[t],s;for(s in n)if(n.hasOwnProperty(s)&&s in Qp)return Uu[t]=n[s];return t}var Jp=Rs("animationend"),$p=Rs("animationiteration"),em=Rs("animationstart"),fx=Rs("transitionrun"),dx=Rs("transitionstart"),hx=Rs("transitioncancel"),tm=Rs("transitionend"),nm=new Map,Ou="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ou.push("scrollEnd");function Pi(t,n){nm.set(t,n),K(n,[t])}var Al=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Si=[],or=0,Pu=0;function Rl(){for(var t=or,n=Pu=or=0;n<t;){var s=Si[n];Si[n++]=null;var l=Si[n];Si[n++]=null;var f=Si[n];Si[n++]=null;var d=Si[n];if(Si[n++]=null,l!==null&&f!==null){var x=l.pending;x===null?f.next=f:(f.next=x.next,x.next=f),l.pending=f}d!==0&&im(s,f,d)}}function Cl(t,n,s,l){Si[or++]=t,Si[or++]=n,Si[or++]=s,Si[or++]=l,Pu|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function Iu(t,n,s,l){return Cl(t,n,s,l),wl(t)}function Cs(t,n){return Cl(t,null,null,n),wl(t)}function im(t,n,s){t.lanes|=s;var l=t.alternate;l!==null&&(l.lanes|=s);for(var f=!1,d=t.return;d!==null;)d.childLanes|=s,l=d.alternate,l!==null&&(l.childLanes|=s),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(f=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,f&&n!==null&&(f=31-Be(s),t=d.hiddenUpdates,l=t[f],l===null?t[f]=[n]:l.push(n),n.lane=s|536870912),d):null}function wl(t){if(50<Ho)throw Ho=0,qf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var lr={};function px(t,n,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ui(t,n,s,l){return new px(t,n,s,l)}function Fu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function fa(t,n){var s=t.alternate;return s===null?(s=ui(t.tag,n,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=n,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&65011712,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,n=t.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function am(t,n){t.flags&=65011714;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,n=s.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Dl(t,n,s,l,f,d){var x=0;if(l=t,typeof t=="function")Fu(t)&&(x=1);else if(typeof t=="string")x=SM(t,s,Te.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case U:return t=ui(31,s,n,f),t.elementType=U,t.lanes=d,t;case C:return ws(s.children,f,d,n);case M:x=8,f|=24;break;case y:return t=ui(12,s,n,f|2),t.elementType=y,t.lanes=d,t;case P:return t=ui(13,s,n,f),t.elementType=P,t.lanes=d,t;case D:return t=ui(19,s,n,f),t.elementType=D,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case F:x=10;break e;case O:x=9;break e;case w:x=11;break e;case I:x=14;break e;case T:x=16,l=null;break e}x=29,s=Error(r(130,t===null?"null":typeof t,"")),l=null}return n=ui(x,s,n,f),n.elementType=t,n.type=l,n.lanes=d,n}function ws(t,n,s,l){return t=ui(7,t,l,n),t.lanes=s,t}function Bu(t,n,s){return t=ui(6,t,null,n),t.lanes=s,t}function sm(t){var n=ui(18,null,null,0);return n.stateNode=t,n}function zu(t,n,s){return n=ui(4,t.children!==null?t.children:[],t.key,n),n.lanes=s,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var rm=new WeakMap;function xi(t,n){if(typeof t=="object"&&t!==null){var s=rm.get(t);return s!==void 0?s:(n={value:t,source:n,stack:mt(n)},rm.set(t,n),n)}return{value:t,source:n,stack:mt(n)}}var cr=[],ur=0,Nl=null,So=0,Mi=[],yi=0,Xa=null,Yi=1,Zi="";function da(t,n){cr[ur++]=So,cr[ur++]=Nl,Nl=t,So=n}function om(t,n,s){Mi[yi++]=Yi,Mi[yi++]=Zi,Mi[yi++]=Xa,Xa=t;var l=Yi;t=Zi;var f=32-Be(l)-1;l&=~(1<<f),s+=1;var d=32-Be(n)+f;if(30<d){var x=f-f%5;d=(l&(1<<x)-1).toString(32),l>>=x,f-=x,Yi=1<<32-Be(n)+f|s<<f|l,Zi=d+t}else Yi=1<<d|s<<f|l,Zi=t}function Hu(t){t.return!==null&&(da(t,1),om(t,1,0))}function Gu(t){for(;t===Nl;)Nl=cr[--ur],cr[ur]=null,So=cr[--ur],cr[ur]=null;for(;t===Xa;)Xa=Mi[--yi],Mi[yi]=null,Zi=Mi[--yi],Mi[yi]=null,Yi=Mi[--yi],Mi[yi]=null}function lm(t,n){Mi[yi++]=Yi,Mi[yi++]=Zi,Mi[yi++]=Xa,Yi=n.id,Zi=n.overflow,Xa=t}var On=null,nn=null,Rt=!1,Wa=null,Ei=!1,Vu=Error(r(519));function qa(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw xo(xi(n,t)),Vu}function cm(t){var n=t.stateNode,s=t.type,l=t.memoizedProps;switch(n[Ot]=t,n[tn]=l,s){case"dialog":bt("cancel",n),bt("close",n);break;case"iframe":case"object":case"embed":bt("load",n);break;case"video":case"audio":for(s=0;s<Vo.length;s++)bt(Vo[s],n);break;case"source":bt("error",n);break;case"img":case"image":case"link":bt("error",n),bt("load",n);break;case"details":bt("toggle",n);break;case"input":bt("invalid",n),Hn(n,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":bt("invalid",n);break;case"textarea":bt("invalid",n),Ui(n,l.value,l.defaultValue,l.children)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||n.textContent===""+s||l.suppressHydrationWarning===!0||Ag(n.textContent,s)?(l.popover!=null&&(bt("beforetoggle",n),bt("toggle",n)),l.onScroll!=null&&bt("scroll",n),l.onScrollEnd!=null&&bt("scrollend",n),l.onClick!=null&&(n.onclick=ca),n=!0):n=!1,n||qa(t,!0)}function um(t){for(On=t.return;On;)switch(On.tag){case 5:case 31:case 13:Ei=!1;return;case 27:case 3:Ei=!0;return;default:On=On.return}}function fr(t){if(t!==On)return!1;if(!Rt)return um(t),Rt=!0,!1;var n=t.tag,s;if((s=n!==3&&n!==27)&&((s=n===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||od(t.type,t.memoizedProps)),s=!s),s&&nn&&qa(t),um(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));nn=Pg(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));nn=Pg(t)}else n===27?(n=nn,rs(t.type)?(t=dd,dd=null,nn=t):nn=n):nn=On?Ti(t.stateNode.nextSibling):null;return!0}function Ds(){nn=On=null,Rt=!1}function ku(){var t=Wa;return t!==null&&(ii===null?ii=t:ii.push.apply(ii,t),Wa=null),t}function xo(t){Wa===null?Wa=[t]:Wa.push(t)}var Xu=N(null),Ns=null,ha=null;function Ya(t,n,s){ve(Xu,n._currentValue),n._currentValue=s}function pa(t){t._currentValue=Xu.current,j(Xu)}function Wu(t,n,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),t===s)break;t=t.return}}function qu(t,n,s,l){var f=t.child;for(f!==null&&(f.return=t);f!==null;){var d=f.dependencies;if(d!==null){var x=f.child;d=d.firstContext;e:for(;d!==null;){var R=d;d=f;for(var V=0;V<n.length;V++)if(R.context===n[V]){d.lanes|=s,R=d.alternate,R!==null&&(R.lanes|=s),Wu(d.return,s,t),l||(x=null);break e}d=R.next}}else if(f.tag===18){if(x=f.return,x===null)throw Error(r(341));x.lanes|=s,d=x.alternate,d!==null&&(d.lanes|=s),Wu(x,s,t),x=null}else x=f.child;if(x!==null)x.return=f;else for(x=f;x!==null;){if(x===t){x=null;break}if(f=x.sibling,f!==null){f.return=x.return,x=f;break}x=x.return}f=x}}function dr(t,n,s,l){t=null;for(var f=n,d=!1;f!==null;){if(!d){if((f.flags&524288)!==0)d=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var x=f.alternate;if(x===null)throw Error(r(387));if(x=x.memoizedProps,x!==null){var R=f.type;ci(f.pendingProps.value,x.value)||(t!==null?t.push(R):t=[R])}}else if(f===ye.current){if(x=f.alternate,x===null)throw Error(r(387));x.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(t!==null?t.push(Yo):t=[Yo])}f=f.return}t!==null&&qu(n,t,s,l),n.flags|=262144}function Ll(t){for(t=t.firstContext;t!==null;){if(!ci(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ls(t){Ns=t,ha=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Pn(t){return fm(Ns,t)}function Ul(t,n){return Ns===null&&Ls(t),fm(t,n)}function fm(t,n){var s=n._currentValue;if(n={context:n,memoizedValue:s,next:null},ha===null){if(t===null)throw Error(r(308));ha=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ha=ha.next=n;return s}var mx=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(s,l){t.push(l)}};this.abort=function(){n.aborted=!0,t.forEach(function(s){return s()})}},gx=a.unstable_scheduleCallback,_x=a.unstable_NormalPriority,vn={$$typeof:F,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Yu(){return{controller:new mx,data:new Map,refCount:0}}function Mo(t){t.refCount--,t.refCount===0&&gx(_x,function(){t.controller.abort()})}var yo=null,Zu=0,hr=0,pr=null;function vx(t,n){if(yo===null){var s=yo=[];Zu=0,hr=Jf(),pr={status:"pending",value:void 0,then:function(l){s.push(l)}}}return Zu++,n.then(dm,dm),n}function dm(){if(--Zu===0&&yo!==null){pr!==null&&(pr.status="fulfilled");var t=yo;yo=null,hr=0,pr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Sx(t,n){var s=[],l={status:"pending",value:null,reason:null,then:function(f){s.push(f)}};return t.then(function(){l.status="fulfilled",l.value=n;for(var f=0;f<s.length;f++)(0,s[f])(n)},function(f){for(l.status="rejected",l.reason=f,f=0;f<s.length;f++)(0,s[f])(void 0)}),l}var hm=B.S;B.S=function(t,n){K0=Mt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&vx(t,n),hm!==null&&hm(t,n)};var Us=N(null);function ju(){var t=Us.current;return t!==null?t:$t.pooledCache}function Ol(t,n){n===null?ve(Us,Us.current):ve(Us,n.pool)}function pm(){var t=ju();return t===null?null:{parent:vn._currentValue,pool:t}}var mr=Error(r(460)),Ku=Error(r(474)),Pl=Error(r(542)),Il={then:function(){}};function mm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function gm(t,n,s){switch(s=t[s],s===void 0?t.push(n):s!==n&&(n.then(ca,ca),n=s),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,vm(t),t;default:if(typeof n.status=="string")n.then(ca,ca);else{if(t=$t,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(l){if(n.status==="pending"){var f=n;f.status="fulfilled",f.value=l}},function(l){if(n.status==="pending"){var f=n;f.status="rejected",f.reason=l}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,vm(t),t}throw Ps=n,mr}}function Os(t){try{var n=t._init;return n(t._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(Ps=s,mr):s}}var Ps=null;function _m(){if(Ps===null)throw Error(r(459));var t=Ps;return Ps=null,t}function vm(t){if(t===mr||t===Pl)throw Error(r(483))}var gr=null,Eo=0;function Fl(t){var n=Eo;return Eo+=1,gr===null&&(gr=[]),gm(gr,t,n)}function bo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Bl(t,n){throw n.$$typeof===g?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Sm(t){function n(J,W){if(t){var ne=J.deletions;ne===null?(J.deletions=[W],J.flags|=16):ne.push(W)}}function s(J,W){if(!t)return null;for(;W!==null;)n(J,W),W=W.sibling;return null}function l(J){for(var W=new Map;J!==null;)J.key!==null?W.set(J.key,J):W.set(J.index,J),J=J.sibling;return W}function f(J,W){return J=fa(J,W),J.index=0,J.sibling=null,J}function d(J,W,ne){return J.index=ne,t?(ne=J.alternate,ne!==null?(ne=ne.index,ne<W?(J.flags|=67108866,W):ne):(J.flags|=67108866,W)):(J.flags|=1048576,W)}function x(J){return t&&J.alternate===null&&(J.flags|=67108866),J}function R(J,W,ne,Se){return W===null||W.tag!==6?(W=Bu(ne,J.mode,Se),W.return=J,W):(W=f(W,ne),W.return=J,W)}function V(J,W,ne,Se){var tt=ne.type;return tt===C?_e(J,W,ne.props.children,Se,ne.key):W!==null&&(W.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===T&&Os(tt)===W.type)?(W=f(W,ne.props),bo(W,ne),W.return=J,W):(W=Dl(ne.type,ne.key,ne.props,null,J.mode,Se),bo(W,ne),W.return=J,W)}function ae(J,W,ne,Se){return W===null||W.tag!==4||W.stateNode.containerInfo!==ne.containerInfo||W.stateNode.implementation!==ne.implementation?(W=zu(ne,J.mode,Se),W.return=J,W):(W=f(W,ne.children||[]),W.return=J,W)}function _e(J,W,ne,Se,tt){return W===null||W.tag!==7?(W=ws(ne,J.mode,Se,tt),W.return=J,W):(W=f(W,ne),W.return=J,W)}function Me(J,W,ne){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=Bu(""+W,J.mode,ne),W.return=J,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case S:return ne=Dl(W.type,W.key,W.props,null,J.mode,ne),bo(ne,W),ne.return=J,ne;case E:return W=zu(W,J.mode,ne),W.return=J,W;case T:return W=Os(W),Me(J,W,ne)}if(Q(W)||k(W))return W=ws(W,J.mode,ne,null),W.return=J,W;if(typeof W.then=="function")return Me(J,Fl(W),ne);if(W.$$typeof===F)return Me(J,Ul(J,W),ne);Bl(J,W)}return null}function le(J,W,ne,Se){var tt=W!==null?W.key:null;if(typeof ne=="string"&&ne!==""||typeof ne=="number"||typeof ne=="bigint")return tt!==null?null:R(J,W,""+ne,Se);if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case S:return ne.key===tt?V(J,W,ne,Se):null;case E:return ne.key===tt?ae(J,W,ne,Se):null;case T:return ne=Os(ne),le(J,W,ne,Se)}if(Q(ne)||k(ne))return tt!==null?null:_e(J,W,ne,Se,null);if(typeof ne.then=="function")return le(J,W,Fl(ne),Se);if(ne.$$typeof===F)return le(J,W,Ul(J,ne),Se);Bl(J,ne)}return null}function de(J,W,ne,Se,tt){if(typeof Se=="string"&&Se!==""||typeof Se=="number"||typeof Se=="bigint")return J=J.get(ne)||null,R(W,J,""+Se,tt);if(typeof Se=="object"&&Se!==null){switch(Se.$$typeof){case S:return J=J.get(Se.key===null?ne:Se.key)||null,V(W,J,Se,tt);case E:return J=J.get(Se.key===null?ne:Se.key)||null,ae(W,J,Se,tt);case T:return Se=Os(Se),de(J,W,ne,Se,tt)}if(Q(Se)||k(Se))return J=J.get(ne)||null,_e(W,J,Se,tt,null);if(typeof Se.then=="function")return de(J,W,ne,Fl(Se),tt);if(Se.$$typeof===F)return de(J,W,ne,Ul(W,Se),tt);Bl(W,Se)}return null}function qe(J,W,ne,Se){for(var tt=null,It=null,Ke=W,pt=W=0,At=null;Ke!==null&&pt<ne.length;pt++){Ke.index>pt?(At=Ke,Ke=null):At=Ke.sibling;var Ft=le(J,Ke,ne[pt],Se);if(Ft===null){Ke===null&&(Ke=At);break}t&&Ke&&Ft.alternate===null&&n(J,Ke),W=d(Ft,W,pt),It===null?tt=Ft:It.sibling=Ft,It=Ft,Ke=At}if(pt===ne.length)return s(J,Ke),Rt&&da(J,pt),tt;if(Ke===null){for(;pt<ne.length;pt++)Ke=Me(J,ne[pt],Se),Ke!==null&&(W=d(Ke,W,pt),It===null?tt=Ke:It.sibling=Ke,It=Ke);return Rt&&da(J,pt),tt}for(Ke=l(Ke);pt<ne.length;pt++)At=de(Ke,J,pt,ne[pt],Se),At!==null&&(t&&At.alternate!==null&&Ke.delete(At.key===null?pt:At.key),W=d(At,W,pt),It===null?tt=At:It.sibling=At,It=At);return t&&Ke.forEach(function(fs){return n(J,fs)}),Rt&&da(J,pt),tt}function at(J,W,ne,Se){if(ne==null)throw Error(r(151));for(var tt=null,It=null,Ke=W,pt=W=0,At=null,Ft=ne.next();Ke!==null&&!Ft.done;pt++,Ft=ne.next()){Ke.index>pt?(At=Ke,Ke=null):At=Ke.sibling;var fs=le(J,Ke,Ft.value,Se);if(fs===null){Ke===null&&(Ke=At);break}t&&Ke&&fs.alternate===null&&n(J,Ke),W=d(fs,W,pt),It===null?tt=fs:It.sibling=fs,It=fs,Ke=At}if(Ft.done)return s(J,Ke),Rt&&da(J,pt),tt;if(Ke===null){for(;!Ft.done;pt++,Ft=ne.next())Ft=Me(J,Ft.value,Se),Ft!==null&&(W=d(Ft,W,pt),It===null?tt=Ft:It.sibling=Ft,It=Ft);return Rt&&da(J,pt),tt}for(Ke=l(Ke);!Ft.done;pt++,Ft=ne.next())Ft=de(Ke,J,pt,Ft.value,Se),Ft!==null&&(t&&Ft.alternate!==null&&Ke.delete(Ft.key===null?pt:Ft.key),W=d(Ft,W,pt),It===null?tt=Ft:It.sibling=Ft,It=Ft);return t&&Ke.forEach(function(DM){return n(J,DM)}),Rt&&da(J,pt),tt}function Qt(J,W,ne,Se){if(typeof ne=="object"&&ne!==null&&ne.type===C&&ne.key===null&&(ne=ne.props.children),typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case S:e:{for(var tt=ne.key;W!==null;){if(W.key===tt){if(tt=ne.type,tt===C){if(W.tag===7){s(J,W.sibling),Se=f(W,ne.props.children),Se.return=J,J=Se;break e}}else if(W.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===T&&Os(tt)===W.type){s(J,W.sibling),Se=f(W,ne.props),bo(Se,ne),Se.return=J,J=Se;break e}s(J,W);break}else n(J,W);W=W.sibling}ne.type===C?(Se=ws(ne.props.children,J.mode,Se,ne.key),Se.return=J,J=Se):(Se=Dl(ne.type,ne.key,ne.props,null,J.mode,Se),bo(Se,ne),Se.return=J,J=Se)}return x(J);case E:e:{for(tt=ne.key;W!==null;){if(W.key===tt)if(W.tag===4&&W.stateNode.containerInfo===ne.containerInfo&&W.stateNode.implementation===ne.implementation){s(J,W.sibling),Se=f(W,ne.children||[]),Se.return=J,J=Se;break e}else{s(J,W);break}else n(J,W);W=W.sibling}Se=zu(ne,J.mode,Se),Se.return=J,J=Se}return x(J);case T:return ne=Os(ne),Qt(J,W,ne,Se)}if(Q(ne))return qe(J,W,ne,Se);if(k(ne)){if(tt=k(ne),typeof tt!="function")throw Error(r(150));return ne=tt.call(ne),at(J,W,ne,Se)}if(typeof ne.then=="function")return Qt(J,W,Fl(ne),Se);if(ne.$$typeof===F)return Qt(J,W,Ul(J,ne),Se);Bl(J,ne)}return typeof ne=="string"&&ne!==""||typeof ne=="number"||typeof ne=="bigint"?(ne=""+ne,W!==null&&W.tag===6?(s(J,W.sibling),Se=f(W,ne),Se.return=J,J=Se):(s(J,W),Se=Bu(ne,J.mode,Se),Se.return=J,J=Se),x(J)):s(J,W)}return function(J,W,ne,Se){try{Eo=0;var tt=Qt(J,W,ne,Se);return gr=null,tt}catch(Ke){if(Ke===mr||Ke===Pl)throw Ke;var It=ui(29,Ke,null,J.mode);return It.lanes=Se,It.return=J,It}finally{}}}var Is=Sm(!0),xm=Sm(!1),Za=!1;function Qu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ju(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ja(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ka(t,n,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(zt&2)!==0){var f=l.pending;return f===null?n.next=n:(n.next=f.next,f.next=n),l.pending=n,n=wl(t),im(t,null,s),n}return Cl(t,l,n,s),wl(t)}function To(t,n,s){if(n=n.updateQueue,n!==null&&(n=n.shared,(s&4194048)!==0)){var l=n.lanes;l&=t.pendingLanes,s|=l,n.lanes=s,Wn(t,s)}}function $u(t,n){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var f=null,d=null;if(s=s.firstBaseUpdate,s!==null){do{var x={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};d===null?f=d=x:d=d.next=x,s=s.next}while(s!==null);d===null?f=d=n:d=d.next=n}else f=d=n;s={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=n:t.next=n,s.lastBaseUpdate=n}var ef=!1;function Ao(){if(ef){var t=pr;if(t!==null)throw t}}function Ro(t,n,s,l){ef=!1;var f=t.updateQueue;Za=!1;var d=f.firstBaseUpdate,x=f.lastBaseUpdate,R=f.shared.pending;if(R!==null){f.shared.pending=null;var V=R,ae=V.next;V.next=null,x===null?d=ae:x.next=ae,x=V;var _e=t.alternate;_e!==null&&(_e=_e.updateQueue,R=_e.lastBaseUpdate,R!==x&&(R===null?_e.firstBaseUpdate=ae:R.next=ae,_e.lastBaseUpdate=V))}if(d!==null){var Me=f.baseState;x=0,_e=ae=V=null,R=d;do{var le=R.lane&-536870913,de=le!==R.lane;if(de?(Tt&le)===le:(l&le)===le){le!==0&&le===hr&&(ef=!0),_e!==null&&(_e=_e.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var qe=t,at=R;le=n;var Qt=s;switch(at.tag){case 1:if(qe=at.payload,typeof qe=="function"){Me=qe.call(Qt,Me,le);break e}Me=qe;break e;case 3:qe.flags=qe.flags&-65537|128;case 0:if(qe=at.payload,le=typeof qe=="function"?qe.call(Qt,Me,le):qe,le==null)break e;Me=v({},Me,le);break e;case 2:Za=!0}}le=R.callback,le!==null&&(t.flags|=64,de&&(t.flags|=8192),de=f.callbacks,de===null?f.callbacks=[le]:de.push(le))}else de={lane:le,tag:R.tag,payload:R.payload,callback:R.callback,next:null},_e===null?(ae=_e=de,V=Me):_e=_e.next=de,x|=le;if(R=R.next,R===null){if(R=f.shared.pending,R===null)break;de=R,R=de.next,de.next=null,f.lastBaseUpdate=de,f.shared.pending=null}}while(!0);_e===null&&(V=Me),f.baseState=V,f.firstBaseUpdate=ae,f.lastBaseUpdate=_e,d===null&&(f.shared.lanes=0),ts|=x,t.lanes=x,t.memoizedState=Me}}function Mm(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function ym(t,n){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)Mm(s[t],n)}var _r=N(null),zl=N(0);function Em(t,n){t=Ea,ve(zl,t),ve(_r,n),Ea=t|n.baseLanes}function tf(){ve(zl,Ea),ve(_r,_r.current)}function nf(){Ea=zl.current,j(_r),j(zl)}var fi=N(null),bi=null;function Qa(t){var n=t.alternate;ve(dn,dn.current&1),ve(fi,t),bi===null&&(n===null||_r.current!==null||n.memoizedState!==null)&&(bi=t)}function af(t){ve(dn,dn.current),ve(fi,t),bi===null&&(bi=t)}function bm(t){t.tag===22?(ve(dn,dn.current),ve(fi,t),bi===null&&(bi=t)):Ja()}function Ja(){ve(dn,dn.current),ve(fi,fi.current)}function di(t){j(fi),bi===t&&(bi=null),j(dn)}var dn=N(0);function Hl(t){for(var n=t;n!==null;){if(n.tag===13){var s=n.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||ud(s)||fd(s)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ma=0,ht=null,jt=null,Sn=null,Gl=!1,vr=!1,Fs=!1,Vl=0,Co=0,Sr=null,xx=0;function cn(){throw Error(r(321))}function sf(t,n){if(n===null)return!1;for(var s=0;s<n.length&&s<t.length;s++)if(!ci(t[s],n[s]))return!1;return!0}function rf(t,n,s,l,f,d){return ma=d,ht=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,B.H=t===null||t.memoizedState===null?o0:Mf,Fs=!1,d=s(l,f),Fs=!1,vr&&(d=Am(n,s,l,f)),Tm(t),d}function Tm(t){B.H=No;var n=jt!==null&&jt.next!==null;if(ma=0,Sn=jt=ht=null,Gl=!1,Co=0,Sr=null,n)throw Error(r(300));t===null||xn||(t=t.dependencies,t!==null&&Ll(t)&&(xn=!0))}function Am(t,n,s,l){ht=t;var f=0;do{if(vr&&(Sr=null),Co=0,vr=!1,25<=f)throw Error(r(301));if(f+=1,Sn=jt=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}B.H=l0,d=n(s,l)}while(vr);return d}function Mx(){var t=B.H,n=t.useState()[0];return n=typeof n.then=="function"?wo(n):n,t=t.useState()[0],(jt!==null?jt.memoizedState:null)!==t&&(ht.flags|=1024),n}function of(){var t=Vl!==0;return Vl=0,t}function lf(t,n,s){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~s}function cf(t){if(Gl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Gl=!1}ma=0,Sn=jt=ht=null,vr=!1,Co=Vl=0,Sr=null}function qn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Sn===null?ht.memoizedState=Sn=t:Sn=Sn.next=t,Sn}function hn(){if(jt===null){var t=ht.alternate;t=t!==null?t.memoizedState:null}else t=jt.next;var n=Sn===null?ht.memoizedState:Sn.next;if(n!==null)Sn=n,jt=t;else{if(t===null)throw ht.alternate===null?Error(r(467)):Error(r(310));jt=t,t={memoizedState:jt.memoizedState,baseState:jt.baseState,baseQueue:jt.baseQueue,queue:jt.queue,next:null},Sn===null?ht.memoizedState=Sn=t:Sn=Sn.next=t}return Sn}function kl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function wo(t){var n=Co;return Co+=1,Sr===null&&(Sr=[]),t=gm(Sr,t,n),n=ht,(Sn===null?n.memoizedState:Sn.next)===null&&(n=n.alternate,B.H=n===null||n.memoizedState===null?o0:Mf),t}function Xl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return wo(t);if(t.$$typeof===F)return Pn(t)}throw Error(r(438,String(t)))}function uf(t){var n=null,s=ht.updateQueue;if(s!==null&&(n=s.memoCache),n==null){var l=ht.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(n={data:l.data.map(function(f){return f.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),s===null&&(s=kl(),ht.updateQueue=s),s.memoCache=n,s=n.data[n.index],s===void 0)for(s=n.data[n.index]=Array(t),l=0;l<t;l++)s[l]=X;return n.index++,s}function ga(t,n){return typeof n=="function"?n(t):n}function Wl(t){var n=hn();return ff(n,jt,t)}function ff(t,n,s){var l=t.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=s;var f=t.baseQueue,d=l.pending;if(d!==null){if(f!==null){var x=f.next;f.next=d.next,d.next=x}n.baseQueue=f=d,l.pending=null}if(d=t.baseState,f===null)t.memoizedState=d;else{n=f.next;var R=x=null,V=null,ae=n,_e=!1;do{var Me=ae.lane&-536870913;if(Me!==ae.lane?(Tt&Me)===Me:(ma&Me)===Me){var le=ae.revertLane;if(le===0)V!==null&&(V=V.next={lane:0,revertLane:0,gesture:null,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null}),Me===hr&&(_e=!0);else if((ma&le)===le){ae=ae.next,le===hr&&(_e=!0);continue}else Me={lane:0,revertLane:ae.revertLane,gesture:null,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null},V===null?(R=V=Me,x=d):V=V.next=Me,ht.lanes|=le,ts|=le;Me=ae.action,Fs&&s(d,Me),d=ae.hasEagerState?ae.eagerState:s(d,Me)}else le={lane:Me,revertLane:ae.revertLane,gesture:ae.gesture,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null},V===null?(R=V=le,x=d):V=V.next=le,ht.lanes|=Me,ts|=Me;ae=ae.next}while(ae!==null&&ae!==n);if(V===null?x=d:V.next=R,!ci(d,t.memoizedState)&&(xn=!0,_e&&(s=pr,s!==null)))throw s;t.memoizedState=d,t.baseState=x,t.baseQueue=V,l.lastRenderedState=d}return f===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function df(t){var n=hn(),s=n.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=t;var l=s.dispatch,f=s.pending,d=n.memoizedState;if(f!==null){s.pending=null;var x=f=f.next;do d=t(d,x.action),x=x.next;while(x!==f);ci(d,n.memoizedState)||(xn=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),s.lastRenderedState=d}return[d,l]}function Rm(t,n,s){var l=ht,f=hn(),d=Rt;if(d){if(s===void 0)throw Error(r(407));s=s()}else s=n();var x=!ci((jt||f).memoizedState,s);if(x&&(f.memoizedState=s,xn=!0),f=f.queue,mf(Dm.bind(null,l,f,t),[t]),f.getSnapshot!==n||x||Sn!==null&&Sn.memoizedState.tag&1){if(l.flags|=2048,xr(9,{destroy:void 0},wm.bind(null,l,f,s,n),null),$t===null)throw Error(r(349));d||(ma&127)!==0||Cm(l,n,s)}return s}function Cm(t,n,s){t.flags|=16384,t={getSnapshot:n,value:s},n=ht.updateQueue,n===null?(n=kl(),ht.updateQueue=n,n.stores=[t]):(s=n.stores,s===null?n.stores=[t]:s.push(t))}function wm(t,n,s,l){n.value=s,n.getSnapshot=l,Nm(n)&&Lm(t)}function Dm(t,n,s){return s(function(){Nm(n)&&Lm(t)})}function Nm(t){var n=t.getSnapshot;t=t.value;try{var s=n();return!ci(t,s)}catch{return!0}}function Lm(t){var n=Cs(t,2);n!==null&&ai(n,t,2)}function hf(t){var n=qn();if(typeof t=="function"){var s=t;if(t=s(),Fs){Ae(!0);try{s()}finally{Ae(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ga,lastRenderedState:t},n}function Um(t,n,s,l){return t.baseState=s,ff(t,jt,typeof l=="function"?l:ga)}function yx(t,n,s,l,f){if(Zl(t))throw Error(r(485));if(t=n.action,t!==null){var d={payload:f,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){d.listeners.push(x)}};B.T!==null?s(!0):d.isTransition=!1,l(d),s=n.pending,s===null?(d.next=n.pending=d,Om(n,d)):(d.next=s.next,n.pending=s.next=d)}}function Om(t,n){var s=n.action,l=n.payload,f=t.state;if(n.isTransition){var d=B.T,x={};B.T=x;try{var R=s(f,l),V=B.S;V!==null&&V(x,R),Pm(t,n,R)}catch(ae){pf(t,n,ae)}finally{d!==null&&x.types!==null&&(d.types=x.types),B.T=d}}else try{d=s(f,l),Pm(t,n,d)}catch(ae){pf(t,n,ae)}}function Pm(t,n,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){Im(t,n,l)},function(l){return pf(t,n,l)}):Im(t,n,s)}function Im(t,n,s){n.status="fulfilled",n.value=s,Fm(n),t.state=s,n=t.pending,n!==null&&(s=n.next,s===n?t.pending=null:(s=s.next,n.next=s,Om(t,s)))}function pf(t,n,s){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do n.status="rejected",n.reason=s,Fm(n),n=n.next;while(n!==l)}t.action=null}function Fm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Bm(t,n){return n}function zm(t,n){if(Rt){var s=$t.formState;if(s!==null){e:{var l=ht;if(Rt){if(nn){t:{for(var f=nn,d=Ei;f.nodeType!==8;){if(!d){f=null;break t}if(f=Ti(f.nextSibling),f===null){f=null;break t}}d=f.data,f=d==="F!"||d==="F"?f:null}if(f){nn=Ti(f.nextSibling),l=f.data==="F!";break e}}qa(l)}l=!1}l&&(n=s[0])}}return s=qn(),s.memoizedState=s.baseState=n,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bm,lastRenderedState:n},s.queue=l,s=a0.bind(null,ht,l),l.dispatch=s,l=hf(!1),d=xf.bind(null,ht,!1,l.queue),l=qn(),f={state:n,dispatch:null,action:t,pending:null},l.queue=f,s=yx.bind(null,ht,f,d,s),f.dispatch=s,l.memoizedState=t,[n,s,!1]}function Hm(t){var n=hn();return Gm(n,jt,t)}function Gm(t,n,s){if(n=ff(t,n,Bm)[0],t=Wl(ga)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var l=wo(n)}catch(x){throw x===mr?Pl:x}else l=n;n=hn();var f=n.queue,d=f.dispatch;return s!==n.memoizedState&&(ht.flags|=2048,xr(9,{destroy:void 0},Ex.bind(null,f,s),null)),[l,d,t]}function Ex(t,n){t.action=n}function Vm(t){var n=hn(),s=jt;if(s!==null)return Gm(n,s,t);hn(),n=n.memoizedState,s=hn();var l=s.queue.dispatch;return s.memoizedState=t,[n,l,!1]}function xr(t,n,s,l){return t={tag:t,create:s,deps:l,inst:n,next:null},n=ht.updateQueue,n===null&&(n=kl(),ht.updateQueue=n),s=n.lastEffect,s===null?n.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,n.lastEffect=t),t}function km(){return hn().memoizedState}function ql(t,n,s,l){var f=qn();ht.flags|=t,f.memoizedState=xr(1|n,{destroy:void 0},s,l===void 0?null:l)}function Yl(t,n,s,l){var f=hn();l=l===void 0?null:l;var d=f.memoizedState.inst;jt!==null&&l!==null&&sf(l,jt.memoizedState.deps)?f.memoizedState=xr(n,d,s,l):(ht.flags|=t,f.memoizedState=xr(1|n,d,s,l))}function Xm(t,n){ql(8390656,8,t,n)}function mf(t,n){Yl(2048,8,t,n)}function bx(t){ht.flags|=4;var n=ht.updateQueue;if(n===null)n=kl(),ht.updateQueue=n,n.events=[t];else{var s=n.events;s===null?n.events=[t]:s.push(t)}}function Wm(t){var n=hn().memoizedState;return bx({ref:n,nextImpl:t}),function(){if((zt&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function qm(t,n){return Yl(4,2,t,n)}function Ym(t,n){return Yl(4,4,t,n)}function Zm(t,n){if(typeof n=="function"){t=t();var s=n(t);return function(){typeof s=="function"?s():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function jm(t,n,s){s=s!=null?s.concat([t]):null,Yl(4,4,Zm.bind(null,n,t),s)}function gf(){}function Km(t,n){var s=hn();n=n===void 0?null:n;var l=s.memoizedState;return n!==null&&sf(n,l[1])?l[0]:(s.memoizedState=[t,n],t)}function Qm(t,n){var s=hn();n=n===void 0?null:n;var l=s.memoizedState;if(n!==null&&sf(n,l[1]))return l[0];if(l=t(),Fs){Ae(!0);try{t()}finally{Ae(!1)}}return s.memoizedState=[l,n],l}function _f(t,n,s){return s===void 0||(ma&1073741824)!==0&&(Tt&261930)===0?t.memoizedState=n:(t.memoizedState=s,t=J0(),ht.lanes|=t,ts|=t,s)}function Jm(t,n,s,l){return ci(s,n)?s:_r.current!==null?(t=_f(t,s,l),ci(t,n)||(xn=!0),t):(ma&42)===0||(ma&1073741824)!==0&&(Tt&261930)===0?(xn=!0,t.memoizedState=s):(t=J0(),ht.lanes|=t,ts|=t,n)}function $m(t,n,s,l,f){var d=G.p;G.p=d!==0&&8>d?d:8;var x=B.T,R={};B.T=R,xf(t,!1,n,s);try{var V=f(),ae=B.S;if(ae!==null&&ae(R,V),V!==null&&typeof V=="object"&&typeof V.then=="function"){var _e=Sx(V,l);Do(t,n,_e,mi(t))}else Do(t,n,l,mi(t))}catch(Me){Do(t,n,{then:function(){},status:"rejected",reason:Me},mi())}finally{G.p=d,x!==null&&R.types!==null&&(x.types=R.types),B.T=x}}function Tx(){}function vf(t,n,s,l){if(t.tag!==5)throw Error(r(476));var f=e0(t).queue;$m(t,f,n,Y,s===null?Tx:function(){return t0(t),s(l)})}function e0(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ga,lastRenderedState:Y},next:null};var s={};return n.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ga,lastRenderedState:s},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function t0(t){var n=e0(t);n.next===null&&(n=t.alternate.memoizedState),Do(t,n.next.queue,{},mi())}function Sf(){return Pn(Yo)}function n0(){return hn().memoizedState}function i0(){return hn().memoizedState}function Ax(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var s=mi();t=ja(s);var l=Ka(n,t,s);l!==null&&(ai(l,n,s),To(l,n,s)),n={cache:Yu()},t.payload=n;return}n=n.return}}function Rx(t,n,s){var l=mi();s={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Zl(t)?s0(n,s):(s=Iu(t,n,s,l),s!==null&&(ai(s,t,l),r0(s,n,l)))}function a0(t,n,s){var l=mi();Do(t,n,s,l)}function Do(t,n,s,l){var f={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(Zl(t))s0(n,f);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var x=n.lastRenderedState,R=d(x,s);if(f.hasEagerState=!0,f.eagerState=R,ci(R,x))return Cl(t,n,f,0),$t===null&&Rl(),!1}catch{}finally{}if(s=Iu(t,n,f,l),s!==null)return ai(s,t,l),r0(s,n,l),!0}return!1}function xf(t,n,s,l){if(l={lane:2,revertLane:Jf(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Zl(t)){if(n)throw Error(r(479))}else n=Iu(t,s,l,2),n!==null&&ai(n,t,2)}function Zl(t){var n=t.alternate;return t===ht||n!==null&&n===ht}function s0(t,n){vr=Gl=!0;var s=t.pending;s===null?n.next=n:(n.next=s.next,s.next=n),t.pending=n}function r0(t,n,s){if((s&4194048)!==0){var l=n.lanes;l&=t.pendingLanes,s|=l,n.lanes=s,Wn(t,s)}}var No={readContext:Pn,use:Xl,useCallback:cn,useContext:cn,useEffect:cn,useImperativeHandle:cn,useLayoutEffect:cn,useInsertionEffect:cn,useMemo:cn,useReducer:cn,useRef:cn,useState:cn,useDebugValue:cn,useDeferredValue:cn,useTransition:cn,useSyncExternalStore:cn,useId:cn,useHostTransitionStatus:cn,useFormState:cn,useActionState:cn,useOptimistic:cn,useMemoCache:cn,useCacheRefresh:cn};No.useEffectEvent=cn;var o0={readContext:Pn,use:Xl,useCallback:function(t,n){return qn().memoizedState=[t,n===void 0?null:n],t},useContext:Pn,useEffect:Xm,useImperativeHandle:function(t,n,s){s=s!=null?s.concat([t]):null,ql(4194308,4,Zm.bind(null,n,t),s)},useLayoutEffect:function(t,n){return ql(4194308,4,t,n)},useInsertionEffect:function(t,n){ql(4,2,t,n)},useMemo:function(t,n){var s=qn();n=n===void 0?null:n;var l=t();if(Fs){Ae(!0);try{t()}finally{Ae(!1)}}return s.memoizedState=[l,n],l},useReducer:function(t,n,s){var l=qn();if(s!==void 0){var f=s(n);if(Fs){Ae(!0);try{s(n)}finally{Ae(!1)}}}else f=n;return l.memoizedState=l.baseState=f,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:f},l.queue=t,t=t.dispatch=Rx.bind(null,ht,t),[l.memoizedState,t]},useRef:function(t){var n=qn();return t={current:t},n.memoizedState=t},useState:function(t){t=hf(t);var n=t.queue,s=a0.bind(null,ht,n);return n.dispatch=s,[t.memoizedState,s]},useDebugValue:gf,useDeferredValue:function(t,n){var s=qn();return _f(s,t,n)},useTransition:function(){var t=hf(!1);return t=$m.bind(null,ht,t.queue,!0,!1),qn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,s){var l=ht,f=qn();if(Rt){if(s===void 0)throw Error(r(407));s=s()}else{if(s=n(),$t===null)throw Error(r(349));(Tt&127)!==0||Cm(l,n,s)}f.memoizedState=s;var d={value:s,getSnapshot:n};return f.queue=d,Xm(Dm.bind(null,l,d,t),[t]),l.flags|=2048,xr(9,{destroy:void 0},wm.bind(null,l,d,s,n),null),s},useId:function(){var t=qn(),n=$t.identifierPrefix;if(Rt){var s=Zi,l=Yi;s=(l&~(1<<32-Be(l)-1)).toString(32)+s,n="_"+n+"R_"+s,s=Vl++,0<s&&(n+="H"+s.toString(32)),n+="_"}else s=xx++,n="_"+n+"r_"+s.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Sf,useFormState:zm,useActionState:zm,useOptimistic:function(t){var n=qn();n.memoizedState=n.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=s,n=xf.bind(null,ht,!0,s),s.dispatch=n,[t,n]},useMemoCache:uf,useCacheRefresh:function(){return qn().memoizedState=Ax.bind(null,ht)},useEffectEvent:function(t){var n=qn(),s={impl:t};return n.memoizedState=s,function(){if((zt&2)!==0)throw Error(r(440));return s.impl.apply(void 0,arguments)}}},Mf={readContext:Pn,use:Xl,useCallback:Km,useContext:Pn,useEffect:mf,useImperativeHandle:jm,useInsertionEffect:qm,useLayoutEffect:Ym,useMemo:Qm,useReducer:Wl,useRef:km,useState:function(){return Wl(ga)},useDebugValue:gf,useDeferredValue:function(t,n){var s=hn();return Jm(s,jt.memoizedState,t,n)},useTransition:function(){var t=Wl(ga)[0],n=hn().memoizedState;return[typeof t=="boolean"?t:wo(t),n]},useSyncExternalStore:Rm,useId:n0,useHostTransitionStatus:Sf,useFormState:Hm,useActionState:Hm,useOptimistic:function(t,n){var s=hn();return Um(s,jt,t,n)},useMemoCache:uf,useCacheRefresh:i0};Mf.useEffectEvent=Wm;var l0={readContext:Pn,use:Xl,useCallback:Km,useContext:Pn,useEffect:mf,useImperativeHandle:jm,useInsertionEffect:qm,useLayoutEffect:Ym,useMemo:Qm,useReducer:df,useRef:km,useState:function(){return df(ga)},useDebugValue:gf,useDeferredValue:function(t,n){var s=hn();return jt===null?_f(s,t,n):Jm(s,jt.memoizedState,t,n)},useTransition:function(){var t=df(ga)[0],n=hn().memoizedState;return[typeof t=="boolean"?t:wo(t),n]},useSyncExternalStore:Rm,useId:n0,useHostTransitionStatus:Sf,useFormState:Vm,useActionState:Vm,useOptimistic:function(t,n){var s=hn();return jt!==null?Um(s,jt,t,n):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:uf,useCacheRefresh:i0};l0.useEffectEvent=Wm;function yf(t,n,s,l){n=t.memoizedState,s=s(l,n),s=s==null?n:v({},n,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var Ef={enqueueSetState:function(t,n,s){t=t._reactInternals;var l=mi(),f=ja(l);f.payload=n,s!=null&&(f.callback=s),n=Ka(t,f,l),n!==null&&(ai(n,t,l),To(n,t,l))},enqueueReplaceState:function(t,n,s){t=t._reactInternals;var l=mi(),f=ja(l);f.tag=1,f.payload=n,s!=null&&(f.callback=s),n=Ka(t,f,l),n!==null&&(ai(n,t,l),To(n,t,l))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var s=mi(),l=ja(s);l.tag=2,n!=null&&(l.callback=n),n=Ka(t,l,s),n!==null&&(ai(n,t,s),To(n,t,s))}};function c0(t,n,s,l,f,d,x){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,d,x):n.prototype&&n.prototype.isPureReactComponent?!_o(s,l)||!_o(f,d):!0}function u0(t,n,s,l){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(s,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(s,l),n.state!==t&&Ef.enqueueReplaceState(n,n.state,null)}function Bs(t,n){var s=n;if("ref"in n){s={};for(var l in n)l!=="ref"&&(s[l]=n[l])}if(t=t.defaultProps){s===n&&(s=v({},s));for(var f in t)s[f]===void 0&&(s[f]=t[f])}return s}function f0(t){Al(t)}function d0(t){console.error(t)}function h0(t){Al(t)}function jl(t,n){try{var s=t.onUncaughtError;s(n.value,{componentStack:n.stack})}catch(l){setTimeout(function(){throw l})}}function p0(t,n,s){try{var l=t.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function bf(t,n,s){return s=ja(s),s.tag=3,s.payload={element:null},s.callback=function(){jl(t,n)},s}function m0(t){return t=ja(t),t.tag=3,t}function g0(t,n,s,l){var f=s.type.getDerivedStateFromError;if(typeof f=="function"){var d=l.value;t.payload=function(){return f(d)},t.callback=function(){p0(n,s,l)}}var x=s.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(t.callback=function(){p0(n,s,l),typeof f!="function"&&(ns===null?ns=new Set([this]):ns.add(this));var R=l.stack;this.componentDidCatch(l.value,{componentStack:R!==null?R:""})})}function Cx(t,n,s,l,f){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(n=s.alternate,n!==null&&dr(n,s,f,!0),s=fi.current,s!==null){switch(s.tag){case 31:case 13:return bi===null?oc():s.alternate===null&&un===0&&(un=3),s.flags&=-257,s.flags|=65536,s.lanes=f,l===Il?s.flags|=16384:(n=s.updateQueue,n===null?s.updateQueue=new Set([l]):n.add(l),jf(t,l,f)),!1;case 22:return s.flags|=65536,l===Il?s.flags|=16384:(n=s.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=n):(s=n.retryQueue,s===null?n.retryQueue=new Set([l]):s.add(l)),jf(t,l,f)),!1}throw Error(r(435,s.tag))}return jf(t,l,f),oc(),!1}if(Rt)return n=fi.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=f,l!==Vu&&(t=Error(r(422),{cause:l}),xo(xi(t,s)))):(l!==Vu&&(n=Error(r(423),{cause:l}),xo(xi(n,s))),t=t.current.alternate,t.flags|=65536,f&=-f,t.lanes|=f,l=xi(l,s),f=bf(t.stateNode,l,f),$u(t,f),un!==4&&(un=2)),!1;var d=Error(r(520),{cause:l});if(d=xi(d,s),zo===null?zo=[d]:zo.push(d),un!==4&&(un=2),n===null)return!0;l=xi(l,s),s=n;do{switch(s.tag){case 3:return s.flags|=65536,t=f&-f,s.lanes|=t,t=bf(s.stateNode,l,t),$u(s,t),!1;case 1:if(n=s.type,d=s.stateNode,(s.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(ns===null||!ns.has(d))))return s.flags|=65536,f&=-f,s.lanes|=f,f=m0(f),g0(f,t,s,l),$u(s,f),!1}s=s.return}while(s!==null);return!1}var Tf=Error(r(461)),xn=!1;function In(t,n,s,l){n.child=t===null?xm(n,null,s,l):Is(n,t.child,s,l)}function _0(t,n,s,l,f){s=s.render;var d=n.ref;if("ref"in l){var x={};for(var R in l)R!=="ref"&&(x[R]=l[R])}else x=l;return Ls(n),l=rf(t,n,s,x,d,f),R=of(),t!==null&&!xn?(lf(t,n,f),_a(t,n,f)):(Rt&&R&&Hu(n),n.flags|=1,In(t,n,l,f),n.child)}function v0(t,n,s,l,f){if(t===null){var d=s.type;return typeof d=="function"&&!Fu(d)&&d.defaultProps===void 0&&s.compare===null?(n.tag=15,n.type=d,S0(t,n,d,l,f)):(t=Dl(s.type,null,l,n,n.mode,f),t.ref=n.ref,t.return=n,n.child=t)}if(d=t.child,!Uf(t,f)){var x=d.memoizedProps;if(s=s.compare,s=s!==null?s:_o,s(x,l)&&t.ref===n.ref)return _a(t,n,f)}return n.flags|=1,t=fa(d,l),t.ref=n.ref,t.return=n,n.child=t}function S0(t,n,s,l,f){if(t!==null){var d=t.memoizedProps;if(_o(d,l)&&t.ref===n.ref)if(xn=!1,n.pendingProps=l=d,Uf(t,f))(t.flags&131072)!==0&&(xn=!0);else return n.lanes=t.lanes,_a(t,n,f)}return Af(t,n,s,l,f)}function x0(t,n,s,l){var f=l.children,d=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((n.flags&128)!==0){if(d=d!==null?d.baseLanes|s:s,t!==null){for(l=n.child=t.child,f=0;l!==null;)f=f|l.lanes|l.childLanes,l=l.sibling;l=f&~d}else l=0,n.child=null;return M0(t,n,d,s,l)}if((s&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Ol(n,d!==null?d.cachePool:null),d!==null?Em(n,d):tf(),bm(n);else return l=n.lanes=536870912,M0(t,n,d!==null?d.baseLanes|s:s,s,l)}else d!==null?(Ol(n,d.cachePool),Em(n,d),Ja(),n.memoizedState=null):(t!==null&&Ol(n,null),tf(),Ja());return In(t,n,f,s),n.child}function Lo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function M0(t,n,s,l,f){var d=ju();return d=d===null?null:{parent:vn._currentValue,pool:d},n.memoizedState={baseLanes:s,cachePool:d},t!==null&&Ol(n,null),tf(),bm(n),t!==null&&dr(t,n,l,!0),n.childLanes=f,null}function Kl(t,n){return n=Jl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function y0(t,n,s){return Is(n,t.child,null,s),t=Kl(n,n.pendingProps),t.flags|=2,di(n),n.memoizedState=null,t}function wx(t,n,s){var l=n.pendingProps,f=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Rt){if(l.mode==="hidden")return t=Kl(n,l),n.lanes=536870912,Lo(null,t);if(af(n),(t=nn)?(t=Og(t,Ei),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Xa!==null?{id:Yi,overflow:Zi}:null,retryLane:536870912,hydrationErrors:null},s=sm(t),s.return=n,n.child=s,On=n,nn=null)):t=null,t===null)throw qa(n);return n.lanes=536870912,null}return Kl(n,l)}var d=t.memoizedState;if(d!==null){var x=d.dehydrated;if(af(n),f)if(n.flags&256)n.flags&=-257,n=y0(t,n,s);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(xn||dr(t,n,s,!1),f=(s&t.childLanes)!==0,xn||f){if(l=$t,l!==null&&(x=zn(l,s),x!==0&&x!==d.retryLane))throw d.retryLane=x,Cs(t,x),ai(l,t,x),Tf;oc(),n=y0(t,n,s)}else t=d.treeContext,nn=Ti(x.nextSibling),On=n,Rt=!0,Wa=null,Ei=!1,t!==null&&lm(n,t),n=Kl(n,l),n.flags|=4096;return n}return t=fa(t.child,{mode:l.mode,children:l.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Ql(t,n){var s=n.ref;if(s===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(r(284));(t===null||t.ref!==s)&&(n.flags|=4194816)}}function Af(t,n,s,l,f){return Ls(n),s=rf(t,n,s,l,void 0,f),l=of(),t!==null&&!xn?(lf(t,n,f),_a(t,n,f)):(Rt&&l&&Hu(n),n.flags|=1,In(t,n,s,f),n.child)}function E0(t,n,s,l,f,d){return Ls(n),n.updateQueue=null,s=Am(n,l,s,f),Tm(t),l=of(),t!==null&&!xn?(lf(t,n,d),_a(t,n,d)):(Rt&&l&&Hu(n),n.flags|=1,In(t,n,s,d),n.child)}function b0(t,n,s,l,f){if(Ls(n),n.stateNode===null){var d=lr,x=s.contextType;typeof x=="object"&&x!==null&&(d=Pn(x)),d=new s(l,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Ef,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=l,d.state=n.memoizedState,d.refs={},Qu(n),x=s.contextType,d.context=typeof x=="object"&&x!==null?Pn(x):lr,d.state=n.memoizedState,x=s.getDerivedStateFromProps,typeof x=="function"&&(yf(n,s,x,l),d.state=n.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(x=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),x!==d.state&&Ef.enqueueReplaceState(d,d.state,null),Ro(n,l,d,f),Ao(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),l=!0}else if(t===null){d=n.stateNode;var R=n.memoizedProps,V=Bs(s,R);d.props=V;var ae=d.context,_e=s.contextType;x=lr,typeof _e=="object"&&_e!==null&&(x=Pn(_e));var Me=s.getDerivedStateFromProps;_e=typeof Me=="function"||typeof d.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,_e||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(R||ae!==x)&&u0(n,d,l,x),Za=!1;var le=n.memoizedState;d.state=le,Ro(n,l,d,f),Ao(),ae=n.memoizedState,R||le!==ae||Za?(typeof Me=="function"&&(yf(n,s,Me,l),ae=n.memoizedState),(V=Za||c0(n,s,V,l,le,ae,x))?(_e||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=ae),d.props=l,d.state=ae,d.context=x,l=V):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{d=n.stateNode,Ju(t,n),x=n.memoizedProps,_e=Bs(s,x),d.props=_e,Me=n.pendingProps,le=d.context,ae=s.contextType,V=lr,typeof ae=="object"&&ae!==null&&(V=Pn(ae)),R=s.getDerivedStateFromProps,(ae=typeof R=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(x!==Me||le!==V)&&u0(n,d,l,V),Za=!1,le=n.memoizedState,d.state=le,Ro(n,l,d,f),Ao();var de=n.memoizedState;x!==Me||le!==de||Za||t!==null&&t.dependencies!==null&&Ll(t.dependencies)?(typeof R=="function"&&(yf(n,s,R,l),de=n.memoizedState),(_e=Za||c0(n,s,_e,l,le,de,V)||t!==null&&t.dependencies!==null&&Ll(t.dependencies))?(ae||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,de,V),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,de,V)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||x===t.memoizedProps&&le===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&le===t.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=de),d.props=l,d.state=de,d.context=V,l=_e):(typeof d.componentDidUpdate!="function"||x===t.memoizedProps&&le===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&le===t.memoizedState||(n.flags|=1024),l=!1)}return d=l,Ql(t,n),l=(n.flags&128)!==0,d||l?(d=n.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,t!==null&&l?(n.child=Is(n,t.child,null,f),n.child=Is(n,null,s,f)):In(t,n,s,f),n.memoizedState=d.state,t=n.child):t=_a(t,n,f),t}function T0(t,n,s,l){return Ds(),n.flags|=256,In(t,n,s,l),n.child}var Rf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Cf(t){return{baseLanes:t,cachePool:pm()}}function wf(t,n,s){return t=t!==null?t.childLanes&~s:0,n&&(t|=pi),t}function A0(t,n,s){var l=n.pendingProps,f=!1,d=(n.flags&128)!==0,x;if((x=d)||(x=t!==null&&t.memoizedState===null?!1:(dn.current&2)!==0),x&&(f=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,t===null){if(Rt){if(f?Qa(n):Ja(),(t=nn)?(t=Og(t,Ei),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Xa!==null?{id:Yi,overflow:Zi}:null,retryLane:536870912,hydrationErrors:null},s=sm(t),s.return=n,n.child=s,On=n,nn=null)):t=null,t===null)throw qa(n);return fd(t)?n.lanes=32:n.lanes=536870912,null}var R=l.children;return l=l.fallback,f?(Ja(),f=n.mode,R=Jl({mode:"hidden",children:R},f),l=ws(l,f,s,null),R.return=n,l.return=n,R.sibling=l,n.child=R,l=n.child,l.memoizedState=Cf(s),l.childLanes=wf(t,x,s),n.memoizedState=Rf,Lo(null,l)):(Qa(n),Df(n,R))}var V=t.memoizedState;if(V!==null&&(R=V.dehydrated,R!==null)){if(d)n.flags&256?(Qa(n),n.flags&=-257,n=Nf(t,n,s)):n.memoizedState!==null?(Ja(),n.child=t.child,n.flags|=128,n=null):(Ja(),R=l.fallback,f=n.mode,l=Jl({mode:"visible",children:l.children},f),R=ws(R,f,s,null),R.flags|=2,l.return=n,R.return=n,l.sibling=R,n.child=l,Is(n,t.child,null,s),l=n.child,l.memoizedState=Cf(s),l.childLanes=wf(t,x,s),n.memoizedState=Rf,n=Lo(null,l));else if(Qa(n),fd(R)){if(x=R.nextSibling&&R.nextSibling.dataset,x)var ae=x.dgst;x=ae,l=Error(r(419)),l.stack="",l.digest=x,xo({value:l,source:null,stack:null}),n=Nf(t,n,s)}else if(xn||dr(t,n,s,!1),x=(s&t.childLanes)!==0,xn||x){if(x=$t,x!==null&&(l=zn(x,s),l!==0&&l!==V.retryLane))throw V.retryLane=l,Cs(t,l),ai(x,t,l),Tf;ud(R)||oc(),n=Nf(t,n,s)}else ud(R)?(n.flags|=192,n.child=t.child,n=null):(t=V.treeContext,nn=Ti(R.nextSibling),On=n,Rt=!0,Wa=null,Ei=!1,t!==null&&lm(n,t),n=Df(n,l.children),n.flags|=4096);return n}return f?(Ja(),R=l.fallback,f=n.mode,V=t.child,ae=V.sibling,l=fa(V,{mode:"hidden",children:l.children}),l.subtreeFlags=V.subtreeFlags&65011712,ae!==null?R=fa(ae,R):(R=ws(R,f,s,null),R.flags|=2),R.return=n,l.return=n,l.sibling=R,n.child=l,Lo(null,l),l=n.child,R=t.child.memoizedState,R===null?R=Cf(s):(f=R.cachePool,f!==null?(V=vn._currentValue,f=f.parent!==V?{parent:V,pool:V}:f):f=pm(),R={baseLanes:R.baseLanes|s,cachePool:f}),l.memoizedState=R,l.childLanes=wf(t,x,s),n.memoizedState=Rf,Lo(t.child,l)):(Qa(n),s=t.child,t=s.sibling,s=fa(s,{mode:"visible",children:l.children}),s.return=n,s.sibling=null,t!==null&&(x=n.deletions,x===null?(n.deletions=[t],n.flags|=16):x.push(t)),n.child=s,n.memoizedState=null,s)}function Df(t,n){return n=Jl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Jl(t,n){return t=ui(22,t,null,n),t.lanes=0,t}function Nf(t,n,s){return Is(n,t.child,null,s),t=Df(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function R0(t,n,s){t.lanes|=n;var l=t.alternate;l!==null&&(l.lanes|=n),Wu(t.return,n,s)}function Lf(t,n,s,l,f,d){var x=t.memoizedState;x===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:f,treeForkCount:d}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=l,x.tail=s,x.tailMode=f,x.treeForkCount=d)}function C0(t,n,s){var l=n.pendingProps,f=l.revealOrder,d=l.tail;l=l.children;var x=dn.current,R=(x&2)!==0;if(R?(x=x&1|2,n.flags|=128):x&=1,ve(dn,x),In(t,n,l,s),l=Rt?So:0,!R&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&R0(t,s,n);else if(t.tag===19)R0(t,s,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(f){case"forwards":for(s=n.child,f=null;s!==null;)t=s.alternate,t!==null&&Hl(t)===null&&(f=s),s=s.sibling;s=f,s===null?(f=n.child,n.child=null):(f=s.sibling,s.sibling=null),Lf(n,!1,f,s,d,l);break;case"backwards":case"unstable_legacy-backwards":for(s=null,f=n.child,n.child=null;f!==null;){if(t=f.alternate,t!==null&&Hl(t)===null){n.child=f;break}t=f.sibling,f.sibling=s,s=f,f=t}Lf(n,!0,s,null,d,l);break;case"together":Lf(n,!1,null,null,void 0,l);break;default:n.memoizedState=null}return n.child}function _a(t,n,s){if(t!==null&&(n.dependencies=t.dependencies),ts|=n.lanes,(s&n.childLanes)===0)if(t!==null){if(dr(t,n,s,!1),(s&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,s=fa(t,t.pendingProps),n.child=s,s.return=n;t.sibling!==null;)t=t.sibling,s=s.sibling=fa(t,t.pendingProps),s.return=n;s.sibling=null}return n.child}function Uf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Ll(t)))}function Dx(t,n,s){switch(n.tag){case 3:Ee(n,n.stateNode.containerInfo),Ya(n,vn,t.memoizedState.cache),Ds();break;case 27:case 5:it(n);break;case 4:Ee(n,n.stateNode.containerInfo);break;case 10:Ya(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,af(n),null;break;case 13:var l=n.memoizedState;if(l!==null)return l.dehydrated!==null?(Qa(n),n.flags|=128,null):(s&n.child.childLanes)!==0?A0(t,n,s):(Qa(n),t=_a(t,n,s),t!==null?t.sibling:null);Qa(n);break;case 19:var f=(t.flags&128)!==0;if(l=(s&n.childLanes)!==0,l||(dr(t,n,s,!1),l=(s&n.childLanes)!==0),f){if(l)return C0(t,n,s);n.flags|=128}if(f=n.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),ve(dn,dn.current),l)break;return null;case 22:return n.lanes=0,x0(t,n,s,n.pendingProps);case 24:Ya(n,vn,t.memoizedState.cache)}return _a(t,n,s)}function w0(t,n,s){if(t!==null)if(t.memoizedProps!==n.pendingProps)xn=!0;else{if(!Uf(t,s)&&(n.flags&128)===0)return xn=!1,Dx(t,n,s);xn=(t.flags&131072)!==0}else xn=!1,Rt&&(n.flags&1048576)!==0&&om(n,So,n.index);switch(n.lanes=0,n.tag){case 16:e:{var l=n.pendingProps;if(t=Os(n.elementType),n.type=t,typeof t=="function")Fu(t)?(l=Bs(t,l),n.tag=1,n=b0(null,n,t,l,s)):(n.tag=0,n=Af(null,n,t,l,s));else{if(t!=null){var f=t.$$typeof;if(f===w){n.tag=11,n=_0(null,n,t,l,s);break e}else if(f===I){n.tag=14,n=v0(null,n,t,l,s);break e}}throw n=ue(t)||t,Error(r(306,n,""))}}return n;case 0:return Af(t,n,n.type,n.pendingProps,s);case 1:return l=n.type,f=Bs(l,n.pendingProps),b0(t,n,l,f,s);case 3:e:{if(Ee(n,n.stateNode.containerInfo),t===null)throw Error(r(387));l=n.pendingProps;var d=n.memoizedState;f=d.element,Ju(t,n),Ro(n,l,null,s);var x=n.memoizedState;if(l=x.cache,Ya(n,vn,l),l!==d.cache&&qu(n,[vn],s,!0),Ao(),l=x.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=T0(t,n,l,s);break e}else if(l!==f){f=xi(Error(r(424)),n),xo(f),n=T0(t,n,l,s);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(nn=Ti(t.firstChild),On=n,Rt=!0,Wa=null,Ei=!0,s=xm(n,null,l,s),n.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(Ds(),l===f){n=_a(t,n,s);break e}In(t,n,l,s)}n=n.child}return n;case 26:return Ql(t,n),t===null?(s=Hg(n.type,null,n.pendingProps,null))?n.memoizedState=s:Rt||(s=n.type,t=n.pendingProps,l=pc(ie.current).createElement(s),l[Ot]=n,l[tn]=t,Fn(l,s,t),_n(l),n.stateNode=l):n.memoizedState=Hg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return it(n),t===null&&Rt&&(l=n.stateNode=Fg(n.type,n.pendingProps,ie.current),On=n,Ei=!0,f=nn,rs(n.type)?(dd=f,nn=Ti(l.firstChild)):nn=f),In(t,n,n.pendingProps.children,s),Ql(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Rt&&((f=l=nn)&&(l=rM(l,n.type,n.pendingProps,Ei),l!==null?(n.stateNode=l,On=n,nn=Ti(l.firstChild),Ei=!1,f=!0):f=!1),f||qa(n)),it(n),f=n.type,d=n.pendingProps,x=t!==null?t.memoizedProps:null,l=d.children,od(f,d)?l=null:x!==null&&od(f,x)&&(n.flags|=32),n.memoizedState!==null&&(f=rf(t,n,Mx,null,null,s),Yo._currentValue=f),Ql(t,n),In(t,n,l,s),n.child;case 6:return t===null&&Rt&&((t=s=nn)&&(s=oM(s,n.pendingProps,Ei),s!==null?(n.stateNode=s,On=n,nn=null,t=!0):t=!1),t||qa(n)),null;case 13:return A0(t,n,s);case 4:return Ee(n,n.stateNode.containerInfo),l=n.pendingProps,t===null?n.child=Is(n,null,l,s):In(t,n,l,s),n.child;case 11:return _0(t,n,n.type,n.pendingProps,s);case 7:return In(t,n,n.pendingProps,s),n.child;case 8:return In(t,n,n.pendingProps.children,s),n.child;case 12:return In(t,n,n.pendingProps.children,s),n.child;case 10:return l=n.pendingProps,Ya(n,n.type,l.value),In(t,n,l.children,s),n.child;case 9:return f=n.type._context,l=n.pendingProps.children,Ls(n),f=Pn(f),l=l(f),n.flags|=1,In(t,n,l,s),n.child;case 14:return v0(t,n,n.type,n.pendingProps,s);case 15:return S0(t,n,n.type,n.pendingProps,s);case 19:return C0(t,n,s);case 31:return wx(t,n,s);case 22:return x0(t,n,s,n.pendingProps);case 24:return Ls(n),l=Pn(vn),t===null?(f=ju(),f===null&&(f=$t,d=Yu(),f.pooledCache=d,d.refCount++,d!==null&&(f.pooledCacheLanes|=s),f=d),n.memoizedState={parent:l,cache:f},Qu(n),Ya(n,vn,f)):((t.lanes&s)!==0&&(Ju(t,n),Ro(n,null,null,s),Ao()),f=t.memoizedState,d=n.memoizedState,f.parent!==l?(f={parent:l,cache:l},n.memoizedState=f,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=f),Ya(n,vn,l)):(l=d.cache,Ya(n,vn,l),l!==f.cache&&qu(n,[vn],s,!0))),In(t,n,n.pendingProps.children,s),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function va(t){t.flags|=4}function Of(t,n,s,l,f){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(f&335544128)===f)if(t.stateNode.complete)t.flags|=8192;else if(ng())t.flags|=8192;else throw Ps=Il,Ku}else t.flags&=-16777217}function D0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Wg(n))if(ng())t.flags|=8192;else throw Ps=Il,Ku}function $l(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?be():536870912,t.lanes|=n,br|=n)}function Uo(t,n){if(!Rt)switch(t.tailMode){case"hidden":n=t.tail;for(var s=null;n!==null;)n.alternate!==null&&(s=n),n=n.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function an(t){var n=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(n)for(var f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=s,n}function Nx(t,n,s){var l=n.pendingProps;switch(Gu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return an(n),null;case 1:return an(n),null;case 3:return s=n.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),n.memoizedState.cache!==l&&(n.flags|=2048),pa(vn),ze(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(fr(n)?va(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,ku())),an(n),null;case 26:var f=n.type,d=n.memoizedState;return t===null?(va(n),d!==null?(an(n),D0(n,d)):(an(n),Of(n,f,null,l,s))):d?d!==t.memoizedState?(va(n),an(n),D0(n,d)):(an(n),n.flags&=-16777217):(t=t.memoizedProps,t!==l&&va(n),an(n),Of(n,f,t,l,s)),null;case 27:if(Qe(n),s=ie.current,f=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==l&&va(n);else{if(!l){if(n.stateNode===null)throw Error(r(166));return an(n),null}t=Te.current,fr(n)?cm(n):(t=Fg(f,l,s),n.stateNode=t,va(n))}return an(n),null;case 5:if(Qe(n),f=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==l&&va(n);else{if(!l){if(n.stateNode===null)throw Error(r(166));return an(n),null}if(d=Te.current,fr(n))cm(n);else{var x=pc(ie.current);switch(d){case 1:d=x.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:d=x.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":d=x.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":d=x.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":d=x.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof l.is=="string"?x.createElement("select",{is:l.is}):x.createElement("select"),l.multiple?d.multiple=!0:l.size&&(d.size=l.size);break;default:d=typeof l.is=="string"?x.createElement(f,{is:l.is}):x.createElement(f)}}d[Ot]=n,d[tn]=l;e:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)d.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break e;for(;x.sibling===null;){if(x.return===null||x.return===n)break e;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=d;e:switch(Fn(d,f,l),f){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&va(n)}}return an(n),Of(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,s),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==l&&va(n);else{if(typeof l!="string"&&n.stateNode===null)throw Error(r(166));if(t=ie.current,fr(n)){if(t=n.stateNode,s=n.memoizedProps,l=null,f=On,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}t[Ot]=n,t=!!(t.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||Ag(t.nodeValue,s)),t||qa(n,!0)}else t=pc(t).createTextNode(l),t[Ot]=n,n.stateNode=t}return an(n),null;case 31:if(s=n.memoizedState,t===null||t.memoizedState!==null){if(l=fr(n),s!==null){if(t===null){if(!l)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[Ot]=n}else Ds(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;an(n),t=!1}else s=ku(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=s),t=!0;if(!t)return n.flags&256?(di(n),n):(di(n),null);if((n.flags&128)!==0)throw Error(r(558))}return an(n),null;case 13:if(l=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(f=fr(n),l!==null&&l.dehydrated!==null){if(t===null){if(!f)throw Error(r(318));if(f=n.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(r(317));f[Ot]=n}else Ds(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;an(n),f=!1}else f=ku(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=f),f=!0;if(!f)return n.flags&256?(di(n),n):(di(n),null)}return di(n),(n.flags&128)!==0?(n.lanes=s,n):(s=l!==null,t=t!==null&&t.memoizedState!==null,s&&(l=n.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool),d=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==f&&(l.flags|=2048)),s!==t&&s&&(n.child.flags|=8192),$l(n,n.updateQueue),an(n),null);case 4:return ze(),t===null&&nd(n.stateNode.containerInfo),an(n),null;case 10:return pa(n.type),an(n),null;case 19:if(j(dn),l=n.memoizedState,l===null)return an(n),null;if(f=(n.flags&128)!==0,d=l.rendering,d===null)if(f)Uo(l,!1);else{if(un!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(d=Hl(t),d!==null){for(n.flags|=128,Uo(l,!1),t=d.updateQueue,n.updateQueue=t,$l(n,t),n.subtreeFlags=0,t=s,s=n.child;s!==null;)am(s,t),s=s.sibling;return ve(dn,dn.current&1|2),Rt&&da(n,l.treeForkCount),n.child}t=t.sibling}l.tail!==null&&Mt()>ac&&(n.flags|=128,f=!0,Uo(l,!1),n.lanes=4194304)}else{if(!f)if(t=Hl(d),t!==null){if(n.flags|=128,f=!0,t=t.updateQueue,n.updateQueue=t,$l(n,t),Uo(l,!0),l.tail===null&&l.tailMode==="hidden"&&!d.alternate&&!Rt)return an(n),null}else 2*Mt()-l.renderingStartTime>ac&&s!==536870912&&(n.flags|=128,f=!0,Uo(l,!1),n.lanes=4194304);l.isBackwards?(d.sibling=n.child,n.child=d):(t=l.last,t!==null?t.sibling=d:n.child=d,l.last=d)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Mt(),t.sibling=null,s=dn.current,ve(dn,f?s&1|2:s&1),Rt&&da(n,l.treeForkCount),t):(an(n),null);case 22:case 23:return di(n),nf(),l=n.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(n.flags|=8192):l&&(n.flags|=8192),l?(s&536870912)!==0&&(n.flags&128)===0&&(an(n),n.subtreeFlags&6&&(n.flags|=8192)):an(n),s=n.updateQueue,s!==null&&$l(n,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),l=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(l=n.memoizedState.cachePool.pool),l!==s&&(n.flags|=2048),t!==null&&j(Us),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),pa(vn),an(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function Lx(t,n){switch(Gu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return pa(vn),ze(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Qe(n),null;case 31:if(n.memoizedState!==null){if(di(n),n.alternate===null)throw Error(r(340));Ds()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(di(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Ds()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return j(dn),null;case 4:return ze(),null;case 10:return pa(n.type),null;case 22:case 23:return di(n),nf(),t!==null&&j(Us),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return pa(vn),null;case 25:return null;default:return null}}function N0(t,n){switch(Gu(n),n.tag){case 3:pa(vn),ze();break;case 26:case 27:case 5:Qe(n);break;case 4:ze();break;case 31:n.memoizedState!==null&&di(n);break;case 13:di(n);break;case 19:j(dn);break;case 10:pa(n.type);break;case 22:case 23:di(n),nf(),t!==null&&j(Us);break;case 24:pa(vn)}}function Oo(t,n){try{var s=n.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var f=l.next;s=f;do{if((s.tag&t)===t){l=void 0;var d=s.create,x=s.inst;l=d(),x.destroy=l}s=s.next}while(s!==f)}}catch(R){qt(n,n.return,R)}}function $a(t,n,s){try{var l=n.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var d=f.next;l=d;do{if((l.tag&t)===t){var x=l.inst,R=x.destroy;if(R!==void 0){x.destroy=void 0,f=n;var V=s,ae=R;try{ae()}catch(_e){qt(f,V,_e)}}}l=l.next}while(l!==d)}}catch(_e){qt(n,n.return,_e)}}function L0(t){var n=t.updateQueue;if(n!==null){var s=t.stateNode;try{ym(n,s)}catch(l){qt(t,t.return,l)}}}function U0(t,n,s){s.props=Bs(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(l){qt(t,n,l)}}function Po(t,n){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof s=="function"?t.refCleanup=s(l):s.current=l}}catch(f){qt(t,n,f)}}function ji(t,n){var s=t.ref,l=t.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(f){qt(t,n,f)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(f){qt(t,n,f)}else s.current=null}function O0(t){var n=t.type,s=t.memoizedProps,l=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break e;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(f){qt(t,t.return,f)}}function Pf(t,n,s){try{var l=t.stateNode;eM(l,t.type,s,n),l[tn]=n}catch(f){qt(t,t.return,f)}}function P0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&rs(t.type)||t.tag===4}function If(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||P0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&rs(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ff(t,n,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,n?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(t,n):(n=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,n.appendChild(t),s=s._reactRootContainer,s!=null||n.onclick!==null||(n.onclick=ca));else if(l!==4&&(l===27&&rs(t.type)&&(s=t.stateNode,n=null),t=t.child,t!==null))for(Ff(t,n,s),t=t.sibling;t!==null;)Ff(t,n,s),t=t.sibling}function ec(t,n,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,n?s.insertBefore(t,n):s.appendChild(t);else if(l!==4&&(l===27&&rs(t.type)&&(s=t.stateNode),t=t.child,t!==null))for(ec(t,n,s),t=t.sibling;t!==null;)ec(t,n,s),t=t.sibling}function I0(t){var n=t.stateNode,s=t.memoizedProps;try{for(var l=t.type,f=n.attributes;f.length;)n.removeAttributeNode(f[0]);Fn(n,l,s),n[Ot]=t,n[tn]=s}catch(d){qt(t,t.return,d)}}var Sa=!1,Mn=!1,Bf=!1,F0=typeof WeakSet=="function"?WeakSet:Set,Nn=null;function Ux(t,n){if(t=t.containerInfo,sd=Mc,t=jp(t),Du(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var f=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{s.nodeType,d.nodeType}catch{s=null;break e}var x=0,R=-1,V=-1,ae=0,_e=0,Me=t,le=null;t:for(;;){for(var de;Me!==s||f!==0&&Me.nodeType!==3||(R=x+f),Me!==d||l!==0&&Me.nodeType!==3||(V=x+l),Me.nodeType===3&&(x+=Me.nodeValue.length),(de=Me.firstChild)!==null;)le=Me,Me=de;for(;;){if(Me===t)break t;if(le===s&&++ae===f&&(R=x),le===d&&++_e===l&&(V=x),(de=Me.nextSibling)!==null)break;Me=le,le=Me.parentNode}Me=de}s=R===-1||V===-1?null:{start:R,end:V}}else s=null}s=s||{start:0,end:0}}else s=null;for(rd={focusedElem:t,selectionRange:s},Mc=!1,Nn=n;Nn!==null;)if(n=Nn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Nn=t;else for(;Nn!==null;){switch(n=Nn,d=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(s=0;s<t.length;s++)f=t[s],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,s=n,f=d.memoizedProps,d=d.memoizedState,l=s.stateNode;try{var qe=Bs(s.type,f);t=l.getSnapshotBeforeUpdate(qe,d),l.__reactInternalSnapshotBeforeUpdate=t}catch(at){qt(s,s.return,at)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,s=t.nodeType,s===9)cd(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":cd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,Nn=t;break}Nn=n.return}}function B0(t,n,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:Ma(t,s),l&4&&Oo(5,s);break;case 1:if(Ma(t,s),l&4)if(t=s.stateNode,n===null)try{t.componentDidMount()}catch(x){qt(s,s.return,x)}else{var f=Bs(s.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(f,n,t.__reactInternalSnapshotBeforeUpdate)}catch(x){qt(s,s.return,x)}}l&64&&L0(s),l&512&&Po(s,s.return);break;case 3:if(Ma(t,s),l&64&&(t=s.updateQueue,t!==null)){if(n=null,s.child!==null)switch(s.child.tag){case 27:case 5:n=s.child.stateNode;break;case 1:n=s.child.stateNode}try{ym(t,n)}catch(x){qt(s,s.return,x)}}break;case 27:n===null&&l&4&&I0(s);case 26:case 5:Ma(t,s),n===null&&l&4&&O0(s),l&512&&Po(s,s.return);break;case 12:Ma(t,s);break;case 31:Ma(t,s),l&4&&G0(t,s);break;case 13:Ma(t,s),l&4&&V0(t,s),l&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=Vx.bind(null,s),lM(t,s))));break;case 22:if(l=s.memoizedState!==null||Sa,!l){n=n!==null&&n.memoizedState!==null||Mn,f=Sa;var d=Mn;Sa=l,(Mn=n)&&!d?ya(t,s,(s.subtreeFlags&8772)!==0):Ma(t,s),Sa=f,Mn=d}break;case 30:break;default:Ma(t,s)}}function z0(t){var n=t.alternate;n!==null&&(t.alternate=null,z0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Ha(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var ln=null,ei=!1;function xa(t,n,s){for(s=s.child;s!==null;)H0(t,n,s),s=s.sibling}function H0(t,n,s){if(me&&typeof me.onCommitFiberUnmount=="function")try{me.onCommitFiberUnmount(pe,s)}catch{}switch(s.tag){case 26:Mn||ji(s,n),xa(t,n,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:Mn||ji(s,n);var l=ln,f=ei;rs(s.type)&&(ln=s.stateNode,ei=!1),xa(t,n,s),Xo(s.stateNode),ln=l,ei=f;break;case 5:Mn||ji(s,n);case 6:if(l=ln,f=ei,ln=null,xa(t,n,s),ln=l,ei=f,ln!==null)if(ei)try{(ln.nodeType===9?ln.body:ln.nodeName==="HTML"?ln.ownerDocument.body:ln).removeChild(s.stateNode)}catch(d){qt(s,n,d)}else try{ln.removeChild(s.stateNode)}catch(d){qt(s,n,d)}break;case 18:ln!==null&&(ei?(t=ln,Lg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),Lr(t)):Lg(ln,s.stateNode));break;case 4:l=ln,f=ei,ln=s.stateNode.containerInfo,ei=!0,xa(t,n,s),ln=l,ei=f;break;case 0:case 11:case 14:case 15:$a(2,s,n),Mn||$a(4,s,n),xa(t,n,s);break;case 1:Mn||(ji(s,n),l=s.stateNode,typeof l.componentWillUnmount=="function"&&U0(s,n,l)),xa(t,n,s);break;case 21:xa(t,n,s);break;case 22:Mn=(l=Mn)||s.memoizedState!==null,xa(t,n,s),Mn=l;break;default:xa(t,n,s)}}function G0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Lr(t)}catch(s){qt(n,n.return,s)}}}function V0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Lr(t)}catch(s){qt(n,n.return,s)}}function Ox(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new F0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new F0),n;default:throw Error(r(435,t.tag))}}function tc(t,n){var s=Ox(t);n.forEach(function(l){if(!s.has(l)){s.add(l);var f=kx.bind(null,t,l);l.then(f,f)}})}function ti(t,n){var s=n.deletions;if(s!==null)for(var l=0;l<s.length;l++){var f=s[l],d=t,x=n,R=x;e:for(;R!==null;){switch(R.tag){case 27:if(rs(R.type)){ln=R.stateNode,ei=!1;break e}break;case 5:ln=R.stateNode,ei=!1;break e;case 3:case 4:ln=R.stateNode.containerInfo,ei=!0;break e}R=R.return}if(ln===null)throw Error(r(160));H0(d,x,f),ln=null,ei=!1,d=f.alternate,d!==null&&(d.return=null),f.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)k0(n,t),n=n.sibling}var Ii=null;function k0(t,n){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:ti(n,t),ni(t),l&4&&($a(3,t,t.return),Oo(3,t),$a(5,t,t.return));break;case 1:ti(n,t),ni(t),l&512&&(Mn||s===null||ji(s,s.return)),l&64&&Sa&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var f=Ii;if(ti(n,t),ni(t),l&512&&(Mn||s===null||ji(s,s.return)),l&4){var d=s!==null?s.memoizedState:null;if(l=t.memoizedState,s===null)if(l===null)if(t.stateNode===null){e:{l=t.type,s=t.memoizedProps,f=f.ownerDocument||f;t:switch(l){case"title":d=f.getElementsByTagName("title")[0],(!d||d[za]||d[Ot]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=f.createElement(l),f.head.insertBefore(d,f.querySelector("head > title"))),Fn(d,l,s),d[Ot]=t,_n(d),l=d;break e;case"link":var x=kg("link","href",f).get(l+(s.href||""));if(x){for(var R=0;R<x.length;R++)if(d=x[R],d.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&d.getAttribute("rel")===(s.rel==null?null:s.rel)&&d.getAttribute("title")===(s.title==null?null:s.title)&&d.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){x.splice(R,1);break t}}d=f.createElement(l),Fn(d,l,s),f.head.appendChild(d);break;case"meta":if(x=kg("meta","content",f).get(l+(s.content||""))){for(R=0;R<x.length;R++)if(d=x[R],d.getAttribute("content")===(s.content==null?null:""+s.content)&&d.getAttribute("name")===(s.name==null?null:s.name)&&d.getAttribute("property")===(s.property==null?null:s.property)&&d.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&d.getAttribute("charset")===(s.charSet==null?null:s.charSet)){x.splice(R,1);break t}}d=f.createElement(l),Fn(d,l,s),f.head.appendChild(d);break;default:throw Error(r(468,l))}d[Ot]=t,_n(d),l=d}t.stateNode=l}else Xg(f,t.type,t.stateNode);else t.stateNode=Vg(f,l,t.memoizedProps);else d!==l?(d===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):d.count--,l===null?Xg(f,t.type,t.stateNode):Vg(f,l,t.memoizedProps)):l===null&&t.stateNode!==null&&Pf(t,t.memoizedProps,s.memoizedProps)}break;case 27:ti(n,t),ni(t),l&512&&(Mn||s===null||ji(s,s.return)),s!==null&&l&4&&Pf(t,t.memoizedProps,s.memoizedProps);break;case 5:if(ti(n,t),ni(t),l&512&&(Mn||s===null||ji(s,s.return)),t.flags&32){f=t.stateNode;try{li(f,"")}catch(qe){qt(t,t.return,qe)}}l&4&&t.stateNode!=null&&(f=t.memoizedProps,Pf(t,f,s!==null?s.memoizedProps:f)),l&1024&&(Bf=!0);break;case 6:if(ti(n,t),ni(t),l&4){if(t.stateNode===null)throw Error(r(162));l=t.memoizedProps,s=t.stateNode;try{s.nodeValue=l}catch(qe){qt(t,t.return,qe)}}break;case 3:if(_c=null,f=Ii,Ii=mc(n.containerInfo),ti(n,t),Ii=f,ni(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{Lr(n.containerInfo)}catch(qe){qt(t,t.return,qe)}Bf&&(Bf=!1,X0(t));break;case 4:l=Ii,Ii=mc(t.stateNode.containerInfo),ti(n,t),ni(t),Ii=l;break;case 12:ti(n,t),ni(t);break;case 31:ti(n,t),ni(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,tc(t,l)));break;case 13:ti(n,t),ni(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(ic=Mt()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,tc(t,l)));break;case 22:f=t.memoizedState!==null;var V=s!==null&&s.memoizedState!==null,ae=Sa,_e=Mn;if(Sa=ae||f,Mn=_e||V,ti(n,t),Mn=_e,Sa=ae,ni(t),l&8192)e:for(n=t.stateNode,n._visibility=f?n._visibility&-2:n._visibility|1,f&&(s===null||V||Sa||Mn||zs(t)),s=null,n=t;;){if(n.tag===5||n.tag===26){if(s===null){V=s=n;try{if(d=V.stateNode,f)x=d.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{R=V.stateNode;var Me=V.memoizedProps.style,le=Me!=null&&Me.hasOwnProperty("display")?Me.display:null;R.style.display=le==null||typeof le=="boolean"?"":(""+le).trim()}}catch(qe){qt(V,V.return,qe)}}}else if(n.tag===6){if(s===null){V=n;try{V.stateNode.nodeValue=f?"":V.memoizedProps}catch(qe){qt(V,V.return,qe)}}}else if(n.tag===18){if(s===null){V=n;try{var de=V.stateNode;f?Ug(de,!0):Ug(V.stateNode,!1)}catch(qe){qt(V,V.return,qe)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;s===n&&(s=null),n=n.return}s===n&&(s=null),n.sibling.return=n.return,n=n.sibling}l&4&&(l=t.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,tc(t,s))));break;case 19:ti(n,t),ni(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,tc(t,l)));break;case 30:break;case 21:break;default:ti(n,t),ni(t)}}function ni(t){var n=t.flags;if(n&2){try{for(var s,l=t.return;l!==null;){if(P0(l)){s=l;break}l=l.return}if(s==null)throw Error(r(160));switch(s.tag){case 27:var f=s.stateNode,d=If(t);ec(t,d,f);break;case 5:var x=s.stateNode;s.flags&32&&(li(x,""),s.flags&=-33);var R=If(t);ec(t,R,x);break;case 3:case 4:var V=s.stateNode.containerInfo,ae=If(t);Ff(t,ae,V);break;default:throw Error(r(161))}}catch(_e){qt(t,t.return,_e)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function X0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;X0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Ma(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)B0(t,n.alternate,n),n=n.sibling}function zs(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:$a(4,n,n.return),zs(n);break;case 1:ji(n,n.return);var s=n.stateNode;typeof s.componentWillUnmount=="function"&&U0(n,n.return,s),zs(n);break;case 27:Xo(n.stateNode);case 26:case 5:ji(n,n.return),zs(n);break;case 22:n.memoizedState===null&&zs(n);break;case 30:zs(n);break;default:zs(n)}t=t.sibling}}function ya(t,n,s){for(s=s&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var l=n.alternate,f=t,d=n,x=d.flags;switch(d.tag){case 0:case 11:case 15:ya(f,d,s),Oo(4,d);break;case 1:if(ya(f,d,s),l=d,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(ae){qt(l,l.return,ae)}if(l=d,f=l.updateQueue,f!==null){var R=l.stateNode;try{var V=f.shared.hiddenCallbacks;if(V!==null)for(f.shared.hiddenCallbacks=null,f=0;f<V.length;f++)Mm(V[f],R)}catch(ae){qt(l,l.return,ae)}}s&&x&64&&L0(d),Po(d,d.return);break;case 27:I0(d);case 26:case 5:ya(f,d,s),s&&l===null&&x&4&&O0(d),Po(d,d.return);break;case 12:ya(f,d,s);break;case 31:ya(f,d,s),s&&x&4&&G0(f,d);break;case 13:ya(f,d,s),s&&x&4&&V0(f,d);break;case 22:d.memoizedState===null&&ya(f,d,s),Po(d,d.return);break;case 30:break;default:ya(f,d,s)}n=n.sibling}}function zf(t,n){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&Mo(s))}function Hf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Mo(t))}function Fi(t,n,s,l){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)W0(t,n,s,l),n=n.sibling}function W0(t,n,s,l){var f=n.flags;switch(n.tag){case 0:case 11:case 15:Fi(t,n,s,l),f&2048&&Oo(9,n);break;case 1:Fi(t,n,s,l);break;case 3:Fi(t,n,s,l),f&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Mo(t)));break;case 12:if(f&2048){Fi(t,n,s,l),t=n.stateNode;try{var d=n.memoizedProps,x=d.id,R=d.onPostCommit;typeof R=="function"&&R(x,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(V){qt(n,n.return,V)}}else Fi(t,n,s,l);break;case 31:Fi(t,n,s,l);break;case 13:Fi(t,n,s,l);break;case 23:break;case 22:d=n.stateNode,x=n.alternate,n.memoizedState!==null?d._visibility&2?Fi(t,n,s,l):Io(t,n):d._visibility&2?Fi(t,n,s,l):(d._visibility|=2,Mr(t,n,s,l,(n.subtreeFlags&10256)!==0||!1)),f&2048&&zf(x,n);break;case 24:Fi(t,n,s,l),f&2048&&Hf(n.alternate,n);break;default:Fi(t,n,s,l)}}function Mr(t,n,s,l,f){for(f=f&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var d=t,x=n,R=s,V=l,ae=x.flags;switch(x.tag){case 0:case 11:case 15:Mr(d,x,R,V,f),Oo(8,x);break;case 23:break;case 22:var _e=x.stateNode;x.memoizedState!==null?_e._visibility&2?Mr(d,x,R,V,f):Io(d,x):(_e._visibility|=2,Mr(d,x,R,V,f)),f&&ae&2048&&zf(x.alternate,x);break;case 24:Mr(d,x,R,V,f),f&&ae&2048&&Hf(x.alternate,x);break;default:Mr(d,x,R,V,f)}n=n.sibling}}function Io(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var s=t,l=n,f=l.flags;switch(l.tag){case 22:Io(s,l),f&2048&&zf(l.alternate,l);break;case 24:Io(s,l),f&2048&&Hf(l.alternate,l);break;default:Io(s,l)}n=n.sibling}}var Fo=8192;function yr(t,n,s){if(t.subtreeFlags&Fo)for(t=t.child;t!==null;)q0(t,n,s),t=t.sibling}function q0(t,n,s){switch(t.tag){case 26:yr(t,n,s),t.flags&Fo&&t.memoizedState!==null&&xM(s,Ii,t.memoizedState,t.memoizedProps);break;case 5:yr(t,n,s);break;case 3:case 4:var l=Ii;Ii=mc(t.stateNode.containerInfo),yr(t,n,s),Ii=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=Fo,Fo=16777216,yr(t,n,s),Fo=l):yr(t,n,s));break;default:yr(t,n,s)}}function Y0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Bo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var s=0;s<n.length;s++){var l=n[s];Nn=l,j0(l,t)}Y0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Z0(t),t=t.sibling}function Z0(t){switch(t.tag){case 0:case 11:case 15:Bo(t),t.flags&2048&&$a(9,t,t.return);break;case 3:Bo(t);break;case 12:Bo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,nc(t)):Bo(t);break;default:Bo(t)}}function nc(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var s=0;s<n.length;s++){var l=n[s];Nn=l,j0(l,t)}Y0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:$a(8,n,n.return),nc(n);break;case 22:s=n.stateNode,s._visibility&2&&(s._visibility&=-3,nc(n));break;default:nc(n)}t=t.sibling}}function j0(t,n){for(;Nn!==null;){var s=Nn;switch(s.tag){case 0:case 11:case 15:$a(8,s,n);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Mo(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,Nn=l;else e:for(s=t;Nn!==null;){l=Nn;var f=l.sibling,d=l.return;if(z0(l),l===s){Nn=null;break e}if(f!==null){f.return=d,Nn=f;break e}Nn=d}}}var Px={getCacheForType:function(t){var n=Pn(vn),s=n.data.get(t);return s===void 0&&(s=t(),n.data.set(t,s)),s},cacheSignal:function(){return Pn(vn).controller.signal}},Ix=typeof WeakMap=="function"?WeakMap:Map,zt=0,$t=null,Et=null,Tt=0,Wt=0,hi=null,es=!1,Er=!1,Gf=!1,Ea=0,un=0,ts=0,Hs=0,Vf=0,pi=0,br=0,zo=null,ii=null,kf=!1,ic=0,K0=0,ac=1/0,sc=null,ns=null,Rn=0,is=null,Tr=null,ba=0,Xf=0,Wf=null,Q0=null,Ho=0,qf=null;function mi(){return(zt&2)!==0&&Tt!==0?Tt&-Tt:B.T!==null?Jf():Tn()}function J0(){if(pi===0)if((Tt&536870912)===0||Rt){var t=st;st<<=1,(st&3932160)===0&&(st=262144),pi=t}else pi=536870912;return t=fi.current,t!==null&&(t.flags|=32),pi}function ai(t,n,s){(t===$t&&(Wt===2||Wt===9)||t.cancelPendingCommit!==null)&&(Ar(t,0),as(t,Tt,pi,!1)),He(t,s),((zt&2)===0||t!==$t)&&(t===$t&&((zt&2)===0&&(Hs|=s),un===4&&as(t,Tt,pi,!1)),Ki(t))}function $0(t,n,s){if((zt&6)!==0)throw Error(r(327));var l=!s&&(n&127)===0&&(n&t.expiredLanes)===0||we(t,n),f=l?zx(t,n):Zf(t,n,!0),d=l;do{if(f===0){Er&&!l&&as(t,n,0,!1);break}else{if(s=t.current.alternate,d&&!Fx(s)){f=Zf(t,n,!1),d=!1;continue}if(f===2){if(d=n,t.errorRecoveryDisabledLanes&d)var x=0;else x=t.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;e:{var R=t;f=zo;var V=R.current.memoizedState.isDehydrated;if(V&&(Ar(R,x).flags|=256),x=Zf(R,x,!1),x!==2){if(Gf&&!V){R.errorRecoveryDisabledLanes|=d,Hs|=d,f=4;break e}d=ii,ii=f,d!==null&&(ii===null?ii=d:ii.push.apply(ii,d))}f=x}if(d=!1,f!==2)continue}}if(f===1){Ar(t,0),as(t,n,0,!0);break}e:{switch(l=t,d=f,d){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:as(l,n,pi,!es);break e;case 2:ii=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(f=ic+300-Mt(),10<f)){if(as(l,n,pi,!es),ge(l,0,!0)!==0)break e;ba=n,l.timeoutHandle=Dg(eg.bind(null,l,s,ii,sc,kf,n,pi,Hs,br,es,d,"Throttled",-0,0),f);break e}eg(l,s,ii,sc,kf,n,pi,Hs,br,es,d,null,-0,0)}}break}while(!0);Ki(t)}function eg(t,n,s,l,f,d,x,R,V,ae,_e,Me,le,de){if(t.timeoutHandle=-1,Me=n.subtreeFlags,Me&8192||(Me&16785408)===16785408){Me={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ca},q0(n,d,Me);var qe=(d&62914560)===d?ic-Mt():(d&4194048)===d?K0-Mt():0;if(qe=MM(Me,qe),qe!==null){ba=d,t.cancelPendingCommit=qe(lg.bind(null,t,n,d,s,l,f,x,R,V,_e,Me,null,le,de)),as(t,d,x,!ae);return}}lg(t,n,d,s,l,f,x,R,V)}function Fx(t){for(var n=t;;){var s=n.tag;if((s===0||s===11||s===15)&&n.flags&16384&&(s=n.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var f=s[l],d=f.getSnapshot;f=f.value;try{if(!ci(d(),f))return!1}catch{return!1}}if(s=n.child,n.subtreeFlags&16384&&s!==null)s.return=n,n=s;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function as(t,n,s,l){n&=~Vf,n&=~Hs,t.suspendedLanes|=n,t.pingedLanes&=~n,l&&(t.warmLanes|=n),l=t.expirationTimes;for(var f=n;0<f;){var d=31-Be(f),x=1<<d;l[d]=-1,f&=~x}s!==0&&Lt(t,s,n)}function rc(){return(zt&6)===0?(Go(0),!1):!0}function Yf(){if(Et!==null){if(Wt===0)var t=Et.return;else t=Et,ha=Ns=null,cf(t),gr=null,Eo=0,t=Et;for(;t!==null;)N0(t.alternate,t),t=t.return;Et=null}}function Ar(t,n){var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,iM(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),ba=0,Yf(),$t=t,Et=s=fa(t.current,null),Tt=n,Wt=0,hi=null,es=!1,Er=we(t,n),Gf=!1,br=pi=Vf=Hs=ts=un=0,ii=zo=null,kf=!1,(n&8)!==0&&(n|=n&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=n;0<l;){var f=31-Be(l),d=1<<f;n|=t[f],l&=~d}return Ea=n,Rl(),s}function tg(t,n){ht=null,B.H=No,n===mr||n===Pl?(n=_m(),Wt=3):n===Ku?(n=_m(),Wt=4):Wt=n===Tf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,hi=n,Et===null&&(un=1,jl(t,xi(n,t.current)))}function ng(){var t=fi.current;return t===null?!0:(Tt&4194048)===Tt?bi===null:(Tt&62914560)===Tt||(Tt&536870912)!==0?t===bi:!1}function ig(){var t=B.H;return B.H=No,t===null?No:t}function ag(){var t=B.A;return B.A=Px,t}function oc(){un=4,es||(Tt&4194048)!==Tt&&fi.current!==null||(Er=!0),(ts&134217727)===0&&(Hs&134217727)===0||$t===null||as($t,Tt,pi,!1)}function Zf(t,n,s){var l=zt;zt|=2;var f=ig(),d=ag();($t!==t||Tt!==n)&&(sc=null,Ar(t,n)),n=!1;var x=un;e:do try{if(Wt!==0&&Et!==null){var R=Et,V=hi;switch(Wt){case 8:Yf(),x=6;break e;case 3:case 2:case 9:case 6:fi.current===null&&(n=!0);var ae=Wt;if(Wt=0,hi=null,Rr(t,R,V,ae),s&&Er){x=0;break e}break;default:ae=Wt,Wt=0,hi=null,Rr(t,R,V,ae)}}Bx(),x=un;break}catch(_e){tg(t,_e)}while(!0);return n&&t.shellSuspendCounter++,ha=Ns=null,zt=l,B.H=f,B.A=d,Et===null&&($t=null,Tt=0,Rl()),x}function Bx(){for(;Et!==null;)sg(Et)}function zx(t,n){var s=zt;zt|=2;var l=ig(),f=ag();$t!==t||Tt!==n?(sc=null,ac=Mt()+500,Ar(t,n)):Er=we(t,n);e:do try{if(Wt!==0&&Et!==null){n=Et;var d=hi;t:switch(Wt){case 1:Wt=0,hi=null,Rr(t,n,d,1);break;case 2:case 9:if(mm(d)){Wt=0,hi=null,rg(n);break}n=function(){Wt!==2&&Wt!==9||$t!==t||(Wt=7),Ki(t)},d.then(n,n);break e;case 3:Wt=7;break e;case 4:Wt=5;break e;case 7:mm(d)?(Wt=0,hi=null,rg(n)):(Wt=0,hi=null,Rr(t,n,d,7));break;case 5:var x=null;switch(Et.tag){case 26:x=Et.memoizedState;case 5:case 27:var R=Et;if(x?Wg(x):R.stateNode.complete){Wt=0,hi=null;var V=R.sibling;if(V!==null)Et=V;else{var ae=R.return;ae!==null?(Et=ae,lc(ae)):Et=null}break t}}Wt=0,hi=null,Rr(t,n,d,5);break;case 6:Wt=0,hi=null,Rr(t,n,d,6);break;case 8:Yf(),un=6;break e;default:throw Error(r(462))}}Hx();break}catch(_e){tg(t,_e)}while(!0);return ha=Ns=null,B.H=l,B.A=f,zt=s,Et!==null?0:($t=null,Tt=0,Rl(),un)}function Hx(){for(;Et!==null&&!_t();)sg(Et)}function sg(t){var n=w0(t.alternate,t,Ea);t.memoizedProps=t.pendingProps,n===null?lc(t):Et=n}function rg(t){var n=t,s=n.alternate;switch(n.tag){case 15:case 0:n=E0(s,n,n.pendingProps,n.type,void 0,Tt);break;case 11:n=E0(s,n,n.pendingProps,n.type.render,n.ref,Tt);break;case 5:cf(n);default:N0(s,n),n=Et=am(n,Ea),n=w0(s,n,Ea)}t.memoizedProps=t.pendingProps,n===null?lc(t):Et=n}function Rr(t,n,s,l){ha=Ns=null,cf(n),gr=null,Eo=0;var f=n.return;try{if(Cx(t,f,n,s,Tt)){un=1,jl(t,xi(s,t.current)),Et=null;return}}catch(d){if(f!==null)throw Et=f,d;un=1,jl(t,xi(s,t.current)),Et=null;return}n.flags&32768?(Rt||l===1?t=!0:Er||(Tt&536870912)!==0?t=!1:(es=t=!0,(l===2||l===9||l===3||l===6)&&(l=fi.current,l!==null&&l.tag===13&&(l.flags|=16384))),og(n,t)):lc(n)}function lc(t){var n=t;do{if((n.flags&32768)!==0){og(n,es);return}t=n.return;var s=Nx(n.alternate,n,Ea);if(s!==null){Et=s;return}if(n=n.sibling,n!==null){Et=n;return}Et=n=t}while(n!==null);un===0&&(un=5)}function og(t,n){do{var s=Lx(t.alternate,t);if(s!==null){s.flags&=32767,Et=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!n&&(t=t.sibling,t!==null)){Et=t;return}Et=t=s}while(t!==null);un=6,Et=null}function lg(t,n,s,l,f,d,x,R,V){t.cancelPendingCommit=null;do cc();while(Rn!==0);if((zt&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(d=n.lanes|n.childLanes,d|=Pu,Gt(t,s,d,x,R,V),t===$t&&(Et=$t=null,Tt=0),Tr=n,is=t,ba=s,Xf=d,Wf=f,Q0=l,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Xx($,function(){return hg(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||l){l=B.T,B.T=null,f=G.p,G.p=2,x=zt,zt|=4;try{Ux(t,n,s)}finally{zt=x,G.p=f,B.T=l}}Rn=1,cg(),ug(),fg()}}function cg(){if(Rn===1){Rn=0;var t=is,n=Tr,s=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||s){s=B.T,B.T=null;var l=G.p;G.p=2;var f=zt;zt|=4;try{k0(n,t);var d=rd,x=jp(t.containerInfo),R=d.focusedElem,V=d.selectionRange;if(x!==R&&R&&R.ownerDocument&&Zp(R.ownerDocument.documentElement,R)){if(V!==null&&Du(R)){var ae=V.start,_e=V.end;if(_e===void 0&&(_e=ae),"selectionStart"in R)R.selectionStart=ae,R.selectionEnd=Math.min(_e,R.value.length);else{var Me=R.ownerDocument||document,le=Me&&Me.defaultView||window;if(le.getSelection){var de=le.getSelection(),qe=R.textContent.length,at=Math.min(V.start,qe),Qt=V.end===void 0?at:Math.min(V.end,qe);!de.extend&&at>Qt&&(x=Qt,Qt=at,at=x);var J=Yp(R,at),W=Yp(R,Qt);if(J&&W&&(de.rangeCount!==1||de.anchorNode!==J.node||de.anchorOffset!==J.offset||de.focusNode!==W.node||de.focusOffset!==W.offset)){var ne=Me.createRange();ne.setStart(J.node,J.offset),de.removeAllRanges(),at>Qt?(de.addRange(ne),de.extend(W.node,W.offset)):(ne.setEnd(W.node,W.offset),de.addRange(ne))}}}}for(Me=[],de=R;de=de.parentNode;)de.nodeType===1&&Me.push({element:de,left:de.scrollLeft,top:de.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<Me.length;R++){var Se=Me[R];Se.element.scrollLeft=Se.left,Se.element.scrollTop=Se.top}}Mc=!!sd,rd=sd=null}finally{zt=f,G.p=l,B.T=s}}t.current=n,Rn=2}}function ug(){if(Rn===2){Rn=0;var t=is,n=Tr,s=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||s){s=B.T,B.T=null;var l=G.p;G.p=2;var f=zt;zt|=4;try{B0(t,n.alternate,n)}finally{zt=f,G.p=l,B.T=s}}Rn=3}}function fg(){if(Rn===4||Rn===3){Rn=0,q();var t=is,n=Tr,s=ba,l=Q0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Rn=5:(Rn=0,Tr=is=null,dg(t,t.pendingLanes));var f=t.pendingLanes;if(f===0&&(ns=null),mn(s),n=n.stateNode,me&&typeof me.onCommitFiberRoot=="function")try{me.onCommitFiberRoot(pe,n,void 0,(n.current.flags&128)===128)}catch{}if(l!==null){n=B.T,f=G.p,G.p=2,B.T=null;try{for(var d=t.onRecoverableError,x=0;x<l.length;x++){var R=l[x];d(R.value,{componentStack:R.stack})}}finally{B.T=n,G.p=f}}(ba&3)!==0&&cc(),Ki(t),f=t.pendingLanes,(s&261930)!==0&&(f&42)!==0?t===qf?Ho++:(Ho=0,qf=t):Ho=0,Go(0)}}function dg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Mo(n)))}function cc(){return cg(),ug(),fg(),hg()}function hg(){if(Rn!==5)return!1;var t=is,n=Xf;Xf=0;var s=mn(ba),l=B.T,f=G.p;try{G.p=32>s?32:s,B.T=null,s=Wf,Wf=null;var d=is,x=ba;if(Rn=0,Tr=is=null,ba=0,(zt&6)!==0)throw Error(r(331));var R=zt;if(zt|=4,Z0(d.current),W0(d,d.current,x,s),zt=R,Go(0,!1),me&&typeof me.onPostCommitFiberRoot=="function")try{me.onPostCommitFiberRoot(pe,d)}catch{}return!0}finally{G.p=f,B.T=l,dg(t,n)}}function pg(t,n,s){n=xi(s,n),n=bf(t.stateNode,n,2),t=Ka(t,n,2),t!==null&&(He(t,2),Ki(t))}function qt(t,n,s){if(t.tag===3)pg(t,t,s);else for(;n!==null;){if(n.tag===3){pg(n,t,s);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ns===null||!ns.has(l))){t=xi(s,t),s=m0(2),l=Ka(n,s,2),l!==null&&(g0(s,l,n,t),He(l,2),Ki(l));break}}n=n.return}}function jf(t,n,s){var l=t.pingCache;if(l===null){l=t.pingCache=new Ix;var f=new Set;l.set(n,f)}else f=l.get(n),f===void 0&&(f=new Set,l.set(n,f));f.has(s)||(Gf=!0,f.add(s),t=Gx.bind(null,t,n,s),n.then(t,t))}function Gx(t,n,s){var l=t.pingCache;l!==null&&l.delete(n),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,$t===t&&(Tt&s)===s&&(un===4||un===3&&(Tt&62914560)===Tt&&300>Mt()-ic?(zt&2)===0&&Ar(t,0):Vf|=s,br===Tt&&(br=0)),Ki(t)}function mg(t,n){n===0&&(n=be()),t=Cs(t,n),t!==null&&(He(t,n),Ki(t))}function Vx(t){var n=t.memoizedState,s=0;n!==null&&(s=n.retryLane),mg(t,s)}function kx(t,n){var s=0;switch(t.tag){case 31:case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(s=f.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(r(314))}l!==null&&l.delete(n),mg(t,s)}function Xx(t,n){return Dt(t,n)}var uc=null,Cr=null,Kf=!1,fc=!1,Qf=!1,ss=0;function Ki(t){t!==Cr&&t.next===null&&(Cr===null?uc=Cr=t:Cr=Cr.next=t),fc=!0,Kf||(Kf=!0,qx())}function Go(t,n){if(!Qf&&fc){Qf=!0;do for(var s=!1,l=uc;l!==null;){if(t!==0){var f=l.pendingLanes;if(f===0)var d=0;else{var x=l.suspendedLanes,R=l.pingedLanes;d=(1<<31-Be(42|t)+1)-1,d&=f&~(x&~R),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(s=!0,Sg(l,d))}else d=Tt,d=ge(l,l===$t?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||we(l,d)||(s=!0,Sg(l,d));l=l.next}while(s);Qf=!1}}function Wx(){gg()}function gg(){fc=Kf=!1;var t=0;ss!==0&&nM()&&(t=ss);for(var n=Mt(),s=null,l=uc;l!==null;){var f=l.next,d=_g(l,n);d===0?(l.next=null,s===null?uc=f:s.next=f,f===null&&(Cr=s)):(s=l,(t!==0||(d&3)!==0)&&(fc=!0)),l=f}Rn!==0&&Rn!==5||Go(t),ss!==0&&(ss=0)}function _g(t,n){for(var s=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var x=31-Be(d),R=1<<x,V=f[x];V===-1?((R&s)===0||(R&l)!==0)&&(f[x]=Pe(R,n)):V<=n&&(t.expiredLanes|=R),d&=~R}if(n=$t,s=Tt,s=ge(t,t===n?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,s===0||t===n&&(Wt===2||Wt===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&ft(l),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||we(t,s)){if(n=s&-s,n===t.callbackPriority)return n;switch(l!==null&&ft(l),mn(s)){case 2:case 8:s=b;break;case 32:s=$;break;case 268435456:s=he;break;default:s=$}return l=vg.bind(null,t),s=Dt(s,l),t.callbackPriority=n,t.callbackNode=s,n}return l!==null&&l!==null&&ft(l),t.callbackPriority=2,t.callbackNode=null,2}function vg(t,n){if(Rn!==0&&Rn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if(cc()&&t.callbackNode!==s)return null;var l=Tt;return l=ge(t,t===$t?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:($0(t,l,n),_g(t,Mt()),t.callbackNode!=null&&t.callbackNode===s?vg.bind(null,t):null)}function Sg(t,n){if(cc())return null;$0(t,n,!0)}function qx(){aM(function(){(zt&6)!==0?Dt(L,Wx):gg()})}function Jf(){if(ss===0){var t=hr;t===0&&(t=je,je<<=1,(je&261888)===0&&(je=256)),ss=t}return ss}function xg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:bs(""+t)}function Mg(t,n){var s=n.ownerDocument.createElement("input");return s.name=n.name,s.value=n.value,t.id&&s.setAttribute("form",t.id),n.parentNode.insertBefore(s,n),t=new FormData(t),s.parentNode.removeChild(s),t}function Yx(t,n,s,l,f){if(n==="submit"&&s&&s.stateNode===f){var d=xg((f[tn]||null).action),x=l.submitter;x&&(n=(n=x[tn]||null)?xg(n.formAction):x.getAttribute("formAction"),n!==null&&(d=n,x=null));var R=new El("action","action",null,l,f);t.push({event:R,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(ss!==0){var V=x?Mg(f,x):new FormData(f);vf(s,{pending:!0,data:V,method:f.method,action:d},null,V)}}else typeof d=="function"&&(R.preventDefault(),V=x?Mg(f,x):new FormData(f),vf(s,{pending:!0,data:V,method:f.method,action:d},d,V))},currentTarget:f}]})}}for(var $f=0;$f<Ou.length;$f++){var ed=Ou[$f],Zx=ed.toLowerCase(),jx=ed[0].toUpperCase()+ed.slice(1);Pi(Zx,"on"+jx)}Pi(Jp,"onAnimationEnd"),Pi($p,"onAnimationIteration"),Pi(em,"onAnimationStart"),Pi("dblclick","onDoubleClick"),Pi("focusin","onFocus"),Pi("focusout","onBlur"),Pi(fx,"onTransitionRun"),Pi(dx,"onTransitionStart"),Pi(hx,"onTransitionCancel"),Pi(tm,"onTransitionEnd"),oe("onMouseEnter",["mouseout","mouseover"]),oe("onMouseLeave",["mouseout","mouseover"]),oe("onPointerEnter",["pointerout","pointerover"]),oe("onPointerLeave",["pointerout","pointerover"]),K("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),K("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),K("onBeforeInput",["compositionend","keypress","textInput","paste"]),K("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),K("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),K("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Kx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Vo));function yg(t,n){n=(n&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],f=l.event;l=l.listeners;e:{var d=void 0;if(n)for(var x=l.length-1;0<=x;x--){var R=l[x],V=R.instance,ae=R.currentTarget;if(R=R.listener,V!==d&&f.isPropagationStopped())break e;d=R,f.currentTarget=ae;try{d(f)}catch(_e){Al(_e)}f.currentTarget=null,d=V}else for(x=0;x<l.length;x++){if(R=l[x],V=R.instance,ae=R.currentTarget,R=R.listener,V!==d&&f.isPropagationStopped())break e;d=R,f.currentTarget=ae;try{d(f)}catch(_e){Al(_e)}f.currentTarget=null,d=V}}}}function bt(t,n){var s=n[Jn];s===void 0&&(s=n[Jn]=new Set);var l=t+"__bubble";s.has(l)||(Eg(n,t,2,!1),s.add(l))}function td(t,n,s){var l=0;n&&(l|=4),Eg(s,t,l,n)}var dc="_reactListening"+Math.random().toString(36).slice(2);function nd(t){if(!t[dc]){t[dc]=!0,Sl.forEach(function(s){s!=="selectionchange"&&(Kx.has(s)||td(s,!1,t),td(s,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[dc]||(n[dc]=!0,td("selectionchange",!1,n))}}function Eg(t,n,s,l){switch(Jg(n)){case 2:var f=bM;break;case 8:f=TM;break;default:f=_d}s=f.bind(null,n,s,t),f=void 0,!Mu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(n,s,{capture:!0,passive:f}):t.addEventListener(n,s,!0):f!==void 0?t.addEventListener(n,s,{passive:f}):t.addEventListener(n,s,!1)}function id(t,n,s,l,f){var d=l;if((n&1)===0&&(n&2)===0&&l!==null)e:for(;;){if(l===null)return;var x=l.tag;if(x===3||x===4){var R=l.stateNode.containerInfo;if(R===f)break;if(x===4)for(x=l.return;x!==null;){var V=x.tag;if((V===3||V===4)&&x.stateNode.containerInfo===f)return;x=x.return}for(;R!==null;){if(x=oa(R),x===null)return;if(V=x.tag,V===5||V===6||V===26||V===27){l=d=x;continue e}R=R.parentNode}}l=l.return}Cp(function(){var ae=d,_e=Su(s),Me=[];e:{var le=nm.get(t);if(le!==void 0){var de=El,qe=t;switch(t){case"keypress":if(Ml(s)===0)break e;case"keydown":case"keyup":de=kS;break;case"focusin":qe="focus",de=Tu;break;case"focusout":qe="blur",de=Tu;break;case"beforeblur":case"afterblur":de=Tu;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":de=Np;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":de=NS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":de=qS;break;case Jp:case $p:case em:de=OS;break;case tm:de=ZS;break;case"scroll":case"scrollend":de=wS;break;case"wheel":de=KS;break;case"copy":case"cut":case"paste":de=IS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":de=Up;break;case"toggle":case"beforetoggle":de=JS}var at=(n&4)!==0,Qt=!at&&(t==="scroll"||t==="scrollend"),J=at?le!==null?le+"Capture":null:le;at=[];for(var W=ae,ne;W!==null;){var Se=W;if(ne=Se.stateNode,Se=Se.tag,Se!==5&&Se!==26&&Se!==27||ne===null||J===null||(Se=co(W,J),Se!=null&&at.push(ko(W,Se,ne))),Qt)break;W=W.return}0<at.length&&(le=new de(le,qe,null,s,_e),Me.push({event:le,listeners:at}))}}if((n&7)===0){e:{if(le=t==="mouseover"||t==="pointerover",de=t==="mouseout"||t==="pointerout",le&&s!==vu&&(qe=s.relatedTarget||s.fromElement)&&(oa(qe)||qe[Dn]))break e;if((de||le)&&(le=_e.window===_e?_e:(le=_e.ownerDocument)?le.defaultView||le.parentWindow:window,de?(qe=s.relatedTarget||s.toElement,de=ae,qe=qe?oa(qe):null,qe!==null&&(Qt=c(qe),at=qe.tag,qe!==Qt||at!==5&&at!==27&&at!==6)&&(qe=null)):(de=null,qe=ae),de!==qe)){if(at=Np,Se="onMouseLeave",J="onMouseEnter",W="mouse",(t==="pointerout"||t==="pointerover")&&(at=Up,Se="onPointerLeave",J="onPointerEnter",W="pointer"),Qt=de==null?le:Es(de),ne=qe==null?le:Es(qe),le=new at(Se,W+"leave",de,s,_e),le.target=Qt,le.relatedTarget=ne,Se=null,oa(_e)===ae&&(at=new at(J,W+"enter",qe,s,_e),at.target=ne,at.relatedTarget=Qt,Se=at),Qt=Se,de&&qe)t:{for(at=Qx,J=de,W=qe,ne=0,Se=J;Se;Se=at(Se))ne++;Se=0;for(var tt=W;tt;tt=at(tt))Se++;for(;0<ne-Se;)J=at(J),ne--;for(;0<Se-ne;)W=at(W),Se--;for(;ne--;){if(J===W||W!==null&&J===W.alternate){at=J;break t}J=at(J),W=at(W)}at=null}else at=null;de!==null&&bg(Me,le,de,at,!1),qe!==null&&Qt!==null&&bg(Me,Qt,qe,at,!0)}}e:{if(le=ae?Es(ae):window,de=le.nodeName&&le.nodeName.toLowerCase(),de==="select"||de==="input"&&le.type==="file")var It=Gp;else if(zp(le))if(Vp)It=lx;else{It=rx;var Ke=sx}else de=le.nodeName,!de||de.toLowerCase()!=="input"||le.type!=="checkbox"&&le.type!=="radio"?ae&&Ht(ae.elementType)&&(It=Gp):It=ox;if(It&&(It=It(t,ae))){Hp(Me,It,s,_e);break e}Ke&&Ke(t,le,ae),t==="focusout"&&ae&&le.type==="number"&&ae.memoizedProps.value!=null&&yt(le,"number",le.value)}switch(Ke=ae?Es(ae):window,t){case"focusin":(zp(Ke)||Ke.contentEditable==="true")&&(sr=Ke,Nu=ae,vo=null);break;case"focusout":vo=Nu=sr=null;break;case"mousedown":Lu=!0;break;case"contextmenu":case"mouseup":case"dragend":Lu=!1,Kp(Me,s,_e);break;case"selectionchange":if(ux)break;case"keydown":case"keyup":Kp(Me,s,_e)}var pt;if(Ru)e:{switch(t){case"compositionstart":var At="onCompositionStart";break e;case"compositionend":At="onCompositionEnd";break e;case"compositionupdate":At="onCompositionUpdate";break e}At=void 0}else ar?Fp(t,s)&&(At="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(At="onCompositionStart");At&&(Op&&s.locale!=="ko"&&(ar||At!=="onCompositionStart"?At==="onCompositionEnd"&&ar&&(pt=wp()):(ka=_e,yu="value"in ka?ka.value:ka.textContent,ar=!0)),Ke=hc(ae,At),0<Ke.length&&(At=new Lp(At,t,null,s,_e),Me.push({event:At,listeners:Ke}),pt?At.data=pt:(pt=Bp(s),pt!==null&&(At.data=pt)))),(pt=ex?tx(t,s):nx(t,s))&&(At=hc(ae,"onBeforeInput"),0<At.length&&(Ke=new Lp("onBeforeInput","beforeinput",null,s,_e),Me.push({event:Ke,listeners:At}),Ke.data=pt)),Yx(Me,t,ae,s,_e)}yg(Me,n)})}function ko(t,n,s){return{instance:t,listener:n,currentTarget:s}}function hc(t,n){for(var s=n+"Capture",l=[];t!==null;){var f=t,d=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||d===null||(f=co(t,s),f!=null&&l.unshift(ko(t,f,d)),f=co(t,n),f!=null&&l.push(ko(t,f,d))),t.tag===3)return l;t=t.return}return[]}function Qx(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function bg(t,n,s,l,f){for(var d=n._reactName,x=[];s!==null&&s!==l;){var R=s,V=R.alternate,ae=R.stateNode;if(R=R.tag,V!==null&&V===l)break;R!==5&&R!==26&&R!==27||ae===null||(V=ae,f?(ae=co(s,d),ae!=null&&x.unshift(ko(s,ae,V))):f||(ae=co(s,d),ae!=null&&x.push(ko(s,ae,V)))),s=s.return}x.length!==0&&t.push({event:n,listeners:x})}var Jx=/\r\n?/g,$x=/\u0000|\uFFFD/g;function Tg(t){return(typeof t=="string"?t:""+t).replace(Jx,`
`).replace($x,"")}function Ag(t,n){return n=Tg(n),Tg(t)===n}function Kt(t,n,s,l,f,d){switch(s){case"children":typeof l=="string"?n==="body"||n==="textarea"&&l===""||li(t,l):(typeof l=="number"||typeof l=="bigint")&&n!=="body"&&li(t,""+l);break;case"className":We(t,"class",l);break;case"tabIndex":We(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":We(t,s,l);break;case"style":Oi(t,l,d);break;case"data":if(n!=="object"){We(t,"data",l);break}case"src":case"href":if(l===""&&(n!=="a"||s!=="href")){t.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=bs(""+l),t.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(s==="formAction"?(n!=="input"&&Kt(t,n,"name",f.name,f,null),Kt(t,n,"formEncType",f.formEncType,f,null),Kt(t,n,"formMethod",f.formMethod,f,null),Kt(t,n,"formTarget",f.formTarget,f,null)):(Kt(t,n,"encType",f.encType,f,null),Kt(t,n,"method",f.method,f,null),Kt(t,n,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=bs(""+l),t.setAttribute(s,l);break;case"onClick":l!=null&&(t.onclick=ca);break;case"onScroll":l!=null&&bt("scroll",t);break;case"onScrollEnd":l!=null&&bt("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}s=bs(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""+l):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":l===!0?t.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,l):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(s,l):t.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(s):t.setAttribute(s,l);break;case"popover":bt("beforetoggle",t),bt("toggle",t),Oe(t,"popover",l);break;case"xlinkActuate":ke(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":ke(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":ke(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":ke(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":ke(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":ke(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":ke(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":ke(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":ke(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Oe(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=qi.get(s)||s,Oe(t,s,l))}}function ad(t,n,s,l,f,d){switch(s){case"style":Oi(t,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"children":typeof l=="string"?li(t,l):(typeof l=="number"||typeof l=="bigint")&&li(t,""+l);break;case"onScroll":l!=null&&bt("scroll",t);break;case"onScrollEnd":l!=null&&bt("scrollend",t);break;case"onClick":l!=null&&(t.onclick=ca);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!A.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(f=s.endsWith("Capture"),n=s.slice(2,f?s.length-7:void 0),d=t[tn]||null,d=d!=null?d[s]:null,typeof d=="function"&&t.removeEventListener(n,d,f),typeof l=="function")){typeof d!="function"&&d!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(n,l,f);break e}s in t?t[s]=l:l===!0?t.setAttribute(s,""):Oe(t,s,l)}}}function Fn(t,n,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":bt("error",t),bt("load",t);var l=!1,f=!1,d;for(d in s)if(s.hasOwnProperty(d)){var x=s[d];if(x!=null)switch(d){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Kt(t,n,d,x,s,null)}}f&&Kt(t,n,"srcSet",s.srcSet,s,null),l&&Kt(t,n,"src",s.src,s,null);return;case"input":bt("invalid",t);var R=d=x=f=null,V=null,ae=null;for(l in s)if(s.hasOwnProperty(l)){var _e=s[l];if(_e!=null)switch(l){case"name":f=_e;break;case"type":x=_e;break;case"checked":V=_e;break;case"defaultChecked":ae=_e;break;case"value":d=_e;break;case"defaultValue":R=_e;break;case"children":case"dangerouslySetInnerHTML":if(_e!=null)throw Error(r(137,n));break;default:Kt(t,n,l,_e,s,null)}}Hn(t,d,R,V,ae,x,f,!1);return;case"select":bt("invalid",t),l=x=d=null;for(f in s)if(s.hasOwnProperty(f)&&(R=s[f],R!=null))switch(f){case"value":d=R;break;case"defaultValue":x=R;break;case"multiple":l=R;default:Kt(t,n,f,R,s,null)}n=d,s=x,t.multiple=!!l,n!=null?An(t,!!l,n,!1):s!=null&&An(t,!!l,s,!0);return;case"textarea":bt("invalid",t),d=f=l=null;for(x in s)if(s.hasOwnProperty(x)&&(R=s[x],R!=null))switch(x){case"value":l=R;break;case"defaultValue":f=R;break;case"children":d=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(r(91));break;default:Kt(t,n,x,R,s,null)}Ui(t,l,f,d);return;case"option":for(V in s)if(s.hasOwnProperty(V)&&(l=s[V],l!=null))switch(V){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Kt(t,n,V,l,s,null)}return;case"dialog":bt("beforetoggle",t),bt("toggle",t),bt("cancel",t),bt("close",t);break;case"iframe":case"object":bt("load",t);break;case"video":case"audio":for(l=0;l<Vo.length;l++)bt(Vo[l],t);break;case"image":bt("error",t),bt("load",t);break;case"details":bt("toggle",t);break;case"embed":case"source":case"link":bt("error",t),bt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ae in s)if(s.hasOwnProperty(ae)&&(l=s[ae],l!=null))switch(ae){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Kt(t,n,ae,l,s,null)}return;default:if(Ht(n)){for(_e in s)s.hasOwnProperty(_e)&&(l=s[_e],l!==void 0&&ad(t,n,_e,l,s,void 0));return}}for(R in s)s.hasOwnProperty(R)&&(l=s[R],l!=null&&Kt(t,n,R,l,s,null))}function eM(t,n,s,l){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,d=null,x=null,R=null,V=null,ae=null,_e=null;for(de in s){var Me=s[de];if(s.hasOwnProperty(de)&&Me!=null)switch(de){case"checked":break;case"value":break;case"defaultValue":V=Me;default:l.hasOwnProperty(de)||Kt(t,n,de,null,l,Me)}}for(var le in l){var de=l[le];if(Me=s[le],l.hasOwnProperty(le)&&(de!=null||Me!=null))switch(le){case"type":d=de;break;case"name":f=de;break;case"checked":ae=de;break;case"defaultChecked":_e=de;break;case"value":x=de;break;case"defaultValue":R=de;break;case"children":case"dangerouslySetInnerHTML":if(de!=null)throw Error(r(137,n));break;default:de!==Me&&Kt(t,n,le,de,l,Me)}}Ge(t,x,R,V,ae,_e,d,f);return;case"select":de=x=R=le=null;for(d in s)if(V=s[d],s.hasOwnProperty(d)&&V!=null)switch(d){case"value":break;case"multiple":de=V;default:l.hasOwnProperty(d)||Kt(t,n,d,null,l,V)}for(f in l)if(d=l[f],V=s[f],l.hasOwnProperty(f)&&(d!=null||V!=null))switch(f){case"value":le=d;break;case"defaultValue":R=d;break;case"multiple":x=d;default:d!==V&&Kt(t,n,f,d,l,V)}n=R,s=x,l=de,le!=null?An(t,!!s,le,!1):!!l!=!!s&&(n!=null?An(t,!!s,n,!0):An(t,!!s,s?[]:"",!1));return;case"textarea":de=le=null;for(R in s)if(f=s[R],s.hasOwnProperty(R)&&f!=null&&!l.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Kt(t,n,R,null,l,f)}for(x in l)if(f=l[x],d=s[x],l.hasOwnProperty(x)&&(f!=null||d!=null))switch(x){case"value":le=f;break;case"defaultValue":de=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(r(91));break;default:f!==d&&Kt(t,n,x,f,l,d)}oi(t,le,de);return;case"option":for(var qe in s)if(le=s[qe],s.hasOwnProperty(qe)&&le!=null&&!l.hasOwnProperty(qe))switch(qe){case"selected":t.selected=!1;break;default:Kt(t,n,qe,null,l,le)}for(V in l)if(le=l[V],de=s[V],l.hasOwnProperty(V)&&le!==de&&(le!=null||de!=null))switch(V){case"selected":t.selected=le&&typeof le!="function"&&typeof le!="symbol";break;default:Kt(t,n,V,le,l,de)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var at in s)le=s[at],s.hasOwnProperty(at)&&le!=null&&!l.hasOwnProperty(at)&&Kt(t,n,at,null,l,le);for(ae in l)if(le=l[ae],de=s[ae],l.hasOwnProperty(ae)&&le!==de&&(le!=null||de!=null))switch(ae){case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(r(137,n));break;default:Kt(t,n,ae,le,l,de)}return;default:if(Ht(n)){for(var Qt in s)le=s[Qt],s.hasOwnProperty(Qt)&&le!==void 0&&!l.hasOwnProperty(Qt)&&ad(t,n,Qt,void 0,l,le);for(_e in l)le=l[_e],de=s[_e],!l.hasOwnProperty(_e)||le===de||le===void 0&&de===void 0||ad(t,n,_e,le,l,de);return}}for(var J in s)le=s[J],s.hasOwnProperty(J)&&le!=null&&!l.hasOwnProperty(J)&&Kt(t,n,J,null,l,le);for(Me in l)le=l[Me],de=s[Me],!l.hasOwnProperty(Me)||le===de||le==null&&de==null||Kt(t,n,Me,le,l,de)}function Rg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function tM(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,s=performance.getEntriesByType("resource"),l=0;l<s.length;l++){var f=s[l],d=f.transferSize,x=f.initiatorType,R=f.duration;if(d&&R&&Rg(x)){for(x=0,R=f.responseEnd,l+=1;l<s.length;l++){var V=s[l],ae=V.startTime;if(ae>R)break;var _e=V.transferSize,Me=V.initiatorType;_e&&Rg(Me)&&(V=V.responseEnd,x+=_e*(V<R?1:(R-ae)/(V-ae)))}if(--l,n+=8*(d+x)/(f.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var sd=null,rd=null;function pc(t){return t.nodeType===9?t:t.ownerDocument}function Cg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function wg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function od(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var ld=null;function nM(){var t=window.event;return t&&t.type==="popstate"?t===ld?!1:(ld=t,!0):(ld=null,!1)}var Dg=typeof setTimeout=="function"?setTimeout:void 0,iM=typeof clearTimeout=="function"?clearTimeout:void 0,Ng=typeof Promise=="function"?Promise:void 0,aM=typeof queueMicrotask=="function"?queueMicrotask:typeof Ng<"u"?function(t){return Ng.resolve(null).then(t).catch(sM)}:Dg;function sM(t){setTimeout(function(){throw t})}function rs(t){return t==="head"}function Lg(t,n){var s=n,l=0;do{var f=s.nextSibling;if(t.removeChild(s),f&&f.nodeType===8)if(s=f.data,s==="/$"||s==="/&"){if(l===0){t.removeChild(f),Lr(n);return}l--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")l++;else if(s==="html")Xo(t.ownerDocument.documentElement);else if(s==="head"){s=t.ownerDocument.head,Xo(s);for(var d=s.firstChild;d;){var x=d.nextSibling,R=d.nodeName;d[za]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&d.rel.toLowerCase()==="stylesheet"||s.removeChild(d),d=x}}else s==="body"&&Xo(t.ownerDocument.body);s=f}while(s);Lr(n)}function Ug(t,n){var s=t;t=0;do{var l=s.nextSibling;if(s.nodeType===1?n?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(n?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),l&&l.nodeType===8)if(s=l.data,s==="/$"){if(t===0)break;t--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||t++;s=l}while(s)}function cd(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var s=n;switch(n=n.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":cd(s),Ha(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function rM(t,n,s,l){for(;t.nodeType===1;){var f=s;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[za])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==f.rel||t.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||t.getAttribute("title")!==(f.title==null?null:f.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(f.src==null?null:f.src)||t.getAttribute("type")!==(f.type==null?null:f.type)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var d=f.name==null?null:""+f.name;if(f.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=Ti(t.nextSibling),t===null)break}return null}function oM(t,n,s){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=Ti(t.nextSibling),t===null))return null;return t}function Og(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Ti(t.nextSibling),t===null))return null;return t}function ud(t){return t.data==="$?"||t.data==="$~"}function fd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function lM(t,n){var s=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||s.readyState!=="loading")n();else{var l=function(){n(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function Ti(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var dd=null;function Pg(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"||s==="/&"){if(n===0)return Ti(t.nextSibling);n--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||n++}t=t.nextSibling}return null}function Ig(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(n===0)return t;n--}else s!=="/$"&&s!=="/&"||n++}t=t.previousSibling}return null}function Fg(t,n,s){switch(n=pc(s),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Xo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Ha(t)}var Ai=new Map,Bg=new Set;function mc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ta=G.d;G.d={f:cM,r:uM,D:fM,C:dM,L:hM,m:pM,X:gM,S:mM,M:_M};function cM(){var t=Ta.f(),n=rc();return t||n}function uM(t){var n=la(t);n!==null&&n.tag===5&&n.type==="form"?t0(n):Ta.r(t)}var wr=typeof document>"u"?null:document;function zg(t,n,s){var l=wr;if(l&&typeof n=="string"&&n){var f=kt(n);f='link[rel="'+t+'"][href="'+f+'"]',typeof s=="string"&&(f+='[crossorigin="'+s+'"]'),Bg.has(f)||(Bg.add(f),t={rel:t,crossOrigin:s,href:n},l.querySelector(f)===null&&(n=l.createElement("link"),Fn(n,"link",t),_n(n),l.head.appendChild(n)))}}function fM(t){Ta.D(t),zg("dns-prefetch",t,null)}function dM(t,n){Ta.C(t,n),zg("preconnect",t,n)}function hM(t,n,s){Ta.L(t,n,s);var l=wr;if(l&&t&&n){var f='link[rel="preload"][as="'+kt(n)+'"]';n==="image"&&s&&s.imageSrcSet?(f+='[imagesrcset="'+kt(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(f+='[imagesizes="'+kt(s.imageSizes)+'"]')):f+='[href="'+kt(t)+'"]';var d=f;switch(n){case"style":d=Dr(t);break;case"script":d=Nr(t)}Ai.has(d)||(t=v({rel:"preload",href:n==="image"&&s&&s.imageSrcSet?void 0:t,as:n},s),Ai.set(d,t),l.querySelector(f)!==null||n==="style"&&l.querySelector(Wo(d))||n==="script"&&l.querySelector(qo(d))||(n=l.createElement("link"),Fn(n,"link",t),_n(n),l.head.appendChild(n)))}}function pM(t,n){Ta.m(t,n);var s=wr;if(s&&t){var l=n&&typeof n.as=="string"?n.as:"script",f='link[rel="modulepreload"][as="'+kt(l)+'"][href="'+kt(t)+'"]',d=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Nr(t)}if(!Ai.has(d)&&(t=v({rel:"modulepreload",href:t},n),Ai.set(d,t),s.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(qo(d)))return}l=s.createElement("link"),Fn(l,"link",t),_n(l),s.head.appendChild(l)}}}function mM(t,n,s){Ta.S(t,n,s);var l=wr;if(l&&t){var f=Ga(l).hoistableStyles,d=Dr(t);n=n||"default";var x=f.get(d);if(!x){var R={loading:0,preload:null};if(x=l.querySelector(Wo(d)))R.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":n},s),(s=Ai.get(d))&&hd(t,s);var V=x=l.createElement("link");_n(V),Fn(V,"link",t),V._p=new Promise(function(ae,_e){V.onload=ae,V.onerror=_e}),V.addEventListener("load",function(){R.loading|=1}),V.addEventListener("error",function(){R.loading|=2}),R.loading|=4,gc(x,n,l)}x={type:"stylesheet",instance:x,count:1,state:R},f.set(d,x)}}}function gM(t,n){Ta.X(t,n);var s=wr;if(s&&t){var l=Ga(s).hoistableScripts,f=Nr(t),d=l.get(f);d||(d=s.querySelector(qo(f)),d||(t=v({src:t,async:!0},n),(n=Ai.get(f))&&pd(t,n),d=s.createElement("script"),_n(d),Fn(d,"link",t),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(f,d))}}function _M(t,n){Ta.M(t,n);var s=wr;if(s&&t){var l=Ga(s).hoistableScripts,f=Nr(t),d=l.get(f);d||(d=s.querySelector(qo(f)),d||(t=v({src:t,async:!0,type:"module"},n),(n=Ai.get(f))&&pd(t,n),d=s.createElement("script"),_n(d),Fn(d,"link",t),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(f,d))}}function Hg(t,n,s,l){var f=(f=ie.current)?mc(f):null;if(!f)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(n=Dr(s.href),s=Ga(f).hoistableStyles,l=s.get(n),l||(l={type:"style",instance:null,count:0,state:null},s.set(n,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=Dr(s.href);var d=Ga(f).hoistableStyles,x=d.get(t);if(x||(f=f.ownerDocument||f,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,x),(d=f.querySelector(Wo(t)))&&!d._p&&(x.instance=d,x.state.loading=5),Ai.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Ai.set(t,s),d||vM(f,t,s,x.state))),n&&l===null)throw Error(r(528,""));return x}if(n&&l!==null)throw Error(r(529,""));return null;case"script":return n=s.async,s=s.src,typeof s=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Nr(s),s=Ga(f).hoistableScripts,l=s.get(n),l||(l={type:"script",instance:null,count:0,state:null},s.set(n,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Dr(t){return'href="'+kt(t)+'"'}function Wo(t){return'link[rel="stylesheet"]['+t+"]"}function Gg(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function vM(t,n,s,l){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?l.loading=1:(n=t.createElement("link"),l.preload=n,n.addEventListener("load",function(){return l.loading|=1}),n.addEventListener("error",function(){return l.loading|=2}),Fn(n,"link",s),_n(n),t.head.appendChild(n))}function Nr(t){return'[src="'+kt(t)+'"]'}function qo(t){return"script[async]"+t}function Vg(t,n,s){if(n.count++,n.instance===null)switch(n.type){case"style":var l=t.querySelector('style[data-href~="'+kt(s.href)+'"]');if(l)return n.instance=l,_n(l),l;var f=v({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),_n(l),Fn(l,"style",f),gc(l,s.precedence,t),n.instance=l;case"stylesheet":f=Dr(s.href);var d=t.querySelector(Wo(f));if(d)return n.state.loading|=4,n.instance=d,_n(d),d;l=Gg(s),(f=Ai.get(f))&&hd(l,f),d=(t.ownerDocument||t).createElement("link"),_n(d);var x=d;return x._p=new Promise(function(R,V){x.onload=R,x.onerror=V}),Fn(d,"link",l),n.state.loading|=4,gc(d,s.precedence,t),n.instance=d;case"script":return d=Nr(s.src),(f=t.querySelector(qo(d)))?(n.instance=f,_n(f),f):(l=s,(f=Ai.get(d))&&(l=v({},s),pd(l,f)),t=t.ownerDocument||t,f=t.createElement("script"),_n(f),Fn(f,"link",l),t.head.appendChild(f),n.instance=f);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(l=n.instance,n.state.loading|=4,gc(l,s.precedence,t));return n.instance}function gc(t,n,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,d=f,x=0;x<l.length;x++){var R=l[x];if(R.dataset.precedence===n)d=R;else if(d!==f)break}d?d.parentNode.insertBefore(t,d.nextSibling):(n=s.nodeType===9?s.head:s,n.insertBefore(t,n.firstChild))}function hd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function pd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var _c=null;function kg(t,n,s){if(_c===null){var l=new Map,f=_c=new Map;f.set(s,l)}else f=_c,l=f.get(s),l||(l=new Map,f.set(s,l));if(l.has(t))return l;for(l.set(t,null),s=s.getElementsByTagName(t),f=0;f<s.length;f++){var d=s[f];if(!(d[za]||d[Ot]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var x=d.getAttribute(n)||"";x=t+x;var R=l.get(x);R?R.push(d):l.set(x,[d])}}return l}function Xg(t,n,s){t=t.ownerDocument||t,t.head.insertBefore(s,n==="title"?t.querySelector("head > title"):null)}function SM(t,n,s){if(s===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Wg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function xM(t,n,s,l){if(s.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var f=Dr(l.href),d=n.querySelector(Wo(f));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=vc.bind(t),n.then(t,t)),s.state.loading|=4,s.instance=d,_n(d);return}d=n.ownerDocument||n,l=Gg(l),(f=Ai.get(f))&&hd(l,f),d=d.createElement("link"),_n(d);var x=d;x._p=new Promise(function(R,V){x.onload=R,x.onerror=V}),Fn(d,"link",l),s.instance=d}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(s,n),(n=s.state.preload)&&(s.state.loading&3)===0&&(t.count++,s=vc.bind(t),n.addEventListener("load",s),n.addEventListener("error",s))}}var md=0;function MM(t,n){return t.stylesheets&&t.count===0&&xc(t,t.stylesheets),0<t.count||0<t.imgCount?function(s){var l=setTimeout(function(){if(t.stylesheets&&xc(t,t.stylesheets),t.unsuspend){var d=t.unsuspend;t.unsuspend=null,d()}},6e4+n);0<t.imgBytes&&md===0&&(md=62500*tM());var f=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&xc(t,t.stylesheets),t.unsuspend)){var d=t.unsuspend;t.unsuspend=null,d()}},(t.imgBytes>md?50:800)+n);return t.unsuspend=s,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(f)}}:null}function vc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)xc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Sc=null;function xc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Sc=new Map,n.forEach(yM,t),Sc=null,vc.call(t))}function yM(t,n){if(!(n.state.loading&4)){var s=Sc.get(t);if(s)var l=s.get(null);else{s=new Map,Sc.set(t,s);for(var f=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<f.length;d++){var x=f[d];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(s.set(x.dataset.precedence,x),l=x)}l&&s.set(null,l)}f=n.instance,x=f.getAttribute("data-precedence"),d=s.get(x)||l,d===l&&s.set(null,f),s.set(x,f),this.count++,l=vc.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),d?d.parentNode.insertBefore(f,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(f,t.firstChild)),n.state.loading|=4}}var Yo={$$typeof:F,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function EM(t,n,s,l,f,d,x,R,V){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Xe(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xe(0),this.hiddenUpdates=Xe(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=d,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=V,this.incompleteTransitions=new Map}function qg(t,n,s,l,f,d,x,R,V,ae,_e,Me){return t=new EM(t,n,s,x,V,ae,_e,Me,R),n=1,d===!0&&(n|=24),d=ui(3,null,null,n),t.current=d,d.stateNode=t,n=Yu(),n.refCount++,t.pooledCache=n,n.refCount++,d.memoizedState={element:l,isDehydrated:s,cache:n},Qu(d),t}function Yg(t){return t?(t=lr,t):lr}function Zg(t,n,s,l,f,d){f=Yg(f),l.context===null?l.context=f:l.pendingContext=f,l=ja(n),l.payload={element:s},d=d===void 0?null:d,d!==null&&(l.callback=d),s=Ka(t,l,n),s!==null&&(ai(s,t,n),To(s,t,n))}function jg(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<n?s:n}}function gd(t,n){jg(t,n),(t=t.alternate)&&jg(t,n)}function Kg(t){if(t.tag===13||t.tag===31){var n=Cs(t,67108864);n!==null&&ai(n,t,67108864),gd(t,67108864)}}function Qg(t){if(t.tag===13||t.tag===31){var n=mi();n=Fa(n);var s=Cs(t,n);s!==null&&ai(s,t,n),gd(t,n)}}var Mc=!0;function bM(t,n,s,l){var f=B.T;B.T=null;var d=G.p;try{G.p=2,_d(t,n,s,l)}finally{G.p=d,B.T=f}}function TM(t,n,s,l){var f=B.T;B.T=null;var d=G.p;try{G.p=8,_d(t,n,s,l)}finally{G.p=d,B.T=f}}function _d(t,n,s,l){if(Mc){var f=vd(l);if(f===null)id(t,n,l,yc,s),$g(t,l);else if(RM(f,t,n,s,l))l.stopPropagation();else if($g(t,l),n&4&&-1<AM.indexOf(t)){for(;f!==null;){var d=la(f);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var x=Re(d.pendingLanes);if(x!==0){var R=d;for(R.pendingLanes|=2,R.entangledLanes|=2;x;){var V=1<<31-Be(x);R.entanglements[1]|=V,x&=~V}Ki(d),(zt&6)===0&&(ac=Mt()+500,Go(0))}}break;case 31:case 13:R=Cs(d,2),R!==null&&ai(R,d,2),rc(),gd(d,2)}if(d=vd(l),d===null&&id(t,n,l,yc,s),d===f)break;f=d}f!==null&&l.stopPropagation()}else id(t,n,l,null,s)}}function vd(t){return t=Su(t),Sd(t)}var yc=null;function Sd(t){if(yc=null,t=oa(t),t!==null){var n=c(t);if(n===null)t=null;else{var s=n.tag;if(s===13){if(t=u(n),t!==null)return t;t=null}else if(s===31){if(t=h(n),t!==null)return t;t=null}else if(s===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return yc=t,null}function Jg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(St()){case L:return 2;case b:return 8;case $:case te:return 32;case he:return 268435456;default:return 32}default:return 32}}var xd=!1,os=null,ls=null,cs=null,Zo=new Map,jo=new Map,us=[],AM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function $g(t,n){switch(t){case"focusin":case"focusout":os=null;break;case"dragenter":case"dragleave":ls=null;break;case"mouseover":case"mouseout":cs=null;break;case"pointerover":case"pointerout":Zo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":jo.delete(n.pointerId)}}function Ko(t,n,s,l,f,d){return t===null||t.nativeEvent!==d?(t={blockedOn:n,domEventName:s,eventSystemFlags:l,nativeEvent:d,targetContainers:[f]},n!==null&&(n=la(n),n!==null&&Kg(n)),t):(t.eventSystemFlags|=l,n=t.targetContainers,f!==null&&n.indexOf(f)===-1&&n.push(f),t)}function RM(t,n,s,l,f){switch(n){case"focusin":return os=Ko(os,t,n,s,l,f),!0;case"dragenter":return ls=Ko(ls,t,n,s,l,f),!0;case"mouseover":return cs=Ko(cs,t,n,s,l,f),!0;case"pointerover":var d=f.pointerId;return Zo.set(d,Ko(Zo.get(d)||null,t,n,s,l,f)),!0;case"gotpointercapture":return d=f.pointerId,jo.set(d,Ko(jo.get(d)||null,t,n,s,l,f)),!0}return!1}function e_(t){var n=oa(t.target);if(n!==null){var s=c(n);if(s!==null){if(n=s.tag,n===13){if(n=u(s),n!==null){t.blockedOn=n,ri(t.priority,function(){Qg(s)});return}}else if(n===31){if(n=h(s),n!==null){t.blockedOn=n,ri(t.priority,function(){Qg(s)});return}}else if(n===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ec(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var s=vd(t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);vu=l,s.target.dispatchEvent(l),vu=null}else return n=la(s),n!==null&&Kg(n),t.blockedOn=s,!1;n.shift()}return!0}function t_(t,n,s){Ec(t)&&s.delete(n)}function CM(){xd=!1,os!==null&&Ec(os)&&(os=null),ls!==null&&Ec(ls)&&(ls=null),cs!==null&&Ec(cs)&&(cs=null),Zo.forEach(t_),jo.forEach(t_)}function bc(t,n){t.blockedOn===n&&(t.blockedOn=null,xd||(xd=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,CM)))}var Tc=null;function n_(t){Tc!==t&&(Tc=t,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Tc===t&&(Tc=null);for(var n=0;n<t.length;n+=3){var s=t[n],l=t[n+1],f=t[n+2];if(typeof l!="function"){if(Sd(l||s)===null)continue;break}var d=la(s);d!==null&&(t.splice(n,3),n-=3,vf(d,{pending:!0,data:f,method:s.method,action:l},l,f))}}))}function Lr(t){function n(V){return bc(V,t)}os!==null&&bc(os,t),ls!==null&&bc(ls,t),cs!==null&&bc(cs,t),Zo.forEach(n),jo.forEach(n);for(var s=0;s<us.length;s++){var l=us[s];l.blockedOn===t&&(l.blockedOn=null)}for(;0<us.length&&(s=us[0],s.blockedOn===null);)e_(s),s.blockedOn===null&&us.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var f=s[l],d=s[l+1],x=f[tn]||null;if(typeof d=="function")x||n_(s);else if(x){var R=null;if(d&&d.hasAttribute("formAction")){if(f=d,x=d[tn]||null)R=x.formAction;else if(Sd(f)!==null)continue}else R=x.action;typeof R=="function"?s[l+1]=R:(s.splice(l,3),l-=3),n_(s)}}}function i_(){function t(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(x){return f=x})},focusReset:"manual",scroll:"manual"})}function n(){f!==null&&(f(),f=null),l||setTimeout(s,20)}function s(){if(!l&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,f=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(s,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),f!==null&&(f(),f=null)}}}function Md(t){this._internalRoot=t}Ac.prototype.render=Md.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var s=n.current,l=mi();Zg(s,l,t,n,null,null)},Ac.prototype.unmount=Md.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Zg(t.current,2,null,t,null,null),rc(),n[Dn]=null}};function Ac(t){this._internalRoot=t}Ac.prototype.unstable_scheduleHydration=function(t){if(t){var n=Tn();t={blockedOn:null,target:t,priority:n};for(var s=0;s<us.length&&n!==0&&n<us[s].priority;s++);us.splice(s,0,t),s===0&&e_(t)}};var a_=e.version;if(a_!=="19.2.7")throw Error(r(527,a_,"19.2.7"));G.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(n),t=t!==null?_(t):null,t=t===null?null:t.stateNode,t};var wM={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Rc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Rc.isDisabled&&Rc.supportsFiber)try{pe=Rc.inject(wM),me=Rc}catch{}}return Jo.createRoot=function(t,n){if(!o(t))throw Error(r(299));var s=!1,l="",f=f0,d=d0,x=h0;return n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(f=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=qg(t,1,!1,null,null,s,l,null,f,d,x,i_),t[Dn]=n.current,nd(t),new Md(n)},Jo.hydrateRoot=function(t,n,s){if(!o(t))throw Error(r(299));var l=!1,f="",d=f0,x=d0,R=h0,V=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onUncaughtError!==void 0&&(d=s.onUncaughtError),s.onCaughtError!==void 0&&(x=s.onCaughtError),s.onRecoverableError!==void 0&&(R=s.onRecoverableError),s.formState!==void 0&&(V=s.formState)),n=qg(t,1,!0,n,s??null,l,f,V,d,x,R,i_),n.context=Yg(null),s=n.current,l=mi(),l=Fa(l),f=ja(l),f.callback=null,Ka(s,f,l),s=l,n.current.lanes=s,He(n,s),Ki(n),t[Dn]=n.current,nd(t),new Ac(n)},Jo.version="19.2.7",Jo}var p_;function BM(){if(p_)return bd.exports;p_=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),bd.exports=FM(),bd.exports}var zM=BM();const HM={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_APP_URL:"",VITE_DISCORD_URL:"",VITE_DOCS_URL:"",VITE_MANIFESTO_URL:"",VITE_TUTORIAL_VIDEO_URL:"",VITE_X_URL:""},Ur=(a,e="#")=>{var i;return((i=HM[a])==null?void 0:i.trim())||e},En={app:Ur("VITE_APP_URL"),docs:Ur("VITE_DOCS_URL"),manifesto:Ur("VITE_MANIFESTO_URL"),discord:Ur("VITE_DISCORD_URL"),x:Ur("VITE_X_URL"),tutorialVideo:Ur("VITE_TUTORIAL_VIDEO_URL",""),explore:"#explore",exploreAgents:"#explore-agents",exploreVaults:"#explore-vaults"},Qc=[{id:"demo",label:"Demo",href:"#demo"},{id:"personas",label:"Personas",href:"#personas"},{id:"how",label:"How it works",href:"#how"},{id:"explore",label:"Explore",href:"#explore"}],Cd={text:"> The agent-native L1 DEX, for faster and safer trades.",href:En.manifesto},Gs={eyebrow:{label:"A manifesto for verifiable agents",href:En.manifesto},headline:["Agents you can trust.","Assets you can trade."],primaryCta:{label:"Launch Morpheum",href:En.app},secondaryCta:{label:"Explore agents",href:En.explore}},wd={risks:[{risk:"Speculation without underwriting",failure:"Buy random agent tokens on narrative alone.",solveLabel:"Proof",solve:"Underwrite on receipts, reputation, and risk scores — before you commit a dollar."},{risk:"Automation without capital controls",failure:"Run an agent with unbounded capital and no kill switch.",solveLabel:"Controls",solve:"Set Risk Level, approve gated moves, and isolate each strategy in its own bucket."}],close:"Capital funds proof."},m_=[{label:"MAEX indices",status:"LIVE",live:!0},{label:"Agents",status:"REPUTATION / SHARPE / ROI"},{label:"Risk level",status:"MANUAL / HITL / HANDS-OFF"},{label:"Agent notifications",status:"WANT-TO / ACTION / PAUSED / REJECTED"},{label:"Copy buckets",status:"LIVE",live:!0},{label:"Buckets",status:"RISK-ISOLATED"},{label:"Vaults",status:"ONCHAIN"},{label:"Staking",status:"LIVE",live:!0}],mh={kicker:"Product tour",videoCaption:"See an agent discovered, copied, supervised, and isolated in ~60s.",verbs:[{verb:"Discover",description:"Reputation before you commit."},{verb:"Copy",description:"Mirror a proven agent into your bucket."},{verb:"Supervise",description:"Approve gated moves on HITL."},{verb:"Isolate",description:"Risk contained in its own bucket."}]},Dd={kicker:"Choose your path",title:"Become part of the agent economy",items:[{title:"Become an Operator",weight:"major",steps:["Mint an agent and set its mandate.","Choose a Risk Level: Manual · HITL · Hands-off.","Build a proven track record investors can underwrite."],cta:{label:"Run an agent",href:En.exploreAgents}},{title:"Become a Copy Trader",weight:"major",steps:["Screen agents on real proof — receipts and risk scores.","Mirror the best into your own dedicated bucket.","Track PnL and rebalance anytime."],cta:{label:"Start copying",href:En.exploreAgents}},{title:"Provide Capital",weight:"light",steps:["Deposit into a vault or bucket.","Stake to earn.","Withdraw on your terms."],cta:{label:"Explore vaults",href:En.exploreVaults}}]},ds={kicker:"How it works",title:"Discover → Copy → Supervise → Isolate",outcome:"A proven, risk-isolated capital position — not a bet on a black box.",chips:[{label:"Risk level",value:"Manual · HITL · Hands-off"},{label:"Notifications",value:"Want-to · Action · Paused · Rejected"},{label:"Capital",value:"Bucket / Vault"}],steps:[{n:1,title:"Discover",feature:"Agents & Indices + proof",body:"Browse the MAEX roster and index catalog and read the proof before you commit a dollar.",example:"Open SharpeShark and see its receipts, reputation, risk score, and Sharpe / ROI side by side."},{n:2,title:"Copy",feature:"Copy Trade",body:"Mirror a proven performer into your own bucket in one click, sized to your capital, with spread / funding cost shown before you confirm.",example:"One click clones SharpeShark's strategy into a fresh bucket bound to your wallet."},{n:3,title:"Supervise",feature:"Risk Level + Agent Notifications",body:"Set how much the agent may act on its own — Manual · HITL · Hands-off — and stay in the loop through Agent Notifications: Want to · Action · Paused · Rejected.",example:'On HITL, a "Want to open ETH long" notification waits for your inline Approve / Reject, and Explain shows why the agent wants the trade.'},{n:4,title:"Isolate",feature:"Buckets",body:"Every mirror lands in its own dedicated cross-margin bucket bound to a wallet executor agent, so risk is contained per strategy.",example:"SharpeShark runs in its own bucket with its own margin and exposure — if it draws down, only that bucket's capital is at risk; your other buckets and spot balance are untouched."}]},Or={kicker:"Explore",title:"Agents. Indices. Buckets. Vaults.",cards:[{title:"Agents",verbs:["Browse","Compare","Copy"],agents:[{name:"SharpeShark",sharpe:"2.41",roi:"+38.2%",risk:"72",positive:!0},{name:"SortinoSloth",sharpe:"1.86",roi:"+21.4%",risk:"58",positive:!0},{name:"FundingFox",sharpe:"1.12",roi:"-4.1%",risk:"41",positive:!1}]},{title:"Indices",verbs:["Track","Weight","Hold"],blurb:"Curated agent baskets for one-click exposure to proven strategies.",sample:[{label:"MAEX Core",value:"+12.8%",positive:!0},{label:"Risk-Off Bucket",value:"+4.2%",positive:!0}]},{title:"Buckets",verbs:["Isolate","Trade","Contain"],blurb:"Risk-isolated positions — each strategy in its own margin shell.",sample:[{label:"Bucket A",value:"ISOLATED",positive:!1},{label:"Bucket B",value:"ISOLATED",positive:!1}]},{title:"Vaults",verbs:["Deposit","Earn","Withdraw"],blurb:"Pooled onchain capital — graded vaults with live APR and TVL.",sample:[{label:"MLP (House Liq.)",value:"A · 18.4%",meta:"$9.8M TVL"},{label:"Basis Capture",value:"A · 14.2%",meta:"$2.1M TVL"}]}]},Cc={line:"Back agents you can prove. Own the upside.",primaryCta:{label:"Launch app",href:En.app},social:[{label:"Join Discord",href:En.discord},{label:"Join X",href:En.x}]},GM={legal:"© 2026 Morpheum. Capital funds proof."};function to({variant:a="primary",children:e,className:i="",...r}){const o=`cta cta--${a} terminal-interactive ${i}`.trim();if("href"in r&&r.href!==void 0){const{href:c,...u}=r;return H.jsx("a",{className:o,href:c,...u,children:e})}return H.jsx("button",{className:o,type:"button",...r,children:e})}function VM(){return H.jsx("section",{id:"join",className:"section community",children:H.jsxs("div",{className:"container community__inner",children:[H.jsx("h2",{className:"community__line",children:Cc.line}),H.jsxs("div",{className:"community__ctas",children:[H.jsx(to,{href:Cc.primaryCta.href,variant:"primary",children:Cc.primaryCta.label}),Cc.social.map(a=>H.jsx(to,{href:a.href,variant:"ghost",children:a.label},a.label))]})]})})}function kM(){const[a,e]=nt.useState(!1),i=!!En.tutorialVideo;return H.jsx("section",{id:"demo",className:"section demo",children:H.jsxs("div",{className:"container",children:[H.jsx("p",{className:"section-kicker",children:mh.kicker}),H.jsxs("div",{className:"demo__video",children:[a&&i?H.jsx("video",{className:"demo__player",src:En.tutorialVideo,controls:!0,autoPlay:!0,playsInline:!0}):H.jsxs("button",{type:"button",className:"demo__poster",onClick:()=>i&&e(!0),"aria-label":i?"Play tutorial video":"Tutorial video coming soon",children:[H.jsx("span",{className:"demo__play","aria-hidden":!0,children:"▶"}),H.jsx("span",{className:"demo__poster-label",children:"Tutorial"})]}),H.jsx("p",{className:"demo__caption",children:mh.videoCaption})]})]})})}const XM={receipt:"Receipt",riskScore:"Risk",credential:"Credential",verified:"Verified"};function Nd({type:a,value:e}){return H.jsxs("span",{className:`proof-chip proof-chip--${a}`,children:[H.jsx("span",{className:"proof-chip__dot","aria-hidden":!0}),H.jsx("span",{className:"proof-chip__label",children:XM[a]}),e?H.jsx("span",{className:"proof-chip__value",children:e}):null]})}function WM(){const a=Or.cards[0],e=Or.cards[1],i=Or.cards[2],r=Or.cards[3];return H.jsx("section",{id:"explore",className:"section explore",children:H.jsxs("div",{className:"container",children:[H.jsx("p",{className:"section-kicker",children:Or.kicker}),H.jsx("h2",{className:"section-title explore__title",children:Or.title}),H.jsxs("div",{className:"explore__grid",children:[H.jsxs("article",{id:"explore-agents",className:"explore-card explore-card--major",children:[H.jsxs("header",{className:"explore-card__header",children:[H.jsx("h3",{className:"explore-card__title",children:a.title}),H.jsx("p",{className:"explore-card__verbs",children:a.verbs.join(" · ").toUpperCase()})]}),H.jsx("ul",{className:"explore-roster",children:a.agents.map(o=>H.jsxs("li",{className:"explore-roster__row",children:[H.jsxs("div",{className:"explore-roster__top",children:[H.jsx("span",{className:"explore-roster__name",children:o.name}),H.jsx("span",{className:`terminal-value ${o.positive?"terminal-long":"terminal-short"}`,children:o.roi})]}),H.jsxs("div",{className:"explore-roster__proof",children:[H.jsx(Nd,{type:"verified"}),H.jsx(Nd,{type:"riskScore",value:o.risk}),H.jsx(Nd,{type:"receipt"}),H.jsxs("span",{className:"terminal-value explore-roster__sharpe",children:["Sharpe ",o.sharpe]})]})]},o.name))})]}),H.jsxs("article",{className:"explore-card explore-card--major",children:[H.jsxs("header",{className:"explore-card__header",children:[H.jsx("h3",{className:"explore-card__title",children:e.title}),H.jsx("p",{className:"explore-card__verbs",children:e.verbs.join(" · ").toUpperCase()})]}),H.jsx("p",{className:"explore-card__blurb",children:e.blurb}),H.jsx("ul",{className:"explore-sample",children:e.sample.map(o=>H.jsxs("li",{children:[H.jsx("span",{className:"terminal-label",children:o.label}),H.jsx("span",{className:`terminal-value ${o.positive?"terminal-long":""}`,children:o.value})]},o.label))})]}),H.jsxs("article",{id:"explore-buckets",className:"explore-card explore-card--major",children:[H.jsxs("header",{className:"explore-card__header",children:[H.jsx("h3",{className:"explore-card__title",children:i.title}),H.jsx("p",{className:"explore-card__verbs",children:i.verbs.join(" · ").toUpperCase()})]}),H.jsx("p",{className:"explore-card__blurb",children:i.blurb}),H.jsx("ul",{className:"explore-sample",children:i.sample.map(o=>H.jsxs("li",{children:[H.jsx("span",{className:"terminal-label",children:o.label}),H.jsx("span",{className:"terminal-value explore-sample__status",children:o.value})]},o.label))})]}),H.jsxs("article",{id:"explore-vaults",className:"explore-card explore-card--major",children:[H.jsxs("header",{className:"explore-card__header",children:[H.jsx("h3",{className:"explore-card__title",children:r.title}),H.jsx("p",{className:"explore-card__verbs",children:r.verbs.join(" · ").toUpperCase()})]}),H.jsx("p",{className:"explore-card__blurb",children:r.blurb}),H.jsx("ul",{className:"explore-sample",children:r.sample.map(o=>H.jsxs("li",{children:[H.jsx("span",{className:"terminal-label",children:o.label}),H.jsxs("span",{className:"explore-sample__metrics",children:[H.jsx("span",{className:"terminal-value terminal-long",children:o.value}),H.jsx("span",{className:"terminal-value explore-sample__meta",children:o.meta})]})]},o.label))})]})]})]})})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const lp="185",qM=0,g_=1,YM=2,Jc=1,ZM=2,sl=3,Oa=0,si=1,ea=2,La=0,Jr=1,gh=2,__=3,v_=4,jM=5,Zs=100,KM=101,QM=102,JM=103,$M=104,ey=200,ty=201,ny=202,iy=203,_h=204,vh=205,ay=206,sy=207,ry=208,oy=209,ly=210,cy=211,uy=212,fy=213,dy=214,Sh=0,xh=1,Mh=2,no=3,yh=4,Eh=5,bh=6,Th=7,Dv=0,hy=1,py=2,ia=0,Nv=1,Lv=2,Uv=3,Ov=4,Pv=5,Iv=6,Fv=7,Bv=300,Js=301,io=302,Ld=303,Ud=304,du=306,Ah=1e3,Vi=1001,Rh=1002,Bn=1003,my=1004,wc=1005,bn=1006,Od=1007,xs=1008,wi=1009,zv=1010,Hv=1011,hl=1012,cp=1013,ra=1014,ta=1015,Pa=1016,up=1017,fp=1018,pl=1020,Gv=35902,Vv=35899,kv=1021,Xv=1022,ki=1023,Ia=1026,Ks=1027,Wv=1028,dp=1029,$s=1030,hp=1031,pp=1033,$c=33776,eu=33777,tu=33778,nu=33779,Ch=35840,wh=35841,Dh=35842,Nh=35843,Lh=36196,Uh=37492,Oh=37496,Ph=37488,Ih=37489,au=37490,Fh=37491,Bh=37808,zh=37809,Hh=37810,Gh=37811,Vh=37812,kh=37813,Xh=37814,Wh=37815,qh=37816,Yh=37817,Zh=37818,jh=37819,Kh=37820,Qh=37821,Jh=36492,$h=36494,ep=36495,tp=36283,np=36284,su=36285,ip=36286,gy=3200,S_=0,_y=1,Ss="",Kn="srgb",ru="srgb-linear",ou="linear",Yt="srgb",Pr=7680,x_=519,vy=512,Sy=513,xy=514,mp=515,My=516,yy=517,gp=518,Ey=519,M_=35044,y_="300 es",na=2e3,lu=2001;function by(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function cu(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function Ty(){const a=cu("canvas");return a.style.display="block",a}const E_={};function b_(...a){const e="THREE."+a.shift();console.log(e,...a)}function qv(a){const e=a[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=a[1];i&&i.isStackTrace?a[0]+=" "+i.getLocation():a[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return a}function rt(...a){a=qv(a);const e="THREE."+a.shift();{const i=a[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...a)}}function Ut(...a){a=qv(a);const e="THREE."+a.shift();{const i=a[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...a)}}function $r(...a){const e=a.join(" ");e in E_||(E_[e]=!0,rt(...a))}function Ay(a,e,i){return new Promise(function(r,o){function c(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:o();break;case a.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}const Ry={[Sh]:xh,[Mh]:bh,[yh]:Th,[no]:Eh,[xh]:Sh,[bh]:Mh,[Th]:yh,[Eh]:no};class tr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const c=o.indexOf(i);c!==-1&&o.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,e);e.target=null}}}const Vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let T_=1234567;const cl=Math.PI/180,ml=180/Math.PI;function ro(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Vn[a&255]+Vn[a>>8&255]+Vn[a>>16&255]+Vn[a>>24&255]+"-"+Vn[e&255]+Vn[e>>8&255]+"-"+Vn[e>>16&15|64]+Vn[e>>24&255]+"-"+Vn[i&63|128]+Vn[i>>8&255]+"-"+Vn[i>>16&255]+Vn[i>>24&255]+Vn[r&255]+Vn[r>>8&255]+Vn[r>>16&255]+Vn[r>>24&255]).toLowerCase()}function xt(a,e,i){return Math.max(e,Math.min(i,a))}function _p(a,e){return(a%e+e)%e}function Cy(a,e,i,r,o){return r+(a-e)*(o-r)/(i-e)}function wy(a,e,i){return a!==e?(i-a)/(e-a):0}function ul(a,e,i){return(1-i)*a+i*e}function Dy(a,e,i,r){return ul(a,e,1-Math.exp(-i*r))}function Ny(a,e=1){return e-Math.abs(_p(a,e*2)-e)}function Ly(a,e,i){return a<=e?0:a>=i?1:(a=(a-e)/(i-e),a*a*(3-2*a))}function Uy(a,e,i){return a<=e?0:a>=i?1:(a=(a-e)/(i-e),a*a*a*(a*(a*6-15)+10))}function Oy(a,e){return a+Math.floor(Math.random()*(e-a+1))}function Py(a,e){return a+Math.random()*(e-a)}function Iy(a){return a*(.5-Math.random())}function Fy(a){a!==void 0&&(T_=a);let e=T_+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function By(a){return a*cl}function zy(a){return a*ml}function Hy(a){return(a&a-1)===0&&a!==0}function Gy(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function Vy(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function ky(a,e,i,r,o){const c=Math.cos,u=Math.sin,h=c(i/2),m=u(i/2),p=c((e+r)/2),_=u((e+r)/2),v=c((e-r)/2),g=u((e-r)/2),S=c((r-e)/2),E=u((r-e)/2);switch(o){case"XYX":a.set(h*_,m*v,m*g,h*p);break;case"YZY":a.set(m*g,h*_,m*v,h*p);break;case"ZXZ":a.set(m*v,m*g,h*_,h*p);break;case"XZX":a.set(h*_,m*E,m*S,h*p);break;case"YXY":a.set(m*S,h*_,m*E,h*p);break;case"ZYZ":a.set(m*E,m*S,h*_,h*p);break;default:rt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function jr(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Yn(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Un={DEG2RAD:cl,RAD2DEG:ml,generateUUID:ro,clamp:xt,euclideanModulo:_p,mapLinear:Cy,inverseLerp:wy,lerp:ul,damp:Dy,pingpong:Ny,smoothstep:Ly,smootherstep:Uy,randInt:Oy,randFloat:Py,randFloatSpread:Iy,seededRandom:Fy,degToRad:By,radToDeg:zy,isPowerOfTwo:Hy,ceilPowerOfTwo:Gy,floorPowerOfTwo:Vy,setQuaternionFromProperEuler:ky,normalize:Yn,denormalize:jr},yp=class yp{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,o=e.elements;return this.x=o[0]*i+o[3]*r+o[6],this.y=o[1]*i+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=xt(this.x,e.x,i.x),this.y=xt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=xt(this.x,e,i),this.y=xt(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(xt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),o=Math.sin(i),c=this.x-e.x,u=this.y-e.y;return this.x=c*r-u*o+e.x,this.y=c*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};yp.prototype.isVector2=!0;let Bt=yp;class oo{constructor(e=0,i=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=o}static slerpFlat(e,i,r,o,c,u,h){let m=r[o+0],p=r[o+1],_=r[o+2],v=r[o+3],g=c[u+0],S=c[u+1],E=c[u+2],C=c[u+3];if(v!==C||m!==g||p!==S||_!==E){let M=m*g+p*S+_*E+v*C;M<0&&(g=-g,S=-S,E=-E,C=-C,M=-M);let y=1-h;if(M<.9995){const O=Math.acos(M),F=Math.sin(O);y=Math.sin(y*O)/F,h=Math.sin(h*O)/F,m=m*y+g*h,p=p*y+S*h,_=_*y+E*h,v=v*y+C*h}else{m=m*y+g*h,p=p*y+S*h,_=_*y+E*h,v=v*y+C*h;const O=1/Math.sqrt(m*m+p*p+_*_+v*v);m*=O,p*=O,_*=O,v*=O}}e[i]=m,e[i+1]=p,e[i+2]=_,e[i+3]=v}static multiplyQuaternionsFlat(e,i,r,o,c,u){const h=r[o],m=r[o+1],p=r[o+2],_=r[o+3],v=c[u],g=c[u+1],S=c[u+2],E=c[u+3];return e[i]=h*E+_*v+m*S-p*g,e[i+1]=m*E+_*g+p*v-h*S,e[i+2]=p*E+_*S+h*g-m*v,e[i+3]=_*E-h*v-m*g-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,o){return this._x=e,this._y=i,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,o=e._y,c=e._z,u=e._order,h=Math.cos,m=Math.sin,p=h(r/2),_=h(o/2),v=h(c/2),g=m(r/2),S=m(o/2),E=m(c/2);switch(u){case"XYZ":this._x=g*_*v+p*S*E,this._y=p*S*v-g*_*E,this._z=p*_*E+g*S*v,this._w=p*_*v-g*S*E;break;case"YXZ":this._x=g*_*v+p*S*E,this._y=p*S*v-g*_*E,this._z=p*_*E-g*S*v,this._w=p*_*v+g*S*E;break;case"ZXY":this._x=g*_*v-p*S*E,this._y=p*S*v+g*_*E,this._z=p*_*E+g*S*v,this._w=p*_*v-g*S*E;break;case"ZYX":this._x=g*_*v-p*S*E,this._y=p*S*v+g*_*E,this._z=p*_*E-g*S*v,this._w=p*_*v+g*S*E;break;case"YZX":this._x=g*_*v+p*S*E,this._y=p*S*v+g*_*E,this._z=p*_*E-g*S*v,this._w=p*_*v-g*S*E;break;case"XZY":this._x=g*_*v-p*S*E,this._y=p*S*v-g*_*E,this._z=p*_*E+g*S*v,this._w=p*_*v+g*S*E;break;default:rt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],o=i[4],c=i[8],u=i[1],h=i[5],m=i[9],p=i[2],_=i[6],v=i[10],g=r+h+v;if(g>0){const S=.5/Math.sqrt(g+1);this._w=.25/S,this._x=(_-m)*S,this._y=(c-p)*S,this._z=(u-o)*S}else if(r>h&&r>v){const S=2*Math.sqrt(1+r-h-v);this._w=(_-m)/S,this._x=.25*S,this._y=(o+u)/S,this._z=(c+p)/S}else if(h>v){const S=2*Math.sqrt(1+h-r-v);this._w=(c-p)/S,this._x=(o+u)/S,this._y=.25*S,this._z=(m+_)/S}else{const S=2*Math.sqrt(1+v-r-h);this._w=(u-o)/S,this._x=(c+p)/S,this._y=(m+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xt(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,i/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,o=e._y,c=e._z,u=e._w,h=i._x,m=i._y,p=i._z,_=i._w;return this._x=r*_+u*h+o*p-c*m,this._y=o*_+u*m+c*h-r*p,this._z=c*_+u*p+r*m-o*h,this._w=u*_-r*h-o*m-c*p,this._onChangeCallback(),this}slerp(e,i){let r=e._x,o=e._y,c=e._z,u=e._w,h=this.dot(e);h<0&&(r=-r,o=-o,c=-c,u=-u,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),_=Math.sin(p);m=Math.sin(m*p)/_,i=Math.sin(i*p)/_,this._x=this._x*m+r*i,this._y=this._y*m+o*i,this._z=this._z*m+c*i,this._w=this._w*m+u*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+o*i,this._z=this._z*m+c*i,this._w=this._w*m+u*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Ep=class Ep{constructor(e=0,i=0,r=0){this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(A_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(A_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*o,this.y=c[1]*i+c[4]*r+c[7]*o,this.z=c[2]*i+c[5]*r+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,o=this.z,c=e.elements,u=1/(c[3]*i+c[7]*r+c[11]*o+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*o+c[12])*u,this.y=(c[1]*i+c[5]*r+c[9]*o+c[13])*u,this.z=(c[2]*i+c[6]*r+c[10]*o+c[14])*u,this}applyQuaternion(e){const i=this.x,r=this.y,o=this.z,c=e.x,u=e.y,h=e.z,m=e.w,p=2*(u*o-h*r),_=2*(h*i-c*o),v=2*(c*r-u*i);return this.x=i+m*p+u*v-h*_,this.y=r+m*_+h*p-c*v,this.z=o+m*v+c*_-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*o,this.y=c[1]*i+c[5]*r+c[9]*o,this.z=c[2]*i+c[6]*r+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=xt(this.x,e.x,i.x),this.y=xt(this.y,e.y,i.y),this.z=xt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=xt(this.x,e,i),this.y=xt(this.y,e,i),this.z=xt(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,o=e.y,c=e.z,u=i.x,h=i.y,m=i.z;return this.x=o*m-c*h,this.y=c*u-r*m,this.z=r*h-o*u,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Pd.copy(this).projectOnVector(e),this.sub(Pd)}reflect(e){return this.sub(Pd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(xt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return i*i+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const o=Math.sin(i)*e;return this.x=o*Math.sin(r),this.y=Math.cos(i)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=o,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ep.prototype.isVector3=!0;let ee=Ep;const Pd=new ee,A_=new oo,bp=class bp{constructor(e,i,r,o,c,u,h,m,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,o,c,u,h,m,p)}set(e,i,r,o,c,u,h,m,p){const _=this.elements;return _[0]=e,_[1]=o,_[2]=h,_[3]=i,_[4]=c,_[5]=m,_[6]=r,_[7]=u,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,o=i.elements,c=this.elements,u=r[0],h=r[3],m=r[6],p=r[1],_=r[4],v=r[7],g=r[2],S=r[5],E=r[8],C=o[0],M=o[3],y=o[6],O=o[1],F=o[4],w=o[7],P=o[2],D=o[5],I=o[8];return c[0]=u*C+h*O+m*P,c[3]=u*M+h*F+m*D,c[6]=u*y+h*w+m*I,c[1]=p*C+_*O+v*P,c[4]=p*M+_*F+v*D,c[7]=p*y+_*w+v*I,c[2]=g*C+S*O+E*P,c[5]=g*M+S*F+E*D,c[8]=g*y+S*w+E*I,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],o=e[2],c=e[3],u=e[4],h=e[5],m=e[6],p=e[7],_=e[8];return i*u*_-i*h*p-r*c*_+r*h*m+o*c*p-o*u*m}invert(){const e=this.elements,i=e[0],r=e[1],o=e[2],c=e[3],u=e[4],h=e[5],m=e[6],p=e[7],_=e[8],v=_*u-h*p,g=h*m-_*c,S=p*c-u*m,E=i*v+r*g+o*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/E;return e[0]=v*C,e[1]=(o*p-_*r)*C,e[2]=(h*r-o*u)*C,e[3]=g*C,e[4]=(_*i-o*m)*C,e[5]=(o*c-h*i)*C,e[6]=S*C,e[7]=(r*m-p*i)*C,e[8]=(u*i-r*c)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,o,c,u,h){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*u+p*h)+u+e,-o*p,o*m,-o*(-p*u+m*h)+h+i,0,0,1),this}scale(e,i){return $r("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Id.makeScale(e,i)),this}rotate(e){return $r("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Id.makeRotation(-e)),this}translate(e,i){return $r("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Id.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let o=0;o<9;o++)if(i[o]!==r[o])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};bp.prototype.isMatrix3=!0;let ct=bp;const Id=new ct,R_=new ct().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),C_=new ct().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Xy(){const a={enabled:!0,workingColorSpace:ru,spaces:{},convert:function(o,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===Yt&&(o.r=Ua(o.r),o.g=Ua(o.g),o.b=Ua(o.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Yt&&(o.r=eo(o.r),o.g=eo(o.g),o.b=eo(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Ss?ou:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,u){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return $r("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return $r("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(o,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return a.define({[ru]:{primaries:e,whitePoint:r,transfer:ou,toXYZ:R_,fromXYZ:C_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Kn},outputColorSpaceConfig:{drawingBufferColorSpace:Kn}},[Kn]:{primaries:e,whitePoint:r,transfer:Yt,toXYZ:R_,fromXYZ:C_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Kn}}}),a}const Ct=Xy();function Ua(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function eo(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let Ir;class Wy{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Ir===void 0&&(Ir=cu("canvas")),Ir.width=e.width,Ir.height=e.height;const o=Ir.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Ir}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=cu("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=Ua(c[u]/255)*255;return r.putImageData(o,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(Ua(i[r]/255)*255):i[r]=Ua(i[r]);return{data:i,width:e.width,height:e.height}}else return rt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let qy=0;class vp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qy++}),this.uuid=ro(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,h=o.length;u<h;u++)o[u].isDataTexture?c.push(Fd(o[u].image)):c.push(Fd(o[u]))}else c=Fd(o);r.url=c}return i||(e.images[this.uuid]=r),r}}function Fd(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?Wy.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(rt("Texture: Unable to serialize Texture."),{})}let Yy=0;const Bd=new ee;class Xn extends tr{constructor(e=Xn.DEFAULT_IMAGE,i=Xn.DEFAULT_MAPPING,r=Vi,o=Vi,c=bn,u=xs,h=ki,m=wi,p=Xn.DEFAULT_ANISOTROPY,_=Ss){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yy++}),this.uuid=ro(),this.name="",this.source=new vp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Bt(0,0),this.repeat=new Bt(1,1),this.center=new Bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Bd).x}get height(){return this.source.getSize(Bd).y}get depth(){return this.source.getSize(Bd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){rt(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const o=this[i];if(o===void 0){rt(`Texture.setValues(): property '${i}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Bv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ah:e.x=e.x-Math.floor(e.x);break;case Vi:e.x=e.x<0?0:1;break;case Rh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ah:e.y=e.y-Math.floor(e.y);break;case Vi:e.y=e.y<0?0:1;break;case Rh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Xn.DEFAULT_IMAGE=null;Xn.DEFAULT_MAPPING=Bv;Xn.DEFAULT_ANISOTROPY=1;const Tp=class Tp{constructor(e=0,i=0,r=0,o=1){this.x=e,this.y=i,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,o){return this.x=e,this.y=i,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,o=this.z,c=this.w,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*o+u[12]*c,this.y=u[1]*i+u[5]*r+u[9]*o+u[13]*c,this.z=u[2]*i+u[6]*r+u[10]*o+u[14]*c,this.w=u[3]*i+u[7]*r+u[11]*o+u[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,o,c;const m=e.elements,p=m[0],_=m[4],v=m[8],g=m[1],S=m[5],E=m[9],C=m[2],M=m[6],y=m[10];if(Math.abs(_-g)<.01&&Math.abs(v-C)<.01&&Math.abs(E-M)<.01){if(Math.abs(_+g)<.1&&Math.abs(v+C)<.1&&Math.abs(E+M)<.1&&Math.abs(p+S+y-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const F=(p+1)/2,w=(S+1)/2,P=(y+1)/2,D=(_+g)/4,I=(v+C)/4,T=(E+M)/4;return F>w&&F>P?F<.01?(r=0,o=.707106781,c=.707106781):(r=Math.sqrt(F),o=D/r,c=I/r):w>P?w<.01?(r=.707106781,o=0,c=.707106781):(o=Math.sqrt(w),r=D/o,c=T/o):P<.01?(r=.707106781,o=.707106781,c=0):(c=Math.sqrt(P),r=I/c,o=T/c),this.set(r,o,c,i),this}let O=Math.sqrt((M-E)*(M-E)+(v-C)*(v-C)+(g-_)*(g-_));return Math.abs(O)<.001&&(O=1),this.x=(M-E)/O,this.y=(v-C)/O,this.z=(g-_)/O,this.w=Math.acos((p+S+y-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=xt(this.x,e.x,i.x),this.y=xt(this.y,e.y,i.y),this.z=xt(this.z,e.z,i.z),this.w=xt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=xt(this.x,e,i),this.y=xt(this.y,e,i),this.z=xt(this.z,e,i),this.w=xt(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Tp.prototype.isVector4=!0;let fn=Tp;class Zy extends tr{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new fn(0,0,e,i),this.scissorTest=!1,this.viewport=new fn(0,0,e,i),this.textures=[];const o={width:e,height:i,depth:r.depth},c=new Xn(o),u=r.count;for(let h=0;h<u;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const i={minFilter:bn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=i,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const o=Object.assign({},e.textures[i].image);this.textures[i].source=new vp(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class aa extends Zy{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class Yv extends Xn{constructor(e=null,i=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:o},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class jy extends Xn{constructor(e=null,i=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:o},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const fu=class fu{constructor(e,i,r,o,c,u,h,m,p,_,v,g,S,E,C,M){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,o,c,u,h,m,p,_,v,g,S,E,C,M)}set(e,i,r,o,c,u,h,m,p,_,v,g,S,E,C,M){const y=this.elements;return y[0]=e,y[4]=i,y[8]=r,y[12]=o,y[1]=c,y[5]=u,y[9]=h,y[13]=m,y[2]=p,y[6]=_,y[10]=v,y[14]=g,y[3]=S,y[7]=E,y[11]=C,y[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fu().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return this.determinantAffine()===0?(e.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const i=this.elements,r=e.elements,o=1/Fr.setFromMatrixColumn(e,0).length(),c=1/Fr.setFromMatrixColumn(e,1).length(),u=1/Fr.setFromMatrixColumn(e,2).length();return i[0]=r[0]*o,i[1]=r[1]*o,i[2]=r[2]*o,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*u,i[9]=r[9]*u,i[10]=r[10]*u,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,o=e.y,c=e.z,u=Math.cos(r),h=Math.sin(r),m=Math.cos(o),p=Math.sin(o),_=Math.cos(c),v=Math.sin(c);if(e.order==="XYZ"){const g=u*_,S=u*v,E=h*_,C=h*v;i[0]=m*_,i[4]=-m*v,i[8]=p,i[1]=S+E*p,i[5]=g-C*p,i[9]=-h*m,i[2]=C-g*p,i[6]=E+S*p,i[10]=u*m}else if(e.order==="YXZ"){const g=m*_,S=m*v,E=p*_,C=p*v;i[0]=g+C*h,i[4]=E*h-S,i[8]=u*p,i[1]=u*v,i[5]=u*_,i[9]=-h,i[2]=S*h-E,i[6]=C+g*h,i[10]=u*m}else if(e.order==="ZXY"){const g=m*_,S=m*v,E=p*_,C=p*v;i[0]=g-C*h,i[4]=-u*v,i[8]=E+S*h,i[1]=S+E*h,i[5]=u*_,i[9]=C-g*h,i[2]=-u*p,i[6]=h,i[10]=u*m}else if(e.order==="ZYX"){const g=u*_,S=u*v,E=h*_,C=h*v;i[0]=m*_,i[4]=E*p-S,i[8]=g*p+C,i[1]=m*v,i[5]=C*p+g,i[9]=S*p-E,i[2]=-p,i[6]=h*m,i[10]=u*m}else if(e.order==="YZX"){const g=u*m,S=u*p,E=h*m,C=h*p;i[0]=m*_,i[4]=C-g*v,i[8]=E*v+S,i[1]=v,i[5]=u*_,i[9]=-h*_,i[2]=-p*_,i[6]=S*v+E,i[10]=g-C*v}else if(e.order==="XZY"){const g=u*m,S=u*p,E=h*m,C=h*p;i[0]=m*_,i[4]=-v,i[8]=p*_,i[1]=g*v+C,i[5]=u*_,i[9]=S*v-E,i[2]=E*v-S,i[6]=h*_,i[10]=C*v+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ky,e,Qy)}lookAt(e,i,r){const o=this.elements;return gi.subVectors(e,i),gi.lengthSq()===0&&(gi.z=1),gi.normalize(),hs.crossVectors(r,gi),hs.lengthSq()===0&&(Math.abs(r.z)===1?gi.x+=1e-4:gi.z+=1e-4,gi.normalize(),hs.crossVectors(r,gi)),hs.normalize(),Dc.crossVectors(gi,hs),o[0]=hs.x,o[4]=Dc.x,o[8]=gi.x,o[1]=hs.y,o[5]=Dc.y,o[9]=gi.y,o[2]=hs.z,o[6]=Dc.z,o[10]=gi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,o=i.elements,c=this.elements,u=r[0],h=r[4],m=r[8],p=r[12],_=r[1],v=r[5],g=r[9],S=r[13],E=r[2],C=r[6],M=r[10],y=r[14],O=r[3],F=r[7],w=r[11],P=r[15],D=o[0],I=o[4],T=o[8],U=o[12],X=o[1],z=o[5],k=o[9],ce=o[13],ue=o[2],Q=o[6],B=o[10],G=o[14],Y=o[3],fe=o[7],xe=o[11],N=o[15];return c[0]=u*D+h*X+m*ue+p*Y,c[4]=u*I+h*z+m*Q+p*fe,c[8]=u*T+h*k+m*B+p*xe,c[12]=u*U+h*ce+m*G+p*N,c[1]=_*D+v*X+g*ue+S*Y,c[5]=_*I+v*z+g*Q+S*fe,c[9]=_*T+v*k+g*B+S*xe,c[13]=_*U+v*ce+g*G+S*N,c[2]=E*D+C*X+M*ue+y*Y,c[6]=E*I+C*z+M*Q+y*fe,c[10]=E*T+C*k+M*B+y*xe,c[14]=E*U+C*ce+M*G+y*N,c[3]=O*D+F*X+w*ue+P*Y,c[7]=O*I+F*z+w*Q+P*fe,c[11]=O*T+F*k+w*B+P*xe,c[15]=O*U+F*ce+w*G+P*N,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],o=e[8],c=e[12],u=e[1],h=e[5],m=e[9],p=e[13],_=e[2],v=e[6],g=e[10],S=e[14],E=e[3],C=e[7],M=e[11],y=e[15],O=m*S-p*g,F=h*S-p*v,w=h*g-m*v,P=u*S-p*_,D=u*g-m*_,I=u*v-h*_;return i*(C*O-M*F+y*w)-r*(E*O-M*P+y*D)+o*(E*F-C*P+y*I)-c*(E*w-C*D+M*I)}determinantAffine(){const e=this.elements,i=e[0],r=e[4],o=e[8],c=e[1],u=e[5],h=e[9],m=e[2],p=e[6],_=e[10];return i*(u*_-h*p)-r*(c*_-h*m)+o*(c*p-u*m)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=i,o[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],o=e[2],c=e[3],u=e[4],h=e[5],m=e[6],p=e[7],_=e[8],v=e[9],g=e[10],S=e[11],E=e[12],C=e[13],M=e[14],y=e[15],O=i*h-r*u,F=i*m-o*u,w=i*p-c*u,P=r*m-o*h,D=r*p-c*h,I=o*p-c*m,T=_*C-v*E,U=_*M-g*E,X=_*y-S*E,z=v*M-g*C,k=v*y-S*C,ce=g*y-S*M,ue=O*ce-F*k+w*z+P*X-D*U+I*T;if(ue===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Q=1/ue;return e[0]=(h*ce-m*k+p*z)*Q,e[1]=(o*k-r*ce-c*z)*Q,e[2]=(C*I-M*D+y*P)*Q,e[3]=(g*D-v*I-S*P)*Q,e[4]=(m*X-u*ce-p*U)*Q,e[5]=(i*ce-o*X+c*U)*Q,e[6]=(M*w-E*I-y*F)*Q,e[7]=(_*I-g*w+S*F)*Q,e[8]=(u*k-h*X+p*T)*Q,e[9]=(r*X-i*k-c*T)*Q,e[10]=(E*D-C*w+y*O)*Q,e[11]=(v*w-_*D-S*O)*Q,e[12]=(h*U-u*z-m*T)*Q,e[13]=(i*z-r*U+o*T)*Q,e[14]=(C*F-E*P-M*O)*Q,e[15]=(_*P-v*F+g*O)*Q,this}scale(e){const i=this.elements,r=e.x,o=e.y,c=e.z;return i[0]*=r,i[4]*=o,i[8]*=c,i[1]*=r,i[5]*=o,i[9]*=c,i[2]*=r,i[6]*=o,i[10]*=c,i[3]*=r,i[7]*=o,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,o))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),o=Math.sin(i),c=1-r,u=e.x,h=e.y,m=e.z,p=c*u,_=c*h;return this.set(p*u+r,p*h-o*m,p*m+o*h,0,p*h+o*m,_*h+r,_*m-o*u,0,p*m-o*h,_*m+o*u,c*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,o,c,u){return this.set(1,r,c,0,e,1,u,0,i,o,1,0,0,0,0,1),this}compose(e,i,r){const o=this.elements,c=i._x,u=i._y,h=i._z,m=i._w,p=c+c,_=u+u,v=h+h,g=c*p,S=c*_,E=c*v,C=u*_,M=u*v,y=h*v,O=m*p,F=m*_,w=m*v,P=r.x,D=r.y,I=r.z;return o[0]=(1-(C+y))*P,o[1]=(S+w)*P,o[2]=(E-F)*P,o[3]=0,o[4]=(S-w)*D,o[5]=(1-(g+y))*D,o[6]=(M+O)*D,o[7]=0,o[8]=(E+F)*I,o[9]=(M-O)*I,o[10]=(1-(g+C))*I,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,i,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const c=this.determinantAffine();if(c===0)return r.set(1,1,1),i.identity(),this;let u=Fr.set(o[0],o[1],o[2]).length();const h=Fr.set(o[4],o[5],o[6]).length(),m=Fr.set(o[8],o[9],o[10]).length();c<0&&(u=-u),Bi.copy(this);const p=1/u,_=1/h,v=1/m;return Bi.elements[0]*=p,Bi.elements[1]*=p,Bi.elements[2]*=p,Bi.elements[4]*=_,Bi.elements[5]*=_,Bi.elements[6]*=_,Bi.elements[8]*=v,Bi.elements[9]*=v,Bi.elements[10]*=v,i.setFromRotationMatrix(Bi),r.x=u,r.y=h,r.z=m,this}makePerspective(e,i,r,o,c,u,h=na,m=!1){const p=this.elements,_=2*c/(i-e),v=2*c/(r-o),g=(i+e)/(i-e),S=(r+o)/(r-o);let E,C;if(m)E=c/(u-c),C=u*c/(u-c);else if(h===na)E=-(u+c)/(u-c),C=-2*u*c/(u-c);else if(h===lu)E=-u/(u-c),C=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=v,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=C,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,o,c,u,h=na,m=!1){const p=this.elements,_=2/(i-e),v=2/(r-o),g=-(i+e)/(i-e),S=-(r+o)/(r-o);let E,C;if(m)E=1/(u-c),C=u/(u-c);else if(h===na)E=-2/(u-c),C=-(u+c)/(u-c);else if(h===lu)E=-1/(u-c),C=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=0,p[12]=g,p[1]=0,p[5]=v,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=E,p[14]=C,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let o=0;o<16;o++)if(i[o]!==r[o])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}};fu.prototype.isMatrix4=!0;let pn=fu;const Fr=new ee,Bi=new pn,Ky=new ee(0,0,0),Qy=new ee(1,1,1),hs=new ee,Dc=new ee,gi=new ee,w_=new pn,D_=new oo;class er{constructor(e=0,i=0,r=0,o=er.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,o=this._order){return this._x=e,this._y=i,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const o=e.elements,c=o[0],u=o[4],h=o[8],m=o[1],p=o[5],_=o[9],v=o[2],g=o[6],S=o[10];switch(i){case"XYZ":this._y=Math.asin(xt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-xt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(h,S),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(xt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-xt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(g,S),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(xt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(h,S));break;case"XZY":this._z=Math.asin(-xt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-_,S),this._y=0);break;default:rt("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return w_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(w_,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return D_.setFromEuler(this),this.setFromQuaternion(D_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}er.DEFAULT_ORDER="XYZ";class Zv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Jy=0;const N_=new ee,Br=new oo,Aa=new pn,Nc=new ee,$o=new ee,$y=new ee,eE=new oo,L_=new ee(1,0,0),U_=new ee(0,1,0),O_=new ee(0,0,1),P_={type:"added"},tE={type:"removed"},zr={type:"childadded",child:null},zd={type:"childremoved",child:null};class vi extends tr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jy++}),this.uuid=ro(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vi.DEFAULT_UP.clone();const e=new ee,i=new er,r=new oo,o=new ee(1,1,1);function c(){r.setFromEuler(i,!1)}function u(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new pn},normalMatrix:{value:new ct}}),this.matrix=new pn,this.matrixWorld=new pn,this.matrixAutoUpdate=vi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Br.setFromAxisAngle(e,i),this.quaternion.multiply(Br),this}rotateOnWorldAxis(e,i){return Br.setFromAxisAngle(e,i),this.quaternion.premultiply(Br),this}rotateX(e){return this.rotateOnAxis(L_,e)}rotateY(e){return this.rotateOnAxis(U_,e)}rotateZ(e){return this.rotateOnAxis(O_,e)}translateOnAxis(e,i){return N_.copy(e).applyQuaternion(this.quaternion),this.position.add(N_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(L_,e)}translateY(e){return this.translateOnAxis(U_,e)}translateZ(e){return this.translateOnAxis(O_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Aa.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?Nc.copy(e):Nc.set(e,i,r);const o=this.parent;this.updateWorldMatrix(!0,!1),$o.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Aa.lookAt($o,Nc,this.up):Aa.lookAt(Nc,$o,this.up),this.quaternion.setFromRotationMatrix(Aa),o&&(Aa.extractRotation(o.matrixWorld),Br.setFromRotationMatrix(Aa),this.quaternion.premultiply(Br.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Ut("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(P_),zr.child=e,this.dispatchEvent(zr),zr.child=null):Ut("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(tE),zd.child=e,this.dispatchEvent(zd),zd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Aa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Aa.multiply(e.parent.matrixWorld)),e.applyMatrix4(Aa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(P_),zr.child=e,this.dispatchEvent(zr),zr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,i);if(u!==void 0)return u}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($o,e,$y),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($o,eE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,r=e.y,o=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*r-c[8]*o,c[13]+=r-c[1]*i-c[5]*r-c[9]*o,c[14]+=o-c[2]*i-c[6]*r-c[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i,r=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),i===!0){const c=this.children;for(let u=0,h=c.length;u<h;u++)c[u].updateWorldMatrix(!1,!0,r)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(h=>({...h})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const v=m[p];c(e.shapes,v)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(e.materials,this.material[m]));o.material=h}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];o.animations.push(c(e.animations,m))}}if(i){const h=u(e.geometries),m=u(e.materials),p=u(e.textures),_=u(e.images),v=u(e.shapes),g=u(e.skeletons),S=u(e.animations),E=u(e.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),_.length>0&&(r.images=_),v.length>0&&(r.shapes=v),g.length>0&&(r.skeletons=g),S.length>0&&(r.animations=S),E.length>0&&(r.nodes=E)}return r.object=o,r;function u(h){const m=[];for(const p in h){const _=h[p];delete _.metadata,m.push(_)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}vi.DEFAULT_UP=new ee(0,1,0);vi.DEFAULT_MATRIX_AUTO_UPDATE=!0;vi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class rl extends vi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const nE={type:"move"};class Hd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ee,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ee),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ee,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ee,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let o=null,c=null,u=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const C of e.hand.values()){const M=i.getJointPose(C,r),y=this._getHandJoint(p,C);M!==null&&(y.matrix.fromArray(M.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=M.radius),y.visible=M!==null}const _=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],g=_.position.distanceTo(v.position),S=.02,E=.005;p.inputState.pinching&&g>S+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&g<=S-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));h!==null&&(o=i.getPose(e.targetRaySpace,r),o===null&&c!==null&&(o=c),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(nE)))}return h!==null&&(h.visible=o!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new rl;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}const jv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ps={h:0,s:0,l:0},Lc={h:0,s:0,l:0};function Gd(a,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?a+(e-a)*6*i:i<1/2?e:i<2/3?a+(e-a)*6*(2/3-i):a}class Nt{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Kn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.colorSpaceToWorking(this,i),this}setRGB(e,i,r,o=Ct.workingColorSpace){return this.r=e,this.g=i,this.b=r,Ct.colorSpaceToWorking(this,o),this}setHSL(e,i,r,o=Ct.workingColorSpace){if(e=_p(e,1),i=xt(i,0,1),r=xt(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,u=2*r-c;this.r=Gd(u,c,e+1/3),this.g=Gd(u,c,e),this.b=Gd(u,c,e-1/3)}return Ct.colorSpaceToWorking(this,o),this}setStyle(e,i=Kn){function r(c){c!==void 0&&parseFloat(c)<1&&rt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const u=o[1],h=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:rt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(u===6)return this.setHex(parseInt(c,16),i);rt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Kn){const r=jv[e.toLowerCase()];return r!==void 0?this.setHex(r,i):rt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ua(e.r),this.g=Ua(e.g),this.b=Ua(e.b),this}copyLinearToSRGB(e){return this.r=eo(e.r),this.g=eo(e.g),this.b=eo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kn){return Ct.workingToColorSpace(kn.copy(this),e),Math.round(xt(kn.r*255,0,255))*65536+Math.round(xt(kn.g*255,0,255))*256+Math.round(xt(kn.b*255,0,255))}getHexString(e=Kn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ct.workingColorSpace){Ct.workingToColorSpace(kn.copy(this),i);const r=kn.r,o=kn.g,c=kn.b,u=Math.max(r,o,c),h=Math.min(r,o,c);let m,p;const _=(h+u)/2;if(h===u)m=0,p=0;else{const v=u-h;switch(p=_<=.5?v/(u+h):v/(2-u-h),u){case r:m=(o-c)/v+(o<c?6:0);break;case o:m=(c-r)/v+2;break;case c:m=(r-o)/v+4;break}m/=6}return e.h=m,e.s=p,e.l=_,e}getRGB(e,i=Ct.workingColorSpace){return Ct.workingToColorSpace(kn.copy(this),i),e.r=kn.r,e.g=kn.g,e.b=kn.b,e}getStyle(e=Kn){Ct.workingToColorSpace(kn.copy(this),e);const i=kn.r,r=kn.g,o=kn.b;return e!==Kn?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,i,r){return this.getHSL(ps),this.setHSL(ps.h+e,ps.s+i,ps.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(ps),e.getHSL(Lc);const r=ul(ps.h,Lc.h,i),o=ul(ps.s,Lc.s,i),c=ul(ps.l,Lc.l,i);return this.setHSL(r,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,o=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*o,this.g=c[1]*i+c[4]*r+c[7]*o,this.b=c[2]*i+c[5]*r+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kn=new Nt;Nt.NAMES=jv;class iE extends vi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new er,this.environmentIntensity=1,this.environmentRotation=new er,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const zi=new ee,Ra=new ee,Vd=new ee,Ca=new ee,Hr=new ee,Gr=new ee,I_=new ee,kd=new ee,Xd=new ee,Wd=new ee,qd=new fn,Yd=new fn,Zd=new fn;class Gi{constructor(e=new ee,i=new ee,r=new ee){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,o){o.subVectors(r,i),zi.subVectors(e,i),o.cross(zi);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,i,r,o,c){zi.subVectors(o,i),Ra.subVectors(r,i),Vd.subVectors(e,i);const u=zi.dot(zi),h=zi.dot(Ra),m=zi.dot(Vd),p=Ra.dot(Ra),_=Ra.dot(Vd),v=u*p-h*h;if(v===0)return c.set(0,0,0),null;const g=1/v,S=(p*m-h*_)*g,E=(u*_-h*m)*g;return c.set(1-S-E,E,S)}static containsPoint(e,i,r,o){return this.getBarycoord(e,i,r,o,Ca)===null?!1:Ca.x>=0&&Ca.y>=0&&Ca.x+Ca.y<=1}static getInterpolation(e,i,r,o,c,u,h,m){return this.getBarycoord(e,i,r,o,Ca)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Ca.x),m.addScaledVector(u,Ca.y),m.addScaledVector(h,Ca.z),m)}static getInterpolatedAttribute(e,i,r,o,c,u){return qd.setScalar(0),Yd.setScalar(0),Zd.setScalar(0),qd.fromBufferAttribute(e,i),Yd.fromBufferAttribute(e,r),Zd.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(qd,c.x),u.addScaledVector(Yd,c.y),u.addScaledVector(Zd,c.z),u}static isFrontFacing(e,i,r,o){return zi.subVectors(r,i),Ra.subVectors(e,i),zi.cross(Ra).dot(o)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,o){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,i,r,o){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zi.subVectors(this.c,this.b),Ra.subVectors(this.a,this.b),zi.cross(Ra).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Gi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Gi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,o,c){return Gi.getInterpolation(e,this.a,this.b,this.c,i,r,o,c)}containsPoint(e){return Gi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Gi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,o=this.b,c=this.c;let u,h;Hr.subVectors(o,r),Gr.subVectors(c,r),kd.subVectors(e,r);const m=Hr.dot(kd),p=Gr.dot(kd);if(m<=0&&p<=0)return i.copy(r);Xd.subVectors(e,o);const _=Hr.dot(Xd),v=Gr.dot(Xd);if(_>=0&&v<=_)return i.copy(o);const g=m*v-_*p;if(g<=0&&m>=0&&_<=0)return u=m/(m-_),i.copy(r).addScaledVector(Hr,u);Wd.subVectors(e,c);const S=Hr.dot(Wd),E=Gr.dot(Wd);if(E>=0&&S<=E)return i.copy(c);const C=S*p-m*E;if(C<=0&&p>=0&&E<=0)return h=p/(p-E),i.copy(r).addScaledVector(Gr,h);const M=_*E-S*v;if(M<=0&&v-_>=0&&S-E>=0)return I_.subVectors(c,o),h=(v-_)/(v-_+(S-E)),i.copy(o).addScaledVector(I_,h);const y=1/(M+C+g);return u=C*y,h=g*y,i.copy(r).addScaledVector(Hr,u).addScaledVector(Gr,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class _l{constructor(e=new ee(1/0,1/0,1/0),i=new ee(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(Hi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(Hi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=Hi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let u=0,h=c.count;u<h;u++)e.isMesh===!0?e.getVertexPosition(u,Hi):Hi.fromBufferAttribute(c,u),Hi.applyMatrix4(e.matrixWorld),this.expandByPoint(Hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Uc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Uc.copy(r.boundingBox)),Uc.applyMatrix4(e.matrixWorld),this.union(Uc)}const o=e.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Hi),Hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(el),Oc.subVectors(this.max,el),Vr.subVectors(e.a,el),kr.subVectors(e.b,el),Xr.subVectors(e.c,el),ms.subVectors(kr,Vr),gs.subVectors(Xr,kr),Vs.subVectors(Vr,Xr);let i=[0,-ms.z,ms.y,0,-gs.z,gs.y,0,-Vs.z,Vs.y,ms.z,0,-ms.x,gs.z,0,-gs.x,Vs.z,0,-Vs.x,-ms.y,ms.x,0,-gs.y,gs.x,0,-Vs.y,Vs.x,0];return!jd(i,Vr,kr,Xr,Oc)||(i=[1,0,0,0,1,0,0,0,1],!jd(i,Vr,kr,Xr,Oc))?!1:(Pc.crossVectors(ms,gs),i=[Pc.x,Pc.y,Pc.z],jd(i,Vr,kr,Xr,Oc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const wa=[new ee,new ee,new ee,new ee,new ee,new ee,new ee,new ee],Hi=new ee,Uc=new _l,Vr=new ee,kr=new ee,Xr=new ee,ms=new ee,gs=new ee,Vs=new ee,el=new ee,Oc=new ee,Pc=new ee,ks=new ee;function jd(a,e,i,r,o){for(let c=0,u=a.length-3;c<=u;c+=3){ks.fromArray(a,c);const h=o.x*Math.abs(ks.x)+o.y*Math.abs(ks.y)+o.z*Math.abs(ks.z),m=e.dot(ks),p=i.dot(ks),_=r.dot(ks);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>h)return!1}return!0}const yn=new ee,Ic=new Bt;let aE=0;class sa extends tr{constructor(e,i,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:aE++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=M_,this.updateRanges=[],this.gpuType=ta,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=i.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Ic.fromBufferAttribute(this,i),Ic.applyMatrix3(e),this.setXY(i,Ic.x,Ic.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)yn.fromBufferAttribute(this,i),yn.applyMatrix3(e),this.setXYZ(i,yn.x,yn.y,yn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)yn.fromBufferAttribute(this,i),yn.applyMatrix4(e),this.setXYZ(i,yn.x,yn.y,yn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)yn.fromBufferAttribute(this,i),yn.applyNormalMatrix(e),this.setXYZ(i,yn.x,yn.y,yn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)yn.fromBufferAttribute(this,i),yn.transformDirection(e),this.setXYZ(i,yn.x,yn.y,yn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=jr(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Yn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=jr(i,this.array)),i}setX(e,i){return this.normalized&&(i=Yn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=jr(i,this.array)),i}setY(e,i){return this.normalized&&(i=Yn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=jr(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Yn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=jr(i,this.array)),i}setW(e,i){return this.normalized&&(i=Yn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Yn(i,this.array),r=Yn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,o){return e*=this.itemSize,this.normalized&&(i=Yn(i,this.array),r=Yn(r,this.array),o=Yn(o,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,i,r,o,c){return e*=this.itemSize,this.normalized&&(i=Yn(i,this.array),r=Yn(r,this.array),o=Yn(o,this.array),c=Yn(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==M_&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Kv extends sa{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class Qv extends sa{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class Di extends sa{constructor(e,i,r){super(new Float32Array(e),i,r)}}const sE=new _l,tl=new ee,Kd=new ee;class Sp{constructor(e=new ee,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):sE.setFromPoints(e).getCenter(r);let o=0;for(let c=0,u=e.length;c<u;c++)o=Math.max(o,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;tl.subVectors(e,this.center);const i=tl.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),o=(r-this.radius)*.5;this.center.addScaledVector(tl,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Kd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(tl.copy(e.center).add(Kd)),this.expandByPoint(tl.copy(e.center).sub(Kd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let rE=0;const Ri=new pn,Qd=new vi,Wr=new ee,_i=new _l,nl=new _l,Ln=new ee;class Li extends tr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rE++}),this.uuid=ro(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(by(e)?Qv:Kv)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new ct().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ri.makeRotationFromQuaternion(e),this.applyMatrix4(Ri),this}rotateX(e){return Ri.makeRotationX(e),this.applyMatrix4(Ri),this}rotateY(e){return Ri.makeRotationY(e),this.applyMatrix4(Ri),this}rotateZ(e){return Ri.makeRotationZ(e),this.applyMatrix4(Ri),this}translate(e,i,r){return Ri.makeTranslation(e,i,r),this.applyMatrix4(Ri),this}scale(e,i,r){return Ri.makeScale(e,i,r),this.applyMatrix4(Ri),this}lookAt(e){return Qd.lookAt(e),Qd.updateMatrix(),this.applyMatrix4(Qd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wr).negate(),this.translate(Wr.x,Wr.y,Wr.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let o=0,c=e.length;o<c;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Di(r,3))}else{const r=Math.min(e.length,i.count);for(let o=0;o<r;o++){const c=e[o];i.setXYZ(o,c.x,c.y,c.z||0)}e.length>i.count&&rt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _l);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ee(-1/0,-1/0,-1/0),new ee(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,o=i.length;r<o;r++){const c=i[r];_i.setFromBufferAttribute(c),this.morphTargetsRelative?(Ln.addVectors(this.boundingBox.min,_i.min),this.boundingBox.expandByPoint(Ln),Ln.addVectors(this.boundingBox.max,_i.max),this.boundingBox.expandByPoint(Ln)):(this.boundingBox.expandByPoint(_i.min),this.boundingBox.expandByPoint(_i.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ut('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sp);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ee,1/0);return}if(e){const r=this.boundingSphere.center;if(_i.setFromBufferAttribute(e),i)for(let c=0,u=i.length;c<u;c++){const h=i[c];nl.setFromBufferAttribute(h),this.morphTargetsRelative?(Ln.addVectors(_i.min,nl.min),_i.expandByPoint(Ln),Ln.addVectors(_i.max,nl.max),_i.expandByPoint(Ln)):(_i.expandByPoint(nl.min),_i.expandByPoint(nl.max))}_i.getCenter(r);let o=0;for(let c=0,u=e.count;c<u;c++)Ln.fromBufferAttribute(e,c),o=Math.max(o,r.distanceToSquared(Ln));if(i)for(let c=0,u=i.length;c<u;c++){const h=i[c],m=this.morphTargetsRelative;for(let p=0,_=h.count;p<_;p++)Ln.fromBufferAttribute(h,p),m&&(Wr.fromBufferAttribute(e,p),Ln.add(Wr)),o=Math.max(o,r.distanceToSquared(Ln))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Ut('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ut("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,o=i.normal,c=i.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==r.count)&&(u=new sa(new Float32Array(4*r.count),4),this.setAttribute("tangent",u));const h=[],m=[];for(let T=0;T<r.count;T++)h[T]=new ee,m[T]=new ee;const p=new ee,_=new ee,v=new ee,g=new Bt,S=new Bt,E=new Bt,C=new ee,M=new ee;function y(T,U,X){p.fromBufferAttribute(r,T),_.fromBufferAttribute(r,U),v.fromBufferAttribute(r,X),g.fromBufferAttribute(c,T),S.fromBufferAttribute(c,U),E.fromBufferAttribute(c,X),_.sub(p),v.sub(p),S.sub(g),E.sub(g);const z=1/(S.x*E.y-E.x*S.y);isFinite(z)&&(C.copy(_).multiplyScalar(E.y).addScaledVector(v,-S.y).multiplyScalar(z),M.copy(v).multiplyScalar(S.x).addScaledVector(_,-E.x).multiplyScalar(z),h[T].add(C),h[U].add(C),h[X].add(C),m[T].add(M),m[U].add(M),m[X].add(M))}let O=this.groups;O.length===0&&(O=[{start:0,count:e.count}]);for(let T=0,U=O.length;T<U;++T){const X=O[T],z=X.start,k=X.count;for(let ce=z,ue=z+k;ce<ue;ce+=3)y(e.getX(ce+0),e.getX(ce+1),e.getX(ce+2))}const F=new ee,w=new ee,P=new ee,D=new ee;function I(T){P.fromBufferAttribute(o,T),D.copy(P);const U=h[T];F.copy(U),F.sub(P.multiplyScalar(P.dot(U))).normalize(),w.crossVectors(D,U);const z=w.dot(m[T])<0?-1:1;u.setXYZW(T,F.x,F.y,F.z,z)}for(let T=0,U=O.length;T<U;++T){const X=O[T],z=X.start,k=X.count;for(let ce=z,ue=z+k;ce<ue;ce+=3)I(e.getX(ce+0)),I(e.getX(ce+1)),I(e.getX(ce+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==i.count)r=new sa(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let g=0,S=r.count;g<S;g++)r.setXYZ(g,0,0,0);const o=new ee,c=new ee,u=new ee,h=new ee,m=new ee,p=new ee,_=new ee,v=new ee;if(e)for(let g=0,S=e.count;g<S;g+=3){const E=e.getX(g+0),C=e.getX(g+1),M=e.getX(g+2);o.fromBufferAttribute(i,E),c.fromBufferAttribute(i,C),u.fromBufferAttribute(i,M),_.subVectors(u,c),v.subVectors(o,c),_.cross(v),h.fromBufferAttribute(r,E),m.fromBufferAttribute(r,C),p.fromBufferAttribute(r,M),h.add(_),m.add(_),p.add(_),r.setXYZ(E,h.x,h.y,h.z),r.setXYZ(C,m.x,m.y,m.z),r.setXYZ(M,p.x,p.y,p.z)}else for(let g=0,S=i.count;g<S;g+=3)o.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),u.fromBufferAttribute(i,g+2),_.subVectors(u,c),v.subVectors(o,c),_.cross(v),r.setXYZ(g+0,_.x,_.y,_.z),r.setXYZ(g+1,_.x,_.y,_.z),r.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)Ln.fromBufferAttribute(e,i),Ln.normalize(),e.setXYZ(i,Ln.x,Ln.y,Ln.z)}toNonIndexed(){function e(h,m){const p=h.array,_=h.itemSize,v=h.normalized,g=new p.constructor(m.length*_);let S=0,E=0;for(let C=0,M=m.length;C<M;C++){h.isInterleavedBufferAttribute?S=m[C]*h.data.stride+h.offset:S=m[C]*_;for(let y=0;y<_;y++)g[E++]=p[S++]}return new sa(g,_,v)}if(this.index===null)return rt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Li,r=this.index.array,o=this.attributes;for(const h in o){const m=o[h],p=e(m,r);i.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let _=0,v=p.length;_<v;_++){const g=p[_],S=e(g,r);m.push(S)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let h=0,m=u.length;h<m;h++){const p=u[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const o={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let v=0,g=p.length;v<g;v++){const S=p[v];_.push(S.toJSON(e.data))}_.length>0&&(o[m]=_,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const p in o){const _=o[p];this.setAttribute(p,_.clone(i))}const c=e.morphAttributes;for(const p in c){const _=[],v=c[p];for(let g=0,S=v.length;g<S;g++)_.push(v[g].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,_=u.length;p<_;p++){const v=u[p];this.addGroup(v.start,v.count,v.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let oE=0;class hu extends tr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:oE++}),this.uuid=ro(),this.name="",this.type="Material",this.blending=Jr,this.side=Oa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_h,this.blendDst=vh,this.blendEquation=Zs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Nt(0,0,0),this.blendAlpha=0,this.depthFunc=no,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=x_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pr,this.stencilZFail=Pr,this.stencilZPass=Pr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){rt(`Material: parameter '${i}' has value of undefined.`);continue}const o=this[i];if(o===void 0){rt(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector2&&r&&r.isVector2||o&&o.isEuler&&r&&r.isEuler||o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Jr&&(r.blending=this.blending),this.side!==Oa&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==_h&&(r.blendSrc=this.blendSrc),this.blendDst!==vh&&(r.blendDst=this.blendDst),this.blendEquation!==Zs&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==no&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==x_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Pr&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Pr&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Pr&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(c){const u=[];for(const h in c){const m=c[h];delete m.metadata,u.push(m)}return u}if(i){const c=o(e.textures),u=o(e.images);c.length>0&&(r.textures=c),u.length>0&&(r.images=u)}return r}fromJSON(e,i){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Nt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=i[e.map]||null),e.matcap!==void 0&&(this.matcap=i[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=i[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=i[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=i[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new Bt().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=i[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=i[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=i[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=i[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=i[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=i[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=i[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=i[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=i[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=i[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=i[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Bt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=i[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=i[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=i[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=i[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=i[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const o=i.length;r=new Array(o);for(let c=0;c!==o;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Da=new ee,Jd=new ee,Fc=new ee,_s=new ee,$d=new ee,Bc=new ee,eh=new ee;class lE{constructor(e=new ee,i=new ee(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Da)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Da.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Da.copy(this.origin).addScaledVector(this.direction,i),Da.distanceToSquared(e))}distanceSqToSegment(e,i,r,o){Jd.copy(e).add(i).multiplyScalar(.5),Fc.copy(i).sub(e).normalize(),_s.copy(this.origin).sub(Jd);const c=e.distanceTo(i)*.5,u=-this.direction.dot(Fc),h=_s.dot(this.direction),m=-_s.dot(Fc),p=_s.lengthSq(),_=Math.abs(1-u*u);let v,g,S,E;if(_>0)if(v=u*m-h,g=u*h-m,E=c*_,v>=0)if(g>=-E)if(g<=E){const C=1/_;v*=C,g*=C,S=v*(v+u*g+2*h)+g*(u*v+g+2*m)+p}else g=c,v=Math.max(0,-(u*g+h)),S=-v*v+g*(g+2*m)+p;else g=-c,v=Math.max(0,-(u*g+h)),S=-v*v+g*(g+2*m)+p;else g<=-E?(v=Math.max(0,-(-u*c+h)),g=v>0?-c:Math.min(Math.max(-c,-m),c),S=-v*v+g*(g+2*m)+p):g<=E?(v=0,g=Math.min(Math.max(-c,-m),c),S=g*(g+2*m)+p):(v=Math.max(0,-(u*c+h)),g=v>0?c:Math.min(Math.max(-c,-m),c),S=-v*v+g*(g+2*m)+p);else g=u>0?-c:c,v=Math.max(0,-(u*g+h)),S=-v*v+g*(g+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(Jd).addScaledVector(Fc,g),S}intersectSphere(e,i){Da.subVectors(e.center,this.origin);const r=Da.dot(this.direction),o=Da.dot(Da)-r*r,c=e.radius*e.radius;if(o>c)return null;const u=Math.sqrt(c-o),h=r-u,m=r+u;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,o,c,u,h,m;const p=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,g=this.origin;return p>=0?(r=(e.min.x-g.x)*p,o=(e.max.x-g.x)*p):(r=(e.max.x-g.x)*p,o=(e.min.x-g.x)*p),_>=0?(c=(e.min.y-g.y)*_,u=(e.max.y-g.y)*_):(c=(e.max.y-g.y)*_,u=(e.min.y-g.y)*_),r>u||c>o||((c>r||isNaN(r))&&(r=c),(u<o||isNaN(o))&&(o=u),v>=0?(h=(e.min.z-g.z)*v,m=(e.max.z-g.z)*v):(h=(e.max.z-g.z)*v,m=(e.min.z-g.z)*v),r>m||h>o)||((h>r||r!==r)&&(r=h),(m<o||o!==o)&&(o=m),o<0)?null:this.at(r>=0?r:o,i)}intersectsBox(e){return this.intersectBox(e,Da)!==null}intersectTriangle(e,i,r,o,c){$d.subVectors(i,e),Bc.subVectors(r,e),eh.crossVectors($d,Bc);let u=this.direction.dot(eh),h;if(u>0){if(o)return null;h=1}else if(u<0)h=-1,u=-u;else return null;_s.subVectors(this.origin,e);const m=h*this.direction.dot(Bc.crossVectors(_s,Bc));if(m<0)return null;const p=h*this.direction.dot($d.cross(_s));if(p<0||m+p>u)return null;const _=-h*_s.dot(eh);return _<0?null:this.at(_/u,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class uu extends hu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new er,this.combine=Dv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const F_=new pn,Xs=new lE,zc=new Sp,B_=new ee,Hc=new ee,Gc=new ee,Vc=new ee,th=new ee,kc=new ee,z_=new ee,Xc=new ee;class Ni extends vi{constructor(e=new Li,i=new uu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const o=i[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,i){const r=this.geometry,o=r.attributes.position,c=r.morphAttributes.position,u=r.morphTargetsRelative;i.fromBufferAttribute(o,e);const h=this.morphTargetInfluences;if(c&&h){kc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const _=h[m],v=c[m];_!==0&&(th.fromBufferAttribute(v,e),u?kc.addScaledVector(th,_):kc.addScaledVector(th.sub(i),_))}i.add(kc)}return i}raycast(e,i){const r=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),zc.copy(r.boundingSphere),zc.applyMatrix4(c),Xs.copy(e.ray).recast(e.near),!(zc.containsPoint(Xs.origin)===!1&&(Xs.intersectSphere(zc,B_)===null||Xs.origin.distanceToSquared(B_)>(e.far-e.near)**2))&&(F_.copy(c).invert(),Xs.copy(e.ray).applyMatrix4(F_),!(r.boundingBox!==null&&Xs.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,Xs)))}_computeIntersections(e,i,r){let o;const c=this.geometry,u=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,_=c.attributes.uv1,v=c.attributes.normal,g=c.groups,S=c.drawRange;if(h!==null)if(Array.isArray(u))for(let E=0,C=g.length;E<C;E++){const M=g[E],y=u[M.materialIndex],O=Math.max(M.start,S.start),F=Math.min(h.count,Math.min(M.start+M.count,S.start+S.count));for(let w=O,P=F;w<P;w+=3){const D=h.getX(w),I=h.getX(w+1),T=h.getX(w+2);o=Wc(this,y,e,r,p,_,v,D,I,T),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=M.materialIndex,i.push(o))}}else{const E=Math.max(0,S.start),C=Math.min(h.count,S.start+S.count);for(let M=E,y=C;M<y;M+=3){const O=h.getX(M),F=h.getX(M+1),w=h.getX(M+2);o=Wc(this,u,e,r,p,_,v,O,F,w),o&&(o.faceIndex=Math.floor(M/3),i.push(o))}}else if(m!==void 0)if(Array.isArray(u))for(let E=0,C=g.length;E<C;E++){const M=g[E],y=u[M.materialIndex],O=Math.max(M.start,S.start),F=Math.min(m.count,Math.min(M.start+M.count,S.start+S.count));for(let w=O,P=F;w<P;w+=3){const D=w,I=w+1,T=w+2;o=Wc(this,y,e,r,p,_,v,D,I,T),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=M.materialIndex,i.push(o))}}else{const E=Math.max(0,S.start),C=Math.min(m.count,S.start+S.count);for(let M=E,y=C;M<y;M+=3){const O=M,F=M+1,w=M+2;o=Wc(this,u,e,r,p,_,v,O,F,w),o&&(o.faceIndex=Math.floor(M/3),i.push(o))}}}}function cE(a,e,i,r,o,c,u,h){let m;if(e.side===si?m=r.intersectTriangle(u,c,o,!0,h):m=r.intersectTriangle(o,c,u,e.side===Oa,h),m===null)return null;Xc.copy(h),Xc.applyMatrix4(a.matrixWorld);const p=i.ray.origin.distanceTo(Xc);return p<i.near||p>i.far?null:{distance:p,point:Xc.clone(),object:a}}function Wc(a,e,i,r,o,c,u,h,m,p){a.getVertexPosition(h,Hc),a.getVertexPosition(m,Gc),a.getVertexPosition(p,Vc);const _=cE(a,e,i,r,Hc,Gc,Vc,z_);if(_){const v=new ee;Gi.getBarycoord(z_,Hc,Gc,Vc,v),o&&(_.uv=Gi.getInterpolatedAttribute(o,h,m,p,v,new Bt)),c&&(_.uv1=Gi.getInterpolatedAttribute(c,h,m,p,v,new Bt)),u&&(_.normal=Gi.getInterpolatedAttribute(u,h,m,p,v,new ee),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const g={a:h,b:m,c:p,normal:new ee,materialIndex:0};Gi.getNormal(Hc,Gc,Vc,g.normal),_.face=g,_.barycoord=v}return _}class uE extends Xn{constructor(e=null,i=1,r=1,o,c,u,h,m,p=Bn,_=Bn,v,g){super(null,u,h,m,p,_,o,c,v,g),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const nh=new ee,fE=new ee,dE=new ct;class Ys{constructor(e=new ee(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,o){return this.normal.set(e,i,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const o=nh.subVectors(r,i).cross(fE.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,r=!0){const o=e.delta(nh),c=this.normal.dot(o);if(c===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/c;return r===!0&&(u<0||u>1)?null:i.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||dE.getNormalMatrix(e),o=this.coplanarPoint(nh).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ws=new Sp,hE=new Bt(.5,.5),qc=new ee;class Jv{constructor(e=new Ys,i=new Ys,r=new Ys,o=new Ys,c=new Ys,u=new Ys){this.planes=[e,i,r,o,c,u]}set(e,i,r,o,c,u){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(r),h[3].copy(o),h[4].copy(c),h[5].copy(u),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=na,r=!1){const o=this.planes,c=e.elements,u=c[0],h=c[1],m=c[2],p=c[3],_=c[4],v=c[5],g=c[6],S=c[7],E=c[8],C=c[9],M=c[10],y=c[11],O=c[12],F=c[13],w=c[14],P=c[15];if(o[0].setComponents(p-u,S-_,y-E,P-O).normalize(),o[1].setComponents(p+u,S+_,y+E,P+O).normalize(),o[2].setComponents(p+h,S+v,y+C,P+F).normalize(),o[3].setComponents(p-h,S-v,y-C,P-F).normalize(),r)o[4].setComponents(m,g,M,w).normalize(),o[5].setComponents(p-m,S-g,y-M,P-w).normalize();else if(o[4].setComponents(p-m,S-g,y-M,P-w).normalize(),i===na)o[5].setComponents(p+m,S+g,y+M,P+w).normalize();else if(i===lu)o[5].setComponents(m,g,M,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ws.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ws.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ws)}intersectsSprite(e){Ws.center.set(0,0,0);const i=hE.distanceTo(e.center);return Ws.radius=.7071067811865476+i,Ws.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ws)}intersectsSphere(e){const i=this.planes,r=e.center,o=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const o=i[r];if(qc.x=o.normal.x>0?e.max.x:e.min.x,qc.y=o.normal.y>0?e.max.y:e.min.y,qc.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(qc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class $v extends Xn{constructor(e=[],i=Js,r,o,c,u,h,m,p,_){super(e,i,r,o,c,u,h,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class eS extends Xn{constructor(e,i,r,o,c,u,h,m,p){super(e,i,r,o,c,u,h,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ao extends Xn{constructor(e,i,r=ra,o,c,u,h=Bn,m=Bn,p,_=Ia,v=1){if(_!==Ia&&_!==Ks)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:i,depth:v};super(g,o,c,u,h,m,_,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new vp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class pE extends ao{constructor(e,i=ra,r=Js,o,c,u=Bn,h=Bn,m,p=Ia){const _={width:e,height:e,depth:1},v=[_,_,_,_,_,_];super(e,e,i,r,o,c,u,h,m,p),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class tS extends Xn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class vl extends Li{constructor(e=1,i=1,r=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:o,heightSegments:c,depthSegments:u};const h=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const m=[],p=[],_=[],v=[];let g=0,S=0;E("z","y","x",-1,-1,r,i,e,u,c,0),E("z","y","x",1,-1,r,i,-e,u,c,1),E("x","z","y",1,1,e,r,i,o,u,2),E("x","z","y",1,-1,e,r,-i,o,u,3),E("x","y","z",1,-1,e,i,r,o,c,4),E("x","y","z",-1,-1,e,i,-r,o,c,5),this.setIndex(m),this.setAttribute("position",new Di(p,3)),this.setAttribute("normal",new Di(_,3)),this.setAttribute("uv",new Di(v,2));function E(C,M,y,O,F,w,P,D,I,T,U){const X=w/I,z=P/T,k=w/2,ce=P/2,ue=D/2,Q=I+1,B=T+1;let G=0,Y=0;const fe=new ee;for(let xe=0;xe<B;xe++){const N=xe*z-ce;for(let j=0;j<Q;j++){const ve=j*X-k;fe[C]=ve*O,fe[M]=N*F,fe[y]=ue,p.push(fe.x,fe.y,fe.z),fe[C]=0,fe[M]=0,fe[y]=D>0?1:-1,_.push(fe.x,fe.y,fe.z),v.push(j/I),v.push(1-xe/T),G+=1}}for(let xe=0;xe<T;xe++)for(let N=0;N<I;N++){const j=g+N+Q*xe,ve=g+N+Q*(xe+1),Te=g+(N+1)+Q*(xe+1),Ue=g+(N+1)+Q*xe;m.push(j,ve,Ue),m.push(ve,Te,Ue),Y+=6}h.addGroup(S,Y,U),S+=Y,g+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class mE{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){rt("Curve: .getPoint() not implemented.")}getPointAt(e,i){const r=this.getUtoTmapping(e);return this.getPoint(r,i)}getPoints(e=5){const i=[];for(let r=0;r<=e;r++)i.push(this.getPoint(r/e));return i}getSpacedPoints(e=5){const i=[];for(let r=0;r<=e;r++)i.push(this.getPointAt(r/e));return i}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let r,o=this.getPoint(0),c=0;i.push(0);for(let u=1;u<=e;u++)r=this.getPoint(u/e),c+=r.distanceTo(o),i.push(c),o=r;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,i=null){const r=this.getLengths();let o=0;const c=r.length;let u;i?u=i:u=e*r[c-1];let h=0,m=c-1,p;for(;h<=m;)if(o=Math.floor(h+(m-h)/2),p=r[o]-u,p<0)h=o+1;else if(p>0)m=o-1;else{m=o;break}if(o=m,r[o]===u)return o/(c-1);const _=r[o],g=r[o+1]-_,S=(u-_)/g;return(o+S)/(c-1)}getTangent(e,i){let o=e-1e-4,c=e+1e-4;o<0&&(o=0),c>1&&(c=1);const u=this.getPoint(o),h=this.getPoint(c),m=i||(u.isVector2?new Bt:new ee);return m.copy(h).sub(u).normalize(),m}getTangentAt(e,i){const r=this.getUtoTmapping(e);return this.getTangent(r,i)}computeFrenetFrames(e,i=!1){const r=new ee,o=[],c=[],u=[],h=new ee,m=new pn;for(let S=0;S<=e;S++){const E=S/e;o[S]=this.getTangentAt(E,new ee)}c[0]=new ee,u[0]=new ee;let p=Number.MAX_VALUE;const _=Math.abs(o[0].x),v=Math.abs(o[0].y),g=Math.abs(o[0].z);_<=p&&(p=_,r.set(1,0,0)),v<=p&&(p=v,r.set(0,1,0)),g<=p&&r.set(0,0,1),h.crossVectors(o[0],r).normalize(),c[0].crossVectors(o[0],h),u[0].crossVectors(o[0],c[0]);for(let S=1;S<=e;S++){if(c[S]=c[S-1].clone(),u[S]=u[S-1].clone(),h.crossVectors(o[S-1],o[S]),h.length()>Number.EPSILON){h.normalize();const E=Math.acos(xt(o[S-1].dot(o[S]),-1,1));c[S].applyMatrix4(m.makeRotationAxis(h,E))}u[S].crossVectors(o[S],c[S])}if(i===!0){let S=Math.acos(xt(c[0].dot(c[e]),-1,1));S/=e,o[0].dot(h.crossVectors(c[0],c[e]))>0&&(S=-S);for(let E=1;E<=e;E++)c[E].applyMatrix4(m.makeRotationAxis(o[E],S*E)),u[E].crossVectors(o[E],c[E])}return{tangents:o,normals:c,binormals:u}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function xp(){let a=0,e=0,i=0,r=0;function o(c,u,h,m){a=c,e=h,i=-3*c+3*u-2*h-m,r=2*c-2*u+h+m}return{initCatmullRom:function(c,u,h,m,p){o(u,h,p*(h-c),p*(m-u))},initNonuniformCatmullRom:function(c,u,h,m,p,_,v){let g=(u-c)/p-(h-c)/(p+_)+(h-u)/_,S=(h-u)/_-(m-u)/(_+v)+(m-h)/v;g*=_,S*=_,o(u,h,g,S)},calc:function(c){const u=c*c,h=u*c;return a+e*c+i*u+r*h}}}const H_=new ee,G_=new ee,ih=new xp,ah=new xp,sh=new xp;class gE extends mE{constructor(e=[],i=!1,r="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=i,this.curveType=r,this.tension=o}getPoint(e,i=new ee){const r=i,o=this.points,c=o.length,u=(c-(this.closed?0:1))*e;let h=Math.floor(u),m=u-h;this.closed?h+=h>0?0:(Math.floor(Math.abs(h)/c)+1)*c:m===0&&h===c-1&&(h=c-2,m=1);let p,_;this.closed||h>0?p=o[(h-1)%c]:(G_.subVectors(o[0],o[1]).add(o[0]),p=G_);const v=o[h%c],g=o[(h+1)%c];if(this.closed||h+2<c?_=o[(h+2)%c]:(H_.subVectors(o[c-1],o[c-2]).add(o[c-1]),_=H_),this.curveType==="centripetal"||this.curveType==="chordal"){const S=this.curveType==="chordal"?.5:.25;let E=Math.pow(p.distanceToSquared(v),S),C=Math.pow(v.distanceToSquared(g),S),M=Math.pow(g.distanceToSquared(_),S);C<1e-4&&(C=1),E<1e-4&&(E=C),M<1e-4&&(M=C),ih.initNonuniformCatmullRom(p.x,v.x,g.x,_.x,E,C,M),ah.initNonuniformCatmullRom(p.y,v.y,g.y,_.y,E,C,M),sh.initNonuniformCatmullRom(p.z,v.z,g.z,_.z,E,C,M)}else this.curveType==="catmullrom"&&(ih.initCatmullRom(p.x,v.x,g.x,_.x,this.tension),ah.initCatmullRom(p.y,v.y,g.y,_.y,this.tension),sh.initCatmullRom(p.z,v.z,g.z,_.z,this.tension));return r.set(ih.calc(m),ah.calc(m),sh.calc(m)),r}copy(e){super.copy(e),this.points=[];for(let i=0,r=e.points.length;i<r;i++){const o=e.points[i];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let i=0,r=this.points.length;i<r;i++){const o=this.points[i];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let i=0,r=e.points.length;i<r;i++){const o=e.points[i];this.points.push(new ee().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class Qs extends Li{constructor(e=1,i=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:o};const c=e/2,u=i/2,h=Math.floor(r),m=Math.floor(o),p=h+1,_=m+1,v=e/h,g=i/m,S=[],E=[],C=[],M=[];for(let y=0;y<_;y++){const O=y*g-u;for(let F=0;F<p;F++){const w=F*v-c;E.push(w,-O,0),C.push(0,0,1),M.push(F/h),M.push(1-y/m)}}for(let y=0;y<m;y++)for(let O=0;O<h;O++){const F=O+p*y,w=O+p*(y+1),P=O+1+p*(y+1),D=O+1+p*y;S.push(F,w,D),S.push(w,P,D)}this.setIndex(S),this.setAttribute("position",new Di(E,3)),this.setAttribute("normal",new Di(C,3)),this.setAttribute("uv",new Di(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qs(e.width,e.height,e.widthSegments,e.heightSegments)}}function so(a){const e={};for(const i in a){e[i]={};for(const r in a[i]){const o=a[i][r];if(V_(o))o.isRenderTargetTexture?(rt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=o.clone();else if(Array.isArray(o))if(V_(o[0])){const c=[];for(let u=0,h=o.length;u<h;u++)c[u]=o[u].clone();e[i][r]=c}else e[i][r]=o.slice();else e[i][r]=o}}return e}function Zn(a){const e={};for(let i=0;i<a.length;i++){const r=so(a[i]);for(const o in r)e[o]=r[o]}return e}function V_(a){return a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)}function _E(a){const e=[];for(let i=0;i<a.length;i++)e.push(a[i].clone());return e}function nS(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ct.workingColorSpace}const vE={clone:so,merge:Zn};var SE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xi extends hu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=SE,this.fragmentShader=xE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=so(e.uniforms),this.uniformsGroups=_E(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?i.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?i.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?i.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?i.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?i.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?i.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?i.uniforms[o]={type:"m4",value:u.toArray()}:i.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}fromJSON(e,i){if(super.fromJSON(e,i),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(this.uniforms[r]={},o.type){case"t":this.uniforms[r].value=i[o.value]||null;break;case"c":this.uniforms[r].value=new Nt().setHex(o.value);break;case"v2":this.uniforms[r].value=new Bt().fromArray(o.value);break;case"v3":this.uniforms[r].value=new ee().fromArray(o.value);break;case"v4":this.uniforms[r].value=new fn().fromArray(o.value);break;case"m3":this.uniforms[r].value=new ct().fromArray(o.value);break;case"m4":this.uniforms[r].value=new pn().fromArray(o.value);break;default:this.uniforms[r].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class ME extends Xi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class yE extends hu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class EE extends hu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Yc=new ee,Zc=new oo,Qi=new ee;class iS extends vi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pn,this.projectionMatrix=new pn,this.projectionMatrixInverse=new pn,this.coordinateSystem=na,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Yc,Zc,Qi),Qi.x===1&&Qi.y===1&&Qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Yc,Zc,Qi.set(1,1,1)).invert()}updateWorldMatrix(e,i,r=!1){super.updateWorldMatrix(e,i,r),this.matrixWorld.decompose(Yc,Zc,Qi),Qi.x===1&&Qi.y===1&&Qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Yc,Zc,Qi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const vs=new ee,k_=new Bt,X_=new Bt;class Ci extends iS{constructor(e=50,i=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=ml*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(cl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ml*2*Math.atan(Math.tan(cl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){vs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(vs.x,vs.y).multiplyScalar(-e/vs.z),vs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(vs.x,vs.y).multiplyScalar(-e/vs.z)}getViewSize(e,i){return this.getViewBounds(e,k_,X_),i.subVectors(X_,k_)}setViewOffset(e,i,r,o,c,u){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(cl*.5*this.fov)/this.zoom,r=2*i,o=this.aspect*r,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const m=u.fullWidth,p=u.fullHeight;c+=u.offsetX*o/m,i-=u.offsetY*r/p,o*=u.width/m,r*=u.height/p}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class aS extends iS{constructor(e=-1,i=1,r=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=r-e,u=r+e,h=o+i,m=o-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,u=c+p*this.view.width,h-=_*this.view.offsetY,m=h-_*this.view.height}this.projectionMatrix.makeOrthographic(c,u,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const qr=-90,Yr=1;class bE extends vi{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Ci(qr,Yr,e,i);o.layers=this.layers,this.add(o);const c=new Ci(qr,Yr,e,i);c.layers=this.layers,this.add(c);const u=new Ci(qr,Yr,e,i);u.layers=this.layers,this.add(u);const h=new Ci(qr,Yr,e,i);h.layers=this.layers,this.add(h);const m=new Ci(qr,Yr,e,i);m.layers=this.layers,this.add(m);const p=new Ci(qr,Yr,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,o,c,u,h,m]=i;for(const p of i)this.remove(p);if(e===na)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===lu)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,u,h,m,p,_]=this.children,v=e.getRenderTarget(),g=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let M=!1;e.isWebGLRenderer===!0?M=e.state.buffers.depth.getReversed():M=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(r,1,o),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,u),e.setRenderTarget(r,2,o),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),e.setRenderTarget(r,3,o),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(r,4,o),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,o),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,_),e.setRenderTarget(v,g,S),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class TE extends Ci{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Ap=class Ap{constructor(e,i,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let r=0;r<4;r++)this.elements[r]=e[r+i];return this}set(e,i,r,o){const c=this.elements;return c[0]=e,c[2]=i,c[1]=r,c[3]=o,this}};Ap.prototype.isMatrix2=!0;let W_=Ap;function q_(a,e,i,r){const o=AE(r);switch(i){case kv:return a*e;case Wv:return a*e/o.components*o.byteLength;case dp:return a*e/o.components*o.byteLength;case $s:return a*e*2/o.components*o.byteLength;case hp:return a*e*2/o.components*o.byteLength;case Xv:return a*e*3/o.components*o.byteLength;case ki:return a*e*4/o.components*o.byteLength;case pp:return a*e*4/o.components*o.byteLength;case $c:case eu:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case tu:case nu:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case wh:case Nh:return Math.max(a,16)*Math.max(e,8)/4;case Ch:case Dh:return Math.max(a,8)*Math.max(e,8)/2;case Lh:case Uh:case Ph:case Ih:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Oh:case au:case Fh:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Bh:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case zh:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case Hh:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case Gh:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case Vh:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case kh:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case Xh:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case Wh:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case qh:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case Yh:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case Zh:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case jh:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case Kh:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case Qh:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case Jh:case $h:case ep:return Math.ceil(a/4)*Math.ceil(e/4)*16;case tp:case np:return Math.ceil(a/4)*Math.ceil(e/4)*8;case su:case ip:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function AE(a){switch(a){case wi:case zv:return{byteLength:1,components:1};case hl:case Hv:case Pa:return{byteLength:2,components:1};case up:case fp:return{byteLength:2,components:4};case ra:case cp:case ta:return{byteLength:4,components:1};case Gv:case Vv:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:lp}}));typeof window<"u"&&(window.__THREE__?rt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=lp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function sS(){let a=null,e=!1,i=null,r=null;function o(c,u){i(c,u),r=a.requestAnimationFrame(o)}return{start:function(){e!==!0&&i!==null&&a!==null&&(r=a.requestAnimationFrame(o),e=!0)},stop:function(){a!==null&&a.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){a=c}}}function RE(a){const e=new WeakMap;function i(h,m){const p=h.array,_=h.usage,v=p.byteLength,g=a.createBuffer();a.bindBuffer(m,g),a.bufferData(m,p,_),h.onUploadCallback();let S;if(p instanceof Float32Array)S=a.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=a.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?S=a.HALF_FLOAT:S=a.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=a.SHORT;else if(p instanceof Uint32Array)S=a.UNSIGNED_INT;else if(p instanceof Int32Array)S=a.INT;else if(p instanceof Int8Array)S=a.BYTE;else if(p instanceof Uint8Array)S=a.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:v}}function r(h,m,p){const _=m.array,v=m.updateRanges;if(a.bindBuffer(p,h),v.length===0)a.bufferSubData(p,0,_);else{v.sort((S,E)=>S.start-E.start);let g=0;for(let S=1;S<v.length;S++){const E=v[g],C=v[S];C.start<=E.start+E.count+1?E.count=Math.max(E.count,C.start+C.count-E.start):(++g,v[g]=C)}v.length=g+1;for(let S=0,E=v.length;S<E;S++){const C=v[S];a.bufferSubData(p,C.start*_.BYTES_PER_ELEMENT,_,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(a.deleteBuffer(m.buffer),e.delete(h))}function u(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const _=e.get(h);(!_||_.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,m),p.version=h.version}}return{get:o,remove:c,update:u}}var CE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wE=`#ifdef USE_ALPHAHASH
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
#endif`,DE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,NE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,LE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,UE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,OE=`#ifdef USE_AOMAP
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
#endif`,PE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,IE=`#ifdef USE_BATCHING
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
#endif`,FE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,BE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,HE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,GE=`#ifdef USE_IRIDESCENCE
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
#endif`,VE=`#ifdef USE_BUMPMAP
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
#endif`,kE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,XE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,WE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,YE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ZE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,jE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,KE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,QE=`#define PI 3.141592653589793
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
} // validated`,JE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$E=`vec3 transformedNormal = objectNormal;
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
#endif`,eb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ib=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ab="gl_FragColor = linearToOutputTexel( gl_FragColor );",sb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rb=`#ifdef USE_ENVMAP
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
#endif`,ob=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,lb=`#ifdef USE_ENVMAP
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
#endif`,cb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ub=`#ifdef USE_ENVMAP
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
#endif`,fb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,db=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mb=`#ifdef USE_GRADIENTMAP
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
}`,gb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_b=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Sb=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,xb=`#ifdef USE_ENVMAP
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
#endif`,Mb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Eb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Tb=`PhysicalMaterial material;
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
#endif`,Ab=`uniform sampler2D dfgLUT;
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
}`,Rb=`
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
#endif`,Cb=`#if defined( RE_IndirectDiffuse )
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
#endif`,wb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Db=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Nb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Lb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ub=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ob=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Pb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ib=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Bb=`#if defined( USE_POINTS_UV )
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
#endif`,zb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xb=`#ifdef USE_MORPHTARGETS
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
#endif`,Wb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Yb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Zb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Qb=`#ifdef USE_NORMALMAP
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
#endif`,Jb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$b=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,e1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,t1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,n1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,i1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,a1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,s1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,r1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,o1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,l1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,c1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,u1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,f1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,d1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,h1=`float getShadowMask() {
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
}`,p1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,m1=`#ifdef USE_SKINNING
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
#endif`,g1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_1=`#ifdef USE_SKINNING
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
#endif`,v1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,S1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,x1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,M1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,y1=`#ifdef USE_TRANSMISSION
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
#endif`,E1=`#ifdef USE_TRANSMISSION
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
#endif`,b1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,T1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,A1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,R1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const C1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,w1=`uniform sampler2D t2D;
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
}`,D1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,N1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,L1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,U1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,O1=`#include <common>
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
}`,P1=`#if DEPTH_PACKING == 3200
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
}`,I1=`#define DISTANCE
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
}`,F1=`#define DISTANCE
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
}`,B1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,z1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,H1=`uniform float scale;
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
}`,G1=`uniform vec3 diffuse;
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
}`,V1=`#include <common>
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
}`,k1=`uniform vec3 diffuse;
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
}`,X1=`#define LAMBERT
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
}`,W1=`#define LAMBERT
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
}`,q1=`#define MATCAP
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
}`,Y1=`#define MATCAP
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
}`,Z1=`#define NORMAL
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
}`,j1=`#define NORMAL
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
}`,K1=`#define PHONG
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
}`,Q1=`#define PHONG
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
}`,J1=`#define STANDARD
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
}`,$1=`#define STANDARD
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
}`,eT=`#define TOON
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
}`,tT=`#define TOON
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
}`,nT=`uniform float size;
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
}`,iT=`uniform vec3 diffuse;
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
}`,aT=`#include <common>
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
}`,sT=`uniform vec3 color;
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
}`,rT=`uniform float rotation;
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
}`,oT=`uniform vec3 diffuse;
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
}`,gt={alphahash_fragment:CE,alphahash_pars_fragment:wE,alphamap_fragment:DE,alphamap_pars_fragment:NE,alphatest_fragment:LE,alphatest_pars_fragment:UE,aomap_fragment:OE,aomap_pars_fragment:PE,batching_pars_vertex:IE,batching_vertex:FE,begin_vertex:BE,beginnormal_vertex:zE,bsdfs:HE,iridescence_fragment:GE,bumpmap_pars_fragment:VE,clipping_planes_fragment:kE,clipping_planes_pars_fragment:XE,clipping_planes_pars_vertex:WE,clipping_planes_vertex:qE,color_fragment:YE,color_pars_fragment:ZE,color_pars_vertex:jE,color_vertex:KE,common:QE,cube_uv_reflection_fragment:JE,defaultnormal_vertex:$E,displacementmap_pars_vertex:eb,displacementmap_vertex:tb,emissivemap_fragment:nb,emissivemap_pars_fragment:ib,colorspace_fragment:ab,colorspace_pars_fragment:sb,envmap_fragment:rb,envmap_common_pars_fragment:ob,envmap_pars_fragment:lb,envmap_pars_vertex:cb,envmap_physical_pars_fragment:xb,envmap_vertex:ub,fog_vertex:fb,fog_pars_vertex:db,fog_fragment:hb,fog_pars_fragment:pb,gradientmap_pars_fragment:mb,lightmap_pars_fragment:gb,lights_lambert_fragment:_b,lights_lambert_pars_fragment:vb,lights_pars_begin:Sb,lights_toon_fragment:Mb,lights_toon_pars_fragment:yb,lights_phong_fragment:Eb,lights_phong_pars_fragment:bb,lights_physical_fragment:Tb,lights_physical_pars_fragment:Ab,lights_fragment_begin:Rb,lights_fragment_maps:Cb,lights_fragment_end:wb,lightprobes_pars_fragment:Db,logdepthbuf_fragment:Nb,logdepthbuf_pars_fragment:Lb,logdepthbuf_pars_vertex:Ub,logdepthbuf_vertex:Ob,map_fragment:Pb,map_pars_fragment:Ib,map_particle_fragment:Fb,map_particle_pars_fragment:Bb,metalnessmap_fragment:zb,metalnessmap_pars_fragment:Hb,morphinstance_vertex:Gb,morphcolor_vertex:Vb,morphnormal_vertex:kb,morphtarget_pars_vertex:Xb,morphtarget_vertex:Wb,normal_fragment_begin:qb,normal_fragment_maps:Yb,normal_pars_fragment:Zb,normal_pars_vertex:jb,normal_vertex:Kb,normalmap_pars_fragment:Qb,clearcoat_normal_fragment_begin:Jb,clearcoat_normal_fragment_maps:$b,clearcoat_pars_fragment:e1,iridescence_pars_fragment:t1,opaque_fragment:n1,packing:i1,premultiplied_alpha_fragment:a1,project_vertex:s1,dithering_fragment:r1,dithering_pars_fragment:o1,roughnessmap_fragment:l1,roughnessmap_pars_fragment:c1,shadowmap_pars_fragment:u1,shadowmap_pars_vertex:f1,shadowmap_vertex:d1,shadowmask_pars_fragment:h1,skinbase_vertex:p1,skinning_pars_vertex:m1,skinning_vertex:g1,skinnormal_vertex:_1,specularmap_fragment:v1,specularmap_pars_fragment:S1,tonemapping_fragment:x1,tonemapping_pars_fragment:M1,transmission_fragment:y1,transmission_pars_fragment:E1,uv_pars_fragment:b1,uv_pars_vertex:T1,uv_vertex:A1,worldpos_vertex:R1,background_vert:C1,background_frag:w1,backgroundCube_vert:D1,backgroundCube_frag:N1,cube_vert:L1,cube_frag:U1,depth_vert:O1,depth_frag:P1,distance_vert:I1,distance_frag:F1,equirect_vert:B1,equirect_frag:z1,linedashed_vert:H1,linedashed_frag:G1,meshbasic_vert:V1,meshbasic_frag:k1,meshlambert_vert:X1,meshlambert_frag:W1,meshmatcap_vert:q1,meshmatcap_frag:Y1,meshnormal_vert:Z1,meshnormal_frag:j1,meshphong_vert:K1,meshphong_frag:Q1,meshphysical_vert:J1,meshphysical_frag:$1,meshtoon_vert:eT,meshtoon_frag:tT,points_vert:nT,points_frag:iT,shadow_vert:aT,shadow_frag:sT,sprite_vert:rT,sprite_frag:oT},Fe={common:{diffuse:{value:new Nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},envMapRotation:{value:new ct},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new Bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ee},probesMax:{value:new ee},probesResolution:{value:new ee}},points:{diffuse:{value:new Nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new Nt(16777215)},opacity:{value:1},center:{value:new Bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},$i={basic:{uniforms:Zn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:gt.meshbasic_vert,fragmentShader:gt.meshbasic_frag},lambert:{uniforms:Zn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new Nt(0)},envMapIntensity:{value:1}}]),vertexShader:gt.meshlambert_vert,fragmentShader:gt.meshlambert_frag},phong:{uniforms:Zn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new Nt(0)},specular:{value:new Nt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:gt.meshphong_vert,fragmentShader:gt.meshphong_frag},standard:{uniforms:Zn([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new Nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag},toon:{uniforms:Zn([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new Nt(0)}}]),vertexShader:gt.meshtoon_vert,fragmentShader:gt.meshtoon_frag},matcap:{uniforms:Zn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:gt.meshmatcap_vert,fragmentShader:gt.meshmatcap_frag},points:{uniforms:Zn([Fe.points,Fe.fog]),vertexShader:gt.points_vert,fragmentShader:gt.points_frag},dashed:{uniforms:Zn([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gt.linedashed_vert,fragmentShader:gt.linedashed_frag},depth:{uniforms:Zn([Fe.common,Fe.displacementmap]),vertexShader:gt.depth_vert,fragmentShader:gt.depth_frag},normal:{uniforms:Zn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:gt.meshnormal_vert,fragmentShader:gt.meshnormal_frag},sprite:{uniforms:Zn([Fe.sprite,Fe.fog]),vertexShader:gt.sprite_vert,fragmentShader:gt.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gt.background_vert,fragmentShader:gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ct}},vertexShader:gt.backgroundCube_vert,fragmentShader:gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gt.cube_vert,fragmentShader:gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gt.equirect_vert,fragmentShader:gt.equirect_frag},distance:{uniforms:Zn([Fe.common,Fe.displacementmap,{referencePosition:{value:new ee},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gt.distance_vert,fragmentShader:gt.distance_frag},shadow:{uniforms:Zn([Fe.lights,Fe.fog,{color:{value:new Nt(0)},opacity:{value:1}}]),vertexShader:gt.shadow_vert,fragmentShader:gt.shadow_frag}};$i.physical={uniforms:Zn([$i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new Bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new Nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new Bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new Nt(0)},specularColor:{value:new Nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new Bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag};const jc={r:0,b:0,g:0},lT=new pn,rS=new ct;rS.set(-1,0,0,0,1,0,0,0,1);function cT(a,e,i,r,o,c){const u=new Nt(0);let h=o===!0?0:1,m,p,_=null,v=0,g=null;function S(O){let F=O.isScene===!0?O.background:null;if(F&&F.isTexture){const w=O.backgroundBlurriness>0;F=e.get(F,w)}return F}function E(O){let F=!1;const w=S(O);w===null?M(u,h):w&&w.isColor&&(M(w,1),F=!0);const P=a.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,c):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(a.autoClear||F)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function C(O,F){const w=S(F);w&&(w.isCubeTexture||w.mapping===du)?(p===void 0&&(p=new Ni(new vl(1,1,1),new Xi({name:"BackgroundCubeMaterial",uniforms:so($i.backgroundCube.uniforms),vertexShader:$i.backgroundCube.vertexShader,fragmentShader:$i.backgroundCube.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(P,D,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),p.material.uniforms.envMap.value=w,p.material.uniforms.backgroundBlurriness.value=F.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(lT.makeRotationFromEuler(F.backgroundRotation)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(rS),p.material.toneMapped=Ct.getTransfer(w.colorSpace)!==Yt,(_!==w||v!==w.version||g!==a.toneMapping)&&(p.material.needsUpdate=!0,_=w,v=w.version,g=a.toneMapping),p.layers.enableAll(),O.unshift(p,p.geometry,p.material,0,0,null)):w&&w.isTexture&&(m===void 0&&(m=new Ni(new Qs(2,2),new Xi({name:"BackgroundMaterial",uniforms:so($i.background.uniforms),vertexShader:$i.background.vertexShader,fragmentShader:$i.background.fragmentShader,side:Oa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(m)),m.material.uniforms.t2D.value=w,m.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,m.material.toneMapped=Ct.getTransfer(w.colorSpace)!==Yt,w.matrixAutoUpdate===!0&&w.updateMatrix(),m.material.uniforms.uvTransform.value.copy(w.matrix),(_!==w||v!==w.version||g!==a.toneMapping)&&(m.material.needsUpdate=!0,_=w,v=w.version,g=a.toneMapping),m.layers.enableAll(),O.unshift(m,m.geometry,m.material,0,0,null))}function M(O,F){O.getRGB(jc,nS(a)),i.buffers.color.setClear(jc.r,jc.g,jc.b,F,c)}function y(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return u},setClearColor:function(O,F=1){u.set(O),h=F,M(u,h)},getClearAlpha:function(){return h},setClearAlpha:function(O){h=O,M(u,h)},render:E,addToRenderList:C,dispose:y}}function uT(a,e){const i=a.getParameter(a.MAX_VERTEX_ATTRIBS),r={},o=g(null);let c=o,u=!1;function h(z,k,ce,ue,Q){let B=!1;const G=v(z,ue,ce,k);c!==G&&(c=G,p(c.object)),B=S(z,ue,ce,Q),B&&E(z,ue,ce,Q),Q!==null&&e.update(Q,a.ELEMENT_ARRAY_BUFFER),(B||u)&&(u=!1,w(z,k,ce,ue),Q!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function m(){return a.createVertexArray()}function p(z){return a.bindVertexArray(z)}function _(z){return a.deleteVertexArray(z)}function v(z,k,ce,ue){const Q=ue.wireframe===!0;let B=r[k.id];B===void 0&&(B={},r[k.id]=B);const G=z.isInstancedMesh===!0?z.id:0;let Y=B[G];Y===void 0&&(Y={},B[G]=Y);let fe=Y[ce.id];fe===void 0&&(fe={},Y[ce.id]=fe);let xe=fe[Q];return xe===void 0&&(xe=g(m()),fe[Q]=xe),xe}function g(z){const k=[],ce=[],ue=[];for(let Q=0;Q<i;Q++)k[Q]=0,ce[Q]=0,ue[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:ce,attributeDivisors:ue,object:z,attributes:{},index:null}}function S(z,k,ce,ue){const Q=c.attributes,B=k.attributes;let G=0;const Y=ce.getAttributes();for(const fe in Y)if(Y[fe].location>=0){const N=Q[fe];let j=B[fe];if(j===void 0&&(fe==="instanceMatrix"&&z.instanceMatrix&&(j=z.instanceMatrix),fe==="instanceColor"&&z.instanceColor&&(j=z.instanceColor)),N===void 0||N.attribute!==j||j&&N.data!==j.data)return!0;G++}return c.attributesNum!==G||c.index!==ue}function E(z,k,ce,ue){const Q={},B=k.attributes;let G=0;const Y=ce.getAttributes();for(const fe in Y)if(Y[fe].location>=0){let N=B[fe];N===void 0&&(fe==="instanceMatrix"&&z.instanceMatrix&&(N=z.instanceMatrix),fe==="instanceColor"&&z.instanceColor&&(N=z.instanceColor));const j={};j.attribute=N,N&&N.data&&(j.data=N.data),Q[fe]=j,G++}c.attributes=Q,c.attributesNum=G,c.index=ue}function C(){const z=c.newAttributes;for(let k=0,ce=z.length;k<ce;k++)z[k]=0}function M(z){y(z,0)}function y(z,k){const ce=c.newAttributes,ue=c.enabledAttributes,Q=c.attributeDivisors;ce[z]=1,ue[z]===0&&(a.enableVertexAttribArray(z),ue[z]=1),Q[z]!==k&&(a.vertexAttribDivisor(z,k),Q[z]=k)}function O(){const z=c.newAttributes,k=c.enabledAttributes;for(let ce=0,ue=k.length;ce<ue;ce++)k[ce]!==z[ce]&&(a.disableVertexAttribArray(ce),k[ce]=0)}function F(z,k,ce,ue,Q,B,G){G===!0?a.vertexAttribIPointer(z,k,ce,Q,B):a.vertexAttribPointer(z,k,ce,ue,Q,B)}function w(z,k,ce,ue){C();const Q=ue.attributes,B=ce.getAttributes(),G=k.defaultAttributeValues;for(const Y in B){const fe=B[Y];if(fe.location>=0){let xe=Q[Y];if(xe===void 0&&(Y==="instanceMatrix"&&z.instanceMatrix&&(xe=z.instanceMatrix),Y==="instanceColor"&&z.instanceColor&&(xe=z.instanceColor)),xe!==void 0){const N=xe.normalized,j=xe.itemSize,ve=e.get(xe);if(ve===void 0)continue;const Te=ve.buffer,Ue=ve.type,ie=ve.bytesPerElement,ye=Ue===a.INT||Ue===a.UNSIGNED_INT||xe.gpuType===cp;if(xe.isInterleavedBufferAttribute){const Ee=xe.data,ze=Ee.stride,it=xe.offset;if(Ee.isInstancedInterleavedBuffer){for(let Qe=0;Qe<fe.locationSize;Qe++)y(fe.location+Qe,Ee.meshPerAttribute);z.isInstancedMesh!==!0&&ue._maxInstanceCount===void 0&&(ue._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let Qe=0;Qe<fe.locationSize;Qe++)M(fe.location+Qe);a.bindBuffer(a.ARRAY_BUFFER,Te);for(let Qe=0;Qe<fe.locationSize;Qe++)F(fe.location+Qe,j/fe.locationSize,Ue,N,ze*ie,(it+j/fe.locationSize*Qe)*ie,ye)}else{if(xe.isInstancedBufferAttribute){for(let Ee=0;Ee<fe.locationSize;Ee++)y(fe.location+Ee,xe.meshPerAttribute);z.isInstancedMesh!==!0&&ue._maxInstanceCount===void 0&&(ue._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let Ee=0;Ee<fe.locationSize;Ee++)M(fe.location+Ee);a.bindBuffer(a.ARRAY_BUFFER,Te);for(let Ee=0;Ee<fe.locationSize;Ee++)F(fe.location+Ee,j/fe.locationSize,Ue,N,j*ie,j/fe.locationSize*Ee*ie,ye)}}else if(G!==void 0){const N=G[Y];if(N!==void 0)switch(N.length){case 2:a.vertexAttrib2fv(fe.location,N);break;case 3:a.vertexAttrib3fv(fe.location,N);break;case 4:a.vertexAttrib4fv(fe.location,N);break;default:a.vertexAttrib1fv(fe.location,N)}}}}O()}function P(){U();for(const z in r){const k=r[z];for(const ce in k){const ue=k[ce];for(const Q in ue){const B=ue[Q];for(const G in B)_(B[G].object),delete B[G];delete ue[Q]}}delete r[z]}}function D(z){if(r[z.id]===void 0)return;const k=r[z.id];for(const ce in k){const ue=k[ce];for(const Q in ue){const B=ue[Q];for(const G in B)_(B[G].object),delete B[G];delete ue[Q]}}delete r[z.id]}function I(z){for(const k in r){const ce=r[k];for(const ue in ce){const Q=ce[ue];if(Q[z.id]===void 0)continue;const B=Q[z.id];for(const G in B)_(B[G].object),delete B[G];delete Q[z.id]}}}function T(z){for(const k in r){const ce=r[k],ue=z.isInstancedMesh===!0?z.id:0,Q=ce[ue];if(Q!==void 0){for(const B in Q){const G=Q[B];for(const Y in G)_(G[Y].object),delete G[Y];delete Q[B]}delete ce[ue],Object.keys(ce).length===0&&delete r[k]}}}function U(){X(),u=!0,c!==o&&(c=o,p(c.object))}function X(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:U,resetDefaultState:X,dispose:P,releaseStatesOfGeometry:D,releaseStatesOfObject:T,releaseStatesOfProgram:I,initAttributes:C,enableAttribute:M,disableUnusedAttributes:O}}function fT(a,e,i){let r;function o(m){r=m}function c(m,p){a.drawArrays(r,m,p),i.update(p,r,1)}function u(m,p,_){_!==0&&(a.drawArraysInstanced(r,m,p,_),i.update(p,r,_))}function h(m,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,p,0,_);let g=0;for(let S=0;S<_;S++)g+=p[S];i.update(g,r,1)}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=h}function dT(a,e,i,r){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");o=a.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(I){return!(I!==ki&&r.convert(I)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(I){const T=I===Pa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==wi&&r.convert(I)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==ta&&!T)}function m(I){if(I==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(rt("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const v=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&g===!1&&rt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const S=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),E=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=a.getParameter(a.MAX_TEXTURE_SIZE),M=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),y=a.getParameter(a.MAX_VERTEX_ATTRIBS),O=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),F=a.getParameter(a.MAX_VARYING_VECTORS),w=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),P=a.getParameter(a.MAX_SAMPLES),D=a.getParameter(a.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:u,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:g,maxTextures:S,maxVertexTextures:E,maxTextureSize:C,maxCubemapSize:M,maxAttributes:y,maxVertexUniforms:O,maxVaryings:F,maxFragmentUniforms:w,maxSamples:P,samples:D}}function hT(a){const e=this;let i=null,r=0,o=!1,c=!1;const u=new Ys,h=new ct,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,g){const S=v.length!==0||g||r!==0||o;return o=g,r=v.length,S},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,g){i=_(v,g,0)},this.setState=function(v,g,S){const E=v.clippingPlanes,C=v.clipIntersection,M=v.clipShadows,y=a.get(v);if(!o||E===null||E.length===0||c&&!M)c?_(null):p();else{const O=c?0:r,F=O*4;let w=y.clippingState||null;m.value=w,w=_(E,g,F,S);for(let P=0;P!==F;++P)w[P]=i[P];y.clippingState=w,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=O}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(v,g,S,E){const C=v!==null?v.length:0;let M=null;if(C!==0){if(M=m.value,E!==!0||M===null){const y=S+C*4,O=g.matrixWorldInverse;h.getNormalMatrix(O),(M===null||M.length<y)&&(M=new Float32Array(y));for(let F=0,w=S;F!==C;++F,w+=4)u.copy(v[F]).applyMatrix4(O,h),u.normal.toArray(M,w),M[w+3]=u.constant}m.value=M,m.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,M}}const Ms=4,Y_=[.125,.215,.35,.446,.526,.582],js=20,pT=256,il=new aS,Z_=new Nt;let rh=null,oh=0,lh=0,ch=!1;const mT=new ee;class j_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,o=100,c={}){const{size:u=256,position:h=mT}=c;rh=this._renderer.getRenderTarget(),oh=this._renderer.getActiveCubeFace(),lh=this._renderer.getActiveMipmapLevel(),ch=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,o,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=J_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Q_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(rh,oh,lh),this._renderer.xr.enabled=ch,e.scissorTest=!1,Zr(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Js||e.mapping===io?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),rh=this._renderer.getRenderTarget(),oh=this._renderer.getActiveCubeFace(),lh=this._renderer.getActiveMipmapLevel(),ch=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:bn,minFilter:bn,generateMipmaps:!1,type:Pa,format:ki,colorSpace:ru,depthBuffer:!1},o=K_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=K_(e,i,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=gT(c)),this._blurMaterial=vT(c,e,i),this._ggxMaterial=_T(c,e,i)}return o}_compileMaterial(e){const i=new Ni(new Li,e);this._renderer.compile(i,il)}_sceneToCubeUV(e,i,r,o,c){const m=new Ci(90,1,i,r),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,S=v.toneMapping;v.getClearColor(Z_),v.toneMapping=ia,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(o),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ni(new vl,new uu({name:"PMREM.Background",side:si,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,M=C.material;let y=!1;const O=e.background;O?O.isColor&&(M.color.copy(O),e.background=null,y=!0):(M.color.copy(Z_),y=!0);for(let F=0;F<6;F++){const w=F%3;w===0?(m.up.set(0,p[F],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[F],c.y,c.z)):w===1?(m.up.set(0,0,p[F]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[F],c.z)):(m.up.set(0,p[F],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[F]));const P=this._cubeSize;Zr(o,w*P,F>2?P:0,P,P),v.setRenderTarget(o),y&&v.render(C,m),v.render(e,m)}v.toneMapping=S,v.autoClear=g,e.background=O}_textureToCubeUV(e,i){const r=this._renderer,o=e.mapping===Js||e.mapping===io;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=J_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Q_());const c=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=c;const h=c.uniforms;h.envMap.value=e;const m=this._cubeSize;Zr(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(u,il)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=r}_applyGGXFilter(e,i,r){const o=this._renderer,c=this._pingPongRenderTarget,u=this._ggxMaterial,h=this._lodMeshes[r];h.material=u;const m=u.uniforms,p=r/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),v=Math.sqrt(p*p-_*_),g=0+p*1.25,S=v*g,{_lodMax:E}=this,C=this._sizeLods[r],M=3*C*(r>E-Ms?r-E+Ms:0),y=4*(this._cubeSize-C);m.envMap.value=e.texture,m.roughness.value=S,m.mipInt.value=E-i,Zr(c,M,y,3*C,2*C),o.setRenderTarget(c),o.render(h,il),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-r,Zr(e,M,y,3*C,2*C),o.setRenderTarget(e),o.render(h,il)}_blur(e,i,r,o,c){const u=this._pingPongRenderTarget;this._halfBlur(e,u,i,r,o,"latitudinal",c),this._halfBlur(u,e,r,r,o,"longitudinal",c)}_halfBlur(e,i,r,o,c,u,h){const m=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Ut("blur direction must be either latitudinal or longitudinal!");const _=3,v=this._lodMeshes[o];v.material=p;const g=p.uniforms,S=this._sizeLods[r]-1,E=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*js-1),C=c/E,M=isFinite(c)?1+Math.floor(_*C):js;M>js&&rt(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${js}`);const y=[];let O=0;for(let I=0;I<js;++I){const T=I/C,U=Math.exp(-T*T/2);y.push(U),I===0?O+=U:I<M&&(O+=2*U)}for(let I=0;I<y.length;I++)y[I]=y[I]/O;g.envMap.value=e.texture,g.samples.value=M,g.weights.value=y,g.latitudinal.value=u==="latitudinal",h&&(g.poleAxis.value=h);const{_lodMax:F}=this;g.dTheta.value=E,g.mipInt.value=F-r;const w=this._sizeLods[o],P=3*w*(o>F-Ms?o-F+Ms:0),D=4*(this._cubeSize-w);Zr(i,P,D,3*w,2*w),m.setRenderTarget(i),m.render(v,il)}}function gT(a){const e=[],i=[],r=[];let o=a;const c=a-Ms+1+Y_.length;for(let u=0;u<c;u++){const h=Math.pow(2,o);e.push(h);let m=1/h;u>a-Ms?m=Y_[u-a+Ms-1]:u===0&&(m=0),i.push(m);const p=1/(h-2),_=-p,v=1+p,g=[_,_,v,_,v,v,_,_,v,v,_,v],S=6,E=6,C=3,M=2,y=1,O=new Float32Array(C*E*S),F=new Float32Array(M*E*S),w=new Float32Array(y*E*S);for(let D=0;D<S;D++){const I=D%3*2/3-1,T=D>2?0:-1,U=[I,T,0,I+2/3,T,0,I+2/3,T+1,0,I,T,0,I+2/3,T+1,0,I,T+1,0];O.set(U,C*E*D),F.set(g,M*E*D);const X=[D,D,D,D,D,D];w.set(X,y*E*D)}const P=new Li;P.setAttribute("position",new sa(O,C)),P.setAttribute("uv",new sa(F,M)),P.setAttribute("faceIndex",new sa(w,y)),r.push(new Ni(P,null)),o>Ms&&o--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function K_(a,e,i){const r=new aa(a,e,i);return r.texture.mapping=du,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Zr(a,e,i,r,o){a.viewport.set(e,i,r,o),a.scissor.set(e,i,r,o)}function _T(a,e,i){return new Xi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:pT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:pu(),fragmentShader:`

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
		`,blending:La,depthTest:!1,depthWrite:!1})}function vT(a,e,i){const r=new Float32Array(js),o=new ee(0,1,0);return new Xi({name:"SphericalGaussianBlur",defines:{n:js,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:pu(),fragmentShader:`

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
		`,blending:La,depthTest:!1,depthWrite:!1})}function Q_(){return new Xi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pu(),fragmentShader:`

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
		`,blending:La,depthTest:!1,depthWrite:!1})}function J_(){return new Xi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:La,depthTest:!1,depthWrite:!1})}function pu(){return`

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
	`}class oS extends aa{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new $v(o),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new vl(5,5,5),c=new Xi({name:"CubemapFromEquirect",uniforms:so(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:si,blending:La});c.uniforms.tEquirect.value=i;const u=new Ni(o,c),h=i.minFilter;return i.minFilter===xs&&(i.minFilter=bn),new bE(1,10,this).update(e,u),i.minFilter=h,u.geometry.dispose(),u.material.dispose(),this}clear(e,i=!0,r=!0,o=!0){const c=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(i,r,o);e.setRenderTarget(c)}}function ST(a){let e=new WeakMap,i=new WeakMap,r=null;function o(g,S=!1){return g==null?null:S?u(g):c(g)}function c(g){if(g&&g.isTexture){const S=g.mapping;if(S===Ld||S===Ud)if(e.has(g)){const E=e.get(g).texture;return h(E,g.mapping)}else{const E=g.image;if(E&&E.height>0){const C=new oS(E.height);return C.fromEquirectangularTexture(a,g),e.set(g,C),g.addEventListener("dispose",p),h(C.texture,g.mapping)}else return null}}return g}function u(g){if(g&&g.isTexture){const S=g.mapping,E=S===Ld||S===Ud,C=S===Js||S===io;if(E||C){let M=i.get(g);const y=M!==void 0?M.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==y)return r===null&&(r=new j_(a)),M=E?r.fromEquirectangular(g,M):r.fromCubemap(g,M),M.texture.pmremVersion=g.pmremVersion,i.set(g,M),M.texture;if(M!==void 0)return M.texture;{const O=g.image;return E&&O&&O.height>0||C&&O&&m(O)?(r===null&&(r=new j_(a)),M=E?r.fromEquirectangular(g):r.fromCubemap(g),M.texture.pmremVersion=g.pmremVersion,i.set(g,M),g.addEventListener("dispose",_),M.texture):null}}}return g}function h(g,S){return S===Ld?g.mapping=Js:S===Ud&&(g.mapping=io),g}function m(g){let S=0;const E=6;for(let C=0;C<E;C++)g[C]!==void 0&&S++;return S===E}function p(g){const S=g.target;S.removeEventListener("dispose",p);const E=e.get(S);E!==void 0&&(e.delete(S),E.dispose())}function _(g){const S=g.target;S.removeEventListener("dispose",_);const E=i.get(S);E!==void 0&&(i.delete(S),E.dispose())}function v(){e=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:v}}function xT(a){const e={};function i(r){if(e[r]!==void 0)return e[r];const o=a.getExtension(r);return e[r]=o,o}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const o=i(r);return o===null&&$r("WebGLRenderer: "+r+" extension not supported."),o}}}function MT(a,e,i,r){const o={},c=new WeakMap;function u(v){const g=v.target;g.index!==null&&e.remove(g.index);for(const E in g.attributes)e.remove(g.attributes[E]);g.removeEventListener("dispose",u),delete o[g.id];const S=c.get(g);S&&(e.remove(S),c.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function h(v,g){return o[g.id]===!0||(g.addEventListener("dispose",u),o[g.id]=!0,i.memory.geometries++),g}function m(v){const g=v.attributes;for(const S in g)e.update(g[S],a.ARRAY_BUFFER)}function p(v){const g=[],S=v.index,E=v.attributes.position;let C=0;if(E===void 0)return;if(S!==null){const O=S.array;C=S.version;for(let F=0,w=O.length;F<w;F+=3){const P=O[F+0],D=O[F+1],I=O[F+2];g.push(P,D,D,I,I,P)}}else{const O=E.array;C=E.version;for(let F=0,w=O.length/3-1;F<w;F+=3){const P=F+0,D=F+1,I=F+2;g.push(P,D,D,I,I,P)}}const M=new(E.count>=65535?Qv:Kv)(g,1);M.version=C;const y=c.get(v);y&&e.remove(y),c.set(v,M)}function _(v){const g=c.get(v);if(g){const S=v.index;S!==null&&g.version<S.version&&p(v)}else p(v);return c.get(v)}return{get:h,update:m,getWireframeAttribute:_}}function yT(a,e,i){let r;function o(v){r=v}let c,u;function h(v){c=v.type,u=v.bytesPerElement}function m(v,g){a.drawElements(r,g,c,v*u),i.update(g,r,1)}function p(v,g,S){S!==0&&(a.drawElementsInstanced(r,g,c,v*u,S),i.update(g,r,S))}function _(v,g,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,g,0,c,v,0,S);let C=0;for(let M=0;M<S;M++)C+=g[M];i.update(C,r,1)}this.setMode=o,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=_}function ET(a){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,u,h){switch(i.calls++,u){case a.TRIANGLES:i.triangles+=h*(c/3);break;case a.LINES:i.lines+=h*(c/2);break;case a.LINE_STRIP:i.lines+=h*(c-1);break;case a.LINE_LOOP:i.lines+=h*c;break;case a.POINTS:i.points+=h*c;break;default:Ut("WebGLInfo: Unknown draw mode:",u);break}}function o(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:o,update:r}}function bT(a,e,i){const r=new WeakMap,o=new fn;function c(u,h,m){const p=u.morphTargetInfluences,_=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=_!==void 0?_.length:0;let g=r.get(h);if(g===void 0||g.count!==v){let X=function(){T.dispose(),r.delete(h),h.removeEventListener("dispose",X)};var S=X;g!==void 0&&g.texture.dispose();const E=h.morphAttributes.position!==void 0,C=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,y=h.morphAttributes.position||[],O=h.morphAttributes.normal||[],F=h.morphAttributes.color||[];let w=0;E===!0&&(w=1),C===!0&&(w=2),M===!0&&(w=3);let P=h.attributes.position.count*w,D=1;P>e.maxTextureSize&&(D=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const I=new Float32Array(P*D*4*v),T=new Yv(I,P,D,v);T.type=ta,T.needsUpdate=!0;const U=w*4;for(let z=0;z<v;z++){const k=y[z],ce=O[z],ue=F[z],Q=P*D*4*z;for(let B=0;B<k.count;B++){const G=B*U;E===!0&&(o.fromBufferAttribute(k,B),I[Q+G+0]=o.x,I[Q+G+1]=o.y,I[Q+G+2]=o.z,I[Q+G+3]=0),C===!0&&(o.fromBufferAttribute(ce,B),I[Q+G+4]=o.x,I[Q+G+5]=o.y,I[Q+G+6]=o.z,I[Q+G+7]=0),M===!0&&(o.fromBufferAttribute(ue,B),I[Q+G+8]=o.x,I[Q+G+9]=o.y,I[Q+G+10]=o.z,I[Q+G+11]=ue.itemSize===4?o.w:1)}}g={count:v,texture:T,size:new Bt(P,D)},r.set(h,g),h.addEventListener("dispose",X)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)m.getUniforms().setValue(a,"morphTexture",u.morphTexture,i);else{let E=0;for(let M=0;M<p.length;M++)E+=p[M];const C=h.morphTargetsRelative?1:1-E;m.getUniforms().setValue(a,"morphTargetBaseInfluence",C),m.getUniforms().setValue(a,"morphTargetInfluences",p)}m.getUniforms().setValue(a,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(a,"morphTargetsTextureSize",g.size)}return{update:c}}function TT(a,e,i,r,o){let c=new WeakMap;function u(p){const _=o.render.frame,v=p.geometry,g=e.get(p,v);if(c.get(g)!==_&&(e.update(g),c.set(g,_)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),c.get(p)!==_&&(i.update(p.instanceMatrix,a.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,a.ARRAY_BUFFER),c.set(p,_))),p.isSkinnedMesh){const S=p.skeleton;c.get(S)!==_&&(S.update(),c.set(S,_))}return g}function h(){c=new WeakMap}function m(p){const _=p.target;_.removeEventListener("dispose",m),r.releaseStatesOfObject(_),i.remove(_.instanceMatrix),_.instanceColor!==null&&i.remove(_.instanceColor)}return{update:u,dispose:h}}const AT={[Nv]:"LINEAR_TONE_MAPPING",[Lv]:"REINHARD_TONE_MAPPING",[Uv]:"CINEON_TONE_MAPPING",[Ov]:"ACES_FILMIC_TONE_MAPPING",[Iv]:"AGX_TONE_MAPPING",[Fv]:"NEUTRAL_TONE_MAPPING",[Pv]:"CUSTOM_TONE_MAPPING"};function RT(a,e,i,r,o,c){const u=new aa(e,i,{type:a,depthBuffer:o,stencilBuffer:c,samples:r?4:0,depthTexture:o?new ao(e,i):void 0}),h=new aa(e,i,{type:Pa,depthBuffer:!1,stencilBuffer:!1}),m=new Li;m.setAttribute("position",new Di([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new Di([0,2,0,0,2,0],2));const p=new ME({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),_=new Ni(m,p),v=new aS(-1,1,1,-1,0,1);let g=null,S=null,E=!1,C,M=null,y=[],O=!1;this.setSize=function(F,w){u.setSize(F,w),h.setSize(F,w);for(let P=0;P<y.length;P++){const D=y[P];D.setSize&&D.setSize(F,w)}},this.setEffects=function(F){y=F,O=y.length>0&&y[0].isRenderPass===!0;const w=u.width,P=u.height;for(let D=0;D<y.length;D++){const I=y[D];I.setSize&&I.setSize(w,P)}},this.begin=function(F,w){if(E||F.toneMapping===ia&&y.length===0)return!1;if(M=w,w!==null){const P=w.width,D=w.height;(u.width!==P||u.height!==D)&&this.setSize(P,D)}return O===!1&&F.setRenderTarget(u),C=F.toneMapping,F.toneMapping=ia,!0},this.hasRenderPass=function(){return O},this.end=function(F,w){F.toneMapping=C,E=!0;let P=u,D=h;for(let I=0;I<y.length;I++){const T=y[I];if(T.enabled!==!1&&(T.render(F,D,P,w),T.needsSwap!==!1)){const U=P;P=D,D=U}}if(g!==F.outputColorSpace||S!==F.toneMapping){g=F.outputColorSpace,S=F.toneMapping,p.defines={},Ct.getTransfer(g)===Yt&&(p.defines.SRGB_TRANSFER="");const I=AT[S];I&&(p.defines[I]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=P.texture,F.setRenderTarget(M),F.render(_,v),M=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){u.depthTexture&&u.depthTexture.dispose(),u.dispose(),h.dispose(),m.dispose(),p.dispose()}}const lS=new Xn,ap=new ao(1,1),cS=new Yv,uS=new jy,fS=new $v,$_=[],ev=[],tv=new Float32Array(16),nv=new Float32Array(9),iv=new Float32Array(4);function lo(a,e,i){const r=a[0];if(r<=0||r>0)return a;const o=e*i;let c=$_[o];if(c===void 0&&(c=new Float32Array(o),$_[o]=c),e!==0){r.toArray(c,0);for(let u=1,h=0;u!==e;++u)h+=i,a[u].toArray(c,h)}return c}function Cn(a,e){if(a.length!==e.length)return!1;for(let i=0,r=a.length;i<r;i++)if(a[i]!==e[i])return!1;return!0}function wn(a,e){for(let i=0,r=e.length;i<r;i++)a[i]=e[i]}function mu(a,e){let i=ev[e];i===void 0&&(i=new Int32Array(e),ev[e]=i);for(let r=0;r!==e;++r)i[r]=a.allocateTextureUnit();return i}function CT(a,e){const i=this.cache;i[0]!==e&&(a.uniform1f(this.addr,e),i[0]=e)}function wT(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Cn(i,e))return;a.uniform2fv(this.addr,e),wn(i,e)}}function DT(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Cn(i,e))return;a.uniform3fv(this.addr,e),wn(i,e)}}function NT(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Cn(i,e))return;a.uniform4fv(this.addr,e),wn(i,e)}}function LT(a,e){const i=this.cache,r=e.elements;if(r===void 0){if(Cn(i,e))return;a.uniformMatrix2fv(this.addr,!1,e),wn(i,e)}else{if(Cn(i,r))return;iv.set(r),a.uniformMatrix2fv(this.addr,!1,iv),wn(i,r)}}function UT(a,e){const i=this.cache,r=e.elements;if(r===void 0){if(Cn(i,e))return;a.uniformMatrix3fv(this.addr,!1,e),wn(i,e)}else{if(Cn(i,r))return;nv.set(r),a.uniformMatrix3fv(this.addr,!1,nv),wn(i,r)}}function OT(a,e){const i=this.cache,r=e.elements;if(r===void 0){if(Cn(i,e))return;a.uniformMatrix4fv(this.addr,!1,e),wn(i,e)}else{if(Cn(i,r))return;tv.set(r),a.uniformMatrix4fv(this.addr,!1,tv),wn(i,r)}}function PT(a,e){const i=this.cache;i[0]!==e&&(a.uniform1i(this.addr,e),i[0]=e)}function IT(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Cn(i,e))return;a.uniform2iv(this.addr,e),wn(i,e)}}function FT(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Cn(i,e))return;a.uniform3iv(this.addr,e),wn(i,e)}}function BT(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Cn(i,e))return;a.uniform4iv(this.addr,e),wn(i,e)}}function zT(a,e){const i=this.cache;i[0]!==e&&(a.uniform1ui(this.addr,e),i[0]=e)}function HT(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Cn(i,e))return;a.uniform2uiv(this.addr,e),wn(i,e)}}function GT(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Cn(i,e))return;a.uniform3uiv(this.addr,e),wn(i,e)}}function VT(a,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Cn(i,e))return;a.uniform4uiv(this.addr,e),wn(i,e)}}function kT(a,e,i){const r=this.cache,o=i.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o);let c;this.type===a.SAMPLER_2D_SHADOW?(ap.compareFunction=i.isReversedDepthBuffer()?gp:mp,c=ap):c=lS,i.setTexture2D(e||c,o)}function XT(a,e,i){const r=this.cache,o=i.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),i.setTexture3D(e||uS,o)}function WT(a,e,i){const r=this.cache,o=i.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),i.setTextureCube(e||fS,o)}function qT(a,e,i){const r=this.cache,o=i.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),i.setTexture2DArray(e||cS,o)}function YT(a){switch(a){case 5126:return CT;case 35664:return wT;case 35665:return DT;case 35666:return NT;case 35674:return LT;case 35675:return UT;case 35676:return OT;case 5124:case 35670:return PT;case 35667:case 35671:return IT;case 35668:case 35672:return FT;case 35669:case 35673:return BT;case 5125:return zT;case 36294:return HT;case 36295:return GT;case 36296:return VT;case 35678:case 36198:case 36298:case 36306:case 35682:return kT;case 35679:case 36299:case 36307:return XT;case 35680:case 36300:case 36308:case 36293:return WT;case 36289:case 36303:case 36311:case 36292:return qT}}function ZT(a,e){a.uniform1fv(this.addr,e)}function jT(a,e){const i=lo(e,this.size,2);a.uniform2fv(this.addr,i)}function KT(a,e){const i=lo(e,this.size,3);a.uniform3fv(this.addr,i)}function QT(a,e){const i=lo(e,this.size,4);a.uniform4fv(this.addr,i)}function JT(a,e){const i=lo(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,i)}function $T(a,e){const i=lo(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,i)}function eA(a,e){const i=lo(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,i)}function tA(a,e){a.uniform1iv(this.addr,e)}function nA(a,e){a.uniform2iv(this.addr,e)}function iA(a,e){a.uniform3iv(this.addr,e)}function aA(a,e){a.uniform4iv(this.addr,e)}function sA(a,e){a.uniform1uiv(this.addr,e)}function rA(a,e){a.uniform2uiv(this.addr,e)}function oA(a,e){a.uniform3uiv(this.addr,e)}function lA(a,e){a.uniform4uiv(this.addr,e)}function cA(a,e,i){const r=this.cache,o=e.length,c=mu(i,o);Cn(r,c)||(a.uniform1iv(this.addr,c),wn(r,c));let u;this.type===a.SAMPLER_2D_SHADOW?u=ap:u=lS;for(let h=0;h!==o;++h)i.setTexture2D(e[h]||u,c[h])}function uA(a,e,i){const r=this.cache,o=e.length,c=mu(i,o);Cn(r,c)||(a.uniform1iv(this.addr,c),wn(r,c));for(let u=0;u!==o;++u)i.setTexture3D(e[u]||uS,c[u])}function fA(a,e,i){const r=this.cache,o=e.length,c=mu(i,o);Cn(r,c)||(a.uniform1iv(this.addr,c),wn(r,c));for(let u=0;u!==o;++u)i.setTextureCube(e[u]||fS,c[u])}function dA(a,e,i){const r=this.cache,o=e.length,c=mu(i,o);Cn(r,c)||(a.uniform1iv(this.addr,c),wn(r,c));for(let u=0;u!==o;++u)i.setTexture2DArray(e[u]||cS,c[u])}function hA(a){switch(a){case 5126:return ZT;case 35664:return jT;case 35665:return KT;case 35666:return QT;case 35674:return JT;case 35675:return $T;case 35676:return eA;case 5124:case 35670:return tA;case 35667:case 35671:return nA;case 35668:case 35672:return iA;case 35669:case 35673:return aA;case 5125:return sA;case 36294:return rA;case 36295:return oA;case 36296:return lA;case 35678:case 36198:case 36298:case 36306:case 35682:return cA;case 35679:case 36299:case 36307:return uA;case 35680:case 36300:case 36308:case 36293:return fA;case 36289:case 36303:case 36311:case 36292:return dA}}class pA{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=YT(i.type)}}class mA{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=hA(i.type)}}class gA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const h=o[c];h.setValue(e,i[h.id],r)}}}const uh=/(\w+)(\])?(\[|\.)?/g;function av(a,e){a.seq.push(e),a.map[e.id]=e}function _A(a,e,i){const r=a.name,o=r.length;for(uh.lastIndex=0;;){const c=uh.exec(r),u=uh.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&u+2===o){av(i,p===void 0?new pA(h,a,e):new mA(h,a,e));break}else{let v=i.map[h];v===void 0&&(v=new gA(h),av(i,v)),i=v}}}class iu{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const h=e.getActiveUniform(i,u),m=e.getUniformLocation(i,h.name);_A(h,m,this)}const o=[],c=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):c.push(u);o.length>0&&(this.seq=o.concat(c))}setValue(e,i,r,o){const c=this.map[i];c!==void 0&&c.setValue(e,r,o)}setOptional(e,i,r){const o=i[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,i,r,o){for(let c=0,u=i.length;c!==u;++c){const h=i[c],m=r[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,o)}}static seqWithValue(e,i){const r=[];for(let o=0,c=e.length;o!==c;++o){const u=e[o];u.id in i&&r.push(u)}return r}}function sv(a,e,i){const r=a.createShader(e);return a.shaderSource(r,i),a.compileShader(r),r}const vA=37297;let SA=0;function xA(a,e){const i=a.split(`
`),r=[],o=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let u=o;u<c;u++){const h=u+1;r.push(`${h===e?">":" "} ${h}: ${i[u]}`)}return r.join(`
`)}const rv=new ct;function MA(a){Ct._getMatrix(rv,Ct.workingColorSpace,a);const e=`mat3( ${rv.elements.map(i=>i.toFixed(4))} )`;switch(Ct.getTransfer(a)){case ou:return[e,"LinearTransferOETF"];case Yt:return[e,"sRGBTransferOETF"];default:return rt("WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function ov(a,e,i){const r=a.getShaderParameter(e,a.COMPILE_STATUS),c=(a.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const h=parseInt(u[1]);return i.toUpperCase()+`

`+c+`

`+xA(a.getShaderSource(e),h)}else return c}function yA(a,e){const i=MA(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const EA={[Nv]:"Linear",[Lv]:"Reinhard",[Uv]:"Cineon",[Ov]:"ACESFilmic",[Iv]:"AgX",[Fv]:"Neutral",[Pv]:"Custom"};function bA(a,e){const i=EA[e];return i===void 0?(rt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+a+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+a+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Kc=new ee;function TA(){Ct.getLuminanceCoefficients(Kc);const a=Kc.x.toFixed(4),e=Kc.y.toFixed(4),i=Kc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function AA(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ol).join(`
`)}function RA(a){const e=[];for(const i in a){const r=a[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function CA(a,e){const i={},r=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const c=a.getActiveAttrib(e,o),u=c.name;let h=1;c.type===a.FLOAT_MAT2&&(h=2),c.type===a.FLOAT_MAT3&&(h=3),c.type===a.FLOAT_MAT4&&(h=4),i[u]={type:c.type,location:a.getAttribLocation(e,u),locationSize:h}}return i}function ol(a){return a!==""}function lv(a,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function cv(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const wA=/^[ \t]*#include +<([\w\d./]+)>/gm;function sp(a){return a.replace(wA,NA)}const DA=new Map;function NA(a,e){let i=gt[e];if(i===void 0){const r=DA.get(e);if(r!==void 0)i=gt[r],rt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return sp(i)}const LA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uv(a){return a.replace(LA,UA)}function UA(a,e,i,r){let o="";for(let c=parseInt(e);c<parseInt(i);c++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function fv(a){let e=`precision ${a.precision} float;
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
#define LOW_PRECISION`),e}const OA={[Jc]:"SHADOWMAP_TYPE_PCF",[sl]:"SHADOWMAP_TYPE_VSM"};function PA(a){return OA[a.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const IA={[Js]:"ENVMAP_TYPE_CUBE",[io]:"ENVMAP_TYPE_CUBE",[du]:"ENVMAP_TYPE_CUBE_UV"};function FA(a){return a.envMap===!1?"ENVMAP_TYPE_CUBE":IA[a.envMapMode]||"ENVMAP_TYPE_CUBE"}const BA={[io]:"ENVMAP_MODE_REFRACTION"};function zA(a){return a.envMap===!1?"ENVMAP_MODE_REFLECTION":BA[a.envMapMode]||"ENVMAP_MODE_REFLECTION"}const HA={[Dv]:"ENVMAP_BLENDING_MULTIPLY",[hy]:"ENVMAP_BLENDING_MIX",[py]:"ENVMAP_BLENDING_ADD"};function GA(a){return a.envMap===!1?"ENVMAP_BLENDING_NONE":HA[a.combine]||"ENVMAP_BLENDING_NONE"}function VA(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function kA(a,e,i,r){const o=a.getContext(),c=i.defines;let u=i.vertexShader,h=i.fragmentShader;const m=PA(i),p=FA(i),_=zA(i),v=GA(i),g=VA(i),S=AA(i),E=RA(c),C=o.createProgram();let M,y,O=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(ol).join(`
`),M.length>0&&(M+=`
`),y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(ol).join(`
`),y.length>0&&(y+=`
`)):(M=[fv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ol).join(`
`),y=[fv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+v:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ia?"#define TONE_MAPPING":"",i.toneMapping!==ia?gt.tonemapping_pars_fragment:"",i.toneMapping!==ia?bA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",gt.colorspace_pars_fragment,yA("linearToOutputTexel",i.outputColorSpace),TA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(ol).join(`
`)),u=sp(u),u=lv(u,i),u=cv(u,i),h=sp(h),h=lv(h,i),h=cv(h,i),u=uv(u),h=uv(h),i.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,M=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,y=["#define varying in",i.glslVersion===y_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===y_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const F=O+M+u,w=O+y+h,P=sv(o,o.VERTEX_SHADER,F),D=sv(o,o.FRAGMENT_SHADER,w);o.attachShader(C,P),o.attachShader(C,D),i.index0AttributeName!==void 0?o.bindAttribLocation(C,0,i.index0AttributeName):i.hasPositionAttribute===!0&&o.bindAttribLocation(C,0,"position"),o.linkProgram(C);function I(z){if(a.debug.checkShaderErrors){const k=o.getProgramInfoLog(C)||"",ce=o.getShaderInfoLog(P)||"",ue=o.getShaderInfoLog(D)||"",Q=k.trim(),B=ce.trim(),G=ue.trim();let Y=!0,fe=!0;if(o.getProgramParameter(C,o.LINK_STATUS)===!1)if(Y=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(o,C,P,D);else{const xe=ov(o,P,"vertex"),N=ov(o,D,"fragment");Ut("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(C,o.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+Q+`
`+xe+`
`+N)}else Q!==""?rt("WebGLProgram: Program Info Log:",Q):(B===""||G==="")&&(fe=!1);fe&&(z.diagnostics={runnable:Y,programLog:Q,vertexShader:{log:B,prefix:M},fragmentShader:{log:G,prefix:y}})}o.deleteShader(P),o.deleteShader(D),T=new iu(o,C),U=CA(o,C)}let T;this.getUniforms=function(){return T===void 0&&I(this),T};let U;this.getAttributes=function(){return U===void 0&&I(this),U};let X=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return X===!1&&(X=o.getProgramParameter(C,vA)),X},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=SA++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=P,this.fragmentShader=D,this}let XA=0;class WA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,i,r){const o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new qA(e),i.set(e,r)),r}}class qA{constructor(e){this.id=XA++,this.code=e,this.usedTimes=0}}function YA(a){return a===$s||a===au||a===su}function ZA(a,e,i,r,o,c){const u=new Zv,h=new WA,m=new Set,p=[],_=new Map,v=r.logarithmicDepthBuffer;let g=r.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(T){return m.add(T),T===0?"uv":`uv${T}`}function C(T,U,X,z,k,ce){const ue=z.fog,Q=k.geometry,B=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?z.environment:null,G=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,Y=e.get(T.envMap||B,G),fe=Y&&Y.mapping===du?Y.image.height:null,xe=S[T.type];T.precision!==null&&(g=r.getMaxPrecision(T.precision),g!==T.precision&&rt("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const N=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,j=N!==void 0?N.length:0;let ve=0;Q.morphAttributes.position!==void 0&&(ve=1),Q.morphAttributes.normal!==void 0&&(ve=2),Q.morphAttributes.color!==void 0&&(ve=3);let Te,Ue,ie,ye;if(xe){const He=$i[xe];Te=He.vertexShader,Ue=He.fragmentShader}else{Te=T.vertexShader,Ue=T.fragmentShader;const He=h.getVertexShaderStage(T),Gt=h.getFragmentShaderStage(T);h.update(T,He,Gt),ie=He.id,ye=Gt.id}const Ee=a.getRenderTarget(),ze=a.state.buffers.depth.getReversed(),it=k.isInstancedMesh===!0,Qe=k.isBatchedMesh===!0,Zt=!!T.map,ut=!!T.matcap,vt=!!Y,Ye=!!T.aoMap,Ze=!!T.lightMap,ot=!!T.bumpMap&&T.wireframe===!1,mt=!!T.normalMap,wt=!!T.displacementMap,Dt=!!T.emissiveMap,ft=!!T.metalnessMap,_t=!!T.roughnessMap,q=T.anisotropy>0,Mt=T.clearcoat>0,St=T.dispersion>0,L=T.iridescence>0,b=T.sheen>0,$=T.transmission>0,te=q&&!!T.anisotropyMap,he=Mt&&!!T.clearcoatMap,Ce=Mt&&!!T.clearcoatNormalMap,De=Mt&&!!T.clearcoatRoughnessMap,pe=L&&!!T.iridescenceMap,me=L&&!!T.iridescenceThicknessMap,Ae=b&&!!T.sheenColorMap,Be=b&&!!T.sheenRoughnessMap,Ne=!!T.specularMap,Le=!!T.specularColorMap,Je=!!T.specularIntensityMap,je=$&&!!T.transmissionMap,st=$&&!!T.thicknessMap,Z=!!T.gradientMap,Re=!!T.alphaMap,ge=T.alphaTest>0,we=!!T.alphaHash,Pe=!!T.extensions;let be=ia;T.toneMapped&&(Ee===null||Ee.isXRRenderTarget===!0)&&(be=a.toneMapping);const Xe={shaderID:xe,shaderType:T.type,shaderName:T.name,vertexShader:Te,fragmentShader:Ue,defines:T.defines,customVertexShaderID:ie,customFragmentShaderID:ye,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:Qe,batchingColor:Qe&&k._colorsTexture!==null,instancing:it,instancingColor:it&&k.instanceColor!==null,instancingMorph:it&&k.morphTexture!==null,outputColorSpace:Ee===null?a.outputColorSpace:Ee.isXRRenderTarget===!0?Ee.texture.colorSpace:Ct.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:Zt,matcap:ut,envMap:vt,envMapMode:vt&&Y.mapping,envMapCubeUVHeight:fe,aoMap:Ye,lightMap:Ze,bumpMap:ot,normalMap:mt,displacementMap:wt,emissiveMap:Dt,normalMapObjectSpace:mt&&T.normalMapType===_y,normalMapTangentSpace:mt&&T.normalMapType===S_,packedNormalMap:mt&&T.normalMapType===S_&&YA(T.normalMap.format),metalnessMap:ft,roughnessMap:_t,anisotropy:q,anisotropyMap:te,clearcoat:Mt,clearcoatMap:he,clearcoatNormalMap:Ce,clearcoatRoughnessMap:De,dispersion:St,iridescence:L,iridescenceMap:pe,iridescenceThicknessMap:me,sheen:b,sheenColorMap:Ae,sheenRoughnessMap:Be,specularMap:Ne,specularColorMap:Le,specularIntensityMap:Je,transmission:$,transmissionMap:je,thicknessMap:st,gradientMap:Z,opaque:T.transparent===!1&&T.blending===Jr&&T.alphaToCoverage===!1,alphaMap:Re,alphaTest:ge,alphaHash:we,combine:T.combine,mapUv:Zt&&E(T.map.channel),aoMapUv:Ye&&E(T.aoMap.channel),lightMapUv:Ze&&E(T.lightMap.channel),bumpMapUv:ot&&E(T.bumpMap.channel),normalMapUv:mt&&E(T.normalMap.channel),displacementMapUv:wt&&E(T.displacementMap.channel),emissiveMapUv:Dt&&E(T.emissiveMap.channel),metalnessMapUv:ft&&E(T.metalnessMap.channel),roughnessMapUv:_t&&E(T.roughnessMap.channel),anisotropyMapUv:te&&E(T.anisotropyMap.channel),clearcoatMapUv:he&&E(T.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&E(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:De&&E(T.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&E(T.iridescenceMap.channel),iridescenceThicknessMapUv:me&&E(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&E(T.sheenColorMap.channel),sheenRoughnessMapUv:Be&&E(T.sheenRoughnessMap.channel),specularMapUv:Ne&&E(T.specularMap.channel),specularColorMapUv:Le&&E(T.specularColorMap.channel),specularIntensityMapUv:Je&&E(T.specularIntensityMap.channel),transmissionMapUv:je&&E(T.transmissionMap.channel),thicknessMapUv:st&&E(T.thicknessMap.channel),alphaMapUv:Re&&E(T.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(mt||q),vertexNormals:!!Q.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!Q.attributes.uv&&(Zt||Re),fog:!!ue,useFog:T.fog===!0,fogExp2:!!ue&&ue.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||Q.attributes.normal===void 0&&mt===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:ze,skinning:k.isSkinnedMesh===!0,hasPositionAttribute:Q.attributes.position!==void 0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:ve,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numLightProbeGrids:ce.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:a.shadowMap.enabled&&X.length>0,shadowMapType:a.shadowMap.type,toneMapping:be,decodeVideoTexture:Zt&&T.map.isVideoTexture===!0&&Ct.getTransfer(T.map.colorSpace)===Yt,decodeVideoTextureEmissive:Dt&&T.emissiveMap.isVideoTexture===!0&&Ct.getTransfer(T.emissiveMap.colorSpace)===Yt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===ea,flipSided:T.side===si,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Pe&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pe&&T.extensions.multiDraw===!0||Qe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Xe.vertexUv1s=m.has(1),Xe.vertexUv2s=m.has(2),Xe.vertexUv3s=m.has(3),m.clear(),Xe}function M(T){const U=[];if(T.shaderID?U.push(T.shaderID):(U.push(T.customVertexShaderID),U.push(T.customFragmentShaderID)),T.defines!==void 0)for(const X in T.defines)U.push(X),U.push(T.defines[X]);return T.isRawShaderMaterial===!1&&(y(U,T),O(U,T),U.push(a.outputColorSpace)),U.push(T.customProgramCacheKey),U.join()}function y(T,U){T.push(U.precision),T.push(U.outputColorSpace),T.push(U.envMapMode),T.push(U.envMapCubeUVHeight),T.push(U.mapUv),T.push(U.alphaMapUv),T.push(U.lightMapUv),T.push(U.aoMapUv),T.push(U.bumpMapUv),T.push(U.normalMapUv),T.push(U.displacementMapUv),T.push(U.emissiveMapUv),T.push(U.metalnessMapUv),T.push(U.roughnessMapUv),T.push(U.anisotropyMapUv),T.push(U.clearcoatMapUv),T.push(U.clearcoatNormalMapUv),T.push(U.clearcoatRoughnessMapUv),T.push(U.iridescenceMapUv),T.push(U.iridescenceThicknessMapUv),T.push(U.sheenColorMapUv),T.push(U.sheenRoughnessMapUv),T.push(U.specularMapUv),T.push(U.specularColorMapUv),T.push(U.specularIntensityMapUv),T.push(U.transmissionMapUv),T.push(U.thicknessMapUv),T.push(U.combine),T.push(U.fogExp2),T.push(U.sizeAttenuation),T.push(U.morphTargetsCount),T.push(U.morphAttributeCount),T.push(U.numDirLights),T.push(U.numPointLights),T.push(U.numSpotLights),T.push(U.numSpotLightMaps),T.push(U.numHemiLights),T.push(U.numRectAreaLights),T.push(U.numDirLightShadows),T.push(U.numPointLightShadows),T.push(U.numSpotLightShadows),T.push(U.numSpotLightShadowsWithMaps),T.push(U.numLightProbes),T.push(U.shadowMapType),T.push(U.toneMapping),T.push(U.numClippingPlanes),T.push(U.numClipIntersection),T.push(U.depthPacking)}function O(T,U){u.disableAll(),U.instancing&&u.enable(0),U.instancingColor&&u.enable(1),U.instancingMorph&&u.enable(2),U.matcap&&u.enable(3),U.envMap&&u.enable(4),U.normalMapObjectSpace&&u.enable(5),U.normalMapTangentSpace&&u.enable(6),U.clearcoat&&u.enable(7),U.iridescence&&u.enable(8),U.alphaTest&&u.enable(9),U.vertexColors&&u.enable(10),U.vertexAlphas&&u.enable(11),U.vertexUv1s&&u.enable(12),U.vertexUv2s&&u.enable(13),U.vertexUv3s&&u.enable(14),U.vertexTangents&&u.enable(15),U.anisotropy&&u.enable(16),U.alphaHash&&u.enable(17),U.batching&&u.enable(18),U.dispersion&&u.enable(19),U.batchingColor&&u.enable(20),U.gradientMap&&u.enable(21),U.packedNormalMap&&u.enable(22),U.vertexNormals&&u.enable(23),T.push(u.mask),u.disableAll(),U.fog&&u.enable(0),U.useFog&&u.enable(1),U.flatShading&&u.enable(2),U.logarithmicDepthBuffer&&u.enable(3),U.reversedDepthBuffer&&u.enable(4),U.skinning&&u.enable(5),U.morphTargets&&u.enable(6),U.morphNormals&&u.enable(7),U.morphColors&&u.enable(8),U.premultipliedAlpha&&u.enable(9),U.shadowMapEnabled&&u.enable(10),U.doubleSided&&u.enable(11),U.flipSided&&u.enable(12),U.useDepthPacking&&u.enable(13),U.dithering&&u.enable(14),U.transmission&&u.enable(15),U.sheen&&u.enable(16),U.opaque&&u.enable(17),U.pointsUvs&&u.enable(18),U.decodeVideoTexture&&u.enable(19),U.decodeVideoTextureEmissive&&u.enable(20),U.alphaToCoverage&&u.enable(21),U.numLightProbeGrids>0&&u.enable(22),U.hasPositionAttribute&&u.enable(23),T.push(u.mask)}function F(T){const U=S[T.type];let X;if(U){const z=$i[U];X=vE.clone(z.uniforms)}else X=T.uniforms;return X}function w(T,U){let X=_.get(U);return X!==void 0?++X.usedTimes:(X=new kA(a,U,T,o),p.push(X),_.set(U,X)),X}function P(T){if(--T.usedTimes===0){const U=p.indexOf(T);p[U]=p[p.length-1],p.pop(),_.delete(T.cacheKey),T.destroy()}}function D(T){h.remove(T)}function I(){h.dispose()}return{getParameters:C,getProgramCacheKey:M,getUniforms:F,acquireProgram:w,releaseProgram:P,releaseShaderCache:D,programs:p,dispose:I}}function jA(){let a=new WeakMap;function e(u){return a.has(u)}function i(u){let h=a.get(u);return h===void 0&&(h={},a.set(u,h)),h}function r(u){a.delete(u)}function o(u,h,m){a.get(u)[h]=m}function c(){a=new WeakMap}return{has:e,get:i,remove:r,update:o,dispose:c}}function KA(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.materialVariant!==e.materialVariant?a.materialVariant-e.materialVariant:a.z!==e.z?a.z-e.z:a.id-e.id}function dv(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function hv(){const a=[];let e=0;const i=[],r=[],o=[];function c(){e=0,i.length=0,r.length=0,o.length=0}function u(g){let S=0;return g.isInstancedMesh&&(S+=2),g.isSkinnedMesh&&(S+=1),S}function h(g,S,E,C,M,y){let O=a[e];return O===void 0?(O={id:g.id,object:g,geometry:S,material:E,materialVariant:u(g),groupOrder:C,renderOrder:g.renderOrder,z:M,group:y},a[e]=O):(O.id=g.id,O.object=g,O.geometry=S,O.material=E,O.materialVariant=u(g),O.groupOrder=C,O.renderOrder=g.renderOrder,O.z=M,O.group=y),e++,O}function m(g,S,E,C,M,y){const O=h(g,S,E,C,M,y);E.transmission>0?r.push(O):E.transparent===!0?o.push(O):i.push(O)}function p(g,S,E,C,M,y){const O=h(g,S,E,C,M,y);E.transmission>0?r.unshift(O):E.transparent===!0?o.unshift(O):i.unshift(O)}function _(g,S,E){i.length>1&&i.sort(g||KA),r.length>1&&r.sort(S||dv),o.length>1&&o.sort(S||dv),E&&(i.reverse(),r.reverse(),o.reverse())}function v(){for(let g=e,S=a.length;g<S;g++){const E=a[g];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:r,transparent:o,init:c,push:m,unshift:p,finish:v,sort:_}}function QA(){let a=new WeakMap;function e(r,o){const c=a.get(r);let u;return c===void 0?(u=new hv,a.set(r,[u])):o>=c.length?(u=new hv,c.push(u)):u=c[o],u}function i(){a=new WeakMap}return{get:e,dispose:i}}function JA(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new ee,color:new Nt};break;case"SpotLight":i={position:new ee,direction:new ee,color:new Nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ee,color:new Nt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ee,skyColor:new Nt,groundColor:new Nt};break;case"RectAreaLight":i={color:new Nt,position:new ee,halfWidth:new ee,halfHeight:new ee};break}return a[e.id]=i,i}}}function $A(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=i,i}}}let e2=0;function t2(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function n2(a){const e=new JA,i=$A(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new ee);const o=new ee,c=new pn,u=new pn;function h(p){let _=0,v=0,g=0;for(let U=0;U<9;U++)r.probe[U].set(0,0,0);let S=0,E=0,C=0,M=0,y=0,O=0,F=0,w=0,P=0,D=0,I=0;p.sort(t2);for(let U=0,X=p.length;U<X;U++){const z=p[U],k=z.color,ce=z.intensity,ue=z.distance;let Q=null;if(z.shadow&&z.shadow.map&&(z.shadow.map.texture.format===$s?Q=z.shadow.map.texture:Q=z.shadow.map.depthTexture||z.shadow.map.texture),z.isAmbientLight)_+=k.r*ce,v+=k.g*ce,g+=k.b*ce;else if(z.isLightProbe){for(let B=0;B<9;B++)r.probe[B].addScaledVector(z.sh.coefficients[B],ce);I++}else if(z.isDirectionalLight){const B=e.get(z);if(B.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const G=z.shadow,Y=i.get(z);Y.shadowIntensity=G.intensity,Y.shadowBias=G.bias,Y.shadowNormalBias=G.normalBias,Y.shadowRadius=G.radius,Y.shadowMapSize=G.mapSize,r.directionalShadow[S]=Y,r.directionalShadowMap[S]=Q,r.directionalShadowMatrix[S]=z.shadow.matrix,O++}r.directional[S]=B,S++}else if(z.isSpotLight){const B=e.get(z);B.position.setFromMatrixPosition(z.matrixWorld),B.color.copy(k).multiplyScalar(ce),B.distance=ue,B.coneCos=Math.cos(z.angle),B.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),B.decay=z.decay,r.spot[C]=B;const G=z.shadow;if(z.map&&(r.spotLightMap[P]=z.map,P++,G.updateMatrices(z),z.castShadow&&D++),r.spotLightMatrix[C]=G.matrix,z.castShadow){const Y=i.get(z);Y.shadowIntensity=G.intensity,Y.shadowBias=G.bias,Y.shadowNormalBias=G.normalBias,Y.shadowRadius=G.radius,Y.shadowMapSize=G.mapSize,r.spotShadow[C]=Y,r.spotShadowMap[C]=Q,w++}C++}else if(z.isRectAreaLight){const B=e.get(z);B.color.copy(k).multiplyScalar(ce),B.halfWidth.set(z.width*.5,0,0),B.halfHeight.set(0,z.height*.5,0),r.rectArea[M]=B,M++}else if(z.isPointLight){const B=e.get(z);if(B.color.copy(z.color).multiplyScalar(z.intensity),B.distance=z.distance,B.decay=z.decay,z.castShadow){const G=z.shadow,Y=i.get(z);Y.shadowIntensity=G.intensity,Y.shadowBias=G.bias,Y.shadowNormalBias=G.normalBias,Y.shadowRadius=G.radius,Y.shadowMapSize=G.mapSize,Y.shadowCameraNear=G.camera.near,Y.shadowCameraFar=G.camera.far,r.pointShadow[E]=Y,r.pointShadowMap[E]=Q,r.pointShadowMatrix[E]=z.shadow.matrix,F++}r.point[E]=B,E++}else if(z.isHemisphereLight){const B=e.get(z);B.skyColor.copy(z.color).multiplyScalar(ce),B.groundColor.copy(z.groundColor).multiplyScalar(ce),r.hemi[y]=B,y++}}M>0&&(a.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Fe.LTC_FLOAT_1,r.rectAreaLTC2=Fe.LTC_FLOAT_2):(r.rectAreaLTC1=Fe.LTC_HALF_1,r.rectAreaLTC2=Fe.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=v,r.ambient[2]=g;const T=r.hash;(T.directionalLength!==S||T.pointLength!==E||T.spotLength!==C||T.rectAreaLength!==M||T.hemiLength!==y||T.numDirectionalShadows!==O||T.numPointShadows!==F||T.numSpotShadows!==w||T.numSpotMaps!==P||T.numLightProbes!==I)&&(r.directional.length=S,r.spot.length=C,r.rectArea.length=M,r.point.length=E,r.hemi.length=y,r.directionalShadow.length=O,r.directionalShadowMap.length=O,r.pointShadow.length=F,r.pointShadowMap.length=F,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=O,r.pointShadowMatrix.length=F,r.spotLightMatrix.length=w+P-D,r.spotLightMap.length=P,r.numSpotLightShadowsWithMaps=D,r.numLightProbes=I,T.directionalLength=S,T.pointLength=E,T.spotLength=C,T.rectAreaLength=M,T.hemiLength=y,T.numDirectionalShadows=O,T.numPointShadows=F,T.numSpotShadows=w,T.numSpotMaps=P,T.numLightProbes=I,r.version=e2++)}function m(p,_){let v=0,g=0,S=0,E=0,C=0;const M=_.matrixWorldInverse;for(let y=0,O=p.length;y<O;y++){const F=p[y];if(F.isDirectionalLight){const w=r.directional[v];w.direction.setFromMatrixPosition(F.matrixWorld),o.setFromMatrixPosition(F.target.matrixWorld),w.direction.sub(o),w.direction.transformDirection(M),v++}else if(F.isSpotLight){const w=r.spot[S];w.position.setFromMatrixPosition(F.matrixWorld),w.position.applyMatrix4(M),w.direction.setFromMatrixPosition(F.matrixWorld),o.setFromMatrixPosition(F.target.matrixWorld),w.direction.sub(o),w.direction.transformDirection(M),S++}else if(F.isRectAreaLight){const w=r.rectArea[E];w.position.setFromMatrixPosition(F.matrixWorld),w.position.applyMatrix4(M),u.identity(),c.copy(F.matrixWorld),c.premultiply(M),u.extractRotation(c),w.halfWidth.set(F.width*.5,0,0),w.halfHeight.set(0,F.height*.5,0),w.halfWidth.applyMatrix4(u),w.halfHeight.applyMatrix4(u),E++}else if(F.isPointLight){const w=r.point[g];w.position.setFromMatrixPosition(F.matrixWorld),w.position.applyMatrix4(M),g++}else if(F.isHemisphereLight){const w=r.hemi[C];w.direction.setFromMatrixPosition(F.matrixWorld),w.direction.transformDirection(M),C++}}}return{setup:h,setupView:m,state:r}}function pv(a){const e=new n2(a),i=[],r=[],o=[];function c(g){v.camera=g,i.length=0,r.length=0,o.length=0}function u(g){i.push(g)}function h(g){r.push(g)}function m(g){o.push(g)}function p(){e.setup(i)}function _(g){e.setupView(i,g)}const v={lightsArray:i,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:v,setupLights:p,setupLightsView:_,pushLight:u,pushShadow:h,pushLightProbeGrid:m}}function i2(a){let e=new WeakMap;function i(o,c=0){const u=e.get(o);let h;return u===void 0?(h=new pv(a),e.set(o,[h])):c>=u.length?(h=new pv(a),u.push(h)):h=u[c],h}function r(){e=new WeakMap}return{get:i,dispose:r}}const a2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,s2=`uniform sampler2D shadow_pass;
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
}`,r2=[new ee(1,0,0),new ee(-1,0,0),new ee(0,1,0),new ee(0,-1,0),new ee(0,0,1),new ee(0,0,-1)],o2=[new ee(0,-1,0),new ee(0,-1,0),new ee(0,0,1),new ee(0,0,-1),new ee(0,-1,0),new ee(0,-1,0)],mv=new pn,al=new ee,fh=new ee;function l2(a,e,i){let r=new Jv;const o=new Bt,c=new Bt,u=new fn,h=new yE,m=new EE,p={},_=i.maxTextureSize,v={[Oa]:si,[si]:Oa,[ea]:ea},g=new Xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Bt},radius:{value:4}},vertexShader:a2,fragmentShader:s2}),S=g.clone();S.defines.HORIZONTAL_PASS=1;const E=new Li;E.setAttribute("position",new sa(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Ni(E,g),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jc;let y=this.type;this.render=function(D,I,T){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||D.length===0)return;this.type===ZM&&(rt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Jc);const U=a.getRenderTarget(),X=a.getActiveCubeFace(),z=a.getActiveMipmapLevel(),k=a.state;k.setBlending(La),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const ce=y!==this.type;ce&&I.traverse(function(ue){ue.material&&(Array.isArray(ue.material)?ue.material.forEach(Q=>Q.needsUpdate=!0):ue.material.needsUpdate=!0)});for(let ue=0,Q=D.length;ue<Q;ue++){const B=D[ue],G=B.shadow;if(G===void 0){rt("WebGLShadowMap:",B,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;o.copy(G.mapSize);const Y=G.getFrameExtents();o.multiply(Y),c.copy(G.mapSize),(o.x>_||o.y>_)&&(o.x>_&&(c.x=Math.floor(_/Y.x),o.x=c.x*Y.x,G.mapSize.x=c.x),o.y>_&&(c.y=Math.floor(_/Y.y),o.y=c.y*Y.y,G.mapSize.y=c.y));const fe=a.state.buffers.depth.getReversed();if(G.camera._reversedDepth=fe,G.map===null||ce===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===sl){if(B.isPointLight){rt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new aa(o.x,o.y,{format:$s,type:Pa,minFilter:bn,magFilter:bn,generateMipmaps:!1}),G.map.texture.name=B.name+".shadowMap",G.map.depthTexture=new ao(o.x,o.y,ta),G.map.depthTexture.name=B.name+".shadowMapDepth",G.map.depthTexture.format=Ia,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Bn,G.map.depthTexture.magFilter=Bn}else B.isPointLight?(G.map=new oS(o.x),G.map.depthTexture=new pE(o.x,ra)):(G.map=new aa(o.x,o.y),G.map.depthTexture=new ao(o.x,o.y,ra)),G.map.depthTexture.name=B.name+".shadowMap",G.map.depthTexture.format=Ia,this.type===Jc?(G.map.depthTexture.compareFunction=fe?gp:mp,G.map.depthTexture.minFilter=bn,G.map.depthTexture.magFilter=bn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Bn,G.map.depthTexture.magFilter=Bn);G.camera.updateProjectionMatrix()}const xe=G.map.isWebGLCubeRenderTarget?6:1;for(let N=0;N<xe;N++){if(G.map.isWebGLCubeRenderTarget)a.setRenderTarget(G.map,N),a.clear();else{N===0&&(a.setRenderTarget(G.map),a.clear());const j=G.getViewport(N);u.set(c.x*j.x,c.y*j.y,c.x*j.z,c.y*j.w),k.viewport(u)}if(B.isPointLight){const j=G.camera,ve=G.matrix,Te=B.distance||j.far;Te!==j.far&&(j.far=Te,j.updateProjectionMatrix()),al.setFromMatrixPosition(B.matrixWorld),j.position.copy(al),fh.copy(j.position),fh.add(r2[N]),j.up.copy(o2[N]),j.lookAt(fh),j.updateMatrixWorld(),ve.makeTranslation(-al.x,-al.y,-al.z),mv.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),G._frustum.setFromProjectionMatrix(mv,j.coordinateSystem,j.reversedDepth)}else G.updateMatrices(B);r=G.getFrustum(),w(I,T,G.camera,B,this.type)}G.isPointLightShadow!==!0&&this.type===sl&&O(G,T),G.needsUpdate=!1}y=this.type,M.needsUpdate=!1,a.setRenderTarget(U,X,z)};function O(D,I){const T=e.update(C);g.defines.VSM_SAMPLES!==D.blurSamples&&(g.defines.VSM_SAMPLES=D.blurSamples,S.defines.VSM_SAMPLES=D.blurSamples,g.needsUpdate=!0,S.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new aa(o.x,o.y,{format:$s,type:Pa})),g.uniforms.shadow_pass.value=D.map.depthTexture,g.uniforms.resolution.value=D.mapSize,g.uniforms.radius.value=D.radius,a.setRenderTarget(D.mapPass),a.clear(),a.renderBufferDirect(I,null,T,g,C,null),S.uniforms.shadow_pass.value=D.mapPass.texture,S.uniforms.resolution.value=D.mapSize,S.uniforms.radius.value=D.radius,a.setRenderTarget(D.map),a.clear(),a.renderBufferDirect(I,null,T,S,C,null)}function F(D,I,T,U){let X=null;const z=T.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(z!==void 0)X=z;else if(X=T.isPointLight===!0?m:h,a.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const k=X.uuid,ce=I.uuid;let ue=p[k];ue===void 0&&(ue={},p[k]=ue);let Q=ue[ce];Q===void 0&&(Q=X.clone(),ue[ce]=Q,I.addEventListener("dispose",P)),X=Q}if(X.visible=I.visible,X.wireframe=I.wireframe,U===sl?X.side=I.shadowSide!==null?I.shadowSide:I.side:X.side=I.shadowSide!==null?I.shadowSide:v[I.side],X.alphaMap=I.alphaMap,X.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,X.map=I.map,X.clipShadows=I.clipShadows,X.clippingPlanes=I.clippingPlanes,X.clipIntersection=I.clipIntersection,X.displacementMap=I.displacementMap,X.displacementScale=I.displacementScale,X.displacementBias=I.displacementBias,X.wireframeLinewidth=I.wireframeLinewidth,X.linewidth=I.linewidth,T.isPointLight===!0&&X.isMeshDistanceMaterial===!0){const k=a.properties.get(X);k.light=T}return X}function w(D,I,T,U,X){if(D.visible===!1)return;if(D.layers.test(I.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&X===sl)&&(!D.frustumCulled||r.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,D.matrixWorld);const ce=e.update(D),ue=D.material;if(Array.isArray(ue)){const Q=ce.groups;for(let B=0,G=Q.length;B<G;B++){const Y=Q[B],fe=ue[Y.materialIndex];if(fe&&fe.visible){const xe=F(D,fe,U,X);D.onBeforeShadow(a,D,I,T,ce,xe,Y),a.renderBufferDirect(T,null,ce,xe,D,Y),D.onAfterShadow(a,D,I,T,ce,xe,Y)}}}else if(ue.visible){const Q=F(D,ue,U,X);D.onBeforeShadow(a,D,I,T,ce,Q,null),a.renderBufferDirect(T,null,ce,Q,D,null),D.onAfterShadow(a,D,I,T,ce,Q,null)}}const k=D.children;for(let ce=0,ue=k.length;ce<ue;ce++)w(k[ce],I,T,U,X)}function P(D){D.target.removeEventListener("dispose",P);for(const T in p){const U=p[T],X=D.target.uuid;X in U&&(U[X].dispose(),delete U[X])}}}function c2(a,e){function i(){let Z=!1;const Re=new fn;let ge=null;const we=new fn(0,0,0,0);return{setMask:function(Pe){ge!==Pe&&!Z&&(a.colorMask(Pe,Pe,Pe,Pe),ge=Pe)},setLocked:function(Pe){Z=Pe},setClear:function(Pe,be,Xe,He,Gt){Gt===!0&&(Pe*=He,be*=He,Xe*=He),Re.set(Pe,be,Xe,He),we.equals(Re)===!1&&(a.clearColor(Pe,be,Xe,He),we.copy(Re))},reset:function(){Z=!1,ge=null,we.set(-1,0,0,0)}}}function r(){let Z=!1,Re=!1,ge=null,we=null,Pe=null;return{setReversed:function(be){if(Re!==be){const Xe=e.get("EXT_clip_control");be?Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.ZERO_TO_ONE_EXT):Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.NEGATIVE_ONE_TO_ONE_EXT),Re=be;const He=Pe;Pe=null,this.setClear(He)}},getReversed:function(){return Re},setTest:function(be){be?Ee(a.DEPTH_TEST):ze(a.DEPTH_TEST)},setMask:function(be){ge!==be&&!Z&&(a.depthMask(be),ge=be)},setFunc:function(be){if(Re&&(be=Ry[be]),we!==be){switch(be){case Sh:a.depthFunc(a.NEVER);break;case xh:a.depthFunc(a.ALWAYS);break;case Mh:a.depthFunc(a.LESS);break;case no:a.depthFunc(a.LEQUAL);break;case yh:a.depthFunc(a.EQUAL);break;case Eh:a.depthFunc(a.GEQUAL);break;case bh:a.depthFunc(a.GREATER);break;case Th:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}we=be}},setLocked:function(be){Z=be},setClear:function(be){Pe!==be&&(Pe=be,Re&&(be=1-be),a.clearDepth(be))},reset:function(){Z=!1,ge=null,we=null,Pe=null,Re=!1}}}function o(){let Z=!1,Re=null,ge=null,we=null,Pe=null,be=null,Xe=null,He=null,Gt=null;return{setTest:function(Lt){Z||(Lt?Ee(a.STENCIL_TEST):ze(a.STENCIL_TEST))},setMask:function(Lt){Re!==Lt&&!Z&&(a.stencilMask(Lt),Re=Lt)},setFunc:function(Lt,Wn,zn){(ge!==Lt||we!==Wn||Pe!==zn)&&(a.stencilFunc(Lt,Wn,zn),ge=Lt,we=Wn,Pe=zn)},setOp:function(Lt,Wn,zn){(be!==Lt||Xe!==Wn||He!==zn)&&(a.stencilOp(Lt,Wn,zn),be=Lt,Xe=Wn,He=zn)},setLocked:function(Lt){Z=Lt},setClear:function(Lt){Gt!==Lt&&(a.clearStencil(Lt),Gt=Lt)},reset:function(){Z=!1,Re=null,ge=null,we=null,Pe=null,be=null,Xe=null,He=null,Gt=null}}}const c=new i,u=new r,h=new o,m=new WeakMap,p=new WeakMap;let _={},v={},g={},S=new WeakMap,E=[],C=null,M=!1,y=null,O=null,F=null,w=null,P=null,D=null,I=null,T=new Nt(0,0,0),U=0,X=!1,z=null,k=null,ce=null,ue=null,Q=null;const B=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,Y=0;const fe=a.getParameter(a.VERSION);fe.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(fe)[1]),G=Y>=1):fe.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(fe)[1]),G=Y>=2);let xe=null,N={};const j=a.getParameter(a.SCISSOR_BOX),ve=a.getParameter(a.VIEWPORT),Te=new fn().fromArray(j),Ue=new fn().fromArray(ve);function ie(Z,Re,ge,we){const Pe=new Uint8Array(4),be=a.createTexture();a.bindTexture(Z,be),a.texParameteri(Z,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(Z,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Xe=0;Xe<ge;Xe++)Z===a.TEXTURE_3D||Z===a.TEXTURE_2D_ARRAY?a.texImage3D(Re,0,a.RGBA,1,1,we,0,a.RGBA,a.UNSIGNED_BYTE,Pe):a.texImage2D(Re+Xe,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,Pe);return be}const ye={};ye[a.TEXTURE_2D]=ie(a.TEXTURE_2D,a.TEXTURE_2D,1),ye[a.TEXTURE_CUBE_MAP]=ie(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[a.TEXTURE_2D_ARRAY]=ie(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),ye[a.TEXTURE_3D]=ie(a.TEXTURE_3D,a.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),h.setClear(0),Ee(a.DEPTH_TEST),u.setFunc(no),ot(!1),mt(g_),Ee(a.CULL_FACE),Ye(La);function Ee(Z){_[Z]!==!0&&(a.enable(Z),_[Z]=!0)}function ze(Z){_[Z]!==!1&&(a.disable(Z),_[Z]=!1)}function it(Z,Re){return g[Z]!==Re?(a.bindFramebuffer(Z,Re),g[Z]=Re,Z===a.DRAW_FRAMEBUFFER&&(g[a.FRAMEBUFFER]=Re),Z===a.FRAMEBUFFER&&(g[a.DRAW_FRAMEBUFFER]=Re),!0):!1}function Qe(Z,Re){let ge=E,we=!1;if(Z){ge=S.get(Re),ge===void 0&&(ge=[],S.set(Re,ge));const Pe=Z.textures;if(ge.length!==Pe.length||ge[0]!==a.COLOR_ATTACHMENT0){for(let be=0,Xe=Pe.length;be<Xe;be++)ge[be]=a.COLOR_ATTACHMENT0+be;ge.length=Pe.length,we=!0}}else ge[0]!==a.BACK&&(ge[0]=a.BACK,we=!0);we&&a.drawBuffers(ge)}function Zt(Z){return C!==Z?(a.useProgram(Z),C=Z,!0):!1}const ut={[Zs]:a.FUNC_ADD,[KM]:a.FUNC_SUBTRACT,[QM]:a.FUNC_REVERSE_SUBTRACT};ut[JM]=a.MIN,ut[$M]=a.MAX;const vt={[ey]:a.ZERO,[ty]:a.ONE,[ny]:a.SRC_COLOR,[_h]:a.SRC_ALPHA,[ly]:a.SRC_ALPHA_SATURATE,[ry]:a.DST_COLOR,[ay]:a.DST_ALPHA,[iy]:a.ONE_MINUS_SRC_COLOR,[vh]:a.ONE_MINUS_SRC_ALPHA,[oy]:a.ONE_MINUS_DST_COLOR,[sy]:a.ONE_MINUS_DST_ALPHA,[cy]:a.CONSTANT_COLOR,[uy]:a.ONE_MINUS_CONSTANT_COLOR,[fy]:a.CONSTANT_ALPHA,[dy]:a.ONE_MINUS_CONSTANT_ALPHA};function Ye(Z,Re,ge,we,Pe,be,Xe,He,Gt,Lt){if(Z===La){M===!0&&(ze(a.BLEND),M=!1);return}if(M===!1&&(Ee(a.BLEND),M=!0),Z!==jM){if(Z!==y||Lt!==X){if((O!==Zs||P!==Zs)&&(a.blendEquation(a.FUNC_ADD),O=Zs,P=Zs),Lt)switch(Z){case Jr:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case gh:a.blendFunc(a.ONE,a.ONE);break;case __:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case v_:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:Ut("WebGLState: Invalid blending: ",Z);break}else switch(Z){case Jr:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case gh:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case __:Ut("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case v_:Ut("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ut("WebGLState: Invalid blending: ",Z);break}F=null,w=null,D=null,I=null,T.set(0,0,0),U=0,y=Z,X=Lt}return}Pe=Pe||Re,be=be||ge,Xe=Xe||we,(Re!==O||Pe!==P)&&(a.blendEquationSeparate(ut[Re],ut[Pe]),O=Re,P=Pe),(ge!==F||we!==w||be!==D||Xe!==I)&&(a.blendFuncSeparate(vt[ge],vt[we],vt[be],vt[Xe]),F=ge,w=we,D=be,I=Xe),(He.equals(T)===!1||Gt!==U)&&(a.blendColor(He.r,He.g,He.b,Gt),T.copy(He),U=Gt),y=Z,X=!1}function Ze(Z,Re){Z.side===ea?ze(a.CULL_FACE):Ee(a.CULL_FACE);let ge=Z.side===si;Re&&(ge=!ge),ot(ge),Z.blending===Jr&&Z.transparent===!1?Ye(La):Ye(Z.blending,Z.blendEquation,Z.blendSrc,Z.blendDst,Z.blendEquationAlpha,Z.blendSrcAlpha,Z.blendDstAlpha,Z.blendColor,Z.blendAlpha,Z.premultipliedAlpha),u.setFunc(Z.depthFunc),u.setTest(Z.depthTest),u.setMask(Z.depthWrite),c.setMask(Z.colorWrite);const we=Z.stencilWrite;h.setTest(we),we&&(h.setMask(Z.stencilWriteMask),h.setFunc(Z.stencilFunc,Z.stencilRef,Z.stencilFuncMask),h.setOp(Z.stencilFail,Z.stencilZFail,Z.stencilZPass)),Dt(Z.polygonOffset,Z.polygonOffsetFactor,Z.polygonOffsetUnits),Z.alphaToCoverage===!0?Ee(a.SAMPLE_ALPHA_TO_COVERAGE):ze(a.SAMPLE_ALPHA_TO_COVERAGE)}function ot(Z){z!==Z&&(Z?a.frontFace(a.CW):a.frontFace(a.CCW),z=Z)}function mt(Z){Z!==qM?(Ee(a.CULL_FACE),Z!==k&&(Z===g_?a.cullFace(a.BACK):Z===YM?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):ze(a.CULL_FACE),k=Z}function wt(Z){Z!==ce&&(G&&a.lineWidth(Z),ce=Z)}function Dt(Z,Re,ge){Z?(Ee(a.POLYGON_OFFSET_FILL),(ue!==Re||Q!==ge)&&(ue=Re,Q=ge,u.getReversed()&&(Re=-Re),a.polygonOffset(Re,ge))):ze(a.POLYGON_OFFSET_FILL)}function ft(Z){Z?Ee(a.SCISSOR_TEST):ze(a.SCISSOR_TEST)}function _t(Z){Z===void 0&&(Z=a.TEXTURE0+B-1),xe!==Z&&(a.activeTexture(Z),xe=Z)}function q(Z,Re,ge){ge===void 0&&(xe===null?ge=a.TEXTURE0+B-1:ge=xe);let we=N[ge];we===void 0&&(we={type:void 0,texture:void 0},N[ge]=we),(we.type!==Z||we.texture!==Re)&&(xe!==ge&&(a.activeTexture(ge),xe=ge),a.bindTexture(Z,Re||ye[Z]),we.type=Z,we.texture=Re)}function Mt(){const Z=N[xe];Z!==void 0&&Z.type!==void 0&&(a.bindTexture(Z.type,null),Z.type=void 0,Z.texture=void 0)}function St(){try{a.compressedTexImage2D(...arguments)}catch(Z){Ut("WebGLState:",Z)}}function L(){try{a.compressedTexImage3D(...arguments)}catch(Z){Ut("WebGLState:",Z)}}function b(){try{a.texSubImage2D(...arguments)}catch(Z){Ut("WebGLState:",Z)}}function $(){try{a.texSubImage3D(...arguments)}catch(Z){Ut("WebGLState:",Z)}}function te(){try{a.compressedTexSubImage2D(...arguments)}catch(Z){Ut("WebGLState:",Z)}}function he(){try{a.compressedTexSubImage3D(...arguments)}catch(Z){Ut("WebGLState:",Z)}}function Ce(){try{a.texStorage2D(...arguments)}catch(Z){Ut("WebGLState:",Z)}}function De(){try{a.texStorage3D(...arguments)}catch(Z){Ut("WebGLState:",Z)}}function pe(){try{a.texImage2D(...arguments)}catch(Z){Ut("WebGLState:",Z)}}function me(){try{a.texImage3D(...arguments)}catch(Z){Ut("WebGLState:",Z)}}function Ae(Z){return v[Z]!==void 0?v[Z]:a.getParameter(Z)}function Be(Z,Re){v[Z]!==Re&&(a.pixelStorei(Z,Re),v[Z]=Re)}function Ne(Z){Te.equals(Z)===!1&&(a.scissor(Z.x,Z.y,Z.z,Z.w),Te.copy(Z))}function Le(Z){Ue.equals(Z)===!1&&(a.viewport(Z.x,Z.y,Z.z,Z.w),Ue.copy(Z))}function Je(Z,Re){let ge=p.get(Re);ge===void 0&&(ge=new WeakMap,p.set(Re,ge));let we=ge.get(Z);we===void 0&&(we=a.getUniformBlockIndex(Re,Z.name),ge.set(Z,we))}function je(Z,Re){const we=p.get(Re).get(Z);m.get(Re)!==we&&(a.uniformBlockBinding(Re,we,Z.__bindingPointIndex),m.set(Re,we))}function st(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),u.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),a.pixelStorei(a.PACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,!1),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,a.BROWSER_DEFAULT_WEBGL),a.pixelStorei(a.PACK_ROW_LENGTH,0),a.pixelStorei(a.PACK_SKIP_PIXELS,0),a.pixelStorei(a.PACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_ROW_LENGTH,0),a.pixelStorei(a.UNPACK_IMAGE_HEIGHT,0),a.pixelStorei(a.UNPACK_SKIP_PIXELS,0),a.pixelStorei(a.UNPACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_SKIP_IMAGES,0),_={},v={},xe=null,N={},g={},S=new WeakMap,E=[],C=null,M=!1,y=null,O=null,F=null,w=null,P=null,D=null,I=null,T=new Nt(0,0,0),U=0,X=!1,z=null,k=null,ce=null,ue=null,Q=null,Te.set(0,0,a.canvas.width,a.canvas.height),Ue.set(0,0,a.canvas.width,a.canvas.height),c.reset(),u.reset(),h.reset()}return{buffers:{color:c,depth:u,stencil:h},enable:Ee,disable:ze,bindFramebuffer:it,drawBuffers:Qe,useProgram:Zt,setBlending:Ye,setMaterial:Ze,setFlipSided:ot,setCullFace:mt,setLineWidth:wt,setPolygonOffset:Dt,setScissorTest:ft,activeTexture:_t,bindTexture:q,unbindTexture:Mt,compressedTexImage2D:St,compressedTexImage3D:L,texImage2D:pe,texImage3D:me,pixelStorei:Be,getParameter:Ae,updateUBOMapping:Je,uniformBlockBinding:je,texStorage2D:Ce,texStorage3D:De,texSubImage2D:b,texSubImage3D:$,compressedTexSubImage2D:te,compressedTexSubImage3D:he,scissor:Ne,viewport:Le,reset:st}}function u2(a,e,i,r,o,c,u){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Bt,_=new WeakMap,v=new Set;let g;const S=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(L,b){return E?new OffscreenCanvas(L,b):cu("canvas")}function M(L,b,$){let te=1;const he=St(L);if((he.width>$||he.height>$)&&(te=$/Math.max(he.width,he.height)),te<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const Ce=Math.floor(te*he.width),De=Math.floor(te*he.height);g===void 0&&(g=C(Ce,De));const pe=b?C(Ce,De):g;return pe.width=Ce,pe.height=De,pe.getContext("2d").drawImage(L,0,0,Ce,De),rt("WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+Ce+"x"+De+")."),pe}else return"data"in L&&rt("WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),L;return L}function y(L){return L.generateMipmaps}function O(L){a.generateMipmap(L)}function F(L){return L.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?a.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function w(L,b,$,te,he,Ce=!1){if(L!==null){if(a[L]!==void 0)return a[L];rt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let De;te&&(De=e.get("EXT_texture_norm16"),De||rt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let pe=b;if(b===a.RED&&($===a.FLOAT&&(pe=a.R32F),$===a.HALF_FLOAT&&(pe=a.R16F),$===a.UNSIGNED_BYTE&&(pe=a.R8),$===a.UNSIGNED_SHORT&&De&&(pe=De.R16_EXT),$===a.SHORT&&De&&(pe=De.R16_SNORM_EXT)),b===a.RED_INTEGER&&($===a.UNSIGNED_BYTE&&(pe=a.R8UI),$===a.UNSIGNED_SHORT&&(pe=a.R16UI),$===a.UNSIGNED_INT&&(pe=a.R32UI),$===a.BYTE&&(pe=a.R8I),$===a.SHORT&&(pe=a.R16I),$===a.INT&&(pe=a.R32I)),b===a.RG&&($===a.FLOAT&&(pe=a.RG32F),$===a.HALF_FLOAT&&(pe=a.RG16F),$===a.UNSIGNED_BYTE&&(pe=a.RG8),$===a.UNSIGNED_SHORT&&De&&(pe=De.RG16_EXT),$===a.SHORT&&De&&(pe=De.RG16_SNORM_EXT)),b===a.RG_INTEGER&&($===a.UNSIGNED_BYTE&&(pe=a.RG8UI),$===a.UNSIGNED_SHORT&&(pe=a.RG16UI),$===a.UNSIGNED_INT&&(pe=a.RG32UI),$===a.BYTE&&(pe=a.RG8I),$===a.SHORT&&(pe=a.RG16I),$===a.INT&&(pe=a.RG32I)),b===a.RGB_INTEGER&&($===a.UNSIGNED_BYTE&&(pe=a.RGB8UI),$===a.UNSIGNED_SHORT&&(pe=a.RGB16UI),$===a.UNSIGNED_INT&&(pe=a.RGB32UI),$===a.BYTE&&(pe=a.RGB8I),$===a.SHORT&&(pe=a.RGB16I),$===a.INT&&(pe=a.RGB32I)),b===a.RGBA_INTEGER&&($===a.UNSIGNED_BYTE&&(pe=a.RGBA8UI),$===a.UNSIGNED_SHORT&&(pe=a.RGBA16UI),$===a.UNSIGNED_INT&&(pe=a.RGBA32UI),$===a.BYTE&&(pe=a.RGBA8I),$===a.SHORT&&(pe=a.RGBA16I),$===a.INT&&(pe=a.RGBA32I)),b===a.RGB&&($===a.UNSIGNED_SHORT&&De&&(pe=De.RGB16_EXT),$===a.SHORT&&De&&(pe=De.RGB16_SNORM_EXT),$===a.UNSIGNED_INT_5_9_9_9_REV&&(pe=a.RGB9_E5),$===a.UNSIGNED_INT_10F_11F_11F_REV&&(pe=a.R11F_G11F_B10F)),b===a.RGBA){const me=Ce?ou:Ct.getTransfer(he);$===a.FLOAT&&(pe=a.RGBA32F),$===a.HALF_FLOAT&&(pe=a.RGBA16F),$===a.UNSIGNED_BYTE&&(pe=me===Yt?a.SRGB8_ALPHA8:a.RGBA8),$===a.UNSIGNED_SHORT&&De&&(pe=De.RGBA16_EXT),$===a.SHORT&&De&&(pe=De.RGBA16_SNORM_EXT),$===a.UNSIGNED_SHORT_4_4_4_4&&(pe=a.RGBA4),$===a.UNSIGNED_SHORT_5_5_5_1&&(pe=a.RGB5_A1)}return(pe===a.R16F||pe===a.R32F||pe===a.RG16F||pe===a.RG32F||pe===a.RGBA16F||pe===a.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function P(L,b){let $;return L?b===null||b===ra||b===pl?$=a.DEPTH24_STENCIL8:b===ta?$=a.DEPTH32F_STENCIL8:b===hl&&($=a.DEPTH24_STENCIL8,rt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ra||b===pl?$=a.DEPTH_COMPONENT24:b===ta?$=a.DEPTH_COMPONENT32F:b===hl&&($=a.DEPTH_COMPONENT16),$}function D(L,b){return y(L)===!0||L.isFramebufferTexture&&L.minFilter!==Bn&&L.minFilter!==bn?Math.log2(Math.max(b.width,b.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?b.mipmaps.length:1}function I(L){const b=L.target;b.removeEventListener("dispose",I),U(b),b.isVideoTexture&&_.delete(b),b.isHTMLTexture&&v.delete(b)}function T(L){const b=L.target;b.removeEventListener("dispose",T),z(b)}function U(L){const b=r.get(L);if(b.__webglInit===void 0)return;const $=L.source,te=S.get($);if(te){const he=te[b.__cacheKey];he.usedTimes--,he.usedTimes===0&&X(L),Object.keys(te).length===0&&S.delete($)}r.remove(L)}function X(L){const b=r.get(L);a.deleteTexture(b.__webglTexture);const $=L.source,te=S.get($);delete te[b.__cacheKey],u.memory.textures--}function z(L){const b=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(b.__webglFramebuffer[te]))for(let he=0;he<b.__webglFramebuffer[te].length;he++)a.deleteFramebuffer(b.__webglFramebuffer[te][he]);else a.deleteFramebuffer(b.__webglFramebuffer[te]);b.__webglDepthbuffer&&a.deleteRenderbuffer(b.__webglDepthbuffer[te])}else{if(Array.isArray(b.__webglFramebuffer))for(let te=0;te<b.__webglFramebuffer.length;te++)a.deleteFramebuffer(b.__webglFramebuffer[te]);else a.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&a.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&a.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let te=0;te<b.__webglColorRenderbuffer.length;te++)b.__webglColorRenderbuffer[te]&&a.deleteRenderbuffer(b.__webglColorRenderbuffer[te]);b.__webglDepthRenderbuffer&&a.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const $=L.textures;for(let te=0,he=$.length;te<he;te++){const Ce=r.get($[te]);Ce.__webglTexture&&(a.deleteTexture(Ce.__webglTexture),u.memory.textures--),r.remove($[te])}r.remove(L)}let k=0;function ce(){k=0}function ue(){return k}function Q(L){k=L}function B(){const L=k;return L>=o.maxTextures&&rt("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+o.maxTextures),k+=1,L}function G(L){const b=[];return b.push(L.wrapS),b.push(L.wrapT),b.push(L.wrapR||0),b.push(L.magFilter),b.push(L.minFilter),b.push(L.anisotropy),b.push(L.internalFormat),b.push(L.format),b.push(L.type),b.push(L.generateMipmaps),b.push(L.premultiplyAlpha),b.push(L.flipY),b.push(L.unpackAlignment),b.push(L.colorSpace),b.join()}function Y(L,b){const $=r.get(L);if(L.isVideoTexture&&q(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&$.__version!==L.version){const te=L.image;if(te===null)rt("WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)rt("WebGLRenderer: Texture marked for update but image is incomplete");else{ze($,L,b);return}}else L.isExternalTexture&&($.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(a.TEXTURE_2D,$.__webglTexture,a.TEXTURE0+b)}function fe(L,b){const $=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&$.__version!==L.version){ze($,L,b);return}else L.isExternalTexture&&($.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(a.TEXTURE_2D_ARRAY,$.__webglTexture,a.TEXTURE0+b)}function xe(L,b){const $=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&$.__version!==L.version){ze($,L,b);return}i.bindTexture(a.TEXTURE_3D,$.__webglTexture,a.TEXTURE0+b)}function N(L,b){const $=r.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&$.__version!==L.version){it($,L,b);return}i.bindTexture(a.TEXTURE_CUBE_MAP,$.__webglTexture,a.TEXTURE0+b)}const j={[Ah]:a.REPEAT,[Vi]:a.CLAMP_TO_EDGE,[Rh]:a.MIRRORED_REPEAT},ve={[Bn]:a.NEAREST,[my]:a.NEAREST_MIPMAP_NEAREST,[wc]:a.NEAREST_MIPMAP_LINEAR,[bn]:a.LINEAR,[Od]:a.LINEAR_MIPMAP_NEAREST,[xs]:a.LINEAR_MIPMAP_LINEAR},Te={[vy]:a.NEVER,[Ey]:a.ALWAYS,[Sy]:a.LESS,[mp]:a.LEQUAL,[xy]:a.EQUAL,[gp]:a.GEQUAL,[My]:a.GREATER,[yy]:a.NOTEQUAL};function Ue(L,b){if(b.type===ta&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===bn||b.magFilter===Od||b.magFilter===wc||b.magFilter===xs||b.minFilter===bn||b.minFilter===Od||b.minFilter===wc||b.minFilter===xs)&&rt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(L,a.TEXTURE_WRAP_S,j[b.wrapS]),a.texParameteri(L,a.TEXTURE_WRAP_T,j[b.wrapT]),(L===a.TEXTURE_3D||L===a.TEXTURE_2D_ARRAY)&&a.texParameteri(L,a.TEXTURE_WRAP_R,j[b.wrapR]),a.texParameteri(L,a.TEXTURE_MAG_FILTER,ve[b.magFilter]),a.texParameteri(L,a.TEXTURE_MIN_FILTER,ve[b.minFilter]),b.compareFunction&&(a.texParameteri(L,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(L,a.TEXTURE_COMPARE_FUNC,Te[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Bn||b.minFilter!==wc&&b.minFilter!==xs||b.type===ta&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");a.texParameterf(L,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,o.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function ie(L,b){let $=!1;L.__webglInit===void 0&&(L.__webglInit=!0,b.addEventListener("dispose",I));const te=b.source;let he=S.get(te);he===void 0&&(he={},S.set(te,he));const Ce=G(b);if(Ce!==L.__cacheKey){he[Ce]===void 0&&(he[Ce]={texture:a.createTexture(),usedTimes:0},u.memory.textures++,$=!0),he[Ce].usedTimes++;const De=he[L.__cacheKey];De!==void 0&&(he[L.__cacheKey].usedTimes--,De.usedTimes===0&&X(b)),L.__cacheKey=Ce,L.__webglTexture=he[Ce].texture}return $}function ye(L,b,$){return Math.floor(Math.floor(L/$)/b)}function Ee(L,b,$,te){const Ce=L.updateRanges;if(Ce.length===0)i.texSubImage2D(a.TEXTURE_2D,0,0,0,b.width,b.height,$,te,b.data);else{Ce.sort((Be,Ne)=>Be.start-Ne.start);let De=0;for(let Be=1;Be<Ce.length;Be++){const Ne=Ce[De],Le=Ce[Be],Je=Ne.start+Ne.count,je=ye(Le.start,b.width,4),st=ye(Ne.start,b.width,4);Le.start<=Je+1&&je===st&&ye(Le.start+Le.count-1,b.width,4)===je?Ne.count=Math.max(Ne.count,Le.start+Le.count-Ne.start):(++De,Ce[De]=Le)}Ce.length=De+1;const pe=i.getParameter(a.UNPACK_ROW_LENGTH),me=i.getParameter(a.UNPACK_SKIP_PIXELS),Ae=i.getParameter(a.UNPACK_SKIP_ROWS);i.pixelStorei(a.UNPACK_ROW_LENGTH,b.width);for(let Be=0,Ne=Ce.length;Be<Ne;Be++){const Le=Ce[Be],Je=Math.floor(Le.start/4),je=Math.ceil(Le.count/4),st=Je%b.width,Z=Math.floor(Je/b.width),Re=je,ge=1;i.pixelStorei(a.UNPACK_SKIP_PIXELS,st),i.pixelStorei(a.UNPACK_SKIP_ROWS,Z),i.texSubImage2D(a.TEXTURE_2D,0,st,Z,Re,ge,$,te,b.data)}L.clearUpdateRanges(),i.pixelStorei(a.UNPACK_ROW_LENGTH,pe),i.pixelStorei(a.UNPACK_SKIP_PIXELS,me),i.pixelStorei(a.UNPACK_SKIP_ROWS,Ae)}}function ze(L,b,$){let te=a.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(te=a.TEXTURE_2D_ARRAY),b.isData3DTexture&&(te=a.TEXTURE_3D);const he=ie(L,b),Ce=b.source;i.bindTexture(te,L.__webglTexture,a.TEXTURE0+$);const De=r.get(Ce);if(Ce.version!==De.__version||he===!0){if(i.activeTexture(a.TEXTURE0+$),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){const ge=Ct.getPrimaries(Ct.workingColorSpace),we=b.colorSpace===Ss?null:Ct.getPrimaries(b.colorSpace),Pe=b.colorSpace===Ss||ge===we?a.NONE:a.BROWSER_DEFAULT_WEBGL;i.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe)}i.pixelStorei(a.UNPACK_ALIGNMENT,b.unpackAlignment);let me=M(b.image,!1,o.maxTextureSize);me=Mt(b,me);const Ae=c.convert(b.format,b.colorSpace),Be=c.convert(b.type);let Ne=w(b.internalFormat,Ae,Be,b.normalized,b.colorSpace,b.isVideoTexture);Ue(te,b);let Le;const Je=b.mipmaps,je=b.isVideoTexture!==!0,st=De.__version===void 0||he===!0,Z=Ce.dataReady,Re=D(b,me);if(b.isDepthTexture)Ne=P(b.format===Ks,b.type),st&&(je?i.texStorage2D(a.TEXTURE_2D,1,Ne,me.width,me.height):i.texImage2D(a.TEXTURE_2D,0,Ne,me.width,me.height,0,Ae,Be,null));else if(b.isDataTexture)if(Je.length>0){je&&st&&i.texStorage2D(a.TEXTURE_2D,Re,Ne,Je[0].width,Je[0].height);for(let ge=0,we=Je.length;ge<we;ge++)Le=Je[ge],je?Z&&i.texSubImage2D(a.TEXTURE_2D,ge,0,0,Le.width,Le.height,Ae,Be,Le.data):i.texImage2D(a.TEXTURE_2D,ge,Ne,Le.width,Le.height,0,Ae,Be,Le.data);b.generateMipmaps=!1}else je?(st&&i.texStorage2D(a.TEXTURE_2D,Re,Ne,me.width,me.height),Z&&Ee(b,me,Ae,Be)):i.texImage2D(a.TEXTURE_2D,0,Ne,me.width,me.height,0,Ae,Be,me.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){je&&st&&i.texStorage3D(a.TEXTURE_2D_ARRAY,Re,Ne,Je[0].width,Je[0].height,me.depth);for(let ge=0,we=Je.length;ge<we;ge++)if(Le=Je[ge],b.format!==ki)if(Ae!==null)if(je){if(Z)if(b.layerUpdates.size>0){const Pe=q_(Le.width,Le.height,b.format,b.type);for(const be of b.layerUpdates){const Xe=Le.data.subarray(be*Pe/Le.data.BYTES_PER_ELEMENT,(be+1)*Pe/Le.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,ge,0,0,be,Le.width,Le.height,1,Ae,Xe)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,ge,0,0,0,Le.width,Le.height,me.depth,Ae,Le.data)}else i.compressedTexImage3D(a.TEXTURE_2D_ARRAY,ge,Ne,Le.width,Le.height,me.depth,0,Le.data,0,0);else rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else je?Z&&i.texSubImage3D(a.TEXTURE_2D_ARRAY,ge,0,0,0,Le.width,Le.height,me.depth,Ae,Be,Le.data):i.texImage3D(a.TEXTURE_2D_ARRAY,ge,Ne,Le.width,Le.height,me.depth,0,Ae,Be,Le.data)}else{je&&st&&i.texStorage2D(a.TEXTURE_2D,Re,Ne,Je[0].width,Je[0].height);for(let ge=0,we=Je.length;ge<we;ge++)Le=Je[ge],b.format!==ki?Ae!==null?je?Z&&i.compressedTexSubImage2D(a.TEXTURE_2D,ge,0,0,Le.width,Le.height,Ae,Le.data):i.compressedTexImage2D(a.TEXTURE_2D,ge,Ne,Le.width,Le.height,0,Le.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?Z&&i.texSubImage2D(a.TEXTURE_2D,ge,0,0,Le.width,Le.height,Ae,Be,Le.data):i.texImage2D(a.TEXTURE_2D,ge,Ne,Le.width,Le.height,0,Ae,Be,Le.data)}else if(b.isDataArrayTexture)if(je){if(st&&i.texStorage3D(a.TEXTURE_2D_ARRAY,Re,Ne,me.width,me.height,me.depth),Z)if(b.layerUpdates.size>0){const ge=q_(me.width,me.height,b.format,b.type);for(const we of b.layerUpdates){const Pe=me.data.subarray(we*ge/me.data.BYTES_PER_ELEMENT,(we+1)*ge/me.data.BYTES_PER_ELEMENT);i.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,we,me.width,me.height,1,Ae,Be,Pe)}b.clearLayerUpdates()}else i.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,Ae,Be,me.data)}else i.texImage3D(a.TEXTURE_2D_ARRAY,0,Ne,me.width,me.height,me.depth,0,Ae,Be,me.data);else if(b.isData3DTexture)je?(st&&i.texStorage3D(a.TEXTURE_3D,Re,Ne,me.width,me.height,me.depth),Z&&i.texSubImage3D(a.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,Ae,Be,me.data)):i.texImage3D(a.TEXTURE_3D,0,Ne,me.width,me.height,me.depth,0,Ae,Be,me.data);else if(b.isFramebufferTexture){if(st)if(je)i.texStorage2D(a.TEXTURE_2D,Re,Ne,me.width,me.height);else{let ge=me.width,we=me.height;for(let Pe=0;Pe<Re;Pe++)i.texImage2D(a.TEXTURE_2D,Pe,Ne,ge,we,0,Ae,Be,null),ge>>=1,we>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in a){const ge=a.canvas;if(ge.hasAttribute("layoutsubtree")||ge.setAttribute("layoutsubtree","true"),me.parentNode!==ge){ge.appendChild(me),v.add(b),ge.onpaint=we=>{const Pe=we.changedElements;for(const be of v)Pe.includes(be.image)&&(be.needsUpdate=!0)},ge.requestPaint();return}if(a.texElementImage2D.length===3)a.texElementImage2D(a.TEXTURE_2D,a.RGBA8,me);else{const Pe=a.RGBA,be=a.RGBA,Xe=a.UNSIGNED_BYTE;a.texElementImage2D(a.TEXTURE_2D,0,Pe,be,Xe,me)}a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE)}}else if(Je.length>0){if(je&&st){const ge=St(Je[0]);i.texStorage2D(a.TEXTURE_2D,Re,Ne,ge.width,ge.height)}for(let ge=0,we=Je.length;ge<we;ge++)Le=Je[ge],je?Z&&i.texSubImage2D(a.TEXTURE_2D,ge,0,0,Ae,Be,Le):i.texImage2D(a.TEXTURE_2D,ge,Ne,Ae,Be,Le);b.generateMipmaps=!1}else if(je){if(st){const ge=St(me);i.texStorage2D(a.TEXTURE_2D,Re,Ne,ge.width,ge.height)}Z&&i.texSubImage2D(a.TEXTURE_2D,0,0,0,Ae,Be,me)}else i.texImage2D(a.TEXTURE_2D,0,Ne,Ae,Be,me);y(b)&&O(te),De.__version=Ce.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function it(L,b,$){if(b.image.length!==6)return;const te=ie(L,b),he=b.source;i.bindTexture(a.TEXTURE_CUBE_MAP,L.__webglTexture,a.TEXTURE0+$);const Ce=r.get(he);if(he.version!==Ce.__version||te===!0){i.activeTexture(a.TEXTURE0+$);const De=Ct.getPrimaries(Ct.workingColorSpace),pe=b.colorSpace===Ss?null:Ct.getPrimaries(b.colorSpace),me=b.colorSpace===Ss||De===pe?a.NONE:a.BROWSER_DEFAULT_WEBGL;i.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(a.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Ae=b.isCompressedTexture||b.image[0].isCompressedTexture,Be=b.image[0]&&b.image[0].isDataTexture,Ne=[];for(let be=0;be<6;be++)!Ae&&!Be?Ne[be]=M(b.image[be],!0,o.maxCubemapSize):Ne[be]=Be?b.image[be].image:b.image[be],Ne[be]=Mt(b,Ne[be]);const Le=Ne[0],Je=c.convert(b.format,b.colorSpace),je=c.convert(b.type),st=w(b.internalFormat,Je,je,b.normalized,b.colorSpace),Z=b.isVideoTexture!==!0,Re=Ce.__version===void 0||te===!0,ge=he.dataReady;let we=D(b,Le);Ue(a.TEXTURE_CUBE_MAP,b);let Pe;if(Ae){Z&&Re&&i.texStorage2D(a.TEXTURE_CUBE_MAP,we,st,Le.width,Le.height);for(let be=0;be<6;be++){Pe=Ne[be].mipmaps;for(let Xe=0;Xe<Pe.length;Xe++){const He=Pe[Xe];b.format!==ki?Je!==null?Z?ge&&i.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,Xe,0,0,He.width,He.height,Je,He.data):i.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,Xe,st,He.width,He.height,0,He.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Z?ge&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,Xe,0,0,He.width,He.height,Je,je,He.data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,Xe,st,He.width,He.height,0,Je,je,He.data)}}}else{if(Pe=b.mipmaps,Z&&Re){Pe.length>0&&we++;const be=St(Ne[0]);i.texStorage2D(a.TEXTURE_CUBE_MAP,we,st,be.width,be.height)}for(let be=0;be<6;be++)if(Be){Z?ge&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,Ne[be].width,Ne[be].height,Je,je,Ne[be].data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,st,Ne[be].width,Ne[be].height,0,Je,je,Ne[be].data);for(let Xe=0;Xe<Pe.length;Xe++){const Gt=Pe[Xe].image[be].image;Z?ge&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,Xe+1,0,0,Gt.width,Gt.height,Je,je,Gt.data):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,Xe+1,st,Gt.width,Gt.height,0,Je,je,Gt.data)}}else{Z?ge&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,Je,je,Ne[be]):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,st,Je,je,Ne[be]);for(let Xe=0;Xe<Pe.length;Xe++){const He=Pe[Xe];Z?ge&&i.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,Xe+1,0,0,Je,je,He.image[be]):i.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+be,Xe+1,st,Je,je,He.image[be])}}}y(b)&&O(a.TEXTURE_CUBE_MAP),Ce.__version=he.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function Qe(L,b,$,te,he,Ce){const De=c.convert($.format,$.colorSpace),pe=c.convert($.type),me=w($.internalFormat,De,pe,$.normalized,$.colorSpace),Ae=r.get(b),Be=r.get($);if(Be.__renderTarget=b,!Ae.__hasExternalTextures){const Ne=Math.max(1,b.width>>Ce),Le=Math.max(1,b.height>>Ce);he===a.TEXTURE_3D||he===a.TEXTURE_2D_ARRAY?i.texImage3D(he,Ce,me,Ne,Le,b.depth,0,De,pe,null):i.texImage2D(he,Ce,me,Ne,Le,0,De,pe,null)}i.bindFramebuffer(a.FRAMEBUFFER,L),_t(b)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,te,he,Be.__webglTexture,0,ft(b)):(he===a.TEXTURE_2D||he>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,te,he,Be.__webglTexture,Ce),i.bindFramebuffer(a.FRAMEBUFFER,null)}function Zt(L,b,$){if(a.bindRenderbuffer(a.RENDERBUFFER,L),b.depthBuffer){const te=b.depthTexture,he=te&&te.isDepthTexture?te.type:null,Ce=P(b.stencilBuffer,he),De=b.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;_t(b)?h.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,ft(b),Ce,b.width,b.height):$?a.renderbufferStorageMultisample(a.RENDERBUFFER,ft(b),Ce,b.width,b.height):a.renderbufferStorage(a.RENDERBUFFER,Ce,b.width,b.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,De,a.RENDERBUFFER,L)}else{const te=b.textures;for(let he=0;he<te.length;he++){const Ce=te[he],De=c.convert(Ce.format,Ce.colorSpace),pe=c.convert(Ce.type),me=w(Ce.internalFormat,De,pe,Ce.normalized,Ce.colorSpace);_t(b)?h.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,ft(b),me,b.width,b.height):$?a.renderbufferStorageMultisample(a.RENDERBUFFER,ft(b),me,b.width,b.height):a.renderbufferStorage(a.RENDERBUFFER,me,b.width,b.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function ut(L,b,$){const te=b.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(a.FRAMEBUFFER,L),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const he=r.get(b.depthTexture);if(he.__renderTarget=b,(!he.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),te){if(he.__webglInit===void 0&&(he.__webglInit=!0,b.depthTexture.addEventListener("dispose",I)),he.__webglTexture===void 0){he.__webglTexture=a.createTexture(),i.bindTexture(a.TEXTURE_CUBE_MAP,he.__webglTexture),Ue(a.TEXTURE_CUBE_MAP,b.depthTexture);const Ae=c.convert(b.depthTexture.format),Be=c.convert(b.depthTexture.type);let Ne;b.depthTexture.format===Ia?Ne=a.DEPTH_COMPONENT24:b.depthTexture.format===Ks&&(Ne=a.DEPTH24_STENCIL8);for(let Le=0;Le<6;Le++)a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,Ne,b.width,b.height,0,Ae,Be,null)}}else Y(b.depthTexture,0);const Ce=he.__webglTexture,De=ft(b),pe=te?a.TEXTURE_CUBE_MAP_POSITIVE_X+$:a.TEXTURE_2D,me=b.depthTexture.format===Ks?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;if(b.depthTexture.format===Ia)_t(b)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,me,pe,Ce,0,De):a.framebufferTexture2D(a.FRAMEBUFFER,me,pe,Ce,0);else if(b.depthTexture.format===Ks)_t(b)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,me,pe,Ce,0,De):a.framebufferTexture2D(a.FRAMEBUFFER,me,pe,Ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function vt(L){const b=r.get(L),$=L.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==L.depthTexture){const te=L.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),te){const he=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,te.removeEventListener("dispose",he)};te.addEventListener("dispose",he),b.__depthDisposeCallback=he}b.__boundDepthTexture=te}if(L.depthTexture&&!b.__autoAllocateDepthBuffer)if($)for(let te=0;te<6;te++)ut(b.__webglFramebuffer[te],L,te);else{const te=L.texture.mipmaps;te&&te.length>0?ut(b.__webglFramebuffer[0],L,0):ut(b.__webglFramebuffer,L,0)}else if($){b.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(i.bindFramebuffer(a.FRAMEBUFFER,b.__webglFramebuffer[te]),b.__webglDepthbuffer[te]===void 0)b.__webglDepthbuffer[te]=a.createRenderbuffer(),Zt(b.__webglDepthbuffer[te],L,!1);else{const he=L.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Ce=b.__webglDepthbuffer[te];a.bindRenderbuffer(a.RENDERBUFFER,Ce),a.framebufferRenderbuffer(a.FRAMEBUFFER,he,a.RENDERBUFFER,Ce)}}else{const te=L.texture.mipmaps;if(te&&te.length>0?i.bindFramebuffer(a.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(a.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=a.createRenderbuffer(),Zt(b.__webglDepthbuffer,L,!1);else{const he=L.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Ce=b.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,Ce),a.framebufferRenderbuffer(a.FRAMEBUFFER,he,a.RENDERBUFFER,Ce)}}i.bindFramebuffer(a.FRAMEBUFFER,null)}function Ye(L,b,$){const te=r.get(L);b!==void 0&&Qe(te.__webglFramebuffer,L,L.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),$!==void 0&&vt(L)}function Ze(L){const b=L.texture,$=r.get(L),te=r.get(b);L.addEventListener("dispose",T);const he=L.textures,Ce=L.isWebGLCubeRenderTarget===!0,De=he.length>1;if(De||(te.__webglTexture===void 0&&(te.__webglTexture=a.createTexture()),te.__version=b.version,u.memory.textures++),Ce){$.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(b.mipmaps&&b.mipmaps.length>0){$.__webglFramebuffer[pe]=[];for(let me=0;me<b.mipmaps.length;me++)$.__webglFramebuffer[pe][me]=a.createFramebuffer()}else $.__webglFramebuffer[pe]=a.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){$.__webglFramebuffer=[];for(let pe=0;pe<b.mipmaps.length;pe++)$.__webglFramebuffer[pe]=a.createFramebuffer()}else $.__webglFramebuffer=a.createFramebuffer();if(De)for(let pe=0,me=he.length;pe<me;pe++){const Ae=r.get(he[pe]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=a.createTexture(),u.memory.textures++)}if(L.samples>0&&_t(L)===!1){$.__webglMultisampledFramebuffer=a.createFramebuffer(),$.__webglColorRenderbuffer=[],i.bindFramebuffer(a.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let pe=0;pe<he.length;pe++){const me=he[pe];$.__webglColorRenderbuffer[pe]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,$.__webglColorRenderbuffer[pe]);const Ae=c.convert(me.format,me.colorSpace),Be=c.convert(me.type),Ne=w(me.internalFormat,Ae,Be,me.normalized,me.colorSpace,L.isXRRenderTarget===!0),Le=ft(L);a.renderbufferStorageMultisample(a.RENDERBUFFER,Le,Ne,L.width,L.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+pe,a.RENDERBUFFER,$.__webglColorRenderbuffer[pe])}a.bindRenderbuffer(a.RENDERBUFFER,null),L.depthBuffer&&($.__webglDepthRenderbuffer=a.createRenderbuffer(),Zt($.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(a.FRAMEBUFFER,null)}}if(Ce){i.bindTexture(a.TEXTURE_CUBE_MAP,te.__webglTexture),Ue(a.TEXTURE_CUBE_MAP,b);for(let pe=0;pe<6;pe++)if(b.mipmaps&&b.mipmaps.length>0)for(let me=0;me<b.mipmaps.length;me++)Qe($.__webglFramebuffer[pe][me],L,b,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,me);else Qe($.__webglFramebuffer[pe],L,b,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);y(b)&&O(a.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(De){for(let pe=0,me=he.length;pe<me;pe++){const Ae=he[pe],Be=r.get(Ae);let Ne=a.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ne=L.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),i.bindTexture(Ne,Be.__webglTexture),Ue(Ne,Ae),Qe($.__webglFramebuffer,L,Ae,a.COLOR_ATTACHMENT0+pe,Ne,0),y(Ae)&&O(Ne)}i.unbindTexture()}else{let pe=a.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(pe=L.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),i.bindTexture(pe,te.__webglTexture),Ue(pe,b),b.mipmaps&&b.mipmaps.length>0)for(let me=0;me<b.mipmaps.length;me++)Qe($.__webglFramebuffer[me],L,b,a.COLOR_ATTACHMENT0,pe,me);else Qe($.__webglFramebuffer,L,b,a.COLOR_ATTACHMENT0,pe,0);y(b)&&O(pe),i.unbindTexture()}L.depthBuffer&&vt(L)}function ot(L){const b=L.textures;for(let $=0,te=b.length;$<te;$++){const he=b[$];if(y(he)){const Ce=F(L),De=r.get(he).__webglTexture;i.bindTexture(Ce,De),O(Ce),i.unbindTexture()}}}const mt=[],wt=[];function Dt(L){if(L.samples>0){if(_t(L)===!1){const b=L.textures,$=L.width,te=L.height;let he=a.COLOR_BUFFER_BIT;const Ce=L.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,De=r.get(L),pe=b.length>1;if(pe)for(let Ae=0;Ae<b.length;Ae++)i.bindFramebuffer(a.FRAMEBUFFER,De.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ae,a.RENDERBUFFER,null),i.bindFramebuffer(a.FRAMEBUFFER,De.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ae,a.TEXTURE_2D,null,0);i.bindFramebuffer(a.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer);const me=L.texture.mipmaps;me&&me.length>0?i.bindFramebuffer(a.DRAW_FRAMEBUFFER,De.__webglFramebuffer[0]):i.bindFramebuffer(a.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let Ae=0;Ae<b.length;Ae++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(he|=a.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(he|=a.STENCIL_BUFFER_BIT)),pe){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,De.__webglColorRenderbuffer[Ae]);const Be=r.get(b[Ae]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,Be,0)}a.blitFramebuffer(0,0,$,te,0,0,$,te,he,a.NEAREST),m===!0&&(mt.length=0,wt.length=0,mt.push(a.COLOR_ATTACHMENT0+Ae),L.depthBuffer&&L.resolveDepthBuffer===!1&&(mt.push(Ce),wt.push(Ce),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,wt)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,mt))}if(i.bindFramebuffer(a.READ_FRAMEBUFFER,null),i.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),pe)for(let Ae=0;Ae<b.length;Ae++){i.bindFramebuffer(a.FRAMEBUFFER,De.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ae,a.RENDERBUFFER,De.__webglColorRenderbuffer[Ae]);const Be=r.get(b[Ae]).__webglTexture;i.bindFramebuffer(a.FRAMEBUFFER,De.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ae,a.TEXTURE_2D,Be,0)}i.bindFramebuffer(a.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const b=L.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[b])}}}function ft(L){return Math.min(o.maxSamples,L.samples)}function _t(L){const b=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function q(L){const b=u.render.frame;_.get(L)!==b&&(_.set(L,b),L.update())}function Mt(L,b){const $=L.colorSpace,te=L.format,he=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||$!==ru&&$!==Ss&&(Ct.getTransfer($)===Yt?(te!==ki||he!==wi)&&rt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ut("WebGLTextures: Unsupported texture color space:",$)),b}function St(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=B,this.resetTextureUnits=ce,this.getTextureUnits=ue,this.setTextureUnits=Q,this.setTexture2D=Y,this.setTexture2DArray=fe,this.setTexture3D=xe,this.setTextureCube=N,this.rebindTextures=Ye,this.setupRenderTarget=Ze,this.updateRenderTargetMipmap=ot,this.updateMultisampleRenderTarget=Dt,this.setupDepthRenderbuffer=vt,this.setupFrameBufferTexture=Qe,this.useMultisampledRTT=_t,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function f2(a,e){function i(r,o=Ss){let c;const u=Ct.getTransfer(o);if(r===wi)return a.UNSIGNED_BYTE;if(r===up)return a.UNSIGNED_SHORT_4_4_4_4;if(r===fp)return a.UNSIGNED_SHORT_5_5_5_1;if(r===Gv)return a.UNSIGNED_INT_5_9_9_9_REV;if(r===Vv)return a.UNSIGNED_INT_10F_11F_11F_REV;if(r===zv)return a.BYTE;if(r===Hv)return a.SHORT;if(r===hl)return a.UNSIGNED_SHORT;if(r===cp)return a.INT;if(r===ra)return a.UNSIGNED_INT;if(r===ta)return a.FLOAT;if(r===Pa)return a.HALF_FLOAT;if(r===kv)return a.ALPHA;if(r===Xv)return a.RGB;if(r===ki)return a.RGBA;if(r===Ia)return a.DEPTH_COMPONENT;if(r===Ks)return a.DEPTH_STENCIL;if(r===Wv)return a.RED;if(r===dp)return a.RED_INTEGER;if(r===$s)return a.RG;if(r===hp)return a.RG_INTEGER;if(r===pp)return a.RGBA_INTEGER;if(r===$c||r===eu||r===tu||r===nu)if(u===Yt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===$c)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===eu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===tu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===nu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===$c)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===eu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===tu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===nu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ch||r===wh||r===Dh||r===Nh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Ch)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===wh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Dh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Nh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Lh||r===Uh||r===Oh||r===Ph||r===Ih||r===au||r===Fh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Lh||r===Uh)return u===Yt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Oh)return u===Yt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===Ph)return c.COMPRESSED_R11_EAC;if(r===Ih)return c.COMPRESSED_SIGNED_R11_EAC;if(r===au)return c.COMPRESSED_RG11_EAC;if(r===Fh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Bh||r===zh||r===Hh||r===Gh||r===Vh||r===kh||r===Xh||r===Wh||r===qh||r===Yh||r===Zh||r===jh||r===Kh||r===Qh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Bh)return u===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===zh)return u===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Hh)return u===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Gh)return u===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Vh)return u===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===kh)return u===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Xh)return u===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Wh)return u===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===qh)return u===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Yh)return u===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Zh)return u===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===jh)return u===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Kh)return u===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Qh)return u===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Jh||r===$h||r===ep)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Jh)return u===Yt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===$h)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ep)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===tp||r===np||r===su||r===ip)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===tp)return c.COMPRESSED_RED_RGTC1_EXT;if(r===np)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===su)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ip)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===pl?a.UNSIGNED_INT_24_8:a[r]!==void 0?a[r]:null}return{convert:i}}const d2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,h2=`
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

}`;class p2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new tS(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Xi({vertexShader:d2,fragmentShader:h2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ni(new Qs(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class m2 extends tr{constructor(e,i){super();const r=this;let o=null,c=1,u=null,h="local-floor",m=1,p=null,_=null,v=null,g=null,S=null,E=null;const C=typeof XRWebGLBinding<"u",M=new p2,y={},O=i.getContextAttributes();let F=null,w=null;const P=[],D=[],I=new Bt;let T=null;const U=new Ci;U.viewport=new fn;const X=new Ci;X.viewport=new fn;const z=[U,X],k=new TE;let ce=null,ue=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let ye=P[ie];return ye===void 0&&(ye=new Hd,P[ie]=ye),ye.getTargetRaySpace()},this.getControllerGrip=function(ie){let ye=P[ie];return ye===void 0&&(ye=new Hd,P[ie]=ye),ye.getGripSpace()},this.getHand=function(ie){let ye=P[ie];return ye===void 0&&(ye=new Hd,P[ie]=ye),ye.getHandSpace()};function Q(ie){const ye=D.indexOf(ie.inputSource);if(ye===-1)return;const Ee=P[ye];Ee!==void 0&&(Ee.update(ie.inputSource,ie.frame,p||u),Ee.dispatchEvent({type:ie.type,data:ie.inputSource}))}function B(){o.removeEventListener("select",Q),o.removeEventListener("selectstart",Q),o.removeEventListener("selectend",Q),o.removeEventListener("squeeze",Q),o.removeEventListener("squeezestart",Q),o.removeEventListener("squeezeend",Q),o.removeEventListener("end",B),o.removeEventListener("inputsourceschange",G);for(let ie=0;ie<P.length;ie++){const ye=D[ie];ye!==null&&(D[ie]=null,P[ie].disconnect(ye))}ce=null,ue=null,M.reset();for(const ie in y)delete y[ie];e.setRenderTarget(F),S=null,g=null,v=null,o=null,w=null,Ue.stop(),r.isPresenting=!1,e.setPixelRatio(T),e.setSize(I.width,I.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){c=ie,r.isPresenting===!0&&rt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){h=ie,r.isPresenting===!0&&rt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(ie){p=ie},this.getBaseLayer=function(){return g!==null?g:S},this.getBinding=function(){return v===null&&C&&(v=new XRWebGLBinding(o,i)),v},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(ie){if(o=ie,o!==null){if(F=e.getRenderTarget(),o.addEventListener("select",Q),o.addEventListener("selectstart",Q),o.addEventListener("selectend",Q),o.addEventListener("squeeze",Q),o.addEventListener("squeezestart",Q),o.addEventListener("squeezeend",Q),o.addEventListener("end",B),o.addEventListener("inputsourceschange",G),O.xrCompatible!==!0&&await i.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(I),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,ze=null,it=null;O.depth&&(it=O.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ee=O.stencil?Ks:Ia,ze=O.stencil?pl:ra);const Qe={colorFormat:i.RGBA8,depthFormat:it,scaleFactor:c};v=this.getBinding(),g=v.createProjectionLayer(Qe),o.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),w=new aa(g.textureWidth,g.textureHeight,{format:ki,type:wi,depthTexture:new ao(g.textureWidth,g.textureHeight,ze,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:O.stencil,colorSpace:e.outputColorSpace,samples:O.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const Ee={antialias:O.antialias,alpha:!0,depth:O.depth,stencil:O.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(o,i,Ee),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),w=new aa(S.framebufferWidth,S.framebufferHeight,{format:ki,type:wi,colorSpace:e.outputColorSpace,stencilBuffer:O.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(m),p=null,u=await o.requestReferenceSpace(h),Ue.setContext(o),Ue.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function G(ie){for(let ye=0;ye<ie.removed.length;ye++){const Ee=ie.removed[ye],ze=D.indexOf(Ee);ze>=0&&(D[ze]=null,P[ze].disconnect(Ee))}for(let ye=0;ye<ie.added.length;ye++){const Ee=ie.added[ye];let ze=D.indexOf(Ee);if(ze===-1){for(let Qe=0;Qe<P.length;Qe++)if(Qe>=D.length){D.push(Ee),ze=Qe;break}else if(D[Qe]===null){D[Qe]=Ee,ze=Qe;break}if(ze===-1)break}const it=P[ze];it&&it.connect(Ee)}}const Y=new ee,fe=new ee;function xe(ie,ye,Ee){Y.setFromMatrixPosition(ye.matrixWorld),fe.setFromMatrixPosition(Ee.matrixWorld);const ze=Y.distanceTo(fe),it=ye.projectionMatrix.elements,Qe=Ee.projectionMatrix.elements,Zt=it[14]/(it[10]-1),ut=it[14]/(it[10]+1),vt=(it[9]+1)/it[5],Ye=(it[9]-1)/it[5],Ze=(it[8]-1)/it[0],ot=(Qe[8]+1)/Qe[0],mt=Zt*Ze,wt=Zt*ot,Dt=ze/(-Ze+ot),ft=Dt*-Ze;if(ye.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(ft),ie.translateZ(Dt),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),it[10]===-1)ie.projectionMatrix.copy(ye.projectionMatrix),ie.projectionMatrixInverse.copy(ye.projectionMatrixInverse);else{const _t=Zt+Dt,q=ut+Dt,Mt=mt-ft,St=wt+(ze-ft),L=vt*ut/q*_t,b=Ye*ut/q*_t;ie.projectionMatrix.makePerspective(Mt,St,L,b,_t,q),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function N(ie,ye){ye===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(ye.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(o===null)return;let ye=ie.near,Ee=ie.far;M.texture!==null&&(M.depthNear>0&&(ye=M.depthNear),M.depthFar>0&&(Ee=M.depthFar)),k.near=X.near=U.near=ye,k.far=X.far=U.far=Ee,(ce!==k.near||ue!==k.far)&&(o.updateRenderState({depthNear:k.near,depthFar:k.far}),ce=k.near,ue=k.far),k.layers.mask=ie.layers.mask|6,U.layers.mask=k.layers.mask&-5,X.layers.mask=k.layers.mask&-3;const ze=ie.parent,it=k.cameras;N(k,ze);for(let Qe=0;Qe<it.length;Qe++)N(it[Qe],ze);it.length===2?xe(k,U,X):k.projectionMatrix.copy(U.projectionMatrix),j(ie,k,ze)};function j(ie,ye,Ee){Ee===null?ie.matrix.copy(ye.matrixWorld):(ie.matrix.copy(Ee.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(ye.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(ye.projectionMatrix),ie.projectionMatrixInverse.copy(ye.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=ml*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(g===null&&S===null))return m},this.setFoveation=function(ie){m=ie,g!==null&&(g.fixedFoveation=ie),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=ie)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(k)},this.getCameraTexture=function(ie){return y[ie]};let ve=null;function Te(ie,ye){if(_=ye.getViewerPose(p||u),E=ye,_!==null){const Ee=_.views;S!==null&&(e.setRenderTargetFramebuffer(w,S.framebuffer),e.setRenderTarget(w));let ze=!1;Ee.length!==k.cameras.length&&(k.cameras.length=0,ze=!0);for(let ut=0;ut<Ee.length;ut++){const vt=Ee[ut];let Ye=null;if(S!==null)Ye=S.getViewport(vt);else{const ot=v.getViewSubImage(g,vt);Ye=ot.viewport,ut===0&&(e.setRenderTargetTextures(w,ot.colorTexture,ot.depthStencilTexture),e.setRenderTarget(w))}let Ze=z[ut];Ze===void 0&&(Ze=new Ci,Ze.layers.enable(ut),Ze.viewport=new fn,z[ut]=Ze),Ze.matrix.fromArray(vt.transform.matrix),Ze.matrix.decompose(Ze.position,Ze.quaternion,Ze.scale),Ze.projectionMatrix.fromArray(vt.projectionMatrix),Ze.projectionMatrixInverse.copy(Ze.projectionMatrix).invert(),Ze.viewport.set(Ye.x,Ye.y,Ye.width,Ye.height),ut===0&&(k.matrix.copy(Ze.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),ze===!0&&k.cameras.push(Ze)}const it=o.enabledFeatures;if(it&&it.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&C){v=r.getBinding();const ut=v.getDepthInformation(Ee[0]);ut&&ut.isValid&&ut.texture&&M.init(ut,o.renderState)}if(it&&it.includes("camera-access")&&C){e.state.unbindTexture(),v=r.getBinding();for(let ut=0;ut<Ee.length;ut++){const vt=Ee[ut].camera;if(vt){let Ye=y[vt];Ye||(Ye=new tS,y[vt]=Ye);const Ze=v.getCameraImage(vt);Ye.sourceTexture=Ze}}}}for(let Ee=0;Ee<P.length;Ee++){const ze=D[Ee],it=P[Ee];ze!==null&&it!==void 0&&it.update(ze,ye,p||u)}ve&&ve(ie,ye),ye.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ye}),E=null}const Ue=new sS;Ue.setAnimationLoop(Te),this.setAnimationLoop=function(ie){ve=ie},this.dispose=function(){}}}const g2=new pn,dS=new ct;dS.set(-1,0,0,0,1,0,0,0,1);function _2(a,e){function i(M,y){M.matrixAutoUpdate===!0&&M.updateMatrix(),y.value.copy(M.matrix)}function r(M,y){y.color.getRGB(M.fogColor.value,nS(a)),y.isFog?(M.fogNear.value=y.near,M.fogFar.value=y.far):y.isFogExp2&&(M.fogDensity.value=y.density)}function o(M,y,O,F,w){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?c(M,y):y.isMeshLambertMaterial?(c(M,y),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(c(M,y),v(M,y)):y.isMeshPhongMaterial?(c(M,y),_(M,y),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(c(M,y),g(M,y),y.isMeshPhysicalMaterial&&S(M,y,w)):y.isMeshMatcapMaterial?(c(M,y),E(M,y)):y.isMeshDepthMaterial?c(M,y):y.isMeshDistanceMaterial?(c(M,y),C(M,y)):y.isMeshNormalMaterial?c(M,y):y.isLineBasicMaterial?(u(M,y),y.isLineDashedMaterial&&h(M,y)):y.isPointsMaterial?m(M,y,O,F):y.isSpriteMaterial?p(M,y):y.isShadowMaterial?(M.color.value.copy(y.color),M.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function c(M,y){M.opacity.value=y.opacity,y.color&&M.diffuse.value.copy(y.color),y.emissive&&M.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(M.map.value=y.map,i(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,i(y.alphaMap,M.alphaMapTransform)),y.bumpMap&&(M.bumpMap.value=y.bumpMap,i(y.bumpMap,M.bumpMapTransform),M.bumpScale.value=y.bumpScale,y.side===si&&(M.bumpScale.value*=-1)),y.normalMap&&(M.normalMap.value=y.normalMap,i(y.normalMap,M.normalMapTransform),M.normalScale.value.copy(y.normalScale),y.side===si&&M.normalScale.value.negate()),y.displacementMap&&(M.displacementMap.value=y.displacementMap,i(y.displacementMap,M.displacementMapTransform),M.displacementScale.value=y.displacementScale,M.displacementBias.value=y.displacementBias),y.emissiveMap&&(M.emissiveMap.value=y.emissiveMap,i(y.emissiveMap,M.emissiveMapTransform)),y.specularMap&&(M.specularMap.value=y.specularMap,i(y.specularMap,M.specularMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest);const O=e.get(y),F=O.envMap,w=O.envMapRotation;F&&(M.envMap.value=F,M.envMapRotation.value.setFromMatrix4(g2.makeRotationFromEuler(w)).transpose(),F.isCubeTexture&&F.isRenderTargetTexture===!1&&M.envMapRotation.value.premultiply(dS),M.reflectivity.value=y.reflectivity,M.ior.value=y.ior,M.refractionRatio.value=y.refractionRatio),y.lightMap&&(M.lightMap.value=y.lightMap,M.lightMapIntensity.value=y.lightMapIntensity,i(y.lightMap,M.lightMapTransform)),y.aoMap&&(M.aoMap.value=y.aoMap,M.aoMapIntensity.value=y.aoMapIntensity,i(y.aoMap,M.aoMapTransform))}function u(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,y.map&&(M.map.value=y.map,i(y.map,M.mapTransform))}function h(M,y){M.dashSize.value=y.dashSize,M.totalSize.value=y.dashSize+y.gapSize,M.scale.value=y.scale}function m(M,y,O,F){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.size.value=y.size*O,M.scale.value=F*.5,y.map&&(M.map.value=y.map,i(y.map,M.uvTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,i(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function p(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.rotation.value=y.rotation,y.map&&(M.map.value=y.map,i(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,i(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function _(M,y){M.specular.value.copy(y.specular),M.shininess.value=Math.max(y.shininess,1e-4)}function v(M,y){y.gradientMap&&(M.gradientMap.value=y.gradientMap)}function g(M,y){M.metalness.value=y.metalness,y.metalnessMap&&(M.metalnessMap.value=y.metalnessMap,i(y.metalnessMap,M.metalnessMapTransform)),M.roughness.value=y.roughness,y.roughnessMap&&(M.roughnessMap.value=y.roughnessMap,i(y.roughnessMap,M.roughnessMapTransform)),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)}function S(M,y,O){M.ior.value=y.ior,y.sheen>0&&(M.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),M.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(M.sheenColorMap.value=y.sheenColorMap,i(y.sheenColorMap,M.sheenColorMapTransform)),y.sheenRoughnessMap&&(M.sheenRoughnessMap.value=y.sheenRoughnessMap,i(y.sheenRoughnessMap,M.sheenRoughnessMapTransform))),y.clearcoat>0&&(M.clearcoat.value=y.clearcoat,M.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(M.clearcoatMap.value=y.clearcoatMap,i(y.clearcoatMap,M.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,i(y.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(M.clearcoatNormalMap.value=y.clearcoatNormalMap,i(y.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===si&&M.clearcoatNormalScale.value.negate())),y.dispersion>0&&(M.dispersion.value=y.dispersion),y.iridescence>0&&(M.iridescence.value=y.iridescence,M.iridescenceIOR.value=y.iridescenceIOR,M.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(M.iridescenceMap.value=y.iridescenceMap,i(y.iridescenceMap,M.iridescenceMapTransform)),y.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=y.iridescenceThicknessMap,i(y.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),y.transmission>0&&(M.transmission.value=y.transmission,M.transmissionSamplerMap.value=O.texture,M.transmissionSamplerSize.value.set(O.width,O.height),y.transmissionMap&&(M.transmissionMap.value=y.transmissionMap,i(y.transmissionMap,M.transmissionMapTransform)),M.thickness.value=y.thickness,y.thicknessMap&&(M.thicknessMap.value=y.thicknessMap,i(y.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=y.attenuationDistance,M.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(M.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(M.anisotropyMap.value=y.anisotropyMap,i(y.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=y.specularIntensity,M.specularColor.value.copy(y.specularColor),y.specularColorMap&&(M.specularColorMap.value=y.specularColorMap,i(y.specularColorMap,M.specularColorMapTransform)),y.specularIntensityMap&&(M.specularIntensityMap.value=y.specularIntensityMap,i(y.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,y){y.matcap&&(M.matcap.value=y.matcap)}function C(M,y){const O=e.get(y).light;M.referencePosition.value.setFromMatrixPosition(O.matrixWorld),M.nearDistance.value=O.shadow.camera.near,M.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function v2(a,e,i,r){let o={},c={},u=[];const h=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function m(w,P){const D=P.program;r.uniformBlockBinding(w,D)}function p(w,P){let D=o[w.id];D===void 0&&(M(w),D=_(w),o[w.id]=D,w.addEventListener("dispose",O));const I=P.program;r.updateUBOMapping(w,I);const T=e.render.frame;c[w.id]!==T&&(g(w),c[w.id]=T)}function _(w){const P=v();w.__bindingPointIndex=P;const D=a.createBuffer(),I=w.__size,T=w.usage;return a.bindBuffer(a.UNIFORM_BUFFER,D),a.bufferData(a.UNIFORM_BUFFER,I,T),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,P,D),D}function v(){for(let w=0;w<h;w++)if(u.indexOf(w)===-1)return u.push(w),w;return Ut("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(w){const P=o[w.id],D=w.uniforms,I=w.__cache;a.bindBuffer(a.UNIFORM_BUFFER,P);for(let T=0,U=D.length;T<U;T++){const X=D[T];if(Array.isArray(X))for(let z=0,k=X.length;z<k;z++)S(X[z],T,z,I);else S(X,T,0,I)}a.bindBuffer(a.UNIFORM_BUFFER,null)}function S(w,P,D,I){if(C(w,P,D,I)===!0){const T=w.__offset,U=w.value;if(Array.isArray(U)){let X=0;for(let z=0;z<U.length;z++){const k=U[z],ce=y(k);E(k,w.__data,X),typeof k!="number"&&typeof k!="boolean"&&!k.isMatrix3&&!ArrayBuffer.isView(k)&&(X+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}}else E(U,w.__data,0);a.bufferSubData(a.UNIFORM_BUFFER,T,w.__data)}}function E(w,P,D){typeof w=="number"||typeof w=="boolean"?P[0]=w:w.isMatrix3?(P[0]=w.elements[0],P[1]=w.elements[1],P[2]=w.elements[2],P[3]=0,P[4]=w.elements[3],P[5]=w.elements[4],P[6]=w.elements[5],P[7]=0,P[8]=w.elements[6],P[9]=w.elements[7],P[10]=w.elements[8],P[11]=0):ArrayBuffer.isView(w)?P.set(new w.constructor(w.buffer,w.byteOffset,P.length)):w.toArray(P,D)}function C(w,P,D,I){const T=w.value,U=P+"_"+D;if(I[U]===void 0)return typeof T=="number"||typeof T=="boolean"?I[U]=T:ArrayBuffer.isView(T)?I[U]=T.slice():I[U]=T.clone(),!0;{const X=I[U];if(typeof T=="number"||typeof T=="boolean"){if(X!==T)return I[U]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(X.equals(T)===!1)return X.copy(T),!0}}return!1}function M(w){const P=w.uniforms;let D=0;const I=16;for(let U=0,X=P.length;U<X;U++){const z=Array.isArray(P[U])?P[U]:[P[U]];for(let k=0,ce=z.length;k<ce;k++){const ue=z[k],Q=Array.isArray(ue.value)?ue.value:[ue.value];for(let B=0,G=Q.length;B<G;B++){const Y=Q[B],fe=y(Y),xe=D%I,N=xe%fe.boundary,j=xe+N;D+=N,j!==0&&I-j<fe.storage&&(D+=I-j),ue.__data=new Float32Array(fe.storage/Float32Array.BYTES_PER_ELEMENT),ue.__offset=D,D+=fe.storage}}}const T=D%I;return T>0&&(D+=I-T),w.__size=D,w.__cache={},this}function y(w){const P={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(P.boundary=4,P.storage=4):w.isVector2?(P.boundary=8,P.storage=8):w.isVector3||w.isColor?(P.boundary=16,P.storage=12):w.isVector4?(P.boundary=16,P.storage=16):w.isMatrix3?(P.boundary=48,P.storage=48):w.isMatrix4?(P.boundary=64,P.storage=64):w.isTexture?rt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(P.boundary=16,P.storage=w.byteLength):rt("WebGLRenderer: Unsupported uniform value type.",w),P}function O(w){const P=w.target;P.removeEventListener("dispose",O);const D=u.indexOf(P.__bindingPointIndex);u.splice(D,1),a.deleteBuffer(o[P.id]),delete o[P.id],delete c[P.id]}function F(){for(const w in o)a.deleteBuffer(o[w]);u=[],o={},c={}}return{bind:m,update:p,dispose:F}}const S2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ji=null;function x2(){return Ji===null&&(Ji=new uE(S2,16,16,$s,Pa),Ji.name="DFG_LUT",Ji.minFilter=bn,Ji.magFilter=bn,Ji.wrapS=Vi,Ji.wrapT=Vi,Ji.generateMipmaps=!1,Ji.needsUpdate=!0),Ji}class M2{constructor(e={}){const{canvas:i=Ty(),context:r=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:g=!1,outputBufferType:S=wi}=e;this.isWebGLRenderer=!0;let E;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=r.getContextAttributes().alpha}else E=u;const C=S,M=new Set([pp,hp,dp]),y=new Set([wi,ra,hl,pl,up,fp]),O=new Uint32Array(4),F=new Int32Array(4),w=new ee;let P=null,D=null;const I=[],T=[];let U=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ia,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const X=this;let z=!1,k=null,ce=null,ue=null,Q=null;this._outputColorSpace=Kn;let B=0,G=0,Y=null,fe=-1,xe=null;const N=new fn,j=new fn;let ve=null;const Te=new Nt(0);let Ue=0,ie=i.width,ye=i.height,Ee=1,ze=null,it=null;const Qe=new fn(0,0,ie,ye),Zt=new fn(0,0,ie,ye);let ut=!1;const vt=new Jv;let Ye=!1,Ze=!1;const ot=new pn,mt=new ee,wt=new fn,Dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ft=!1;function _t(){return Y===null?Ee:1}let q=r;function Mt(A,K){return i.getContext(A,K)}try{const A={alpha:!0,depth:o,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${lp}`),i.addEventListener("webglcontextlost",Gt,!1),i.addEventListener("webglcontextrestored",Lt,!1),i.addEventListener("webglcontextcreationerror",Wn,!1),q===null){const K="webgl2";if(q=Mt(K,A),q===null)throw Mt(K)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(A){throw Ut("WebGLRenderer: "+A.message),A}let St,L,b,$,te,he,Ce,De,pe,me,Ae,Be,Ne,Le,Je,je,st,Z,Re,ge,we,Pe,be;function Xe(){St=new xT(q),St.init(),we=new f2(q,St),L=new dT(q,St,e,we),b=new c2(q,St),L.reversedDepthBuffer&&g&&b.buffers.depth.setReversed(!0),ce=q.createFramebuffer(),ue=q.createFramebuffer(),Q=q.createFramebuffer(),$=new ET(q),te=new jA,he=new u2(q,St,b,te,L,we,$),Ce=new ST(X),De=new RE(q),Pe=new uT(q,De),pe=new MT(q,De,$,Pe),me=new TT(q,pe,De,Pe,$),Z=new bT(q,L,he),Je=new hT(te),Ae=new ZA(X,Ce,St,L,Pe,Je),Be=new _2(X,te),Ne=new QA,Le=new i2(St),st=new cT(X,Ce,b,me,E,m),je=new l2(X,me,L),be=new v2(q,$,L,b),Re=new fT(q,St,$),ge=new yT(q,St,$),$.programs=Ae.programs,X.capabilities=L,X.extensions=St,X.properties=te,X.renderLists=Ne,X.shadowMap=je,X.state=b,X.info=$}Xe(),C!==wi&&(U=new RT(C,i.width,i.height,h,o,c));const He=new m2(X,q);this.xr=He,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const A=St.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=St.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Ee},this.setPixelRatio=function(A){A!==void 0&&(Ee=A,this.setSize(ie,ye,!1))},this.getSize=function(A){return A.set(ie,ye)},this.setSize=function(A,K,oe=!0){if(He.isPresenting){rt("WebGLRenderer: Can't change size while VR device is presenting.");return}ie=A,ye=K,i.width=Math.floor(A*Ee),i.height=Math.floor(K*Ee),oe===!0&&(i.style.width=A+"px",i.style.height=K+"px"),U!==null&&U.setSize(i.width,i.height),this.setViewport(0,0,A,K)},this.getDrawingBufferSize=function(A){return A.set(ie*Ee,ye*Ee).floor()},this.setDrawingBufferSize=function(A,K,oe){ie=A,ye=K,Ee=oe,i.width=Math.floor(A*oe),i.height=Math.floor(K*oe),this.setViewport(0,0,A,K)},this.setEffects=function(A){if(C===wi){Ut("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let K=0;K<A.length;K++)if(A[K].isOutputPass===!0){rt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(N)},this.getViewport=function(A){return A.copy(Qe)},this.setViewport=function(A,K,oe,se){A.isVector4?Qe.set(A.x,A.y,A.z,A.w):Qe.set(A,K,oe,se),b.viewport(N.copy(Qe).multiplyScalar(Ee).round())},this.getScissor=function(A){return A.copy(Zt)},this.setScissor=function(A,K,oe,se){A.isVector4?Zt.set(A.x,A.y,A.z,A.w):Zt.set(A,K,oe,se),b.scissor(j.copy(Zt).multiplyScalar(Ee).round())},this.getScissorTest=function(){return ut},this.setScissorTest=function(A){b.setScissorTest(ut=A)},this.setOpaqueSort=function(A){ze=A},this.setTransparentSort=function(A){it=A},this.getClearColor=function(A){return A.copy(st.getClearColor())},this.setClearColor=function(){st.setClearColor(...arguments)},this.getClearAlpha=function(){return st.getClearAlpha()},this.setClearAlpha=function(){st.setClearAlpha(...arguments)},this.clear=function(A=!0,K=!0,oe=!0){let se=0;if(A){let re=!1;if(Y!==null){const Ie=Y.texture.format;re=M.has(Ie)}if(re){const Ie=Y.texture.type,Ve=y.has(Ie),Oe=st.getClearColor(),We=st.getClearAlpha(),ke=Oe.r,et=Oe.g,dt=Oe.b;Ve?(O[0]=ke,O[1]=et,O[2]=dt,O[3]=We,q.clearBufferuiv(q.COLOR,0,O)):(F[0]=ke,F[1]=et,F[2]=dt,F[3]=We,q.clearBufferiv(q.COLOR,0,F))}else se|=q.COLOR_BUFFER_BIT}K&&(se|=q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),oe&&(se|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),se!==0&&q.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),k=A},this.dispose=function(){i.removeEventListener("webglcontextlost",Gt,!1),i.removeEventListener("webglcontextrestored",Lt,!1),i.removeEventListener("webglcontextcreationerror",Wn,!1),st.dispose(),Ne.dispose(),Le.dispose(),te.dispose(),Ce.dispose(),me.dispose(),Pe.dispose(),be.dispose(),Ae.dispose(),He.dispose(),He.removeEventListener("sessionstart",Ot),He.removeEventListener("sessionend",tn),Dn.stop()};function Gt(A){A.preventDefault(),b_("WebGLRenderer: Context Lost."),z=!0}function Lt(){b_("WebGLRenderer: Context Restored."),z=!1;const A=$.autoReset,K=je.enabled,oe=je.autoUpdate,se=je.needsUpdate,re=je.type;Xe(),$.autoReset=A,je.enabled=K,je.autoUpdate=oe,je.needsUpdate=se,je.type=re}function Wn(A){Ut("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function zn(A){const K=A.target;K.removeEventListener("dispose",zn),Fa(K)}function Fa(A){mn(A),te.remove(A)}function mn(A){const K=te.get(A).programs;K!==void 0&&(K.forEach(function(oe){Ae.releaseProgram(oe)}),A.isShaderMaterial&&Ae.releaseShaderCache(A))}this.renderBufferDirect=function(A,K,oe,se,re,Ie){K===null&&(K=Dt);const Ve=re.isMesh&&re.matrixWorld.determinantAffine()<0,Oe=Ga(A,K,oe,se,re);b.setMaterial(se,Ve);let We=oe.index,ke=1;if(se.wireframe===!0){if(We=pe.getWireframeAttribute(oe),We===void 0)return;ke=2}const et=oe.drawRange,dt=oe.attributes.position;let $e=et.start*ke,Pt=(et.start+et.count)*ke;Ie!==null&&($e=Math.max($e,Ie.start*ke),Pt=Math.min(Pt,(Ie.start+Ie.count)*ke)),We!==null?($e=Math.max($e,0),Pt=Math.min(Pt,We.count)):dt!=null&&($e=Math.max($e,0),Pt=Math.min(Pt,dt.count));const rn=Pt-$e;if(rn<0||rn===1/0)return;Pe.setup(re,se,Oe,oe,We);let Jt,Vt=Re;if(We!==null&&(Jt=De.get(We),Vt=ge,Vt.setIndex(Jt)),re.isMesh)se.wireframe===!0?(b.setLineWidth(se.wireframeLinewidth*_t()),Vt.setMode(q.LINES)):Vt.setMode(q.TRIANGLES);else if(re.isLine){let kt=se.linewidth;kt===void 0&&(kt=1),b.setLineWidth(kt*_t()),re.isLineSegments?Vt.setMode(q.LINES):re.isLineLoop?Vt.setMode(q.LINE_LOOP):Vt.setMode(q.LINE_STRIP)}else re.isPoints?Vt.setMode(q.POINTS):re.isSprite&&Vt.setMode(q.TRIANGLES);if(re.isBatchedMesh)if(St.get("WEBGL_multi_draw"))Vt.renderMultiDraw(re._multiDrawStarts,re._multiDrawCounts,re._multiDrawCount);else{const kt=re._multiDrawStarts,Ge=re._multiDrawCounts,Hn=re._multiDrawCount,yt=We?De.get(We).bytesPerElement:1,An=te.get(se).currentProgram.getUniforms();for(let oi=0;oi<Hn;oi++)An.setValue(q,"_gl_DrawID",oi),Vt.render(kt[oi]/yt,Ge[oi])}else if(re.isInstancedMesh)Vt.renderInstances($e,rn,re.count);else if(oe.isInstancedBufferGeometry){const kt=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,Ge=Math.min(oe.instanceCount,kt);Vt.renderInstances($e,rn,Ge)}else Vt.render($e,rn)};function Tn(A,K,oe){A.transparent===!0&&A.side===ea&&A.forceSinglePass===!1?(A.side=si,A.needsUpdate=!0,Ha(A,K,oe),A.side=Oa,A.needsUpdate=!0,Ha(A,K,oe),A.side=ea):Ha(A,K,oe)}this.compile=function(A,K,oe=null){oe===null&&(oe=A),D=Le.get(oe),D.init(K),T.push(D),oe.traverseVisible(function(re){re.isLight&&re.layers.test(K.layers)&&(D.pushLight(re),re.castShadow&&D.pushShadow(re))}),A!==oe&&A.traverseVisible(function(re){re.isLight&&re.layers.test(K.layers)&&(D.pushLight(re),re.castShadow&&D.pushShadow(re))}),D.setupLights();const se=new Set;return A.traverse(function(re){if(!(re.isMesh||re.isPoints||re.isLine||re.isSprite))return;const Ie=re.material;if(Ie)if(Array.isArray(Ie))for(let Ve=0;Ve<Ie.length;Ve++){const Oe=Ie[Ve];Tn(Oe,oe,re),se.add(Oe)}else Tn(Ie,oe,re),se.add(Ie)}),D=T.pop(),se},this.compileAsync=function(A,K,oe=null){const se=this.compile(A,K,oe);return new Promise(re=>{function Ie(){if(se.forEach(function(Ve){te.get(Ve).currentProgram.isReady()&&se.delete(Ve)}),se.size===0){re(A);return}setTimeout(Ie,10)}St.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let ri=null;function gn(A){ri&&ri(A)}function Ot(){Dn.stop()}function tn(){Dn.start()}const Dn=new sS;Dn.setAnimationLoop(gn),typeof self<"u"&&Dn.setContext(self),this.setAnimationLoop=function(A){ri=A,He.setAnimationLoop(A),A===null?Dn.stop():Dn.start()},He.addEventListener("sessionstart",Ot),He.addEventListener("sessionend",tn),this.render=function(A,K){if(K!==void 0&&K.isCamera!==!0){Ut("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;k!==null&&k.renderStart(A,K);const oe=He.enabled===!0&&He.isPresenting===!0,se=U!==null&&(Y===null||oe)&&U.begin(X,Y);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),He.enabled===!0&&He.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(He.cameraAutoUpdate===!0&&He.updateCamera(K),K=He.getCamera()),A.isScene===!0&&A.onBeforeRender(X,A,K,Y),D=Le.get(A,T.length),D.init(K),D.state.textureUnits=he.getTextureUnits(),T.push(D),ot.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),vt.setFromProjectionMatrix(ot,na,K.reversedDepth),Ze=this.localClippingEnabled,Ye=Je.init(this.clippingPlanes,Ze),P=Ne.get(A,I.length),P.init(),I.push(P),He.enabled===!0&&He.isPresenting===!0){const Ve=X.xr.getDepthSensingMesh();Ve!==null&&Jn(Ve,K,-1/0,X.sortObjects)}Jn(A,K,0,X.sortObjects),P.finish(),X.sortObjects===!0&&P.sort(ze,it,K.reversedDepth),ft=He.enabled===!1||He.isPresenting===!1||He.hasDepthSensing()===!1,ft&&st.addToRenderList(P,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ye===!0&&Je.beginShadows();const re=D.state.shadowsArray;if(je.render(re,A,K),Ye===!0&&Je.endShadows(),(se&&U.hasRenderPass())===!1){const Ve=P.opaque,Oe=P.transmissive;if(D.setupLights(),K.isArrayCamera){const We=K.cameras;if(Oe.length>0)for(let ke=0,et=We.length;ke<et;ke++){const dt=We[ke];Ba(Ve,Oe,A,dt)}ft&&st.render(A);for(let ke=0,et=We.length;ke<et;ke++){const dt=We[ke];ys(P,A,dt,dt.viewport)}}else Oe.length>0&&Ba(Ve,Oe,A,K),ft&&st.render(A),ys(P,A,K)}Y!==null&&G===0&&(he.updateMultisampleRenderTarget(Y),he.updateRenderTargetMipmap(Y)),se&&U.end(X),A.isScene===!0&&A.onAfterRender(X,A,K),Pe.resetDefaultState(),fe=-1,xe=null,T.pop(),T.length>0?(D=T[T.length-1],he.setTextureUnits(D.state.textureUnits),Ye===!0&&Je.setGlobalState(X.clippingPlanes,D.state.camera)):D=null,I.pop(),I.length>0?P=I[I.length-1]:P=null,k!==null&&k.renderEnd()};function Jn(A,K,oe,se){if(A.visible===!1)return;if(A.layers.test(K.layers)){if(A.isGroup)oe=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(K);else if(A.isLightProbeGrid)D.pushLightProbeGrid(A);else if(A.isLight)D.pushLight(A),A.castShadow&&D.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||vt.intersectsSprite(A)){se&&wt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ot);const Ve=me.update(A),Oe=A.material;Oe.visible&&P.push(A,Ve,Oe,oe,wt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||vt.intersectsObject(A))){const Ve=me.update(A),Oe=A.material;if(se&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),wt.copy(A.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),wt.copy(Ve.boundingSphere.center)),wt.applyMatrix4(A.matrixWorld).applyMatrix4(ot)),Array.isArray(Oe)){const We=Ve.groups;for(let ke=0,et=We.length;ke<et;ke++){const dt=We[ke],$e=Oe[dt.materialIndex];$e&&$e.visible&&P.push(A,Ve,$e,oe,wt.z,dt)}}else Oe.visible&&P.push(A,Ve,Oe,oe,wt.z,null)}}const Ie=A.children;for(let Ve=0,Oe=Ie.length;Ve<Oe;Ve++)Jn(Ie[Ve],K,oe,se)}function ys(A,K,oe,se){const{opaque:re,transmissive:Ie,transparent:Ve}=A;D.setupLightsView(oe),Ye===!0&&Je.setGlobalState(X.clippingPlanes,oe),se&&b.viewport(N.copy(se)),re.length>0&&Wi(re,K,oe),Ie.length>0&&Wi(Ie,K,oe),Ve.length>0&&Wi(Ve,K,oe),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function Ba(A,K,oe,se){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;if(D.state.transmissionRenderTarget[se.id]===void 0){const $e=St.has("EXT_color_buffer_half_float")||St.has("EXT_color_buffer_float");D.state.transmissionRenderTarget[se.id]=new aa(1,1,{generateMipmaps:!0,type:$e?Pa:wi,minFilter:xs,samples:Math.max(4,L.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ct.workingColorSpace})}const Ie=D.state.transmissionRenderTarget[se.id],Ve=se.viewport||N;Ie.setSize(Ve.z*X.transmissionResolutionScale,Ve.w*X.transmissionResolutionScale);const Oe=X.getRenderTarget(),We=X.getActiveCubeFace(),ke=X.getActiveMipmapLevel();X.setRenderTarget(Ie),X.getClearColor(Te),Ue=X.getClearAlpha(),Ue<1&&X.setClearColor(16777215,.5),X.clear(),ft&&st.render(oe);const et=X.toneMapping;X.toneMapping=ia;const dt=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),D.setupLightsView(se),Ye===!0&&Je.setGlobalState(X.clippingPlanes,se),Wi(A,oe,se),he.updateMultisampleRenderTarget(Ie),he.updateRenderTargetMipmap(Ie),St.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let Pt=0,rn=K.length;Pt<rn;Pt++){const Jt=K[Pt],{object:Vt,geometry:kt,material:Ge,group:Hn}=Jt;if(Ge.side===ea&&Vt.layers.test(se.layers)){const yt=Ge.side;Ge.side=si,Ge.needsUpdate=!0,za(Vt,oe,se,kt,Ge,Hn),Ge.side=yt,Ge.needsUpdate=!0,$e=!0}}$e===!0&&(he.updateMultisampleRenderTarget(Ie),he.updateRenderTargetMipmap(Ie))}X.setRenderTarget(Oe,We,ke),X.setClearColor(Te,Ue),dt!==void 0&&(se.viewport=dt),X.toneMapping=et}function Wi(A,K,oe){const se=K.isScene===!0?K.overrideMaterial:null;for(let re=0,Ie=A.length;re<Ie;re++){const Ve=A[re],{object:Oe,geometry:We,group:ke}=Ve;let et=Ve.material;et.allowOverride===!0&&se!==null&&(et=se),Oe.layers.test(oe.layers)&&za(Oe,K,oe,We,et,ke)}}function za(A,K,oe,se,re,Ie){A.onBeforeRender(X,K,oe,se,re,Ie),A.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),re.onBeforeRender(X,K,oe,se,A,Ie),re.transparent===!0&&re.side===ea&&re.forceSinglePass===!1?(re.side=si,re.needsUpdate=!0,X.renderBufferDirect(oe,K,se,re,A,Ie),re.side=Oa,re.needsUpdate=!0,X.renderBufferDirect(oe,K,se,re,A,Ie),re.side=ea):X.renderBufferDirect(oe,K,se,re,A,Ie),A.onAfterRender(X,K,oe,se,re,Ie)}function Ha(A,K,oe){K.isScene!==!0&&(K=Dt);const se=te.get(A),re=D.state.lights,Ie=D.state.shadowsArray,Ve=re.state.version,Oe=Ae.getParameters(A,re.state,Ie,K,oe,D.state.lightProbeGridArray),We=Ae.getProgramCacheKey(Oe);let ke=se.programs;se.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?K.environment:null,se.fog=K.fog;const et=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;se.envMap=Ce.get(A.envMap||se.environment,et),se.envMapRotation=se.environment!==null&&A.envMap===null?K.environmentRotation:A.envMapRotation,ke===void 0&&(A.addEventListener("dispose",zn),ke=new Map,se.programs=ke);let dt=ke.get(We);if(dt!==void 0){if(se.currentProgram===dt&&se.lightsStateVersion===Ve)return la(A,Oe),dt}else Oe.uniforms=Ae.getUniforms(A),k!==null&&A.isNodeMaterial&&k.build(A,oe,Oe),A.onBeforeCompile(Oe,X),dt=Ae.acquireProgram(Oe,We),ke.set(We,dt),se.uniforms=Oe.uniforms;const $e=se.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&($e.clippingPlanes=Je.uniform),la(A,Oe),se.needsLights=Sl(A),se.lightsStateVersion=Ve,se.needsLights&&($e.ambientLightColor.value=re.state.ambient,$e.lightProbe.value=re.state.probe,$e.directionalLights.value=re.state.directional,$e.directionalLightShadows.value=re.state.directionalShadow,$e.spotLights.value=re.state.spot,$e.spotLightShadows.value=re.state.spotShadow,$e.rectAreaLights.value=re.state.rectArea,$e.ltc_1.value=re.state.rectAreaLTC1,$e.ltc_2.value=re.state.rectAreaLTC2,$e.pointLights.value=re.state.point,$e.pointLightShadows.value=re.state.pointShadow,$e.hemisphereLights.value=re.state.hemi,$e.directionalShadowMatrix.value=re.state.directionalShadowMatrix,$e.spotLightMatrix.value=re.state.spotLightMatrix,$e.spotLightMap.value=re.state.spotLightMap,$e.pointShadowMatrix.value=re.state.pointShadowMatrix),se.lightProbeGrid=D.state.lightProbeGridArray.length>0,se.currentProgram=dt,se.uniformsList=null,dt}function oa(A){if(A.uniformsList===null){const K=A.currentProgram.getUniforms();A.uniformsList=iu.seqWithValue(K.seq,A.uniforms)}return A.uniformsList}function la(A,K){const oe=te.get(A);oe.outputColorSpace=K.outputColorSpace,oe.batching=K.batching,oe.batchingColor=K.batchingColor,oe.instancing=K.instancing,oe.instancingColor=K.instancingColor,oe.instancingMorph=K.instancingMorph,oe.skinning=K.skinning,oe.morphTargets=K.morphTargets,oe.morphNormals=K.morphNormals,oe.morphColors=K.morphColors,oe.morphTargetsCount=K.morphTargetsCount,oe.numClippingPlanes=K.numClippingPlanes,oe.numIntersection=K.numClipIntersection,oe.vertexAlphas=K.vertexAlphas,oe.vertexTangents=K.vertexTangents,oe.toneMapping=K.toneMapping}function Es(A,K){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;w.setFromMatrixPosition(K.matrixWorld);for(let oe=0,se=A.length;oe<se;oe++){const re=A[oe];if(re.texture!==null&&re.boundingBox.containsPoint(w))return re}return null}function Ga(A,K,oe,se,re){K.isScene!==!0&&(K=Dt),he.resetTextureUnits();const Ie=K.fog,Ve=se.isMeshStandardMaterial||se.isMeshLambertMaterial||se.isMeshPhongMaterial?K.environment:null,Oe=Y===null?X.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Ct.workingColorSpace,We=se.isMeshStandardMaterial||se.isMeshLambertMaterial&&!se.envMap||se.isMeshPhongMaterial&&!se.envMap,ke=Ce.get(se.envMap||Ve,We),et=se.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,dt=!!oe.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),$e=!!oe.morphAttributes.position,Pt=!!oe.morphAttributes.normal,rn=!!oe.morphAttributes.color;let Jt=ia;se.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Jt=X.toneMapping);const Vt=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,kt=Vt!==void 0?Vt.length:0,Ge=te.get(se),Hn=D.state.lights;if(Ye===!0&&(Ze===!0||A!==xe)){const Ht=A===xe&&se.id===fe;Je.setState(se,A,Ht)}let yt=!1;se.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==Hn.state.version||Ge.outputColorSpace!==Oe||re.isBatchedMesh&&Ge.batching===!1||!re.isBatchedMesh&&Ge.batching===!0||re.isBatchedMesh&&Ge.batchingColor===!0&&re.colorTexture===null||re.isBatchedMesh&&Ge.batchingColor===!1&&re.colorTexture!==null||re.isInstancedMesh&&Ge.instancing===!1||!re.isInstancedMesh&&Ge.instancing===!0||re.isSkinnedMesh&&Ge.skinning===!1||!re.isSkinnedMesh&&Ge.skinning===!0||re.isInstancedMesh&&Ge.instancingColor===!0&&re.instanceColor===null||re.isInstancedMesh&&Ge.instancingColor===!1&&re.instanceColor!==null||re.isInstancedMesh&&Ge.instancingMorph===!0&&re.morphTexture===null||re.isInstancedMesh&&Ge.instancingMorph===!1&&re.morphTexture!==null||Ge.envMap!==ke||se.fog===!0&&Ge.fog!==Ie||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==Je.numPlanes||Ge.numIntersection!==Je.numIntersection)||Ge.vertexAlphas!==et||Ge.vertexTangents!==dt||Ge.morphTargets!==$e||Ge.morphNormals!==Pt||Ge.morphColors!==rn||Ge.toneMapping!==Jt||Ge.morphTargetsCount!==kt||!!Ge.lightProbeGrid!=D.state.lightProbeGridArray.length>0)&&(yt=!0):(yt=!0,Ge.__version=se.version);let An=Ge.currentProgram;yt===!0&&(An=Ha(se,K,re),k&&se.isNodeMaterial&&k.onUpdateProgram(se,An,Ge));let oi=!1,Ui=!1,li=!1;const Xt=An.getUniforms(),on=Ge.uniforms;if(b.useProgram(An.program)&&(oi=!0,Ui=!0,li=!0),se.id!==fe&&(fe=se.id,Ui=!0),Ge.needsLights){const Ht=Es(D.state.lightProbeGridArray,re);Ge.lightProbeGrid!==Ht&&(Ge.lightProbeGrid=Ht,Ui=!0)}if(oi||xe!==A){b.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Xt.setValue(q,"projectionMatrix",A.projectionMatrix),Xt.setValue(q,"viewMatrix",A.matrixWorldInverse);const qi=Xt.map.cameraPosition;qi!==void 0&&qi.setValue(q,mt.setFromMatrixPosition(A.matrixWorld)),L.logarithmicDepthBuffer&&Xt.setValue(q,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&Xt.setValue(q,"isOrthographic",A.isOrthographicCamera===!0),xe!==A&&(xe=A,Ui=!0,li=!0)}if(Ge.needsLights&&(Hn.state.directionalShadowMap.length>0&&Xt.setValue(q,"directionalShadowMap",Hn.state.directionalShadowMap,he),Hn.state.spotShadowMap.length>0&&Xt.setValue(q,"spotShadowMap",Hn.state.spotShadowMap,he),Hn.state.pointShadowMap.length>0&&Xt.setValue(q,"pointShadowMap",Hn.state.pointShadowMap,he)),re.isSkinnedMesh){Xt.setOptional(q,re,"bindMatrix"),Xt.setOptional(q,re,"bindMatrixInverse");const Ht=re.skeleton;Ht&&(Ht.boneTexture===null&&Ht.computeBoneTexture(),Xt.setValue(q,"boneTexture",Ht.boneTexture,he))}re.isBatchedMesh&&(Xt.setOptional(q,re,"batchingTexture"),Xt.setValue(q,"batchingTexture",re._matricesTexture,he),Xt.setOptional(q,re,"batchingIdTexture"),Xt.setValue(q,"batchingIdTexture",re._indirectTexture,he),Xt.setOptional(q,re,"batchingColorTexture"),re._colorsTexture!==null&&Xt.setValue(q,"batchingColorTexture",re._colorsTexture,he));const Oi=oe.morphAttributes;if((Oi.position!==void 0||Oi.normal!==void 0||Oi.color!==void 0)&&Z.update(re,oe,An),(Ui||Ge.receiveShadow!==re.receiveShadow)&&(Ge.receiveShadow=re.receiveShadow,Xt.setValue(q,"receiveShadow",re.receiveShadow)),(se.isMeshStandardMaterial||se.isMeshLambertMaterial||se.isMeshPhongMaterial)&&se.envMap===null&&K.environment!==null&&(on.envMapIntensity.value=K.environmentIntensity),on.dfgLUT!==void 0&&(on.dfgLUT.value=x2()),Ui){if(Xt.setValue(q,"toneMappingExposure",X.toneMappingExposure),Ge.needsLights&&_n(on,li),Ie&&se.fog===!0&&Be.refreshFogUniforms(on,Ie),Be.refreshMaterialUniforms(on,se,Ee,ye,D.state.transmissionRenderTarget[A.id]),Ge.needsLights&&Ge.lightProbeGrid){const Ht=Ge.lightProbeGrid;on.probesSH.value=Ht.texture,on.probesMin.value.copy(Ht.boundingBox.min),on.probesMax.value.copy(Ht.boundingBox.max),on.probesResolution.value.copy(Ht.resolution)}iu.upload(q,oa(Ge),on,he)}if(se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(iu.upload(q,oa(Ge),on,he),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&Xt.setValue(q,"center",re.center),Xt.setValue(q,"modelViewMatrix",re.modelViewMatrix),Xt.setValue(q,"normalMatrix",re.normalMatrix),Xt.setValue(q,"modelMatrix",re.matrixWorld),se.uniformsGroups!==void 0){const Ht=se.uniformsGroups;for(let qi=0,Va=Ht.length;qi<Va;qi++){const bs=Ht[qi];be.update(bs,An),be.bind(bs,An)}}return An}function _n(A,K){A.ambientLightColor.needsUpdate=K,A.lightProbe.needsUpdate=K,A.directionalLights.needsUpdate=K,A.directionalLightShadows.needsUpdate=K,A.pointLights.needsUpdate=K,A.pointLightShadows.needsUpdate=K,A.spotLights.needsUpdate=K,A.spotLightShadows.needsUpdate=K,A.rectAreaLights.needsUpdate=K,A.hemisphereLights.needsUpdate=K}function Sl(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(A,K,oe){const se=te.get(A);se.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,se.__autoAllocateDepthBuffer===!1&&(se.__useRenderToTexture=!1),te.get(A.texture).__webglTexture=K,te.get(A.depthTexture).__webglTexture=se.__autoAllocateDepthBuffer?void 0:oe,se.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,K){const oe=te.get(A);oe.__webglFramebuffer=K,oe.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(A,K=0,oe=0){Y=A,B=K,G=oe;let se=null,re=!1,Ie=!1;if(A){const Oe=te.get(A);if(Oe.__useDefaultFramebuffer!==void 0){b.bindFramebuffer(q.FRAMEBUFFER,Oe.__webglFramebuffer),N.copy(A.viewport),j.copy(A.scissor),ve=A.scissorTest,b.viewport(N),b.scissor(j),b.setScissorTest(ve),fe=-1;return}else if(Oe.__webglFramebuffer===void 0)he.setupRenderTarget(A);else if(Oe.__hasExternalTextures)he.rebindTextures(A,te.get(A.texture).__webglTexture,te.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const et=A.depthTexture;if(Oe.__boundDepthTexture!==et){if(et!==null&&te.has(et)&&(A.width!==et.image.width||A.height!==et.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");he.setupDepthRenderbuffer(A)}}const We=A.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Ie=!0);const ke=te.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ke[K])?se=ke[K][oe]:se=ke[K],re=!0):A.samples>0&&he.useMultisampledRTT(A)===!1?se=te.get(A).__webglMultisampledFramebuffer:Array.isArray(ke)?se=ke[oe]:se=ke,N.copy(A.viewport),j.copy(A.scissor),ve=A.scissorTest}else N.copy(Qe).multiplyScalar(Ee).floor(),j.copy(Zt).multiplyScalar(Ee).floor(),ve=ut;if(oe!==0&&(se=ce),b.bindFramebuffer(q.FRAMEBUFFER,se)&&b.drawBuffers(A,se),b.viewport(N),b.scissor(j),b.setScissorTest(ve),re){const Oe=te.get(A.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+K,Oe.__webglTexture,oe)}else if(Ie){const Oe=K;for(let We=0;We<A.textures.length;We++){const ke=te.get(A.textures[We]);q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0+We,ke.__webglTexture,oe,Oe)}}else if(A!==null&&oe!==0){const Oe=te.get(A.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Oe.__webglTexture,oe)}fe=-1},this.readRenderTargetPixels=function(A,K,oe,se,re,Ie,Ve,Oe=0){if(!(A&&A.isWebGLRenderTarget)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=te.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ve!==void 0&&(We=We[Ve]),We){b.bindFramebuffer(q.FRAMEBUFFER,We);try{const ke=A.textures[Oe],et=ke.format,dt=ke.type;if(A.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Oe),!L.textureFormatReadable(et)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!L.textureTypeReadable(dt)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=A.width-se&&oe>=0&&oe<=A.height-re&&q.readPixels(K,oe,se,re,we.convert(et),we.convert(dt),Ie)}finally{const ke=Y!==null?te.get(Y).__webglFramebuffer:null;b.bindFramebuffer(q.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(A,K,oe,se,re,Ie,Ve,Oe=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let We=te.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ve!==void 0&&(We=We[Ve]),We)if(K>=0&&K<=A.width-se&&oe>=0&&oe<=A.height-re){b.bindFramebuffer(q.FRAMEBUFFER,We);const ke=A.textures[Oe],et=ke.format,dt=ke.type;if(A.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Oe),!L.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!L.textureTypeReadable(dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $e=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,$e),q.bufferData(q.PIXEL_PACK_BUFFER,Ie.byteLength,q.STREAM_READ),q.readPixels(K,oe,se,re,we.convert(et),we.convert(dt),0);const Pt=Y!==null?te.get(Y).__webglFramebuffer:null;b.bindFramebuffer(q.FRAMEBUFFER,Pt);const rn=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await Ay(q,rn,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,$e),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,Ie),q.deleteBuffer($e),q.deleteSync(rn),Ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,K=null,oe=0){const se=Math.pow(2,-oe),re=Math.floor(A.image.width*se),Ie=Math.floor(A.image.height*se),Ve=K!==null?K.x:0,Oe=K!==null?K.y:0;he.setTexture2D(A,0),q.copyTexSubImage2D(q.TEXTURE_2D,oe,0,0,Ve,Oe,re,Ie),b.unbindTexture()},this.copyTextureToTexture=function(A,K,oe=null,se=null,re=0,Ie=0){let Ve,Oe,We,ke,et,dt,$e,Pt,rn;const Jt=A.isCompressedTexture?A.mipmaps[Ie]:A.image;if(oe!==null)Ve=oe.max.x-oe.min.x,Oe=oe.max.y-oe.min.y,We=oe.isBox3?oe.max.z-oe.min.z:1,ke=oe.min.x,et=oe.min.y,dt=oe.isBox3?oe.min.z:0;else{const on=Math.pow(2,-re);Ve=Math.floor(Jt.width*on),Oe=Math.floor(Jt.height*on),A.isDataArrayTexture?We=Jt.depth:A.isData3DTexture?We=Math.floor(Jt.depth*on):We=1,ke=0,et=0,dt=0}se!==null?($e=se.x,Pt=se.y,rn=se.z):($e=0,Pt=0,rn=0);const Vt=we.convert(K.format),kt=we.convert(K.type);let Ge;K.isData3DTexture?(he.setTexture3D(K,0),Ge=q.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(he.setTexture2DArray(K,0),Ge=q.TEXTURE_2D_ARRAY):(he.setTexture2D(K,0),Ge=q.TEXTURE_2D),b.activeTexture(q.TEXTURE0),b.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,K.flipY),b.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),b.pixelStorei(q.UNPACK_ALIGNMENT,K.unpackAlignment);const Hn=b.getParameter(q.UNPACK_ROW_LENGTH),yt=b.getParameter(q.UNPACK_IMAGE_HEIGHT),An=b.getParameter(q.UNPACK_SKIP_PIXELS),oi=b.getParameter(q.UNPACK_SKIP_ROWS),Ui=b.getParameter(q.UNPACK_SKIP_IMAGES);b.pixelStorei(q.UNPACK_ROW_LENGTH,Jt.width),b.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Jt.height),b.pixelStorei(q.UNPACK_SKIP_PIXELS,ke),b.pixelStorei(q.UNPACK_SKIP_ROWS,et),b.pixelStorei(q.UNPACK_SKIP_IMAGES,dt);const li=A.isDataArrayTexture||A.isData3DTexture,Xt=K.isDataArrayTexture||K.isData3DTexture;if(A.isDepthTexture){const on=te.get(A),Oi=te.get(K),Ht=te.get(on.__renderTarget),qi=te.get(Oi.__renderTarget);b.bindFramebuffer(q.READ_FRAMEBUFFER,Ht.__webglFramebuffer),b.bindFramebuffer(q.DRAW_FRAMEBUFFER,qi.__webglFramebuffer);for(let Va=0;Va<We;Va++)li&&(q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,te.get(A).__webglTexture,re,dt+Va),q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,te.get(K).__webglTexture,Ie,rn+Va)),q.blitFramebuffer(ke,et,Ve,Oe,$e,Pt,Ve,Oe,q.DEPTH_BUFFER_BIT,q.NEAREST);b.bindFramebuffer(q.READ_FRAMEBUFFER,null),b.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else if(re!==0||A.isRenderTargetTexture||te.has(A)){const on=te.get(A),Oi=te.get(K);b.bindFramebuffer(q.READ_FRAMEBUFFER,ue),b.bindFramebuffer(q.DRAW_FRAMEBUFFER,Q);for(let Ht=0;Ht<We;Ht++)li?q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,on.__webglTexture,re,dt+Ht):q.framebufferTexture2D(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,on.__webglTexture,re),Xt?q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Oi.__webglTexture,Ie,rn+Ht):q.framebufferTexture2D(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Oi.__webglTexture,Ie),re!==0?q.blitFramebuffer(ke,et,Ve,Oe,$e,Pt,Ve,Oe,q.COLOR_BUFFER_BIT,q.NEAREST):Xt?q.copyTexSubImage3D(Ge,Ie,$e,Pt,rn+Ht,ke,et,Ve,Oe):q.copyTexSubImage2D(Ge,Ie,$e,Pt,ke,et,Ve,Oe);b.bindFramebuffer(q.READ_FRAMEBUFFER,null),b.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else Xt?A.isDataTexture||A.isData3DTexture?q.texSubImage3D(Ge,Ie,$e,Pt,rn,Ve,Oe,We,Vt,kt,Jt.data):K.isCompressedArrayTexture?q.compressedTexSubImage3D(Ge,Ie,$e,Pt,rn,Ve,Oe,We,Vt,Jt.data):q.texSubImage3D(Ge,Ie,$e,Pt,rn,Ve,Oe,We,Vt,kt,Jt):A.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,Ie,$e,Pt,Ve,Oe,Vt,kt,Jt.data):A.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,Ie,$e,Pt,Jt.width,Jt.height,Vt,Jt.data):q.texSubImage2D(q.TEXTURE_2D,Ie,$e,Pt,Ve,Oe,Vt,kt,Jt);b.pixelStorei(q.UNPACK_ROW_LENGTH,Hn),b.pixelStorei(q.UNPACK_IMAGE_HEIGHT,yt),b.pixelStorei(q.UNPACK_SKIP_PIXELS,An),b.pixelStorei(q.UNPACK_SKIP_ROWS,oi),b.pixelStorei(q.UNPACK_SKIP_IMAGES,Ui),Ie===0&&K.generateMipmaps&&q.generateMipmap(Ge),b.unbindTexture()},this.initRenderTarget=function(A){te.get(A).__webglFramebuffer===void 0&&he.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?he.setTextureCube(A,0):A.isData3DTexture?he.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?he.setTexture2DArray(A,0):he.setTexture2D(A,0),b.unbindTexture()},this.resetState=function(){B=0,G=0,Y=null,b.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return na}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Ct._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ct._getUnpackColorSpace()}}const y2="/assets/Reckk-RegularItalic-DLM8ilig.ttf",E2="/assets/Reckk-MediumItalic-D_uyfX4p.otf",b2="/assets/CXLMediumItalic-DYSp-DoC.otf",T2=4,A2=5,Qn={fleet:"MAEX",name:"SharpeShark",version:"v1",role:"Executor",handle:"@sharpeshark",didShort:"0xf8a2…6035"};function hS(a){return["discover","copy","supervise","isolate"][a]??"discover"}function R2(a){return hS(a)}function C2(a,e,i){const r=e.split(/\s+/),o=[];let c="";for(const u of r){const h=c?`${c} ${u}`:u;a.measureText(h).width<=i?c=h:(c&&o.push(c),c=u)}return c&&o.push(c),o}function w2(a,e){const r=e<520?300:400,o=Math.round(r*a),c=Math.round(o*A2/T2);return{W:o,H:c}}function pS(a,e,i,r,o,c){const u=Math.min(c,r/2,o/2);a.beginPath(),a.moveTo(e+u,i),a.arcTo(e+r,i,e+r,i+o,u),a.arcTo(e+r,i+o,e,i+o,u),a.arcTo(e,i+o,e,i,u),a.arcTo(e,i,e+r,i,u),a.closePath()}function en(a,e,i,r,o,c,u){pS(a,e,i,r,o,c),a.fillStyle=u,a.fill()}function sn(a,e,i,r,o,c,u,h){pS(a,e,i,r,o,c),a.strokeStyle=u,a.lineWidth=h,a.stroke()}function gu(a,e,i,r,o,c){en(a,e,i,r,o,c,"#0c0e12"),sn(a,e,i,r,o,c,"rgba(255,255,255,0.12)",Math.max(1,c*.12))}function _u(a,e,i,r,o,c,u){const h=11*u;a.fillStyle="#c8f5a8",a.font=`700 ${h}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText(c,e+o,i+o+h);const m=22*u,p=e+r-o-m,_=i+o-2*u;return sn(a,p,_,m,m,4*u,"rgba(255,255,255,0.14)",1),a.strokeStyle="rgba(255,255,255,0.55)",a.lineWidth=Math.max(1,1.25*u),a.beginPath(),a.moveTo(p+6*u,_+6*u),a.lineTo(p+m-6*u,_+m-6*u),a.moveTo(p+m-6*u,_+6*u),a.lineTo(p+6*u,_+m-6*u),a.stroke(),i+o+h+10*u}function mS(a,e,i,r,o,c,u,h){const m=28*h,p=(r-o*2)/2,_=10*h;a.font=`700 ${_}px "DM Mono", ui-monospace, monospace`;for(let v=0;v<2;v++){const g=e+o+v*p,S=v===u;a.fillStyle=S?"rgba(255,255,255,0.92)":"rgba(255,255,255,0.38)",a.textAlign="center",a.fillText(c[v],g+p/2,i+14*h),S&&(a.fillStyle="#c8f5a8",a.fillRect(g+4*h,i+m-2*h,p-8*h,2*h))}return a.textAlign="left",a.strokeStyle="rgba(255,255,255,0.08)",a.lineWidth=1,a.beginPath(),a.moveTo(e+o,i+m),a.lineTo(e+r-o,i+m),a.stroke(),i+m+10*h}function D2(a,e,i,r,o,c,u,h,m){const p=10*m,_=22*m;a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${p}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText(c,e+o,i+14*m);const v=`${String(u).padStart(2,"0")} / ${String(h).padStart(2,"0")}`;a.fillStyle="rgba(255,255,255,0.38)",a.font=`700 ${8*m}px "DM Mono", ui-monospace, monospace`,a.textAlign="right",a.fillText(v,e+r-o,i+14*m),a.textAlign="left",a.strokeStyle="rgba(255,255,255,0.08)",a.lineWidth=1,a.beginPath(),a.moveTo(e+o,i+_),a.lineTo(e+r-o,i+_),a.stroke(),a.fillStyle="#c8f5a8";const g=Math.min(72*m,r*.28);return a.fillRect(e+o,i+_-2*m,g,2*m),i+_+10*m}function N2(a,e,i,r,o,c,u){const h=9*u;a.fillStyle="rgba(255,255,255,0.38)",a.font=`700 ${h}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText(o,e,i+h);const m=i+h+6*u,p=34*u;en(a,e,m,r,p,6*u,"rgba(255,255,255,0.04)"),sn(a,e,m,r,p,6*u,"rgba(255,255,255,0.12)",1),a.fillStyle=c.startsWith("Select")||c==="0x..."?"rgba(255,255,255,0.35)":"rgba(255,255,255,0.88)",a.font=`500 ${11*u}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(c,e+10*u,m+p*.62),a.strokeStyle="rgba(255,255,255,0.4)",a.lineWidth=Math.max(1,1.2*u);const _=e+r-14*u,v=m+p/2;return a.beginPath(),a.moveTo(_-4*u,v-2*u),a.lineTo(_,v+3*u),a.lineTo(_+4*u,v-2*u),a.stroke(),h+6*u+p}function L2(a,e,i,r,o){const c=9*o;a.fillStyle="rgba(255,255,255,0.38)",a.font=`700 ${c}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText("AMOUNT",e,i+c),a.textAlign="right",a.fillStyle="rgba(255,255,255,0.45)",a.fillText("AVAILABLE 5,000.00",e+r,i+c),a.textAlign="left";const u=i+c+6*o,h=44*o;en(a,e,u,r,h,8*o,"#050508"),sn(a,e,u,r,h,8*o,"rgba(255,255,255,0.1)",1),a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${22*o}px "DM Mono", ui-monospace, monospace`,a.fillText("0.00",e+12*o,u+h*.68);const m=u+h+10*o;return a.strokeStyle="rgba(255,255,255,0.12)",a.lineWidth=Math.max(2,2*o),a.beginPath(),a.moveTo(e,m),a.lineTo(e+r,m),a.stroke(),en(a,e,m-5*o,14*o,10*o,5*o,"rgba(255,255,255,0.85)"),a.fillStyle="rgba(255,255,255,0.35)",a.font=`500 ${8*o}px "DM Mono", ui-monospace, monospace`,a.fillText("0.01",e,m+14*o),a.textAlign="right",a.fillText("5,000.00",e+r,m+14*o),a.textAlign="left",c+6*o+h+10*o+16*o}function U2(a,e,i,r,o,c){a.strokeStyle="rgba(255,255,255,0.08)",a.lineWidth=1,a.beginPath(),a.moveTo(e,i),a.lineTo(e+r,i),a.stroke();const u=i+10*o,h=36*o,m=72*o;sn(a,e,u,m,h,6*o,"rgba(255,255,255,0.14)",1),a.fillStyle="rgba(255,255,255,0.55)",a.font=`700 ${9*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("CANCEL",e+m/2,u+h*.62);const p=e+m+8*o,_=r-m-8*o;return en(a,p,u,_,h,6*o,"rgba(255,255,255,0.06)"),sn(a,p,u,_,h,6*o,"rgba(255,255,255,0.1)",1),a.fillStyle="#c8f5a8",a.fillRect(p,u+4*o,3*o,h-8*o),a.fillStyle="rgba(255,255,255,0.55)",a.font=`700 ${8.5*o}px "DM Mono", ui-monospace, monospace`,a.fillText(c,p+_/2+2*o,u+h*.62),a.textAlign="left",10*o+h}function gS(a,e,i,r,o){const c=44*o;en(a,e,i,r,c,8*o,"rgba(200,245,168,0.08)"),sn(a,e,i,r,c,8*o,"rgba(200,245,168,0.22)",1);const u=28*o;return en(a,e+8*o,i+(c-u)/2,u,u,4*o,"rgba(200,245,168,0.14)"),a.fillStyle="#c8f5a8",a.font=`700 ${10*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("SS",e+8*o+u/2,i+c*.58),a.textAlign="left",a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${11*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(Qn.name,e+8*o+u+8*o,i+16*o),a.fillStyle="rgba(255,255,255,0.42)",a.font=`500 ${9*o}px "DM Mono", ui-monospace, monospace`,a.fillText(`${Qn.role} · ${Qn.didShort}`,e+8*o+u+8*o,i+32*o),c}function O2(a,e,i,r,o){const c=Math.min(r*240/316,r*.72),u=12*o,h=8*o,m=a.createLinearGradient(e,i+c,e+r,i);m.addColorStop(0,"#050508"),m.addColorStop(1,"rgba(200,245,168,0.16)"),en(a,e,i,r,c,h,m),sn(a,e,i,r,c,h,"rgba(255,255,255,0.14)",Math.max(1,1.25*o)),sn(a,e+2.5*o,i+2.5*o,r-5*o,c-5*o,h-1.5*o,"rgba(200,245,168,0.35)",Math.max(1,o)),a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${11*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(Qn.fleet,e+u,i+u+10*o);const p=48*o,_=16*o,v=e+r-u-p,g=i+u-1*o;en(a,v,g,p,_,8*o,"rgba(200,245,168,0.14)"),sn(a,v,g,p,_,8*o,"rgba(200,245,168,0.28)",1),a.fillStyle="#c8f5a8",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("ACTIVE",v+p/2,g+11*o),a.textAlign="left";let S=i+u+28*o;a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${12*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(`${Qn.name} ${Qn.version}`,e+u,S),S+=14*o,a.fillStyle="rgba(255,255,255,0.45)",a.font=`500 ${9*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(`${Qn.role} · HITL`,e+u,S),S+=16*o,a.fillStyle="rgba(255,255,255,0.38)",a.font=`500 ${8*o}px "DM Mono", ui-monospace, monospace`,a.fillText("HANDLE",e+u,S),S+=11*o,a.fillStyle="rgba(255,255,255,0.88)",a.font=`600 ${10*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(Qn.handle,e+u,S),S+=14*o,a.fillStyle="rgba(255,255,255,0.38)",a.font=`500 ${8*o}px "DM Mono", ui-monospace, monospace`,a.fillText("KYA DID",e+u,S),S+=11*o,a.fillStyle="#c8f5a8",a.font=`700 ${9*o}px "DM Mono", ui-monospace, monospace`,a.fillText(Qn.didShort,e+u,S);const E=i+c-u-4*o;a.fillStyle="rgba(255,255,255,0.75)",a.font=`600 ${9*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText("Verified KYA",e+u,E);const C=24*o;return en(a,e+r-u-C,i+c-u-C,C,C,4*o,"rgba(200,245,168,0.14)"),sn(a,e+r-u-C,i+c-u-C,C,C,4*o,"rgba(200,245,168,0.28)",1),a.fillStyle="#c8f5a8",a.font=`700 ${10*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("SS",e+r-u-C/2,i+c-u-C*.35),a.textAlign="left",c}function P2(a,e,i,r,o){const c=Math.min(r*190/316,r*.58),u=12*o,h=8*o,m=a.createLinearGradient(e,i+c,e+r,i);m.addColorStop(0,"#050508"),m.addColorStop(1,"rgba(200,245,168,0.14)"),en(a,e,i,r,c,h,m),sn(a,e,i,r,c,h,"rgba(255,255,255,0.14)",Math.max(1,1.25*o)),sn(a,e+2.5*o,i+2.5*o,r-5*o,c-5*o,h-1.5*o,"rgba(200,245,168,0.35)",Math.max(1,o)),a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${11*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(Qn.fleet,e+u,i+u+10*o),a.fillStyle="#c8f5a8",a.beginPath(),a.arc(e+r-u-7*o,i+u+5*o,6*o,0,Math.PI*2),a.fill(),a.fillStyle="#0a0a0c",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("✓",e+r-u-7*o,i+u+8*o),a.textAlign="left";const p=i+c-u-2*o;a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${10*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(Qn.name.toUpperCase(),e+u,p-24*o),a.fillStyle="rgba(255,255,255,0.45)",a.font=`500 ${9*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(`${Qn.role} · ${Qn.version}`,e+u,p-10*o),a.fillStyle="#c8f5a8",a.font=`700 ${10*o}px "DM Mono", ui-monospace, monospace`,a.fillText(Qn.didShort,e+u,p);const _=28*o;return en(a,e+r-u-_,i+c-u-_,_,_,4*o,"rgba(200,245,168,0.14)"),sn(a,e+r-u-_,i+c-u-_,_,_,4*o,"rgba(200,245,168,0.28)",1),a.fillStyle="#c8f5a8",a.font=`700 ${11*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("SS",e+r-u-_/2,i+c-u-_*.35),a.textAlign="left",c}function I2(a,e,i,r,o){const c=Math.min(r*190/316,r*.58),u=10*o,h=8*o,m=a.createLinearGradient(e,i,e+r,i+c);m.addColorStop(0,"#0a0c10"),m.addColorStop(.55,"#12161c"),m.addColorStop(1,"rgba(200,245,168,0.18)"),en(a,e,i,r,c,h,m),sn(a,e,i,r,c,h,"rgba(255,255,255,0.14)",Math.max(1,1.25*o)),a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${10*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText("Morpheum.",e+u,i+u+10*o),a.strokeStyle="rgba(255,255,255,0.45)",a.lineWidth=Math.max(1,o);for(let p=0;p<3;p++){const _=5*o+p*3.5*o,v=4*o+p*2.5*o;a.beginPath(),a.ellipse(e+r-u-4*o,i+u+8*o,_,v,-.4,-.2,1.2),a.stroke()}return a.fillStyle="rgba(255,255,255,0.88)",a.font=`700 ${9*o}px "DM Mono", ui-monospace, monospace`,a.fillText("5678  ····  ····  7890",e+u,i+c*.52),a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${8*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText(Qn.name.toUpperCase(),e+u,i+c-u-2*o),a.textAlign="right",a.fillStyle="rgba(255,255,255,0.55)",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.fillText("12/28",e+r-u,i+c-u-2*o),a.textAlign="left",c}function F2(a,e,i,r,o,c=25){const u=9*o;a.fillStyle="rgba(255,255,255,0.38)",a.font=`700 ${u}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText("MIRROR SIZE",e,i+u),a.textAlign="right",a.fillStyle="#c8f5a8",a.fillText(`${c}%`,e+r,i+u),a.textAlign="left";const h=i+u+12*o,m=Math.max(4,5*o);en(a,e,h,r,m,m/2,"rgba(255,255,255,0.1)");const p=Math.max(m,r*c/100);en(a,e,h,p,m,m/2,"rgba(200,245,168,0.75)");const _=7*o;return a.fillStyle="#f4f6f0",a.beginPath(),a.arc(e+p,h+m/2,_,0,Math.PI*2),a.fill(),a.strokeStyle="rgba(200,245,168,0.55)",a.lineWidth=Math.max(1,o),a.stroke(),a.fillStyle="rgba(255,255,255,0.35)",a.font=`500 ${7.5*o}px "DM Mono", ui-monospace, monospace`,a.fillText("5%",e,h+m+14*o),a.textAlign="right",a.fillText("100%",e+r,h+m+14*o),a.textAlign="left",u+12*o+m+16*o}function B2(a,e,i,r,o){const c=9*o;a.fillStyle="rgba(255,255,255,0.38)",a.font=`700 ${c}px "DM Mono", ui-monospace, monospace`,a.fillText("AGENTIC PROTECTION",e,i+c);const u=5*o,h=(r-u*2)/3,m=52*o,p=i+c+8*o;return[{label:"Manual",tone:"rgba(255,255,255,0.12)",active:!1},{label:"Guarded",tone:"rgba(234,179,8,0.55)",active:!0},{label:"High",tone:"rgba(255,71,87,0.35)",active:!1}].forEach((v,g)=>{const S=e+g*(h+u);en(a,S,p,h,m,6*o,"rgba(255,255,255,0.04)"),sn(a,S,p,h,m,6*o,v.active?v.tone:"rgba(255,255,255,0.1)",v.active?Math.max(1.5,1.5*o):1),v.active&&(a.fillStyle="rgba(234,179,8,0.12)",a.fillRect(S+1,p+1,3*o,m-2)),a.fillStyle=v.active?"rgba(255,255,255,0.92)":"rgba(255,255,255,0.55)",a.font=`700 ${9*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.textAlign="center",a.fillText(v.label,S+h/2,p+18*o),a.fillStyle="rgba(255,255,255,0.38)",a.font=`400 ${7*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`;const E=v.label==="Guarded"?"safe default":v.label==="Manual"?"signals":"silent";a.fillText(E,S+h/2,p+34*o)}),a.textAlign="left",c+8*o+m}function z2(a,e,i,r,o,c="SLIDE TO START COPY"){const u=40*o;en(a,e,i,r,u,8*o,"rgba(255,255,255,0.05)"),sn(a,e,i,r,u,8*o,"rgba(255,255,255,0.12)",1);const h=.22,m=4*o,p=u-m*2,_=r-m*2-p;return en(a,e+m,i+m,p+_*h,p,p/2,"rgba(200,245,168,0.18)"),en(a,e+m,i+m,p,p,p/2,"rgba(200,245,168,0.85)"),a.fillStyle="#0a0a0c",a.font=`700 ${12*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("›",e+m+p/2,i+u*.62),a.fillStyle="rgba(255,255,255,0.5)",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.fillText(c,e+r/2+p*.15,i+u*.62),a.textAlign="left",u}const ll=3,H2={elite:"#00ff88",strong:"#c8f5a8",core:"rgba(255,255,255,0.42)",lagging:"#ff4757"},Kr={mean:1.38,median:1.42,std:.62,aboveAvgPct:58,agents:[{id:"ss",label:"SharpeShark",short:"SS",sharpe:2.41,tier:"elite",focus:!0},{id:"sl",label:"SortinoSloth",short:"SL",sharpe:1.86,tier:"strong"},{id:"nc",label:"NovaCobra",short:"NC",sharpe:1.58,tier:"strong"},{id:"ff",label:"FundingFox",short:"FF",sharpe:1.12,tier:"core"},{id:"bb",label:"BasisBadger",short:"BB",sharpe:.82,tier:"lagging"}]};function dh(a,e,i,r,o,c){const u=6*c,h=o.length,m=(r-u*(h-1))/h,p=36*c;return o.forEach(([_,v],g)=>{const S=e+g*(m+u);en(a,S,i,m,p,6*c,"rgba(255,255,255,0.04)"),sn(a,S,i,m,p,6*c,"rgba(255,255,255,0.1)",1),a.fillStyle="rgba(255,255,255,0.4)",a.font=`700 ${7*c}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText(_,S+m/2,i+12*c),a.fillStyle="#c8f5a8",a.font=`700 ${11*c}px "DM Mono", ui-monospace, monospace`,a.fillText(v,S+m/2,i+26*c)}),a.textAlign="left",p}function G2(a,e,i,r,o){const c=52*o,u=10*o;en(a,e,i,r,c,8*o,"rgba(255,255,255,0.03)"),sn(a,e,i,r,c,8*o,"rgba(255,255,255,0.1)",1),a.fillStyle="rgba(255,255,255,0.38)",a.font=`700 ${7*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText("COMPOSITE 0–100",e+u,i+13*o),a.fillStyle="rgba(255,255,255,0.94)",a.font=`700 ${10*o}px "DM Mono", ui-monospace, monospace`,a.fillText("REP = Σ w · factor",e+u,i+28*o);const h=[["ROI","25"],["SH","25"],["DD","20"],["WR","15"],["ST","15"]],m=i+c-10*o,p=(r-u*2)/h.length;return h.forEach(([_,v],g)=>{const S=e+u+g*p;a.fillStyle="#c8f5a8",a.font=`700 ${7.5*o}px "DM Mono", ui-monospace, monospace`,a.fillText(_,S,m),a.fillStyle="rgba(255,255,255,0.4)",a.fillText(`${v}%`,S+a.measureText(_).width+3*o,m)}),c}function V2(a,e,i,r,o){const c=10*o,u=14*o,h=100*o,m=h+16*o,p=e+c,_=r-c*2,v=i+u,g=i+h-4*o,S=g-v,{mean:E,median:C,std:M,agents:y}=Kr,O=y.map(Y=>Y.sharpe),F=Math.min(...O,E-M*2.5),w=Math.max(...O,E+M*2.5),P=F-M*.35,D=w+M*.35,I=Math.max(D-P,1e-6),T=Y=>p+(Y-P)/I*_,U=Y=>{const fe=(Y-E)/M;return Math.exp(-.5*fe*fe)},X=Y=>v+S-Y*S*.92;a.fillStyle="rgba(255,255,255,0.38)",a.font=`700 ${7*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="left",a.fillText("FLEET EDGE · SHARPE σ",e+c,i+8*o);const z=y.find(Y=>"focus"in Y&&Y.focus);if(z){const Y=(z.sharpe-E)/M,fe=Y>=0?"+":"",xe=(O.filter(N=>N<z.sharpe).length+.5)/O.length*100;a.fillStyle="#c8f5a8",a.font=`700 ${7.5*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="right",a.fillText(`SS ${z.sharpe.toFixed(2)} · ${fe}${Y.toFixed(1)}σ · P${xe.toFixed(0)}`,p+_,i+8*o),a.textAlign="left"}const k=64;a.beginPath(),a.moveTo(p,g);for(let Y=0;Y<=k;Y++){const fe=P+(D-P)*Y/k;a.lineTo(T(fe),X(U(fe)))}a.lineTo(p+_,g),a.closePath();const ce=a.createLinearGradient(p,v,p,g);ce.addColorStop(0,"rgba(200,245,168,0.18)"),ce.addColorStop(1,"rgba(200,245,168,0.02)"),a.fillStyle=ce,a.fill(),a.beginPath();for(let Y=0;Y<=k;Y++){const fe=P+(D-P)*Y/k,xe=T(fe),N=X(U(fe));Y===0?a.moveTo(xe,N):a.lineTo(xe,N)}a.strokeStyle="rgba(200,245,168,0.55)",a.lineWidth=Math.max(1.25,1.5*o),a.stroke();const ue=T(C),Q=T(E);a.setLineDash([4*o,4*o]),a.strokeStyle="rgba(255,255,255,0.22)",a.lineWidth=1,a.beginPath(),a.moveTo(ue,v),a.lineTo(ue,g),a.stroke(),a.setLineDash([2*o,5*o]),a.strokeStyle="rgba(6,182,212,0.55)",a.beginPath(),a.moveTo(Q,v),a.lineTo(Q,g),a.stroke(),a.setLineDash([]),a.strokeStyle="rgba(255,255,255,0.1)",a.beginPath(),a.moveTo(p,g),a.lineTo(p+_,g),a.stroke();for(const Y of y){const fe=(Y.sharpe-E)/M,xe=T(Y.sharpe),N=X(Math.exp(-.5*fe*fe))+10*o,j="focus"in Y&&!!Y.focus,ve=(j?5.5:3.5)*o;a.globalAlpha=z&&!j?.45:1,a.fillStyle=H2[Y.tier],a.beginPath(),a.arc(xe,N,ve,0,Math.PI*2),a.fill(),a.strokeStyle=j?"#c8f5a8":"rgba(10,14,23,0.9)",a.lineWidth=j?Math.max(1.5,1.75*o):Math.max(1,o),a.stroke(),a.fillStyle=j?"#c8f5a8":"rgba(255,255,255,0.55)",a.font=`700 ${7*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText(Y.short,xe,N+ve+10*o),a.globalAlpha=1}a.fillStyle="rgba(255,255,255,0.35)",a.font=`700 ${7*o}px "DM Mono", ui-monospace, monospace`;const B=i+h+10*o,G=[{sharpe:P,label:P.toFixed(2),align:"left"},{sharpe:E,label:`μ ${E.toFixed(2)}`,align:"center"},{sharpe:D,label:D.toFixed(2),align:"right"}];for(const Y of G)a.textAlign=Y.align,a.fillText(Y.label,T(Y.sharpe),B);return a.textAlign="left",m}function k2(a,e,i,r,o){const c=Math.min(r*150/316,r*.48),u=12*o,h=8*o,m=a.createLinearGradient(e,i+c,e+r,i);m.addColorStop(0,"#050508"),m.addColorStop(1,"rgba(200,245,168,0.14)"),en(a,e,i,r,c,h,m),sn(a,e,i,r,c,h,"rgba(255,255,255,0.14)",Math.max(1,1.25*o)),sn(a,e+2.5*o,i+2.5*o,r-5*o,c-5*o,h-1.5*o,"rgba(200,245,168,0.35)",Math.max(1,o)),a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${11*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText("MAEX",e+u,i+u+10*o);const p=40*o,_=16*o,v=e+r-u-p,g=i+u-1*o;return en(a,v,g,p,_,8*o,"rgba(200,245,168,0.14)"),sn(a,v,g,p,_,8*o,"rgba(200,245,168,0.28)",1),a.fillStyle="#c8f5a8",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("LIVE",v+p/2,g+11*o),a.textAlign="left",a.fillStyle="rgba(255,255,255,0.92)",a.font=`700 ${14*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText("MAEX Core",e+u,i+u+36*o),a.fillStyle="rgba(255,255,255,0.45)",a.font=`500 ${9*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.fillText("Curated agent basket · 4 agents",e+u,i+u+52*o),a.fillStyle="#c8f5a8",a.font=`700 ${18*o}px "DM Mono", ui-monospace, monospace`,a.fillText("+12.8%",e+u,i+c-u-4*o),a.fillStyle="rgba(255,255,255,0.4)",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="right",a.fillText("30D RETURN",e+r-u,i+c-u-8*o),a.textAlign="left",c}function X2(a,e,i,r,o){const c=[["SharpeShark","42%","+38%"],["SortinoSloth","33%","+21%"],["FundingFox","25%","−4%"]],u=26*o,h=c.length*u;return en(a,e,i,r,h,6*o,"rgba(255,255,255,0.03)"),sn(a,e,i,r,h,6*o,"rgba(255,255,255,0.08)",1),c.forEach(([m,p,_],v)=>{const g=i+v*u;v>0&&(a.strokeStyle="rgba(255,255,255,0.06)",a.lineWidth=1,a.beginPath(),a.moveTo(e+8*o,g),a.lineTo(e+r-8*o,g),a.stroke()),a.fillStyle="rgba(255,255,255,0.85)",a.font=`600 ${9*o}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`,a.textAlign="left",a.fillText(m,e+10*o,g+u*.62),a.fillStyle="rgba(255,255,255,0.4)",a.font=`700 ${8*o}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText(p,e+r*.58,g+u*.62);const S=!_.startsWith("−")&&!_.startsWith("-");a.fillStyle=S?"#c8f5a8":"rgba(255,120,120,0.85)",a.textAlign="right",a.fillText(_,e+r-10*o,g+u*.62)}),a.textAlign="left",h}function W2(a,e,i,r,o,c=0){const u=r/300,h=12*u,m=10*u,p=(c%ll+ll)%ll,_=[{header:"AGENT PROOF",segment:"REPUTATION"},{header:"RANK MODEL",segment:"RANK"},{header:"INDEX PROOF",segment:"INDEX"}][p];gu(a,e,i,r,o,m);let v=_u(a,e,i,r,h,_.header,u);if(v=D2(a,e,v,r,h,_.segment,p+1,ll,u),p===0){const E=Math.max(80*u,o-(v-i)-52*u),C=r-h*2;let M=C,y=Math.min(M*240/316,M*.72);y>E&&(M=M*(E/y),y=E);const O=e+h+(C-M)/2;O2(a,O,v,M,u*(M/C)),v+=y+8*u;const F=[["SHARPE","2.41"],["ROI","+38%"],["RISK","B"]];v+36*u<=i+o-h&&dh(a,e+h,v,r-h*2,F,u);return}if(p===1){const E=i+o-h;v+52*u<=E&&(v+=G2(a,e+h,v,r-h*2,u)+8*u),v+116*u<=E&&(v+=V2(a,e+h,v,r-h*2,u)+6*u);const C=Kr.agents.find(F=>"focus"in F&&F.focus),M=C?(C.sharpe-Kr.mean)/Kr.std:0,y=`${M>=0?"+":""}${M.toFixed(1)}σ`,O=[["MEDIAN",Kr.median.toFixed(2)],["ABOVE μ",`${Kr.aboveAvgPct}%`],["EDGE",y]];v+36*u<=E&&dh(a,e+h,v,r-h*2,O,u);return}const g=i+o-h;v+=k2(a,e+h,v,r-h*2,u)+8*u,v+78*u<=g&&(v+=X2(a,e+h,v,r-h*2,u)+8*u);const S=[["RETURN","+12.8%"],["RISK","B"],["AGENTS","4"]];v+36*u<=g&&dh(a,e+h,v,r-h*2,S,u)}function q2(a,e,i,r,o,c=0){const u=r/300,h=12*u,m=10*u;gu(a,e,i,r,o,m);let p=_u(a,e,i,r,h,"COPY TRADE",u);p=mS(a,e,p,r,h,["MIRROR","BUCKET"],0,u);const _=40*u,v=i+o-h-_,g=v-10*u;if(c%2===0){const E=6*u,C=r-h*2;let M=(C-E)/2,y=Math.min(M*190/316,M*.58);const O=Math.max(64*u,g-p-28*u);y>O&&(M=M*(O/y),y=O);const F=u*(M/((C-E)/2)),w=e+h+(C-(M*2+E))/2;I2(a,w,p,M,F),P2(a,w+M+E,p,M,F),p+=y+10*u;const P=[["SPREAD","0.02%"],["FUNDING","8h"],["SIZE","25%"]],D=5*u,I=(r-h*2-D*2)/3,T=32*u;p+T<=g&&(P.forEach(([U,X],z)=>{const k=e+h+z*(I+D);en(a,k,p,I,T,6*u,"rgba(255,255,255,0.04)"),sn(a,k,p,I,T,6*u,"rgba(255,255,255,0.1)",1),a.fillStyle="rgba(255,255,255,0.4)",a.font=`700 ${6.5*u}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText(U,k+I/2,p+11*u),a.fillStyle="#c8f5a8",a.font=`700 ${10*u}px "DM Mono", ui-monospace, monospace`,a.fillText(X,k+I/2,p+24*u)}),a.textAlign="left")}else p+=gS(a,e+h,p,r-h*2,u)+10*u,p+36*u<g&&(p+=F2(a,e+h,p,r-h*2,u,25)+10*u),p+50*u<g&&B2(a,e+h,p,r-h*2,u);z2(a,e+h,v,r-h*2,u)}const Y2=2,Z2=[{agent:"SharpeShark",timeLabel:"07-08, 15:42",status:"want-to",statusLabel:"Want to",action:"Open ETH long · 1.2 ETH",showActions:!0},{agent:"NightOwl",timeLabel:"07-08, 15:31",status:"rejected",statusLabel:"Rejected",action:"Open BTC short · 0.04 BTC"},{agent:"SharpeShark",timeLabel:"07-08, 15:25",status:"short",statusLabel:"Close Long",action:"BTCUSDT · 0.04 BTC",pnl:{text:"+103.09",tone:"long"}},{agent:"FluxRunner",timeLabel:"07-08, 14:10",status:"long",statusLabel:"Open Long",action:"ETHUSDT · 0.8 ETH"},{agent:"NightOwl",timeLabel:"07-07, 09:42",status:"short",statusLabel:"Open Short",action:"SOLUSDT · 12 SOL"}];function j2(a){switch(a){case"want-to":return{fg:"rgba(200,245,168,0.95)",bg:"rgba(184,245,168,0.12)"};case"rejected":return{fg:"#ff4757",bg:"rgba(255,71,87,0.12)"};case"long":return{fg:"#00ff88",bg:"rgba(0,255,136,0.12)"};case"short":return{fg:"#ff4757",bg:"rgba(255,71,87,0.12)"}}}function K2(a,e,i,r,o){const c=r/300,u=12*c,h=10*c;gu(a,e,i,r,o,h);let m=_u(a,e,i,r,u,"ACTIVITY LOG",c);const p=i+o-u,_=58*c,v=10*c,g=6*c,S=e+u+_+g+v+g,E=e+r-u-S,C=e+u+_+g+v/2,M=Z2,y=4*c;M.forEach((O,F)=>{if(m>=p-8*c)return;const w=F===0,P=F===M.length-1,D=j2(O.status),I=8*c,T=6*c,U=7*c,X=8*c,z=O.showActions?22*c:0,k=O.showActions?5*c:0,ue=Math.max(I+2*c+T,U+4*c+X)+k+z+y;if(m+Math.min(ue,28*c)>p)return;a.textAlign="right",a.fillStyle="rgba(255,255,255,0.88)",a.font=`500 ${I}px "DM Mono", ui-monospace, monospace`,a.fillText(O.agent,e+u+_,m+I),a.fillStyle="rgba(255,255,255,0.38)",a.font=`500 ${T}px "DM Mono", ui-monospace, monospace`,a.fillText(O.timeLabel,e+u+_,m+I+2*c+T),a.textAlign="left",P||(a.strokeStyle="rgba(255,255,255,0.14)",a.lineWidth=Math.max(1,c),a.beginPath(),a.moveTo(C,m+6*c),a.lineTo(C,m+ue),a.stroke());const Q=2.4*c;a.beginPath(),a.arc(C,m+5*c,Q,0,Math.PI*2),a.fillStyle=w?"#c8f5a8":"rgba(255,255,255,0.32)",a.fill(),w&&(a.beginPath(),a.arc(C,m+5*c,Q+2.2*c,0,Math.PI*2),a.fillStyle="rgba(200,245,168,0.16)",a.fill());const B=4*c,G=2*c;a.font=`700 ${U}px "DM Mono", ui-monospace, monospace`;const Y=O.statusLabel.toUpperCase(),fe=a.measureText(Y).width+B*2,xe=U+G*2;en(a,S,m,fe,xe,3*c,D.bg),a.fillStyle=D.fg,a.fillText(Y,S+B,m+U+G*.35),a.fillStyle="rgba(255,255,255,0.55)",a.font=`400 ${X}px "DM Mono", ui-monospace, monospace`;const N=m+xe+3*c+X;let j=O.action;if(O.pnl){const ve=`${O.action} · `;a.fillText(ve,S,N);const Te=a.measureText(ve).width;a.fillStyle=O.pnl.tone==="long"?"#00ff88":"#ff4757",a.font=`700 ${X}px "DM Mono", ui-monospace, monospace`,a.fillText(O.pnl.text,S+Te,N)}else{for(;j.length>8&&a.measureText(j).width>E;)j=`${j.slice(0,-2)}…`;a.fillText(j,S,N)}if(O.showActions&&m+xe+3*c+X+k+z<=p){const ve=m+xe+3*c+X+k,Te=(E-5*c)/2;sn(a,S,ve,Te,z,3*c,"rgba(255,255,255,0.18)",1),a.fillStyle="rgba(255,255,255,0.72)",a.font=`700 ${7*c}px "DM Mono", ui-monospace, monospace`,a.textAlign="center",a.fillText("REJECT",S+Te/2,ve+z*.68),en(a,S+Te+5*c,ve,Te,z,3*c,"rgba(184,245,168,0.88)"),a.fillStyle="rgba(8,14,10,0.92)",a.fillText("APPROVE",S+Te+5*c+Te/2,ve+z*.68),a.textAlign="left"}m+=ue})}function Q2(a,e,i,r,o){const c=r/300,u=12*c,h=10*c;gu(a,e,i,r,o,h);let m=_u(a,e,i,r,u,"FUND BUCKET",c);m=mS(a,e,m,r,u,["FUND BUCKET","CREATE BUCKET"],0,c),m+=gS(a,e+u,m,r-u*2,c)+8*c,m+=N2(a,e+u,m,r-u*2,"FROM","Select source bucket",c)+8*c;const p=10*c+36*c;i+o-u-p-m-8*c>70*c&&(m+=L2(a,e+u,m,r-u*2,c)+6*c),U2(a,e+u,i+o-u-p,r-u*2,c,"COMPLETE REQUIRED FIELDS")}function _S(a,e,i,r,o,c,u=0){switch(e){case"discover":W2(a,i,r,o,c,u);break;case"copy":q2(a,i,r,o,c,u);break;case"supervise":K2(a,i,r,o,c);break;case"isolate":Q2(a,i,r,o,c);break}}function J2(a,e,i,r,o=0){a.clearRect(0,0,i,r),_S(a,e,0,0,i,r,o)}function $2(a,e,i,r,o){const{W:c,H:u}=w2(i,r),h=document.createElement("canvas");h.width=c,h.height=u;const m=h.getContext("2d"),p=m.createLinearGradient(0,0,0,u);p.addColorStop(0,"#080a0e"),p.addColorStop(.55,"#05070d"),p.addColorStop(1,"#030406"),m.fillStyle=p,m.fillRect(0,0,c,u);const _=Math.round(22*i),v=Math.round(.05*u),g=Math.round(.045*u),S=c-_*2;let E=v;const C=Math.min(34*i,c*.095);m.fillStyle="rgba(255,255,255,0.94)",m.font=`normal 400 ${C}px ${o}`,m.textBaseline="alphabetic",m.fillText(a.verb,_,E+C*.85),E+=Math.round(.09*u);const M=Math.min(13*i,c*.036);m.fillStyle="rgba(255,255,255,0.55)",m.font=`400 ${M}px "Spline Sans", "DM Sans", ui-sans-serif, sans-serif`;const y=C2(m,a.description,S);m.fillText(y[0]??a.description,_,E+M),E+=Math.round(.07*u),E+=Math.round(.03*u);const O=_,F=E,w=S,P=Math.max(80*i,u-E-g);_S(m,R2(e),O,F,w,P);const D=new eS(h);return D.colorSpace=Kn,D.minFilter=xs,D.generateMipmaps=!0,D}const Qr=mh.verbs.map((a,e)=>{const i=[{top:"#c8f5a8",mid:"#0a1410",bot:"#1a3d2e"},{top:"#9ee089",mid:"#060e18",bot:"#1e3a52"},{top:"#f0e6a0",mid:"#0c1008",bot:"#2a3820"},{top:"#7fd9a8",mid:"#080810",bot:"#243048"}];return{verb:a.verb,description:a.description,mood:i[e]??i[0]}}),jn=Qr.length,Na=2.95,fl=6.9,Mp=32,vS=4,SS=5,rp=2.05,eR=1,tR=Na*.55,gv=.35,_v=.85;function xS(a){return a<520?{mode:"mobile",canvasW:1280,canvasH:320,fontPx:112,planeBaseW:4.55,frustumFill:.9}:a<900?{mode:"tablet",canvasW:1600,canvasH:360,fontPx:132,planeBaseW:5.25,frustumFill:.94}:{mode:"desktop",canvasW:1920,canvasH:420,fontPx:152,planeBaseW:6.1,frustumFill:.96}}const nR=1.35,iR=.72,aR=.62,sR=.2,rR=14,oR=.42,lR=128,cR=12,uR=.004,fR=.0022,vv=.12,dR=.88,hR=4,pR=22,mR=32,gR=40,_R=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,vR=`
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
`,SR='"Reckk Heading", Georgia, "Times New Roman", serif',MS="Morpheum Wordmark",gl=`"${MS}"`,xR=[{t:0,c:"#e8ffe0"},{t:.45,c:"#c8f5a8"},{t:1,c:"#f0e6a0"}];async function MR(){if(typeof document>"u"||!document.fonts)return!1;try{const a=new FontFace(MS,`url(${b2})`,{weight:"normal",style:"normal"});document.fonts.add(await a.load()),await document.fonts.load(`normal 152px ${gl}`);const e=document.fonts.check(`normal 152px ${gl}`);return e||console.error("[FlowIntro] Morpheum Wordmark failed to bind — title will not use Reckk fallback"),e}catch(a){return console.error("[FlowIntro] Morpheum Wordmark load failed",a),!1}}async function yR(){if(!(typeof document>"u"||!document.fonts))try{await MR();const a=new FontFace("Reckk Title",`url(${E2})`,{weight:"normal",style:"normal"});document.fonts.add(await a.load());const e=new FontFace("Reckk Heading",`url(${y2})`,{weight:"normal",style:"normal"});document.fonts.add(await e.load()),await document.fonts.ready,await document.fonts.load(`normal 152px ${gl}`),await document.fonts.load('normal 64px "Reckk Heading"'),await document.fonts.load('normal 124px "Reckk Title"')}catch{}}const qs="flow-intro-hide-chrome";function ER(a){return a<=72}const bR=280;function TR(a){const e=document.documentElement,i=e.style.scrollBehavior;e.style.scrollBehavior="auto",window.scrollTo(0,Math.max(0,a)),e.style.scrollBehavior=i}function hh(){const a=document.getElementById("hero");if(!a)return;const e=a.getBoundingClientRect().top+window.scrollY;TR(e)}function dl(a){const e=Un.clamp(a,0,1);return e*e*e*(e*(e*6-15)+10)}function ph(a){const e=Math.max(1,a),i=Math.max(1,jn*e*eR),r=Math.max(1,i/Math.max(1,jn-1));return{cardPx:i,titlePx:r,totalPx:i+r}}function yS(a,e){const i=a/Math.max(1,e),r=Mp*Math.PI/180,o=2*fl*Math.tan(r/2),c=o*i,u=rp*vS/SS,h=.992,m=h*o/rp,p=h*c/u;return Un.clamp(Math.min(m,p),.52,2.35)}function Sv(a,e,i){const r=xS(a),o=yS(a,e),c=a/Math.max(1,e),u=Mp*Math.PI/180,m=2*fl*Math.tan(u/2)*c,p=r.frustumFill*m/Math.max(1e-6,o),_=Math.min(r.planeBaseW,p);return{w:_,h:_*i}}function AR(a,e){const i=a/Math.max(1,jn-1),r=Math.min(Math.max(1,e*.38),Math.max(1,i*.34));return i<=r+.001?0:1-r/i}function RR(a,e){const i=Math.min(Math.max(1,e*.38),Math.max(1,a*.34));return a<=i+.001?0:1-i/a}function CR(a,e){const i=Un.clamp(e,0,.999);if(a<i)return{titleOp:1,lastCardOp:0};const r=Math.max(1e-6,1-i),o=dl(Un.clamp((a-i)/r,0,1));return{titleOp:1-o,lastCardOp:o}}function wR(a,e,i){const r=jn-1;if(a<=0)return{opacity:e===0?1:0};if(a>=r-1e-5)return{opacity:e===r?1:0};const o=Math.floor(a);if(o>=r)return{opacity:e===r?1:0};if(e!==o&&e!==o+1)return{opacity:0};const c=a-o,u=Un.clamp(i,0,.999);if(c<u)return{opacity:e===o?1:0};const h=dl(Un.clamp((c-u)/Math.max(1e-6,1-u),0,1));return{opacity:e===o?1-h:h}}function DR(a,e){return a>1.5&&a<e-.5}function NR(a){return Un.clamp(540/Math.max(a,340),.2,.55)}function LR(a,e,i){const r=[],o=rR;for(let c=0;c<o;c++){const u=Un.clamp(a-c/Math.max(1,o-1)*oR,-.08,1.08),h=Math.sin(u*Math.PI*2*nR)*aR*i,m=Math.sin(u*Math.PI*2*iR)*sR,p=vv+c/Math.max(1,o-1)*(dR-vv),_=e-p;r.push(new ee(h,m,_))}return r}function UR(a,e,i,r){const o=a.length;if(o<2)return new Li;const c=[],u=[],h=[],m=[],p=new ee,_=new ee,v=new ee,g=new ee(0,1,0),S=e+1;for(let C=0;C<o;C++){C===0?p.subVectors(a[1],a[0]).normalize():C===o-1?p.subVectors(a[o-1],a[o-2]).normalize():p.subVectors(a[C+1],a[C-1]).normalize(),_.copy(g).cross(p),_.lengthSq()<1e-8&&_.set(1,0,0).cross(p),_.normalize(),v.crossVectors(p,_).normalize();const M=o===1?0:C/(o-1),y=i+(r-i)*Math.pow(M,1.5);for(let O=0;O<=e;O++){const F=O/e*Math.PI*2,w=Math.cos(F),P=Math.sin(F),D=a[C];c.push(D.x+(w*_.x+P*v.x)*y,D.y+(w*_.y+P*v.y)*y,D.z+(w*_.z+P*v.z)*y),u.push(w*_.x+P*v.x,w*_.y+P*v.y,w*_.z+P*v.z),h.push(o===1?0:C/(o-1),O/e)}}for(let C=0;C<o-1;C++)for(let M=0;M<e;M++){const y=C*S+M,O=y+1,F=y+S,w=F+1;m.push(y,F,O,O,F,w)}const E=new Li;return E.setAttribute("position",new Di(c,3)),E.setAttribute("normal",new Di(u,3)),E.setAttribute("uv",new Di(h,2)),E.setIndex(m),E.computeBoundingSphere(),E}function xv(a,e,i,r){const o={verb:a.verb,description:a.description};return $2(o,e,i,r,SR)}function Mv(a,e){const i=xS(e),r=Math.min(a*2.35,3.25),o=Math.round(i.canvasW*r),c=Math.round(i.canvasH*r),u=document.createElement("canvas");u.width=o,u.height=c;const h=u.getContext("2d");h.clearRect(0,0,o,c);const m="Morpheum";let p=i.fontPx;h.textAlign="left",h.textBaseline="alphabetic";const _=()=>{h.font=`normal ${p*r}px ${gl}`};_();const v=P=>{h.font=`normal ${P*r}px ${gl}`;const D=h.measureText(m),I=Math.abs(D.actualBoundingBoxLeft??0),T=Math.abs(D.actualBoundingBoxRight??D.width),U=Math.abs(D.actualBoundingBoxAscent??P*r*.8),X=Math.abs(D.actualBoundingBoxDescent??P*r*.25);return{left:I,right:T,width:I+T,ascent:U,descent:X}},g=Math.max(1.25,1.85*r)*2,S=64*r+g,E=40*r+g,C=P=>{const D=v(P);return D.width+S*2<=o&&D.ascent+D.descent+E*2<=c};for(;!C(p)&&p>64;)p-=2;for(;C(p+2)&&p<i.fontPx+24;)p+=2;_();const M=v(p),y=(o-M.width)/2+M.left,O=c/2+(M.ascent-M.descent)/2,F=h.createLinearGradient(y-M.left,O-M.ascent,y+M.right,O+M.descent);xR.forEach(P=>F.addColorStop(P.t,P.c)),h.lineJoin="round",h.miterLimit=2,h.lineWidth=Math.max(1.25,1.85*r),h.strokeStyle="rgba(8,12,10,0.22)",h.strokeText(m,y,O),h.fillStyle=F,h.fillText(m,y,O);const w=new eS(u);return w.colorSpace=Kn,w.minFilter=bn,w.magFilter=bn,w.generateMipmaps=!1,w}function yv(a,e){a.generateMipmaps=!1,a.minFilter=bn,a.magFilter=bn,a.wrapS=Vi,a.wrapT=Vi;const i=e.capabilities.getMaxAnisotropy();a.anisotropy=Math.min(16,i),a.needsUpdate=!0}function OR(){const a=nt.useRef(null),e=nt.useRef(null),i=nt.useRef(null),r=nt.useRef(null),o=nt.useRef(!1),c=nt.useCallback(()=>{if(o.current)return;o.current=!0;const u=e.current;u==null||u.classList.add("flow-intro__sticky--exit"),window.setTimeout(()=>{document.body.classList.remove(qs),hh(),requestAnimationFrame(()=>{hh(),requestAnimationFrame(()=>{hh(),window.setTimeout(()=>{o.current=!1},100)})})},bR)},[]);return nt.useLayoutEffect(()=>{const u=window.matchMedia("(prefers-reduced-motion: reduce)").matches,h=window.location.hash.replace(/^#/,"");return u||h!==""&&h!=="flow"&&h!=="hero"||document.body.classList.add(qs),()=>{document.body.classList.remove(qs)}},[]),nt.useEffect(()=>{const u=h=>{if(h.key!=="Escape")return;const m=document.getElementById("hero");m&&m.getBoundingClientRect().top>8&&(h.preventDefault(),c())};return window.addEventListener("keydown",u),()=>window.removeEventListener("keydown",u)},[c]),nt.useEffect(()=>{const u=window.location.hash.replace(/^#/,"");u&&u!=="flow"&&u!=="hero"&&requestAnimationFrame(()=>{var h;(h=document.getElementById(u))==null||h.scrollIntoView({block:"start"})})},[]),nt.useEffect(()=>{const u=i.current,h=a.current;if(!u||!h)return;const m=u,p=h;let _=!1;if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){document.body.classList.remove(qs);const S=r.current;S&&(S.style.height="0px");return}let g;return(async()=>{if(await yR(),_)return;const S=Math.min(window.devicePixelRatio,2),E=Math.max(320,m.clientWidth||window.innerWidth),C=Math.max(1,m.clientHeight||window.innerHeight),M=[],y=[],O=[];Qr.forEach((Ye,Ze)=>{const ot=jn-1-Ze,mt=Qr[ot],wt=xv(mt,ot,S,E);O.push(wt);const Dt=new uu({map:wt,transparent:!0,opacity:1,depthWrite:!0,depthTest:!0,side:Oa});M.push(Dt);const ft=rp,_t=ft*vS/SS,q=new Ni(new Qs(_t,ft),Dt);q.position.set(0,0,-Ze*Na),q.renderOrder=Ze,y.push(q)});const F=Mv(S,E),w=new uu({map:F,transparent:!0,opacity:0,depthWrite:!1,depthTest:!0,side:ea}),P=F.image.height/F.image.width,{w:D,h:I}=Sv(E,C,P),T=new Ni(new Qs(D,I),w);T.position.set(0,0,-(jn-1)*Na),T.renderOrder=gR;const U=new iE,X=new Ci(Mp,1,.08,120),z=new M2({antialias:!0,alpha:!1,powerPreference:"high-performance"});z.setPixelRatio(Math.min(window.devicePixelRatio,2)),z.outputColorSpace=Kn,z.sortObjects=!0,m.appendChild(z.domElement),yv(F,z);const k=new rl;y.forEach(Ye=>k.add(Ye)),k.add(T),U.add(k);const ce=new Xi({uniforms:{uStrength:{value:0}},vertexShader:_R,fragmentShader:vR,transparent:!0,toneMapped:!1,depthTest:!1,depthWrite:!1,blending:gh}),ue=new Ni(new Li,ce);ue.frustumCulled=!1,ue.renderOrder=pR,ue.visible=!1,U.add(ue);const Q=Qr.map(Ye=>new Nt(Ye.mood.mid)),B=Q[0].clone();U.background=B;const G=0,Y=-(jn-1)*Na,fe=fl,xe=-.1*Na,N=.1*Na;function j(Ye,Ze){const ot=Ye+fl;return(fe-ot)/Ze}function ve(){const Ye=Math.max(1,window.innerHeight),{totalPx:Ze}=ph(Ye),ot=Math.max(1,Ze),mt=G+xe,wt=Y+N-tR,ft=(mt-wt)/ot,_t=j(mt,ft),q=j(wt,ft);return{ih:Ye,totalPx:ot,scrollToWorldFactor:ft,minScroll:_t,maxScroll:q}}let{scrollToWorldFactor:Te,minScroll:Ue,maxScroll:ie}=ve();const ye=new Nt,Ee=new Nt,ze=new Nt;function it(){var _t;const Ye=Math.max(320,m.clientWidth||window.innerWidth),Ze=Math.min(window.devicePixelRatio,2);O.forEach((q,Mt)=>{q.dispose();const St=jn-1-Mt,L=xv(Qr[St],St,Ze,Ye);O[Mt]=L,M[Mt].map=L,M[Mt].needsUpdate=!0}),(_t=w.map)==null||_t.dispose();const ot=Mv(Ze,Ye);w.map=ot,w.needsUpdate=!0,yv(ot,z);const mt=ot.image.height/ot.image.width,wt=Math.max(1,m.clientHeight||window.innerHeight),{w:Dt,h:ft}=Sv(Ye,wt,mt);T.geometry.dispose(),T.geometry=new Qs(Dt,ft)}function Qe(){const Ye=m.clientWidth,Ze=m.clientHeight;if(Ye<2||Ze<2)return;X.aspect=Ye/Ze,X.updateProjectionMatrix(),z.setSize(Ye,Ze,!1),it();const ot=ve();Te=ot.scrollToWorldFactor,Ue=ot.minScroll,ie=ot.maxScroll;const mt=Math.max(1,window.innerHeight),{totalPx:wt}=ph(mt),Dt=r.current;if(Dt){const ft=mt*gv,_t=Math.max(Math.ceil(wt+ft+mt*_v+32),Math.ceil(mt*1.08));Dt.style.height=`${_t}px`}}Qe(),requestAnimationFrame(()=>{_||it()});let Zt=0;function ut(){var zn,Fa;if(_)return;Zt=requestAnimationFrame(ut);const Ye=Math.max(1,window.innerHeight),{cardPx:Ze,titlePx:ot,totalPx:mt}=ph(Ye),wt=p.getBoundingClientRect(),Dt=Math.max(1,p.offsetHeight-Ye),ft=Un.clamp(-wt.top,0,Dt),_t=Math.min(ft,mt),q=Math.max(1,mt),Mt=Ye*gv,St=dl(Un.clamp((ft-mt)/Math.max(1,Mt),0,1)),L=Un.mapLinear(Ze,0,q,Ue,ie),b=m.clientWidth,$=m.clientHeight,te=Math.max(1,ot),he=_t<te,Ce=he?Un.clamp(_t/te,0,1):0,De=Math.max(0,_t-te),pe=Math.max(1,Ze),Ae=Un.clamp(De/pe,0,1)*(jn-1),Be=yS(b,$),Ne=document.getElementById("hero"),Le=Ne?Ne.getBoundingClientRect().top:0,Je=Ne?ER(Le):!0;o.current||document.body.classList.toggle(qs,!Je);let je;he?je=Un.mapLinear(_t,0,te,ie,L):je=Un.mapLinear(_t,te,q,L,Ue),je=Un.clamp(je,Ue,ie);const st=AR(Ze,Ye),Z=RR(te,Ye),Re=CR(Ce,Z),ge=jn-1;if(he)ze.copy(Q[0]);else{const mn=Math.min(jn-2,Math.floor(Ae)),Tn=Math.min(mn+1,jn-1),ri=dl(Ae-mn);ye.copy(Q[mn]),Ee.copy(Q[Tn]),ze.lerpColors(ye,Ee,ri)}U.background=B.copy(ze);const we=fe-je*Te;X.position.set(0,0,we),X.lookAt(0,0,we-fl);const Pe=Un.clamp(_t/q,0,1);if(DR(_t,q)){const mn=LR(Pe,we,NR(b)),ri=new gE(mn,!1,"centripetal").getSpacedPoints(lR);if(ri.length>=2){const gn=UR(ri,cR,uR,fR),Ot=ue.geometry.getAttribute("position"),tn=gn.getAttribute("position");if(Ot&&tn&&Ot.count===tn.count&&((zn=ue.geometry.getIndex())==null?void 0:zn.count)===((Fa=gn.getIndex())==null?void 0:Fa.count)&&Ot&&tn){Ot.array.set(tn.array),Ot.needsUpdate=!0;const Jn=ue.geometry.getAttribute("normal"),ys=gn.getAttribute("normal");Jn&&ys&&(Jn.array.set(ys.array),Jn.needsUpdate=!0);const Ba=ue.geometry.getAttribute("uv"),Wi=gn.getAttribute("uv");Ba&&Wi&&(Ba.array.set(Wi.array),Ba.needsUpdate=!0),gn.dispose()}else ue.geometry.dispose(),ue.geometry=gn;ue.visible=!0,ce.uniforms.uStrength.value=.36}else ue.visible=!1,ce.uniforms.uStrength.value=0}else ue.visible=!1,ce.uniforms.uStrength.value=0;const Xe=Math.floor((jn-1)/2);y.forEach((mn,Tn)=>{const ri=-Tn*Na,gn=jn-1-Tn;let{opacity:Ot}=wR(Ae,gn,st);he&&Tn===ge&&(Ot*=Re.lastCardOp);let tn=1,Dn=0;!he&&gn===jn-1&&Ot>.02&&St>0&&(tn=1-.28*St,Dn=-Na*.32*St),mn.position.set(0,0,ri+Dn),mn.scale.setScalar(Be*tn);const Jn=M[Tn];Jn.opacity=Ot,Jn.depthWrite=Ot>=.995,mn.visible=Ot>.003,mn.renderOrder=Tn<=Xe?hR+Tn:mR+(Tn-Xe-1)}),T.position.set(0,0,-ge*Na),T.scale.setScalar(Be),w.opacity=he?Re.titleOp:0,w.depthWrite=w.opacity>=.995,T.visible=w.opacity>.003;const He=mt+Mt;let Gt=0;if(Dt>He&&ft>=He){const mn=Math.max(1,Dt-He);Gt=dl(Un.clamp((ft-He)/mn,0,1))}Gt>.02&&(ue.visible=!1,ce.uniforms.uStrength.value=0);const Lt=r.current;if(Lt){const mn=Mt+Ye*_v+32,Tn=Math.max(Math.ceil(mt+mn),Math.ceil(Ye*1.08));Lt.style.height!==`${Tn}px`&&(Lt.style.height=`${Tn}px`)}const Wn=1-Gt*.96;e.current&&e.current.style.setProperty("--intro-ui-opacity",String(Wn)),z.domElement.style.opacity=String(1-Gt),z.render(U,X)}ut(),window.addEventListener("resize",Qe,{passive:!0});const vt=new ResizeObserver(Qe);vt.observe(m),g=()=>{var Ye;cancelAnimationFrame(Zt),document.body.classList.remove(qs),window.removeEventListener("resize",Qe),vt.disconnect(),M.forEach(Ze=>{var ot;(ot=Ze.map)==null||ot.dispose(),Ze.dispose()}),O.forEach(Ze=>Ze.dispose()),(Ye=w.map)==null||Ye.dispose(),w.dispose(),y.forEach(Ze=>Ze.geometry.dispose()),T.geometry.dispose(),ue.geometry.dispose(),ce.dispose(),U.remove(ue),z.dispose(),m.contains(z.domElement)&&m.removeChild(z.domElement)},_&&g()})(),()=>{_=!0,document.body.classList.remove(qs),g==null||g()}},[]),H.jsxs("section",{ref:a,id:"flow",className:"flow-intro","aria-label":"Morpheum — Discover, Copy, Supervise, Isolate",children:[H.jsxs("div",{ref:e,className:"flow-intro__sticky",children:[H.jsx("div",{ref:i,className:"flow-intro__canvas","aria-hidden":!0}),H.jsxs("div",{className:"flow-intro__top",children:[H.jsx("p",{className:"flow-intro__eyebrow",children:"/// Morpheum"}),H.jsxs("button",{type:"button",className:"flow-intro__skip",onClick:c,children:["Skip ",H.jsx("span",{className:"flow-intro__skip-key",children:"Esc"})]})]}),H.jsx("div",{className:"flow-intro__sr","aria-live":"polite",children:Qr.map((u,h)=>H.jsxs("p",{children:["Step ",String(h+1).padStart(2,"0"),": ",u.verb,". ",u.description]},u.verb))})]}),H.jsx("div",{ref:r,className:"flow-intro__spacer","aria-hidden":!0})]})}const PR=280,IR=5/4,FR=3800,BR={discover:ll,copy:Y2};function zR(){return typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches}function HR({stepIndex:a,kind:e,className:i,width:r=PR}){const o=nt.useRef(null),c=e??hS(a),u=Math.round(r*IR);return nt.useEffect(()=>{const h=o.current;if(!h)return;let m=0,p;const _=()=>{const S=Math.min(window.devicePixelRatio||1,2),E=Math.round(r*S),C=Math.round(u*S);(h.width!==E||h.height!==C)&&(h.width=E,h.height=C);const M=h.getContext("2d");M&&J2(M,c,E,C,m)};_();const v=BR[c];v&&v>1&&!zR()&&(p=setInterval(()=>{m=(m+1)%v,_()},FR));const g=()=>_();return window.addEventListener("resize",g),()=>{window.removeEventListener("resize",g),p&&clearInterval(p)}},[c,r,u]),H.jsx("div",{className:["loop-step-sheet",i].filter(Boolean).join(" "),style:{width:r,height:u},children:H.jsx("canvas",{ref:o,className:"loop-step-sheet__canvas",style:{width:r,height:u},"aria-hidden":!0})})}const Ev=[{id:"want-eth",agent:"SharpeShark",timestamp:"2026-07-08T15:42:00.000Z",timeLabel:"07-08, 15:42:00",status:"want-to",statusLabel:"Want to",action:"Open ETH long · 1.2 ETH",showActions:!0},{id:"rejected-btc",agent:"NightOwl",timestamp:"2026-07-08T15:31:00.000Z",timeLabel:"07-08, 15:31:00",status:"rejected",statusLabel:"Rejected",action:"Open BTC short · 0.04 BTC"},{id:"close-btc-profit",agent:"SharpeShark",timestamp:"2026-07-08T15:25:00.000Z",timeLabel:"07-08, 15:25:00",status:"short",statusLabel:"Close Long",action:"BTCUSDT · 0.04 BTC · 2,465.12 USDT",pnl:{text:"+103.09",tone:"long"}},{id:"open-eth-long",agent:"FluxRunner",timestamp:"2026-07-08T14:10:00.000Z",timeLabel:"07-08, 14:10:00",status:"long",statusLabel:"Open Long",action:"ETHUSDT · 0.8 ETH · 2,560.00 USDT"},{id:"open-sol-short",agent:"NightOwl",timestamp:"2026-07-07T09:42:00.000Z",timeLabel:"07-07, 09:42:00",status:"short",statusLabel:"Open Short",action:"SOLUSDT · 12 SOL · 1,824.00 USDT"}];function GR(){return H.jsxs("aside",{className:"supervise-log","aria-label":"Agent activity log",children:[H.jsx("header",{className:"supervise-log__header",children:H.jsx("span",{className:"supervise-log__kicker",children:"Activity log"})}),H.jsx("ol",{className:"supervise-log__timeline",children:Ev.map((a,e)=>{const i=e===Ev.length-1,r=e===0;return H.jsxs("li",{className:"supervise-log__item",children:[H.jsxs("div",{className:"supervise-log__meta",children:[H.jsx("span",{className:"supervise-log__agent",children:a.agent}),H.jsx("time",{className:"supervise-log__time",dateTime:a.timestamp,children:a.timeLabel})]}),H.jsxs("div",{className:"supervise-log__track","aria-hidden":!0,children:[i?null:H.jsx("span",{className:"supervise-log__track-line"}),H.jsx("span",{className:["supervise-log__dot",r?"supervise-log__dot--latest":""].filter(Boolean).join(" ")})]}),H.jsxs("div",{className:"supervise-log__body",children:[H.jsx("span",{className:`supervise-log__badge supervise-log__badge--${a.status}`,children:a.statusLabel}),H.jsxs("p",{className:"supervise-log__action",children:[a.action,a.pnl?H.jsxs(H.Fragment,{children:[" · ",H.jsx("span",{className:`supervise-log__pnl supervise-log__pnl--${a.pnl.tone}`,children:a.pnl.text})]}):null]}),a.showActions?H.jsxs("div",{className:"supervise-log__actions",children:[H.jsx("button",{type:"button",className:"supervise-log__btn supervise-log__btn--reject",children:"Reject"}),H.jsx("button",{type:"button",className:"supervise-log__btn supervise-log__btn--approve",children:"Approve"})]}):null]})]},a.id)})})]})}function ES({label:a,status:e,live:i}){return H.jsxs("span",{className:`stat-chip ${i?"stat-chip--live":""}`,children:[H.jsx("span",{className:"stat-chip__label",children:a}),H.jsx("span",{className:"stat-chip__sep",children:"·"}),H.jsx("span",{className:"stat-chip__status",children:e})]})}var VR=wv();function kR(a,e,i=!1){a.style.fontFamily=e.fontFamily,a.style.fontSize=e.fontSize,a.style.fontWeight=e.fontWeight,a.style.letterSpacing=e.letterSpacing,a.style.lineHeight=e.lineHeight,a.style.textTransform=e.textTransform,a.style.whiteSpace=i?"nowrap":"normal",a.style.wordBreak=i?"normal":"break-word"}function XR(a,e,i,r){const o=getComputedStyle(i),c=document.createElement("div");c.style.position="fixed",c.style.left="-99999px",c.style.top="0",c.style.visibility="hidden",c.style.pointerEvents="none",c.style.width=`${e}px`,kR(c,o,!r);const u=document.createTextNode(a);return c.appendChild(u),document.body.appendChild(c),{probe:c,textNode:u}}function WR(a,e,i,r=!0){if(!a)return{lines:[],blockHeight:0};if(e<=0)return{lines:[a],blockHeight:0};const{probe:o,textNode:c}=XR(a,e,i,r),u=o.offsetHeight;if(!r)return document.body.removeChild(o),{lines:[a],blockHeight:u};const h=document.createRange(),m=[];let p=0,_=0;for(let v=1;v<=a.length;v++){h.setStart(c,0),h.setEnd(c,v);const g=h.getClientRects().length;g>_&&_>0&&(m.push(a.slice(p,v-1)),p=v-1),_=g}return p<a.length&&m.push(a.slice(p)),document.body.removeChild(o),{lines:m.length>0?m:[a],blockHeight:u}}const qR=40,YR=5,ZR="typewriter-reveal",bv=1e3,jR=4e3;function Tv(){return bv+Math.random()*(jR-bv)}function bS(){return typeof window>"u"?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches}function KR({text:a,speed:e,cursorWidth:i,active:r,waiting:o,completed:c,holdCursor:u=!1,onComplete:h}){const m=nt.useRef(null),p=nt.useRef(h),_=nt.useRef(null),v=nt.useRef(null),g=nt.useRef(null),S=nt.useRef("idle"),[E,C]=nt.useState("idle");p.current=h;const M=nt.useCallback(()=>{_.current&&(clearTimeout(_.current),_.current=null)},[]),y=nt.useCallback(()=>{var T;M(),v.current=null,g.current=null,S.current="complete",C("complete"),(T=p.current)==null||T.call(p)},[M]),O=nt.useCallback(T=>{M(),v.current=Date.now()+T,_.current=setTimeout(y,T)},[M,y]);nt.useLayoutEffect(()=>{S.current="idle",C("idle"),g.current=null,v.current=null,M()},[a,e,i,M]),nt.useLayoutEffect(()=>{var B,G,Y;if(o||c||S.current==="complete")return;if(!r){S.current==="cursor-hold"&&_.current&&v.current!=null&&(M(),g.current=Math.max(0,v.current-Date.now()),v.current=null);return}if(S.current==="cursor-hold"&&!_.current){const fe=g.current??Tv();g.current=null,O(fe);return}if(S.current==="animating"||S.current==="cursor-hold")return;if(bS()){(B=p.current)==null||B.call(p);return}const T=m.current;if(!T||!a){(G=p.current)==null||G.call(p);return}T.style.width="",T.offsetWidth;const U=Math.max(a.length/e*1e3,120),X=Math.max(a.length,1),z=T.closest(".typewriter-block"),k=(z==null?void 0:z.clientWidth)??((Y=T.parentElement)==null?void 0:Y.clientWidth)??0;T.style.whiteSpace="nowrap",T.style.width="auto";const ce=T.scrollWidth,ue=k>0?Math.min(ce,k):ce;T.style.width="0",T.style.setProperty("--tw-duration",`${U}ms`),T.style.setProperty("--tw-target-width",`${ue}px`),T.style.setProperty("--tw-steps",String(X)),T.style.setProperty("--tw-cursor-width",`${i}px`),T.offsetWidth,S.current="animating",C("animating");const Q=fe=>{if(fe.animationName===ZR){if(u){T.style.width=`${ue}px`,S.current="cursor-hold",C("cursor-hold"),O(Tv());return}T.style.width="",y()}};return T.addEventListener("animationend",Q),()=>{T.removeEventListener("animationend",Q)}},[r,c,y,u,O,e,a,o,M,i]);const F=E==="animating",w=E==="cursor-hold",P=E==="complete",I=["typewriter","typewriter-line",o?"is-waiting":"",F?"is-animating":"",w?"is-cursor-hold":"",c||P?"is-complete":"",!r&&!o&&!c&&!P&&(F||w)?"is-paused":""].filter(Boolean).join(" ");return H.jsx("span",{ref:m,className:I,children:a})}function TS({text:a,className:e,speed:i=qR,cursorWidth:r=YR,multiline:o="auto",active:c=!0,holdCursor:u=!0,onComplete:h}){const m=nt.useRef(null),p=nt.useRef(h),[_,v]=nt.useState([]),[g,S]=nt.useState(0),[E,C]=nt.useState(0),[M,y]=nt.useState(!1),[O,F]=nt.useState(!1),w=bS();p.current=h;const P=nt.useCallback(()=>{const z=m.current;if(!z||!a)return v([]),S(0),F(!0),!0;const k=z.clientWidth;if(k<1)return!1;const ce=o==="auto"||o===!0,{lines:ue,blockHeight:Q}=WR(a,k,z,ce&&!w);return v(ue),S(Q),F(!0),!0},[a,o,w]);nt.useLayoutEffect(()=>{var z,k;if(C(0),y(!1),F(!1),v([]),S(0),w){(z=p.current)==null||z.call(p),F(!0);return}if(!a){(k=p.current)==null||k.call(p),F(!0);return}if(!P()){const ce=new ResizeObserver(()=>{P()&&ce.disconnect()});return m.current&&ce.observe(m.current),()=>ce.disconnect()}},[a,o,P,w]);const D=nt.useCallback(z=>{var ce;const k=z>=_.length-1;VR.flushSync(()=>{if(!k){C(z+1);return}y(!0)}),k&&((ce=p.current)==null||ce.call(p))},[_]),T=["typewriter-block",_.length>1?"typewriter-lines":"typewriter-host",e??"",M?"is-complete":"",O?"":"is-measuring",w?"is-static":""].filter(Boolean).join(" "),U={...!M&&!w&&g>0?{height:g,minHeight:g}:void 0};if(!O)return H.jsx("span",{ref:m,className:T,style:U,children:a});if(w||!a)return H.jsx("span",{ref:m,className:["typewriter","is-static",e??""].filter(Boolean).join(" "),children:a});if(M)return H.jsx("span",{ref:m,className:["typewriter-block","typewriter-host","is-complete",e??""].filter(Boolean).join(" "),style:{...g>0?{height:g,minHeight:g}:void 0},children:a});const X=_.length>0?_:[a];return H.jsxs("span",{ref:m,className:T,style:U,"aria-label":a,children:[H.jsx("span",{className:"typewriter-ghost","aria-hidden":!0,children:a}),H.jsx("span",{className:"typewriter-overlay","aria-hidden":!0,children:X.map((z,k)=>H.jsx(KR,{text:z,speed:i,cursorWidth:r,waiting:k>E,active:c&&k===E,completed:k<E,holdCursor:u&&k===X.length-1,onComplete:k===E?()=>D(k):void 0},`${k}-${z}`))})]})}function QR(){return typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches}function AS(a,e){const i=(e==null?void 0:e.amount)??.2,[r,o]=nt.useState(!1);return nt.useLayoutEffect(()=>{if(r)return;if(QR()){o(!0);return}const c=a.current;if(!c)return;const u=new IntersectionObserver(h=>{for(const m of h)if(m.isIntersecting&&m.intersectionRatio>=Math.min(i,1)){o(!0),u.disconnect();return}},{root:null,threshold:[0,i,Math.min(i+.15,1),1],rootMargin:"0px"});return u.observe(c),()=>u.disconnect()},[i,r,a]),r}function JR(a){return String(a).padStart(2,"0")}function Av(){return typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches}const $R=1600;function e3(){const[a,e]=nt.useState(()=>new Set),[i,r]=nt.useState(!1),o=nt.useRef(new Map),c=nt.useRef(null),u=AS(c,{amount:.35}),h=ds.steps.every(v=>a.has(`step-${v.n}`));nt.useLayoutEffect(()=>{if(Av()){e(new Set(ds.steps.map(g=>`step-${g.n}`))),r(!0);return}const v=new IntersectionObserver(g=>{e(S=>{const E=new Set(S);for(const C of g){const M=C.target.dataset.flowKey;M&&C.isIntersecting&&E.add(M)}return E})},{root:null,threshold:[0,.01,.08,.15,.25],rootMargin:"-42% 0px -42% 0px"});for(const g of o.current.values())v.observe(g);return()=>{v.disconnect()}},[]),nt.useLayoutEffect(()=>{if(Av())return;if(!h){r(!1);return}const v=window.setTimeout(()=>{r(!0)},$R);return()=>window.clearTimeout(v)},[h]);const m=nt.useCallback((v,g)=>{g?o.current.set(v,g):o.current.delete(v)},[]),p=nt.useCallback(v=>{e(g=>new Set(g).add(v))},[]),_=u&&i;return H.jsx("section",{id:"how",className:"section flow",children:H.jsxs("div",{className:"container",children:[H.jsx("p",{className:"section-kicker",children:ds.kicker}),H.jsx("h2",{className:"section-title flow__title",children:ds.title}),H.jsx("div",{className:"flow__chips",children:ds.chips.map(v=>H.jsx(ES,{label:v.label,status:v.value},v.label))}),H.jsx("div",{className:"flow__steps",role:"list",children:ds.steps.map((v,g)=>{const S=`step-${v.n}`,E=a.has(S);return H.jsxs("article",{ref:C=>m(S,C),"data-flow-key":S,role:"listitem",className:`flow-step${E?" flow-step--expanded":""}`,"aria-expanded":E,children:[H.jsxs("button",{type:"button",className:"flow-step__head",onClick:()=>p(S),"aria-label":E?`${v.title}, expanded`:`${v.title}, tap to expand`,children:[H.jsxs("span",{className:"flow-step__idx",children:["Step ",JR(v.n)]}),H.jsx("h3",{className:"flow-step__title",children:v.title}),H.jsx("span",{className:"flow-step__chevron","aria-hidden":!0,children:E?"−":"+"})]}),H.jsx("div",{className:"flow-step__expand","aria-hidden":!E,children:H.jsx("div",{className:"flow-step__expand-inner",children:H.jsxs("div",{className:"flow-step__split",children:[H.jsxs("div",{className:"flow-step__copy",children:[H.jsx("p",{className:"flow-step__meta",children:v.feature}),H.jsx("p",{className:"flow-step__detail",children:v.body}),H.jsxs("p",{className:"flow-step__example",children:[H.jsx("span",{"aria-hidden":!0,children:"> "}),v.example]}),H.jsx("div",{className:"flow-step__actions",children:H.jsx("a",{href:En.explore,className:"flow-step__open","aria-label":`Explore after ${v.title}`,children:H.jsx("span",{"aria-hidden":!0,className:"flow-step__open-arrow",children:"→"})})})]}),H.jsx("div",{className:`flow-step__sheet${g===2?" flow-step__sheet--log":""}`,"aria-hidden":!E,children:E?g===2?H.jsx(GR,{}):H.jsx(HR,{stepIndex:g,width:280}):null})]})})})]},S)})}),H.jsx("p",{ref:c,className:"flow__outcome",children:_?H.jsx(TS,{text:ds.outcome,className:"flow__outcome-type",speed:42,multiline:"auto",active:!0,holdCursor:!0}):H.jsx("span",{className:"flow__outcome-type","aria-hidden":!0,children:ds.outcome})})]})})}const t3=["M41.9213 3.43614C43.0393 3.43614 43.8716 3.77154 44.4182 4.44235C44.9647 5.138 45.1262 6.1939 44.9026 7.61005L41.884 26.8026C41.7846 27.4982 41.8467 28.0075 42.0703 28.3305C42.2691 28.6784 42.6542 28.8771 43.2256 28.9268L43.8591 28.9641L43.8219 29.2622L36.7784 30.492L36.4803 30.492L40.1324 7.46098C40.3064 6.26843 40.0206 5.67216 39.2753 5.67216C38.9523 5.67216 38.6045 5.75912 38.2318 5.93303C37.8343 6.10694 37.3995 6.44235 36.9275 6.93924L36.7411 6.79017C38.0828 4.55415 39.8095 3.43614 41.9213 3.43614Z","M29.9958 3.43614C31.1138 3.43614 31.9461 3.77154 32.4927 4.44235C33.0393 5.138 33.2007 6.1939 32.9771 7.61005L29.9585 26.8026C29.8591 27.4982 29.9212 28.0075 30.1449 28.3305C30.3436 28.6784 30.7287 28.8771 31.3001 28.9268L31.9337 28.9641L31.8964 29.2622L24.8529 30.492L24.5548 30.492L28.207 7.46098C28.3809 6.26843 28.0952 5.67216 27.3498 5.67216C27.0268 5.67216 26.679 5.75912 26.3063 5.93303C25.9088 6.10694 25.474 6.44235 25.002 6.93924L24.8157 6.79017C26.1573 4.55415 27.884 3.43614 29.9958 3.43614Z","M18.0703 3.43614C19.1883 3.43614 20.0206 3.77154 20.5672 4.44235C21.1138 5.138 21.2753 6.1939 21.0517 7.61005L18.033 26.8026C17.9337 27.4982 17.9958 28.0075 18.2194 28.3305C18.4181 28.6784 18.8032 28.8771 19.3747 28.9268L20.0082 28.9641L19.9709 29.2622L12.9275 30.492L12.6293 30.492L16.2815 7.46098C16.4554 6.26843 16.1697 5.67216 15.4243 5.67216C15.1014 5.67216 14.7535 5.75912 14.3809 5.93303C13.9834 6.10694 13.5486 6.44235 13.0765 6.93924L12.8902 6.79017C14.2318 4.55415 15.9585 3.43614 18.0703 3.43614Z","M45.5631 10.8482C46.0378 11.9189 46.0912 12.9315 45.7231 13.8861C45.3095 14.8231 44.3453 15.4956 42.8305 15.9035L16.576 22.853C15.2325 23.2226 14.7771 24.0651 15.2096 25.3806L15.7698 26.7714L13.8491 27.2839L9.924 22.1284L9.25377 20.6168L40.8242 12.2711C41.6674 12.048 42.2133 11.7494 42.4619 11.3754C42.6651 10.9838 42.669 10.5676 42.4735 10.1267C42.3199 9.78031 42.1016 9.5003 41.8185 9.2867C41.4899 9.05556 41.0511 8.87329 40.5021 8.7399L41.5734 7.5866C42.563 7.86379 43.3915 8.28774 44.0591 8.85845C44.7127 9.39767 45.214 10.0609 45.5631 10.8482Z"],n3=58,i3=35;function a3({fill:a="#C8F5A8",width:e=58,height:i=35,padding:r=10,"aria-hidden":o=!0,...c}){const u=[-r,-r,n3+r*2,i3+r*2].join(" ");return H.jsx("svg",{width:e,height:i,viewBox:u,fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":o,...c,children:t3.map(h=>H.jsx("path",{d:h,fill:a},h.slice(0,24)))})}const s3={sm:{width:46,height:28},md:{width:46,height:28},lg:{width:69,height:42},hero:{width:119,height:72}};function RS({size:a="md",showWordmark:e=!0,className:i="",brandName:r="Morpheum"}){const o=s3[a];return H.jsxs("span",{className:`brand-mark brand-mark--${a} ${i}`.trim(),children:[H.jsx(a3,{className:"brand-mark__icon",width:o.width,height:o.height,padding:0,fill:"var(--terminal-brand)"}),e?H.jsx("span",{className:"brand-mark__word",children:r}):null]})}function r3(){return H.jsx("footer",{className:"site-footer",children:H.jsxs("div",{className:"container site-footer__inner",children:[H.jsxs("div",{className:"site-footer__brand",children:[H.jsx("a",{className:"site-footer__logo",href:"#hero","aria-label":"Morpheum home",children:H.jsx(RS,{size:"sm"})}),H.jsx("p",{className:"site-footer__legal",children:GM.legal})]}),H.jsxs("nav",{className:"site-footer__nav","aria-label":"Footer",children:[Qc.map(a=>H.jsx("a",{href:a.href,children:a.label},a.id)),H.jsx("a",{href:En.docs,children:"Docs"}),H.jsx("a",{href:En.manifesto,children:"Manifesto"}),H.jsx("a",{href:En.discord,children:"Discord"}),H.jsx("a",{href:En.x,children:"X"})]})]})})}function o3(){const[a,e]=Gs.headline;return H.jsxs("section",{id:"hero",className:"hero","aria-labelledby":"hero-heading",children:[H.jsx("div",{className:"hero__atmosphere","aria-hidden":!0}),H.jsx("div",{className:"hero__grid","aria-hidden":!0}),H.jsx("div",{className:"hero__scanlines","aria-hidden":!0}),H.jsx("div",{className:"hero__grain","aria-hidden":!0}),H.jsx("div",{className:"hero__veil","aria-hidden":!0}),H.jsxs("div",{className:"container hero__content",children:[H.jsxs("a",{className:"hero__eyebrow",href:Gs.eyebrow.href,children:[Gs.eyebrow.label,H.jsx("span",{className:"hero__eyebrow-chevron","aria-hidden":!0,children:"›"})]}),H.jsxs("h1",{id:"hero-heading",className:"hero__headline",children:[H.jsx("span",{className:"hero__line hero__line--lead",children:a}),H.jsx("span",{className:"hero__line hero__line--punch",children:e})]}),H.jsxs("div",{className:"hero__ctas",children:[H.jsx(to,{href:Gs.primaryCta.href,variant:"primary",children:Gs.primaryCta.label}),H.jsx(to,{href:Gs.secondaryCta.href,variant:"secondary",children:Gs.secondaryCta.label})]})]})]})}const Rv="!@#$%^&*()_+{}[]|;:,.<>?/0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",l3=50,CS=3500,c3=4e3,u3=CS+c3;function f3(){return typeof window>"u"?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Cv(a){return/[A-Za-z0-9]/.test(a)}function d3(){return Rv[Math.floor(Math.random()*Rv.length)]??"?"}function h3(a){return Math.random()<.5?d3():a}function p3(a,e){const i=[];for(let m=0;m<a.length;m++)Cv(a[m]??"")&&i.push(m);const r=i.length,o=r===0?1:Math.min(e/CS,1),c=Math.floor(o*r),u=new Set(i.slice(0,c));let h="";for(let m=0;m<a.length;m++){const p=a[m]??"";!Cv(p)||u.has(m)?h+=p:h+=h3(p)}return h}function m3(a,e=!0){const[i,r]=nt.useState(a);return nt.useEffect(()=>{if(!e||f3()){r(a);return}let o=Date.now();const c=()=>{const h=Date.now();let m=h-o;m>=u3&&(o=h,m=0),r(p3(a,m))};c();const u=setInterval(c,l3);return()=>{clearInterval(u)}},[a,e]),i}function g3(){const a=m3(Cd.text);return H.jsx("div",{className:"manifesto-strip",children:H.jsx("a",{className:"manifesto-strip__link manifesto-strip__link--matrix",href:Cd.href,"aria-label":Cd.text,children:a})})}function _3(){const a=[...m_,...m_];return H.jsx("div",{className:"marquee","aria-label":"Live status",children:H.jsx("div",{className:"marquee__viewport",children:H.jsx("div",{className:"marquee__track",children:a.map((e,i)=>H.jsx(ES,{label:e.label,status:e.status,live:"live"in e?e.live:!1},`${e.label}-${i}`))})})})}function v3(){return H.jsx("section",{id:"personas",className:"section personas",children:H.jsxs("div",{className:"container",children:[H.jsx("p",{className:"section-kicker",children:Dd.kicker}),H.jsx("h2",{className:"section-title personas__title",children:Dd.title}),H.jsx("div",{className:"personas__grid",children:Dd.items.map(a=>H.jsxs("article",{className:`persona-card persona-card--${a.weight}`,children:[H.jsx("h3",{className:"persona-card__title",children:a.title}),H.jsx("ol",{className:"persona-card__steps",children:a.steps.map(e=>H.jsxs("li",{children:[H.jsxs("span",{className:"persona-card__chevron","aria-hidden":!0,children:[">"," "]}),e]},e))}),H.jsx(to,{href:a.cta.href,variant:"ghost",className:"persona-card__cta",children:a.cta.label})]},a.title))})]})})}function S3(){const[a,e]=nt.useState(!1),[i,r]=nt.useState(!1),[o,c]=nt.useState("");return nt.useEffect(()=>{const u=()=>e(window.scrollY>24);return u(),window.addEventListener("scroll",u,{passive:!0}),()=>window.removeEventListener("scroll",u)},[]),nt.useEffect(()=>{const u=Qc.map(m=>m.id),h=new IntersectionObserver(m=>{var _;const p=m.filter(v=>v.isIntersecting).sort((v,g)=>g.intersectionRatio-v.intersectionRatio);(_=p[0])!=null&&_.target.id&&c(p[0].target.id)},{rootMargin:"-30% 0px -55% 0px",threshold:[0,.25,.5]});return u.forEach(m=>{const p=document.getElementById(m);p&&h.observe(p)}),()=>h.disconnect()},[]),nt.useEffect(()=>(document.body.style.overflow=i?"hidden":"",()=>{document.body.style.overflow=""}),[i]),H.jsxs(H.Fragment,{children:[H.jsx("header",{className:`sticky-header ${a?"sticky-header--solid":""}`,children:H.jsxs("div",{className:"sticky-header__inner",children:[H.jsx("a",{className:"sticky-header__logo",href:"#hero","aria-label":"Morpheum home",children:H.jsx(RS,{size:"sm",brandName:"Morpheum"})}),H.jsx("nav",{className:"sticky-header__nav","aria-label":"Primary",children:Qc.map(u=>H.jsx("a",{href:u.href,className:`sticky-header__link ${o===u.id?"is-active":""}`,children:u.label},u.id))}),H.jsxs("div",{className:"sticky-header__actions",children:[H.jsx("a",{className:"sticky-header__docs",href:En.docs,children:"Docs"}),H.jsx(to,{href:En.app,variant:"primary",className:"sticky-header__launch",children:"Launch app"}),H.jsxs("button",{type:"button",className:"sticky-header__menu","aria-expanded":i,"aria-controls":"mobile-nav","aria-label":i?"Close menu":"Open menu",onClick:()=>r(u=>!u),children:[H.jsx("span",{}),H.jsx("span",{}),H.jsx("span",{})]})]})]})}),H.jsx("div",{id:"mobile-nav",className:`mobile-sheet ${i?"is-open":""}`,hidden:!i,children:H.jsxs("nav",{className:"mobile-sheet__nav","aria-label":"Mobile",children:[Qc.map(u=>H.jsx("a",{href:u.href,onClick:()=>r(!1),className:o===u.id?"is-active":"",children:u.label},u.id)),H.jsx("a",{href:En.docs,onClick:()=>r(!1),children:"Docs"})]})})]})}function x3(){const a=nt.useRef(null),e=AS(a,{amount:.35});return H.jsx("section",{className:"thesis section","aria-label":"Thesis",children:H.jsxs("div",{className:"container thesis__inner",children:[H.jsx("p",{className:"section-kicker",children:"Two Risks in Agentic Economy"}),H.jsx("div",{className:"thesis__risks",children:wd.risks.map(i=>H.jsxs("article",{className:"thesis__pair",children:[H.jsxs("div",{className:"thesis__risk",children:[H.jsx("p",{className:"thesis__label",children:"Risk"}),H.jsx("h3",{className:"thesis__risk-title",children:i.risk}),H.jsxs("p",{className:"thesis__failure",children:[H.jsx("span",{"aria-hidden":!0,children:"> "}),i.failure]})]}),H.jsxs("div",{className:"thesis__solve",children:[H.jsxs("p",{className:"thesis__label thesis__label--solve",children:["Solve · ",i.solveLabel]}),H.jsx("p",{className:"thesis__solve-body",children:i.solve})]})]},i.risk))}),H.jsx("p",{ref:a,className:"thesis__close",children:e?H.jsx(TS,{text:wd.close,className:"thesis__close-type",speed:36,multiline:!1,active:!0,holdCursor:!0}):H.jsx("span",{className:"thesis__close-type","aria-hidden":!0,children:wd.close})})]})})}function M3(){return H.jsxs("div",{className:"page",children:[H.jsx("a",{className:"skip-link",href:"#hero",children:"Skip to content"}),H.jsx(g3,{}),H.jsx(S3,{}),H.jsxs("main",{className:"page__main",children:[H.jsx(OR,{}),H.jsx(o3,{}),H.jsx(x3,{}),H.jsx(_3,{}),H.jsx(kM,{}),H.jsx(v3,{}),H.jsx(e3,{}),H.jsx(WM,{}),H.jsx(VM,{})]}),H.jsx(r3,{})]})}zM.createRoot(document.getElementById("root")).render(H.jsx(nt.StrictMode,{children:H.jsx(M3,{})}));
