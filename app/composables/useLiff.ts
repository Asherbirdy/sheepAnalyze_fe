import type { Liff } from '@line/liff'
import type { Ref } from 'vue'

export interface LineProfile {
  displayName: string
  pictureUrl: string
  statusMessage: string
  userId: string
}
export interface LiffReturn {
  LIFF: Ref<Liff | null>
  LineProfile: Ref<LineProfile | null>
}

export interface LiffConfig {
  liffId: {
    dev: string // 開發環境的 liffId
    production?: string // 正式環境的 liffId
  }
  login: boolean // 是否需要登入
  liffInit: boolean // 是否需要初始化
  redirectUrl?: string // 重定向的 url
}

/**
 * 使用 LIFF ID 初始化 LIFF
 */
export const useLiff = (payload: LiffConfig): LiffReturn => {
  const LIFF = ref<Liff | null>(null)
  const LineProfile = ref<LineProfile | null>(null)

  const initLiff = async () => {
    const { liffId, login, liffInit, redirectUrl } = payload
    const config = useRuntimeConfig()

    const liffIdFromEnv = () => {
      if (config.public.ENVIRONMENT === 'development') {
        return liffId?.dev || ''
      }

      if (config.public.ENVIRONMENT === 'production') {
        return liffId?.production || ''
      }

      console.error('請補上環境變數', config.public.environment)
    }

    try {
      // eslint-disable-next-line no-console
      console.log('liffId', liffIdFromEnv())

      if (!liffInit) {
        return
      }

      const liff = (await import('@line/liff')).default
      await liff.init({
        liffId: liffIdFromEnv() || '',
      })

      LIFF.value = liff

      if (!login) {
        return
      }

      if (!LIFF.value.isLoggedIn()) {
        liff.login({
          redirectUri: redirectUrl,
        })
      }

      LIFF.value
        .getProfile()
        .then((profile) => {
          LineProfile.value = {
            displayName: profile.displayName,
            pictureUrl: profile.pictureUrl || '',
            statusMessage: profile.statusMessage || '',
            userId: profile.userId,
          }
        })
    }
    catch (error) {
      console.error('Failed to initialize LIFF:', error)
    }
  }

  onMounted(initLiff)
  return { LIFF, LineProfile }
}
