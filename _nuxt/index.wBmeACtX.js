import{ar as r,_ as o}from"./entry.ZFru8Y40.js";class u{constructor(){this.quantity=2}load(t){if(!t)return;const e=t.quantity;e!==void 0&&(this.quantity=r(e))}}async function s(a,t=!0){await a.addInteractor("externalRemove",async e=>{const{Remover:n}=await o(()=>import("./Remover.eKY8zXri.js"),__vite__mapDeps([0,1,2,3]),import.meta.url);return new n(e)},t)}export{u as Remove,s as loadExternalRemoveInteraction};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./Remover.eKY8zXri.js","./ExternalInteractorBase.CIi3zRdK.js","./entry.ZFru8Y40.js","./entry.JsNYjYE9.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
