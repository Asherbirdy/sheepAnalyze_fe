import { ClientRoutes } from '~/enum'

export function useMenuStore() {
  const route = useRoute()

  const menu = useState('menu', () => [
    {
      label: 'Home',
      icon: 'i-lucide-home',
      to: ClientRoutes.Home,
      active: computed(() => route.path === ClientRoutes.Home),
    },
    {
      label: 'Serial Number',
      icon: 'i-lucide-barcode',
      to: ClientRoutes.SerialNumber,
      active: computed(() => route.path === ClientRoutes.SerialNumber),
    },
    {
      label: 'Landing Page',
      icon: 'fluent-mdl2:page',
      to: ClientRoutes.LandingPage,
      active: computed(() => route.path.startsWith(ClientRoutes.LandingPage)),
    },
    {
      label: 'Blending',
      icon: 'material-symbols-light:blender',
      to: ClientRoutes.Blending,
      active: computed(() => route.path === ClientRoutes.Blending),
    },
    // {
    //   label: 'Sheet',
    //   icon: 'i-lucide-file-spreadsheet',
    //   to: ClientRoutes.Sheet,
    //   active: computed(() => route.path === ClientRoutes.Sheet),
    // },
    {
      label: '港湖集中主日',
      icon: 'i-lucide-video',
      to: ClientRoutes.MeetingCenter,
      active: computed(() => route.path === ClientRoutes.MeetingCenter),
    },
  ])

  const getMenu = computed(() => menu.value)

  return { getMenu }
}
