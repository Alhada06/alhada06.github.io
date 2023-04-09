<script setup lang="ts">
const show = ref(false);
const toggleShow = useToggle(show);
</script>
<template>
  <div
    class="mt-1 bg-blue-800 py-4 text-white backdrop-grayscale hover:text-green-800"
    @click="toggleShow()"
  >
    teste sds
    <div v-if="show" class="bg-bgbluelighter text-red-300">testting</div>
  </div>
</template>
