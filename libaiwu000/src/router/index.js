import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Gerenzhongxin from '@/components/LYL/Gerenzhongxin'
import Gerenziliao from '@/components/LYL/Gerenziliao'
import Wodezhanghu from '@/components/LYL/Wodezhanghu'
import Dizhiguanli from '@/components/LYL/Dizhiguanli'
import Wodedingdan from '@/components/LYL/Wodedingdan'
import X01 from '@/components/wxy/X01'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/aa',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'Gerenzhongxin',
      component: Gerenzhongxin,
      children:[
        {
          path: '/gerenziliao',
          name: 'Gerenziliao',
          component: Gerenziliao,
        },
        {
          path: '/wodezhanghu',
          name: 'Wodezhanghu',
          component: Wodezhanghu,
        },
        {
          path: '/dizhiguanli',
          name: 'Dizhiguanli',
          component: Dizhiguanli,
        },
        {
          path: '/wodedingdan',
          name: 'Wodedingdan',
          component: Wodedingdan,
        }
      ]
    }
  ]
})
