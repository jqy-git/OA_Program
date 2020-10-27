import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      // path: '/',
      // name: 'HelloWorld',
      // component: () => import('../containers/home'),
      // children: [
      //   {
      //     path: '/grzx',
      //     name: 'grzx',
      //     component: () =>
      //       import('../components/grzx')
      //   }
      // ]

      path: '/',
      name: 'HelloWorld',
      redirect: '/myHome',
    },
    {
      path: '/myHome',
      name: '真主页',
      component: () => import('../containers/home'),
      children: [
        {
          path: '/myHome/grzx',
          name: '个人中心',
          component: () =>
          import('../components/grzx')
        },
        {
          path: '/myHome/jtzd',
          name: '集团制度',
          component: () =>
          import('../components/jtzd')
        },
        {
          path: '/myHome/jtgg',
          name: '集团公告',
          component: () =>
          import('../components/jtgg')
        },
        {
          path: '/myHome/jtrm',
          name: '集团任免',
          component: () =>
          import('../components/jtrm')
        },
        {
          path: '/myHome/txxx',
          name: '通讯信息',
          component: () =>
          import('../components/txxx')
        },
        {
          path: '/myHome/xzgl',
          name: '行政管理',
          component: () =>
          import('../components/xzgl')
        },
        {
          path: '/myHome/rlzy',
          name: '人力资源',
          component: () =>
          import('../components/rlzy')
        },
        {
          path: '/myHome/whhd',
          name: '文化活动',
          component: () =>
          import('../components/whhd')
        },
      ]
    }
  ]
})
