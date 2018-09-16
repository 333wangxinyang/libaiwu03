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

import Tianjiadizhi from '@/components/LYL/Tianjiadizhi'

import shouye01 from '@/components/wangxinyang/shouye01'
import tongcheng from '@/components/wangxinyang/tongcheng'
import H01gylbw from '@/components/HZH/H01gylbw'
import shangjiaxq from '@/components/wangxinyang/shangjiaxq'
import shangjia01 from '@/components/wangxinyang/shangjia01'
import shangpinfy01 from '@/components/wangxinyang/shangpinfy01'
import zhuanti from '@/components/wangxinyang/zhuanti'
Vue.use(Router)

export default new Router({
  routes: [

    {



      // path: '/x04',


      path: '/',
      name: 'shouye',
      component: shouye,
      redirect:'/shouye01',
      children: [
        {
          path: '/shouye01',
          name: 'shouye01',
          component: shouye01
        },
        {
          path: '/tongcheng',
          name: 'tongcheng',
          component: tongcheng
        },
        {
          path: '/libaiwu',
          name: 'shangjiaxq',
          component: shangjiaxq
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
          name: 'shangpinfy01',
          component: shangpinfy01
        },
        {
          path: '/sousuo/:str',
          name: 'shangpinfy01',
          component: shangpinfy01
        },
        {
          path: '/shangjia',
          name: 'shangjiaxq',
          component: shangjiaxq
        },
        {
          path: '/zhuanti',
          name: 'zhuanti',
          component: zhuanti
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
            },
            {
              path: '/tianjiadizhi',
              name: 'Tianjiadizhi',
              component: Tianjiadizhi,
            }
          ]

        }
        ]

    }
  ]
})
