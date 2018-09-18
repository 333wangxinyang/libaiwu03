<template>
<div class="box">
  <div class="title">
    <img src="../../../static/wxy1/logo1.png" alt="">
    <router-link to="">
      <span class="aa">我的购物车   ></span>
    </router-link>
    <router-link to="/x09">
      <span class="aa1">确认订单信息   ></span>
    </router-link>
    <router-link to="/">
      <span class="aa2">订单提交成功</span>
    </router-link>

  </div>
  <router-view/>
</div>



</template>

<script>
  import X07 from '@/components/wxy/X07'
  import X08 from '@/components/wxy/X08'
    export default {
        name: "X06",
      components:{
          x07:'X07',
        x08:'X08',

      }

    }
</script>

<style scoped>
.box{
  width: 1280px;
  margin: 0 auto;
  position: relative;
  top: 0;
}
  .title{
    width: 1280px;
    height: 133px;
    position: relative;
    top: 0;
    border-bottom: 1px solid #e4e4e4;
  }
  .title img{
    width: 360px;
    height: 60px;
    position: absolute;
    top: 40px;
    left: 200px;
  }
  .title a{
    color: #333333;
  }
  .title span{
    position: absolute;
    top: 70px;
  }
  .aa{
    right: 380px;
  }
  .aa1{
    right: 250px;
  }
.aa2{
  right: 130px;
}
</style>
