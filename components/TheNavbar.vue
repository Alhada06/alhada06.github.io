<script setup>
const headers = ["Section 1", "Sections 2", "Section 3", "Section 4"];
const route = useRoute();
</script>

<template>
  <nav
    class="dark:shadow md:bg-inherit dark:bg-bgblue/80 z-20 bg-slate-100/80 fixed top-0 left-0 right-0 md:relative dark:text-white text-blue-800">
    <div class="h-8 py-3 mb-2 mx-auto px-2 flex items-center justify-end">
      <!-- <a class="text-2xl hover:text-cyan-500 transition-colors cursor-pointer">Logo</a> -->

      <ul class="flex items-center gap-1 pr-3 md:gap-5">
        <li v-for="(header, index) in headers" :key="header">
          <NuxtLink :to="'/#' + index"
            class="block pl-2 m-1 dark:text-white outline-blue-400 dark:outline-red-500 outline-offset-2 tracking-tight text-xs md:text-base text-blue-800 no-underline transition ease-in-out delay-150 hover:scale-110 dark:hover:text-blue-500 hover:text-blue-700 duration-300"
            :class="{
              'border-blue-500 border-b-2 rounded-l-xl  border-solid':
                isIntersectingSection['Section' + (index + 1)],
            }">
            {{ header }}</NuxtLink>
        </li>
        <li class="hidden md:inline">
          <ClientOnly>
            <TheDarkMode />
          </ClientOnly>
        </li>
        <li class="hidden md:inline">
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
