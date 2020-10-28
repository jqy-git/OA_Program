import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
};
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

        },

        {
          path: '/grzx/dbsy',
          name: '待办事宜',
          component: () =>
            import('../components/grzx/grzx_dbsy'),
        },
        {
          path: '/grzx/dbsy/xq',
          name: '待办事宜详情',
          component: () =>
            import('../components/grzx/grzx_dbsy_xq'),
        },
        {
          path: '/grzx/lcsz',
          name: '设置流程交接人',
          component: () =>
            import('../components/grzx/grzx_lcsz'),
        },
        {
          path: '/grzx/lxfs',
          name: '修改联系方式',
          component: () =>
            import('../components/grzx/grzx_lxfs'),
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
        },
        {
          path: '/jtrm/rms',
          name: '任免书',
          component: () =>
            import('../components/jtrm/jtrm_rms'),
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
          path: '/xzgl/bgyp',
          name: '办公用品申请',
          component: () =>
            import('../components/xzgl/xzgl_bgyp')
        },
        {
          path: '/xzgl/gdzc',
          name: '固定资产申请',
          component: () =>
            import('../components/xzgl/xzgl_gdzc')
        },
        {
          path: '/xzgl/kdsq',
          name: '快递申请',
          component: () =>
            import('../components/xzgl/xzgl_kdsq')
        },
        {
          path: '/xzgl/clsy',
          name: '车辆使用情况及外出申请',
          component: () =>
            import('../components/xzgl/xzgl_clsy')
        },
        {
          path: '/xzgl/jpsq',
          name: '机票申请',
          component: () =>
            import('../components/xzgl/xzgl_jpsq')
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
