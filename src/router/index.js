import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      redirect: '/zhuye',
      component: () => import('../containers/home'),
      children: [
        {
          path: '/zhuye',
          name: '主页',
          component: () =>
            import('../components/zhuye')
        },
        {
          path: '/grzx',
          name: '个人中心',
          component: () =>
            import('../components/grzx/grzx'),
          children: [
            {
              path: '/grzx/dbsy',
              name: '待办事宜',
              component: () =>
                import('../components/grzx/grzx_dbsy'),
              children:[
                {
                  path: '/grzx/dbsy/xq',
                  name: '待办事宜',
                  component: () =>
                    import('../components/grzx/grzx_dbsy_xq'),
                }
              ]
            }
          ]
        },
        {
          path: '/jtzd',
          name: '集团制度',
          component: () =>
            import('../components/jtzd/jtzd')
        },
        {
          path: '/jtgg',
          name: '集团公告',
          component: () =>
            import('../components/jtgg/jtgg')
        },
        {
          path: '/jtrm',
          name: '集团任免',
          component: () =>
            import('../components/jtrm/jtrm'),
          children: [
            {
              path: '/jtrm/rms',
              name: '任免书',
              component: () =>
                import('../components/jtrm/jtrm_rms'),
            }
          ]
        },
        {
          path: '/txxx',
          name: '通讯信息',
          component: () =>
            import('../components/txxx/txxx')
        },
        {
          path: '/xzgl',
          name: '行政管理',
          component: () =>
            import('../components/xzgl/xzgl')
        },
        {
          path: '/rlzy',
          name: '人力资源',
          component: () =>
            import('../components/rlzy/rlzy')
        },
        {
          path: '/whhd',
          name: '文化活动',
          component: () =>
            import('../components/whhd/whhd')
        },
      ]
    },
  ]
})
