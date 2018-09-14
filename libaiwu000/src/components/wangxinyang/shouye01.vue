<template>
    <div>
      <swiper></swiper>
      <remai></remai>
      <shouye01libaiwu></shouye01libaiwu>
      <shouyeshangpin></shouyeshangpin>
      <foot></foot>
    </div>
</template>

<script>
  import swiper from '@/components/wangxinyang/swiper'
  import remai from '@/components/wangxinyang/remai'
  import shouye01libaiwu from '@/components/wangxinyang/shouye01libaiwu'
  import shouyeshangpin from '@/components/wangxinyang/shouyeshangpin'
  import foot from '@/components/wangxinyang/foot'
    export default {
        name: "shouye01",
      components:{
        swiper:swiper,
        remai:remai,
        shouye01libaiwu:shouye01libaiwu,
        shouyeshangpin:shouyeshangpin,
        foot:foot,

      },
    }
</script>

<style scoped>

</style>
