import type { BindOTPEmailPayload, CheckValidTokenResponse, LoginError, LoginPayload, LoginResponse, RegisterPayload, RegisterResponse } from '~/type'
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
    await useRequestApi<RegisterResponse, null>(PublicApiUrl.UserRegister, {
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

  /*
    * 發送 OTP 給 Email
  */
  sendOTP: async () =>
    await useRequestApi<any, null>(PrivateApiUrl.SendOTP, {
      method: 'GET',
      server: false,
    }),

  /*
    * 綁定 OTP Email
  */
  bindOTPEmail: async (payload: BindOTPEmailPayload) =>
    await useRequestApi<any, null>(PrivateApiUrl.BindOTPEmail, {
      method: 'POST',
      body: payload,
      server: false,
      lazy: true,
      immediate: false,
      watch: false,
    }),
}
