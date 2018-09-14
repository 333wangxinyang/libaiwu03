<template>
    <div id="foot">
      <div id="foot_div1">
      <ul>
        <li>优鲜保障</li>
        <li>全程监控</li>
        <li>礼拜五特惠</li>
        <li>基地直供</li>
        <li>准时送达</li>
      </ul>
      </div>
      <div id="foot_div2">
        <div>
          <img src="../../../static/wangxinyang/logoxiao01.png" alt="">
          <img src="../../../static/wangxinyang/erweima.png" alt="">
          <img src="../../../static/wangxinyang/erweima.png" alt="">
          <span>服务时间：08：-22:00</span>
          <span>400-800-8820</span>
          <span>礼拜五官方微信</span>
          <span>礼拜五APP</span>
          <ul id="ulBox">
            <li>
              <ul>
                <li>关于礼拜五 </li>
                <li><a href="###">新用户注册 </a> </li>
                <li><a href="###">在线下单</a></li>
                <li><a href="###">支付方式</a></li>
              </ul>
            </li>
            <li>
              <ul>
                <li>关于礼拜五 </li>
                <li><a href="###">新用户注册 </a> </li>
                <li><a href="###">在线下单</a></li>
                <li><a href="###">支付方式</a></li>
              </ul>
            </li>
            <li>
              <ul>
                <li>关于礼拜五 </li>
                <li><a href="###">新用户注册 </a> </li>
                <li><a href="###">在线下单</a></li>
                <li><a href="###">支付方式</a></li>
              </ul>
            </li>
            <li>
              <ul>
                <li>关于礼拜五 </li>
                <li><a href="###">新用户注册 </a> </li>
                <li><a href="###">在线下单</a></li>
                <li><a href="###">支付方式</a></li>
              </ul>
            </li>
          </ul>

        </div>

      </div>
      <p>版权所有 © 礼拜五  保留所有权利 | 沪ICP备12042163 </p>
      <p>礼拜五  纵享品质 </p>
    </div>
</template>

<script>
    export default {
        name: "font"
    }
</script>

<style scoped>
  #foot>p:nth-of-type(1){
    font-size: 12px;
    width: 100%;
    text-align: center;
    color: #666666;
  }
  #foot>p:nth-of-type(2){
    font-size: 12px;
    width: 100%;
    text-align: center;
    color: #f08200;
    padding-bottom: 20px;
  }
  #foot_div1{
    width: 100% ;
    border: 1px solid #dddddd;
    margin-top:40px ;
  }
  #foot_div1>ul{
  width: 1280px;
    margin: auto;
  height: 45px;
  padding: 30px;
    display: flex;
    justify-content: space-between;
}
  #foot_div1>ul>li{
    width: 210px;
    height: 45px;
    line-height: 45px;
    font-size: 24px;
    text-align: center;
    border-right: 1px solid #dddddd;
    padding-left: 45px;
    text-indent: 50px;
    background: url("../../../static/wangxinyang/shouye02.png") 0px -690px content-box no-repeat content-box;
  color: #333333;
  }
  #foot_div1>ul>li:nth-of-type(2){
    background: url("../../../static/wangxinyang/shouye02.png") 0px -740px content-box no-repeat content-box;
  }
  #foot_div1>ul>li:nth-of-type(3){
    background: url("../../../static/wangxinyang/shouye02.png") 0px -790px content-box no-repeat content-box;
  }
  #foot_div1>ul>li:nth-of-type(4){
    background: url("../../../static/wangxinyang/shouye02.png") 0px -840px content-box no-repeat content-box;
  }
  #foot_div1>ul>li:nth-of-type(5){
    border-right: 0px solid #dddddd;
    background: url("../../../static/wangxinyang/shouye02.png") 0px -890px content-box no-repeat content-box;
  }
#foot_div2{
  width: 100%;
  height: 200px;
  margin: 20px 0;
  border-bottom: 1px solid  #dddddd;
}
  #foot_div2>div{
    width: 1220px;
    padding: 0 30px;
    margin:  0 auto;
    position: relative;
  }
  #foot_div2>div>img:nth-of-type(1){
    position: absolute;
    top: 0;
  }
  #foot_div2>div>img:nth-of-type(2){
    position: absolute;
    top: 0;
    left: 440px;
  }
  #foot_div2>div>img:nth-of-type(3){
    position: absolute;
    top: 0;
    left: 610px;
  }
  #foot_div2>div>span:nth-of-type(1){
    position: absolute;
    top: 140px;
    left: 40px;
    font-size:16px ;
    color: #666666;
  }
  #foot_div2>div>span:nth-of-type(2){
    position: absolute;
    top: 140px;
    color: #f08200;
    font-size: 16px;
    line-height: 22px;
    text-indent: 20px;
    background: url("../../../static/wangxinyang/shouye02.png") 0px -18px content-box no-repeat content-box;
    left: 245px;
  }
  #foot_div2>div>span:nth-of-type(3){
    position: absolute;
    top: 160px;
    left: 450px;
    font-size:16px ;
    color: #666666;
  }
  #foot_div2>div>span:nth-of-type(4){
    position: absolute;
    top: 160px;
    left: 640px;
    font-size:16px ;
    color: #666666;
  }
  #ulBox{
    width: 536px;
    position: absolute;
    right: 0;
    top: 0;
    display: flex;
    justify-content: space-around;
  }
  #ulBox ul>li:nth-of-type(1){
    font-size:18px ;
    color: #666666;
    padding:13px 0 ;
  }
  #ulBox ul>li>a{
    font-size:14px ;
    color: #cccccc;
   line-height: 30px;
  }

</style>
