import type { ChangeUserAccessRequestPayload, ShowMeResponse } from '~/type'
import { useRequestApi } from '~/composables'
import { UserRequestUrl } from '~/enum'

export const useUserApi = {
  showMe: async () => {
    return useRequestApi<ShowMeResponse, null>(UserRequestUrl.UserShowMe, {
      method: 'GET',
      server: false,
      lazy: true,
    })
  },
  getUserList: async () => {
    return useRequestApi(UserRequestUrl.UserGetUserList, {
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
