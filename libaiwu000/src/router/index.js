import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Gerenzhongxin from '@/components/LYL/Gerenzhongxin'
import Gerenziliao from '@/components/LYL/Gerenziliao'
import Wodezhanghu from '@/components/LYL/Wodezhanghu'
import Dizhiguanli from '@/components/LYL/Dizhiguanli'
import Wodedingdan from '@/components/LYL/Wodedingdan'
import X01 from '@/components/wxy/X01'
import X02 from '@/components/wxy/X02'
import X04 from '@/components/wxy/X04'
import shouye from '@/components/wangxinyang/shouye'
import H01gylbw from '@/components/HZH/H01gylbw'

Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/',
      name: 'shouye',
      component: shouye,
      redirect:'/shouye01',
      children: [
        {
          path: '/shouye01',
          name: 'HelloWorld',
          component: HelloWorld
        },
        {
          path: '/tongcheng',
          name: 'HelloWorld',
          component: HelloWorld
        },
        {
          path: '/libaiwu',
          name: 'HelloWorld',
          component: HelloWorld
        },
        {
          path: '/X02',
          name: 'X02',
          component: X02,

        },
        {
          path: '/X04',
          name: 'X04',
          component: X04
        },
        {
          path: '/daohang',
          name: 'HelloWorld',
          component: HelloWorld
        },
        {
          path: '/grzx',
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

    }
  ]
})
