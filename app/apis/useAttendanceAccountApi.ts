import { UserRequestUrl } from '~/enum'

export const useAttendanceAccountApi = {

  getAll: async () =>
    await useRequestApi(UserRequestUrl.AttendanceAccount, {
      method: 'GET',
      server: false,
    }),

  create: async (payload: any) =>
    await useRequestApi(UserRequestUrl.AttendanceAccountCreate, {
      method: 'POST',
      body: payload,
      server: false,
      lazy: true,
      immediate: false,
      watch: false,
    }),

  edit: async (payload: any) =>
    await useRequestApi(UserRequestUrl.AttendanceAccountEdit, {
      method: 'PUT',
      body: payload,
      server: false,
      lazy: true,
      immediate: false,
      watch: false,
    }),

  activate: async (payload: any) =>
    await useRequestApi(UserRequestUrl.AttendanceAccountActivate, {
      method: 'POST',
      body: payload,
      server: false,
      lazy: true,
      immediate: false,
      watch: false,
    }),
}
