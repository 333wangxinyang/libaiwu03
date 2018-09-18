<template>
  <div class="big">
  <div id="fdj">
    <div id="box">
      <pic-zoom :url="src" :scale="2"></pic-zoom>
    </div>
    <div id="lb">
      <img class="bb" src="../../../static/wangxinyang/left1.png" alt="">
      <img :class="mm==1&&'aa'" src="../../../static/wxy1/ti01.jpg" alt="">
      <img :class="mm==2&&'aa'" src="../../../static/wxy1/ti02.jpg" alt="">
      <img :class="mm==3&&'aa'" src="../../../static/wxy1/ti03.jpg" alt="">
      <img :class="mm==4&&'aa'" src="../../../static/wxy1/ti04.jpg" alt="">
      <img class="bb" src="../../../static/wangxinyang/right1.png" alt="">
    </div>


    <div class="right">
      <span>新疆哈密瓜1500kg</span>
      <div class="tt">
        <img src="../../../static/wxy1/cheng2.png" alt="">
        <span>资深买家</span>
        <p>雀斑石榴持续热卖！云南蒙自石榴，原产波斯（今伊朗）一带，公元前二世纪时传
          入我国。是中国三大石榴之一，粒大皮薄，汁多味甜爽口。雀斑石榴持续热卖！云
          南蒙自石榴，原产波斯（今伊朗）一带，公元前二世纪时传入我国。是中国三大石
          榴之一，粒大皮薄，汁多味甜爽口。
        </p>
      </div>
      <span>500积分</span>
      <span>价值：￥20.0</span>
      <span>请选择规则：</span>
      <span class="aaa">500g</span>
      <span class="aaa aa1">1000g</span>
      <span class="aaa aa2">2000g</span>
      <span>请选择规则：</span>
      <span class="bbb">500g</span>
      <span class="bbb bb1">1000g</span>
      <span>数量：</span>
      <span class="cc"><button>-</button>{{str}}<button>+</button></span>
      <router-link to="">
        <span class="xx">立即兑换</span>
      </router-link>
      <div class="last">
        <img src="../../../static/wxy1/x-strat2.png" alt="" class="change">
        <span>收藏此商品</span>
        <span>分享到：</span>
        <img src="../../../static/wxy1/x-fx1.png" alt="" class="pic">
        <img src="../../../static/wxy1/x-fx2.png" alt="" class="pic ww1">
        <img src="../../../static/wxy1/x-fx3.png" alt="" class="pic ww2">
        <img src="../../../static/wxy1/x-fx4.png" alt="" class="pic ww3">
        <img src="../../../static/wxy1/x-fx5.png" alt="" class="pic ww4">
      </div>
    </div>
  </div>
  </div>
</template>
<!--https://segmentfault.com/a/1190000012917213-->
<script>
  import PicZoom from 'vue-piczoom'

  export default {
    name: "fff",
    components: {
      PicZoom
    },
    data(){
      return{
        mm:1,
        src:'../../../static/wxy1/ti01.jpg',
      }
    },
    mounted(){














      // $("#box").on("mouseenter",function(){
      //   $('canvas').css({
      //     left: '600px' ,
      //     top: '310px',
      //   })
      // });






      $('#lb>img').eq(0).click(function () {
        if(this.mm===1){
          this.mm = 4;
        }else {
          this.mm = this.mm-1;

        }
        this.src = '../../../static/wxy1/ti0'+this.mm + '.jpg'
      }.bind(this))
      $('#lb>img').eq(5).click(function () {
        if(this.mm===4){
          this.mm = 1;
        }else {
          this.mm = this.mm+1;
        }
        this.src = '../../../static/wxy1/ti0'+this.mm +'.jpg'
        console.log(this.src);
      }.bind(this))
      $('#lb>img').eq(1).click(function () {
        this.mm = 1;
        this.src = '../../../static/wxy1/ti0'+this.mm + '.jpg'
      }.bind(this))
      $('#lb>img').eq(2).click(function () {
        this.mm = 2;
        this.src = '../../../static/wxy1/ti0'+this.mm + '.jpg'
      }.bind(this))
      $('#lb>img').eq(3).click(function () {
        this.mm = 3;
        this.src = '../../../static/wxy1/ti0'+this.mm + '.jpg'
      }.bind(this))
      $('#lb>img').eq(4).click(function () {
        this.mm = 4;
        this.src = '../../../static/wxy1/ti0'+this.mm + '.jpg'
      }.bind(this))
    }
  }
</script>

