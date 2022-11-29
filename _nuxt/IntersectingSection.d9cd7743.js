import{v as ae,x as oe,y as se,u as ie,z as ue,A as le,i as m,j as C,B as ce,w as I,C as fe,D as pe}from"./entry.3fb85dd0.js";var Q;const j=typeof window<"u",de=e=>typeof e=="function",ve=e=>typeof e=="string",N=()=>{};j&&((Q=window==null?void 0:window.navigator)==null?void 0:Q.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function D(e){return typeof e=="function"?e():ie(e)}function _e(e,t){function r(...n){e(()=>t.apply(this,n),{fn:t,thisArg:this,args:n})}return r}const X=e=>e();function Oe(e=X){const t=m(!0);function r(){t.value=!1}function n(){t.value=!0}return{isActive:t,pause:r,resume:n,eventFilter:(...o)=>{t.value&&e(...o)}}}function ge(e){return e}function k(e){return ue()?(le(e),!0):!1}function ye(e){return typeof e=="function"?C(e):m(e)}function Y(e,t=!0){ae()?oe(e):t?e():se(e)}function nt(e=!1,t={}){const{truthyValue:r=!0,falsyValue:n=!1}=t,a=ce(e),o=m(e);function u(i){if(arguments.length)return o.value=i,o.value;{const l=D(r);return o.value=o.value===l?D(n):l,o.value}}return a?u:[o,u]}var R=Object.getOwnPropertySymbols,we=Object.prototype.hasOwnProperty,me=Object.prototype.propertyIsEnumerable,he=(e,t)=>{var r={};for(var n in e)we.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&R)for(var n of R(e))t.indexOf(n)<0&&me.call(e,n)&&(r[n]=e[n]);return r};function Pe(e,t,r={}){const n=r,{eventFilter:a=X}=n,o=he(n,["eventFilter"]);return I(e,_e(a,t),o)}var be=Object.defineProperty,Se=Object.defineProperties,$e=Object.getOwnPropertyDescriptors,F=Object.getOwnPropertySymbols,Z=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable,x=(e,t,r)=>t in e?be(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Ie=(e,t)=>{for(var r in t||(t={}))Z.call(t,r)&&x(e,r,t[r]);if(F)for(var r of F(t))ee.call(t,r)&&x(e,r,t[r]);return e},je=(e,t)=>Se(e,$e(t)),Ee=(e,t)=>{var r={};for(var n in e)Z.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&F)for(var n of F(e))t.indexOf(n)<0&&ee.call(e,n)&&(r[n]=e[n]);return r};function Ae(e,t,r={}){const n=r,{eventFilter:a}=n,o=Ee(n,["eventFilter"]),{eventFilter:u,pause:i,resume:l,isActive:c}=Oe(a);return{stop:Pe(e,t,je(Ie({},o),{eventFilter:u})),pause:i,resume:l,isActive:c}}function L(e){var t;const r=D(e);return(t=r==null?void 0:r.$el)!=null?t:r}const b=j?window:void 0;j&&window.document;j&&window.navigator;j&&window.location;function Ne(...e){let t,r,n,a;if(ve(e[0])||Array.isArray(e[0])?([r,n,a]=e,t=b):[t,r,n,a]=e,!t)return N;Array.isArray(r)||(r=[r]),Array.isArray(n)||(n=[n]);const o=[],u=()=>{o.forEach(f=>f()),o.length=0},i=(f,p,d)=>(f.addEventListener(p,d,a),()=>f.removeEventListener(p,d,a)),l=I(()=>L(t),f=>{u(),f&&o.push(...r.flatMap(p=>n.map(d=>i(f,p,d))))},{immediate:!0,flush:"post"}),c=()=>{l(),u()};return k(c),c}function te(e,t=!1){const r=m(),n=()=>r.value=Boolean(e());return n(),Y(n,t),r}function Ce(e,t={}){const{window:r=b}=t,n=te(()=>r&&"matchMedia"in r&&typeof r.matchMedia=="function");let a;const o=m(!1),u=()=>{!a||("removeEventListener"in a?a.removeEventListener("change",i):a.removeListener(i))},i=()=>{!n.value||(u(),a=r.matchMedia(ye(e).value),o.value=a.matches,"addEventListener"in a?a.addEventListener("change",i):a.addListener(i))};return fe(i),k(()=>u()),o}const M=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},T="__vueuse_ssr_handlers__";M[T]=M[T]||{};const De=M[T];function re(e,t){return De[e]||t}function Fe(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}var Le=Object.defineProperty,V=Object.getOwnPropertySymbols,Me=Object.prototype.hasOwnProperty,Te=Object.prototype.propertyIsEnumerable,W=(e,t,r)=>t in e?Le(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,B=(e,t)=>{for(var r in t||(t={}))Me.call(t,r)&&W(e,r,t[r]);if(V)for(var r of V(t))Te.call(t,r)&&W(e,r,t[r]);return e};const ke={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}};function Qe(e,t,r,n={}){var a;const{flush:o="pre",deep:u=!0,listenToStorageChanges:i=!0,writeDefaults:l=!0,mergeDefaults:c=!1,shallow:f,window:p=b,eventFilter:d,onError:O=s=>{console.error(s)}}=n,v=(f?pe:m)(t);if(!r)try{r=re("getDefaultStorage",()=>{var s;return(s=b)==null?void 0:s.localStorage})()}catch(s){O(s)}if(!r)return v;const g=D(t),$=Fe(g),w=(a=n.serializer)!=null?a:ke[$],{pause:_,resume:h}=Ae(v,()=>P(v.value),{flush:o,deep:u,eventFilter:d});return p&&i&&Ne(p,"storage",E),E(),v;function P(s){try{s==null?r.removeItem(e):r.setItem(e,w.write(s))}catch(y){O(y)}}function S(s){_();try{const y=s?s.newValue:r.getItem(e);if(y==null)return l&&g!==null&&r.setItem(e,w.write(g)),g;if(!s&&c){const A=w.read(y);return de(c)?c(A,g):$==="object"&&!Array.isArray(A)?B(B({},g),A):A}else return typeof y!="string"?y:w.read(y)}catch(y){O(y)}finally{h()}}function E(s){if(!(s&&s.storageArea!==r)){if(s&&s.key===null){v.value=g;return}s&&s.key!==e||(v.value=S(s))}}}function ne(e){return Ce("(prefers-color-scheme: dark)",e)}var Re=Object.defineProperty,J=Object.getOwnPropertySymbols,xe=Object.prototype.hasOwnProperty,Ve=Object.prototype.propertyIsEnumerable,z=(e,t,r)=>t in e?Re(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,We=(e,t)=>{for(var r in t||(t={}))xe.call(t,r)&&z(e,r,t[r]);if(J)for(var r of J(t))Ve.call(t,r)&&z(e,r,t[r]);return e};function Be(e={}){const{selector:t="html",attribute:r="class",initialValue:n="auto",window:a=b,storage:o,storageKey:u="vueuse-color-scheme",listenToStorageChanges:i=!0,storageRef:l,emitAuto:c}=e,f=We({auto:"",light:"light",dark:"dark"},e.modes||{}),p=ne({window:a}),d=C(()=>p.value?"dark":"light"),O=l||(u==null?m(n):Qe(u,n,o,{window:a,listenToStorageChanges:i})),v=C({get(){return O.value==="auto"&&!c?d.value:O.value},set(_){O.value=_}}),g=re("updateHTMLAttrs",(_,h,P)=>{const S=a==null?void 0:a.document.querySelector(_);if(!!S)if(h==="class"){const E=P.split(/\s/g);Object.values(f).flatMap(s=>(s||"").split(/\s/g)).filter(Boolean).forEach(s=>{E.includes(s)?S.classList.add(s):S.classList.remove(s)})}else S.setAttribute(h,P)});function $(_){var h;const P=_==="auto"?d.value:_;g(t,r,(h=f[P])!=null?h:P)}function w(_){e.onChanged?e.onChanged(_,$):$(_)}return I(v,w,{flush:"post",immediate:!0}),c&&I(d,()=>w(v.value),{flush:"post"}),Y(()=>w(v.value)),v}var Je=Object.defineProperty,ze=Object.defineProperties,He=Object.getOwnPropertyDescriptors,H=Object.getOwnPropertySymbols,Ue=Object.prototype.hasOwnProperty,Ge=Object.prototype.propertyIsEnumerable,U=(e,t,r)=>t in e?Je(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Ke=(e,t)=>{for(var r in t||(t={}))Ue.call(t,r)&&U(e,r,t[r]);if(H)for(var r of H(t))Ge.call(t,r)&&U(e,r,t[r]);return e},qe=(e,t)=>ze(e,He(t));function at(e={}){const{valueDark:t="dark",valueLight:r="",window:n=b}=e,a=Be(qe(Ke({},e),{onChanged:(i,l)=>{var c;e.onChanged?(c=e.onChanged)==null||c.call(e,i==="dark"):l(i)},modes:{dark:t,light:r}})),o=ne({window:n});return C({get(){return a.value==="dark"},set(i){i===o.value?a.value="auto":a.value=i?"dark":"light"}})}function ot(e,t,r={}){const{root:n,rootMargin:a="0px",threshold:o=.1,window:u=b}=r,i=te(()=>u&&"IntersectionObserver"in u);let l=N;const c=i.value?I(()=>({el:L(e),root:L(n)}),({el:p,root:d})=>{if(l(),!p)return;const O=new IntersectionObserver(t,{root:d,rootMargin:a,threshold:o});O.observe(p),l=()=>{O.disconnect(),l=N}},{immediate:!0,flush:"post"}):N,f=()=>{l(),c()};return k(f),{isSupported:i,stop:f}}var G;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(G||(G={}));var Xe=Object.defineProperty,K=Object.getOwnPropertySymbols,Ye=Object.prototype.hasOwnProperty,Ze=Object.prototype.propertyIsEnumerable,q=(e,t,r)=>t in e?Xe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,et=(e,t)=>{for(var r in t||(t={}))Ye.call(t,r)&&q(e,r,t[r]);if(K)for(var r of K(t))Ze.call(t,r)&&q(e,r,t[r]);return e};const tt={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};et({linear:ge},tt);const st=m({section1:!1,section2:!1,section3:!1,section4:!1});export{at as a,nt as b,st as i,ot as u};
