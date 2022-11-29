<script setup>
const { locale, setLocale, setLocaleCookie } = useI18n();
</script>

<template>
  <div>
    <form>
      <select
        class="dark:bg-bgblue/80 bg-slate-100/80 border border-gray-300 text-blue-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        @change="setLocaleCookie(locale)"
        v-model="locale"
      >
        <option value="en">EN</option>
        <option value="pt">PT</option>
      </select>
    </form>
  </div>
</template>
