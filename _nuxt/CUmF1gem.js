import j from"./D2f1JCDO.js";import{V as q,J as z,G as H,W as O,u as v}from"./DeueX0-x.js";import{L as x,o as d,M as S,w as r,a,b as n,d as y,t as C,r as k,x as $,y as F,c as w,F as D,z as G,v as c,C as M}from"./ZR4vz2MB.js";import"./DqG2YTMa.js";import"./DlAUqK2U.js";import"./x_rD_Ya3.js";import"./Bel9pZc-.js";import"./CxeTAZ_5.js";import"./DFQ-N1NP.js";const N=a("div",{class:"fixed inset-0 bg-black/90 bg-opacity-75 transition-opacity","aria-hidden":"true"},null,-1),U={class:"fixed inset-0 z-10 overflow-y-auto"},A={class:"flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0"},J={class:"flex flex-row-reverse"},L={class:"rounded-md"},W={__name:"TheCertsModal",props:{isOpen:{type:Boolean,required:!0},onClose:{type:Function,required:!0},certData:{type:Object,required:!0}},setup(f){const e=f;return(u,l)=>{const p=j,m=q,t=x("TwicImg"),_=z,h=H,o=O;return d(),S(o,{open:e.isOpen,class:"relative z-50",onClose:e.onClose},{default:r(()=>[N,a("div",U,[a("div",A,[n(h,{class:"w-11/12 max-w-xs rounded bg-white p-3 align-top dark:bg-bgbluelighter md:max-w-xl lg:md:h-3/6 2xl:max-w-4xl"},{default:r(()=>[a("div",J,[a("button",{type:"button",class:"ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-base text-blue-900 outline-none outline-transparent transition delay-100 duration-100 ease-in-out hover:scale-125 hover:text-blue-700 focus:outline-none dark:text-gray-400 dark:hover:text-white",onClick:l[0]||(l[0]=(...s)=>e.onClose&&e.onClose(...s))},[n(p,{name:"ic:baseline-close",size:"18px"})])]),n(m,{class:"m-1 pb-1 text-center align-top text-xl text-blue-900 shadow-red-500 drop-shadow-xl dark:text-white"},{default:r(()=>{var s;return[y(C((s=e.certData)==null?void 0:s.title),1)]}),_:1}),a("div",L,[n(t,{class:"rounded-md drop-shadow-xl dark:shadow-white",src:e.certData.url,ratio:"4/3"},null,8,["src"])]),n(_,{class:"m-1 p-2 text-justify text-base text-blue-900 dark:text-white"},{default:r(()=>{var s;return[y(C((s=e.certData)==null?void 0:s.description),1)]}),_:1})]),_:1})])])]),_:1},8,["open","onClose"])}}},E={class:"flex w-full flex-wrap justify-around p-1"},P=["onClick"],ne={__name:"TheCerts",async setup(f){let e,u;const l=k(!1),{locale:p}=$(),{data:m}=([e,u]=F(()=>M("certificateCollectionQuery",{locale:p})),e=await e,u(),e),t=k({title:"",description:"",url:""}),_=o=>{t.value.title=o.title,t.value.description=o.description,t.value.url=v(o.url),l.value=!0},h=()=>{l.value=!1,t.value.title="",t.value.description="",t.value.url=""};return(o,s)=>{const T=x("TwicImg"),V=x("TwicView"),I=W;return d(),w(D,null,[n(V,null,{default:r(()=>{var g,b;return[a("div",E,[(d(!0),w(D,null,G((b=(g=c(m))==null?void 0:g.certificateCollection)==null?void 0:b.items,(i,B)=>(d(),w("div",{key:B,class:"m-2 h-24 w-24 cursor-pointer rounded border-slate-300 bg-slate-300/50 p-1 shadow shadow-blue-900/50 drop-shadow-md transition duration-150 ease-in-out will-change-auto hover:scale-105 dark:bg-bgbluelighter dark:shadow-white/20 md:h-40 md:w-40 lg:h-48 lg:w-48",onClick:Q=>_({title:i.name,description:i.description,url:i.image.url})},[n(T,{class:"rounded",src:("useShortUrl"in o?o.useShortUrl:c(v))(i.image.url)},null,8,["src"])],8,P))),128))])]}),_:1}),n(I,{"on-close":h,"is-open":c(l),"cert-data":c(t)},null,8,["is-open","cert-data"])],64)}}};export{ne as default};
