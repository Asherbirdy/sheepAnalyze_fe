import type { ChangeUserAccessRequestPayload, ShowMeResponse } from '~/type'
import { useRequestApi } from '~/composables'
import { UserRequestUrl } from '~/enum'

export interface GetUserListResponse {
  users: GetUserList[]
}

export interface GetUserList {
  _id: string
  name: string
  email: string
  emailVerified: boolean
  OTPAttempts: number
  isBlocked: boolean
  __v: number
  district: string
  groups: string[]
  leaderOfGroupIds: string[]
  landingPageAccess: string[]
  role: string
}

export const useUserApi = {
  showMe: async () => {
    return useRequestApi<ShowMeResponse, null>(UserRequestUrl.UserShowMe, {
      method: 'GET',
      server: false,
      lazy: true,
    })
  },
  getUserList: async () => {
    return useRequestApi<GetUserListResponse, null>(UserRequestUrl.UserGetUserList, {
      method: 'GET',
      server: false,
      lazy: true,
    })
  },
  changeUserAccess: async (payload: ChangeUserAccessRequestPayload) => {
    return useRequestApi(UserRequestUrl.UserChangeUserAccess, {
      method: 'POST',
      server: false,
      lazy: true,
      body: payload,
    })
  },
}
