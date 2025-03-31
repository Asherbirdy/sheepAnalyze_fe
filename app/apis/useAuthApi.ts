import { useRequestApi } from '~/composables/useRequestApi'

export const useAuthApi = {
  login: async (state: any) => await useRequestApi('/auth/login', {
    method: 'POST',
    body: state,
    server: false,
    lazy: true,
    immediate: false,
    watch: false,
  }),
  register: async (state: any) => await useRequestApi('/auth/userRegister', {
    method: 'POST',
    body: state,
    server: false,
    lazy: true,
    immediate: false,
    watch: false,
  }),
  // 存會員登入狀態
  showMe: async () => await useRequestApi('/users/showMe', {
    method: 'GET',
    server: false,
    lazy: true,
    watch: false,
  }),
}
