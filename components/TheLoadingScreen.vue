<script setup>
const props = defineProps({
  isLoading: { type: Boolean, default: false },
});
const emit = defineEmits(["update:isLoading"]);

const percentage = ref(0);
const percent = computed(() => percentage.value.toFixed());

const timer = setInterval(() => {
  if (percentage.value < 100) {
    percentage.value += 0.1;
  } else {
    setTimeout(() => {
      emit("update:isLoading", false);
      clearInterval(timer);
    }, 1000);
  }
}, 3);
</script>

<template>
  <Transition mode="in-out" :duration="500" name="fade">
    <div
      v-if="props.isLoading"
      class="fixed left-0 top-0 z-50 h-full w-full bg-slate-100 text-blue-800 dark:bg-bgblue dark:text-white"
    >
      <div class="flex h-full items-center justify-center text-5xl">
        {{ percent }}%
      </div>
    </div>
  </Transition>
</template>
<style scoped>
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
