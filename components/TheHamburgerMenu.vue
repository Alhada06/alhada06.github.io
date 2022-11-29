<template>
  <HeadlessPopover v-slot="{ open }" class="relative">
    <HeadlessPopoverButton>
      <Icon v-if="open" name="ic:baseline-close" />
      <Icon v-else name="ic:sharp-menu" />
    </HeadlessPopoverButton>

    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="translate-y-1 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="translate-y-1 opacity-0"
    >
      <HeadlessPopoverPanel
        class="absolute inset-x-7 top-7 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl"
      >
        <div
          class="relative grid gap-8 text-blue-800 bg-white dark:bg-bgblue shadow-sm dark:shadow-bgbluelighter dark:text-white p-7 rounded lg:grid-cols-2"
        >
          <div>
            <TheDarkMode />
          </div>
          <div>
            <TheLocalSwitch />
          </div>
        </div>
      </HeadlessPopoverPanel>
    </transition>
  </HeadlessPopover>
</template>
