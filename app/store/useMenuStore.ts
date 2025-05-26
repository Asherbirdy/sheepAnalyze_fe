import { ClientRoutes } from '~/enum'

export function useMenuStore() {
  const route = useRoute()

  const menu = useState('menu', () => [
    {
      label: '個人資料',
      icon: 'i-lucide-user',
      to: ClientRoutes.Home,
      active: computed(() => route.path === ClientRoutes.Home),
    },
    {
      label: '帳號管理',
      icon: 'mingcute:group-3-line',
      to: ClientRoutes.User,
      active: computed(() => route.path === ClientRoutes.User),
    },
    {
      label: '帳號序號申請',
      icon: 'i-lucide-barcode',
      to: ClientRoutes.SerialNumber,
      active: computed(() => route.path === ClientRoutes.SerialNumber),
    },
    {
      label: '首頁編輯器',
      icon: 'fluent-mdl2:page',
      to: ClientRoutes.LandingPage,
      active: computed(() => route.path.startsWith(ClientRoutes.LandingPage)),
    },
    {
      label: '表單分析',
      icon: 'i-lucide-file-spreadsheet',
      children: [
        {
          label: '相調',
          icon: 'material-symbols-light:blender',
          to: ClientRoutes.Blending,
          active: computed(() => route.path === ClientRoutes.Blending),
        },
        {
          label: '港湖集中主日',
          icon: 'i-lucide-video',
          to: ClientRoutes.MeetingCenter,
          active: computed(() => route.path === ClientRoutes.MeetingCenter),
        },
      ],
    },
  ])

  const getMenu = computed(() => menu.value)

  return { getMenu }
}
