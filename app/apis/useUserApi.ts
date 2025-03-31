import { useRequestApi } from '~/composables/useRequestApi'
import { PrivateApiUrl } from '~/enum'

export const useUserApi = {
  showMe: async () => {
    return useRequestApi(PrivateApiUrl.UserShowMe, {
      method: 'GET',
      server: false,
    })
  },
}
