import Vue from 'vue'
import Router from 'vue-router'
import $ from 'jquery'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'*',
      redirect: '/1'
    },
    /*{
      path: '/index',
      name: 'HelloWorld',
      component: resolve => require(['@/components/HelloWorld'],resolve),
      children:[
        {
          path: '/index/1',
          name: 'firstType',
          component: resolve => require(['@/components/firstType'],resolve)
        },
        {
          path: '/index/2',
          name: 'secondType',
          component: resolve => require(['@/components/secondType'],resolve)
        },
        {
          path: '/index/3',
          name: 'thirdType',
          component: resolve => require(['@/components/thirdType'],resolve)
        }
      ]
    },*/
    {
      path: '/1',
      name: 'firstType',
      component: resolve => require(['@/components/firstType'],resolve)
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
