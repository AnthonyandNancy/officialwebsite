import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../layout/Index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue'),
        meta: { title: '首页' }
      },
      {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
        meta: { title: '关于' },
        children: [
          {
            path: '/about/zs',
            name: 'zs',
            component: () => import(/* webpackChunkName: "about" */ '../views/About/ls.vue'),
            meta: { title: '儿子张珊' }
          },
          {
            path: '/about/ls',
            name: 'ls',
            component: () => import(/* webpackChunkName: "about" */ '../views/About/zs.vue'),
            meta: { title: '儿子李四' }
          },
          {
            path: '/about/aa',
            name: 'aa',
            component: () => import(/* webpackChunkName: "about" */ '../views/About/aa.vue'),
            meta: { title: '儿子Aa' }
          },
          {
            path: '/about/bb',
            name: 'bb',
            component: () => import(/* webpackChunkName: "about" */ '../views/About/bb.vue'),
            meta: { title: '儿子Bb' }
          }
        ]
      },
      {
        path: '/lsaa',
        name: 'ls',
        component: () => import(/* webpackChunkName: "about" */ '../views/AAAA.vue'),
        meta: { title: '张珊aa' }
      },
      {
        path: '/zsaa',
        name: 'zs',
        component: () => import(/* webpackChunkName: "about" */ '../views/BBBB.vue'),
        meta: { title: '李四aa' }
      },
      {
        path: '/lsbb',
        name: 'ls',
        component: () => import(/* webpackChunkName: "about" */ '../views/AAAA.vue'),
        meta: { title: '张珊bb' }
      },
      {
        path: '/zsbb',
        name: 'zs',
        component: () => import(/* webpackChunkName: "about" */ '../views/BBBB.vue'),
        meta: { title: '李四bb' }
      },
      {
        path: '/lscc',
        name: 'ls',
        component: () => import(/* webpackChunkName: "about" */ '../views/AAAA.vue'),
        meta: { title: '张珊cc' }
      },
      {
        path: '/zscc',
        name: 'zs',
        component: () => import(/* webpackChunkName: "about" */ '../views/BBBB.vue'),
        meta: { title: '李四cc' }
      }

    ]
  }

]

const router = new VueRouter({
  routes
})

export default router