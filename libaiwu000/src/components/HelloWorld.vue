<template>
  <div class="hello">
    <weizhi></weizhi>
    <fangdajing></fangdajing>
  </div>
</template>

<script>

  import weizhi from '@/components/wangxinyang/weizhi'
  import fangdajing from '@/components/wangxinyang/fangdajing'
export default {
  name: 'HelloWorld',
  components:{
    weizhi:weizhi,
    fangdajing:fangdajing,
  },
}
</script>
<style scoped>

</style>
