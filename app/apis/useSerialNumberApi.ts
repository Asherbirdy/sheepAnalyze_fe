import type { SerialNumberCreatePayload, SerialNumberGetAllResponse } from '~/type'
import { useRequestApi } from '~/composables'
import { UserRequestUrl } from '~/enum'

const nuxtApp = useNuxtApp()
export const useSerialNumberApi = {
  getAll: async () =>
    await useRequestApi<SerialNumberGetAllResponse, null>(UserRequestUrl.SerialNumberGetAll, {
      method: 'GET',
      server: false,
      key: UserRequestUrl.SerialNumberGetAll,
      getCachedData: key => nuxtApp.payload.data[key] || nuxtApp.static.data[key],
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

  delete: async (payload: { id: string }) =>
    await useRequestApi(UserRequestUrl.SerialNumberDelete, {
      method: 'DELETE',
      server: false,
      lazy: true,
      immediate: false,
      watch: false,
      body: payload,
    }),
}
