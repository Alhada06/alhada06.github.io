<script setup>
const { locale } = useI18n();

const { data: projectsData } = await useAsyncGql("projectCollectionQuery", {
  locale,
});

const show = ref(false);

const projectData = ref({
  name: "",
  ghUrl: "",
  description: "",
  stack: null,
  url: "",
});
const onOpen = (data) => {
  projectData.value.name = data.name;
  projectData.value.ghUrl = data.ghUrl;
  projectData.value.description = data.description;
  projectData.value.stack = data.stack;
  projectData.value.url = useShortUrl(data.url);
  show.value = true;
};
const onClose = () => {
  show.value = false;
  projectData.value.name = "";
  projectData.value.ghUrl = "";
  projectData.value.description = "";
  projectData.value.stack = null;
  projectData.value.url = "";
};
</script>

<template>
  <TwicView>
    <div class="flex w-full flex-wrap justify-around p-1">
      <div
        v-for="(project, index) in projectsData?.projectCollection?.items"
        :key="index"
        class="group/project flex flex-col justify-center rounded p-1 text-center"
        @click="
          onOpen({
            name: project.name,
            description: project.description,
            stack: project.stackCollection.items,
            ghUrl: project.ghUrl,
            url: project.image.url,
          })
        "
      >
        <div
          class="m-2 h-24 w-20 cursor-pointer rounded border-slate-300 bg-slate-300/50 p-1 shadow shadow-blue-900/50 drop-shadow-md transition duration-150 ease-in-out will-change-auto group-hover/project:scale-110 dark:bg-bgbluelighter dark:shadow-white/20 md:h-40 md:w-32 lg:h-[200px] lg:w-40"
        >
          <TwicImg
            class="rounded"
            ratio="4/5"
            :src="useShortUrl(project.image.url)"
          />
        </div>
        <div
          class="m-1 p-1 pt-2 text-center text-[9px] tracking-tighter text-blue-900 transition duration-150 ease-in-out will-change-auto group-hover/project:scale-x-110 dark:text-white md:text-xs lg:text-sm"
        >
          {{ project.name }}
        </div>
      </div>
    </div>
  </TwicView>
  <TheProjectModal
    :is-open="show"
    :on-close="onClose"
    :project-data="projectData"
  />
</template>
