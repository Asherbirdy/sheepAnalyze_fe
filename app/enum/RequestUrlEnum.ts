/*
 * 不需要 token 的 API
*/
export enum PublicRequestUrl {
  // DEV
  Dev = '/dev',

  // AUTH
  Login = '/auth/login',
  UserRegister = '/auth/userRegister',

  // LANDING PAGE
  LandingPageGetInfoById = '/landingPage/getLandingPageInfoById',
}

/*
 * 需要 token 的 API
*/
export enum UserRequestUrl {
  // DEV
  Dev = '/dev',

  // AUTH
  CheckValidToken = '/auth/checkValidToken',
  SendOTP = '/auth/sendOTP',
  BindOTPEmail = '/auth/bindOTPEmail',

  // USER
  UserShowMe = '/users/showMe',
  UserGetUserList = '/users/getAllUsers',
  UserChangeUserAccess = '/users/changeUserAccess',

  // LANDING PAGE
  LandingPageCreate = '/landingPage/create',
  LandingPageSetUrlPath = '/landingPage/setUrlPath',
  LandingPageGetALL = '/landingPage/all',
  LandingPageEditInfoById = '/landingPage/editPageInfoById',
  LandingPageEditHtmlById = '/landingPage/editHtmlById',
  LandingPage = '/landingPage',

  // BLENDING
  BlendingCreateFromSheet = '/blending/createFromSheet',
  BlendingGetAll = '/blending/getAll',

  // SHEET
  SheetCreate = '/sheet/create',
  SheetAll = '/sheet/all',
  SheetEdit = '/sheet/edit',
  SheetDelete = '/sheet/delete',

  // SERIAL NUMBER
  SerialNumberGetAll = '/userSerialNumber/getAll',
  SerialNumberCreate = '/userSerialNumber/create',
  SerialNumberDelete = '/userSerialNumber/delete',

  // DISTRICT
  District = '/district',

  // MEETING CENTER
  MeetingCenter = '/meetingCenter/',

  // ATTENDANCE ACCOUNT
  AttendanceAccount = '/attendanceAccount/getAll',
  AttendanceAccountCreate = '/attendanceAccount/create',
  AttendanceAccountActivate = '/attendanceAccount/activate',
  AttendanceAccountEdit = '/attendanceAccount/edit',
}
