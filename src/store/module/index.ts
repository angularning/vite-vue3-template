import { defineStore } from 'pinia'
import { themeSetting } from '@/settings'
export const useThemeStore = defineStore('theme', {
  state() {
    return themeSetting
  },
  getters: {},
  actions: {
    // setTabVisible(visible: boolean) {
    //   this.tags.visible = visible
    // },
  },
})
