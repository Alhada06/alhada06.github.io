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

let timer = setInterval(() => {
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
    <div class="top-0 fixed left-0 w-full h-full">
      <div class="flex relative justify-center items-center h-full z-10">
        <div
          class="flex absolute inset-0 justify-center pl-2 items-center h-full dark:text-slate-100 text-blue-800 text-5xl z-20"
        >
          {{ percent }}%
        </div>
        <div
          class="loader ease-linear rounded-full border-t-blue-800 dark:border-t-blue-800 border-8 border-t-8 dark:border-slate-100/70 border-slate-400/50 h-64 w-64"
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
