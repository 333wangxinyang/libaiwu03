<template>
  <div id="app">
    <!--<h01gylbw></h01gylbw>-->
    <!--<h02drzc></h02drzc>-->
    <!--<x01></x01>-->
    <!--<x02></x02>-->
    <!--<head01></head01>-->
    <!--<h03dr></h03dr>-->
    <h04wjmm></h04wjmm>




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
  import H02drzc from '@/components/HZH/H02drzc'

  import H01gylbw from '@/components/HZH/H01gylbw'




  import seek from '@/components/wangxinyang/seek'
  import navigation from '@/components/wangxinyang/navigation'
  import H03dr from '@/components/HZH/H03dr'
  import H04wjmm from '@/components/HZH/H04wjmm'
export default {
  name: 'App',
  components:{
    head01:head01,
    x01:X01,
    x02:X02,
    seek:seek,
    navigation:navigation,
    h01gylbw:H01gylbw,
    h02drzc:H02drzc,
    h03dr:H03dr,
    h04wjmm:H04wjmm
  },







}
</script>

<style>




</style>
