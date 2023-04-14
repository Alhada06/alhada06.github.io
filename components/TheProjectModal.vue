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
        class="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0"
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
          <div class="flex flex-col">
            <div class="flex w-full flex-row">
              <div class="h-full w-1/3 shrink-0 rounded-md">
                <TwicImg
                  class="rounded-md drop-shadow-xl dark:shadow-white"
                  :src="props.projectData.url"
                  ratio="4/5"
                />
              </div>
              <div class="flex flex-col">
                <div class="shrink justify-center">
                  <HeadlessDialogTitle
                    as="div"
                    class="m-1 shrink pb-1 text-center align-top text-sm text-blue-900 drop-shadow-xl dark:text-white md:text-xl"
                    >{{ props.projectData?.name }}
                  </HeadlessDialogTitle>

                  <NuxtLink
                    :to="props.projectData.ghUrl"
                    target="_blank"
                    class="inline-flex align-middle text-blue-900 dark:text-white"
                    ><Icon name="ic:baseline-link" /> <Icon name="mdi:github"
                  /></NuxtLink>
                </div>
                <HeadlessDialogDescription
                  class="m-1 p-2 text-justify text-xs tracking-tighter text-blue-900 dark:text-white md:text-base md:tracking-tight"
                >
                  {{ props.projectData?.description }}
                </HeadlessDialogDescription>
              </div>
            </div>
            <div
              class="m-1 inline-flex w-full flex-wrap justify-evenly space-x-1 p-2"
            >
              <div
                v-for="(tech, index) in props.projectData.stack"
                :key="index"
              >
                <Icon :name="tech" size="30px" />
              </div>
            </div>
          </div>
          <!-- ... -->
        </HeadlessDialogPanel>
      </div>
    </div>
  </HeadlessDialog>
</template>
