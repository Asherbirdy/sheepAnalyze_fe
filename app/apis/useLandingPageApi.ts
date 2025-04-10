import type { CreateLandingPagePayload, EditInfoByIdPayload, GetAllLandingPageResponse, GetInfoByIdPayload, GetInfoByILandingPageResponse } from '~/type'
import { useRequestApi } from '~/composables'
import { PublicRequestUrl, UserRequestUrl } from '~/enum'

export const useLandingPageApi = {
  /*
    * CREATE
  */
  create: async (payload: CreateLandingPagePayload) =>
    await useRequestApi(UserRequestUrl.LandingPageCreate, {
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
    await useRequestApi<GetAllLandingPageResponse, null>(UserRequestUrl.LandingPageGetALL, {
      method: 'GET',
      server: false,
    }),
  /*
    * GET
  */
  getInfoById: async (payload: GetInfoByIdPayload) =>
    await useRequestApi<GetInfoByILandingPageResponse, null>(
      `${PublicRequestUrl.LandingPageGetInfoById}/?landingPageId=${payload.query.landingPageId}`,
      {
        method: 'GET',
        server: payload.ssr,
        lazy: payload.ssr,
      },
    ),
  /*
    * EDIT
  */
  editInfoById: async (payload: EditInfoByIdPayload) =>
    await useRequestApi(
      `${UserRequestUrl.LandingPageEditInfoById}/?landingPageId=${payload.query.landingPageId}`,
      {
        method: 'PUT',
        server: false,
        lazy: true,
        immediate: false,
        watch: false,
        body: payload.body,
      },
    ),
}
