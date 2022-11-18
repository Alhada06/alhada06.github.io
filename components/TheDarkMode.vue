<script setup>
const toggleDark = useToggle(isDark);
</script>
<template>
  <div>
    <button @click="toggleDark()" class="">
      <Icon v-if="!isDark" name="material-symbols:nights-stay-rounded" />
      <Icon v-else name="material-symbols:sunny-rounded" />
    </button>
  </div>
</template>
