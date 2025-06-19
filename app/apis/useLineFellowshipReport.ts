import { UserRequestUrl } from '../enum'

export const useLineFellowshipReportApi = {
  getAll: async () =>
    await useRequestApi(UserRequestUrl.LineFellowshipReport, {
      method: 'GET',
      server: false,
    }),
  create: async () =>
    await useRequestApi(UserRequestUrl.LineFellowshipReport, {
      method: 'POST',
      server: false,
    }),
  edit: async () =>
    await useRequestApi(UserRequestUrl.LineFellowshipReport, {
      method: 'PUT',
      server: false,
    }),
}
