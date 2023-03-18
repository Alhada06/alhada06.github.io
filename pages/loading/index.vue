<script setup>
definePageMeta({
    layout: "backgound",
});

// let sessionData =
//     typeof window !== "undefined" ? localStorage.getItem("firstRender") : null;
</script>

<template>
    <div>loading page --- {{ isFirstRender }}</div>
</template>
