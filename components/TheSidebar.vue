<script setup>
const headers = ["Section 1", "Sections 2", "Section 3", "Section 4"];

const props = defineProps({
  isSidebarVisible: Boolean,
});
const trans = (i) => {
  return "Section" + (i + 1);
};
const route = useRoute();
const router = useRouter();
</script>

<template>
  <!-- route.fullPath === '/#' + index, -->
  <main class="grid grid-cols-6 gap-2 pt-8">
    <Transition mode="out-in" :duration="400" name="fade">
      <aside v-if="isSidebarVisible" class="invisible md:visible w-full">
        <!-- <div class="sticky top-3 left-0 z-0 opacity-50">
            <div
              class="z-0 absolute border-t-[75px] opacity-60 border-t-transparent border-l-[155px] dark:border-l-blue-900 border-l-blue-300 border-b-[100px] border-b-transparent"></div>
            </div>

            <div
              class="z-0 mt-5 absolute border-t-[75px] opacity-80 border-t-transparent border-l-[155px] dark:border-l-blue-900 border-l-blue-300 border-b-[100px] border-b-transparent">
            </div>
            <div
              class="z-0 mt-10 absolute border-t-[75px] opacity-60 border-t-transparent border-l-[155px] dark:border-l-blue-900 border-l-blue-300 border-b-[100px] border-b-transparent">
            </div>
          </div> -->
        <div class="sticky top-3 left-0 z-0 opacity-50">
          <div
            class="z-0 absolute border-t-[75px] opacity-60 border-t-transparent border-l-[155px] dark:border-l-blue-900 border-l-blue-300 border-b-[100px] border-b-transparent"
          ></div>
          <div
            class="z-0 mt-5 absolute border-t-[75px] opacity-80 border-t-transparent border-l-[155px] dark:border-l-blue-900 border-l-blue-300 border-b-[100px] border-b-transparent"
          ></div>
          <div
            class="z-0 mt-10 absolute border-t-[75px] opacity-60 border-t-transparent border-l-[155px] dark:border-l-blue-900 border-l-blue-300 border-b-[100px] border-b-transparent"
          ></div>
        </div>
        <div class="sticky bg-opacity-70 rounded-l-lg top-5 left-0 pr-2 py-6">
          <div class="z-40">
            <NuxtLink
              v-for="(header, index) in headers"
              :key="header"
              :to="'/#' + index"
              class="block z-30 pl-2 m-1 w-fit dark:text-white text-blue-800 no-underline tracking-tight transition ease-in-out delay-150 hover:scale-110 dark:hover:text-blue-500 hover:text-blue-700 duration-300"
              :class="{
                'border-blue-500 border-b-2 rounded-l-xl  border-solid':
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
