import{an as r,_ as o}from"./entry.BMaFakYV.js";class u{constructor(){this.quantity=2}load(t){if(!t)return;const e=t.quantity;e!==void 0&&(this.quantity=r(e))}}async function s(a,t=!0){await a.addInteractor("externalRemove",async e=>{const{Remover:n}=await o(()=>import("./Remover.DMbJgvJ9.js"),__vite__mapDeps([0,1,2,3]),import.meta.url);return new n(e)},t)}export{u as Remove,s as loadExternalRemoveInteraction};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./Remover.DMbJgvJ9.js","./ExternalInteractorBase.CIi3zRdK.js","./entry.BMaFakYV.js","./entry.B5NZvM5p.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
