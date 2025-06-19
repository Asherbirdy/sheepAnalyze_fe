import { UserRequestUrl } from '../enum'

export interface GetAllLineFellowshipReportResponse {
  msg: string
  lineFellowshipReportIds: LineFellowshipReportId[]
}

export interface LineFellowshipReportId {
  _id: string
  name: string
  createBy: string
  recordWeekSundayDate: string
  expiredTime: string
  createdAt: string
  updatedAt: string
  __v: number
}

export interface LineFellowshipReportIdCreatePayload {
  name: string
  recordWeekSundayDate: Date
}

export interface LineFellowshipReportIdEditPayload {
  name: string
  lineFellowshipReportId: Date
}

export const useLineFellowshipReportApi = {
  getAll: async () =>
    await useRequestApi<GetAllLineFellowshipReportResponse, null>(
      UserRequestUrl.LineFellowshipReport,
      {
        method: 'GET',
        server: false,
      },
    ),
  create: async (payload: LineFellowshipReportIdCreatePayload) =>
    await useRequestApi(
      UserRequestUrl.LineFellowshipReport,
      {
        method: 'POST',
        server: false,
        body: payload,
        lazy: true,
        immediate: false,
        watch: false,
      },
    ),
  edit: async (payload: LineFellowshipReportIdEditPayload) =>
    await useRequestApi(UserRequestUrl.LineFellowshipReport, {
      method: 'PUT',
      server: false,
      body: payload,
      lazy: true,
      immediate: false,
      watch: false,
    }),
}
