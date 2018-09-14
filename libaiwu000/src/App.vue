<template>
  <div id="app">


    <!--<h01gylbw></h01gylbw>-->

    <!--<h01gylbw></h01gylbw>-->


    <!--<x01></x01>-->
    <!--<x02></x02>-->
    <!--<head01></head01>-->





<!--<x01></x01>-->
    <!--<x02></x02>-->

    <!--<head01></head01>-->
    <!--<seek></seek>-->
    <!--<navigation></navigation>-->


    <router-view/>
  </div>
</template>

<script>


  import X01 from '@/components/wxy/X01'
  import X02 from '@/components/wxy/X02'
  import head01 from '@/components/wangxinyang/head01'
  import seek from '@/components/wangxinyang/seek'
  import navigation from '@/components/wangxinyang/navigation'
export default {
  name: 'App',
  components:{
    head01:head01,
    x01:X01,
    x02:X02,
    seek:seek,
    navigation:navigation,
  },

}
</script>

<style>
</style>
