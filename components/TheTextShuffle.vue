<script setup>
import { vElementHover } from "@vueuse/components";
const props = defineProps({
  text: String,
});

const letters = props.text.split("");
const shuffledText = ref("");
const context = ref("");
context.value = props.text;
let intervalId;

const shuffle = () => {
  let counter = 0;
  const shuffleCount = 2;
  const shuffleInterval = 70;

  intervalId = setInterval(() => {
    shuffledText.value = letters
      .map((char, index) => {
        if (char.match(/[a-zA-Z0-9]/)) {
          const randomChar = getRandomCharacter();
          const cyclesToRevert = index - Math.floor(counter / shuffleCount);
          if (counter >= cyclesToRevert * shuffleCount) {
            return props.text[index];
          }
          return randomChar;
        }
        return char;
      })
      .join("");
    context.value = shuffledText.value;
    counter++;
    if (counter >= (shuffleCount + 1) * letters.length) {
      clearInterval(intervalId);
      context.value = props.text;
    }
  }, shuffleInterval);
};

const getRandomCharacter = () => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const randomIndex = Math.floor(Math.random() * characters.length);
  return characters[randomIndex];
};
</script>

<template>
  <h1
    v-element-hover="shuffle"
    @click="shuffle"
    class="m-4 ml-5 mr-5 rounded-bl-3xl rounded-tr-3xl border-slate-400 bg-slate-300/30 py-4 pl-8 text-3xl text-blue-800 shadow-inner shadow-blue-900/25 backdrop-blur-sm dark:border-bgbluelighter dark:bg-bgbluelighter/40 dark:text-white dark:shadow-white/25 md:text-4xl lg:m-4"
  >
    {{ context }}
  </h1>
</template>
