import type { CreateLandingPagePayload, GetAllLandingPageResponse } from '~/type'
import { useRequestApi } from '~/composables'
import { PrivateApiUrl } from '~/enum'

export const useLandingPageApi = {
  create: async (payload: CreateLandingPagePayload) => await useRequestApi(PrivateApiUrl.LandingPageCreate, {
    method: 'POST',
    server: false,
    lazy: true,
    immediate: false,
    watch: false,
    body: payload,
  }),
  getAll: async () => await useRequestApi<GetAllLandingPageResponse, null>(PrivateApiUrl.LandingPageGetALL, {
    method: 'GET',
    server: false,
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
