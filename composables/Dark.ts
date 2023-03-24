import { WritableComputedRef } from "nuxt/dist/app/compat/capi";

export const isDark :WritableComputedRef<boolean> = useDark({
    storageKey: 'app-theme-appearance',
  });