<template>
    <div>
      <Daifahuo></Daifahuo>
      <Yiwancheng></Yiwancheng>
      <Daishouhuo></Daishouhuo>
      <Tuikuan></Tuikuan>
      <Daipingjia></Daipingjia>
      <Daifukuan></Daifukuan>
    </div>
</template>

<script>
  import Daifukuan from '@/components/LYL/Daifukuan'
  import Daifahuo from '@/components/LYL/Daifahuo'
  import Yiwancheng from '@/components/LYL/Yiwancheng'
  import Daishouhuo from '@/components/LYL/Daishouhuo'
  import Tuikuan from '@/components/LYL/Tuikuan'
  import Daipingjia from '@/components/LYL/Daipingjia'
  import Quanbu from '@/components/LYL/Quanbu'
    export default {
        name: "Quanbu",
        components:{
          Daifukuan,
          Daifahuo,
          Yiwancheng,
          Daishouhuo,
          Tuikuan,
          Daipingjia,
        }
    }
</script>

<style scoped>

</style>
