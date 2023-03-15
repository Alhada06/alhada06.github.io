<script setup lang="ts">
const nuxtApp = useNuxtApp();
const loading = ref(false);
const isFirstRender = useSessionStorage("firstRender", true);
nuxtApp.hook("app:mounted", () => {
  if (isFirstRender.value) {
    loading.value = true;
  }

  console.log("page mount");
});

nuxtApp.hook("page:finish", () => {
  if (isFirstRender.value) {
    // loading.value = false;
    isFirstRender.value = false;
  }
  console.log("page finished");
});
</script>

<template>
  <!-- <div v-if="loading" class="fixed left-0 top-10 h-2 w-full z-50 bg-red-500">
                                      Loading{{ loading }}-- {{ isFirstRender }}
                                    </div> -->
  <TheLoadingScreen :is-loading="loading" @update:is-loading="($event) => (loading = $event)" />
  <NuxtLayout>
    <!-- <div>
                                                                                        <div class="text-blue-300">
                                                                                          hello from new start with tailwind installed changes made does it work?
                                                                                        </div>
                                                                                        <div class="text-white bg-blue-500">works or not ?</div>
                                                                                        <div class="text-red-900 bg-emerald-500">stil works???</div>
                                                                                      </div> -->

    <NuxtPage />
  </NuxtLayout>
</template>
<style>
html.dark {
  color-scheme: dark;
}
</style>
