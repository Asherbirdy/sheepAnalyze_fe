/* eslint-disable ts/prefer-literal-enum-member */
export enum PublicRoutes {
  Home = '/',
  Login = '/login',
  LandingPage = '/lands',
}

export const ClientBase = '/C'

export enum ClientRoutes {
  Home = `${ClientBase}/`,
  User = `${ClientBase}/user`,

  LandingPage = `${ClientBase}/landingPage`,
  LandingPageEditor = `${ClientBase}/landingPage/editor`,

  Sheet = `${ClientBase}/sheet`,
  SerialNumber = `${ClientBase}/serialNumber`,

  MeetingCenter = `${ClientBase}/googleSheet/meetingCenter`,
  Blending = `${ClientBase}/googleSheet/blending`,
}
