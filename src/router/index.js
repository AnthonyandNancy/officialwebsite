import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../layout/Index'

Vue.use(VueRouter)

const constantRoutes = [{
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [{
            path: '/home',
            name: 'Home',
            component: () =>
                import ('../views/Home.vue'),
            meta: { title: '首页' }
        },
        {
            path: '/about',
            name: 'About',
            component: () =>
                import ('../views/About.vue'),
            meta: { title: '关于' },
            children: [{
                    path: '/about/zs',
                    name: 'zs',
                    component: () =>
                        import ('../views/About/ls.vue'),
                    meta: { title: '儿子张珊' }
                },
                {
                    path: '/about/ls',
                    name: 'ls',
                    component: () =>
                        import ('../views/About/zs.vue'),
                    meta: { title: '儿子李四' }
                },
                {
                    path: '/about/aa',
                    name: 'aa',
                    component: () =>
                        import ('../views/About/aa.vue'),
                    meta: { title: '儿子Aa' }
                },
                {
                    path: '/about/bb',
                    name: 'bb',
                    component: () =>
                        import ('../views/About/bb.vue'),
                    meta: { title: '儿子Bb' },
                    hidden: true
                }
            ]
        },
        {
            path: '/lsaa',
            name: 'ls',
            component: () =>
                import ('../views/AAAA.vue'),
            meta: { title: '张珊aa' }
        }
    ]
}]
const createRouter = () => new VueRouter({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher // reset router
}

export default router