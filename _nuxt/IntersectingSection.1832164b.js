import{a as pe,r as E,J as re,f as de,V as ve,W as me,X as _e,Y as ne,u as ge,Z as he,e as A,S as C,D as Oe,K as ye,M as we,$ as V}from"./entry.f0f2bed0.js";const vt=pe({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(e,{slots:r,attrs:t}){const n=E(!1);return re(()=>{n.value=!0}),a=>{var i;if(n.value)return(i=r.default)==null?void 0:i.call(r);const o=r.fallback||r.placeholder;if(o)return o();const l=a.fallback||a.placeholder||"",s=a.fallbackTag||a.placeholderTag||"span";return de(s,t,l)}}});var W;const ae=typeof window<"u",be=e=>typeof e=="function",Pe=e=>typeof e=="string",$=()=>{};ae&&((W=window==null?void 0:window.navigator)!=null&&W.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function S(e){return typeof e=="function"?e():ge(e)}function x(e,r){function t(...n){return new Promise((a,o)=>{Promise.resolve(e(()=>r.apply(this,n),{fn:r,thisArg:this,args:n})).then(a).catch(o)})}return t}const oe=e=>e();function Se(e,r={}){let t,n,a=$;const o=s=>{clearTimeout(s),a(),a=$};return s=>{const i=S(e),u=S(r.maxWait);return t&&o(t),i<=0||u!==void 0&&u<=0?(n&&(o(n),n=null),Promise.resolve(s())):new Promise((c,p)=>{a=r.rejectOnCancel?p:c,u&&!n&&(n=setTimeout(()=>{t&&o(t),n=null,c(s())},u)),t=setTimeout(()=>{n&&o(n),n=null,c(s())},i)})}}function Ee(e,r=!0,t=!0,n=!1){let a=0,o,l=!0,s=$,i;const u=()=>{o&&(clearTimeout(o),o=void 0,s(),s=$)};return p=>{const m=S(e),v=Date.now()-a,_=()=>i=p();return u(),m<=0?(a=Date.now(),_()):(v>m&&(t||!l)?(a=Date.now(),_()):r&&(i=new Promise((h,O)=>{s=n?O:h,o=setTimeout(()=>{a=Date.now(),l=!0,h(_()),u()},Math.max(0,m-v))})),!t&&!o&&(o=setTimeout(()=>l=!0,m)),l=!1,i)}}function Ie(e=oe){const r=E(!0);function t(){r.value=!1}function n(){r.value=!0}const a=(...o)=>{r.value&&e(...o)};return{isActive:he(r),pause:t,resume:n,eventFilter:a}}function Te(e){return e}function R(e){return ve()?(me(e),!0):!1}function $e(e,r=200,t={}){return x(Se(r,t),e)}function je(e,r=200,t=!1,n=!0,a=!1){return x(Ee(r,t,n,a),e)}function De(e){return typeof e=="function"?A(e):E(e)}function se(e,r=!0){_e()?re(e):r?e():ne(e)}function mt(e=!1,r={}){const{truthyValue:t=!0,falsyValue:n=!1}=r,a=Oe(e),o=E(e);function l(s){if(arguments.length)return o.value=s,o.value;{const i=S(t);return o.value=o.value===i?S(n):i,o.value}}return a?l:[o,l]}var Q=Object.getOwnPropertySymbols,Ae=Object.prototype.hasOwnProperty,Ce=Object.prototype.propertyIsEnumerable,Le=(e,r)=>{var t={};for(var n in e)Ae.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&Q)for(var n of Q(e))r.indexOf(n)<0&&Ce.call(e,n)&&(t[n]=e[n]);return t};function Ne(e,r,t={}){const n=t,{eventFilter:a=oe}=n,o=Le(n,["eventFilter"]);return C(e,x(a,r),o)}var Fe=Object.defineProperty,ke=Object.defineProperties,Me=Object.getOwnPropertyDescriptors,L=Object.getOwnPropertySymbols,le=Object.prototype.hasOwnProperty,ie=Object.prototype.propertyIsEnumerable,H=(e,r,t)=>r in e?Fe(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,xe=(e,r)=>{for(var t in r||(r={}))le.call(r,t)&&H(e,t,r[t]);if(L)for(var t of L(r))ie.call(r,t)&&H(e,t,r[t]);return e},Re=(e,r)=>ke(e,Me(r)),Ve=(e,r)=>{var t={};for(var n in e)le.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&L)for(var n of L(e))r.indexOf(n)<0&&ie.call(e,n)&&(t[n]=e[n]);return t};function We(e,r,t={}){const n=t,{eventFilter:a}=n,o=Ve(n,["eventFilter"]),{eventFilter:l,pause:s,resume:i,isActive:u}=Ie(a);return{stop:Ne(e,r,Re(xe({},o),{eventFilter:l})),pause:s,resume:i,isActive:u}}function F(e){var r;const t=S(e);return(r=t==null?void 0:t.$el)!=null?r:t}const D=ae?window:void 0;function N(...e){let r,t,n,a;if(Pe(e[0])||Array.isArray(e[0])?([t,n,a]=e,r=D):[r,t,n,a]=e,!r)return $;Array.isArray(t)||(t=[t]),Array.isArray(n)||(n=[n]);const o=[],l=()=>{o.forEach(c=>c()),o.length=0},s=(c,p,m,v)=>(c.addEventListener(p,m,v),()=>c.removeEventListener(p,m,v)),i=C(()=>[F(r),S(a)],([c,p])=>{l(),c&&o.push(...t.flatMap(m=>n.map(v=>s(c,m,v,p))))},{immediate:!0,flush:"post"}),u=()=>{i(),l()};return R(u),u}function ue(e,r=!1){const t=E(),n=()=>t.value=Boolean(e());return n(),se(n,r),t}function Qe(e,r={}){const{window:t=D}=r,n=ue(()=>t&&"matchMedia"in t&&typeof t.matchMedia=="function");let a;const o=E(!1),l=()=>{a&&("removeEventListener"in a?a.removeEventListener("change",s):a.removeListener(s))},s=()=>{n.value&&(l(),a=t.matchMedia(De(e).value),o.value=a.matches,"addEventListener"in a?a.addEventListener("change",s):a.addListener(s))};return ye(s),R(()=>l()),o}const k=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},M="__vueuse_ssr_handlers__";k[M]=k[M]||{};const He=k[M];function ce(e,r){return He[e]||r}function Je(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}var Be=Object.defineProperty,J=Object.getOwnPropertySymbols,ze=Object.prototype.hasOwnProperty,Ke=Object.prototype.propertyIsEnumerable,B=(e,r,t)=>r in e?Be(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,z=(e,r)=>{for(var t in r||(r={}))ze.call(r,t)&&B(e,t,r[t]);if(J)for(var t of J(r))Ke.call(r,t)&&B(e,t,r[t]);return e};const Ue={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},K="vueuse-storage";function Xe(e,r,t,n={}){var a;const{flush:o="pre",deep:l=!0,listenToStorageChanges:s=!0,writeDefaults:i=!0,mergeDefaults:u=!1,shallow:c,window:p=D,eventFilter:m,onError:v=f=>{console.error(f)}}=n,_=(c?we:E)(r);if(!t)try{t=ce("getDefaultStorage",()=>{var f;return(f=D)==null?void 0:f.localStorage})()}catch(f){v(f)}if(!t)return _;const h=S(r),O=Je(h),I=(a=n.serializer)!=null?a:Ue[O],{pause:b,resume:T}=We(_,()=>d(_.value),{flush:o,deep:l,eventFilter:m});return p&&s&&(N(p,"storage",g),N(p,K,P)),g(),_;function d(f){try{if(f==null)t.removeItem(e);else{const y=I.write(f),j=t.getItem(e);j!==y&&(t.setItem(e,y),p&&p.dispatchEvent(new CustomEvent(K,{detail:{key:e,oldValue:j,newValue:y,storageArea:t}})))}}catch(y){v(y)}}function w(f){const y=f?f.newValue:t.getItem(e);if(y==null)return i&&h!==null&&t.setItem(e,I.write(h)),h;if(!f&&u){const j=I.read(y);return be(u)?u(j,h):O==="object"&&!Array.isArray(j)?z(z({},h),j):j}else return typeof y!="string"?y:I.read(y)}function P(f){g(f.detail)}function g(f){if(!(f&&f.storageArea!==t)){if(f&&f.key==null){_.value=h;return}if(!(f&&f.key!==e)){b();try{_.value=w(f)}catch(y){v(y)}finally{f?ne(T):T()}}}}}function fe(e){return Qe("(prefers-color-scheme: dark)",e)}var Ge=Object.defineProperty,U=Object.getOwnPropertySymbols,Ye=Object.prototype.hasOwnProperty,qe=Object.prototype.propertyIsEnumerable,X=(e,r,t)=>r in e?Ge(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,Ze=(e,r)=>{for(var t in r||(r={}))Ye.call(r,t)&&X(e,t,r[t]);if(U)for(var t of U(r))qe.call(r,t)&&X(e,t,r[t]);return e};function et(e={}){const{selector:r="html",attribute:t="class",initialValue:n="auto",window:a=D,storage:o,storageKey:l="vueuse-color-scheme",listenToStorageChanges:s=!0,storageRef:i,emitAuto:u}=e,c=Ze({auto:"",light:"light",dark:"dark"},e.modes||{}),p=fe({window:a}),m=A(()=>p.value?"dark":"light"),v=i||(l==null?E(n):Xe(l,n,o,{window:a,listenToStorageChanges:s})),_=A({get(){return v.value==="auto"&&!u?m.value:v.value},set(b){v.value=b}}),h=ce("updateHTMLAttrs",(b,T,d)=>{const w=a==null?void 0:a.document.querySelector(b);if(w)if(T==="class"){const P=d.split(/\s/g);Object.values(c).flatMap(g=>(g||"").split(/\s/g)).filter(Boolean).forEach(g=>{P.includes(g)?w.classList.add(g):w.classList.remove(g)})}else w.setAttribute(T,d)});function O(b){var T;const d=b==="auto"?m.value:b;h(r,t,(T=c[d])!=null?T:d)}function I(b){e.onChanged?e.onChanged(b,O):O(b)}return C(_,I,{flush:"post",immediate:!0}),u&&C(m,()=>I(_.value),{flush:"post"}),se(()=>I(_.value)),_}var tt=Object.defineProperty,rt=Object.defineProperties,nt=Object.getOwnPropertyDescriptors,G=Object.getOwnPropertySymbols,at=Object.prototype.hasOwnProperty,ot=Object.prototype.propertyIsEnumerable,Y=(e,r,t)=>r in e?tt(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,st=(e,r)=>{for(var t in r||(r={}))at.call(r,t)&&Y(e,t,r[t]);if(G)for(var t of G(r))ot.call(r,t)&&Y(e,t,r[t]);return e},lt=(e,r)=>rt(e,nt(r));function _t(e={}){const{valueDark:r="dark",valueLight:t="",window:n=D}=e,a=et(lt(st({},e),{onChanged:(s,i)=>{var u;e.onChanged?(u=e.onChanged)==null||u.call(e,s==="dark"):i(s)},modes:{dark:r,light:t}})),o=fe({window:n});return A({get(){return a.value==="dark"},set(s){s===o.value?a.value="auto":a.value=s?"dark":"light"}})}const q=1;function gt(e,r={}){const{throttle:t=0,idle:n=200,onStop:a=$,onScroll:o=$,offset:l={left:0,right:0,top:0,bottom:0},eventListenerOptions:s={capture:!1,passive:!0},behavior:i="auto"}=r,u=E(0),c=E(0),p=A({get(){return u.value},set(d){v(d,void 0)}}),m=A({get(){return c.value},set(d){v(void 0,d)}});function v(d,w){var P,g,f;const y=S(e);y&&((f=y instanceof Document?document.body:y)==null||f.scrollTo({top:(P=S(w))!=null?P:m.value,left:(g=S(d))!=null?g:p.value,behavior:S(i)}))}const _=E(!1),h=V({left:!0,right:!1,top:!0,bottom:!1}),O=V({left:!1,right:!1,top:!1,bottom:!1}),I=d=>{_.value&&(_.value=!1,O.left=!1,O.right=!1,O.top=!1,O.bottom=!1,a(d))},b=$e(I,t+n),T=d=>{const w=d.target===document?d.target.documentElement:d.target,P=w.scrollLeft;O.left=P<u.value,O.right=P>c.value,h.left=P<=0+(l.left||0),h.right=P+w.clientWidth>=w.scrollWidth-(l.right||0)-q,u.value=P;let g=w.scrollTop;d.target===document&&!g&&(g=document.body.scrollTop),O.top=g<c.value,O.bottom=g>c.value,h.top=g<=0+(l.top||0),h.bottom=g+w.clientHeight>=w.scrollHeight-(l.bottom||0)-q,c.value=g,_.value=!0,b(d),o(d)};return N(e,"scroll",t?je(T,t,!0,!1):T,s),N(e,"scrollend",I,s),{x:p,y:m,isScrolling:_,arrivedState:h,directions:O}}function ht(e,r,t={}){const{root:n,rootMargin:a="0px",threshold:o=.1,window:l=D}=t,s=ue(()=>l&&"IntersectionObserver"in l);let i=$;const u=s.value?C(()=>({el:F(e),root:F(n)}),({el:p,root:m})=>{if(i(),!p)return;const v=new IntersectionObserver(r,{root:m,rootMargin:a,threshold:o});v.observe(p),i=()=>{v.disconnect(),i=$}},{immediate:!0,flush:"post"}):$,c=()=>{i(),u()};return R(c),{isSupported:s,stop:c}}var Z;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(Z||(Z={}));var it=Object.defineProperty,ee=Object.getOwnPropertySymbols,ut=Object.prototype.hasOwnProperty,ct=Object.prototype.propertyIsEnumerable,te=(e,r,t)=>r in e?it(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,ft=(e,r)=>{for(var t in r||(r={}))ut.call(r,t)&&te(e,t,r[t]);if(ee)for(var t of ee(r))ct.call(r,t)&&te(e,t,r[t]);return e};const pt={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};ft({linear:Te},pt);const Ot=E({section1:!1,section2:!1,section3:!1,section4:!1});export{vt as _,_t as a,mt as b,gt as c,Ot as i,ht as u};