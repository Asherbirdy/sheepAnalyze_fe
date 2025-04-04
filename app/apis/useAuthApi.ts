import type { CheckValidTokenResponse, LoginError, LoginPayload, LoginResponse, RegisterPayload } from '~/type'
import { useRequestApi } from '~/composables/useRequestApi'
import { PrivateApiUrl, PublicApiUrl } from '~/enum'

export const useAuthApi = {
  /*
    * 登入
  */
  login: async (payload: LoginPayload) =>
    await useRequestApi<LoginResponse, LoginError>(PublicApiUrl.Login, {
      method: 'POST',
      body: payload,
      server: false,
      lazy: true,
      immediate: false,
      watch: false,
    }),
  /*
    * 註冊
  */
  register: async (state: RegisterPayload) =>
    await useRequestApi(PublicApiUrl.UserRegister, {
      method: 'POST',
      body: state,
      server: false,
      lazy: true,
      immediate: false,
      watch: false,
    }),
  /*
    * 檢查 token 是否有效
  */
  checkValidToken: async () =>
    await useRequestApi<CheckValidTokenResponse, null>(PrivateApiUrl.CheckValidToken, {
      method: 'GET',
      server: false,
      lazy: true,
      immediate: false,
      watch: false,
    }),
}
