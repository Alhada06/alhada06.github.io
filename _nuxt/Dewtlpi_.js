import{m as a,r as o,n,p as d,R as i,o as u,c,a as e,t as f,u as p}from"./BuhryD33.js";import{s as m}from"./YnkbOoCT.js";const v={class:"fixed left-0 top-0 h-full w-full"},x={class:"relative z-10 flex h-full items-center justify-center"},_={class:"absolute inset-0 z-20 flex h-full items-center justify-center pl-2 text-5xl text-blue-800 dark:text-slate-100"},y=a({__name:"index",setup(b){const t=o(0),l=n(()=>t.value.toFixed());return d(()=>{const s=m(()=>{t.value<100?t.value+=.5:setTimeout(()=>(clearInterval(s),i("/")),1)},3)}),(s,r)=>(u(),c("div",null,[e("div",v,[e("div",x,[e("div",_,f(p(l))+"% ",1),r[0]||(r[0]=e("div",{class:"loader h-64 w-64 rounded-full border-8 border-t-8 border-slate-400/50 border-t-blue-800 ease-linear dark:border-slate-100/70 dark:border-t-blue-800"},null,-1))])])]))}});export{y as default};
