import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@v/Home'
import {DashboardV1,DashboardV2} from '@v/Dashboard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children:[
        {
          path:'DashboardV1',
          name:'DashboardV1',
          component:DashboardV1
        },
        {
          path:'DashboardV2',
          name:'DashboardV2',
          component:DashboardV2
        },
      ]
    }
  ]
})
