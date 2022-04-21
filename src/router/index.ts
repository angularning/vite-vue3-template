import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import LayoutDefault from '@/layout/default/index.vue'
import IndexDetail from '@/views/index/IndexDetail.vue'
import ADetail from '@/views/a/Detail.vue'
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
            component: IndexDetail,
        }
    ],
  },
  {
    path: '/a',
    name: 'A',
    component: LayoutDefault,
    children: [
        {
            path: '',
            name: 'AIndex',
            component: () => import('@/views/a/Index.vue'),
        },
        {
            path: 'detail',
            name: 'ADetail',
            component: ADetail,
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
