<template>
  <div id="app">
    <head01></head01>
    <router-view/>
  </div>
</template>

<script>
  import head01 from '@/components/wangxinyang/head01'
export default {
  name: 'App',
  components:{
    head01:head01,
  },

}
</script>

<style>


</style>
