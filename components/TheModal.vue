<script setup>
const props = defineProps({
  show: {
    type: Boolean,
    required: true,
  },
  onClose: {
    type: Function,
    required: true,
  },
});
</script>

<template>
  <div
    class="fixed left-0 top-24 z-50 hidden h-full w-full overflow-auto bg-black/40 pt-7"
    @click="props.onClose"
  >
    <div
      class="grid w-4/5 grid-cols-2 gap-2 overflow-y-auto border border-black p-5"
    >
      contentds dsfsdfsdf fsdf sdf dfsdf sdfs df sdf sdf ds
    </div>
  </div>
</template>
