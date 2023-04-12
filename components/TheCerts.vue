<script setup>
import certificatesQuery from "@/graphql/queries/certificates.query.gql";
const show = ref(false);

const { locale } = useI18n();

const { result: certificatesData } = useQuery(
  certificatesQuery,
  () => {
    return { locale: locale.value };
  },
  {
    prefetch: false,
  }
);

const imgUrl = (url) => {
  return url.replace(`https://images.ctfassets.net/dw7ds4p9sn1i/`, "");
};
const certData = ref({
  title: "",
  description: "",
  url: "",
});
const onOpen = (data) => {
  certData.value.title = data.title;
  certData.value.description = data.description;
  certData.value.url = imgUrl(data.url);
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
  <div class="flex w-full flex-wrap p-1">
    <div
      v-for="(cert, index) in certificatesData?.certificateCollection?.items"
      :key="index"
      class="m-2 h-24 w-24 rounded bg-slate-200 p-1 drop-shadow-md dark:bg-bgbluelighter dark:shadow-white md:h-48 md:w-48"
      @click="
        onOpen({
          title: cert.name,
          description: cert.description,
          url: cert.image.url,
        })
      "
    >
      <TwicImg class="rounded" :src="imgUrl(cert.image.url)" />
    </div>
    <!-- <div class="m-2 h-48 w-48 bg-slate-200 p-1"></div>
    <div class="m-2 h-48 w-48 bg-slate-200 p-1"></div>
    <div class="m-2 h-48 w-48 bg-slate-200 p-1"></div>
    <div class="m-2 h-48 w-48 bg-slate-200 p-1"></div>
    <div class="m-2 h-48 w-48 bg-slate-200 p-1"></div>
    <div class="m-2 h-48 w-48 bg-slate-200 p-1"></div>
    <div class="m-2 h-48 w-48 bg-slate-200 p-1"></div>
    <div class="m-2 h-48 w-48 bg-slate-200 p-1"></div>
    <div class="m-2 h-48 w-48 bg-slate-200 p-1"></div> -->
  </div>
  <TheCertsModal :on-close="onClose" :is-open="show" :cert-data="certData" />
</template>
