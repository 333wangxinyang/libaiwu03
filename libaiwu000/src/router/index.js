import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Gerenzhongxin from '@/components/LYL/Gerenzhongxin'
import Gerenziliao from '@/components/LYL/Gerenziliao'
import Wodezhanghu from '@/components/LYL/Wodezhanghu'
import Dizhiguanli from '@/components/LYL/Dizhiguanli'
import Dingdanpingjia from '@/components/LYL/Dingdanpingjia'
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

import Dingdanbianhao from '@/components/LYL/Dingdanbianhao'
import Daifukuan from '@/components/LYL/Daifukuan'
import Daifahuo from '@/components/LYL/Daifahuo'
import Yiwancheng from '@/components/LYL/Yiwancheng'
import Daishouhuo from '@/components/LYL/Daishouhuo'
import Tuikuan from '@/components/LYL/Tuikuan'
import Daipingjia from '@/components/LYL/Daipingjia'
import Quanbu from '@/components/LYL/Quanbu'
import Zhanghuziliao from '@/components/LYL/Zhanghuziliao'
import Huanbangshouji from '@/components/LYL/Huanbangshouji'
import Wodejifen from '@/components/LYL/Wodejifen'
import Zhanghuyue from '@/components/LYL/Zhanghuyue'
import Wodeshoucang from '@/components/LYL/Wodeshoucang'
import Zhanghuxiangqing from '@/components/LYL/Zhanghuxiangqing'
import Wodexiaoxi from '@/components/LYL/Wodexiaoxi'
import Wodexiaoxi1 from '@/components/LYL/Wodexiaoxi1'
import Pingjiachenggong from '@/components/LYL/Pingjiachenggong'





Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/aaa',
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
              path: '/zhanghuyue',
              name: 'Zhanghuyue',
              component: Zhanghuyue,
            },
            {
              path: '/dizhiguanli',
              name: 'Dizhiguanli',
              component: Dizhiguanli,
            },
            {
              path: '/dingdanpingjia',
              name: 'Dingdanpingjia',
              component: Dingdanpingjia,
            },
            {
              path: '/pingjiachenggong',
              name: 'Pingjiachenggong',
              component: Pingjiachenggong,
            },
            {
              path: '/tianjiadizhi',
              name: 'Tianjiadizhi',
              component: Tianjiadizhi,
            },
            {
              path: '/dingdanbianhao',
              name: 'Dingdanbianhao',
              component: Dingdanbianhao,
            },
            {
              path: '/zhanghuziliao',
              name: 'Zhanghuziliao',
              component: Zhanghuziliao,
            },
            {
              path: '/huanbangshouji',
              name: 'Huanbangshouji',
              component: Huanbangshouji,
            },
            {
              path: '/wodejifen',
              name: 'Wodejifen',
              component: Wodejifen,
            },
            {
              path: '/wodeshoucang',
              name: 'Wodeshoucang',
              component: Wodeshoucang
            },
            {
              path: '/zhanghuxiangqing',
              name: 'Zhanghuxiangqing',
              component: Zhanghuxiangqing
            },
            {
              path: '/wodexiaoxi',
              name: 'Wodexiaoxi',
              component: Wodexiaoxi
            },
            {
              path: '/wodexiaoxi1',
              name: 'Wodexiaoxi1',
              component: Wodexiaoxi1
            },
            {
              path: '/wodedingdan',
              name: 'Wodedingdan',
              component: Wodedingdan,
              redirect:'/quanbu',
              children:[
                {
                  path: '/daifukuan',
                  name: 'Daifukuan',
                  component: Daifukuan,
                },
                {
                  path: '/daifahuo',
                  name: 'Daifahuo',
                  component: Daifahuo,
                },
                {
                  path: '/yiwancheng',
                  name: 'Yiwancheng',
                  component: Yiwancheng,
                },
                {
                  path: '/daishouhuo',
                  name: 'Daishouhuo',
                  component: Daishouhuo,
                },
                {
                  path: '/tuikuan',
                  name: 'Tuikuan',
                  component: Tuikuan,
                },
                {
                  path: '/daipingjia',
                  name: 'Daipingjia',
                  component: Daipingjia,
                },
                {
                  path: '/quanbu',
                  name: 'Quanbu',
                  component: Quanbu,
                },
              ]
            }
          ]

        }
        ],
    }
  ]
})
