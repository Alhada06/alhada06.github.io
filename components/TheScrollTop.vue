<script setup>
const scrollT = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
</script>
<template>
  <div
    class="bottom-5 md:right-8 right-3 z-50 fixed text-blue-800 dark:text-white"
    @click="scrollT"
  >
    <Icon size="30px" name="ic:baseline-keyboard-arrow-up" />
  </div>
</template>
