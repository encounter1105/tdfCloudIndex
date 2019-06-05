import Vue from 'vue'
import Router from 'vue-router'
import TdfCloudIndex from '@/components/page/TdfCloudIndex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TdfCloudIndex',
      component: TdfCloudIndex
    }
  ]
})
