<template>
    <div>
      <head01></head01>
      <seek></seek>
      <navigation></navigation>
      <router-view/>
      <foot></foot>

    </div>
</template>

<script>
  import head01 from '@/components/wangxinyang/head01'
  import seek from '@/components/wangxinyang/seek'
  import navigation from '@/components/wangxinyang/navigation'
  import foot from '@/components/wangxinyang/foot'
    export default {
        name: "shouye",
      components:{
        head01:head01,
        seek:seek,
        navigation:navigation,
        foot:foot,
      },
    }
</script>

<style scoped>

</style>
