import type { ShowMeResponse } from '~/type'
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
}
