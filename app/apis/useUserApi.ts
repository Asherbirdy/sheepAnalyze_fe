import type { ShowMeResponse } from '~/type'
import { useRequestApi } from '~/composables'
import { PrivateApiUrl } from '~/enum'

export const useUserApi = {
  showMe: async () => {
    return useRequestApi<ShowMeResponse, null>(PrivateApiUrl.UserShowMe, {
      method: 'GET',
      server: false,
      lazy: true,
    })
  },
}
