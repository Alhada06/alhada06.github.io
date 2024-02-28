import{ar as r,_ as o}from"./entry.D_j1kZZ_.js";class u{constructor(){this.quantity=2}load(t){if(!t)return;const e=t.quantity;e!==void 0&&(this.quantity=r(e))}}async function s(a,t=!0){await a.addInteractor("externalRemove",async e=>{const{Remover:n}=await o(()=>import("./Remover.C8WJ_VkN.js"),__vite__mapDeps([0,1,2,3]),import.meta.url);return new n(e)},t)}export{u as Remove,s as loadExternalRemoveInteraction};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./Remover.C8WJ_VkN.js","./ExternalInteractorBase.CIi3zRdK.js","./entry.D_j1kZZ_.js","./entry.JsNYjYE9.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
