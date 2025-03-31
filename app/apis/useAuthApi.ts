import type { LoginError, LoginPayload, LoginResponse } from '~/type'
import { useRequestApi } from '~/composables/useRequestApi'

export const useAuthApi = {
  // 登入
  login: async (payload: LoginPayload) =>
    await useRequestApi<LoginResponse, LoginError>('/auth/login', {
      method: 'POST',
      body: payload,
      server: false,
      lazy: true,
      immediate: false,
      watch: false,
    }),
  // 註冊
  register: async (state: any) =>
    await useRequestApi('/auth/userRegister', {
      method: 'POST',
      body: state,
      server: false,
      lazy: true,
      immediate: false,
      watch: false,
    }),
}
