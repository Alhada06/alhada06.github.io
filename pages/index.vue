<script setup>
definePageMeta({
  middleware: defineNuxtRouteMiddleware(() => {
    if (process.server) return;

    if (isFirstRender.value === true) {
      return navigateTo("/loading");
    }
  }),
});
// const headers = ["Section 1", "Section 2", "Section 3", "Section 4"];
const root = ref(null);
const section1 = ref(null);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { stop } = useIntersectionObserver(
  section1,
  ([{ isIntersecting }], _observerElement) => {
    isIntersectingSection.value.Section1 = isIntersecting;
  },
  { rootMargin: "0px 0px -80% 0px" },
);
const section2 = ref(null);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { stop: stop2 } = useIntersectionObserver(
  section2,
  ([{ isIntersecting }], _observerElement) => {
    isIntersectingSection.value.Section2 = isIntersecting;
  },
  { rootMargin: "0px 0px -80% 0px" },
);
const section3 = ref(null);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { stop: stop3 } = useIntersectionObserver(
  section3,
  ([{ isIntersecting }], _observerElement) => {
    isIntersectingSection.value.Section3 = isIntersecting;
  },
  { rootMargin: "0px 0px -80% 0px" },
);
const section4 = ref(null);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { stop: stop4 } = useIntersectionObserver(
  section4,
  ([{ isIntersecting }], _observerElement) => {
    isIntersectingSection.value.Section4 = isIntersecting;
  },
  { rootMargin: "0px 0px -80% 0px" },
);
const section5 = ref(null);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { stop: stop5 } = useIntersectionObserver(
  section5,
  ([{ isIntersecting }], _observerElement) => {
    isIntersectingSection.value.Section5 = isIntersecting;
  },
  { rootMargin: "0px 0px -80% 0px" },
);
</script>

<template>
  <div ref="root">
    <article class="mx-2 mb-[500px] scroll-pt-16 md:mx-3">
      <h1
        ref="head"
        class="m-4 ml-5 mr-5 rounded-bl-3xl rounded-tr-3xl border-slate-400 bg-slate-300/30 py-4 pl-8 text-3xl text-blue-800 shadow-inner shadow-blue-900/25 backdrop-blur-sm dark:border-bgbluelighter dark:bg-bgbluelighter/40 dark:text-white dark:shadow-white/25 md:text-4xl lg:m-4"
      >
        Diogo Alhada, I'm a Developer.
      </h1>
      <div></div>
      <section
        ref="section1"
        class="m-4 mb-10 ml-4 mr-5 rounded-br-3xl rounded-tl-3xl border-slate-400 bg-slate-300/30 p-4 shadow-inner shadow-blue-900/25 backdrop-blur-sm dark:border-bgbluelighter dark:bg-bgbluelighter/40 dark:shadow-white/25 md:p-8 lg:m-4"
      >
        <h2
          id="0"
          class="py-4 pt-10 text-2xl text-blue-900 dark:text-slate-200"
        >
          {{ $t("about") }}
        </h2>
        <TheAbout />
      </section>
      <section
        ref="section2"
        class="m-4 mb-10 ml-4 mr-5 rounded-bl-3xl rounded-tr-3xl border-slate-400 bg-slate-300/30 p-4 shadow-inner shadow-blue-900/25 backdrop-blur-sm dark:border-bgbluelighter dark:bg-bgbluelighter/40 dark:shadow-white/25 md:p-8 lg:m-4"
      >
        <h2
          id="1"
          class="py-4 pt-10 text-2xl text-blue-900 dark:text-slate-200"
        >
          {{ $t("projects") }}
        </h2>
        <ClientOnly><TheProjects /></ClientOnly>
      </section>
      <section
        id="2"
        ref="section3"
        class="m-4 mb-10 ml-4 mr-5 rounded-br-3xl rounded-tl-3xl border-slate-400 bg-slate-300/30 p-4 shadow-inner shadow-blue-900/25 backdrop-blur-sm dark:border-bgbluelighter dark:bg-bgbluelighter/40 dark:shadow-white/25 md:p-8 lg:m-4"
      >
        <h2 class="py-4 pt-10 text-2xl text-blue-900 dark:text-slate-200">
          {{ $t("skills") }}
        </h2>

        <TheSkillsContainer />
      </section>
      <section
        id="3"
        ref="section4"
        class="m-4 mb-10 ml-4 mr-5 rounded-bl-3xl rounded-tr-3xl border-slate-400 bg-slate-300/30 p-4 shadow-inner shadow-blue-900/25 backdrop-blur-sm dark:border-bgbluelighter dark:bg-bgbluelighter/40 dark:shadow-white/25 md:p-8 lg:m-4"
      >
        <h2 class="py-4 pt-10 text-2xl text-blue-900 dark:text-slate-200">
          {{ $t("certsSection") }}
        </h2>

        <ClientOnly> <LazyTheCerts /></ClientOnly>
      </section>
      <section
        id="4"
        ref="section5"
        class="m-4 mb-10 ml-4 mr-5 rounded-br-3xl rounded-tl-3xl border-slate-400 bg-slate-300/30 p-4 shadow-inner shadow-blue-900/25 backdrop-blur-sm dark:border-bgbluelighter dark:bg-bgbluelighter/40 dark:shadow-white/25 md:p-8 lg:m-4"
      >
        <div class="flex justify-center"><TheContactForm /></div>
      </section>
      <!-- <TheTextShuffle text="this a shuffle test" /> -->
    </article>
  </div>
</template>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
