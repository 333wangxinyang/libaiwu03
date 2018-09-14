import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Gerenzhongxin from '@/components/LYL/Gerenzhongxin'
import Gerenziliao from '@/components/LYL/Gerenziliao'
import Wodezhanghu from '@/components/LYL/Wodezhanghu'
import Dizhiguanli from '@/components/LYL/Dizhiguanli'
import Wodedingdan from '@/components/LYL/Wodedingdan'
import X01 from '@/components/wxy/X01'
import shouye from '@/components/wangxinyang/shouye'
import H01gylbw from '@/components/HZH/H01gylbw'

Vue.use(Router)

export default new Router({
  routes: [

    {

      // path: '/x04',

      path: '/aaa1',
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
          path: '/jifen',
          name: 'HelloWorld',
          component: HelloWorld
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
