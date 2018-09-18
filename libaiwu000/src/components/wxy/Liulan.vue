<template>
  <div class="box">
    <span>最近浏览</span>
    <div class="two">
<div class="ww" v-for="item in arr">
  <img :src="item.pic" alt="">
  <img :src="item.pic2" alt="" class="dw">
  <span>{{item.title}}</span>
  <span>{{item.title1}}</span>
  <img :src="item.pic1" alt="">
  <img :src="item.pic3" alt="">
</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Liulan",
    mounted(){
     $('.dw').click(function () {
      $(this).parent().css({display:'none'});
     });
    },
    data(){
      return {
        arr:[
          {
         pic:'../../../static/wxy1/pt.png',
            title:'新西兰佳沛黄金奇异果',
            title1:'果肉绵密,花蜜般的甘甜百吃不厌',
            pic1:'../../../static/wxy1/money.png',
            pic2:'../../../static/wxy1/gb.png',
            pic3:'../../../static/wxy1/gwc.png'
          },{
            pic:'../../../static/wxy1/pt.png',
            title:'新西兰佳沛黄金奇异果',
            title1:'果肉绵密,花蜜般的甘甜百吃不厌',
            pic1:'../../../static/wxy1/money.png',
            pic2:'../../../static/wxy1/gb.png',
            pic3:'../../../static/wxy1/gwc.png'
          },{
            pic:'../../../static/wxy1/pt.png',
            title:'新西兰佳沛黄金奇异果',
            title1:'果肉绵密,花蜜般的甘甜百吃不厌',
            pic1:'../../../static/wxy1/money.png',
            pic2:'../../../static/wxy1/gb.png',
            pic3:'../../../static/wxy1/gwc.png'
          },{
            pic:'../../../static/wxy1/pt.png',
            title:'新西兰佳沛黄金奇异果',
            title1:'果肉绵密,花蜜般的甘甜百吃不厌',
            pic1:'../../../static/wxy1/money.png',
            pic2:'../../../static/wxy1/gb.png',
            pic3:'../../../static/wxy1/gwc.png'
          },{
            pic:'../../../static/wxy1/pt.png',
            title:'新西兰佳沛黄金奇异果',
            title1:'果肉绵密,花蜜般的甘甜百吃不厌',
            pic1:'../../../static/wxy1/money.png',
            pic2:'../../../static/wxy1/gb.png',
            pic3:'../../../static/wxy1/gwc.png'
          },{
            pic:'../../../static/wxy1/pt.png',
            title:'新西兰佳沛黄金奇异果',
            title1:'果肉绵密,花蜜般的甘甜百吃不厌',
            pic1:'../../../static/wxy1/money.png',
            pic2:'../../../static/wxy1/gb.png',
            pic3:'../../../static/wxy1/gwc.png'
          },
        ]
      }
    }
  }
</script>

<style scoped>
  .box{
    width: 100%;
    height:730px;
    position: relative;
    top: 10px;
  }
  .box>span:nth-of-type(1){
    padding-left: 10px;
    display: block;
    width: 100%;
    height: 30px;
    border-bottom: 1px solid  #d9d9d9;
  }
  .two{
    width: 1050px;
    height: 650px;
    position: absolute;
    top: 50px;
    left: 20px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
.ww{
  width: 30%;
  height:300px;
  border: 1px solid #d9d9d9;
  position: relative;
  top: 10px;
}
  .ww>img:nth-of-type(1){
    width: 170px;
    height: 170px;
    position: absolute;
    top: 10px;
    left: 80px;
  }
  .ww>img:nth-of-type(2) {

    position: absolute;
    top: 10px;
    right: 10px;
  }
.ww>span:nth-of-type(1){
  position: absolute;
  top: 200px;
  left: 90px;
}
  .ww>span:nth-of-type(2){
    position: absolute;
    top: 230px;
    font-size: 14px;
    left: 80px;
  }
  .ww>img:nth-of-type(3) {
    position: absolute;
    top: 260px;
    left: 80px;
    width: 150px;
    height: 16px;
  }
  .ww>img:nth-of-type(4) {
    position: absolute;
    top: 260px;
    right: 30px;
    width: 30px;
    height: 25px;
  }
</style>
