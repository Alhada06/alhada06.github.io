import We from"./Icon.33f81a41.js";import{m as ne,n as ze,f as de,a as ce,H as D,h as R,o as k,E as Te,u as te,e as W,O as J,g as C,T as Ge,t as M,p as Ye,l as z,y as Je,b as Ke,N as ye}from"./use-tab-direction.44bc3a78.js";import{a as F,r as v,e as p,K as T,M as x,N as E,O as fe,L as ae,Z as ie,P as q,R as j,ac as Ze,a3 as Xe,u as K,Q as et,ad as tt,G as xe,o as Z,c as nt,z as G,i as O,j as _,k as be,t as ke,s as at,y as it,f as se,U as lt}from"./entry.32115c96.js";import"./config.fa4aefa6.js";import"./_plugin-vue_export-helper.c27b6911.js";function $e(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(n=>setTimeout(()=>{throw n}))}function Ce(e){if(!e)return new Set;if(typeof e=="function")return new Set(e());let n=new Set;for(let t of e.value){let a=k(t);a instanceof HTMLElement&&n.add(a)}return n}var Oe=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(Oe||{});let H=Object.assign(F({name:"FocusTrap",props:{as:{type:[Object,String],default:"div"},initialFocus:{type:Object,default:null},features:{type:Number,default:30},containers:{type:[Object,Function],default:v(new Set)}},inheritAttrs:!1,setup(e,{attrs:n,slots:t,expose:a}){let i=v(null);a({el:i,$el:i});let l=p(()=>ne(i)),o=v(!1);T(()=>o.value=!0),x(()=>o.value=!1),rt({ownerDocument:l},p(()=>o.value&&!!(e.features&16)));let r=st({ownerDocument:l,container:i,initialFocus:p(()=>e.initialFocus)},p(()=>o.value&&!!(e.features&2)));ut({ownerDocument:l,container:i,containers:e.containers,previousActiveElement:r},p(()=>o.value&&!!(e.features&8)));let s=ze();function u(f){let g=k(i);g&&(b=>b())(()=>{te(s.value,{[W.Forwards]:()=>{J(g,C.First,{skipElements:[f.relatedTarget]})},[W.Backwards]:()=>{J(g,C.Last,{skipElements:[f.relatedTarget]})}})})}let d=v(!1);function y(f){f.key==="Tab"&&(d.value=!0,requestAnimationFrame(()=>{d.value=!1}))}function h(f){if(!o.value)return;let g=Ce(e.containers);k(i)instanceof HTMLElement&&g.add(k(i));let b=f.relatedTarget;b instanceof HTMLElement&&b.dataset.headlessuiFocusGuard!=="true"&&(_e(g,b)||(d.value?J(k(i),te(s.value,{[W.Forwards]:()=>C.Next,[W.Backwards]:()=>C.Previous})|C.WrapAround,{relativeTo:f.target}):f.target instanceof HTMLElement&&R(f.target)))}return()=>{let f={},g={ref:i,onKeydown:y,onFocusout:h},{features:b,initialFocus:V,containers:we,...Q}=e;return E(fe,[!!(b&4)&&E(de,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:u,features:ce.Focusable}),D({ourProps:g,theirProps:{...n,...Q},slot:f,attrs:n,slots:t,name:"FocusTrap"}),!!(b&4)&&E(de,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:u,features:ce.Focusable})])}}}),{features:Oe}),P=[];if(typeof window<"u"&&typeof document<"u"){let e=function(n){n.target instanceof HTMLElement&&n.target!==document.body&&P[0]!==n.target&&(P.unshift(n.target),P=P.filter(t=>t!=null&&t.isConnected),P.splice(10))};window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})}function ot(e){let n=v(P.slice());return ie([e],([t],[a])=>{a===!0&&t===!1?$e(()=>{n.value.splice(0)}):a===!1&&t===!0&&(n.value=P.slice())},{flush:"post"}),()=>{var t;return(t=n.value.find(a=>a!=null&&a.isConnected))!=null?t:null}}function rt({ownerDocument:e},n){let t=ot(n);T(()=>{ae(()=>{var a,i;n.value||((a=e.value)==null?void 0:a.activeElement)===((i=e.value)==null?void 0:i.body)&&R(t())},{flush:"post"})}),x(()=>{R(t())})}function st({ownerDocument:e,container:n,initialFocus:t},a){let i=v(null),l=v(!1);return T(()=>l.value=!0),x(()=>l.value=!1),T(()=>{ie([n,t,a],(o,r)=>{if(o.every((u,d)=>(r==null?void 0:r[d])===u)||!a.value)return;let s=k(n);s&&$e(()=>{var u,d;if(!l.value)return;let y=k(t),h=(u=e.value)==null?void 0:u.activeElement;if(y){if(y===h){i.value=h;return}}else if(s.contains(h)){i.value=h;return}y?R(y):J(s,C.First|C.NoScroll)===Ge.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),i.value=(d=e.value)==null?void 0:d.activeElement})},{immediate:!0,flush:"post"})}),i}function ut({ownerDocument:e,container:n,containers:t,previousActiveElement:a},i){var l;Te((l=e.value)==null?void 0:l.defaultView,"focus",o=>{if(!i.value)return;let r=Ce(t);k(n)instanceof HTMLElement&&r.add(k(n));let s=a.value;if(!s)return;let u=o.target;u&&u instanceof HTMLElement?_e(r,u)?(a.value=u,R(u)):(o.preventDefault(),o.stopPropagation(),R(s)):R(a.value)},!0)}function _e(e,n){for(let t of e)if(t.contains(n))return!0;return!1}let ue=new Map,B=new Map;function Se(e,n=v(!0)){ae(t=>{var a;if(!n.value)return;let i=k(e);if(!i)return;t(function(){var o;if(!i)return;let r=(o=B.get(i))!=null?o:1;if(r===1?B.delete(i):B.set(i,r-1),r!==1)return;let s=ue.get(i);s&&(s["aria-hidden"]===null?i.removeAttribute("aria-hidden"):i.setAttribute("aria-hidden",s["aria-hidden"]),i.inert=s.inert,ue.delete(i))});let l=(a=B.get(i))!=null?a:0;B.set(i,l+1),l===0&&(ue.set(i,{"aria-hidden":i.getAttribute("aria-hidden"),inert:i.inert}),i.setAttribute("aria-hidden","true"),i.inert=!0)})}let Pe=Symbol("ForcePortalRootContext");function dt(){return j(Pe,!1)}let pe=F({name:"ForcePortalRoot",props:{as:{type:[Object,String],default:"template"},force:{type:Boolean,default:!1}},setup(e,{slots:n,attrs:t}){return q(Pe,e.force),()=>{let{force:a,...i}=e;return D({theirProps:i,ourProps:{},slot:{},slots:n,attrs:t,name:"ForcePortalRoot"})}}});function ct(e){let n=ne(e);if(!n){if(e===null)return null;throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`)}let t=n.getElementById("headlessui-portal-root");if(t)return t;let a=n.createElement("div");return a.setAttribute("id","headlessui-portal-root"),n.body.appendChild(a)}let Le=F({name:"Portal",props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:n,attrs:t}){let a=v(null),i=p(()=>ne(a)),l=dt(),o=j(Re,null),r=v(l===!0||o==null?ct(a.value):o.resolveTarget());return ae(()=>{l||o!=null&&(r.value=o.resolveTarget())}),x(()=>{var s,u;let d=(s=i.value)==null?void 0:s.getElementById("headlessui-portal-root");d&&r.value===d&&r.value.children.length<=0&&((u=r.value.parentElement)==null||u.removeChild(r.value))}),()=>{if(r.value===null)return null;let s={ref:a,"data-headlessui-portal":""};return E(Ze,{to:r.value},D({ourProps:s,theirProps:e,slot:{},attrs:t,slots:n,name:"Portal"}))}}}),Re=Symbol("PortalGroupContext"),ft=F({name:"PortalGroup",props:{as:{type:[Object,String],default:"template"},target:{type:Object,default:null}},setup(e,{attrs:n,slots:t}){let a=Xe({resolveTarget(){return e.target}});return q(Re,a),()=>{let{target:i,...l}=e;return D({theirProps:l,ourProps:{},slot:{},attrs:n,slots:t,name:"PortalGroup"})}}}),Ne=Symbol("StackContext");var ve=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(ve||{});function pt(){return j(Ne,()=>{})}function vt({type:e,enabled:n,element:t,onUpdate:a}){let i=pt();function l(...o){a==null||a(...o),i(...o)}T(()=>{ie(n,(o,r)=>{o?l(0,e,t):r===!0&&l(1,e,t)},{immediate:!0,flush:"sync"})}),x(()=>{n.value&&l(1,e,t)}),q(Ne,l)}let Ae=Symbol("DescriptionContext");function mt(){let e=j(Ae,null);if(e===null)throw new Error("Missing parent");return e}function gt({slot:e=v({}),name:n="Description",props:t={}}={}){let a=v([]);function i(l){return a.value.push(l),()=>{let o=a.value.indexOf(l);o!==-1&&a.value.splice(o,1)}}return q(Ae,{register:i,slot:e,name:n,props:t}),p(()=>a.value.length>0?a.value.join(" "):void 0)}let ht=F({name:"Description",props:{as:{type:[Object,String],default:"p"},id:{type:String,default:()=>`headlessui-description-${M()}`}},setup(e,{attrs:n,slots:t}){let a=mt();return T(()=>x(a.register(e.id))),()=>{let{name:i="Description",slot:l=v({}),props:o={}}=a,{id:r,...s}=e,u={...Object.entries(o).reduce((d,[y,h])=>Object.assign(d,{[y]:K(h)}),{}),id:r};return D({ourProps:u,theirProps:s,slot:l.value,attrs:n,slots:t,name:i})}}});function wt(e){let n=et(e.getSnapshot());return x(e.subscribe(()=>{n.value=e.getSnapshot()})),n}function Me(){let e=[],n={addEventListener(t,a,i,l){return t.addEventListener(a,i,l),n.add(()=>t.removeEventListener(a,i,l))},requestAnimationFrame(...t){let a=requestAnimationFrame(...t);n.add(()=>cancelAnimationFrame(a))},nextFrame(...t){n.requestAnimationFrame(()=>{n.requestAnimationFrame(...t)})},setTimeout(...t){let a=setTimeout(...t);n.add(()=>clearTimeout(a))},style(t,a,i){let l=t.style.getPropertyValue(a);return Object.assign(t.style,{[a]:i}),this.add(()=>{Object.assign(t.style,{[a]:l})})},group(t){let a=Me();return t(a),this.add(()=>a.dispose())},add(t){return e.push(t),()=>{let a=e.indexOf(t);if(a>=0)for(let i of e.splice(a,1))i()}},dispose(){for(let t of e.splice(0))t()}};return n}function yt(e,n){let t=e(),a=new Set;return{getSnapshot(){return t},subscribe(i){return a.add(i),()=>a.delete(i)},dispatch(i,...l){let o=n[i].call(t,...l);o&&(t=o,a.forEach(r=>r()))}}}function bt(){let e;return{before({doc:n}){var t;let a=n.documentElement;e=((t=n.defaultView)!=null?t:window).innerWidth-a.clientWidth},after({doc:n,d:t}){let a=n.documentElement,i=a.clientWidth-a.offsetWidth,l=e-i;t.style(a,"paddingRight",`${l}px`)}}}function kt(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function St(){if(!kt())return{};let e;return{before(){e=window.pageYOffset},after({doc:n,d:t,meta:a}){function i(o){return a.containers.flatMap(r=>r()).some(r=>r.contains(o))}t.style(n.body,"marginTop",`-${e}px`),window.scrollTo(0,0);let l=null;t.addEventListener(n,"click",o=>{if(o.target instanceof HTMLElement)try{let r=o.target.closest("a");if(!r)return;let{hash:s}=new URL(r.href),u=n.querySelector(s);u&&!i(u)&&(l=u)}catch{}},!0),t.addEventListener(n,"touchmove",o=>{o.target instanceof HTMLElement&&!i(o.target)&&o.preventDefault()},{passive:!1}),t.add(()=>{window.scrollTo(0,window.pageYOffset+e),l&&l.isConnected&&(l.scrollIntoView({block:"nearest"}),l=null)})}}}function Et(){return{before({doc:e,d:n}){n.style(e.documentElement,"overflow","hidden")}}}function Dt(e){let n={};for(let t of e)Object.assign(n,t(n));return n}let L=yt(()=>new Map,{PUSH(e,n){var t;let a=(t=this.get(e))!=null?t:{doc:e,count:0,d:Me(),meta:new Set};return a.count++,a.meta.add(n),this.set(e,a),this},POP(e,n){let t=this.get(e);return t&&(t.count--,t.meta.delete(n)),this},SCROLL_PREVENT({doc:e,d:n,meta:t}){let a={doc:e,d:n,meta:Dt(t)},i=[St(),bt(),Et()];i.forEach(({before:l})=>l==null?void 0:l(a)),i.forEach(({after:l})=>l==null?void 0:l(a))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});L.subscribe(()=>{let e=L.getSnapshot(),n=new Map;for(let[t]of e)n.set(t,t.documentElement.style.overflow);for(let t of e.values()){let a=n.get(t.doc)==="hidden",i=t.count!==0;(i&&!a||!i&&a)&&L.dispatch(t.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",t),t.count===0&&L.dispatch("TEARDOWN",t)}});function Ft(e,n,t){let a=wt(L),i=p(()=>{let l=e.value?a.value.get(e.value):void 0;return l?l.count>0:!1});return ie([e,n],([l,o],[r],s)=>{if(!l||!o)return;L.dispatch("PUSH",l,t);let u=!1;s(()=>{u||(L.dispatch("POP",r??l,t),u=!0)})},{immediate:!0}),i}var Tt=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Tt||{});let me=Symbol("DialogContext");function I(e){let n=j(me,null);if(n===null){let t=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,I),t}return n}let Y="DC8F892D-2EBD-447C-A4C8-A03058436FF4",xt=F({name:"Dialog",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},open:{type:[Boolean,String],default:Y},initialFocus:{type:Object,default:null},id:{type:String,default:()=>`headlessui-dialog-${M()}`}},emits:{close:e=>!0},setup(e,{emit:n,attrs:t,slots:a,expose:i}){var l;let o=v(!1);T(()=>{o.value=!0});let r=v(0),s=Ye(),u=p(()=>e.open===Y&&s!==null?(s.value&z.Open)===z.Open:e.open),d=v(null),y=v(null),h=p(()=>ne(d));if(i({el:d,$el:d}),!(e.open!==Y||s!==null))throw new Error("You forgot to provide an `open` prop to the `Dialog`.");if(typeof u.value!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${u.value===Y?void 0:e.open}`);let f=p(()=>o.value&&u.value?0:1),g=p(()=>f.value===0),b=p(()=>r.value>1),V=j(me,null)!==null,we=p(()=>b.value?"parent":"leaf"),Q=p(()=>s!==null?(s.value&z.Closing)===z.Closing:!1),je=p(()=>V||Q.value?!1:g.value),He=p(()=>{var c,m,S;return(S=Array.from((m=(c=h.value)==null?void 0:c.querySelectorAll("body > *"))!=null?m:[]).find(w=>w.id==="headlessui-portal-root"?!1:w.contains(k(y))&&w instanceof HTMLElement))!=null?S:null});Se(He,je);let Be=p(()=>b.value?!0:g.value),qe=p(()=>{var c,m,S;return(S=Array.from((m=(c=h.value)==null?void 0:c.querySelectorAll("[data-headlessui-portal]"))!=null?m:[]).find(w=>w.contains(k(y))&&w instanceof HTMLElement))!=null?S:null});Se(qe,Be),vt({type:"Dialog",enabled:p(()=>f.value===0),element:d,onUpdate:(c,m)=>{if(m==="Dialog")return te(c,{[ve.Add]:()=>r.value+=1,[ve.Remove]:()=>r.value-=1})}});let Ie=gt({name:"DialogDescription",slot:p(()=>({open:u.value}))}),U=v(null),$={titleId:U,panelRef:v(null),dialogState:f,setTitleId(c){U.value!==c&&(U.value=c)},close(){n("close",!1)}};q(me,$);function oe(){var c,m,S;return[...Array.from((m=(c=h.value)==null?void 0:c.querySelectorAll("html > *, body > *, [data-headlessui-portal]"))!=null?m:[]).filter(w=>!(w===document.body||w===document.head||!(w instanceof HTMLElement)||w.contains(k(y))||$.panelRef.value&&w.contains($.panelRef.value))),(S=$.panelRef.value)!=null?S:d.value]}let Ve=p(()=>!(!g.value||b.value));Je(()=>oe(),(c,m)=>{$.close(),tt(()=>m==null?void 0:m.focus())},Ve);let Qe=p(()=>!(b.value||f.value!==0));Te((l=h.value)==null?void 0:l.defaultView,"keydown",c=>{Qe.value&&(c.defaultPrevented||c.key===Ke.Escape&&(c.preventDefault(),c.stopPropagation(),$.close()))});let Ue=p(()=>!(Q.value||f.value!==0||V));return Ft(h,Ue,c=>{var m;return{containers:[...(m=c.containers)!=null?m:[],oe]}}),ae(c=>{if(f.value!==0)return;let m=k(d);if(!m)return;let S=new ResizeObserver(w=>{for(let re of w){let N=re.target.getBoundingClientRect();N.x===0&&N.y===0&&N.width===0&&N.height===0&&$.close()}});S.observe(m),c(()=>S.disconnect())}),()=>{let{id:c,open:m,initialFocus:S,...w}=e,re={...t,ref:d,id:c,role:"dialog","aria-modal":f.value===0?!0:void 0,"aria-labelledby":U.value,"aria-describedby":Ie.value},N={open:f.value===0};return E(pe,{force:!0},()=>[E(Le,()=>E(ft,{target:d.value},()=>E(pe,{force:!1},()=>E(H,{initialFocus:S,containers:oe,features:g.value?te(we.value,{parent:H.features.RestoreFocus,leaf:H.features.All&~H.features.FocusLock}):H.features.None},()=>D({ourProps:re,theirProps:w,slot:N,attrs:t,slots:a,visible:f.value===0,features:ye.RenderStrategy|ye.Static,name:"Dialog"}))))),E(de,{features:ce.Hidden,ref:y})])}}});F({name:"DialogOverlay",props:{as:{type:[Object,String],default:"div"},id:{type:String,default:()=>`headlessui-dialog-overlay-${M()}`}},setup(e,{attrs:n,slots:t}){let a=I("DialogOverlay");function i(l){l.target===l.currentTarget&&(l.preventDefault(),l.stopPropagation(),a.close())}return()=>{let{id:l,...o}=e;return D({ourProps:{id:l,"aria-hidden":!0,onClick:i},theirProps:o,slot:{open:a.dialogState.value===0},attrs:n,slots:t,name:"DialogOverlay"})}}});F({name:"DialogBackdrop",props:{as:{type:[Object,String],default:"div"},id:{type:String,default:()=>`headlessui-dialog-backdrop-${M()}`}},inheritAttrs:!1,setup(e,{attrs:n,slots:t,expose:a}){let i=I("DialogBackdrop"),l=v(null);return a({el:l,$el:l}),T(()=>{if(i.panelRef.value===null)throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.")}),()=>{let{id:o,...r}=e,s={id:o,ref:l,"aria-hidden":!0};return E(pe,{force:!0},()=>E(Le,()=>D({ourProps:s,theirProps:{...n,...r},slot:{open:i.dialogState.value===0},attrs:n,slots:t,name:"DialogBackdrop"})))}}});let $t=F({name:"DialogPanel",props:{as:{type:[Object,String],default:"div"},id:{type:String,default:()=>`headlessui-dialog-panel-${M()}`}},setup(e,{attrs:n,slots:t,expose:a}){let i=I("DialogPanel");a({el:i.panelRef,$el:i.panelRef});function l(o){o.stopPropagation()}return()=>{let{id:o,...r}=e,s={id:o,ref:i.panelRef,onClick:l};return D({ourProps:s,theirProps:r,slot:{open:i.dialogState.value===0},attrs:n,slots:t,name:"DialogPanel"})}}}),Ct=F({name:"DialogTitle",props:{as:{type:[Object,String],default:"h2"},id:{type:String,default:()=>`headlessui-dialog-title-${M()}`}},setup(e,{attrs:n,slots:t}){let a=I("DialogTitle");return T(()=>{a.setTitleId(e.id),x(()=>a.setTitleId(null))}),()=>{let{id:i,...l}=e;return D({ourProps:{id:i},theirProps:l,slot:{open:a.dialogState.value===0},attrs:n,slots:t,name:"DialogTitle"})}}}),Ot=ht;const _t=O("div",{class:"fixed inset-0 bg-black/90 bg-opacity-75 transition-opacity","aria-hidden":"true"},null,-1),Pt={class:"fixed inset-0 z-10 overflow-y-auto"},Lt={class:"flex min-h-full items-start justify-center p-4 text-center sm:items-center sm:p-0"},Rt={class:"flex flex-row-reverse"},Nt={class:"rounded-md"},At={__name:"TheCertsModal",props:{isOpen:{type:Boolean,required:!0},onClose:{type:Function,required:!0},certData:{type:Object,required:!0}},setup(e){const n=e;return(t,a)=>{const i=We,l=Ct,o=xe("TwicImg"),r=Ot,s=$t,u=xt;return Z(),nt(u,{open:n.isOpen,class:"relative z-50",onClose:n.onClose},{default:G(()=>[_t,O("div",Pt,[O("div",Lt,[_(s,{class:"w-11/12 max-w-xs rounded bg-white p-3 align-top dark:bg-bgbluelighter md:max-w-xl lg:md:h-3/6 2xl:max-w-4xl"},{default:G(()=>[O("div",Rt,[O("button",{type:"button",class:"ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-base text-blue-900 outline-transparent transition delay-100 duration-100 ease-in-out hover:scale-125 hover:text-blue-700 dark:text-gray-400 dark:hover:text-white",onClick:a[0]||(a[0]=(...d)=>n.onClose&&n.onClose(...d))},[_(i,{name:"ic:baseline-close",size:"18px"})])]),_(l,{class:"m-1 pb-1 text-center align-top text-xl text-blue-900 shadow-red-500 drop-shadow-xl dark:text-white"},{default:G(()=>{var d;return[be(ke((d=n.certData)==null?void 0:d.title),1)]}),_:1}),O("div",Nt,[_(o,{class:"rounded-md drop-shadow-xl dark:shadow-white",src:n.certData.url,ratio:"4/3"},null,8,["src"])]),_(r,{class:"m-1 p-2 text-justify text-base text-blue-900 dark:text-white"},{default:G(()=>{var d;return[be(ke((d=n.certData)==null?void 0:d.description),1)]}),_:1})]),_:1})])])]),_:1},8,["open","onClose"])}}};var le={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"Certificate"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Certificate"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"sys"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"sys"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"fileName"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:150}};le.loc.source={body:`fragment Certificate on Certificate {
  sys {
    id
  }
  name
  description
  image {
    sys {
      id
    }
    title
    fileName
    url
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};function X(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var t=e.type;t.kind==="NamedType"&&n.add(t.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(a){X(a,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(a){X(a,n)}),e.definitions&&e.definitions.forEach(function(a){X(a,n)})}var ge={};(function(){le.definitions.forEach(function(n){if(n.name){var t=new Set;X(n,t),ge[n.name.value]=t}})})();function Ee(e,n){for(var t=0;t<e.definitions.length;t++){var a=e.definitions[t];if(a.name&&a.name.value==n)return a}}function Mt(e,n){var t={kind:e.kind,definitions:[Ee(e,n)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var a=ge[n]||new Set,i=new Set,l=new Set;for(a.forEach(function(r){l.add(r)});l.size>0;){var o=l;l=new Set,o.forEach(function(r){if(!i.has(r)){i.add(r);var s=ge[r]||new Set;s.forEach(function(u){l.add(u)})}})}return i.forEach(function(r){var s=Ee(e,r);s&&t.definitions.push(s)}),t}Mt(le,"Certificate");var A={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"certificateCollectionQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"locale"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"certificateCollection"},arguments:[{kind:"Argument",name:{kind:"Name",value:"locale"},value:{kind:"Variable",name:{kind:"Name",value:"locale"}}},{kind:"Argument",name:{kind:"Name",value:"order"},value:{kind:"EnumValue",value:"date_DESC"}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"total"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"items"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Certificate"},directives:[]}]}}]}}]}}],loc:{start:0,end:258}};A.loc.source={body:`#import "../fragments/certificate.fragment.gql"

query certificateCollectionQuery($locale: String) {
  certificateCollection(locale: $locale, order: date_DESC) {
    total
    items {
      ...Certificate
      # add the fields you want to query
    }
  }
}
`,name:"GraphQL request",locationOffset:{line:1,column:1}};var De={};function jt(e){return e.filter(function(n){if(n.kind!=="FragmentDefinition")return!0;var t=n.name.value;return De[t]?!1:(De[t]=!0,!0)})}A.definitions=A.definitions.concat(jt(le.definitions));function ee(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var t=e.type;t.kind==="NamedType"&&n.add(t.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(a){ee(a,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(a){ee(a,n)}),e.definitions&&e.definitions.forEach(function(a){ee(a,n)})}var he={};(function(){A.definitions.forEach(function(n){if(n.name){var t=new Set;ee(n,t),he[n.name.value]=t}})})();function Fe(e,n){for(var t=0;t<e.definitions.length;t++){var a=e.definitions[t];if(a.name&&a.name.value==n)return a}}function Ht(e,n){var t={kind:e.kind,definitions:[Fe(e,n)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var a=he[n]||new Set,i=new Set,l=new Set;for(a.forEach(function(r){l.add(r)});l.size>0;){var o=l;l=new Set,o.forEach(function(r){if(!i.has(r)){i.add(r);var s=he[r]||new Set;s.forEach(function(u){l.add(u)})}})}return i.forEach(function(r){var s=Fe(e,r);s&&t.definitions.push(s)}),t}Ht(A,"certificateCollectionQuery");const Bt={class:"flex w-full flex-wrap p-1"},qt=["onClick"],zt={__name:"TheCerts",setup(e){const n=v(!1),{locale:t}=at(),{result:a}=it(A,()=>({locale:t.value}),{prefetch:!1}),i=s=>s.replace("https://images.ctfassets.net/dw7ds4p9sn1i/",""),l=v({title:"",description:"",url:""}),o=s=>{l.value.title=s.title,l.value.description=s.description,l.value.url=i(s.url),n.value=!0},r=()=>{n.value=!1,l.value.title="",l.value.description="",l.value.url=""};return(s,u)=>{var h,f;const d=xe("TwicImg"),y=At;return Z(),se(fe,null,[O("div",Bt,[(Z(!0),se(fe,null,lt((f=(h=K(a))==null?void 0:h.certificateCollection)==null?void 0:f.items,(g,b)=>(Z(),se("div",{key:b,class:"m-2 h-24 w-24 rounded bg-slate-200 p-1 drop-shadow-md dark:bg-bgbluelighter dark:shadow-white md:h-48 md:w-48",onClick:V=>o({title:g.name,description:g.description,url:g.image.url})},[_(d,{class:"rounded",src:i(g.image.url)},null,8,["src"])],8,qt))),128))]),_(y,{"on-close":r,"is-open":K(n),"cert-data":K(l)},null,8,["is-open","cert-data"])],64)}}};export{zt as default};
