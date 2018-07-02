import Vue from 'vue'
import Router from 'vue-router'
import $ from 'jquery'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'*',
      redirect: '/1/1'
    },
    {
      path: '/1',
      name: 'firstType',
      component: resolve => require(['@/components/firstType'],resolve),
      children: [
        {
          path: '/1/1',
          name:'firstTypeOne',
          component: resolve => require(['@/components/HelloWorld'],resolve)
        },
      ]
    },
    {
      path: '/2',
      name: 'secondType',
      component: resolve => require(['@/components/secondType'],resolve)
    },
    {
      path: '/3',
      name: 'thirdType',
      component: resolve => require(['@/components/thirdType'],resolve)
    }
  ]
})
