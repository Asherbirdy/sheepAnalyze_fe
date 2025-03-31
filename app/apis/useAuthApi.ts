import { useRequestApi } from '~/composables/useRequestApi'

interface LoginPayload {
  email: string
  password: string
}

export interface LoginResponse {
  user: User
  token: {
    accessTokenJWT: string
    refreshTokenJWT: string
  }
}

export interface User {
  name: string
  userId: string
  role: string
  districtId: string
  emailVerified: boolean
  landingPageAccess: string[]
}

export const useAuthApi = {
  login: async (payload: LoginPayload) => await useRequestApi<LoginResponse, any>('/auth/login', {
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
