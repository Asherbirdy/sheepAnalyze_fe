import { useRequestApi } from '~/composables'

export const useDevApi = {
  get: async () => {
    return await useRequestApi('/dev', {
      method: 'GET',
      headers: {
        Auth: 'N',
      },
    })
  },
}
