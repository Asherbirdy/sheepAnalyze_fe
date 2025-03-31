import type { UseFetchOptions } from '#app'
import type { PrivateApiUrl, PublicApiUrl } from '~/enum'

export function useRequestApi<DataT, ErrorT>(
  url: PublicApiUrl | PrivateApiUrl,
  options?: UseFetchOptions<DataT>,
) {
  const config = useRuntimeConfig()
  const baseUrl = config.public.API_URL
  return useFetch<DataT, ErrorT>(`${baseUrl}${url}`, {
    ...options,
    $fetch: useNuxtApp().$Fetch,
  } as any)
}
