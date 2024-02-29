import{_ as a}from"./entry.BMaFakYV.js";async function n(t,o=!0){await t.addInteractor("particlesCollisions",async r=>{const{Collider:i}=await a(()=>import("./Collider.D71_KPbL.js"),__vite__mapDeps([0,1,2,3]),import.meta.url);return new i(r)},o)}export{n as loadParticlesCollisionsInteraction};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./Collider.D71_KPbL.js","./entry.BMaFakYV.js","./entry.B5NZvM5p.css","./ParticlesInteractorBase.vfDeBun3.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
