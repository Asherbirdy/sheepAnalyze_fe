export interface LoginPayload {
  email: string
  password: string
}

export interface LoginResponse {
  user: User
  token: {
    accessTokenJWT: string
    refreshTokenJWT: string
  }
}

export interface User {
  name: string
  userId: string
  role: string
  districtId: string
  emailVerified: boolean
  landingPageAccess: string[]
}

export interface LoginError {
  data: {
    success: boolean
    error: 'WRONG_EMAIL_OR_PASSWORD'
  }
}
