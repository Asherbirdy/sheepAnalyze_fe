import type { UseFetchOptions } from '#app'
import type { PrivateApiUrl, PublicApiUrl } from '~/enum'

// * 舊版 可以運作 但是型別報錯
export function useRequestApi<DataT, ErrorT>(
  url: PublicApiUrl | PrivateApiUrl,
  options?: UseFetchOptions<DataT, ErrorT>,
) {
  const config = useRuntimeConfig()
  const baseUrl = config.public.API_URL
  return useFetch<DataT, ErrorT>(`${baseUrl}${url}`, {
    ...options as any, // option.method 會報錯 所以用 any
    $fetch: useNuxtApp().$Fetch as typeof $fetch,
  })
}
