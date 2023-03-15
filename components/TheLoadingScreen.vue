<script setup>
const props = defineProps({
  isLoading: { type: Boolean, default: false },
});
const emit = defineEmits(["update:isLoading"]);

const percentage = ref(0);
const percent = computed(() => percentage.value.toFixed());

let timer = setInterval(() => {
  if (percentage.value < 100) {
    percentage.value += 0.1;
  } else {
    setTimeout(() => {
      emit("update:isLoading", false);
      clearInterval(timer);
    }, 2000);
  }
}, 3);
</script>

<template>
  <div v-if="isLoading"
    class="top-0 fixed left-0 w-full h-full z-50 dark:bg-bgblue bg-slate-100 text-blue-800 dark:text-white">
    <div class="flex justify-center items-center h-full text-5xl">{{ percent }}%</div>
  </div>
</template>
