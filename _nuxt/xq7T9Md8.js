import j from"./DxRljdoW.js";import{V as q,J as H,G as O,W as S,u as v}from"./rtzYc5Vd.js";import{J as x,o as d,K as $,w as r,a as l,b as a,d as y,t as C,r as k,s as z,v as A,c as w,F as D,x as F,u as c,A as G}from"./Bi0ayqME.js";import"./BGxE3slE.js";import"./DlAUqK2U.js";import"./f4jZA5oh.js";import"./CN8cKKFf.js";import"./56zaVz4N.js";import"./B_q1udBE.js";const J={class:"fixed inset-0 z-10 overflow-y-auto"},N={class:"flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0"},U={class:"flex flex-row-reverse"},M={class:"rounded-md"},W={__name:"TheCertsModal",props:{isOpen:{type:Boolean,required:!0},onClose:{type:Function,required:!0},certData:{type:Object,required:!0}},setup(f){const e=f;return(u,o)=>{const p=j,m=q,t=x("TwicImg"),_=H,h=O,s=S;return d(),$(s,{open:e.isOpen,class:"relative z-50",onClose:e.onClose},{default:r(()=>[o[1]||(o[1]=l("div",{class:"fixed inset-0 bg-black/90 bg-opacity-75 transition-opacity","aria-hidden":"true"},null,-1)),l("div",J,[l("div",N,[a(h,{class:"w-11/12 max-w-xs rounded bg-white p-3 align-top dark:bg-bgbluelighter md:max-w-xl lg:md:h-3/6 2xl:max-w-4xl"},{default:r(()=>[l("div",U,[l("button",{type:"button",class:"ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-base text-blue-900 outline-none outline-transparent transition delay-100 duration-100 ease-in-out hover:scale-125 hover:text-blue-700 focus:outline-none dark:text-gray-400 dark:hover:text-white",onClick:o[0]||(o[0]=(...n)=>e.onClose&&e.onClose(...n))},[a(p,{name:"ic:baseline-close",size:"18px"})])]),a(m,{class:"m-1 pb-1 text-center align-top text-xl text-blue-900 shadow-red-500 drop-shadow-xl dark:text-white"},{default:r(()=>{var n;return[y(C((n=e.certData)==null?void 0:n.title),1)]}),_:1}),l("div",M,[a(t,{class:"rounded-md drop-shadow-xl dark:shadow-white",src:e.certData.url,ratio:"4/3",mode:"contain"},null,8,["src"])]),a(_,{class:"m-1 p-2 text-justify text-base text-blue-900 dark:text-white"},{default:r(()=>{var n;return[y(C((n=e.certData)==null?void 0:n.description),1)]}),_:1})]),_:1})])])]),_:1},8,["open","onClose"])}}},E={class:"flex w-full flex-wrap justify-around p-1"},K=["onClick"],se={__name:"TheCerts",async setup(f){let e,u;const o=k(!1),{locale:p}=z(),{data:m}=([e,u]=A(()=>G("certificateCollectionQuery",{locale:p})),e=await e,u(),e),t=k({title:"",description:"",url:""}),_=s=>{t.value.title=s.title,t.value.description=s.description,t.value.url=v(s.url),o.value=!0},h=()=>{o.value=!1,t.value.title="",t.value.description="",t.value.url=""};return(s,n)=>{const T=x("TwicImg"),V=x("TwicView"),I=W;return d(),w(D,null,[a(V,null,{default:r(()=>{var g,b;return[l("div",E,[(d(!0),w(D,null,F((b=(g=c(m))==null?void 0:g.certificateCollection)==null?void 0:b.items,(i,B)=>(d(),w("div",{key:B,class:"m-2 h-24 w-24 cursor-pointer rounded border-slate-300 bg-slate-300/50 p-1 shadow shadow-blue-900/50 drop-shadow-md transition duration-150 ease-in-out will-change-auto hover:scale-105 dark:bg-bgbluelighter dark:shadow-white/20 md:h-40 md:w-40 lg:h-48 lg:w-48",onClick:L=>_({title:i.name,description:i.description,url:i.image.url})},[a(T,{class:"rounded",src:("useShortUrl"in s?s.useShortUrl:c(v))(i.image.url)},null,8,["src"])],8,K))),128))])]}),_:1}),a(I,{"on-close":h,"is-open":c(o),"cert-data":c(t)},null,8,["is-open","cert-data"])],64)}}};export{se as default};
