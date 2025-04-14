import { ClientRoutes } from '~/enum'

export function useMenuStore() {
  const menu = useState('menu', () => [
    {
      label: 'Home',
      icon: 'i-lucide-home',
      to: ClientRoutes.Home,
    },
    {
      label: 'Landing Page',
      icon: 'i-lucide-circle-help',
      to: ClientRoutes.LandingPage,
    },
    {
      label: 'Blending',
      icon: 'i-lucide-circle-help',
      to: ClientRoutes.Blending,
    },
  ])

  const getMenu = () => menu.value

  return {
    getMenu,
  }
}
