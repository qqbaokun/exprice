import Vue from 'vue'
import Router from 'vue-router'
import vDialog from 'v-dialogs'
import vueForm from 'vue-form'
import $ from 'jquery'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(vueForm)
Vue.use(Router)
Vue.use(vDialog)
Vue.use(ElementUI)



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
    /*{
      path: '/3',
      name: 'thirdType',
      component: resolve => require(['@/components/thirdType'],resolve)
    }*/
  ]
})
