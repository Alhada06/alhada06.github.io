import{_ as r}from"./entry.D_j1kZZ_.js";async function e(a,o=!0){const{PolygonDrawer:t}=await r(()=>import("./PolygonDrawer.DohnyzpW.js"),__vite__mapDeps([0,1,2,3]),import.meta.url);await a.addShape("polygon",new t,o)}async function i(a,o=!0){const{TriangleDrawer:t}=await r(()=>import("./TriangleDrawer.C-WQZsi8.js"),__vite__mapDeps([4,1,2,3]),import.meta.url);await a.addShape("triangle",new t,o)}async function l(a,o=!0){await e(a,o),await i(a,o)}export{e as loadGenericPolygonShape,l as loadPolygonShape,i as loadTriangleShape};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./PolygonDrawer.DohnyzpW.js","./PolygonDrawerBase.CueReVFr.js","./entry.D_j1kZZ_.js","./entry.JsNYjYE9.css","./TriangleDrawer.C-WQZsi8.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
