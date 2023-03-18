<script setup lang="ts">
const nuxtApp = useNuxtApp();
const loading = ref(false);

nuxtApp.hook("app:mounted", () => {
  if (isFirstRender.value) {
    acessCount.value = +1;
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
  <!-- <TheLoadingScreen :is-loading="loading" @update:is-loading="($event) => (loading = $event)" /> -->

  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<style>
html.dark {
  color-scheme: dark;
}
</style>
