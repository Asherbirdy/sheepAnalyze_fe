import { useRequestApi } from '~/composables'
import { UserRequestUrl } from '~/enum'

export const useMeetingCenterApi = {
  getAll: async () =>
    await useRequestApi(UserRequestUrl.MeetingCenter, {
      method: 'GET',
      server: false,
      lazy: true,
      immediate: false,
    }),
  create: async () =>
    await useRequestApi(UserRequestUrl.MeetingCenter, {
      method: 'POST',
      server: false,
      lazy: true,
      immediate: false,
    }),
}
