import{R as h,a as L}from"./react-CJP9YpS5.js";import{w as M}from"./use-sync-external-store-CUgB0uUp.js";var o="default"in h?L:h,g=Symbol.for("react-redux-context"),m=typeof globalThis<"u"?globalThis:{};function U(){if(!o.createContext)return{};const e=m[g]??(m[g]=new Map);let n=e.get(o.createContext);return n||(n=o.createContext(null),e.set(o.createContext,n)),n}var c=U(),D=()=>{throw new Error("uSES not initialized!")};function v(e=c){return function(){return o.useContext(e)}}var R=v(),E=D,H=e=>{E=e},P=(e,n)=>e===n;function V(e=c){const n=e===c?R:v(e);return function(t,r={}){const{equalityFn:i=P,devModeChecks:a={}}=typeof r=="function"?{equalityFn:r}:r,{store:l,subscription:f,getServerState:s,stabilityCheck:b,identityFunctionCheck:x}=n();o.useRef(!0);const p=o.useCallback({[t.name](d){return t(d)}}[t.name],[t,b,a.stabilityCheck]),S=E(f.addNestedSub,l.getState,s||l.getState,p,i);return o.useDebugValue(S),S}}var j=V();function z(e){e()}function T(){let e=null,n=null;return{clear(){e=null,n=null},notify(){z(()=>{let u=e;for(;u;)u.callback(),u=u.next})},get(){let u=[],t=e;for(;t;)u.push(t),t=t.next;return u},subscribe(u){let t=!0,r=n={callback:u,next:null,prev:n};return r.prev?r.prev.next=r:e=r,function(){!t||e===null||(t=!1,r.next?r.next.prev=r.prev:n=r.prev,r.prev?r.prev.next=r.next:e=r.next)}}}}var w={notify(){},get:()=>[]};function W(e,n){let u,t=w,r=0,i=!1;function a(y){b();const N=t.subscribe(y);let C=!1;return()=>{C||(C=!0,N(),x())}}function l(){t.notify()}function f(){d.onStateChange&&d.onStateChange()}function s(){return i}function b(){r++,u||(u=n?n.addNestedSub(f):e.subscribe(f),t=T())}function x(){r--,u&&r===0&&(u(),u=void 0,t.clear(),t=w)}function p(){i||(i=!0,b())}function S(){i&&(i=!1,x())}const d={addNestedSub:a,notifyNestedSubs:l,handleChangeWrapper:f,isSubscribed:s,trySubscribe:p,tryUnsubscribe:S,getListeners:()=>t};return d}var I=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",$=I?o.useLayoutEffect:o.useEffect;function q({store:e,context:n,children:u,serverState:t,stabilityCheck:r="once",identityFunctionCheck:i="once"}){const a=o.useMemo(()=>{const s=W(e);return{store:e,subscription:s,getServerState:t?()=>t:void 0,stabilityCheck:r,identityFunctionCheck:i}},[e,t,r,i]),l=o.useMemo(()=>e.getState(),[e]);$(()=>{const{subscription:s}=a;return s.onStateChange=s.notifyNestedSubs,s.trySubscribe(),l!==e.getState()&&s.notifyNestedSubs(),()=>{s.tryUnsubscribe(),s.onStateChange=void 0}},[a,l]);const f=n||c;return o.createElement(f.Provider,{value:a},u)}var F=q;function k(e=c){const n=e===c?R:v(e);return function(){const{store:t}=n();return t}}var A=k();function B(e=c){const n=e===c?A:k(e);return function(){return n().dispatch}}var G=B();H(M.useSyncExternalStoreWithSelector);export{F as P,G as a,j as u};
