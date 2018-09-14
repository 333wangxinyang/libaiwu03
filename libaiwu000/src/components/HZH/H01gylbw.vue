<template>

  <div id="h01box">
    <div id="h01div1">
      <span>您当前的位置 : </span> <a href="">首页</a> > <a href="">礼拜五商城</a> > <a href="">新用户注册</a>
    </div>

    <div id="h01div2">
      <div><p>礼拜五商城</p></div>
      <ul id="h01ul1">
        <li><a href="" class="h01class1">关于礼拜五  <span>></span></a></li>
        <li><a href="">新用户注册</a></li>
        <li><a href="">在线下单</a></li>
        <li><a href="">支付方式</a></li>
        <li><a href="" class="h01class1">配送说明  <span>></span></a></li>
        <li><a href="">运费说明</a></li>
        <li><a href="">配送方式</a></li>
        <li><a href="">发票说明</a></li>
        <li><a href="" class="h01class1">售后服务 <span>></span></a></li>
        <li><a href="">退换货原则</a></li>
        <li><a href="">服务保障承诺</a></li>
        <li><a href="">验货与签收</a></li>
        <li><a href="">发票说明</a></li>
        <li><a href="" class="h01class1">加盟礼拜五  <span>></span> </a></li>
        <li><a href="">加盟条款</a></li>
        <li><a href="">公司简介</a></li>
        <li><a href="">服务协议</a></li>
      </ul>
    </div>




  </div>


</template>

<script>
  export default {
    name: "H01gylbw",
    data() {
      return {

      }
    },
  }
</script>

<style scoped>

    #h01box{
      width: 1280px;
      margin: 20px auto;
      position: relative;
    }
  #h01div1{
    background-color:rgb(230,230,230);
    width: 100%;
    height: 46px;
    line-height: 46px;
    margin-bottom: 20px;
  }
    #h01div1>span{
      margin-left: 20px;
      color: #666;
    }
    #h01div1>a{
      color: #666;
    }
    #h01div1>a:nth-of-type(3){
      color: #63a365;
    }

    #h01div2{
      border: solid 1px #ececec;
      height: 710px;
      width: 170px;
      display: inline-block;
    }
    #h01div2>div{
      width: 100%;
      height: 60px;
      border-bottom: solid 1px #ececec;
      font-size: 24px;
      line-height: 60px;
      color: #666;
    }
    #h01div2>div>p{
      margin-left: 20px;
    }

  #h01ul1{
    width: 100%;
    height: 650px;
    display:flex;
    flex-direction: column;
    justify-content: space-around;
  }
    #h01ul1>li{
      width: 100%;
    }
    #h01ul1>li>a{
      margin-left: 20px;
      color: #999;
    }
  .h01class1{
    font-size: 18px;
    color: #666 !important;
  }
  .h01class1>span{
    float: right;
    margin-right: 30px;
  }
</style>
