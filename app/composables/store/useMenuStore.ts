export function useMenuStore() {
  const menu = useState('menu', () => [
    {
      label: 'GitHub',
      icon: 'i-simple-icons-github',
      badge: '3.8k',
      to: 'https://github.com/nuxt/ui',
      target: '_blank',
    },
    {
      label: 'Help',
      icon: 'i-lucide-circle-help',
      disabled: true,
    },
  ])

  const getMenu = () => menu.value

  return {
    getMenu,
  }
}
