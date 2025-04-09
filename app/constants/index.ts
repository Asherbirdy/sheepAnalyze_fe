const config = useRuntimeConfig()

export const appName = config.public.ENVIRONMENT === 'production' ? 'We Sheep' : 'We Dev'
export const appDescription = config.public.ENVIRONMENT === 'production' ? 'We Sheep' : 'We Dev'
