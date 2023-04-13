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
  projectData: {
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
    <div
      class="fixed inset-0 bg-black/90 bg-opacity-75 transition-opacity"
      aria-hidden="true"
    />

    <!-- Full-screen container to center the panel -->
    <div class="fixed inset-0 z-10 overflow-y-auto">
      <div
        class="flex min-h-full items-start justify-center p-4 text-center sm:items-center sm:p-0"
      >
        <!-- The actual dialog panel -->
        <HeadlessDialogPanel
          class="w-11/12 max-w-xs rounded bg-white p-3 align-top dark:bg-bgbluelighter md:max-w-xl lg:md:h-3/6 2xl:max-w-4xl"
        >
          <div class="flex flex-row-reverse">
            <button
              type="button"
              class="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-base text-blue-900 outline-none outline-transparent transition delay-100 duration-100 ease-in-out hover:scale-125 hover:text-blue-700 focus:outline-none dark:text-gray-400 dark:hover:text-white"
              @click="props.onClose"
            >
              <Icon name="ic:baseline-close" size="18px" />
            </button>
          </div>
          <HeadlessDialogTitle
            class="m-1 pb-1 text-center align-top text-xl text-blue-900 shadow-red-500 drop-shadow-xl dark:text-white"
            >{{ props.projectData?.name }}
          </HeadlessDialogTitle>

          <div class="rounded-md">
            <TwicImg
              class="rounded-md drop-shadow-xl dark:shadow-white"
              :src="props.projectData.url"
              ratio="4/3"
            />
          </div>
          <HeadlessDialogDescription
            class="m-1 p-2 text-justify text-base text-blue-900 dark:text-white"
          >
            {{ props.projectData?.description }}
          </HeadlessDialogDescription>
          <!-- ... -->
        </HeadlessDialogPanel>
      </div>
    </div>
  </HeadlessDialog>
</template>
