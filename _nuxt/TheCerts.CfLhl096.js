import $ from"./Icon.CiB6J6IX.js";import{V as j,J as q,G as z,W as H,u as v}from"./index.CJiomsTu.js";import{L as w,o as d,M as O,w as r,a,b as n,d as y,t as C,r as k,x as S,y as F,c as x,F as D,z as G,v as c,C as M}from"./entry.BMaFakYV.js";import"./index.DKzsDYrr.js";import"./_plugin-vue_export-helper.DlAUqK2U.js";import"./interval.NVfEbTit.js";import"./IntersectingSection.Dz65Ll8J.js";import"./nuxt-link.FPQmRyEs.js";import"./client-only.kLTIAR4Y.js";const N=a("div",{class:"fixed inset-0 bg-black/90 bg-opacity-75 transition-opacity","aria-hidden":"true"},null,-1),U={class:"fixed inset-0 z-10 overflow-y-auto"},A={class:"flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0"},J={class:"flex flex-row-reverse"},L={class:"rounded-md"},W={__name:"TheCertsModal",props:{isOpen:{type:Boolean,required:!0},onClose:{type:Function,required:!0},certData:{type:Object,required:!0}},setup(f){const e=f;return(u,l)=>{const p=$,m=j,t=w("TwicImg"),_=q,h=z,o=H;return d(),O(o,{open:e.isOpen,class:"relative z-50",onClose:e.onClose},{default:r(()=>[N,a("div",U,[a("div",A,[n(h,{class:"w-11/12 max-w-xs rounded bg-white p-3 align-top dark:bg-bgbluelighter md:max-w-xl lg:md:h-3/6 2xl:max-w-4xl"},{default:r(()=>[a("div",J,[a("button",{type:"button",class:"ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-base text-blue-900 outline-none outline-transparent transition delay-100 duration-100 ease-in-out hover:scale-125 hover:text-blue-700 focus:outline-none dark:text-gray-400 dark:hover:text-white",onClick:l[0]||(l[0]=(...s)=>e.onClose&&e.onClose(...s))},[n(p,{name:"ic:baseline-close",size:"18px"})])]),n(m,{class:"m-1 pb-1 text-center align-top text-xl text-blue-900 shadow-red-500 drop-shadow-xl dark:text-white"},{default:r(()=>{var s;return[y(C((s=e.certData)==null?void 0:s.title),1)]}),_:1}),a("div",L,[n(t,{class:"rounded-md drop-shadow-xl dark:shadow-white",src:e.certData.url,ratio:"4/3"},null,8,["src"])]),n(_,{class:"m-1 p-2 text-justify text-base text-blue-900 dark:text-white"},{default:r(()=>{var s;return[y(C((s=e.certData)==null?void 0:s.description),1)]}),_:1})]),_:1})])])]),_:1},8,["open","onClose"])}}},E=W,P={class:"flex w-full flex-wrap justify-around p-1"},Q=["onClick"],ae={__name:"TheCerts",async setup(f){let e,u;const l=k(!1),{locale:p}=S(),{data:m}=([e,u]=F(()=>M("certificateCollectionQuery",{locale:p})),e=await e,u(),e),t=k({title:"",description:"",url:""}),_=o=>{t.value.title=o.title,t.value.description=o.description,t.value.url=v(o.url),l.value=!0},h=()=>{l.value=!1,t.value.title="",t.value.description="",t.value.url=""};return(o,s)=>{const T=w("TwicImg"),V=w("TwicView"),I=E;return d(),x(D,null,[n(V,null,{default:r(()=>{var g,b;return[a("div",P,[(d(!0),x(D,null,G((b=(g=c(m))==null?void 0:g.certificateCollection)==null?void 0:b.items,(i,B)=>(d(),x("div",{key:B,class:"m-2 h-24 w-24 cursor-pointer rounded border-slate-300 bg-slate-300/50 p-1 shadow shadow-blue-900/50 drop-shadow-md transition duration-150 ease-in-out will-change-auto hover:scale-105 dark:bg-bgbluelighter dark:shadow-white/20 md:h-40 md:w-40 lg:h-48 lg:w-48",onClick:K=>_({title:i.name,description:i.description,url:i.image.url})},[n(T,{class:"rounded",src:("useShortUrl"in o?o.useShortUrl:c(v))(i.image.url)},null,8,["src"])],8,Q))),128))])]}),_:1}),n(I,{"on-close":h,"is-open":c(l),"cert-data":c(t)},null,8,["is-open","cert-data"])],64)}}};export{ae as default};