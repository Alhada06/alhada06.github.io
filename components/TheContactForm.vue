<script setup>
const runtimeConfig = useRuntimeConfig();

const form = ref({
  name: "",
  email: "",
  text: "",
  access_key: "6214d9b4-c46f-4e98-9501-6e52ec230c79",
});

const submit = async () => {
  console.log(form.value);
  const { data, error } = await useAsyncData("mail", () =>
    $fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: form.value,
    })
  );
  console.log(data.value);
  console.log(error.value);
};

const forms = ref(null);
const result = ref(null);
</script>

<template>
  <form ref="forms" id="forms" @submit.prevent="submit" class="w-full max-w-lg">
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
          for="grid-first-name"
        >
          Name
        </label>
        <input
          v-model="form.name"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
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
          class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
          for="grid-password"
        >
          E-mail
        </label>
        <input
          v-model="form.email"
          class="appearance-none block w-full bg-gray-200/30 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white/40 focus:border-gray-500"
          id="email"
          type="email"
          name="email"
          required
        />
        <p class="text-white text-xs italic">Some tips - as long as needed</p>
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full px-3">
        <label
          class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
          for="grid-password"
        >
          Message
        </label>
        <textarea
          v-model="form.text"
          class="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
          id="message"
          name="message"
          required
        ></textarea>
      </div>
    </div>

    <div class="md:flex md:items-center md:justify-center">
      <button
        class="shadow bg-blue-700 w-1/2 hover:bg-blue-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
        type="submit"
      >
        Send
      </button>
    </div>
    <div ref="result" id="result"></div>
  </form>
</template>
