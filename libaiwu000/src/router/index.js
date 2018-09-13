import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import X01 from '@/components/wxy/X01'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/aa',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
