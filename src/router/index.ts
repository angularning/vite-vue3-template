import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import LayoutDefault from '@/layout/default/index.vue'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Login',
    component: () => import('@/views/login/Login.vue'),
  },
  {
    path: '/index',
    name: 'INDEX',
    component: LayoutDefault,
    children: [
        {
            path: '',
            name: 'Index',
            component: () => import('@/views/index/Index.vue'),
        },
        {
            path: 'detail',
            name: 'IndexDetail',
            component: () => import('@/views/index/IndexDetail.vue'),
        }
    ],
  },

  {
    path: '/category',
    name: 'category',
    component: LayoutDefault,
    children: [
        {
            path: '',
            name: 'categoryIndex',
            component: () => import('@/views/categoryDirectory/Index.vue'),
        },
        {
            path: 'detail',
            name: 'categoryDetail',
            component: () => import('@/views/categoryDirectory/Detail.vue'),
        }
    ],
  },
  {
    path: '/dataBoard',
    name: 'dataBoard',
    component: LayoutDefault,
    children: [
        {
            path: '',
            name: 'dataBoardIndex',
            component: () => import('@/views/dataBoard/Index.vue'),
        },
        {
            path: 'detail',
            name: 'categoryDetail',
            component: () => import('@/views/dataBoard/Detail.vue'),
        }
    ],
  },

  {
    path: '/priceMonitor',
    name: 'priceMonitor',
    component: LayoutDefault,
    children: [
        {
            path: '',
            name: 'priceMonitorIndex',
            component: () => import('@/views/priceMonitor/Index.vue'),
        },
        {
            path: 'detail',
            name: 'categoryDetail',
            component: () => import('@/views/priceMonitor/Detail.vue'),
        }
    ],
  },
  {
    name: 'DEMO',
    path: '/demo',
    redirect: '/demo/demoDialog',
    component: LayoutDefault,
    meta: {
      title: 'Dashboard',
    },
    children: [
      {
        name: 'demoDialog',
        path: 'demoDialog',
        component: () => import('@/views/index/index.vue'),
        meta: {
          title: 'DemoDialog',
        },
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
