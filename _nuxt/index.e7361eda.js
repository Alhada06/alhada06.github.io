import{a as r,r as a,e as n,S as o,f as d,s as e,v as i,u as c,o as u}from"./entry.338d078f.js";const _={class:"fixed left-0 top-0 h-full w-full"},f={class:"relative z-10 flex h-full items-center justify-center"},v={class:"absolute inset-0 z-20 flex h-full items-center justify-center pl-2 text-5xl text-blue-800 dark:text-slate-100"},p=e("div",{class:"loader h-64 w-64 rounded-full border-8 border-t-8 border-slate-400/50 border-t-blue-800 ease-linear dark:border-slate-100/70 dark:border-t-blue-800"},null,-1),k=r({__name:"index",setup(x){const t=a(0),s=n(()=>t.value.toFixed()),l=setInterval(()=>{t.value<100?t.value+=.1:setTimeout(()=>(clearInterval(l),o("/")),1e3)},3);return(m,b)=>(u(),d("div",null,[e("div",_,[e("div",f,[e("div",v,i(c(s))+"% ",1),p])])]))}});export{k as default};
