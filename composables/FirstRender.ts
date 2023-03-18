import { useSessionStorage, useStorageAsync } from '@vueuse/core'


export const isFirstRender = useSessionStorage("firstRender", true,{mergeDefaults:true});
export const acessCount=useSessionStorage("acessCount", 0,{mergeDefaults:true});