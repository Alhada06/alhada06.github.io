import{v as ie,x as ue,y as ce,u as fe,z as pe,A as de,i as E,j,B as ve,w as D,C as me,D as _e,r as W}from"./entry.461eb853.js";var Q;const A=typeof window<"u",ge=e=>typeof e=="function",Oe=e=>typeof e=="string",T=()=>{};A&&((Q=window==null?void 0:window.navigator)==null?void 0:Q.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function S(e){return typeof e=="function"?e():fe(e)}function x(e,r){function t(...n){e(()=>r.apply(this,n),{fn:r,thisArg:this,args:n})}return t}const ee=e=>e();function he(e,r={}){let t,n;return a=>{const l=S(e),s=S(r.maxWait);if(t&&clearTimeout(t),l<=0||s!==void 0&&s<=0)return n&&(clearTimeout(n),n=null),a();s&&!n&&(n=setTimeout(()=>{t&&clearTimeout(t),n=null,a()},s)),t=setTimeout(()=>{n&&clearTimeout(n),n=null,a()},l)}}function ye(e,r=!0,t=!0){let n=0,o,a=!0;const l=()=>{o&&(clearTimeout(o),o=void 0)};return f=>{const u=S(e),c=Date.now()-n;if(l(),u<=0)return n=Date.now(),f();c>u&&(t||!a)?(n=Date.now(),f()):r&&(o=setTimeout(()=>{n=Date.now(),a=!0,l(),f()},u-c)),!t&&!o&&(o=setTimeout(()=>a=!0,u)),a=!1}}function we(e=ee){const r=E(!0);function t(){r.value=!1}function n(){r.value=!0}return{isActive:r,pause:t,resume:n,eventFilter:(...a)=>{r.value&&e(...a)}}}function be(e){return e}function R(e){return pe()?(de(e),!0):!1}function Pe(e,r=200,t={}){return x(he(r,t),e)}function Se(e,r=200,t=!1,n=!0){return x(ye(r,t,n),e)}function Ee(e){return typeof e=="function"?j(e):E(e)}function te(e,r=!0){ie()?ue(e):r?e():ce(e)}function ut(e=!1,r={}){const{truthyValue:t=!0,falsyValue:n=!1}=r,o=ve(e),a=E(e);function l(s){if(arguments.length)return a.value=s,a.value;{const f=S(t);return a.value=a.value===f?S(n):f,a.value}}return o?l:[a,l]}var H=Object.getOwnPropertySymbols,Ie=Object.prototype.hasOwnProperty,$e=Object.prototype.propertyIsEnumerable,Te=(e,r)=>{var t={};for(var n in e)Ie.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&H)for(var n of H(e))r.indexOf(n)<0&&$e.call(e,n)&&(t[n]=e[n]);return t};function je(e,r,t={}){const n=t,{eventFilter:o=ee}=n,a=Te(n,["eventFilter"]);return D(e,x(o,r),a)}var De=Object.defineProperty,Ae=Object.defineProperties,Le=Object.getOwnPropertyDescriptors,N=Object.getOwnPropertySymbols,re=Object.prototype.hasOwnProperty,ne=Object.prototype.propertyIsEnumerable,V=(e,r,t)=>r in e?De(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,Ne=(e,r)=>{for(var t in r||(r={}))re.call(r,t)&&V(e,t,r[t]);if(N)for(var t of N(r))ne.call(r,t)&&V(e,t,r[t]);return e},Ce=(e,r)=>Ae(e,Le(r)),Fe=(e,r)=>{var t={};for(var n in e)re.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&N)for(var n of N(e))r.indexOf(n)<0&&ne.call(e,n)&&(t[n]=e[n]);return t};function Me(e,r,t={}){const n=t,{eventFilter:o}=n,a=Fe(n,["eventFilter"]),{eventFilter:l,pause:s,resume:f,isActive:u}=we(o);return{stop:je(e,r,Ce(Ne({},a),{eventFilter:l})),pause:s,resume:f,isActive:u}}function C(e){var r;const t=S(e);return(r=t==null?void 0:t.$el)!=null?r:t}const $=A?window:void 0;A&&window.document;A&&window.navigator;A&&window.location;function oe(...e){let r,t,n,o;if(Oe(e[0])||Array.isArray(e[0])?([t,n,o]=e,r=$):[r,t,n,o]=e,!r)return T;Array.isArray(t)||(t=[t]),Array.isArray(n)||(n=[n]);const a=[],l=()=>{a.forEach(c=>c()),a.length=0},s=(c,v,m)=>(c.addEventListener(v,m,o),()=>c.removeEventListener(v,m,o)),f=D(()=>C(r),c=>{l(),c&&a.push(...t.flatMap(v=>n.map(m=>s(c,v,m))))},{immediate:!0,flush:"post"}),u=()=>{f(),l()};return R(u),u}function ae(e,r=!1){const t=E(),n=()=>t.value=Boolean(e());return n(),te(n,r),t}function xe(e,r={}){const{window:t=$}=r,n=ae(()=>t&&"matchMedia"in t&&typeof t.matchMedia=="function");let o;const a=E(!1),l=()=>{!o||("removeEventListener"in o?o.removeEventListener("change",s):o.removeListener(s))},s=()=>{!n.value||(l(),o=t.matchMedia(Ee(e).value),a.value=o.matches,"addEventListener"in o?o.addEventListener("change",s):o.addListener(s))};return me(s),R(()=>l()),a}const F=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},M="__vueuse_ssr_handlers__";F[M]=F[M]||{};const Re=F[M];function se(e,r){return Re[e]||r}function We(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}var Qe=Object.defineProperty,k=Object.getOwnPropertySymbols,He=Object.prototype.hasOwnProperty,Ve=Object.prototype.propertyIsEnumerable,B=(e,r,t)=>r in e?Qe(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,J=(e,r)=>{for(var t in r||(r={}))He.call(r,t)&&B(e,t,r[t]);if(k)for(var t of k(r))Ve.call(r,t)&&B(e,t,r[t]);return e};const ke={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}};function Be(e,r,t,n={}){var o;const{flush:a="pre",deep:l=!0,listenToStorageChanges:s=!0,writeDefaults:f=!0,mergeDefaults:u=!1,shallow:c,window:v=$,eventFilter:m,onError:b=i=>{console.error(i)}}=n,_=(c?_e:E)(r);if(!t)try{t=se("getDefaultStorage",()=>{var i;return(i=$)==null?void 0:i.localStorage})()}catch(i){b(i)}if(!t)return _;const g=S(r),O=We(g),I=(o=n.serializer)!=null?o:ke[O],{pause:w,resume:p}=Me(_,()=>d(_.value),{flush:a,deep:l,eventFilter:m});return v&&s&&oe(v,"storage",y),y(),_;function d(i){try{i==null?t.removeItem(e):t.setItem(e,I.write(i))}catch(P){b(P)}}function h(i){w();try{const P=i?i.newValue:t.getItem(e);if(P==null)return f&&g!==null&&t.setItem(e,I.write(g)),g;if(!i&&u){const L=I.read(P);return ge(u)?u(L,g):O==="object"&&!Array.isArray(L)?J(J({},g),L):L}else return typeof P!="string"?P:I.read(P)}catch(P){b(P)}finally{p()}}function y(i){if(!(i&&i.storageArea!==t)){if(i&&i.key===null){_.value=g;return}i&&i.key!==e||(_.value=h(i))}}}function le(e){return xe("(prefers-color-scheme: dark)",e)}var Je=Object.defineProperty,z=Object.getOwnPropertySymbols,ze=Object.prototype.hasOwnProperty,Ue=Object.prototype.propertyIsEnumerable,U=(e,r,t)=>r in e?Je(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,Ge=(e,r)=>{for(var t in r||(r={}))ze.call(r,t)&&U(e,t,r[t]);if(z)for(var t of z(r))Ue.call(r,t)&&U(e,t,r[t]);return e};function Ke(e={}){const{selector:r="html",attribute:t="class",initialValue:n="auto",window:o=$,storage:a,storageKey:l="vueuse-color-scheme",listenToStorageChanges:s=!0,storageRef:f,emitAuto:u}=e,c=Ge({auto:"",light:"light",dark:"dark"},e.modes||{}),v=le({window:o}),m=j(()=>v.value?"dark":"light"),b=f||(l==null?E(n):Be(l,n,a,{window:o,listenToStorageChanges:s})),_=j({get(){return b.value==="auto"&&!u?m.value:b.value},set(w){b.value=w}}),g=se("updateHTMLAttrs",(w,p,d)=>{const h=o==null?void 0:o.document.querySelector(w);if(!!h)if(p==="class"){const y=d.split(/\s/g);Object.values(c).flatMap(i=>(i||"").split(/\s/g)).filter(Boolean).forEach(i=>{y.includes(i)?h.classList.add(i):h.classList.remove(i)})}else h.setAttribute(p,d)});function O(w){var p;const d=w==="auto"?m.value:w;g(r,t,(p=c[d])!=null?p:d)}function I(w){e.onChanged?e.onChanged(w,O):O(w)}return D(_,I,{flush:"post",immediate:!0}),u&&D(m,()=>I(_.value),{flush:"post"}),te(()=>I(_.value)),_}var Xe=Object.defineProperty,qe=Object.defineProperties,Ye=Object.getOwnPropertyDescriptors,G=Object.getOwnPropertySymbols,Ze=Object.prototype.hasOwnProperty,et=Object.prototype.propertyIsEnumerable,K=(e,r,t)=>r in e?Xe(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,tt=(e,r)=>{for(var t in r||(r={}))Ze.call(r,t)&&K(e,t,r[t]);if(G)for(var t of G(r))et.call(r,t)&&K(e,t,r[t]);return e},rt=(e,r)=>qe(e,Ye(r));function ct(e={}){const{valueDark:r="dark",valueLight:t="",window:n=$}=e,o=Ke(rt(tt({},e),{onChanged:(s,f)=>{var u;e.onChanged?(u=e.onChanged)==null||u.call(e,s==="dark"):f(s)},modes:{dark:r,light:t}})),a=le({window:n});return j({get(){return o.value==="dark"},set(s){s===a.value?o.value="auto":o.value=s?"dark":"light"}})}const X=1;function ft(e,r={}){const{throttle:t=0,idle:n=200,onStop:o=T,onScroll:a=T,offset:l={left:0,right:0,top:0,bottom:0},eventListenerOptions:s={capture:!1,passive:!0},behavior:f="auto"}=r,u=E(0),c=E(0),v=j({get(){return u.value},set(p){b(p,void 0)}}),m=j({get(){return c.value},set(p){b(void 0,p)}});function b(p,d){var h,y,i;const P=S(e);!P||(i=P instanceof Document?document.body:P)==null||i.scrollTo({top:(h=S(d))!=null?h:m.value,left:(y=S(p))!=null?y:v.value,behavior:S(f)})}const _=E(!1),g=W({left:!0,right:!1,top:!0,bottom:!1}),O=W({left:!1,right:!1,top:!1,bottom:!1}),I=Pe(p=>{_.value=!1,O.left=!1,O.right=!1,O.top=!1,O.bottom=!1,o(p)},t+n),w=p=>{const d=p.target===document?p.target.documentElement:p.target,h=d.scrollLeft;O.left=h<u.value,O.right=h>c.value,g.left=h<=0+(l.left||0),g.right=h+d.clientWidth>=d.scrollWidth-(l.right||0)-X,u.value=h;let y=d.scrollTop;p.target===document&&!y&&(y=document.body.scrollTop),O.top=y<c.value,O.bottom=y>c.value,g.top=y<=0+(l.top||0),g.bottom=y+d.clientHeight>=d.scrollHeight-(l.bottom||0)-X,c.value=y,_.value=!0,I(p),a(p)};return oe(e,"scroll",t?Se(w,t,!0,!1):w,s),{x:v,y:m,isScrolling:_,arrivedState:g,directions:O}}function pt(e,r,t={}){const{root:n,rootMargin:o="0px",threshold:a=.1,window:l=$}=t,s=ae(()=>l&&"IntersectionObserver"in l);let f=T;const u=s.value?D(()=>({el:C(e),root:C(n)}),({el:v,root:m})=>{if(f(),!v)return;const b=new IntersectionObserver(r,{root:m,rootMargin:o,threshold:a});b.observe(v),f=()=>{b.disconnect(),f=T}},{immediate:!0,flush:"post"}):T,c=()=>{f(),u()};return R(c),{isSupported:s,stop:c}}var q;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(q||(q={}));var nt=Object.defineProperty,Y=Object.getOwnPropertySymbols,ot=Object.prototype.hasOwnProperty,at=Object.prototype.propertyIsEnumerable,Z=(e,r,t)=>r in e?nt(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,st=(e,r)=>{for(var t in r||(r={}))ot.call(r,t)&&Z(e,t,r[t]);if(Y)for(var t of Y(r))at.call(r,t)&&Z(e,t,r[t]);return e};const lt={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};st({linear:be},lt);const dt=E({section1:!1,section2:!1,section3:!1,section4:!1});export{ct as a,ut as b,ft as c,dt as i,pt as u};
