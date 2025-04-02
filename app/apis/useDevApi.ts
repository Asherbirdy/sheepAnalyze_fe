import { useRequestApi } from '~/composables'
import { PublicApiUrl } from '~/enum'

export const useDevApi = {
  get: async () => {
    return await useRequestApi(PublicApiUrl.Dev, {
      method: 'GET',
      server: false,
      lazy: true,
    })
  },
}
