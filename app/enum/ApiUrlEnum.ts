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
  Dev = '/dev',
  // USER
  UserShowMe = '/users/showMe',
}
