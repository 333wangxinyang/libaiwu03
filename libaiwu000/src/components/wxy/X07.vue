<template>
<div class="box">
  <div class="title">
    <img src="../../../static/wxy1/x-hdg.png" alt="">
    <span>订单已提交，请于24小时内完成支付</span>
    <span>(逾期订单将被取消)</span>
  </div>
  <div class="t1">
    <img src="../../../static/wxy1/x-dz.png" alt="">
    <p>送货至：但小兵  北京  北京市  昌平区  天通苑明天第一城4号楼101  固定电话：101-215141598</p>
  </div>
  <div class="one">
    <span>应付金额：</span>
    <span>169.90</span>
    <span>订单详情：429547895147</span>
    <span class="ww">支付平台</span>
  </div>
  <div class="two">
    <img src="../../../static/wxy1/x-circe.png" alt="" class="aa1">
    <img src="../../../static/wxy1/x-wxzf.png" alt="">
    <img src="../../../static/wxy1/x-circe.png" alt="" class="aa1">
    <img src="../../../static/wxy1/x-yl.png" alt="">
    <img src="../../../static/wxy1/x-circe.png" alt="" class="aa1">
    <img src="../../../static/wxy1/x-zfbzf.png" alt="">
    <img src="../../../static/wxy1/x-circe.png" alt="" class="aa1">
    <img src="../../../static/wxy1/x-ye.png" alt="">
  </div>
  <div class="zf">
    <span>使用电脑支付</span>
    <img src="../../../static/wxy1/x-dn.png" alt="">
    <router-link to="/x08">
    <span class="zz">立即支付</span>
    </router-link>
    <span>或</span>
    <span>使用支付宝钱包扫一扫支付</span>
    <img src="../../../static/wxy1/x-zfb.png" alt="">
  </div>
  <div class="zf1">
    <img src="../../../static/wxy1/x-sys.png" alt="">
    <img src="../../../static/wxy1/x-wx.png" alt="">
    <img src="../../../static/wxy1/x-zfb.png" alt="">
  </div>
  <div class="zhe"></div>
    <div class="zhe1"></div>
    <div class="then">
      <span>使用平台支付</span>
      <p>请您在新打开的网上银行页面进行支付，支付完成前请不要关闭该窗口</p>
      <router-link to="/x08">
      <p class="p1">已经完成支付<span>查看订单详情</span></p>
      </router-link>
      <router-link to="">
      <p class="p2">支付失败<span>更换支付方式</span></p>
      </router-link>
    </div>

</div>
</template>

<script>
    export default {
        name: "X07",
      mounted(){
          var a=true;
          $('.aa1').click(function () {
            if (a==true){
            $(this).attr({src:'../../../static/wxy1/x-zf.png'});
            a=false;
            }else {
              $(this).attr({src:'../../../static/wxy1/x-circe.png'});
              a=true;
            }
            $('.two').click(function () {
              $('.zhe').css({display:'block'});
              $('.zhe1').css({display:'block'});
              $('.then').css({display:'block'});
            })
          });
          $('.p2').click(function () {
            $('.zhe').css({display:'none'});
            $('.zhe1').css({display:'none'});
            $('.then').css({display:'none'});
          })
      }
    }
</script>

<style scoped>
.box{
  width:1280px;
  margin: 10px auto;
  position: relative;
  top: 100px;
}
  .title{
    width: 670px;
    height: 160px;
    position: relative;
    top: 30px;
    left: 300px;
  }
  .title>img{
    position: absolute;
    top: 20px;
    left: 40%;
  }
  .title>span:nth-of-type(1){
    position: absolute;
    bottom: 10px;
    left: 120px;
  }
.title>span:nth-of-type(2){
  position: absolute;
  bottom: 10px;
 right: 140px;
  color: #f08200;
}
.t1{
  width: 100%;
  height: 30px;
  background-color: #f4fff2;
  border: 1px solid #e8e8e8;
  position: relative;
  top: 100px;
}
.t1 img{
  position: absolute;
  top: 5px;
  left: 10px;
}
.t1 p{
  position: absolute;
  top: 5px;
  left: 30px;
}
  .one{
    width: 100%;
    height:80px;
    position: relative;
    top: 100px;
    border-bottom: 1px solid #e8e8e8;
  }
  .one>span:nth-of-type(1){
    position: absolute;
    top: 10px;
    left: 10px;
  }
