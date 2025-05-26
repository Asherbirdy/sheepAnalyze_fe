import type { LandingPageAccess, Role } from '~/enum'

export interface ChangeUserAccessRequestPayload {
  userId: string
  role: Role
  access: LandingPageAccess[]
}
