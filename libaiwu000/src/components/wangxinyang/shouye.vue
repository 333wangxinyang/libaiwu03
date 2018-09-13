<template>
    <div>
      <head01></head01>
      <seek></seek>
      <navigation></navigation>
      <router-view/>
    </div>
</template>

<script>
  import head01 from '@/components/wangxinyang/head01'
  import seek from '@/components/wangxinyang/seek'
  import navigation from '@/components/wangxinyang/navigation'
    export default {
        name: "shouye",
      components:{
        head01:head01,
        seek:seek,
        navigation:navigation,
      },
    }
</script>

<style scoped>

</style>
