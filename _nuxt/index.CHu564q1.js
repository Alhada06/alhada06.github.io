import{ar as r,_ as n}from"./entry.ZFru8Y40.js";class a{constructor(){this.default=!0,this.groups=[],this.quantity=4}load(t){if(!t)return;t.default!==void 0&&(this.default=t.default),t.groups!==void 0&&(this.groups=t.groups.map(u=>u)),this.groups.length||(this.default=!0);const e=t.quantity;e!==void 0&&(this.quantity=r(e))}}async function o(i,t=!0){await i.addInteractor("externalPush",async e=>{const{Pusher:u}=await n(()=>import("./Pusher.C4S36_eT.js"),__vite__mapDeps([0,1,2,3]),import.meta.url);return new u(e)},t)}export{a as Push,o as loadExternalPushInteraction};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./Pusher.C4S36_eT.js","./ExternalInteractorBase.CIi3zRdK.js","./entry.ZFru8Y40.js","./entry.JsNYjYE9.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
