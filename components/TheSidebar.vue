<script setup lang="ts">
const headers: string[] = ["Section 1", "Sections 2", "Section 3", "Section 4"];

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
      <aside v-if="props.isSidebarVisible" class="invisible w-full md:visible">
        <div class="sticky top-2 left-0 z-0 opacity-50">
          <div
            class="absolute z-0 border-t-[75px] border-l-[155px] border-b-[100px] border-t-transparent border-l-blue-300 border-b-transparent opacity-60 dark:border-l-blue-900"
          ></div>
          <div
            class="absolute z-0 mt-5 border-t-[75px] border-l-[155px] border-b-[100px] border-t-transparent border-l-blue-300 border-b-transparent opacity-80 dark:border-l-blue-900"
          ></div>
          <div
            class="absolute z-0 mt-10 border-t-[75px] border-l-[155px] border-b-[100px] border-t-transparent border-l-blue-300 border-b-transparent opacity-60 dark:border-l-blue-900"
          ></div>
        </div>
        <div class="sticky top-5 left-0 rounded-l-lg bg-opacity-70 py-6 pr-2">
          <div class="z-40">
            <NuxtLink
              v-for="(header, index) in headers"
              :key="header"
              :to="'/#' + index"
              class="z-30 m-1 block w-fit pl-2 tracking-tight text-blue-800 no-underline transition delay-150 duration-300 ease-in-out hover:scale-110 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
              :class="{
                'rounded-l-xl border-b-2 border-solid  border-blue-500':
                  isIntersectingSection['Section' + (index + 1)],
              }"
            >
              {{ header }}</NuxtLink
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
