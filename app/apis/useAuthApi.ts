import type { LoginError, LoginPayload, LoginResponse } from '~/type'
import { useRequestApi } from '~/composables/useRequestApi'
import { PublicApiUrl } from '~/enum'

export const useAuthApi = {
  // 登入
  login: async (payload: LoginPayload) =>
    await useRequestApi<LoginResponse, LoginError>(PublicApiUrl.Login, {
      method: 'POST',
      body: payload,
      server: false,
      lazy: true,
      immediate: false,
      watch: false,
    }),
  // 註冊
  register: async (state: any) =>
    await useRequestApi(PublicApiUrl.UserRegister, {
      method: 'POST',
      body: state,
      server: false,
      lazy: true,
      immediate: false,
      watch: false,
    }),
}
