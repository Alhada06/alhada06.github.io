<script setup lang="ts">
// import { loadFull } from "tsparticles";
import type { ISourceOptions, Container } from "@tsparticles/engine";
const nav = ref(null);
const targetIsVisible = ref(false);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { stop } = useIntersectionObserver(
  nav,
  ([{ isIntersecting }], _observerElement) => {
    targetIsVisible.value = isIntersecting;
    // console.log(observerElement)
  },
);

const particlesContainer: Container = ref(undefined);
const particlesLoaded = (container?: Container) => {
  container?.loadTheme(isDark.value ? "dark" : "light");
  particlesContainer.value = container;
  console.log("trigrred load particles", new Date());
};
const options: ISourceOptions = {
  themes: [
    {
      name: "dark",
      default: {
        value: true,
        mode: "dark",
      },
      options: {
        background: {
          color: {
            value: "#041731",
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
          },
        },
      },
    },
    {
      name: "light",
      default: {
        value: true,
        mode: "light",
      },
      options: {
        background: {
          color: {
            value: "#f1f5f9",
          },
        },
        particles: {
          color: {
            value: "#1e40af",
          },
          links: {
            color: "#1e40af",
          },
        },
      },
    },
  ],

  fullScreen: {
    enable: true,
    zIndex: -1,
  },
  fpsLimit: 60,
  interactivity: {
    detectsOn: "window",
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "grab",
      },
      // resize: true,
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 40,
      },
      push: {
        quantity: 4,
        duration: 0.2,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    links: {
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: "out",
      random: false,
      speed: 2,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        // value_area: 1000,
      },
      value: 100,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      // random: true,
      value: 3,
    },
  },
  detectRetina: true,
};
watch(isDark, () => {
  particlesContainer.value.loadTheme(isDark.value ? "dark" : "light");
});
// const optionsLight: ISourceOptions = {
//   background: {
//     color: {
//       value: "#f1f5f9", // slate-100
//     },
//   },
//   fullScreen: {
//     enable: true,
//     zIndex: -1,
//   },
//   fpsLimit: 60,
//   interactivity: {
//     detectsOn: "window",
//     events: {
//       onClick: {
//         enable: true,
//         mode: "push",
//       },
//       onHover: {
//         enable: true,
//         mode: "grab",
//       },
//       // resize: true,
//     },
//     modes: {
//       bubble: {
//         distance: 400,
//         duration: 2,
//         opacity: 0.8,
//         size: 40,
//       },
//       push: {
//         quantity: 4,
//         duration: 0.2,
//       },
//       repulse: {
//         distance: 200,
//         duration: 0.4,
//       },
//     },
//   },
//   particles: {
//     color: {
//       value: "#1e40af",
//     },
//     links: {
//       color: "#1e40af",
//       distance: 150,
//       enable: true,
//       opacity: 0.5,
//       width: 1,
//     },
//     collisions: {
//       enable: true,
//     },
//     move: {
//       direction: "none",
//       enable: true,
//       outModes: "out",
//       random: false,
//       speed: 2,
//       straight: false,
//     },
//     number: {
//       density: {
//         enable: true,
//         // value_area: 1000,
//       },
//       value: 100,
//     },
//     opacity: {
//       value: 0.5,
//     },
//     shape: {
//       type: "circle",
//     },
//     size: {
//       // random: true,
//       value: 3,
//     },
//   },
//   detectRetina: true,
// };
</script>
<template>
  <div>
    <div class="relative -z-10 h-full w-full bg-bgblue">
      <ClientOnly>
        <vue-particles
          id="tsparticles"
          @particles-loaded="particlesLoaded"
          :options="options"
        />
      </ClientOnly>
    </div>
    <div ref="defRoot">
      <TheNavbar ref="nav" />
      <TheSidebar :is-sidebar-visible="!targetIsVisible">
        <slot />
      </TheSidebar>
      <ClientOnly>
        <TheScrollTop />
      </ClientOnly>
    </div>
  </div>
</template>
