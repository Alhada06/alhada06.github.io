<script setup lang="ts">
const headers: string[] = [
  "Section 1",
  "Section 2",
  "Section 3",
  "Section 4",
  "Section 5",
];
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const route = useRoute();
</script>

<template>
  <nav
    class="fixed left-0 right-0 top-0 z-20 bg-slate-100 text-blue-800 shadow shadow-blue-900/10 dark:bg-bgblue dark:text-white dark:shadow dark:shadow-white/20 md:relative md:bg-transparent md:shadow-transparent dark:md:bg-transparent dark:lg:md:shadow-none lg:md:shadow-none"
  >
    <div
      class="mx-auto mb-2 mt-2 flex h-8 items-center justify-end bg-transparent px-2 py-3"
    >
      <!-- <a class="text-2xl hover:text-cyan-500 transition-colors cursor-pointer">Logo</a> -->

      <ul class="flex items-center gap-1 pr-1 md:gap-5">
        <div class="flex flex-wrap justify-evenly">
          <li v-for="(header, index) in headers" :key="header">
            <NuxtLink
              :to="'/#' + index"
              class="m-1 block pl-2 text-xs tracking-tighter text-blue-800 outline-offset-2 outline-blue-400 transition delay-150 duration-300 ease-in-out hover:scale-110 hover:text-blue-700 dark:text-white dark:hover:text-blue-500 md:text-base"
              :class="{
                'underline decoration-blue-500 decoration-solid decoration-1 underline-offset-4':
                  isIntersectingSection['Section' + (index + 1)],
              }"
            >
              {{ $t(header) }}</NuxtLink
            >
          </li>
        </div>
        <li class="hidden md:inline">
          <ClientOnly>
            <TheDarkMode />
          </ClientOnly>
        </li>
        <li class="hidden md:inline md:pt-1">
          <TheLocalSwitch />
        </li>
        <li class="pl-2 md:hidden">
          <TheHamburgerMenu />
        </li>
      </ul>
      <!-- dropdow menu component here  -->
    </div>
  </nav>
</template>
