import type { AppRouteModule } from '@/router/types';

import { LAYOUT } from '@/router/constant';
import { t } from '@/hooks/web/useI18n';

const page: AppRouteModule = {
  path: '/toolbox',
  name: 'Toolbox',
  component: LAYOUT,
  redirect: '/toolbox/basic',
  meta: {
    orderNo: 20,
    icon: 'ion:construct-outline',
    title: t('routes.toolbox.general.toolbox'),
  },
  children: [
    {
      path: 'basic',
      name: 'ToolboxBasic',
      component: () => import('@/views/dashboard/workbench/index.vue'),
      meta: {
        title: t('routes.dashboard.workbench'),
      },
    },
  ],
};

export default page;
