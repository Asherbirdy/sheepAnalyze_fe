/**
 * 不需要 token 的 API
 */
export enum PublicApiUrl {
  // DEV
  Dev = '/dev',

  // AUTH
  Login = '/auth/login',
  UserRegister = '/auth/userRegister',
}

/**
 * 需要 token 的 API
 */
export enum PrivateApiUrl {
  // DEV
  Dev = '/dev',

  // AUTH
  CheckValidToken = '/auth/checkValidToken',
  SendOTP = '/auth/sendOTP',
  BindOTPEmail = '/auth/bindOTPEmail',

  // USER
  UserShowMe = '/users/showMe',
}
