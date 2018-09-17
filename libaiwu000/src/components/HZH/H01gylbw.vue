<template>

  <div id="h01box">
    <div id="h01div1">
      <span>您当前的位置 : </span> <a href="">首页</a> > <a href="">礼拜五商城</a> > <a href="">新用户注册</a>
    </div>

    <div id="h01div2">
      <div><p>礼拜五商城</p></div>
      <ul id="h01ul1">
        <li><a href="###" class="h01class1">关于礼拜五  <span>></span></a></li>
        <li><a href="###" class="h01class2 h01class3">新用户注册</a></li>
        <li><a href="###" class="h01class2">在线下单</a></li>
        <li><a href="###" class="h01class2">支付方式</a></li>
        <li><a href="###" class="h01class1">配送说明  <span>></span></a></li>
        <li><a href="###" class="h01class2">运费说明</a></li>
        <li><a href="###" class="h01class2">配送方式</a></li>
        <li><a href="###" class="h01class2">发票说明</a></li>
        <li><a href="###" class="h01class1">售后服务 <span>></span></a></li>
        <li><a href="###" class="h01class2">退换货原则</a></li>
        <li><a href="###" class="h01class2">服务保障承诺</a></li>
        <li><a href="###" class="h01class2">验货与签收</a></li>
        <li><a href="###" class="h01class2">发票说明</a></li>
        <li><a href="###" class="h01class1">加盟礼拜五  <span>></span> </a></li>
        <li><a href="###" class="h01class2">加盟条款</a></li>
        <li><a href="###" class="h01class2">公司简介</a></li>
        <li><a href="###" class="h01class2">服务协议</a></li>
      </ul>
    </div>

    <div id="h01div3">
      <div id="h01div4">
        <p>关于我们</p>
      </div>

      <div id="h01div5">
        <h2>新用户注册</h2>
        <span>
          <p>分类 : 关于礼拜五</p>
          <p>日期 : 2015年9月21日</p>
        </span>
        <p>我们的梦想是为全国 14 亿人民都能享用到安全和高品质的新鲜食材。是美国，澳大利亚，新西兰，以色列和西班牙领事馆农业部和商务部的指定食材合作推广伙伴，有美国 Sunkist，新西兰 Zespri，澳大利亚 MFC，以色列 Jaffa等合作品牌。每年从全球五大洲和二十多个国家进口和销售超过 1000 个集装柜的水果和食品。同时，还致力于发展国内高品质的食材，我们和全国各地优质农场建立直联合作，并为此开发了和建立了完善的水果身份认证和溯源系统，确保食材的信息透明和安全。</p>
        <img src="../../../static/hzh/h01-1-w1007h265.png" alt="">
        <p>我们的梦想是为全国 14 亿人民都能享用到安全和高品质的新鲜食材。是美国，澳大利亚，新西兰，以色列和西班牙领事馆农业部和商务部的指定食材合作推广伙伴，有美国 Sunkist，新西兰 Zespri，澳大利亚 MFC，以色列 Jaffa等合作品牌。每年从全球五大洲和二十多个国家进口和销售超过 1000 个集装柜的水果和食品。同时，还致力于发展国内高品质的食材，我们和全国各地优质农场建立直联合作，并为此开发了和建立了完善的水果身份认证和溯源系统，确保食材的信息透明和安全。</p>
        <img src="../../../static/hzh/h01-2-w1007h266.png" alt="">
        <p>我们的梦想是为全国 14 亿人民都能享用到安全和高品质的新鲜食材。是美国，澳大利亚，新西兰，以色列和西班牙领事馆农业部和商务部的指定食材合作推广伙伴，有美国 Sunkist，新西兰 Zespri，澳大利亚 MFC，以色列 Jaffa等合作品牌。每年从全球五大洲和二十多个国家进口和销售超过 1000 个集装柜的水果和食品。同时，还致力于发展国内高品质的食材，我们和全国各地优质农场建立直联合作，并为此开发了和建立了完善的水果身份认证和溯源系统，确保食材的信息透明和安全。</p>
      </div>
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
    mounted(){
      $('.h01class2').click(function () {
        $('.h01class2').css({textDecoration:"none",color:"#999"})
        $(this).css({textDecoration:"underline",color:"#63a365"})
      })
    }
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
      float: left;
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

  #h01div3{
    width: 1080px;
    height: 1180px;
    border: solid 1px #ececec;
    float: right;
  }
  #h01div4{
    width: 100%;
    height: 60px;
    border-bottom: solid 1px #ececec;
    font-size: 24px;
    line-height: 60px;
    color: #666;
  }
    #h01div4>p{
      margin-left: 20px;
    }
  #h01div5{
    width: 1007px;
    height: 100%;
    margin: 0 auto;
  }
    #h01div5>h2{
      text-align: center;
      color:#63a365;
      margin-top: 20px;
      font-size: 27px;
      margin-bottom: 15px;
    }
    #h01div5>span{
      display: block;
      width: 362px;
      height: 22px;
      line-height: 22px;
      margin:0 auto;
      color: #999;
      margin-bottom: 15px;
    }
    #h01div5>span>p:nth-of-type(1){
      float: left;
    }
    #h01div5>span>p:nth-of-type(2){
      float: right;
    }
    #h01div5>p{
      color: #666;
      margin-bottom: 25px;
      line-height: 30px;
    }
    #h01div5>img{
      width: 1007px;
      height: 266px;
      margin-bottom: 20px;
    }
  #h01ul1>li:nth-of-type(2)>a{
    text-decoration: underline;
    color:#63a365;
  }
</style>
