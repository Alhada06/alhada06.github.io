<script setup lang="ts">
const headers: string[] = [
  "Section 1",
  "Section 2",
  "Section 3",
  "Section 4",
  "Section 5",
];

const props = defineProps({
  isSidebarVisible: Boolean,
});
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const trans = (i: number): string => {
  return "Section" + (i + 1);
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const route = useRoute();
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const router = useRouter();
</script>

<template>
  <!-- route.fullPath === '/#' + index, -->
  <main class="grid grid-cols-6 gap-2 pt-8">
    <Transition mode="out-in" :duration="400" name="fade">
      <aside v-if="props.isSidebarVisible" class="invisible w-5/6 md:visible">
        <div class="sticky left-0 z-0 opacity-50 md:top-10 xl:top-5 2xl:top-2">
          <div
            class="absolute z-0 border-b-[100px] border-l-[155px] border-t-[75px] border-b-transparent border-l-blue-300 border-t-transparent opacity-60 dark:border-l-blue-900"
          ></div>
          <div
            class="absolute z-0 mt-5 border-b-[100px] border-l-[155px] border-t-[75px] border-b-transparent border-l-blue-300 border-t-transparent opacity-80 dark:border-l-blue-900"
          ></div>
          <div
            class="absolute z-0 mt-10 border-b-[100px] border-l-[155px] border-t-[75px] border-b-transparent border-l-blue-300 border-t-transparent opacity-60 dark:border-l-blue-900"
          ></div>
        </div>
        <div
          class="sticky left-0 top-5 mt-3 w-3/6 rounded-r-2xl bg-blue-200 bg-opacity-50 py-6 pr-2 dark:bg-blue-800/25"
        >
          <div class="z-40">
            <NuxtLink
              v-for="(header, index) in headers"
              :key="header"
              :to="'/#' + index"
              class="z-30 m-1 block w-fit pl-2 text-sm tracking-tight text-blue-800 transition delay-150 duration-300 ease-in-out hover:scale-110 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
              :class="{
                'underline decoration-blue-500 decoration-solid decoration-1 underline-offset-8':
                  isIntersectingSection['Section' + (index + 1)],
              }"
            >
              {{ $t(header) }}</NuxtLink
            >
          </div>
        </div>
      </aside>

      <div v-else class="w-1/12 md:w-1/6"></div>
    </Transition>
    <div class="col-start-1 col-end-7 md:col-start-2 md:col-end-6">
      <slot />
    </div>
  </main>
</template>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
