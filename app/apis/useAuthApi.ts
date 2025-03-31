import type { LoginError, LoginPayload, LoginResponse } from '~/type'
import { useRequestApi } from '~/composables/useRequestApi'

export const useAuthApi = {
  login: async (payload: LoginPayload) => await useRequestApi<LoginResponse, LoginError>('/auth/login', {
    method: 'POST',
    body: payload,
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
