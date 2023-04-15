<script setup>
import aboutQuery from "@/graphql/queries/about.query.gql";

const { locale } = useI18n();

const { result: aboutData } = useQuery(
  aboutQuery,
  () => {
    return { locale: locale.value };
  },
  {
    prefetch: false,
  }
);
</script>

<template>
  <div class="flex w-full flex-col">
    <div
      class="m-1 whitespace-pre-wrap p-1 text-justify text-sm tracking-tighter text-blue-900/95 dark:text-slate-300 md:text-base md:tracking-tight"
    >
      {{ aboutData?.about?.description }}
    </div>
    <div class="flex flex-col">
      <div class="text-left text-lg text-blue-900 dark:text-white">
        {{ $t("academics") }}
      </div>
      <div>aasfas asd as</div>
    </div>
  </div>
</template>
