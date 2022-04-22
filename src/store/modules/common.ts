import { defineStore } from 'pinia'
interface CommonState {
    user: {};
  }
export const useCommonStore = defineStore('common', {
  persist: {
    enabled: true,
  },
  state: (): CommonState => ({
    user: {}
  }),
  getters: {},
  actions: {},
})
