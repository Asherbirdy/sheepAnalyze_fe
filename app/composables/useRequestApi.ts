import type { UseFetchOptions } from '#app'

export function useRequestApi<DataT, ErrorT = any>(
  url: string,
  options?: UseFetchOptions<DataT>,
) {
  const config = useRuntimeConfig()
  const baseUrl = config.public.API_URL
  return useFetch<DataT, ErrorT>(`${baseUrl}${url}`, {
    ...options,
    $fetch: useNuxtApp().$Fetch,
  } as any)
}
