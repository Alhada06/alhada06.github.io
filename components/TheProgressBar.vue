<script setup>
const props = defineProps({
  limit: Number,
});

const percentage = ref(0);
const percent = computed(() => percentage.value.toFixed());

let timer = setInterval(() => {
  if (percentage.value < props.limit) {
    percentage.value += 0.1;
  } else {
    clearInterval(timer);
  }
}, 10);
</script>

<template>
  <div class="container flex items-center flex-row">
    <div
      class="w-full bg-transparent border-bgbluelighter rounded-sm border-b-2 border-r-2 h-5 overflow-hidden"
    >
      <div
        class="h-5 z-10 relative bg-blue-700 overflow-hidden"
        :style="{ width: percentage + '%' }"
      >
        <div
          class="absolute bg-gradient-to-l from-white animate-ripple ease-linear"
        ></div>
      </div>
    </div>
    <div class="pl-2 justify-center">{{ percent }}%</div>
  </div>
</template>
