import type { AttendanceAccountGetAll } from '~/type'

export interface AttendanceAccountDataType {
  form: AttendanceAccountGetAll
  // payload: {
  //   edit: AttendanceAccountEditPayload
  // }
}

export interface AttendanceAccountFeatureType {
  modal: {
    open: boolean
  }
}
