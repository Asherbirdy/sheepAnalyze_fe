import { useRequestApi } from '~/composables'
import { PrivateApiUrl } from '~/enum'

export const useLandingPageApi = {
  create: async () => {
    return await useRequestApi(PrivateApiUrl.LandingPageCreate, {
      method: 'POST',
      server: false,
      lazy: true,
    })
  },
  getAll: async () => {
    return await useRequestApi(PrivateApiUrl.LandingPageGetALL, {
      method: 'GET',
      server: false,
      lazy: true,
    })
  },
  getInfoById: async () => {
    return await useRequestApi(PrivateApiUrl.LandingPageGetInfoById, {
      method: 'GET',
      server: false,
      lazy: true,
    })
  },
  editInfoById: async () => {
    return await useRequestApi(PrivateApiUrl.LandingPageEditInfoById, {
      method: 'PUT',
      server: false,
      lazy: true,
    })
  },
  setUrlPath: async () => {
    return await useRequestApi(PrivateApiUrl.LandingPageSetUrlPath, {
      method: 'POST',
      server: false,
      lazy: true,
    })
  },
}
