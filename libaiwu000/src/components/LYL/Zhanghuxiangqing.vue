<template>
    <div>
      <div class="box">
        <div class="box1">
          <img src="../../../static/LYLimg/touxiang2.png" height="139" width="139"/>
          <span>您好，<span>136****2356</span> </span>
        </div>
        <div class="box2">
          <p>
            <span>当前积分</span>
            <span>我的钱包</span>
            <span><router-link to="/wodezhanghu">充值有礼>></router-link></span>
          </p>
          <p>
            <span>124</span>
            <span>¥1220.0</span>
            <span>充值卡兑换>></span>
          </p>
        </div>
      </div>
      <img src="../../../static/LYLimg/datu.png" height="384" width="1085" class="datu"/>
    </div>
</template>

<script>
    export default {
        name: "Zhanghuxiangqing"
    }
</script>

<style scoped>
  .box{
    background-color: #f3fff3;
    overflow: hidden;
    position: relative;
  }
  .box1{
    float: left;
  }
  .box1>img{
    vertical-align: middle;
    margin: 40px;
  }
  .box1>span>span{
    color: #f05f3e;
  }
  .box2>p{
    line-height: 37px;
  }
  .box2>p>span{
    width: 100px;
  }
  .box2>p:nth-of-type(1) a{
    color: #4b9b4f;
  }
  .box2>p:nth-of-type(1){
    width: 400px;
    display: flex;
    justify-content: space-around;
    text-align: center;
  }
  .box2>p:nth-of-type(2){
    width: 400px;
    display: flex;
    justify-content: space-around;
    text-align: center;
    color: #f78327;
  }
  .box2{
    height: 80px;
    overflow: hidden;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 40px;
    margin: auto;
  }
  .datu{
    margin-top: 20px;
    vertical-align: bottom;
  }
</style>
