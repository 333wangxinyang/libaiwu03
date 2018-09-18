<template>
  <div class="h05div1">
    <div class="h06div1">
      <p>订单编号 ：15041305000006958388</p>
      <p>订单状态 ：<span>待兑换</span></p>
      <span>
        <button>立即兑换</button>
        <button>取消订单</button>
      </span>
    </div>

    <div class="h06div2">
      <ul>
        <li>
          <span>支付方式</span>
          <span>积分</span>
        </li>
        <li>
          <span>支付流水号</span>
          <span>4643196461647896166</span>
        </li>
        <li>
          <span>下单时间</span>
          <span>2016-04-03 16:11:38</span>
        </li>
        <li>
          <span>支付时间</span>
        </li>
        <li>
          <span>发货时间</span>
        </li>
        <li>
          <span>收货时间</span>
        </li>
        <li>
          <span>订单备注</span>
          <span>希望包裹的严实一些,不要有破损情况,谢谢</span>
        </li>
      </ul>
    </div>
    <h2>收货人信息</h2>

    <div class="h06div2 h06div3">
      <ul>
        <li>
          <span>收货人姓名</span>
          <span>王敏敏</span>
        </li>
        <li>
          <span>地址</span>
          <span>4643196461647896166</span>
        </li>
        <li>
          <span>联系方式</span>
          <span>手机：15035689566/固定电话：010-12548756</span>
        </li>
      </ul>
    </div>

    <h2>物流信息</h2>

    <div class="h06div2 h06div4">
      <ul>
        <li>
          <span>联系人 : 张小哥</span>
        </li>
        <li>
          <span>联系方式 : 13995684562</span>
        </li>
      </ul>
    </div>

    <div class="h06div5">
      <div>
        <span>爱果果水果店</span>
        <span>规格</span>
        <span>单价</span>
        <span>数量</span>
        <span>金额</span>
      </div>

      <ul>
        <li v-for="item in arr">
          <img :src="item.src" alt="">
          <span>{{item.jj}}</span>
          <span>{{item.spgg}}</span>
          <span>¥{{item.spdj}}</span>
          <span>{{item.spsl}}</span>
          <span>{{item.spje}}积分</span>
        </li>
      </ul>

    </div>
    <p>积分 : <span>{{zjf}}</span></p>
    <span>
        <button>取消订单</button>
        <button>立即兑换</button>
      </span>


  </div>
</template>

<script>
    export default {
        name: "H06jfxq",
      data(){
          return {
          arr:[
            {
              src:'../../../static/hzh/h06-1-w80.png',
              jj:'云南蒙自石榴8个装',
              spgg:'8个装',
              spdj:'569',
              spsl:'1',
              spje:'50',
            },
            {
              src:'../../../static/hzh/h06-1-w80.png',
              jj:'云南蒙自石榴8个装',
              spgg:'8个装',
              spdj:'569',
              spsl:'1',
              spje:'50',
            }
          ],
          zjf:0,
      }
    },
      mounted(){
          var zjf2 = 0;
          for(var i = 0 ; i< this.arr.length; i++){
              zjf2 = this.arr[i].spsl * this.arr[i].spje + zjf2
          }
          this.zjf = zjf2+'积分';
      }
    }
</script>

<style scoped>
  .h05div1{
    width: 1088px;
    border: 1px solid rgb(222,222,222);
    position: relative;
  }
  .h06div1{
    width: 100%;
    height: 59px;
    border-bottom: 1px solid rgb(222,222,222);
    position: relative;
    line-height: 59px;
    font-size: 20px;
    color: #666;
  }
  .h06div1>p{
    margin-left: 20px;
    float: left;
  }
  .h06div1>p:nth-of-type(2){
    margin-left: 130px;
  }
  .h06div1>p:nth-of-type(2)>span{
    color: rgb(247,131,39);
  }
  .h06div1>span{
    margin-top: 15px;
    display: inline-block;
    width: 222px;
    height: 30px;
    line-height: 30px;
    float: right;
    margin-right: 20px;

  }
  .h06div1>span>button{
    width: 90px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    color:white;
    font-size: 14px;
    border-radius: 8px;
    background-color: rgb(77,156,80);
  }
  .h06div1>span>button:nth-of-type(1){
    float: left;
  }
  .h06div1>span>button:nth-of-type(2){
    float: right;
    background-color:rgb(153,153,153);
  }
  .h06div2{
    width: 1044px;
    height: 274px;
    background-color:rgb(222,222,222);
    margin: 20px;
    border: 1px solid rgb(180,180,180);
  }
  .h06div2>ul{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .h06div2>ul>li{
    color:#666;
  }
  .h06div2>ul>li>span:nth-of-type(1){
    margin-left: 20px;
  }
  .h06div2>ul>li>span:nth-of-type(2){
    position: absolute;
    left: 200px;
  }
  .h06div3{
    height: 130px;
  }
  .h06div4{
    height: 94px;
  }
  h2{
    color: rgb(77,156,80);
    margin-left: 20px;
  }
   .h06div5{
     width: 1044px;
     border: 1px solid rgb(180,180,180);
     margin: 20px auto;
   }
  .h06div5>div{
    height: 48px;
    width: 100%;
    background-color:rgb(222,222,222);
    line-height: 48px;
    display: flex;
    justify-content: space-between;
    color: #666;
  }
  .h06div5>div>span:nth-of-type(1){
    margin-left: 20px;
  }
  .h06div5>div>span:nth-of-type(2){
    margin-left: 150px;
  }
  .h06div5>div>span:nth-of-type(5){
    margin-right:20px;
  }
  .h06div5>ul>li{
    width: 100%;
    height: 120px;
    border-bottom: 1px solid rgb(222,222,222);
    line-height: 120px;
  }
  .h06div5>ul>li>img{
    margin: 20px;
  }
  .h06div5>ul>li>span{
   position: absolute;
    font-size: 14px;
    color:#666;
  }
  .h06div5>ul>li>span:nth-of-type(1){
    left: 140px;
  }
  .h06div5>ul>li>span:nth-of-type(2){
    left: 442px;
  }
  .h06div5>ul>li>span:nth-of-type(3){
    left: 632px;
  }
  .h06div5>ul>li>span:nth-of-type(4){
    left: 836px;
  }
  .h06div5>ul>li>span:nth-of-type(5){
    right:36px;
  }
  .h05div1>p{
    float: right;
    margin-right: 20px;
    font-size: 18px;
    color:#666;
    margin-top: 20px;
  }
  .h05div1>p>span{
    color:red;
    font-size: 24px;
  }
  .h05div1>span{
    display: inline-block;
    width: 344px;
    height: 50px;
    margin-top: 30px;
    margin-left: 724px;
    margin-bottom: 30px;
  }
  .h05div1>span>button{
    width: 150px;
    height: 50px;
    line-height: 50px;
    border-radius: 10px;
    font-size: 19px;
    color:white;
    background-color:rgb(153,153,153);
  }
  .h05div1>span>button:nth-of-type(2){
    float: right;
    background-color:rgb(247,131,39);
  }
</style>
