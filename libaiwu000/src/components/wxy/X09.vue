<template>
  <div class="box1">

    <div class="title">
      <span>您的当前位置：首页 > 全部商品 > 苹果 > 阿克苏</span>
    </div>
    <div class="big">
      <div id="fdj">
        <div id="box">
          <pic-zoom :url="arr3.src" :scale="2"></pic-zoom>
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
          <span>{{arr3.name}}</span>
          <div class="jia">
          <span>全国</span>
          <span>礼拜五</span>
          <span>次日达</span>
          <span>自营</span>
          </div>
          <div class="tt">
            <img src="../../../static/wxy1/cheng2.png" alt="">
            <span>资深买家</span>
            <p>{{arr3.jj}}
            </p>
          </div>
          <span>500积分</span>
          <span>价值：￥{{arr3.xj}}</span>
          <span>请选择规则：</span>
          <span class="aaa">500g</span>
          <span class="aaa aa1">1000g</span>
          <span class="aaa aa2">2000g</span>
          <span>请选择规则：</span>
          <span class="bbb">500g</span>
          <span class="bbb bb1">1000g</span>
          <span>数量：</span>
          <span class="cc"><button @click="aa1()">-</button>{{str}}<button  @click="bb1()">+</button></span>
          <router-link to="">
            <span class="xx"  @click="cc1(arr3.id)" >加入购物车</span>
          </router-link>
          <router-link to="/X07">
            <span class="xx1 xx">立即购买</span>
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
    <div class="sp">
      <div class="xq">
        <span class="r1">商品详情</span>
        <span class="r2">商品评价</span>
      </div>
      <div class="yy" v-for="item in arr1">
        <span>{{item.name}}</span>
        <p>{{item.title}}</p>
        <p>{{item.title1}}</p>
        <p>{{item.title3}}</p>
        <img :src="item.pic" alt="">
      </div>
      <div class="ty">
        <div class="yy1">
          <img src="../../../static/wxy1/touxiang.png" alt="">
          <span>158****0245</span>
          <img src="../../../static/wxy1/x-xx1.png" alt="">
          <p>帮同事买的，很不错，性价比高</p>
          <img src="../../../static/wxy1/x-ren.png" alt="" class="v1 vv">
          <img src="../../../static/wxy1/x-ren.png" alt="" class="v1 vv1">
          <img src="../../../static/wxy1/x-ren.png" alt="" class="v1 vv2">
          <img src="../../../static/wxy1/x-ren.png" alt="" class="v1 vv3">
          <span>2016-08-22</span>
          <span>20:45:01</span>
        </div>
        <div class="yy1">
          <img src="../../../static/wxy1/touxiang.png" alt="">
          <span>158****0245</span>
          <img src="../../../static/wxy1/x-xx.png" alt="">
          <p>帮同事买的，很不错，性价比高</p>
          <img src="../../../static/wxy1/x-ren.png" alt="" class="v1 vv">
          <img src="../../../static/wxy1/x-ren.png" alt="" class="v1 vv1">
          <span>2016-08-22</span>
          <span>20:45:01</span>
        </div>
        <div class="yy1">
          <img src="../../../static/wxy1/touxiang.png" alt="">
          <span>158****0245</span>
          <img src="../../../static/wxy1/x-xx1.png" alt="">
          <p>帮同事买的，很不错，性价比高</p>
          <img src="../../../static/wxy1/x-ren.png" alt="" class="v1 vv">
          <img src="../../../static/wxy1/x-ren.png" alt="" class="v1 vv1">
          <img src="../../../static/wxy1/x-ren.png" alt="" class="v1 vv2">
          <img src="../../../static/wxy1/x-ren.png" alt="" class="v1 vv3">
          <span>2016-08-22</span>
          <span>20:45:01</span>
        </div>
        <div class="yy1">
          <img src="../../../static/wxy1/touxiang.png" alt="">
          <span>158****0245</span>
          <img src="../../../static/wxy1/x-xx.png" alt="">
          <p>帮同事买的，很不错，性价比高</p>
          <img src="../../../static/wxy1/x-ren.png" alt="" class="v1 vv">
          <img src="../../../static/wxy1/x-ren.png" alt="" class="v1 vv1">
          <span>2016-08-22</span>
          <span>20:45:01</span>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import fff from '@/components/wxy/fff'
  import PicZoom from 'vue-piczoom'
  import Bus from '../../assets/bus'
  export default {
    name: "X09",
    components:{
      fff:'fff',
      PicZoom
    },
    data(){
      return {
        mm:1,
        src:'../../../static/wxy1/ti01.jpg',
        arr3:[],
        arr1:[
          {
            name:'男士端衬衫',
            title:'明水礼盒十分优秀，是送朋友，送情人的不二选择。',
            title1:' 什么，您还不知道明水礼盒，今年过年不收礼，收礼只收明水礼盒，OUT了吧，赶紧买起礼盒送亲朋，送好友吧。',
            title3:'完成交易，如有剩余库存，从新上架产品',
            pic:'../../../static/wxy1/x-cs.png'
          },
          {
            name:'男士端衬衫',
            title:'明水礼盒十分优秀，是送朋友，送情人的不二选择。',
            title1:' 什么，您还不知道明水礼盒，今年过年不收礼，收礼只收明水礼盒，OUT了吧，赶紧买起礼盒送亲朋，送好友吧。',
            title3:'完成交易，如有剩余库存，从新上架产品',
            pic:'../../../static/wxy1/x-cs.png'
          }
        ],
        str:1
      }
    },
    methods:{
      aa1(){
        if(this.str == 1){
          this.str = 1;
        }else{

          this.str = this.str -1;
        }
      },
      bb1(){


          this.str = this.str+1;

      },
      cc1(id){
        axios.get('/api/php/hzhxqw/jrgwc.php?type=1&id='+id + "&num=" + this.str).then(function (res) {
          console.log(res.data)


        }.bind(this))
        localStorage.xinxi = localStorage.xinxi-0 + 1;
        Bus.$emit('xx',localStorage.xinxi)

      }
    },
    mounted(){

      // var id = this.$route.query.id;
      var id = localStorage.id1;
      console.log(localStorage.id1);

      axios.get('/api/php/hzhxqw/seek.php?type=2&id='+id).then(function (res) {
        console.log(res.data)
        this.arr3 = res.data[0];


      }.bind(this))



      $("#box").on("mouseenter",function(){
        $('canvas').css({
          left: '700px' ,
          top: '270px',
        })
      });
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
      }.bind(this));
      $('.aaa').click(function () {
        $('.aaa').css({backgroundColor:'#fff'});
        $(this).css({backgroundColor:'#f4fff2'})
      });
      $('.bbb').click(function () {
        $('.bbb').css({backgroundColor:'#fff'});
        $(this).css({backgroundColor:'#f4fff2'})
      });
      $('.r2').click(function () {
        $('.yy').css({display:'none'});
        $('.ty').css({display:'block'});
      });
      $('.r1').click(function () {
        $('.yy').css({display:'block'});
        $('.ty').css({display:'none'});
      });
      var a=true;
      $('.change').click(function () {
        if (a==true){
          $('.change').attr({src:'../../../static/wxy1/x-start1.png'});
          a=false;
        }else {
          $('.change').attr({src:'../../../static/wxy1/x-strat2.png'});
          a=true;
        }
      })

    }
  }
