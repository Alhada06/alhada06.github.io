import{_ as e}from"./entry.D_j1kZZ_.js";import{O as r}from"./OptionsColor.DYk-c9OQ.js";class s{constructor(){this.blink=!1,this.consent=!1,this.opacity=1}load(i){i&&(i.blink!==void 0&&(this.blink=i.blink),i.color!==void 0&&(this.color=r.create(this.color,i.color)),i.consent!==void 0&&(this.consent=i.consent),i.opacity!==void 0&&(this.opacity=i.opacity))}}class f{constructor(){this.distance=100,this.links=new s}load(i){i&&(i.distance!==void 0&&(this.distance=i.distance),this.links.load(i.links))}}async function a(n,i=!0){await n.addInteractor("externalGrab",async t=>{const{Grabber:o}=await e(()=>import("./Grabber.Ce7S0p0x.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url);return new o(t)},i)}export{f as Grab,s as GrabLinks,a as loadExternalGrabInteraction};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./Grabber.Ce7S0p0x.js","./CanvasUtils.BQlZpwZb.js","./entry.D_j1kZZ_.js","./entry.JsNYjYE9.css","./ExternalInteractorBase.CIi3zRdK.js","./OptionsColor.DYk-c9OQ.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
