<script setup>
const show = ref(false);

const { locale } = useI18n();

const { data: certificatesData } = await useAsyncGql(
  "certificateCollectionQuery",
  {
    locale,
  },
);

const certData = ref({
  title: "",
  description: "",
  url: "",
});
const onOpen = (data) => {
  certData.value.title = data.title;
  certData.value.description = data.description;
  certData.value.url = useShortUrl(data.url);
  show.value = true;
};
const onClose = () => {
  show.value = false;
  certData.value.title = "";
  certData.value.description = "";
  certData.value.url = "";
};
</script>

<template>
  <TwicView>
    <div class="flex w-full flex-wrap justify-around p-1">
      <div
        v-for="(cert, index) in certificatesData?.certificateCollection?.items"
        :key="index"
        class="m-2 h-24 w-24 cursor-pointer rounded border-slate-300 bg-slate-300/50 p-1 shadow shadow-blue-900/50 drop-shadow-md transition duration-150 ease-in-out will-change-auto hover:scale-105 dark:bg-bgbluelighter dark:shadow-white/20 md:h-40 md:w-40 lg:h-48 lg:w-48"
        @click="
          onOpen({
            title: cert.name,
            description: cert.description,
            url: cert.image.url,
          })
        "
      >
        <TwicImg class="rounded" :src="useShortUrl(cert.image.url)" />
      </div></div
  ></TwicView>
  <TheCertsModal :on-close="onClose" :is-open="show" :cert-data="certData" />
</template>
