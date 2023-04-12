<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<script setup lang="ts">
const { y, arrivedState, directions } = useScroll(window, {
  behavior: "smooth",
});
// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
watch(scrollPrecent, (newVal, _oldVal) => {
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
    class="fixed bottom-5 right-3 z-40 text-blue-800 dark:text-white md:right-8"
    @click="scrollT"
  >
    <button
      type="button"
      class="rounded-lg bg-transparent outline-transparent transition delay-100 duration-100 ease-in-out hover:scale-125"
    >
      <Icon
        v-if="isScrollingToTop"
        size="30px"
        name="line-md:chevron-small-triple-up"
      />
      <Icon v-else size="30px" name="ic:baseline-keyboard-arrow-up" />
    </button>
  </div>
</template>
