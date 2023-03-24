<script setup lang="ts">
const { x, y, isScrolling, arrivedState, directions } = useScroll(window, {
  behavior: "smooth",
});
const { left, right, top, bottom } = toRefs(arrivedState);
const {
  left: toLeft,
  right: toRight,
  top: toTop,
  bottom: toBottom,
} = toRefs(directions);
// const scrollPrecent = computed(() => {
//   return parseInt(
//     (y.value * 100) /
//       (document.documentElement.scrollHeight - window.innerHeight)
//   );
// });

const scrollPrecent = computed<number>((): number => {
  return (
    (y.value * 100) /
    (document.documentElement.scrollHeight - window.innerHeight)
  );
});
const isScrollingToTop = ref(false);
const scrollT = () => {
  isScrollingToTop.value = true;
  setTimeout(
    () =>
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      }),
    400
  );
};
watch(scrollPrecent, (newVal, oldVal) => {
  if (newVal === 0) {
    isScrollingToTop.value = false;
  }
});
</script>
<template>
  <!-- <div class="fixed top-9 right-6 text-red-600">
    {{ scrollPrecent }}
    <p>{{ toTop }}</p>
    <p>{{ isScrollingToTop }}</p>
  </div> -->
  <div
    v-if="scrollPrecent >= 25"
    class="bottom-5 md:right-8 right-3 z-40 fixed text-blue-800 dark:text-white"
    @click="scrollT"
  >
    <Icon
      v-if="isScrollingToTop"
      size="30px"
      name="line-md:chevron-small-triple-up"
    />
    <Icon v-else size="30px" name="ic:baseline-keyboard-arrow-up" />
  </div>
</template>
