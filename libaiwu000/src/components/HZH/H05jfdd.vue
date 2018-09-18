<template>
  <div class="h05div1">
   <div class="h05div2">
      <p>积分订单</p>
     <p>当前积分 : <span>{{jf}}</span></p>
   </div>
    <ul class="h05ul1">
      <li v-for="item in arr">
        <div class="h05div3">
          <p>订单号 : <span>{{item.ddh}}</span></p>
          <p>下单日期 : <span>{{item.sj}}</span></p>
          <p>订单状态 : <span>已完成</span></p>
        </div>
        <div class="h05div4">
          <img :src="item.src" alt="">
          <span>{{item.jj}}</span>
          <span>{{item.spgs}}</span>
          <span>{{item.spsl}}</span>
          <span>{{item.spjf}}</span>
          <span>
            <a href="">查看详情</a>
            <button>删除订单</button>
          </span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "H05jfdd",
        data(){
          return {
            arr:[
              {ddh:'150319690000',sj:'2015.04.09  18:06:06',src:'../../../static/hzh/h05-1-w80.png',jj:'云南昭通丑苹果 6个装',spgs:'6个装',spsl:'x️1',spjf:'积分 : 58'},
              {ddh:'150319690000',sj:'2015.04.09  18:06:06',src:'../../../static/hzh/h05-1-w80.png',jj:'云南昭通丑苹果 6个装',spgs:'6个装',spsl:'x️1',spjf:'积分 : 58'},
              {ddh:'150319690000',sj:'2015.04.09  18:06:06',src:'../../../static/hzh/h05-1-w80.png',jj:'云南昭通丑苹果 6个装',spgs:'6个装',spsl:'x️1',spjf:'积分 : 58'}
            ],
            jf:240,
          }
        },
      mounted(){

      }
    }
</script>

<style scoped>
      .h05div1{
        width: 1088px;
        border: 1px solid rgb(222,222,222);
        position: relative;
      }
      .h05div2{
        width: 100%;
        height: 59px;
        border-bottom: 1px solid rgb(222,222,222);
        position: relative;
        line-height: 59px;
        text-align: center;
        font-size: 25px;
        color: #666;

      }
      .h05div2>p:nth-of-type(1){
        margin-left: 20px;
        float: left;
      }
      .h05div2>p:nth-of-type(2){
        margin-right: 20px;
        float: right;
      }
      .h05div2>p:nth-of-type(2)>span{
        color: rgb(247,131,39);
      }
      .h05ul1>li{
        height: 170px;
        width: 1044px;
        border: 1px solid rgb(222,222,222);
        margin: 20px auto;
      }
      .h05div3{
        width: 100%;
        height: 46px;
        line-height: 46px;
        background-color:rgb(222,222,222);
        color: #666;
        font-size: 16px;
      }
      .h05div3>p:nth-of-type(1){
        margin-left: 20px;
        float: left;
      }
      .h05div3>p:nth-of-type(3){
        margin-right: 20px;
        float: right;
      }
      .h05div3>p:nth-of-type(2){
        position: absolute;
        left: 380px;
      }
      .h05div3>p:nth-of-type(3)>span{
        color: rgb(247,131,39);
      }
      .h05div4{
        width: 100%;
        height: 124px;
        color: #999;
        font-size: 17px;
        position: relative;
      }
      .h05div4>img{
        margin: 20px;
      }
      .h05div4>span:nth-of-type(1){
        position: absolute;
        top: 45px;
        left: 120px;
      }
      .h05div4>span:nth-of-type(2){
        position: absolute;
        top: 45px;
        left: 380px;
      }
      .h05div4>span:nth-of-type(3){
        position: absolute;
        top: 45px;
        left: 535px;
      }
      .h05div4>span:nth-of-type(4){
        display: inline-block;
        width: 200px;
        text-align: center;
        line-height: 124px;
        position: absolute;
        top: 0px;
        left: 680px;
        border-left: solid 1px rgb(222,222,222);
        border-right: solid 1px rgb(222,222,222);
      }
      .h05div4>span:nth-of-type(5)>a{
        position: absolute;
        right: 42px;
        top: 25px;
        text-decoration: underline;
        color:rgb(77,156,80);
      }
      .h05div4>span:nth-of-type(5)>button{
        width: 90px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        color:white;
        background-color:rgb(247,131,39);
        border-radius: 9px;
        position: absolute;
        right: 30px;
        top: 68px;
      }
</style>
