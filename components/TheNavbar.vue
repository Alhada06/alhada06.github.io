<script setup>
const headers = ["section 1", "sections 2", "section 3", "section 4"];
const route = useRoute();
</script>

<template>
  <nav
    class="shadow md:bg-inherit bg-bgblue/80 z-20 fixed top-0 left-0 right-0 md:relative text-white"
  >
    <div class="h-8 py-3 mb-2 mx-auto px-5 flex items-center justify-end">
      <!-- <a class="text-2xl hover:text-cyan-500 transition-colors cursor-pointer">Logo</a> -->

      <ul
        class="flex items-center gap-5"
        v-for="(header, index) in headers"
        :key="header"
      >
        <li>
          <NuxtLink
            :to="'/#' + index"
            class="block pl-2 m-1 text-white no-underline"
            :class="{
              'border-blue-500 border-b-2 rounded-l-xl  border-solid':
                route.fullPath === '/#' + index,
            }"
          >
            {{ header }}</NuxtLink
          >
        </li>
      </ul>
    </div>
  </nav>
</template>
