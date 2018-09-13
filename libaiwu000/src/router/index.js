import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import X01 from '@/components/wxy/X01'
import shouye from '@/components/wangxinyang/shouye'

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
          name: 'HelloWorld',
          component: HelloWorld
        }
        ]
    }
  ]
})
