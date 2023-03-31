<script setup lang="ts">
const { locale, setLocaleCookie } = useI18n();
</script>

<template>
  <div>
    <form>
      <select
        v-model="locale"
        class="block rounded-lg border border-gray-300 bg-slate-100/80 text-sm text-blue-800 outline-blue-400 focus:border-blue-500 focus:ring-blue-500 dark:bg-bgblue/80 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        @change="setLocaleCookie(locale)"
      >
        <option value="en">EN</option>
        <option value="pt">PT</option>
      </select>
    </form>
  </div>
</template>
