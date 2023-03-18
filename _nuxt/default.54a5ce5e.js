import{i as Q,_ as he,l as He}from"./index.26cbaae8.js";import{_ as _e}from"./nuxt-link.a502e6e5.js";import ce from"./Icon.46d992c5.js";import{E as ye,o as P,f as F,i as w,x as E,y as O,u as T,c as C,T as de,l as ze,G as Re,H as Ue,I as Ge,J as Ve,K as G,F as X,L as te,M as ne,r as $,N as pe,O as z,e as I,a as W,P as ge,Q as We,t as Y,R as we,p as Se,s as Pe,S as ke,U as Ke,C as xe,z as qe,A as Xe,V as Je,W as fe,X as Qe,q as Ye,k as Ze,D as et}from"./entry.0995d1fc.js";import{i as $e}from"./IntersectingSection.6a213fb8.js";import{_ as tt}from"./_plugin-vue_export-helper.c27b6911.js";import"./config.e37bd6a0.js";const Ee={__name:"TheDarkMode",setup(e){const t=ye(Q);return(l,r)=>{const o=ce;return P(),F("div",null,[w("button",{onClick:r[0]||(r[0]=n=>T(t)()),class:"transition ease-in-out delay-150 hover:scale-125 dark:hover:text-sky-500 outline-blue-400 outline-offset-2 hover:text-blue-700 duration-300"},[E(de,{mode:"out-in",name:"slide-up"},{default:O(()=>[("isDark"in l?l.isDark:T(Q))?(P(),C(o,{key:0,name:"material-symbols:nights-stay-rounded"})):(P(),C(o,{key:1,name:"material-symbols:sunny-rounded"}))]),_:1})])])}}},nt=w("option",{value:"en"},"EN",-1),ot=w("option",{value:"pt"},"PT",-1),lt=[nt,ot],Ie={__name:"TheLocalSwitch",setup(e){const{locale:t,setLocale:l,setLocaleCookie:r}=ze();return(o,n)=>(P(),F("div",null,[w("form",null,[Re(w("select",{class:"dark:bg-bgblue/80 bg-slate-100/80 border outline-blue-400 border-gray-300 text-blue-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",onChange:n[0]||(n[0]=a=>T(r)(T(t))),"onUpdate:modelValue":n[1]||(n[1]=a=>Ge(t)?t.value=a:null)},lt,544),[[Ue,T(t)]])])]))}};function A(e,t,...l){if(e in t){let o=t[e];return typeof o=="function"?o(...l):o}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(o=>`"${o}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,A),r}var q=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(q||{}),rt=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(rt||{});function K({visible:e=!0,features:t=0,ourProps:l,theirProps:r,...o}){var n;let a=Te(r,l),s=Object.assign(o,{props:a});if(e||t&2&&a.static)return ae(s);if(t&1){let b=(n=a.unmount)==null||n?0:1;return A(b,{[0](){return null},[1](){return ae({...o,props:{...a,hidden:!0,style:{display:"none"}}})}})}return ae(s)}function ae({props:e,attrs:t,slots:l,slot:r,name:o}){var n,a;let{as:s,...b}=at(e,["unmount","static"]),c=(n=l.default)==null?void 0:n.call(l,r),d={};if(r){let f=!1,m=[];for(let[v,S]of Object.entries(r))typeof S=="boolean"&&(f=!0),S===!0&&m.push(v);f&&(d["data-headlessui-state"]=m.join(" "))}if(s==="template"){if(c=Oe(c??[]),Object.keys(b).length>0||Object.keys(t).length>0){let[f,...m]=c??[];if(!st(f)||m.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${o} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(b).concat(Object.keys(t)).map(g=>g.trim()).filter((g,y,p)=>p.indexOf(g)===y).sort((g,y)=>g.localeCompare(y)).map(g=>`  - ${g}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(g=>`  - ${g}`).join(`
`)].join(`
`));let v=Te((a=f.props)!=null?a:{},b),S=Ve(f,v);for(let g in v)g.startsWith("on")&&(S.props||(S.props={}),S.props[g]=v[g]);return S}return Array.isArray(c)&&c.length===1?c[0]:c}return G(s,Object.assign({},b,d),{default:()=>c})}function Oe(e){return e.flatMap(t=>t.type===X?Oe(t.children):[t])}function Te(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},l={};for(let r of e)for(let o in r)o.startsWith("on")&&typeof r[o]=="function"?(l[o]!=null||(l[o]=[]),l[o].push(r[o])):t[o]=r[o];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(l).map(r=>[r,void 0])));for(let r in l)Object.assign(t,{[r](o,...n){let a=l[r];for(let s of a){if(o instanceof Event&&o.defaultPrevented)return;s(o,...n)}}});return t}function at(e,t=[]){let l=Object.assign({},e);for(let r of t)r in l&&delete l[r];return l}function st(e){return e==null?!1:typeof e.type=="string"||typeof e.type=="object"||typeof e.type=="function"}let ut=0;function it(){return++ut}function V(){return it()}var M=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(M||{});function i(e){var t;return e==null||e.value==null?null:(t=e.value.$el)!=null?t:e.value}var ct=Object.defineProperty,dt=(e,t,l)=>t in e?ct(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l,be=(e,t,l)=>(dt(e,typeof t!="symbol"?t+"":t,l),l);class pt{constructor(){be(this,"current",this.detect()),be(this,"currentId",0)}set(t){this.current!==t&&(this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}}let oe=new pt;function J(e){if(oe.isServer)return null;if(e instanceof Node)return e.ownerDocument;if(e!=null&&e.hasOwnProperty("value")){let t=i(e);if(t)return t.ownerDocument}return document}let ue=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var D=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(D||{}),Z=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(Z||{}),vt=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(vt||{});function le(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(ue)).sort((t,l)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(l.tabIndex||Number.MAX_SAFE_INTEGER)))}var ve=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(ve||{});function Fe(e,t=0){var l;return e===((l=J(e))==null?void 0:l.body)?!1:A(t,{[0](){return e.matches(ue)},[1](){let r=e;for(;r!==null;){if(r.matches(ue))return!0;r=r.parentElement}return!1}})}let ft=["textarea","input"].join(",");function bt(e){var t,l;return(l=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,ft))!=null?l:!1}function mt(e,t=l=>l){return e.slice().sort((l,r)=>{let o=t(l),n=t(r);if(o===null||n===null)return 0;let a=o.compareDocumentPosition(n);return a&Node.DOCUMENT_POSITION_FOLLOWING?-1:a&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function B(e,t,{sorted:l=!0,relativeTo:r=null,skipElements:o=[]}={}){var n;let a=(n=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e==null?void 0:e.ownerDocument)!=null?n:document,s=Array.isArray(e)?l?mt(e):e:le(e);o.length>0&&s.length>1&&(s=s.filter(S=>!o.includes(S))),r=r??a.activeElement;let b=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),c=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,s.indexOf(r))-1;if(t&4)return Math.max(0,s.indexOf(r))+1;if(t&8)return s.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),d=t&32?{preventScroll:!0}:{},f=0,m=s.length,v;do{if(f>=m||f+m<=0)return 0;let S=c+f;if(t&16)S=(S+m)%m;else{if(S<0)return 3;if(S>=m)return 1}v=s[S],v==null||v.focus(d),f+=b}while(v!==a.activeElement);return t&6&&bt(v)&&v.select(),v.hasAttribute("tabindex")||v.setAttribute("tabindex","0"),2}let Ne=Symbol("Context");var H=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(H||{});function De(){return te(Ne,null)}function ht(e){ne(Ne,e)}function me(e,t){if(e)return e;let l=t??"button";if(typeof l=="string"&&l.toLowerCase()==="button")return"button"}function _t(e,t){let l=$(me(e.value.type,e.value.as));return pe(()=>{l.value=me(e.value.type,e.value.as)}),z(()=>{var r;l.value||i(t)&&i(t)instanceof HTMLButtonElement&&!((r=i(t))!=null&&r.hasAttribute("type"))&&(l.value="button")}),l}function se(e,t,l){oe.isServer||z(r=>{document.addEventListener(e,t,l),r(()=>document.removeEventListener(e,t,l))})}function yt(e,t,l=I(()=>!0)){function r(n,a){if(!l.value||n.defaultPrevented)return;let s=a(n);if(s===null||!s.getRootNode().contains(s))return;let b=function c(d){return typeof d=="function"?c(d()):Array.isArray(d)||d instanceof Set?d:[d]}(e);for(let c of b){if(c===null)continue;let d=c instanceof HTMLElement?c:i(c);if(d!=null&&d.contains(s)||n.composed&&n.composedPath().includes(d))return}return!Fe(s,ve.Loose)&&s.tabIndex!==-1&&n.preventDefault(),t(n,s)}let o=$(null);se("mousedown",n=>{var a,s;l.value&&(o.value=((s=(a=n.composedPath)==null?void 0:a.call(n))==null?void 0:s[0])||n.target)},!0),se("click",n=>{o.value&&(r(n,()=>o.value),o.value=null)},!0),se("blur",n=>r(n,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function gt(e,t,l,r){oe.isServer||z(o=>{e=e??window,e.addEventListener(t,l,r),o(()=>e.removeEventListener(t,l,r))})}var ee=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(ee||{});let ie=W({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup(e,{slots:t,attrs:l}){return()=>{let{features:r,...o}=e,n={"aria-hidden":(r&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(r&4)===4&&(r&2)!==2&&{display:"none"}}};return K({ourProps:n,theirProps:o,slot:{},attrs:l,slots:t,name:"Hidden"})}}});function wt(e,t,l){oe.isServer||z(r=>{window.addEventListener(e,t,l),r(()=>window.removeEventListener(e,t,l))})}var L=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(L||{});function Le(){let e=$(0);return wt("keydown",t=>{t.key==="Tab"&&(e.value=t.shiftKey?1:0)}),e}var St=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(St||{});let Ce=Symbol("PopoverContext");function re(e){let t=te(Ce,null);if(t===null){let l=new Error(`<${e} /> is missing a parent <${Be.name} /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(l,re),l}return t}let Ae=Symbol("PopoverGroupContext");function je(){return te(Ae,null)}let Me=Symbol("PopoverPanelContext");function Pt(){return te(Me,null)}let Be=W({name:"Popover",props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:t,attrs:l,expose:r}){var o;let n=$(null);r({el:n,$el:n});let a=$(1),s=$(null),b=$(null),c=$(null),d=$(null),f=I(()=>J(n)),m=I(()=>{var u,_;if(!i(s)||!i(d))return!1;for(let U of document.querySelectorAll("body > *"))if(Number(U==null?void 0:U.contains(i(s)))^Number(U==null?void 0:U.contains(i(d))))return!0;let h=le(),k=h.indexOf(i(s)),x=(k+h.length-1)%h.length,j=(k+1)%h.length,N=h[x],R=h[j];return!((u=i(d))!=null&&u.contains(N))&&!((_=i(d))!=null&&_.contains(R))}),v={popoverState:a,buttonId:$(null),panelId:$(null),panel:d,button:s,isPortalled:m,beforePanelSentinel:b,afterPanelSentinel:c,togglePopover(){a.value=A(a.value,{[0]:1,[1]:0})},closePopover(){a.value!==1&&(a.value=1)},close(u){v.closePopover();let _=(()=>u?u instanceof HTMLElement?u:u.value instanceof HTMLElement?i(u):i(v.button):i(v.button))();_==null||_.focus()}};ne(Ce,v),ht(I(()=>A(a.value,{[0]:H.Open,[1]:H.Closed})));let S={buttonId:v.buttonId,panelId:v.panelId,close(){v.closePopover()}},g=je(),y=g==null?void 0:g.registerPopover;function p(){var u,_,h,k;return(k=g==null?void 0:g.isFocusWithinPopoverGroup())!=null?k:((u=f.value)==null?void 0:u.activeElement)&&(((_=i(s))==null?void 0:_.contains(f.value.activeElement))||((h=i(d))==null?void 0:h.contains(f.value.activeElement)))}return z(()=>y==null?void 0:y(S)),gt((o=f.value)==null?void 0:o.defaultView,"focus",u=>{var _,h;a.value===0&&(p()||s&&d&&u.target!==window&&((_=i(v.beforePanelSentinel))!=null&&_.contains(u.target)||(h=i(v.afterPanelSentinel))!=null&&h.contains(u.target)||v.closePopover()))},!0),yt([s,d],(u,_)=>{var h;v.closePopover(),Fe(_,ve.Loose)||(u.preventDefault(),(h=i(s))==null||h.focus())},I(()=>a.value===0)),()=>{let u={open:a.value===0,close:v.close};return K({theirProps:e,ourProps:{ref:n},slot:u,slots:t,attrs:l,name:"Popover"})}}}),kt=W({name:"PopoverButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:()=>`headlessui-popover-button-${V()}`}},inheritAttrs:!1,setup(e,{attrs:t,slots:l,expose:r}){let o=re("PopoverButton"),n=I(()=>J(o.button));r({el:o.button,$el:o.button}),pe(()=>{o.buttonId.value=e.id}),ge(()=>{o.buttonId.value=null});let a=je(),s=a==null?void 0:a.closeOthers,b=Pt(),c=I(()=>b===null?!1:b.value===o.panelId.value),d=$(null),f=`headlessui-focus-sentinel-${V()}`;c.value||z(()=>{o.button.value=d.value});let m=_t(I(()=>({as:e.as,type:t.type})),d);function v(p){var u,_,h,k,x;if(c.value){if(o.popoverState.value===1)return;switch(p.key){case M.Space:case M.Enter:p.preventDefault(),(_=(u=p.target).click)==null||_.call(u),o.closePopover(),(h=i(o.button))==null||h.focus();break}}else switch(p.key){case M.Space:case M.Enter:p.preventDefault(),p.stopPropagation(),o.popoverState.value===1&&(s==null||s(o.buttonId.value)),o.togglePopover();break;case M.Escape:if(o.popoverState.value!==0)return s==null?void 0:s(o.buttonId.value);if(!i(o.button)||(k=n.value)!=null&&k.activeElement&&!((x=i(o.button))!=null&&x.contains(n.value.activeElement)))return;p.preventDefault(),p.stopPropagation(),o.closePopover();break}}function S(p){c.value||p.key===M.Space&&p.preventDefault()}function g(p){var u,_;e.disabled||(c.value?(o.closePopover(),(u=i(o.button))==null||u.focus()):(p.preventDefault(),p.stopPropagation(),o.popoverState.value===1&&(s==null||s(o.buttonId.value)),o.togglePopover(),(_=i(o.button))==null||_.focus()))}function y(p){p.preventDefault(),p.stopPropagation()}return()=>{let p=o.popoverState.value===0,u={open:p},{id:_,...h}=e,k=c.value?{ref:d,type:m.value,onKeydown:v,onClick:g}:{ref:d,id:_,type:m.value,"aria-expanded":e.disabled?void 0:o.popoverState.value===0,"aria-controls":i(o.panel)?o.panelId.value:void 0,disabled:e.disabled?!0:void 0,onKeydown:v,onKeyup:S,onClick:g,onMousedown:y},x=Le();function j(){let N=i(o.panel);if(!N)return;function R(){A(x.value,{[L.Forwards]:()=>B(N,D.First),[L.Backwards]:()=>B(N,D.Last)})===Z.Error&&B(le().filter(U=>U.dataset.headlessuiFocusGuard!=="true"),A(x.value,{[L.Forwards]:D.Next,[L.Backwards]:D.Previous}),{relativeTo:i(o.button)})}R()}return G(X,[K({ourProps:k,theirProps:{...t,...h},slot:u,attrs:t,slots:l,name:"PopoverButton"}),p&&!c.value&&o.isPortalled.value&&G(ie,{id:f,features:ee.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:j})])}}});W({name:"PopoverOverlay",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0}},setup(e,{attrs:t,slots:l}){let r=re("PopoverOverlay"),o=`headlessui-popover-overlay-${V()}`,n=De(),a=I(()=>n!==null?(n.value&H.Open)===H.Open:r.popoverState.value===0);function s(){r.closePopover()}return()=>{let b={open:r.popoverState.value===0};return K({ourProps:{id:o,"aria-hidden":!0,onClick:s},theirProps:e,slot:b,attrs:t,slots:l,features:q.RenderStrategy|q.Static,visible:a.value,name:"PopoverOverlay"})}}});let xt=W({name:"PopoverPanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},focus:{type:Boolean,default:!1},id:{type:String,default:()=>`headlessui-popover-panel-${V()}`}},inheritAttrs:!1,setup(e,{attrs:t,slots:l,expose:r}){let{focus:o}=e,n=re("PopoverPanel"),a=I(()=>J(n.panel)),s=`headlessui-focus-sentinel-before-${V()}`,b=`headlessui-focus-sentinel-after-${V()}`;r({el:n.panel,$el:n.panel}),pe(()=>{n.panelId.value=e.id}),ge(()=>{n.panelId.value=null}),ne(Me,n.panelId),z(()=>{var y,p;if(!o||n.popoverState.value!==0||!n.panel)return;let u=(y=a.value)==null?void 0:y.activeElement;(p=i(n.panel))!=null&&p.contains(u)||B(i(n.panel),D.First)});let c=De(),d=I(()=>c!==null?(c.value&H.Open)===H.Open:n.popoverState.value===0);function f(y){var p,u;switch(y.key){case M.Escape:if(n.popoverState.value!==0||!i(n.panel)||a.value&&!((p=i(n.panel))!=null&&p.contains(a.value.activeElement)))return;y.preventDefault(),y.stopPropagation(),n.closePopover(),(u=i(n.button))==null||u.focus();break}}function m(y){var p,u,_,h,k;let x=y.relatedTarget;x&&i(n.panel)&&((p=i(n.panel))!=null&&p.contains(x)||(n.closePopover(),((_=(u=i(n.beforePanelSentinel))==null?void 0:u.contains)!=null&&_.call(u,x)||(k=(h=i(n.afterPanelSentinel))==null?void 0:h.contains)!=null&&k.call(h,x))&&x.focus({preventScroll:!0})))}let v=Le();function S(){let y=i(n.panel);if(!y)return;function p(){A(v.value,{[L.Forwards]:()=>{var u;B(y,D.First)===Z.Error&&((u=i(n.afterPanelSentinel))==null||u.focus())},[L.Backwards]:()=>{var u;(u=i(n.button))==null||u.focus({preventScroll:!0})}})}p()}function g(){let y=i(n.panel);if(!y)return;function p(){A(v.value,{[L.Forwards]:()=>{let u=i(n.button),_=i(n.panel);if(!u)return;let h=le(),k=h.indexOf(u),x=h.slice(0,k+1),j=[...h.slice(k+1),...x];for(let N of j.slice())if(N.dataset.headlessuiFocusGuard==="true"||_!=null&&_.contains(N)){let R=j.indexOf(N);R!==-1&&j.splice(R,1)}B(j,D.First,{sorted:!1})},[L.Backwards]:()=>{var u;B(y,D.Previous)===Z.Error&&((u=i(n.button))==null||u.focus())}})}p()}return()=>{let y={open:n.popoverState.value===0,close:n.close},{id:p,focus:u,..._}=e,h={ref:n.panel,id:p,onKeydown:f,onFocusout:o&&n.popoverState.value===0?m:void 0,tabIndex:-1};return K({ourProps:h,theirProps:{...t,..._},attrs:t,slot:y,slots:{...l,default:(...k)=>{var x;return[G(X,[d.value&&n.isPortalled.value&&G(ie,{id:s,ref:n.beforePanelSentinel,features:ee.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:S}),(x=l.default)==null?void 0:x.call(l,...k),d.value&&n.isPortalled.value&&G(ie,{id:b,ref:n.afterPanelSentinel,features:ee.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:g})])]}},features:q.RenderStrategy|q.Static,visible:d.value,name:"PopoverPanel"})}}});W({name:"PopoverGroup",props:{as:{type:[Object,String],default:"div"}},setup(e,{attrs:t,slots:l,expose:r}){let o=$(null),n=We([]),a=I(()=>J(o));r({el:o,$el:o});function s(f){let m=n.value.indexOf(f);m!==-1&&n.value.splice(m,1)}function b(f){return n.value.push(f),()=>{s(f)}}function c(){var f;let m=a.value;if(!m)return!1;let v=m.activeElement;return(f=i(o))!=null&&f.contains(v)?!0:n.value.some(S=>{var g,y;return((g=m.getElementById(S.buttonId.value))==null?void 0:g.contains(v))||((y=m.getElementById(S.panelId.value))==null?void 0:y.contains(v))})}function d(f){for(let m of n.value)m.buttonId.value!==f&&m.close()}return ne(Ae,{registerPopover:b,unregisterPopover:s,isFocusWithinPopoverGroup:c,closeOthers:d}),()=>K({ourProps:{ref:o},theirProps:e,slot:{},attrs:t,slots:l,name:"PopoverGroup"})}});const $t={class:"relative grid gap-8 text-blue-800 bg-slate-100 shadow-blue-800/30 dark:bg-bgblue shadow-sm dark:shadow-bgbluelighter dark:text-white p-7 rounded lg:grid-cols-2"},Et={class:"inline-flex"},It={class:"inline-flex"},Ot={class:"pl-2"},Tt={__name:"TheHamburgerMenu",setup(e){const t=ye(Q);return(l,r)=>{const o=ce,n=kt,a=Ee,s=Ie,b=xt,c=Be;return P(),C(c,{class:"relative"},{default:O(({open:d})=>[E(n,{class:"outline-blue-400 outline-offset-2"},{default:O(()=>[d?(P(),C(o,{key:0,name:"ic:baseline-close"})):(P(),C(o,{key:1,name:"ic:sharp-menu"}))]),_:2},1024),E(de,{"enter-active-class":"transition duration-200 ease-out","enter-from-class":"translate-y-1 opacity-0","enter-to-class":"translate-y-0 opacity-100","leave-active-class":"transition duration-150 ease-in","leave-from-class":"translate-y-0 opacity-100","leave-to-class":"translate-y-1 opacity-0"},{default:O(()=>[E(b,{class:"absolute inset-x-7 top-7 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl"},{default:O(()=>[w("div",$t,[w("div",Et,[E(a,{ref:"darkMode"},null,512),w("p",{class:"pl-2",onClick:r[0]||(r[0]=f=>T(t)())},Y(l.$t("appearance")),1)]),w("div",It,[E(s),w("p",Ot,Y(l.$t("language")),1)])])]),_:1})]),_:1})]),_:1})}}},Ft={class:"dark:shadow md:bg-inherit dark:bg-bgblue/80 z-20 bg-slate-100/80 fixed top-0 left-0 right-0 md:relative dark:text-white text-blue-800"},Nt={class:"h-8 py-3 mb-2 mx-auto px-2 flex items-center justify-end"},Dt={class:"flex items-center gap-1 md:gap-5"},Lt={class:"hidden md:inline"},Ct={class:"hidden md:inline"},At={class:"pl-2 md:hidden"},jt={__name:"TheNavbar",setup(e){const t=["section 1","sections 2","section 3","section 4"];return we(),(l,r)=>{const o=_e,n=Ee,a=he,s=Ie,b=Tt;return P(),F("nav",Ft,[w("div",Nt,[w("ul",Dt,[(P(),F(X,null,Se(t,(c,d)=>w("li",{key:c},[E(o,{to:"/#"+d,class:ke(["block pl-2 m-1 dark:text-white outline-blue-400 dark:outline-red-500 outline-offset-2 text-sm md:text-base text-blue-800 no-underline transition ease-in-out delay-150 hover:scale-110 dark:hover:text-sky-500 hover:text-blue-700 duration-300",{"border-blue-500 border-b-2 rounded-l-xl  border-solid":("isIntersectingSection"in l?l.isIntersectingSection:T($e))["section"+(d+1)]}])},{default:O(()=>[Pe(Y(c),1)]),_:2},1032,["to","class"])])),64)),w("li",Lt,[E(a,null,{default:O(()=>[E(n)]),_:1})]),w("li",Ct,[E(s)]),w("li",At,[E(b)])])])])}}};const Mt=e=>(qe("data-v-857b282f"),e=e(),Xe(),e),Bt={class:"grid grid-cols-6 gap-2 pt-8"},Ht={key:0,class:"invisible md:visible w-full"},zt=Mt(()=>w("div",{class:"sticky top-3 left-0 z-0 opacity-50"},[w("div",{class:"z-0 absolute border-t-[75px] opacity-60 border-t-transparent border-l-[155px] dark:border-l-blue-900 border-l-blue-300 border-b-[100px] border-b-transparent"}),w("div",{class:"z-0 mt-5 absolute border-t-[75px] opacity-80 border-t-transparent border-l-[155px] dark:border-l-blue-900 border-l-blue-300 border-b-[100px] border-b-transparent"}),w("div",{class:"z-0 mt-10 absolute border-t-[75px] opacity-60 border-t-transparent border-l-[155px] dark:border-l-blue-900 border-l-blue-300 border-b-[100px] border-b-transparent"})],-1)),Rt={class:"sticky bg-opacity-70 rounded-l-lg top-5 left-0 pr-2 py-6"},Ut={class:"z-40"},Gt={key:1,class:"w-1/12 md:w-1/6"},Vt={class:"col-start-1 col-end-7 md:col-start-2 md:col-end-6"},Wt={__name:"TheSidebar",props:{isSidebarVisible:Boolean},setup(e){const t=["section 1","sections 2","section 3","section 4"];return we(),Ke(),(l,r)=>{const o=_e;return P(),F("main",Bt,[E(de,{mode:"out-in",duration:400,name:"fade"},{default:O(()=>[e.isSidebarVisible?(P(),F("aside",Ht,[zt,w("div",Rt,[w("div",Ut,[(P(),F(X,null,Se(t,(n,a)=>E(o,{key:n,to:"/#"+a,class:ke(["block z-30 pl-2 m-1 w-fit dark:text-white text-blue-800 no-underline transition ease-in-out delay-150 hover:scale-110 dark:hover:text-blue-500 hover:text-blue-700 duration-300",{"border-blue-500 border-b-2 rounded-l-xl  border-solid":("isIntersectingSection"in l?l.isIntersectingSection:T($e))["section"+(a+1)]}])},{default:O(()=>[Pe(Y(n),1)]),_:2},1032,["to","class"])),64))])])])):(P(),F("div",Gt))]),_:1}),w("div",Vt,[xe(l.$slots,"default",{},void 0,!0)])])}}},Kt=tt(Wt,[["__scopeId","data-v-857b282f"]]),qt={__name:"TheScrollTop",setup(e){const{x:t,y:l,isScrolling:r,arrivedState:o,directions:n}=Je(window,"smooth");fe(o),fe(n);const a=I(()=>parseInt(l.value*100/(document.documentElement.scrollHeight-window.innerHeight))),s=$(!1),b=()=>{s.value=!0,setTimeout(()=>window.scrollTo({top:0,behavior:"smooth"}),400)};return Qe(a,(c,d)=>{c===0&&(s.value=!1)}),(c,d)=>{const f=ce;return T(a)>=25?(P(),F("div",{key:0,class:"bottom-5 md:right-8 right-3 z-40 fixed text-blue-800 dark:text-white",onClick:b},[T(s)?(P(),C(f,{key:0,size:"30px",name:"line-md:chevron-small-triple-up"})):(P(),C(f,{key:1,size:"30px",name:"ic:baseline-keyboard-arrow-up"}))])):Ye("",!0)}}},Xt={class:"relative -z-10 bg-bgblue"},Jt={ref:"defRoot"},ln={__name:"default",setup(e){const t=$(null),l=$(!1);Ze(t,([{isIntersecting:a}],s)=>{l.value=a}),$(null);const r=async a=>{await He(a)};$(null);const o={background:{color:{value:"#041731"}},fullScreen:{enable:!0,zIndex:-1},fpsLimit:60,interactivity:{detectsOn:"window",events:{onClick:{enable:!0,mode:"push"},onHover:{enable:!0,mode:"grab"},resize:!0},modes:{bubble:{distance:400,duration:2,opacity:.8,size:40},push:{quantity:4,duration:.2},repulse:{distance:200,duration:.4}}},particles:{color:{value:"#ffffff"},links:{color:"#ffffff",distance:150,enable:!0,opacity:.5,width:1},collisions:{enable:!0},move:{direction:"none",enable:!0,outMode:"out",random:!1,speed:2,straight:!1},number:{density:{enable:!0,value_area:1e3},value:100},opacity:{value:.5},shape:{type:"circle"},size:{random:!0,value:3}},detectRetina:!0},n={background:{color:{value:"#f1f5f9"}},fullScreen:{enable:!0,zIndex:-1},fpsLimit:60,interactivity:{detectsOn:"window",events:{onClick:{enable:!0,mode:"push"},onHover:{enable:!0,mode:"grab"},resize:!0},modes:{bubble:{distance:400,duration:2,opacity:.8,size:40},push:{quantity:4,duration:.2},repulse:{distance:200,duration:.4}}},particles:{color:{value:"#1e40af"},links:{color:"#1e40af",distance:150,enable:!0,opacity:.5,width:1},collisions:{enable:!0},move:{direction:"none",enable:!0,outMode:"out",random:!1,speed:2,straight:!1},number:{density:{enable:!0,value_area:1e3},value:100},opacity:{value:.5},shape:{type:"circle"},size:{random:!0,value:3}},detectRetina:!0};return(a,s)=>{const b=et("Particles"),c=he,d=jt,f=Kt,m=qt;return P(),F("div",null,[w("div",Xt,[E(c,null,{default:O(()=>[("isDark"in a?a.isDark:T(Q))?(P(),C(b,{key:0,options:o,particlesInit:r,id:"tsparticles"})):(P(),C(b,{key:1,options:n,particlesInit:r,id:"tsparticles"}))]),_:1})]),w("div",Jt,[E(d,{ref_key:"nav",ref:t},null,512),E(f,{"is-sidebar-visible":!T(l)},{default:O(()=>[xe(a.$slots,"default")]),_:3},8,["is-sidebar-visible"]),E(c,null,{default:O(()=>[E(m)]),_:1})],512)])}}};export{ln as default};
