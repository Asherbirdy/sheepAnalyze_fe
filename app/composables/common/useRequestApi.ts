import type { UseFetchOptions } from '#app'
import type { PrivateApiUrl, PublicApiUrl } from '~/enum'

/*
  * @DataType Response型別
  * @ErrorType Error型別
  * @Options UseFetchOptions<DataType, ErrorType>
  * @Url API路徑，例如 PublicApiUrl.Login
  * useFetch文件： https://nuxt.com/docs/api/composables/use-fetch
*/
export function useRequestApi<DataT, ErrorT>(
  url: PublicApiUrl | PrivateApiUrl | string,
  options?: UseFetchOptions<DataT, ErrorT>,
) {
  const config = useRuntimeConfig()
  const baseUrl = config.public.API_URL
  return useFetch<DataT, ErrorT>(`${baseUrl}${url}`, {
    ...options as any, // option.method 會報錯 所以用 any
    $fetch: useNuxtApp().$Fetch as typeof $fetch,
  })
}
