<template>
    <div class="parent">
      <div class="nav1">
        <p>我的收藏</p>
      </div>
      <div class="box" v-for="item in data">
        <img :src="item.src1" height="253" width="261"/>
        <p>{{item.p1}}</p>
        <p>{{item.p2}}</p>
        <span>{{item.span1}}</span>
        <span style="text-decoration:line-through">{{item.span2}}</span>
        <img :src="item.src2" height="30" width="34"/><br>
        <span class="btn">{{item.span3}}</span>
      </div>
      <div></div>
      <div></div>
    </div>
</template>

<script>
    export default {
        name: "Wodeshoucang",
        data(){
          return {
            data:[
              {src1:'../../../static/LYLimg/shuiguo1.png',p1:'新西兰佳沛黄金奇异果',p2:'花蜜般的甘甜百吃不厌',span1:'¥28.80',span2:'¥40.00',src2:'../../../static/LYLimg/gouwuche.png',span3:'已失效'},
              {src1:'../../../static/LYLimg/shuiguo2.png',p1:'新西兰佳沛黄金奇异果',p2:'花蜜般的甘甜百吃不厌',span1:'¥28.80',span2:'¥40.00',src2:'../../../static/LYLimg/gouwuche.png',span3:'取消收藏'},
              {src1:'../../../static/LYLimg/shuiguo3.png',p1:'新西兰佳沛黄金奇异果',p2:'花蜜般的甘甜百吃不厌',span1:'¥28.80',span2:'¥40.00',src2:'../../../static/LYLimg/gouwuche.png',span3:'取消收藏'}
            ]
          }
        }
    }
</script>

<style scoped>
  .nav1{
    height: 57px;
    border-bottom: 1px solid #ececec;
  }
  .nav1>p{
    line-height: 57px;
    margin-left: 20px;
    font-size: 17px;
    color: #666666;
  }
  .box{
    width: 304px;
    height: 480px;
    border: solid 1px #f2f2f2;
    margin: 40px 4px 0 40px;
    float: left;
  }
  .box>img:nth-of-type(2):hover{
    animation:bgd 1s linear;
  }
  @keyframes bgd {
    from {
      transform: scale(1);
    }
    25% {
      transform: scale(1.3);
    }
    50% {
      transform: scale(1);
    }
    75% {
      transform: scale(1.2);
    }
    to {
      transform: scale(1);
    }
  }
  .box>img:nth-of-type(1){
    display: block;
    margin: auto;
    margin-top: 30px;
    margin-bottom: 20px;
  }
  .box>p:nth-of-type(1){
    font-size: 18px;
    color: #707070;
    margin-left: 20px;
  }
  .box>p:nth-of-type(2){
    font-size: 14px;
    color: #707070;
    margin-left: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .box>span:nth-of-type(1){
    font-size: 25px;
    color: #f08200;
    margin-left: 20px;
  }
  .box>span:nth-of-type(2){
    font-size: 16px;
    color: #949494;
    margin-left: 10px;
  }
  .box>img:nth-of-type(2){
    margin-left: 70px;
  }
  .box>span:nth-last-of-type(1){
    display: block;
    width: 150px;
    height: 36px;
    background-color: #999999;
    text-align: center;
    line-height: 36px;
    color: white;
    border-radius: 20px;
    margin: auto;
    margin-top: 10px;
  }
  .parent>div:nth-of-type(3)>.btn{
    background-color: #3e9444;
  }
  .parent>div:nth-of-type(4)>.btn{
    background-color: #3e9444;
  }
</style>
