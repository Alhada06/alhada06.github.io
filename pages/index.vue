<script setup>
import skillsQuery from "@/graphql/queries/skills.query.gql";
import experiencesQuery from "@/graphql/queries/experiences.query.gql";
import menusQuery from "@/graphql/queries/menus.query.gql";

const config = useRuntimeConfig();
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
  { rootMargin: "0px 0px -80% 0px" }
);
const section2 = ref(null);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { stop: stop2 } = useIntersectionObserver(
  section2,
  ([{ isIntersecting }], _observerElement) => {
    isIntersectingSection.value.Section2 = isIntersecting;
  },
  { rootMargin: "0px 0px -80% 0px" }
);
const section3 = ref(null);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { stop: stop3 } = useIntersectionObserver(
  section3,
  ([{ isIntersecting }], _observerElement) => {
    isIntersectingSection.value.Section3 = isIntersecting;
  },
  { rootMargin: "0px 0px -80% 0px" }
);
const section4 = ref(null);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { stop: stop4 } = useIntersectionObserver(
  section4,
  ([{ isIntersecting }], _observerElement) => {
    isIntersectingSection.value.Section4 = isIntersecting;
  },
  { rootMargin: "0px 0px -80% 0px" }
);

// const query = gql`
//   query menuCollectionQuery($locale: String) {
//     menuCollection(locale: $locale) {
//       total
//       items {
//         name
//         sys {
//           id
//         }
//         # add the fields you want to query
//       }
//     }
//   }
// `;

const { locale } = useI18n();
const { data, refresh } = await useAsyncQuery(menusQuery, {
  locale: locale.value,
});
const { result } = useQuery(
  menusQuery,
  () => {
    return { locale: locale.value };
  },
  { prefetch: false }
);

const { result: experienceData } = useQuery(experiencesQuery, null, {
  prefetch: false,
});

const { result: skillsData } = useQuery(skillsQuery, null, { prefetch: false });
</script>

