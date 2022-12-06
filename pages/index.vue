<script setup>
const config = useRuntimeConfig();
const headers = ["section 1", "sections 2", "section 3", "section 4"];
const root = ref(null);
const section1 = ref(null);
const { stop } = useIntersectionObserver(
  section1,
  ([{ isIntersecting }], observerElement) => {
    isIntersectingSection.value.section1 = isIntersecting;
  },
  { rootMargin: "0px 0px -80% 0px" }
);
const section2 = ref(null);
const { stop: stop2 } = useIntersectionObserver(
  section2,
  ([{ isIntersecting }], observerElement) => {
    isIntersectingSection.value.section2 = isIntersecting;
  },
  { rootMargin: "0px 0px -80% 0px" }
);
const section3 = ref(null);
const { stop: stop3 } = useIntersectionObserver(
  section3,
  ([{ isIntersecting }], observerElement) => {
    isIntersectingSection.value.section3 = isIntersecting;
  },
  { rootMargin: "0px 0px -80% 0px" }
);
const section4 = ref(null);
const { stop: stop4 } = useIntersectionObserver(
  section4,
  ([{ isIntersecting }], observerElement) => {
    isIntersectingSection.value.section4 = isIntersecting;
  },
  { rootMargin: "0px 0px -80% 0px" }
);
const test = () => {
  console.log(config.public.myVar);
};

// const query = gql`
//  query getProducts{
//    productCollection{
//     total
//    items{name,price}
//   }

//  `;
// const query = gql`
//   query getProducts {
//     productCollection {
//       total
//       items {
//         name
//         price
//       }
//     }
//   }
// `;

const query = gql`
  query {
    productCollection {
      total
      items {
        name
      }
    }
  }
`;
// const variables = { limit: 5 };

const { data } = await useAsyncQuery(query);
</script>

<template>
  <div ref="root">
    <article class="mb-[500px] scroll-pt-16">
      <h1
        ref="head"
        @click="test"
        class="py-4 pl-8 ml-4 text-4xl dark:text-white text-blue-800"
      >
        My article - {{ config.myVar }}
      </h1>
      <div></div>
      <section ref="section1" class="m-4 p-8 backdrop-blur-sm rounded-lg">
        <h2 id="0" class="py-4 text-2xl pt-10 dark:text-slate-200 text-blue-900">
          Section 1
        </h2>
        <p class="dark:text-white text-blue-800 text-justify">
          W Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
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
      <section ref="section2" class="m-4 p-8 backdrop-blur-sm rounded-lg">
        <h2 id="1" class="py-4 text-2xl pt-10 dark:text-slate-200 text-blue-900">
          Section 2
        </h2>
        <p class="dark:text-white text-blue-800 text-justify">
          W Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
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
      <section ref="section3" class="m-4 p-8 backdrop-blur-sm rounded-lg">
        <h2 id="2" class="py-4 text-2xl pt-10 dark:text-slate-200 text-blue-900">
          Section 3
        </h2>
        <p class="dark:text-white text-blue-800 text-justify">
          W Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
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
      <section id="3" ref="section4" class="m-4 p-8 backdrop-blur-sm rounded-lg">
        <h2 class="py-4 text-2xl pt-10 dark:text-slate-200 text-blue-900">Section 4</h2>
        <p class="dark:text-white text-blue-800 text-justify">
          W Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
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
    <ClientOnly> {{ data }}</ClientOnly>
  </div>
</template>
