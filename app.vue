<script setup lang="ts">
const nuxtApp = useNuxtApp();
const loading = ref(false);

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

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
