import type { AttendanceAccountDeletePayload, AttendanceAccountGetAll } from '~/type'

export interface AttendanceAccountDataType {
  form: AttendanceAccountGetAll
}

export interface AttendanceAccountFeatureType {
  modal: {
    open: boolean
  }
  delete: {
    isLoading: boolean
  }
}
