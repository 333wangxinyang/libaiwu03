<template>
    <div id="zhuanti">
      <weizhi></weizhi>
      <div>
        <a href="###"><img src="../../../static/wangxinyang/zt01.png" alt=""></a>
        <a href="###"><img src="../../../static/wangxinyang/zt02.png" alt=""></a>
        <a href="###"><img src="../../../static/wangxinyang/zt04.png" alt=""></a>
      </div>
    </div>
</template>

<script>
  import weizhi from '@/components/wangxinyang/weizhi'
    export default {
        name: "zhuanti",
      components:{
        weizhi:weizhi
      },
    }
</script>

<style scoped>
  #zhuanti{
    padding-top: 20px;
  }
  #zhuanti>div{
    width: 1280px;
    margin: 0 auto;
  }
  #zhuanti a{

    width: 1280px;
    display: block;
    height: 500px;
    padding-top: 20px;
  }

  #zhuanti a>img{
    width: 1280px;
  }
</style>
