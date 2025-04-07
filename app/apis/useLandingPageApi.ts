import { useRequestApi } from '~/composables'
import { PrivateApiUrl } from '~/enum'

interface LandingPageCreatePayload {
  title: string
}

export const useLandingPageApi = {
  create: async (payload: LandingPageCreatePayload) => await useRequestApi(PrivateApiUrl.LandingPageCreate, {
    method: 'POST',
    server: false,
    lazy: true,
    immediate: false,
    watch: false,
    body: payload,
  }),
  getAll: async () => await useRequestApi(PrivateApiUrl.LandingPageGetALL, {
    method: 'GET',
    server: false,
    lazy: true,
    immediate: false,
    watch: false,
  }),
  getInfoById: async () => await useRequestApi(PrivateApiUrl.LandingPageGetInfoById, {
    method: 'GET',
    server: false,
    lazy: true,
    immediate: false,
    watch: false,
  }),
  editInfoById: async () => await useRequestApi(PrivateApiUrl.LandingPageEditInfoById, {
    method: 'PUT',
    server: false,
    lazy: true,
    immediate: false,
    watch: false,
  }),
}
