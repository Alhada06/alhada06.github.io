<script setup>
const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
  onClose: {
    type: Function,
    required: true,
  },
  certData: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <HeadlessDialog
    :open="props.isOpen"
    class="relative z-50"
    @close="props.onClose"
  >
    <!-- The backdrop, rendered as a fixed sibling to the panel container -->
    <div class="fixed inset-0 bg-black/30" aria-hidden="true" />

    <!-- Full-screen container to center the panel -->
    <div class="fixed inset-0 flex items-center justify-center p-4">
      <!-- The actual dialog panel -->
      <HeadlessDialogPanel
        class="w-11/12 content-center rounded bg-white align-top dark:bg-bgbluelighter md:h-3/6 md:w-3/6"
      >
        <HeadlessDialogTitle
          class="text-center text-blue-900 dark:text-white"
          >{{ props.certData?.title }}</HeadlessDialogTitle
        >
        <HeadlessDialogDescription> helo helool </HeadlessDialogDescription>
        <div>
          <TwicImg :src="props.certData.url" ratio="4/3" />
        </div>
        <!-- ... -->
      </HeadlessDialogPanel>
    </div>
  </HeadlessDialog>
</template>
