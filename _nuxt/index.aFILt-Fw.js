import{_ as i}from"./entry.BqAYfT-z.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater.D6FH0xHJ.js"),__vite__mapDeps([0,1,2,3]),import.meta.url);return new r(e)},a)}export{d as loadLifeUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./LifeUpdater.D6FH0xHJ.js","./ValueWithRandom.DCZlcPx0.js","./entry.BqAYfT-z.js","./entry.JsNYjYE9.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
