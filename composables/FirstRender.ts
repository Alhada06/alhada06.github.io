import { useSessionStorage } from "@vueuse/core";

export const isFirstRender = useSessionStorage("firstRender", true, {
  mergeDefaults: true,
});
