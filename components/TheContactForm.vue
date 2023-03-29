<script setup>
import sendgrid from "@sendgrid/mail";
const runtimeConfig = useRuntimeConfig();

if (process.server) {
  sendgrid.setApiKey(runtimeConfig.NUXT_SENDGRID_API_KEY);
}

const form = ref({
  name: "",
  email: "",
  text: "",
});

const submit = async () => {
  console.log(form.value);
  const res = await useAsyncData("mail", () =>
    $fetch("/api/mail", { method: "GET" })
  );
  console.log(res);
};
</script>

<template>
  <!-- <form @submit.prevent="submit">
    <div class="flex flex-col p-1">
      <div class="inline-flex p-2">
        <label for="name">Name</label>
        <input type="text" v-model="form.name" name="name" id="name" />
      </div>
      <div class="inline-flex p-2">
        <label for="email">Email</label>
        <input type="email" v-model="form.email" name="email" id="email" />
      </div>
      <div class="inline-flex p-2">
        <label for="text">text</label>
        <textarea
          name="text"
          id=""
          cols="30"
          v-model="form.text"
          rows="10"
        ></textarea>
      </div>
      <button class="bg-blue-700 hover:bg-blue-600 text-white" type="submit">
        Send
      </button>
    </div>
  </form> -->

  <!-- component -->
  <form class="w-full max-w-lg" @submit.prevent="submit">
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
  </form>
</template>
