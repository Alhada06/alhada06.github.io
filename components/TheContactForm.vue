<script setup>
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
const result = ref(null);
</script>

<template>
  <form ref="forms" id="forms" @submit.prevent="submit" class="w-full max-w-lg">
    <div class="md:flex md:items-center md:justify-center">
      <div
        class="text-center capitalize text-blue-800 pb-4 mb-3 dark:text-white font-bold"
      >
        {{ $t("contact-me") }}
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide dark:text-white text-blue-800 text-xs font-bold mb-2"
          for="grid-first-name"
        >
          {{ $t("name") }}
        </label>
        <input
          v-model="form.name"
          class="appearance-none block w-full dark:text-white text-blue-800 dark:bg-bgbluelighter/70 bg-white/70 border border-blue-800/30 dark:border-slate-200/30 rounded py-3 px-4 mb-3 leading-tight focus:outline-none dark:focus:bg-bgbluelighter/90 focus:bg-white/90 dark:focus:border-slate-200 focus:border-blue-800"
          id="grid-first-name"
          type="text"
          name="name"
          placeholder="Jane"
          required
        />
        <!-- <p class="text-red-500 text-xs italic">Please fill out this field.</p> -->
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full px-3">
        <label
          class="block uppercase tracking-wide dark:text-white text-blue-800 text-xs font-bold mb-2"
          for="grid-password"
        >
          E-mail
        </label>
        <input
          v-model="form.email"
          class="appearance-none block w-full dark:text-white text-blue-800 dark:bg-bgbluelighter/70 bg-white/70 border border-blue-800/30 dark:border-slate-200/30 rounded py-3 px-4 mb-3 leading-tight focus:outline-none dark:focus:bg-bgbluelighter/90 focus:bg-white/90 dark:focus:border-slate-200 focus:border-blue-800"
          id="email"
          type="email"
          name="email"
          required
        />
        <!-- <p class="text-white text-xs italic">Some tips - as long as needed</p> -->
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full px-3">
        <label
          class="block uppercase tracking-wide dark:text-white text-blue-800 text-xs font-bold mb-2"
          for="grid-password"
        >
          {{ $t("message") }}
        </label>
        <textarea
          v-model="form.message"
          class="no-resize appearance-none block w-full dark:text-white text-blue-800 dark:bg-bgbluelighter/70 bg-white/70 border border-blue-800/30 dark:border-slate-200/30 rounded py-3 px-4 mb-3 leading-tight focus:outline-none dark:focus:bg-bgbluelighter/90 focus:bg-white/90 dark:focus:border-slate-200 focus:border-blue-800 h-48 resize-none"
          id="message"
          name="message"
          required
        ></textarea>
      </div>
    </div>

    <div class="md:flex md:items-center md:justify-center">
      <button
        class="shadow bg-blue-900 w-1/2 hover:bg-blue-800 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
        type="submit"
      >
        <span v-if="isSending">
          <Icon size="32px" name="svg-spinners:3-dots-scale" />
        </span>
        <span v-else>{{ $t("send") }}</span>
      </button>
    </div>
    <div class="md:flex md:items-center md:justify-center py-3 mt-2">
      <span v-if="sent" class="text-white rounded p-2 bg-green-600 flex-row items-center">
        <Icon name="material-symbols:check-circle-outline" size="24px" /> Email sent
        successfully!</span
      >
    </div>
  </form>
</template>
