import{_ as i}from"./entry.D_j1kZZ_.js";async function d(t,a=!0){await t.addParticleUpdater("tilt",async r=>{const{TiltUpdater:e}=await i(()=>import("./TiltUpdater.B4mHtoAe.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url);return new e(r)},a)}export{d as loadTiltUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./TiltUpdater.B4mHtoAe.js","./entry.D_j1kZZ_.js","./entry.JsNYjYE9.css","./ValueWithRandom.HXkctUNa.js","./AnimationOptions.AlfZpv1f.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
