<template>
  <div id="app">
    <h01gylbw></h01gylbw>
    <!--<x01></x01>-->
    <!--<x02></x02>-->
    <!--<head01></head01>-->
    <router-view/>
  </div>
</template>

<script>


  import X01 from '@/components/wxy/X01'
  import X02 from '@/components/wxy/X02'
  import head01 from '@/components/wangxinyang/head01'
  import H01gylbw from '@/components/H01gylbw'
export default {
  name: 'App',
  components:{
    head01:head01,
    h01gylbw:H01gylbw,
    x01:X01,
    x02:X02
  },
}
</script>

<style>
</style>
