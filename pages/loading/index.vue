<script setup>
definePageMeta({
    layout: "backgound",
});
setTimeout(() => {
    return navigateTo("/");
}, 2000);
// let sessionData =
//     typeof window !== "undefined" ? localStorage.getItem("firstRender") : null;
</script>

<template>
    <div>loading page --- {{ isFirstRender }}</div>
</template>
