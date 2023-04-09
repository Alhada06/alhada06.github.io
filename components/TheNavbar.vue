<script setup lang="ts">
const headers: string[] = ["Section 1", "Sections 2", "Section 3", "Section 4"];
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const route = useRoute();
</script>

<template>
  <nav
    class="fixed left-0 right-0 top-0 z-20 bg-slate-100/80 text-blue-800 dark:bg-bgblue/80 dark:text-white dark:shadow md:relative md:bg-inherit"
  >
    <div class="mx-auto mb-2 flex h-8 items-center justify-end px-2 py-3">
      <!-- <a class="text-2xl hover:text-cyan-500 transition-colors cursor-pointer">Logo</a> -->

      <ul class="flex items-center gap-1 pr-3 md:gap-5">
        <li v-for="(header, index) in headers" :key="header">
          <NuxtLink
            :to="'/#' + index"
            class="m-1 block pl-2 text-xs tracking-tight text-blue-800 no-underline outline-offset-2 outline-blue-400 transition delay-150 duration-300 ease-in-out hover:scale-110 hover:text-blue-700 dark:text-white dark:outline-red-500 dark:hover:text-blue-500 md:text-base"
            :class="{
              'rounded-l-xl border-b-2 border-solid  border-blue-500':
                isIntersectingSection['Section' + (index + 1)],
            }"
          >
            {{ header }}</NuxtLink
          >
        </li>
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
