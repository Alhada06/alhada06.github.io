import{an as n,_ as r}from"./entry.BqAYfT-z.js";class a{constructor(){this.default=!0,this.groups=[],this.quantity=4}load(t){if(!t)return;t.default!==void 0&&(this.default=t.default),t.groups!==void 0&&(this.groups=t.groups.map(u=>u)),this.groups.length||(this.default=!0);const e=t.quantity;e!==void 0&&(this.quantity=n(e))}}async function o(i,t=!0){await i.addInteractor("externalPush",async e=>{const{Pusher:u}=await r(()=>import("./Pusher.Cc7k6H9F.js"),__vite__mapDeps([0,1,2,3]),import.meta.url);return new u(e)},t)}export{a as Push,o as loadExternalPushInteraction};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./Pusher.Cc7k6H9F.js","./entry.BqAYfT-z.js","./entry.JsNYjYE9.css","./ExternalInteractorBase.CIi3zRdK.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
