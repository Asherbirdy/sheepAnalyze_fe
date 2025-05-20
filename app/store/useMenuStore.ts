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
      icon: 'fluent-mdl2:page',
      to: ClientRoutes.LandingPage,
    },
    {
      label: 'Blending',
      icon: 'material-symbols-light:blender',
      to: ClientRoutes.Blending,
    },
    {
      label: 'Sheet',
      icon: 'i-lucide-file-spreadsheet',
      to: ClientRoutes.Sheet,
    },
    {
      label: 'Serial Number',
      icon: 'i-lucide-barcode',
      to: ClientRoutes.SerialNumber,
    },
  ])

  const getMenu = computed(() => menu.value)

  return { getMenu }
}
