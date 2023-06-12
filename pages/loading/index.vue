<script setup lang="ts">
definePageMeta({
  layout: "backgound",
});
// setTimeout(() => {
//     return navigateTo("/");
// }, 2000);
// let sessionData =
//     typeof window !== "undefined" ? localStorage.getItem("firstRender") : null;

const percentage = ref<number>(0);
const percent = computed<string>(() => percentage.value.toFixed());

const timer = setInterval(() => {
  if (percentage.value < 100) {
    percentage.value += 0.1;
  } else {
    setTimeout(() => {
      clearInterval(timer);
      return navigateTo("/");
    }, 1000);
  }
}, 3);
</script>

<template>
  <div>
    <div class="fixed left-0 top-0 h-full w-full">
      <div class="relative z-10 flex h-full items-center justify-center">
        <div
          class="absolute inset-0 z-20 flex h-full items-center justify-center pl-2 text-5xl text-blue-800 dark:text-slate-100"
        >
          {{ percent }}%
        </div>
        <div
          class="loader h-64 w-64 rounded-full border-8 border-t-8 border-slate-400/50 border-t-blue-800 ease-linear dark:border-slate-100/70 dark:border-t-blue-800"
        ></div>
      </div>
    </div>
  </div>
</template>
<style>
.loader {
  -webkit-animation: spinner 1.5s infinite;
  animation: spinner 1.5s infinite;
}

@-webkit-keyframes spinner {
  to {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spinner {
  to {
    transform: rotate(360deg);
  }
}
</style>
