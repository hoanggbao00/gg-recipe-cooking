import { loadable } from "@/components/common/loadable";

export const APP_ROUTES = [
  {
    path: 'recipe/*',
    component: loadable(() => import('@/pages/recipe')),
  },
]