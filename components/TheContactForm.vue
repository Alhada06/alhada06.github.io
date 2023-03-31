<!-- eslint-disable no-console -->
<script setup>
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const runtimeConfig = useRuntimeConfig();

const form = ref({
  name: "",
  email: "",
  message: "",
  from_name: "alhada06.github.io",
  subject: computed(() => "Contact from " + form.value.name),
  access_key: "6214d9b4-c46f-4e98-9501-6e52ec230c79",
});

const isSending = ref(false);
const sent = ref(false);

const handleSucess = (success) => {
  if (success) {
    sent.value = success;
    form.value.name = "";
    form.value.email = "";
    form.value.message = "";
    setTimeout(() => {
      sent.value = false;
    }, 3000);
  }
};

const submit = async () => {
  console.log(form.value);
  isSending.value = true;
  const { data, error, pending } = await useAsyncData("mail", () =>
    $fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: form.value,
    })
  );
  isSending.value = pending.value;
  handleSucess(data.value?.success);
  console.log(pending.value);
  console.log(data.value);
  console.log(error.value);
};

const forms = ref(null);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const result = ref(null);
</script>

<template>
  <form id="forms" ref="forms" class="w-full max-w-lg" @submit.prevent="submit">
    <div class="md:flex md:items-center md:justify-center">
      <div
        class="mb-3 pb-4 text-center font-bold capitalize text-blue-800 dark:text-white"
      >
        {{ $t("contact-me") }}
      </div>
    </div>
    <div class="-mx-3 mb-6 flex flex-wrap">
      <div class="mb-6 w-full px-3 md:mb-0">
        <label
          class="mb-2 block text-xs font-bold uppercase tracking-wide text-blue-800 dark:text-white"
          for="grid-first-name"
        >
          {{ $t("name") }}
        </label>
        <input
          id="grid-first-name"
          v-model="form.name"
          class="mb-3 block w-full appearance-none rounded border border-blue-800/30 bg-white/70 py-3 px-4 leading-tight text-blue-800 focus:border-blue-800 focus:bg-white/90 focus:outline-none dark:border-slate-200/30 dark:bg-bgbluelighter/70 dark:text-white dark:focus:border-slate-200 dark:focus:bg-bgbluelighter/90"
          type="text"
          name="name"
          placeholder="Jane"
          required
        />
        <!-- <p class="text-red-500 text-xs italic">Please fill out this field.</p> -->
      </div>
    </div>
    <div class="-mx-3 mb-6 flex flex-wrap">
      <div class="w-full px-3">
        <label
          class="mb-2 block text-xs font-bold uppercase tracking-wide text-blue-800 dark:text-white"
          for="grid-password"
        >
          E-mail
        </label>
        <input
          id="email"
          v-model="form.email"
          class="mb-3 block w-full appearance-none rounded border border-blue-800/30 bg-white/70 py-3 px-4 leading-tight text-blue-800 focus:border-blue-800 focus:bg-white/90 focus:outline-none dark:border-slate-200/30 dark:bg-bgbluelighter/70 dark:text-white dark:focus:border-slate-200 dark:focus:bg-bgbluelighter/90"
          type="email"
          name="email"
          required
        />
        <!-- <p class="text-white text-xs italic">Some tips - as long as needed</p> -->
      </div>
    </div>
    <div class="-mx-3 mb-6 flex flex-wrap">
      <div class="w-full px-3">
        <label
          class="mb-2 block text-xs font-bold uppercase tracking-wide text-blue-800 dark:text-white"
          for="grid-password"
        >
          {{ $t("message") }}
        </label>
        <textarea
          id="message"
          v-model="form.message"
          class="no-resize mb-3 block h-48 w-full resize-none appearance-none rounded border border-blue-800/30 bg-white/70 py-3 px-4 leading-tight text-blue-800 focus:border-blue-800 focus:bg-white/90 focus:outline-none dark:border-slate-200/30 dark:bg-bgbluelighter/70 dark:text-white dark:focus:border-slate-200 dark:focus:bg-bgbluelighter/90"
          name="message"
          required
        ></textarea>
      </div>
    </div>

    <div class="md:flex md:items-center md:justify-center">
      <button
        class="focus:shadow-outline w-1/2 rounded bg-blue-900 py-2 px-4 font-bold text-white shadow hover:bg-blue-800 focus:outline-none"
        type="submit"
      >
        <span v-if="isSending">
          <Icon size="32px" name="svg-spinners:3-dots-scale" />
        </span>
        <span v-else>{{ $t("send") }}</span>
      </button>
    </div>
    <div class="mt-2 py-3 md:flex md:items-center md:justify-center">
      <span
        v-if="sent"
        class="flex-row items-center rounded bg-green-600 p-2 text-white"
      >
        <Icon name="material-symbols:check-circle-outline" size="24px" /> Email
        sent successfully!</span
      >
    </div>
  </form>
</template>
