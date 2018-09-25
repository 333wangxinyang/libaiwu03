<template>
<div class="box">
  <img src="../../../static/wxy1/x-hdg.png" alt="">
  <span >支付成功</span>
  <router-link to="/quanbu">
  <span class="cc">查看订单</span>
  </router-link>
  <router-link to="/shouye01">
    <span class="cc1">返回首页</span>
  </router-link>
  <p>订单编号：201569874562145a11947</p>
</div>
</template>

<script>
    export default {
        name: "X08"
    }
</script>

<style scoped>
.box{
  width: 600px;
  height: 360px;
  position: relative;
  top: 150px;
}
  .box>img{
    position: absolute;
    top: 50px;
    left: 280px;
  }
  .box>span:nth-of-type(1){
    position: absolute;
    top: 150px;
    left: 280px;
    font-size: 20px;
    color:#f08404 ;
  }
  .cc{
    position: absolute;
    top: 240px;
    left: 180px;
    display: block;
    width: 100px;
    height: 30px;
    background-color: #f08404;
    text-align: center;
    line-height:30px;
    color: #ffffff;
  }
.cc1{
  position: absolute;
  top: 240px;
  right:200px;
  display: block;
  width: 100px;
  height: 30px;
  background-color: #f08404;
  text-align: center;
  line-height:30px;
  color: #ffffff;
}
  .box>p{
    position: absolute;
    bottom: 30px;
    left: 160px;
  }
</style>
