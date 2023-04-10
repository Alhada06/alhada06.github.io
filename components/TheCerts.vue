<script setup>
const show = ref(true);
</script>

<template>
  <div class="m-2 flex flex-wrap p-3">
    <div
      class="m-2 h-48 w-48 bg-slate-200 p-1"
      @click="() => (show = true)"
    ></div>
    <div class="m-2 h-48 w-48 bg-slate-200 p-1"></div>
    <div class="m-2 h-48 w-48 bg-slate-200 p-1"></div>
    <div class="m-2 h-48 w-48 bg-slate-200 p-1"></div>
    <div class="m-2 h-48 w-48 bg-slate-200 p-1"></div>
    <div class="m-2 h-48 w-48 bg-slate-200 p-1"></div>
    <div class="m-2 h-48 w-48 bg-slate-200 p-1"></div>
    <div class="m-2 h-48 w-48 bg-slate-200 p-1"></div>
    <div class="m-2 h-48 w-48 bg-slate-200 p-1"></div>
    <div class="m-2 h-48 w-48 bg-slate-200 p-1"></div>
    <TheModal :on-close="() => (show = false)" :show="show" />
  </div>
</template>
