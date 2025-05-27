import type { AttendanceAccountEditPayload, AttendanceAccountGetAll } from '~/type'

export interface AttendanceAccountDataType {
  currentFormData: AttendanceAccountGetAll
  payload: {
    edit: AttendanceAccountEditPayload
  }
}

export interface AttendanceAccountFeatureType {
  modal: {
    open: boolean
  }
}
