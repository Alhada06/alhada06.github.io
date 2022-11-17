<script setup>
import { vIntersectionObserver } from "@vueuse/components";
const headers = ["section 1", "sections 2", "section 3", "section 4"];
const section = ref(null);
const head = ref(null);

const { stop } = useIntersectionObserver(
  head,
  ([{ isIntersecting }], observerElement) => {
    console.log(observerElement);
  }
);
</script>

<template>
  <div>
    <!-- <NuxtLink to="/#2"> teste link</NuxtLink> -->
    <article class="mb-[500px] scroll-pt-16 backdrop-blur-sm">
      <h1 ref="head" class="py-4 pl-8 ml-4 text-4xl text-white">My article</h1>
      <section
        v-for="(header, index) in headers"
        :key="header"
        class="m-4 p-8 backdrop-blur-sm rounded-lg"
      >
        <h2
          ref="section"
          @click="test"
          :id="index"
          class="py-4 text-2xl pt-10 text-slate-200"
        >
          {{ header }}
        </h2>
        <p class="text-white text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Nunc sed blandit libero volutpat.
          Tempor id eu nisl nunc mi. In tellus integer feugiat scelerisque varius morbi.
          At imperdiet dui accumsan sit. Id ornare arcu odio ut sem nulla pharetra diam
          sit. Urna nunc id cursus metus aliquam eleifend. Amet luctus venenatis lectus
          magna fringilla urna porttitor. Dignissim enim sit amet venenatis urna cursus
          eget nunc scelerisque. Elementum sagittis vitae et leo duis. Convallis aenean et
          tortor at risus viverra adipiscing at in. Turpis egestas integer eget aliquet
          nibh praesent tristique magna sit. Gravida neque convallis a cras semper auctor
          neque. amet venenatis urna cursus eget nunc scelerisque. Elementum sagittis
          vitae et leo duis. Convallis aenean et tortor at risus viverra adipiscing at in.
          Turpis egestas integer eget aliquet nibh praesent tristique magna sit. Gravida
          neque convallis a cras semper auctor neque.
        </p>
      </section>
    </article>
  </div>
</template>
