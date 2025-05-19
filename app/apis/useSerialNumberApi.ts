import type { SerialNumberCreatePayload, SerialNumberGetAllResponse } from '~/type'
import { useRequestApi } from '~/composables'
import { UserRequestUrl } from '~/enum'

export const useSerialNumberApi = {
  getAll: async () =>
    await useRequestApi<SerialNumberGetAllResponse, null>(UserRequestUrl.SerialNumberGetAll, {
      method: 'GET',
      server: false,
    }),

  create: async (payload: SerialNumberCreatePayload) =>
    await useRequestApi(UserRequestUrl.SerialNumberCreate, {
      method: 'POST',
      server: false,
      lazy: true,
      immediate: false,
      watch: false,
      body: payload,
    }),

  delete: async (payload: any) =>
    await useRequestApi(UserRequestUrl.SerialNumberDelete, {
      method: 'POST',
      server: false,
      lazy: true,
      immediate: false,
      watch: false,
      body: payload,
    }),
}
