import { UserRequestUrl } from '~/enum'

export const useLineAccountMemberApi = {
  getAll: async () =>
    await useRequestApi(UserRequestUrl.LineAccountMemberGetAll, {
      method: 'GET',
      server: false,
      lazy: true,
    }),
  creasssste: async (payload: any) =>
    await useRequestApi(UserRequestUrl.LineAccountMemberCreate, {
      method: 'POST',
      server: false,
      lazy: true,
      immediate: false,
      watch: false,
      body: payload,
    }),
  checkAccountStatus: async (payload: any) =>
    await useRequestApi(UserRequestUrl.LineAccountMemberCheck, {
      method: 'POST',
      server: false,
      lazy: true,
      immediate: false,
      watch: false,
      body: payload,
    }),
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
