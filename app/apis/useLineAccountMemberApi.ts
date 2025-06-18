import type { LineAccountMemberCheckAccountStatusError, LineAccountMemberCheckAccountStatusPayload } from '~/type'
import { UserRequestUrl } from '~/enum'

export const useLineAccountMemberApi = {
  getAll: async () =>
    await useRequestApi(UserRequestUrl.LineAccountMemberGetAll, {
      method: 'GET',
      server: false,
      lazy: true,
    }),
  checkAccountStatus: async (payload: LineAccountMemberCheckAccountStatusPayload) =>
    await useRequestApi<any, LineAccountMemberCheckAccountStatusError>(
      UserRequestUrl.LineAccountMemberCheck,
      {
        method: 'POST',
        server: false,
        lazy: true,
        immediate: false,
        watch: false,
        body: payload,
      },
    ),
  create: async (payload: any) =>
    await useRequestApi(UserRequestUrl.LineAccountMemberCreate, {
      method: 'POST',
      server: false,
      lazy: true,
      immediate: false,
      watch: false,
      body: payload,
    }),
  editActivate: async (payload: any) =>
    await useRequestApi(UserRequestUrl.LineAccountMemberEditActivate, {
      method: 'POST',
      server: false,
      lazy: true,
      immediate: false,
      watch: false,
      body: payload,
    }),
  delete: async (payload: any) =>
    await useRequestApi(UserRequestUrl.LineAccountMemberDelete, {
      method: 'DELETE',
      server: false,
      lazy: true,
      immediate: false,
      watch: false,
      body: payload,
    }),
}
