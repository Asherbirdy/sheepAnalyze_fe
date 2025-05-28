import type { AttendanceAccountDeletePayload, AttendanceAccountGetAll } from '~/type'

export interface AttendanceAccountDataType {
  form: AttendanceAccountGetAll
  payload: {
    delete: AttendanceAccountDeletePayload
  }
}

export interface AttendanceAccountFeatureType {
  modal: {
    open: boolean
  }
}
