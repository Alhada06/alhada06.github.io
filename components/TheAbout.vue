<script setup>
const { locale } = useI18n();

const { data: aboutData } = await useAsyncGql("aboutEntryQuery", {
  locale,
});
const about = computed(() => aboutData.value?.about?.description);

const { data: academicsData } = await useAsyncGql("academicsCollectionQuery", {
  locale,
});
const academics = computed(
  () => academicsData.value?.academicsCollection?.items,
);
</script>

<template>
  <div class="flex w-full flex-col">
    <div
      class="m-1 whitespace-pre-wrap p-1 text-justify text-sm tracking-tighter text-blue-900/95 dark:text-slate-300 md:text-base md:tracking-tight"
    >
      {{ about }}
    </div>
    <div class="m-1 flex w-full flex-col p-1">
      <div class="text-left text-lg text-blue-900 dark:text-white">
        {{ $t("academics") }}
      </div>
      <div class="m-1 p-1 pt-4">
        <div
          v-for="(degree, index) in academics"
          :key="index"
          class="mb-2 flex w-full flex-col pb-3"
          :class="{
            'border-b  border-blue-900/90 dark:border-slate-200/50':
              index < academicsData?.academicsCollection.total - 1,
          }"
        >
          <div
            class="m-1 whitespace-pre-wrap p-1 text-justify text-sm tracking-tighter text-blue-900/95 dark:text-slate-300 md:text-base md:tracking-tight"
          >
            {{ degree.school }}
          </div>
          <div
            class="m-1 whitespace-pre-wrap p-1 text-justify text-sm tracking-tighter text-blue-900/95 dark:text-slate-300 md:text-base md:tracking-tight"
          >
            {{ degree.course }}
          </div>
          <div class="w-1/2">
            <TheProgressBar :limit="degree.precentage" />
          </div>
          <div
            v-if="degree.incomplete"
            class="m-1 whitespace-pre-wrap p-1 text-justify text-xs tracking-tighter text-blue-900/95 dark:text-slate-400 md:text-base md:tracking-tight"
          >
            {{ $t("incomplete") }} - {{ degree.incomplete }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
