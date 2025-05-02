/* eslint-disable ts/prefer-literal-enum-member */
export enum PublicRoutes {
  Home = '/',
  Login = '/login',
}

export const ClientBase = '/C'

export enum ClientRoutes {
  Home = `${ClientBase}/`,
  LandingPage = `${ClientBase}/landingPage`,
  LandingPageEditor = `${ClientBase}/landingPage/editor`,
  Blending = `${ClientBase}/blending`,
}