<template>
  <div ref="root">
    <article class="mb-[500px] ml-6 scroll-pt-16">
      <h1
        ref="head"
        class="ml-4 py-4 pl-8 text-4xl text-blue-800 dark:text-white"
        @click="refresh"
      >
        My article - {{ config.myVar }}
      </h1>
      <div></div>
      <section ref="section1" class="m-4 rounded-lg p-8 backdrop-blur-sm">
        <h2
          id="0"
          class="py-4 pt-10 text-2xl text-blue-900 dark:text-slate-200"
        >
          Section 1
        </h2>
        <p class="text-justify text-blue-800 dark:text-white">
          W Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc sed
          blandit libero volutpat. Tempor id eu nisl nunc mi. In tellus integer
          feugiat scelerisque varius morbi. At imperdiet dui accumsan sit. Id
          ornare arcu odio ut sem nulla pharetra diam sit. Urna nunc id cursus
          metus aliquam eleifend. Amet luctus venenatis lectus magna fringilla
          urna porttitor. Dignissim enim sit amet venenatis urna cursus eget
          nunc scelerisque. Elementum sagittis vitae et leo duis. Convallis
          aenean et tortor at risus viverra adipiscing at in. Turpis egestas
          integer eget aliquet nibh praesent tristique magna sit. Gravida neque
          convallis a cras semper auctor neque. amet venenatis urna cursus eget
          nunc scelerisque. Elementum sagittis vitae et leo duis. Convallis
          aenean et tortor at risus viverra adipiscing at in. Turpis egestas
          integer eget aliquet nibh praesent tristique magna sit. Gravida neque
          convallis a cras semper auctor neque.
        </p>
      </section>
      <section ref="section2" class="m-4 rounded-lg p-8 backdrop-blur-sm">
        <h2
          id="1"
          class="py-4 pt-10 text-2xl text-blue-900 dark:text-slate-200"
        >
          Section 2
        </h2>
        <p class="text-justify text-blue-800 dark:text-white">
          W Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc sed
          blandit libero volutpat. Tempor id eu nisl nunc mi. In tellus integer
          feugiat scelerisque varius morbi. At imperdiet dui accumsan sit. Id
          ornare arcu odio ut sem nulla pharetra diam sit. Urna nunc id cursus
          metus aliquam eleifend. Amet luctus venenatis lectus magna fringilla
          urna porttitor. Dignissim enim sit amet venenatis urna cursus eget
          nunc scelerisque. Elementum sagittis vitae et leo duis. Convallis
          aenean et tortor at risus viverra adipiscing at in. Turpis egestas
          integer eget aliquet nibh praesent tristique magna sit. Gravida neque
          convallis a cras semper auctor neque. amet venenatis urna cursus eget
          nunc scelerisque. Elementum sagittis vitae et leo duis. Convallis
          aenean et tortor at risus viverra adipiscing at in. Turpis egestas
          integer eget aliquet nibh praesent tristique magna sit. Gravida neque
          convallis a cras semper auctor neque.
        </p>
      </section>
      <section ref="section3" class="m-4 rounded-lg p-8 backdrop-blur-sm">
        <h2
          id="2"
          class="py-4 pt-10 text-2xl text-blue-900 dark:text-slate-200"
        >
          Section 3
        </h2>
        <p class="text-justify text-blue-800 dark:text-white">
          W Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc sed
          blandit libero volutpat. Tempor id eu nisl nunc mi. In tellus integer
          feugiat scelerisque varius morbi. At imperdiet dui accumsan sit. Id
          ornare arcu odio ut sem nulla pharetra diam sit. Urna nunc id cursus
          metus aliquam eleifend. Amet luctus venenatis lectus magna fringilla
          urna porttitor. Dignissim enim sit amet venenatis urna cursus eget
          nunc scelerisque. Elementum sagittis vitae et leo duis. Convallis
          aenean et tortor at risus viverra adipiscing at in. Turpis egestas
          integer eget aliquet nibh praesent tristique magna sit. Gravida neque
          convallis a cras semper auctor neque. amet venenatis urna cursus eget
          nunc scelerisque. Elementum sagittis vitae et leo duis. Convallis
          aenean et tortor at risus viverra adipiscing at in. Turpis egestas
          integer eget aliquet nibh praesent tristique magna sit. Gravida neque
          convallis a cras semper auctor neque.
        </p>
      </section>
      <section
        id="3"
        ref="section4"
        class="m-4 rounded-lg p-8 backdrop-blur-sm"
      >
        <h2 class="py-4 pt-10 text-2xl text-blue-900 dark:text-slate-200">
          Section 4
        </h2>
        <p class="text-justify text-blue-800 dark:text-white">
          W Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc sed
          blandit libero volutpat. Tempor id eu nisl nunc mi. In tellus integer
          feugiat scelerisque varius morbi. At imperdiet dui accumsan sit. Id
          ornare arcu odio ut sem nulla pharetra diam sit. Urna nunc id cursus
          metus aliquam eleifend. Amet luctus venenatis lectus magna fringilla
          urna porttitor. Dignissim enim sit amet venenatis urna cursus eget
          nunc scelerisque. Elementum sagittis vitae et leo duis. Convallis
          aenean et tortor at risus viverra adipiscing at in. Turpis egestas
          integer eget aliquet nibh praesent tristique magna sit. Gravida neque
          convallis a cras semper auctor neque. amet venenatis urna cursus eget
          nunc scelerisque. Elementum sagittis vitae et leo duis. Convallis
          aenean et tortor at risus viverra adipiscing at in. Turpis egestas
          integer eget aliquet nibh praesent tristique magna sit. Gravida neque
          convallis a cras semper auctor neque.
        </p>
      </section>

      <div v-if="experienceData" class="m-4 w-1/2 p-8">
        <div
          v-for="experience in experienceData?.experienceCollection.items"
          :key="experience.name"
        >
          <transition name="fade" mode="out-in" appear>
            <TheProgressBar :limit="experience.precentage" />
          </transition>
        </div>
      </div>
      <div class="flex justify-center"><TheContactForm /></div>
    </article>

    <div v-if="data">
      async: {{ data }}----

      <div v-for="(menu, index) in result?.menuCollection?.items" :key="index">
        {{ menu.name }}
      </div>
    </div>
    <div v-if="experienceData">--- experience data:{{ experienceData }}</div>

    {{ skillsData }}----
    <div v-if="skillsData">
      <div
        v-for="(item, index) in skillsData?.skillCollection?.items"
        :key="index"
      >
        <Icon :name="item.icon" :size="item.iconSize" />---
        {{ item.sys.id }}
      </div>
    </div>
    <!-- <Icon name="logos:vue" /> -->
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
