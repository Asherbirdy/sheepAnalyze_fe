import type { CreateLandingPagePayload, GetAllLandingPageResponse, GetInfoByIdPayload, GetInfoByILandingPageResponse } from '~/type'
import { useRequestApi } from '~/composables'
import { PrivateApiUrl } from '~/enum'

export const useLandingPageApi = {
  /*
    * CREATE
  */
  create: async (payload: CreateLandingPagePayload) =>
    await useRequestApi(PrivateApiUrl.LandingPageCreate, {
      method: 'POST',
      server: false,
      lazy: true,
      immediate: false,
      watch: false,
      body: payload,
    }),
  /*
    * GET
  */
  getAll: async () =>
    await useRequestApi<GetAllLandingPageResponse, null>(PrivateApiUrl.LandingPageGetALL, {
      method: 'GET',
      server: false,
    }),
  /*
    * GET
  */
  getInfoById: async (payload: GetInfoByIdPayload) =>
    await useRequestApi<GetInfoByILandingPageResponse, null>(`${PrivateApiUrl.LandingPageGetInfoById}/?landingPageId=${payload.landingPageId}`, {
      method: 'GET',
      server: false,
      lazy: false,
    }),
  /*
    * EDIT
  */
  editInfoById: async () =>
    await useRequestApi(PrivateApiUrl.LandingPageEditInfoById, {
      method: 'PUT',
      server: false,
      lazy: true,
      immediate: false,
      watch: false,
    }),
}
