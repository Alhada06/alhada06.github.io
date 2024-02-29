import Particles from "@tsparticles/vue3";
import { loadFull } from "tsparticles";
import { loadSlim } from "@tsparticles/slim";
export default defineNuxtPlugin((nuxtApp) => {
  // Doing something with nuxtApp
  nuxtApp.vueApp.use(Particles, {
    init: async (engine) => {
      await loadSlim(engine);
    },
  });
});
