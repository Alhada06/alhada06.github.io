<script setup>
const toggleDark = useToggle(isDark);
</script>
<template>
  <div>
    <button @click="toggleDark()" class="">
      <Transition mode="out-in" name="slide-up">
        <Icon v-if="!isDark" name="material-symbols:nights-stay-rounded" />
        <Icon v-else name="material-symbols:sunny-rounded" />
      </Transition>
    </button>
  </div>
</template>

<style>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.3s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
