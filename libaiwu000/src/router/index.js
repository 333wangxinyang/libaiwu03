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
import gwc from '@/components/wangxinyang/gwc'
import qrddzy from '@/components/wangxinyang/qrddzy'
import qrdd from '@/components/wangxinyang/qrdd'
import qrsh01 from '@/components/wangxinyang/qrsh01'
import X06 from '@/components/wxy/X06'
import X07 from '@/components/wxy/X07'
import X08 from '@/components/wxy/X08'
import X09 from '@/components/wxy/X09'
import fff from '@/components/wxy/fff'
import Yjfh from '@/components/wxy/Yjfh'
import Huanbangshouji from '@/components/LYL/Huanbangshouji'
import Yuanshouji from '@/components/LYL/Yuanshouji'
import Xinshouji from '@/components/LYL/Xinshouji'
import Huanbangchenggong from '@/components/LYL/Huanbangchenggong'
import H03dr from '@/components/HZH/H03dr'
import H02drzc from '@/components/HZH/H02drzc'
import H04wjmm from '@/components/HZH/H04wjmm'
import Zd from '@/components/wxy/Zd'
import Liulan from '@/components/wxy/Liulan'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/H04wjmm',
      name: 'H04wjmm',
      component: H04wjmm
    },
    {
      path: '/H02drzc',
      name: 'H02drzc',
      component: H02drzc
    },
    {
      path: '/H03dr',
      name: 'H03dr',
      component: H03dr
    },
    {
      path: '/fff',
      name: 'fff',
      component: fff
    },
    {
      path: '/gwc',
      name: 'X06',
      component: X06,
      redirect:'/gwc',
      children:[
        {
          path: '/gwc',
          name: 'gwc',
          component: gwc
        },
        {
          path: '/qrddzy',
          name: 'qrddzy',
          component: qrddzy,
          redirect:'/qrdd',
          children: [
            {
              path: '/qrdd',
              name: 'qrdd',
              component: qrdd
            },
            {
              path: '/qrsh01',
              name: 'qrsh01',
              component: qrsh01
            },
          ]
        },
        {
          path: '/x07',
          name: 'X07',
          component: X07
        },
        {
          path: '/x08',
          name: 'X08',
          component: X08
        },
      ]
    },
    {
      path: '/',
      name: 'shouye',
      component: shouye,
      redirect:'/shouye01',

      children: [
        {
          path: '/spxq/:id',
          name: 'X09',
          component: X09
        },
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
          name: 'H01gylbw',
          component: H01gylbw
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
          path: '/X09',
          name: 'X09',
          component: X09
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
              path:'/Yjfh',
              name:'Yjfh',
              component:Yjfh
            },
            {
              path:'/Liulan',
              name:'Liulan',
              component:Liulan
            },
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
              path:'/Zd',
              name:'Zd',
              component: Zd
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
              children:[
                {
                  path: '/yuanshouji',
                  name: 'Yuanshouji',
                  component: Yuanshouji,
                },
                {
                  path: '/xinshouji',
                  name: 'Xinshouji',
                  component: Xinshouji,
                },
                {
                  path: '/huanbangchenggong',
                  name: 'Huanbangchenggong',
                  component: Huanbangchenggong,
                }
              ]
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
