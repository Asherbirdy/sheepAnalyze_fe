import { useRequestApi } from '~/composables'
import { UserRequestUrl } from '~/enum'

interface CreateSheetPayload {
  name: string
  api: string
}

interface EditSheetPayload {
  _id: string
  name: string
  api: string
}

interface DeleteSheetPayload {
  id: string
}

export const useSheetApi = {
  create: async (payload: CreateSheetPayload) =>
    await useRequestApi(UserRequestUrl.SheetCreate, {
      method: 'POST',
      server: false,
      lazy: true,
      immediate: false,
      watch: false,
      body: payload,
    }),
  getAll: async () =>
    await useRequestApi(UserRequestUrl.SheetAll, {
      method: 'GET',
      server: false,
    }),
  edit: async (payload: EditSheetPayload) =>
    await useRequestApi(UserRequestUrl.SheetEdit, {
      method: 'PUT',
      server: false,
      lazy: true,
      immediate: false,
      watch: false,
      body: payload,
    }),
  delete: async (payload: DeleteSheetPayload) =>
    await useRequestApi(UserRequestUrl.SheetDelete, {
      method: 'DELETE',
      server: false,
      lazy: true,
      immediate: false,
      watch: false,
      body: payload,
    }),
}