<style scoped>
  .big{
    width: 1280px;
    margin: auto;
    position: relative;
    top: 10px;
  }
  #fdj{
    width: 500px;
    height: 345px;
    border: 1px solid red;
    position: relative;
    top: 30px;
  }
  #box{
    width: 500px;
    height: 277px;
    overflow: hidden;
  }
  .box img{
    width:500px;
    height: 277px;
  }
  pic-zoom{
    width: 500px;
    height: 277px;
  }
  #lb{
    width: 500px;
    height: 50px;
    overflow: hidden;
    /*position: absolute;*/
    margin-top: 20px;
    /*bottom: 0;*/
    display: flex;
    justify-content: space-between;
    border: 1px solid #0ff;
  }
  #lb>img{
    width: 86px;
    height: 46px;
    border: 2px solid #dfdfdf;
  }
  #lb>.bb{
    width: 35px;
    height: 44px;
    padding: 3px 0;
    border: 0px solid #dfdfdf;
  }
  #lb>.aa{
    width: 86px;
    height: 46px;
    /*border: 1px solid #dfdfdf;*/
    border: 2px solid #f08201;
  }
  .right{
    position: absolute;
    top: 50px;
    left: 700px;
    width: 860px;
    height: 380px;
    border: 1px solid #0ff;
  }
  .right>span:nth-of-type(1){
    position: absolute;
    top: 10px;
    left: 10px;
  }
  .tt{
    width: 750px;
    height: 140px;
    border-top: 1px solid #ededed;
    border-bottom: 1px solid #ededed;
    position: relative;
    top: 40px;
    left: 10px;
  }
  .tt img{
    position: absolute;
    top:10px;
    left: 10px;
  }
  .tt span{
    display: block;
    width: 100px;
    height: 30px;
    position: absolute;
    top: 100px;
    background-color: #ffe313;
    text-align: center;
    line-height: 30px;
    border-radius: 25px;
  }
  .tt p{
    width:600px;
    display: block;
    position: absolute;
    left: 140px;
    top: 30px;
    color: #666666;
  }
  .right>span:nth-of-type(2){
    position: absolute;
    bottom: 160px;
    left: 20px;
    color: #ff5757;
    font-size: 20px;
  }
  .right>span:nth-of-type(3){
    position: absolute;
    bottom: 160px;
    left:140px;
  }
  .right>span:nth-of-type(4){
    position: absolute;
    bottom: 130px;
    left: 20px;
    display: block;
  }
  .aaa{
    display: block;
    position: absolute;
    bottom: 130px;
    left: 120px;
    width: 50px;
    height: 20px;
    border: 1px solid #d4d4d4;
    text-align: center;
    line-height: 20px;
  }
  .bbb{
    display: block;
    position: absolute;
    bottom: 90px;
    left: 120px;
    width: 50px;
    height: 20px;
    border: 1px solid #d4d4d4;
    text-align: center;
    line-height: 20px;
  }
  .aa1{
    left: 180px;
  }
  .aa2{
    left:240px;
  }
  .bb1{
    left: 180px;
  }
  .right>span:nth-of-type(8){
    position: absolute;
    bottom: 90px;
    left: 20px;
  }
  .right>span:nth-of-type(11){
    position: absolute;
    bottom: 55px;
    left: 20px;
  }
  .right>span:nth-of-type(12){
    position: absolute;
    bottom: 55px;
    left: 60px;
    display: block;
    width: 150px;
    height: 25px;
    border:1px solid #d4d4d4;
    text-align: center;
  }
  .cc>button{
    width: 40px;
    height: 25px;
  }
  .cc>button:nth-of-type(1){
    position: absolute;
    left: 0;
    font-size: 20px;
  }
  .cc>button:nth-of-type(2){
    position: absolute;
    right: 0;
    font-size: 20px;
  }
  .right a{
    color: #666;
  }
  .xx{
    position: absolute;
    bottom: 55px;
    left:240px;
    display: block;
    width: 100px;
    height: 25px;
    background-color: #f08200;
    text-align: center;
    line-height: 25px;
    color: #fff;
  }
  .last{
    position: absolute;
    position: absolute;
    bottom: 5px;
    right: 200px;
    width: 400px;
    height: 40px;
    /*border: 1px solid #666;*/
  }
  .change{
    position: absolute;
    top: 10px;
    left: 0;
  }
  .last>span:nth-of-type(1){
    position: absolute;
    top: 10px;
    left: 30px;
  }
  .last>span:nth-of-type(2){
    position: absolute;
    top: 10px;
    left: 120px;
  }
  .pic{
    width: 20px;
    height: 20px;
    position: absolute;
    top: 10px;
    right: 200px;
  }
  .ww1{
    right: 170px;
  }
  .ww2{
    right: 140px;
  }
  .ww3{
    right: 110px;
  }
  .ww4{
    right: 80px;
  }
</style>