.one>span:nth-of-type(2){
  position: absolute;
  top: 10px;
  left:80px;
}
.one>span:nth-of-type(3){
  position: absolute;
  top: 10px;
  right:50px;
}
.one>span:nth-of-type(4){
  position: absolute;
  top: 50px;
  left: 10px;
}
  .two{
    width: 100%;
    height: 40px;
    position: relative;
    top: 130px;
  }
  .two>img:nth-of-type(1){
    position: absolute;
    top: 15px;
    left: 10px;
  }
.two>img:nth-of-type(2){
  position: absolute;
  top: 10px;
  left: 30px;
}
.two>img:nth-of-type(3){
  position: absolute;
  top: 15px;
  left: 150px;
}
.two>img:nth-of-type(4){
  position: absolute;
  top: 10px;
  left: 180px;
}
.two>img:nth-of-type(5){
  position: absolute;
  top: 15px;
  left: 310px;
}
.two>img:nth-of-type(6){
  position: absolute;
  top: 5px;
  left:330px;
}
.two>img:nth-of-type(7){
  position: absolute;
  top: 15px;
  left: 450px;
}
.two>img:nth-of-type(8){
  position: absolute;
  top: 10px;
  left: 480px;
}
  .zf{
    width: 100%;
    height: 320px;
    position: relative;
    top: 150px;
    border: 1px solid #e8e8e8;
  }
  .zf>span:nth-of-type(1){
    position: absolute;
    top: 50px;
    left: 320px;
  }
.zf>span:nth-of-type(2){
  position: absolute;
  top: 200px;
  left:600px;
  font-size: 20px;
}
  .zf>img:nth-of-type(1){
    position: absolute;
    top: 100px;
    left: 300px;
  }
.zz{
  position: absolute;
  bottom: 20px;
  left: 330px;
  display: block;
  background-color: #f08200;
  width: 100px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  color: white;
}
.zf>span:nth-of-type(3){
  position: absolute;
  top: 30px;
 right: 320px;
}
.zf>img:nth-of-type(2){
  position: absolute;
  top: 80px;
  right: 300px;
}
  .zf1{
    width: 100%;
    height: 350px;
    position: relative;
    top: 180px;
    border: 1px solid #e8e8e8;
  }
  .zf1>img:nth-of-type(1){
    position: absolute;
    top: 15px;
    left: 230px;
  }
.zf1>img:nth-of-type(2){
  position: absolute;
  top: 138px;
  right: 385px;
  z-index: 10;
}
.zf1>img:nth-of-type(3){
  position: absolute;
  top: 50px;
  right: 300px;
}
  .zhe{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
height: 100%;
    background-color: #9b9b9b;
    opacity: 0.6;
    z-index: 50;
    display: none;
  }
  .zhe1{
    width: 500px;
    height: 300px;
    opacity: 1;
    position: fixed;
    top: 200px;
    left: 425px;
    z-index: 55;
    background-color:#000000;
    display: none;
  }
  .then{
    width: 500px;
    height: 300px;
    opacity: 1;
    position: fixed;
    top: 200px;
    left: 425px;
    z-index: 60;
    background-color:#ffffff;
    display: none;
  }
  .then>span:nth-of-type(1){
    display: block;
    position: absolute;
    top: 30px;
    left: 180px;
    background-color: #fff;
    color: #f08200;
    font-size: 30px;
  }
  .then>p:nth-of-type(1){
    display: block;
    position: absolute;
    top: 120px;
    left: 30px;
    font-size: 14px;
  }
.p1{
  display: block;
  position: absolute;
  background-color: #f08200;
  bottom: 40px;
  width: 100px;
  height: 50px;
  color: white;
  left: 100px;
  text-align: center;
  font-size: 14px;
}
  .p1 span{
    position: absolute;
    top: 30px;
    left: 10px;
    font-size: 12px;
  }
.p2{
  display: block;
  position: absolute;
  background-color: #498e3d;
  bottom: 40px;
  width: 100px;
  height: 50px;
  color: white;
  right: 100px;
  text-align: center;
  font-size: 14px;
}
.p2 span{
  position: absolute;
  top: 30px;
  left: 10px;
  font-size: 12px;
}
</style>
