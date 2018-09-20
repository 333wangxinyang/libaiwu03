<template>
    <div class="parent">
      <div class="nav1">
        <p>我的收藏</p>
      </div>
      <div class="box" v-for="(item,index) in data">
        <img :src="item.src1" height="253" width="261"/>
        <p>{{item.p1}}</p>
        <p>{{item.p2}}</p>
        <span>{{item.span1}}</span>
        <span style="text-decoration:line-through">{{item.span2}}</span>
        <img :src="item.src2" height="30" width="34"/><br>
        <span class="btn" @click="item.bol && addClick($event,index)">{{item.span3}}</span>
      </div>
      <div class="quxiao">
        <div>
          <div>是否取消收藏</div>
          <span class="queding">确定</span>
          <span class="quxiao1">取消</span>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Wodeshoucang",
        data(){
          return {
            data:[
              {src1:'../../../static/LYLimg/shuiguo1.png',p1:'新西兰佳沛黄金奇异果1',p2:'花蜜般的甘甜百吃不厌',span1:'¥28.80',span2:'¥40.00',src2:'../../../static/LYLimg/gouwuche.png',span3:'取消收藏',bol:true},
              {src1:'../../../static/LYLimg/shuiguo2.png',p1:'新西兰佳沛黄金奇异果2',p2:'花蜜般的甘甜百吃不厌',span1:'¥28.80',span2:'¥40.00',src2:'../../../static/LYLimg/gouwuche.png',span3:'取消收藏',bol:true},
              {src1:'../../../static/LYLimg/shuiguo3.png',p1:'新西兰佳沛黄金奇异果3',p2:'花蜜般的甘甜百吃不厌',span1:'¥28.80',span2:'¥40.00',src2:'../../../static/LYLimg/gouwuche.png',span3:'取消收藏',bol:true}
            ],
            cc:[],
          }
        },
        methods:{
          addClick(event,index){

            var bb = document.getElementsByClassName('quxiao')[0];
            var aa = event.currentTarget;
            bb.style.display = 'block';
            if (bb.style.display = 'block'){
              console.log('显示')
              // for (var i = 0;i < this.data.length;i++){
              //   this.data[i].bol = false;
              // }
            }
            console.log(index)
            console.log(aa)
            $('.queding').click(function () {
              console.log(index)
              bb.style.display = 'none'
              aa.style.backgroundColor = '#999999';
              aa.innerHTML = '已失效'
              this.data[index].bol = false;

              console.log(this.data[index])

            }.bind(this))
            $('.quxiao1').click(function () {
              bb.style.display = 'none';
            }.bind(this))
          }
        }
    }
</script>

<style scoped>
  .parent{
    overflow: hidden;
    position: relative;
  }
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
    text-align: center;
    line-height: 36px;
    color: white;
    border-radius: 20px;
    margin: auto;
    margin-top: 10px;
  }
  .btn{
    background-color: #3e9444;
  }
  .quxiao{
    display: none;
    width: 1000px;
    height: 500px;
    background-color: transparent;
    position: absolute;
    top: 50px;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    font-size: 25px;
    color: white;
    border-radius: 10px;
    z-index: 10;
  }
  .quxiao>div{
    width: 500px;
    height: 250px;
    text-align: center;
    background-color: #f08200;
    margin: auto;
    border-radius: 10px;
    position: relative;
  }
  .quxiao>div>div{
    text-align: center;
    line-height: 250px;
  }
  .quxiao>div>span{
    position: absolute;
    bottom: 20px;
    font-size: 17px;
  }
  .quxiao1{
    left: 20px;
  }
  .queding{
    right: 20px;
  }
</style>