</script>

<style scoped>
  .box1{
    width: 1280px;
    position: relative;
    top: 10px;
    margin: 0 auto;
  }
  .title{
    width: 100%;
    position: relative;
    height: 30px;
    top: 0;
    background-color: #f4f4f4;
  }
  .title span{
    position: absolute;
    top: 5px;
  }
  .big{
    width: 1280px;
    margin: auto;
    position: relative;
    top: 10px;
  }
  #fdj{
    width: 500px;
    height: 345px;
    position: relative;
    top: 10px;
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
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
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
    border: 2px solid #f08201;
  }
  .right{
    position: absolute;
    top: 0;
    left: 504px;
    width: 860px;
    height: 380px;
  }
  .right>span:nth-of-type(1){
    position: absolute;
    top: -15px;
    left: 50px;
  }
  .jia{
    position: relative;
    top: 17px;
    left: 10px;
    width: 1280px;
  }
  .jia span{
    width: 100px;
  }
  .jia>span:nth-of-type(1){
    position: absolute;
    top: 0;
    left: 50px;
    width: 60px;
    height: 20px;
    background-color: #498e3d;
    text-align: center;
  }
  .jia>span:nth-of-type(2){
    position: absolute;
    top: 0;
    left: 130px;
    width: 80px;
    height: 20px;
    background-color: #f08200;
    text-align: center;
  }
  .jia>span:nth-of-type(3){
    position: absolute;
    top: 0;
    left: 230px;
    width: 80px;
    height: 20px;
    background-color: #498e3d;
    text-align: center;
  }
  .jia>span:nth-of-type(4){
    position: absolute;
    top: 0;
    left: 320px;
    width: 60px;
    height: 20px;
    background-color: #498e3d;
    text-align: center;
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
    left: 100px;
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
  .sp{
    overflow: hidden;
  }
  .xx{
    position: absolute;
    bottom: 55px;
    left:340px;
    display: block;
    width: 100px;
    height: 25px;
    background-color: #f08200;
    text-align: center;
    line-height: 25px;
    color: #fff;
  }
  .xx1{
    left: 470px;
  }
  .last{
    position: absolute;
    position: absolute;
    bottom: 5px;
    right: 200px;
    width: 400px;
    height: 40px;
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
  .xq{
    position: relative;
    top: 60px;
    width: 1280px;
    height: 30px;
    background-color: #f4f4f4;
  }
  .r1{
    position: absolute;
    top: 5px;
    left: 10px;
  }
  .r2{
    position: absolute;
    top: 5px;
    left: 80px;
  }
  .yy{
    width: 1280px;
    height:400px;
    position: relative;
    top:65px;
    border-left: 1px solid #d4d4d4;
    border-right: 1px solid #d4d4d4;
  }
  .yy span{
    position: absolute;
    top: 10px;
    left: 10px;
    color:#f08200 ;
  }
  .yy>p:nth-of-type(1){
    position: absolute;
    top: 35px;
    left: 10px;
  }
  .yy>p:nth-of-type(2){
    position: absolute;
    top: 55px;
    left: 10px;
  }
  .yy>p:nth-of-type(3){
    position: absolute;
    top: 75px;
    left: 10px;
  }
  .yy img{
    position: absolute;
    top: 110px;
    left: 10px;
  }
  .yy1{
    width: 100%;
    height: 150px;
    position: relative;
    top: 0;
    border: 1px solid #d4d4d4;
    border-top: transparent;
  }
  .yy1>img:nth-of-type(1){
    position: absolute;
    top: 20px;
    left: 10px;
  }
  .yy1>span:nth-of-type(1){
    position: absolute;
    bottom: 10px;
    left: 10px;
  }
  .yy1>span:nth-of-type(2){
    position: absolute;
    top: 10px;
    right: 170px;
  }
  .yy1>span:nth-of-type(3){
    position: absolute;
    top: 10px;
    right: 100px;
  }
  .yy1>img:nth-of-type(2){
    position: absolute;
    top: 30px;
    left: 130px;
  }
  .yy1 p{
    position: absolute;
    top: 50px;
    left: 130px;
  }
  .ty{
    width: 1280px;
    position: relative;
    top: 65px;
    display: none;
  }
  .v1{
    position: absolute;
    top: 80px;
    left: 130px;
  }
  .vv1{
    left: 200px;
  }
  .vv2{
    left: 270px;
  }
  .vv3{
    left: 340px;
  }
</style>
