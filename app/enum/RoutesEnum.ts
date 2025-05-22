/* eslint-disable ts/prefer-literal-enum-member */
export enum PublicRoutes {
  Home = '/',
  Login = '/login',
  LandingPage = '/lands',
}

export const ClientBase = '/C'

export enum ClientRoutes {
  Home = `${ClientBase}/`,
  LandingPage = `${ClientBase}/landingPage`,
  LandingPageEditor = `${ClientBase}/landingPage/editor`,
  Blending = `${ClientBase}/blending`,
  Sheet = `${ClientBase}/sheet`,
  SerialNumber = `${ClientBase}/serialNumber`,
  MeetingCenter = `${ClientBase}/meetingCenter`,
}
