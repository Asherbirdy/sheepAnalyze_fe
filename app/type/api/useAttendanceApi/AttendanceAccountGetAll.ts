export interface AttendanceAccountGetAllResponse {
  msg: string
  data: AttendanceAccountGetAll[]
}

export interface AttendanceAccountGetAll {
  _id: string
  name: string
  serialNumber: string
  serialNumberExpiredDate: string
  active: boolean
  createdAt: string
  updatedAt: string
  __v: number
}
