import Vue from 'vue'
import Router from 'vue-router'
import vDialog from 'v-dialogs'
import vueForm from 'vue-form'
import $ from 'jquery'
Vue.use(vueForm)
Vue.use(Router)
Vue.use(vDialog)



export default new Router({
  routes: [
    {
      path:'*',
      redirect: '/1'
    },
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
