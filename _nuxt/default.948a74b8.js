import{_ as ce}from"./client-only.0f151ce9.js";import{_ as de}from"./nuxt-link.825e7dbd.js";import Q from"./Icon.e9a6aa57.js";import{i as q,l as ze}from"./index.9817acad.js";import{y as D,X as pe,o as y,c as C,a as d,b as S,w as P,v as I,O as F,Y as ee,B as De,P as Fe,Z as Ne,$ as Oe,r as x,H as te,f as Y,z,J as ve,I as M,F as A,s as fe,K as oe,t as W,a0 as be,D as me,d as _e,E as he,a1 as Be,W as ge,p as Me,e as Le,a2 as He,a3 as re,h as Ve,G as Re,S as je,N as Ae}from"./entry.c2e93567.js";import{o,m as ne,h as ae,u as V,j as Ge,l as U,V as Ke,b as qe,E as We,y as Ue,w as Ye,k as Ze,H as le,t as j,n as ye,f as Z,a as J,p as Je,g as ie,c as L,P as H,N as O,d as B,T as X,i as ke}from"./IntersectingSection.83c8a2c0.js";import{_ as Xe}from"./_plugin-vue_export-helper.c27b6911.js";import"./config.a064904f.js";const Se=D({__name:"TheDarkMode",setup(n){const s=pe(q);return(l,p)=>{const t=Q;return y(),C("div",null,[d("button",{class:"outline-offset-2 outline-blue-400 transition delay-150 duration-300 ease-in-out hover:scale-125 hover:text-blue-700 dark:hover:text-blue-500",onClick:p[0]||(p[0]=e=>I(s)())},[S(ee,{mode:"out-in",name:"slide-up"},{default:P(()=>[("isDark"in l?l.isDark:I(q))?(y(),F(t,{key:0,name:"material-symbols:nights-stay-rounded"})):(y(),F(t,{key:1,name:"material-symbols:sunny-rounded"}))]),_:1})])])}}});const Qe=d("option",{value:"en"},"EN",-1),et=d("option",{value:"pt"},"PT",-1),tt=[Qe,et],we=D({__name:"TheLocalSwitch",setup(n){const{locale:s,setLocaleCookie:l}=De();return(p,t)=>(y(),C("div",null,[d("form",null,[Fe(d("select",{"onUpdate:modelValue":t[0]||(t[0]=e=>Oe(s)?s.value=e:null),class:"block rounded-lg border border-gray-300 bg-slate-100/80 text-sm text-blue-800 outline-blue-400 focus:border-blue-500 focus:ring-blue-500 dark:bg-bgblue/80 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500",onChange:t[1]||(t[1]=e=>I(l)(I(s)))},tt,544),[[Ne,I(s)]])])]))}});function ue(n,s){if(n)return n;let l=s??"button";if(typeof l=="string"&&l.toLowerCase()==="button")return"button"}function ot(n,s){let l=x(ue(n.value.type,n.value.as));return te(()=>{l.value=ue(n.value.type,n.value.as)}),Y(()=>{var p;l.value||o(s)&&o(s)instanceof HTMLButtonElement&&!((p=o(s))!=null&&p.hasAttribute("type"))&&(l.value="button")}),l}var nt=(n=>(n[n.Open=0]="Open",n[n.Closed=1]="Closed",n))(nt||{});let xe=Symbol("PopoverContext");function se(n){let s=oe(xe,null);if(s===null){let l=new Error(`<${n} /> is missing a parent <${Ie.name} /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(l,se),l}return s}let at=Symbol("PopoverGroupContext");function $e(){return oe(at,null)}let Pe=Symbol("PopoverPanelContext");function lt(){return oe(Pe,null)}let Ie=D({name:"Popover",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"}},setup(n,{slots:s,attrs:l,expose:p}){var t;let e=x(null);p({el:e,$el:e});let i=x(1),u=x(null),w=x(null),m=x(null),b=x(null),T=z(()=>ne(e)),N=z(()=>{var a,c;if(!o(u)||!o(b))return!1;for(let K of document.querySelectorAll("body > *"))if(Number(K==null?void 0:K.contains(o(u)))^Number(K==null?void 0:K.contains(o(b))))return!0;let f=ae(),$=f.indexOf(o(u)),G=($+f.length-1)%f.length,Te=($+1)%f.length,Ee=f[G],Ce=f[Te];return!((a=o(b))!=null&&a.contains(Ee))&&!((c=o(b))!=null&&c.contains(Ce))}),k={popoverState:i,buttonId:x(null),panelId:x(null),panel:b,button:u,isPortalled:N,beforePanelSentinel:w,afterPanelSentinel:m,togglePopover(){i.value=V(i.value,{0:1,1:0})},closePopover(){i.value!==1&&(i.value=1)},close(a){k.closePopover();let c=(()=>a?a instanceof HTMLElement?a:a.value instanceof HTMLElement?o(a):o(k.button):o(k.button))();c==null||c.focus()}};ve(xe,k),Ge(z(()=>V(i.value,{0:U.Open,1:U.Closed})));let R={buttonId:k.buttonId,panelId:k.panelId,close(){k.closePopover()}},E=$e(),_=E==null?void 0:E.registerPopover,[g,v]=Ke(),r=qe({mainTreeNodeRef:E==null?void 0:E.mainTreeNodeRef,portals:g,defaultContainers:[u,b]});function h(){var a,c,f,$;return($=E==null?void 0:E.isFocusWithinPopoverGroup())!=null?$:((a=T.value)==null?void 0:a.activeElement)&&(((c=o(u))==null?void 0:c.contains(T.value.activeElement))||((f=o(b))==null?void 0:f.contains(T.value.activeElement)))}return Y(()=>_==null?void 0:_(R)),We((t=T.value)==null?void 0:t.defaultView,"focus",a=>{var c,f;a.target!==window&&a.target instanceof HTMLElement&&i.value===0&&(h()||u&&b&&(r.contains(a.target)||(c=o(k.beforePanelSentinel))!=null&&c.contains(a.target)||(f=o(k.afterPanelSentinel))!=null&&f.contains(a.target)||k.closePopover()))},!0),Ue(r.resolveContainers,(a,c)=>{var f;k.closePopover(),Ye(c,Ze.Loose)||(a.preventDefault(),(f=o(u))==null||f.focus())},z(()=>i.value===0)),()=>{let a={open:i.value===0,close:k.close};return M(A,[M(v,{},()=>le({theirProps:{...n,...l},ourProps:{ref:e},slot:a,slots:s,attrs:l,name:"Popover"})),M(r.MainTreeNode)])}}}),st=D({name:"PopoverButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:()=>`headlessui-popover-button-${j()}`}},inheritAttrs:!1,setup(n,{attrs:s,slots:l,expose:p}){let t=se("PopoverButton"),e=z(()=>ne(t.button));p({el:t.button,$el:t.button}),te(()=>{t.buttonId.value=n.id}),fe(()=>{t.buttonId.value=null});let i=$e(),u=i==null?void 0:i.closeOthers,w=lt(),m=z(()=>w===null?!1:w.value===t.panelId.value),b=x(null),T=`headlessui-focus-sentinel-${j()}`;m.value||Y(()=>{t.button.value=b.value});let N=ot(z(()=>({as:n.as,type:s.type})),b);function k(r){var h,a,c,f,$;if(m.value){if(t.popoverState.value===1)return;switch(r.key){case L.Space:case L.Enter:r.preventDefault(),(a=(h=r.target).click)==null||a.call(h),t.closePopover(),(c=o(t.button))==null||c.focus();break}}else switch(r.key){case L.Space:case L.Enter:r.preventDefault(),r.stopPropagation(),t.popoverState.value===1&&(u==null||u(t.buttonId.value)),t.togglePopover();break;case L.Escape:if(t.popoverState.value!==0)return u==null?void 0:u(t.buttonId.value);if(!o(t.button)||(f=e.value)!=null&&f.activeElement&&!(($=o(t.button))!=null&&$.contains(e.value.activeElement)))return;r.preventDefault(),r.stopPropagation(),t.closePopover();break}}function R(r){m.value||r.key===L.Space&&r.preventDefault()}function E(r){var h,a;n.disabled||(m.value?(t.closePopover(),(h=o(t.button))==null||h.focus()):(r.preventDefault(),r.stopPropagation(),t.popoverState.value===1&&(u==null||u(t.buttonId.value)),t.togglePopover(),(a=o(t.button))==null||a.focus()))}function _(r){r.preventDefault(),r.stopPropagation()}let g=ye();function v(){let r=o(t.panel);if(!r)return;function h(){V(g.value,{[B.Forwards]:()=>H(r,O.First),[B.Backwards]:()=>H(r,O.Last)})===X.Error&&H(ae().filter(a=>a.dataset.headlessuiFocusGuard!=="true"),V(g.value,{[B.Forwards]:O.Next,[B.Backwards]:O.Previous}),{relativeTo:o(t.button)})}h()}return()=>{let r=t.popoverState.value===0,h={open:r},{id:a,...c}=n,f=m.value?{ref:b,type:N.value,onKeydown:k,onClick:E}:{ref:b,id:a,type:N.value,"aria-expanded":t.popoverState.value===0,"aria-controls":o(t.panel)?t.panelId.value:void 0,disabled:n.disabled?!0:void 0,onKeydown:k,onKeyup:R,onClick:E,onMousedown:_};return M(A,[le({ourProps:f,theirProps:{...s,...c},slot:h,attrs:s,slots:l,name:"PopoverButton"}),r&&!m.value&&t.isPortalled.value&&M(Z,{id:T,features:J.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:v})])}}}),rt=D({name:"PopoverPanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},focus:{type:Boolean,default:!1},id:{type:String,default:()=>`headlessui-popover-panel-${j()}`}},inheritAttrs:!1,setup(n,{attrs:s,slots:l,expose:p}){let{focus:t}=n,e=se("PopoverPanel"),i=z(()=>ne(e.panel)),u=`headlessui-focus-sentinel-before-${j()}`,w=`headlessui-focus-sentinel-after-${j()}`;p({el:e.panel,$el:e.panel}),te(()=>{e.panelId.value=n.id}),fe(()=>{e.panelId.value=null}),ve(Pe,e.panelId),Y(()=>{var _,g;if(!t||e.popoverState.value!==0||!e.panel)return;let v=(_=i.value)==null?void 0:_.activeElement;(g=o(e.panel))!=null&&g.contains(v)||H(o(e.panel),O.First)});let m=Je(),b=z(()=>m!==null?(m.value&U.Open)===U.Open:e.popoverState.value===0);function T(_){var g,v;switch(_.key){case L.Escape:if(e.popoverState.value!==0||!o(e.panel)||i.value&&!((g=o(e.panel))!=null&&g.contains(i.value.activeElement)))return;_.preventDefault(),_.stopPropagation(),e.closePopover(),(v=o(e.button))==null||v.focus();break}}function N(_){var g,v,r,h,a;let c=_.relatedTarget;c&&o(e.panel)&&((g=o(e.panel))!=null&&g.contains(c)||(e.closePopover(),((r=(v=o(e.beforePanelSentinel))==null?void 0:v.contains)!=null&&r.call(v,c)||(a=(h=o(e.afterPanelSentinel))==null?void 0:h.contains)!=null&&a.call(h,c))&&c.focus({preventScroll:!0})))}let k=ye();function R(){let _=o(e.panel);if(!_)return;function g(){V(k.value,{[B.Forwards]:()=>{var v;H(_,O.First)===X.Error&&((v=o(e.afterPanelSentinel))==null||v.focus())},[B.Backwards]:()=>{var v;(v=o(e.button))==null||v.focus({preventScroll:!0})}})}g()}function E(){let _=o(e.panel);if(!_)return;function g(){V(k.value,{[B.Forwards]:()=>{let v=o(e.button),r=o(e.panel);if(!v)return;let h=ae(),a=h.indexOf(v),c=h.slice(0,a+1),f=[...h.slice(a+1),...c];for(let $ of f.slice())if($.dataset.headlessuiFocusGuard==="true"||r!=null&&r.contains($)){let G=f.indexOf($);G!==-1&&f.splice(G,1)}H(f,O.First,{sorted:!1})},[B.Backwards]:()=>{var v;H(_,O.Previous)===X.Error&&((v=o(e.button))==null||v.focus())}})}g()}return()=>{let _={open:e.popoverState.value===0,close:e.close},{id:g,focus:v,...r}=n,h={ref:e.panel,id:g,onKeydown:T,onFocusout:t&&e.popoverState.value===0?N:void 0,tabIndex:-1};return le({ourProps:h,theirProps:{...s,...r},attrs:s,slot:_,slots:{...l,default:(...a)=>{var c;return[M(A,[b.value&&e.isPortalled.value&&M(Z,{id:u,ref:e.beforePanelSentinel,features:J.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:R}),(c=l.default)==null?void 0:c.call(l,...a),b.value&&e.isPortalled.value&&M(Z,{id:w,ref:e.afterPanelSentinel,features:J.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:E})])]}},features:ie.RenderStrategy|ie.Static,visible:b.value,name:"PopoverPanel"})}}});const it={class:"relative grid gap-8 rounded bg-slate-100 p-7 text-blue-800 shadow-sm shadow-blue-800/30 dark:bg-bgblue dark:text-white dark:shadow-bgbluelighter lg:grid-cols-2"},ut={class:"inline-flex"},ct={class:"inline-flex"},dt={class:"pl-2"},pt=D({__name:"TheHamburgerMenu",setup(n){const s=pe(q);return(l,p)=>{const t=Q,e=st,i=Se,u=we,w=rt,m=Ie;return y(),F(m,{class:"relative"},{default:P(({open:b})=>[S(e,{class:"outline-offset-2 outline-blue-400"},{default:P(()=>[b?(y(),F(t,{key:0,name:"ic:baseline-close"})):(y(),F(t,{key:1,name:"ic:sharp-menu"}))]),_:2},1024),S(ee,{"enter-active-class":"transition duration-200 ease-out","enter-from-class":"translate-y-1 opacity-0","enter-to-class":"translate-y-0 opacity-100","leave-active-class":"transition duration-150 ease-in","leave-from-class":"translate-y-0 opacity-100","leave-to-class":"translate-y-1 opacity-0"},{default:P(()=>[S(w,{class:"absolute inset-x-7 top-7 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl"},{default:P(()=>[d("div",it,[d("div",ut,[S(i,{ref:"darkMode"},null,512),d("p",{class:"pl-2",onClick:p[0]||(p[0]=T=>I(s)())},W(l.$t("appearance")),1)]),d("div",ct,[S(u),d("p",dt,W(l.$t("language")),1)])])]),_:1})]),_:1})]),_:1})}}}),vt={class:"fixed left-0 right-0 top-0 z-20 bg-slate-100 text-blue-800 shadow shadow-blue-900/10 dark:bg-bgblue dark:text-white dark:shadow dark:shadow-white/20 md:relative md:bg-transparent md:shadow-transparent dark:md:bg-transparent dark:lg:md:shadow-none lg:md:shadow-none"},ft={class:"mx-auto mb-2 mt-2 flex h-8 items-center justify-end bg-transparent px-2 py-3"},bt={class:"flex items-center gap-1 pr-1 md:gap-5"},mt={class:"flex flex-wrap justify-evenly"},_t={class:"hidden md:inline"},ht={class:"hidden md:inline md:pt-1"},gt={class:"pl-2 md:hidden"},yt=D({__name:"TheNavbar",setup(n){const s=["Section 1","Section 2","Section 3","Section 4","Section 5"];return be(),(l,p)=>{const t=de,e=Se,i=ce,u=we,w=pt;return y(),C("nav",vt,[d("div",ft,[d("ul",bt,[d("div",mt,[(y(),C(A,null,me(s,(m,b)=>d("li",{key:m},[S(t,{to:"/#"+b,class:he(["m-1 block pl-2 text-xs tracking-tighter text-blue-800 outline-offset-2 outline-blue-400 transition delay-150 duration-300 ease-in-out hover:scale-110 hover:text-blue-700 dark:text-white dark:hover:text-blue-500 md:text-base",{"underline decoration-blue-500 decoration-solid decoration-1 underline-offset-4":("isIntersectingSection"in l?l.isIntersectingSection:I(ke))["Section"+(b+1)]}])},{default:P(()=>[_e(W(l.$t(m)),1)]),_:2},1032,["to","class"])])),64))]),d("li",_t,[S(i,null,{default:P(()=>[S(e)]),_:1})]),d("li",ht,[S(u)]),d("li",gt,[S(w)])])])])}}}),kt=n=>(Me("data-v-8c9efe01"),n=n(),Le(),n),St={class:"grid grid-cols-6 gap-2 pt-8"},wt={key:0,class:"invisible w-5/6 md:visible"},xt=kt(()=>d("div",{class:"sticky left-0 z-0 opacity-50 md:top-10 xl:top-5 2xl:top-2"},[d("div",{class:"absolute z-0 border-b-[100px] border-l-[155px] border-t-[75px] border-b-transparent border-l-blue-300 border-t-transparent opacity-60 dark:border-l-blue-900"}),d("div",{class:"absolute z-0 mt-5 border-b-[100px] border-l-[155px] border-t-[75px] border-b-transparent border-l-blue-300 border-t-transparent opacity-80 dark:border-l-blue-900"}),d("div",{class:"absolute z-0 mt-10 border-b-[100px] border-l-[155px] border-t-[75px] border-b-transparent border-l-blue-300 border-t-transparent opacity-60 dark:border-l-blue-900"})],-1)),$t={class:"sticky left-0 top-5 mt-3 w-3/6 rounded-r-2xl bg-blue-200 bg-opacity-50 py-6 pr-2 dark:bg-blue-800/25"},Pt={class:"z-40"},It={key:1,class:"w-1/12 md:w-1/6"},Tt={class:"col-start-1 col-end-7 md:col-start-2 md:col-end-6"},Et=D({__name:"TheSidebar",props:{isSidebarVisible:Boolean},setup(n){const s=n,l=["Section 1","Section 2","Section 3","Section 4","Section 5"];return be(),Be(),(p,t)=>{const e=de;return y(),C("main",St,[S(ee,{mode:"out-in",duration:400,name:"fade"},{default:P(()=>[s.isSidebarVisible?(y(),C("aside",wt,[xt,d("div",$t,[d("div",Pt,[(y(),C(A,null,me(l,(i,u)=>S(e,{key:i,to:"/#"+u,class:he(["z-30 m-1 block w-fit pl-2 text-sm tracking-tight text-blue-800 transition delay-150 duration-300 ease-in-out hover:scale-110 hover:text-blue-700 dark:text-white dark:hover:text-blue-500",{"underline decoration-blue-500 decoration-solid decoration-1 underline-offset-8":("isIntersectingSection"in p?p.isIntersectingSection:I(ke))["Section"+(u+1)]}])},{default:P(()=>[_e(W(p.$t(i)),1)]),_:2},1032,["to","class"])),64))])])])):(y(),C("div",It))]),_:1}),d("div",Tt,[ge(p.$slots,"default",{},void 0,!0)])])}}});const Ct=Xe(Et,[["__scopeId","data-v-8c9efe01"]]),zt={type:"button",class:"rounded-lg bg-transparent outline-transparent transition delay-100 duration-100 ease-in-out hover:scale-125"},Dt=D({__name:"TheScrollTop",setup(n){const{y:s,arrivedState:l,directions:p}=He(window,{behavior:"smooth"});re(l),re(p);const t=z(()=>s.value*100/(document.documentElement.scrollHeight-window.innerHeight)),e=x(!1),i=()=>{e.value=!0,setTimeout(()=>window.scrollTo({top:0,behavior:"smooth"}),400)};return Ve(t,(u,w)=>{u===0&&(e.value=!1)}),(u,w)=>{const m=Q;return I(t)>=25?(y(),C("div",{key:0,class:"fixed bottom-5 right-1 z-40 text-blue-800 dark:text-white md:right-8",onClick:i},[d("button",zt,[I(e)?(y(),F(m,{key:0,size:"30px",name:"line-md:chevron-small-triple-up"})):(y(),F(m,{key:1,size:"30px",name:"ic:baseline-keyboard-arrow-up"}))])])):Re("",!0)}}}),Ft={class:"relative -z-10 h-full w-full bg-bgblue"},Nt={ref:"defRoot"},At=D({__name:"default",setup(n){const s=x(null),l=x(!1);je(s,([{isIntersecting:i}],u)=>{l.value=i});const p=async i=>{await ze(i)};x(null);const t={background:{color:{value:"#041731"}},fullScreen:{enable:!0,zIndex:-1},fpsLimit:60,interactivity:{detectsOn:"window",events:{onClick:{enable:!0,mode:"push"},onHover:{enable:!0,mode:"grab"},resize:!0},modes:{bubble:{distance:400,duration:2,opacity:.8,size:40},push:{quantity:4,duration:.2},repulse:{distance:200,duration:.4}}},particles:{color:{value:"#ffffff"},links:{color:"#ffffff",distance:150,enable:!0,opacity:.5,width:1},collisions:{enable:!0},move:{direction:"none",enable:!0,outMode:"out",random:!1,speed:2,straight:!1},number:{density:{enable:!0,value_area:1e3},value:100},opacity:{value:.5},shape:{type:"circle"},size:{random:!0,value:3}},detectRetina:!0},e={background:{color:{value:"#f1f5f9"}},fullScreen:{enable:!0,zIndex:-1},fpsLimit:60,interactivity:{detectsOn:"window",events:{onClick:{enable:!0,mode:"push"},onHover:{enable:!0,mode:"grab"},resize:!0},modes:{bubble:{distance:400,duration:2,opacity:.8,size:40},push:{quantity:4,duration:.2},repulse:{distance:200,duration:.4}}},particles:{color:{value:"#1e40af"},links:{color:"#1e40af",distance:150,enable:!0,opacity:.5,width:1},collisions:{enable:!0},move:{direction:"none",enable:!0,outMode:"out",random:!1,speed:2,straight:!1},number:{density:{enable:!0,value_area:1e3},value:100},opacity:{value:.5},shape:{type:"circle"},size:{random:!0,value:3}},detectRetina:!0};return(i,u)=>{const w=Ae("Particles"),m=ce,b=yt,T=Ct,N=Dt;return y(),C("div",null,[d("div",Ft,[S(m,null,{default:P(()=>[("isDark"in i?i.isDark:I(q))?(y(),F(w,{key:0,id:"tsparticles",options:t,"particles-init":p})):(y(),F(w,{key:1,id:"tsparticles",options:e,"particles-init":p}))]),_:1})]),d("div",Nt,[S(b,{ref_key:"nav",ref:s},null,512),S(T,{"is-sidebar-visible":!I(l)},{default:P(()=>[ge(i.$slots,"default")]),_:3},8,["is-sidebar-visible"]),S(m,null,{default:P(()=>[S(N)]),_:1})],512)])}}});export{At as default};
