import type { GetAllDistrictResponse } from '~/type'
import { useRequestApi } from '~/composables'
import { UserRequestUrl } from '~/enum'

export const useDistrictApi = {
  /*
    * GET
  */
  getAll: async () =>
    await useRequestApi<GetAllDistrictResponse, null>(UserRequestUrl.District, {
      method: 'GET',
      server: false,
      lazy: true,
    }),

  /*
    * CREATE
  */
  create: async (payload: { name: string }) =>
    await useRequestApi(UserRequestUrl.District, {
      method: 'POST',
      server: false,
      lazy: true,
      body: payload,
    }),

  /*
    * EDIT
  */
  edit: async (payload: { newName: string, districtId: string }) =>
    await useRequestApi(UserRequestUrl.District, {
      method: 'PUT',
      server: false,
      lazy: true,
      body: payload,
    }),
}
