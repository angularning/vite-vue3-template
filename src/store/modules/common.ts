import { defineStore } from 'pinia'
export interface CommonState {
  userInfo: Auth.UserInfo
}
export const useCommonStore = defineStore('common', {
  persist: {
    enabled: true,
  },
  state: (): CommonState => ({
    userInfo: {},
  }),
  getters: {},
  actions: {
    setUserInfo(data: any) {
      this.userInfo = data
    },
  },
})
