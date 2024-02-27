<script setup lang="ts">
const props = defineProps({
  limit: { type: Number, required: true },
});

const percentage = ref<number>(0);
const percent = computed<string>(() => percentage.value.toFixed());
onNuxtReady(() => {
  const timer = setInterval(() => {
    if (percentage.value < props.limit) {
      percentage.value += 0.1;
    } else {
      clearInterval(timer);
    }
  }, 10);
});
</script>

<template>
  <div class="container flex flex-row items-center">
    <div
      class="h-5 w-full overflow-hidden rounded-sm border-b-2 border-r-2 border-slate-300 bg-transparent dark:border-bgbluelighter"
    >
      <div
        class="relative z-10 h-5 overflow-hidden bg-blue-700"
        :style="{ width: percentage + '%' }"
      >
        <div
          class="absolute animate-ripple bg-gradient-to-l from-white ease-linear"
        ></div>
      </div>
    </div>
    <div class="justify-center pl-2 text-blue-900 dark:text-white">
      {{ percent }}%
    </div>
  </div>
</template>
