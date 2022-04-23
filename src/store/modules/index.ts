import { defineStore } from 'pinia'
import { themeSetting } from '@/settings'
export interface PersistStrategy {
  key?: string
  storage?: Storage
  paths?: string[]
}
export interface PersistOptions {
  enabled: true
  strategies?: PersistStrategy[]
}
export const useThemeStore = defineStore('theme', {
  persist: {
    enabled: true,
    // strategies: [
    //     {
    //       storage: localStorage,
    //     }
    //   ]
  },
  state() {
    return {
      themeSetting,
    }
  },
  getters: {},
  actions: {
    setDarkMode(visible: boolean) {
      this.themeSetting.darkMode = visible
    },
  },
})
