<script setup>
import { loadFull } from "tsparticles";

const nav = ref(null);
const targetIsVisible = ref(false);

const { stop } = useIntersectionObserver(nav, ([{ isIntersecting }], observerElement) => {
  targetIsVisible.value = isIntersecting;
  // console.log(observerElement)
});
const particlesContainer = ref(null);
const particlesInit = async (engine) => {
  await loadFull(engine);
};

const tsparticles = ref(null);
const test = () => {
  console.log(tsparticles.value, particlesContainer.value);
  particlesContainer.value.loadTheme("light");
};

const options = {
  background: {
    color: {
      value: "#041731",
    },
  },
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
      resize: true,
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
    color: {
      value: "#ffffff",
    },
    links: {
      color: "#ffffff",
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
      outMode: "out",
      random: false,
      speed: 2,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        value_area: 1000,
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
      random: true,
      value: 3,
    },
  },
  detectRetina: true,
};
const optionsLight = {
  background: {
    color: {
      value: "#f1f5f9", //slate-100
    },
  },
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
      resize: true,
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
    color: {
      value: "#1e40af",
    },
    links: {
      color: "#1e40af",
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
      outMode: "out",
      random: false,
      speed: 2,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        value_area: 1000,
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
      random: true,
      value: 3,
    },
  },
  detectRetina: true,
};
</script>
<template>
  <div>
    <div class="relative -z-10">
      <ClientOnly>
        <Particles v-if="isDark" :options="options" :particlesInit="particlesInit" id="tsparticles" />
        <Particles v-else :options="optionsLight" :particlesInit="particlesInit" id="tsparticles" />
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
