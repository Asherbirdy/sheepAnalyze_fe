import type {
  AttendanceAccountActivatePayload,
  AttendanceAccountCreatePayload,
  AttendanceAccountEditPayload,
  AttendanceAccountGetAllResponse,
} from '~/type'
import { UserRequestUrl } from '~/enum'

interface AttendanceAccountDeletePayload {
  attendanceAccountId: string
}

export const useAttendanceAccountApi = {

  getAll: async () => {
    const nuxtApp = useNuxtApp()
    return await useRequestApi<AttendanceAccountGetAllResponse, null>(UserRequestUrl.AttendanceAccount, {
      method: 'GET',
      server: false,
      key: UserRequestUrl.AttendanceAccount,
      getCachedData: key => nuxtApp.payload.data[key] || nuxtApp.static.data[key],
    })
  },

  create: async (payload: AttendanceAccountCreatePayload) =>
    await useRequestApi(UserRequestUrl.AttendanceAccountCreate, {
      method: 'POST',
      body: payload,
      server: false,
      lazy: true,
      immediate: false,
      watch: false,
    }),

  edit: async (payload: AttendanceAccountEditPayload) =>
    await useRequestApi(UserRequestUrl.AttendanceAccountEdit, {
      method: 'PUT',
      body: payload,
      server: false,
      lazy: true,
      immediate: false,
      watch: false,
    }),

  activate: async (payload: AttendanceAccountActivatePayload) =>
    await useRequestApi(UserRequestUrl.AttendanceAccountActivate, {
      method: 'POST',
      body: payload,
      server: false,
      lazy: true,
      immediate: false,
      watch: false,
    }),

  delete: async (payload: AttendanceAccountDeletePayload) =>
    await useRequestApi(`${UserRequestUrl.AttendanceAccount}?attendanceAccountId=${payload.attendanceAccountId}`, {
      method: 'DELETE',
      server: false,
      lazy: true,
      immediate: false,
      watch: false,
    }),
}
