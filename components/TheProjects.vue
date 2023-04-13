<script setup>
import projectsQuery from "@/graphql/queries/projects.query.gql";

const { locale } = useI18n();

const { result: projectsData } = useQuery(
  projectsQuery,
  () => {
    return { locale: locale.value };
  },
  {
    prefetch: false,
  }
);
</script>

<template>
  <TwicView>
    <div class="flex w-full flex-wrap justify-around p-1">
      <div
        v-for="(project, index) in projectsData?.projectCollection?.items"
        :key="index"
        class="flex flex-col justify-center rounded p-1"
      >
        <div
          class="m-2 h-24 w-20 rounded bg-slate-200 p-1 drop-shadow-md dark:bg-bgbluelighter dark:shadow-white md:h-40 md:w-32 lg:h-[200px] lg:w-40"
        >
          <TwicImg
            class="rounded"
            ratio="4/5"
            :src="useShortUrl(project.image.url)"
          />
        </div>
        <div
          class="m-1 p-1 pt-2 text-center text-[9px] tracking-tighter text-blue-900 dark:text-white md:text-xs lg:text-sm"
        >
          {{ project.name }}
        </div>
      </div>
    </div>
  </TwicView>
</template>
