import{_ as i}from"./entry.BMaFakYV.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater.D3SW7qJq.js"),__vite__mapDeps([0,1,2,3]),import.meta.url);return new r(e)},a)}export{d as loadLifeUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./LifeUpdater.D3SW7qJq.js","./ValueWithRandom.BT_7ODyG.js","./entry.BMaFakYV.js","./entry.B5NZvM5p.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
