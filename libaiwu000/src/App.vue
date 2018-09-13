<template>
  <div id="app">
<!--<x01></x01>-->
    <x02></x02>
    <router-view/>
  </div>
</template>

<script>
  import X01 from '@/components/wxy/X01'
  import X02 from '@/components/wxy/X02'
export default {
  name: 'App',
  components:{
    x01:X01,
    x02:X02
  }

}
</script>

<style>

</style>
