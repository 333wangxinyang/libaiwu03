<template>
    <div id="navigation">
      <div id="n_div1">
        <a href="###"  @click="celan">全部分类</a>
        <router-link @click.native="aa($event)"  to="/shouye01" :class="mm==1&&'pitchOn'" aa="1"  >首页</router-link>
        <router-link @click.native="aa($event)"  to="/tongcheng"  :class="mm==2&&'pitchOn'" aa="2">同城</router-link>
        <router-link @click.native="aa($event)" to="/libaiwu" :class="mm==3&&'pitchOn'" aa="3">礼拜五</router-link>
        <router-link @click.native="aa($event)" to="/jifen" :class="mm==4&&'pitchOn'" aa="4">积分商城</router-link>
        <router-link @click.native="aa($event)" to="/daohang" :class="mm==5&&'pitchOn'" aa="5">导航+</router-link>

        <span ></span>
        <span></span>
      </div>
      <div id="n_div2">
        <ul>
          <li><a href="###">新鲜水果</a></li>
          <li><a href="###">生猛海鲜</a></li>
          <li><a href="###">肉类家禽</a></li>
          <li><a href="###">蛋奶素食</a></li>
          <li><a href="###">田园蔬菜</a></li>
          <li><a href="###">零食酒水</a></li>
          <li><a href="###">粮油杂货</a></li>
          <li><a href="###">礼品卡劵</a></li>
          <li><a href="###">家具用品</a></li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
        name: "navigation",
      data(){
        return{
          mm:1,
        }
      },
      methods:{
        celan(){
          $("#n_div2").slideToggle(1000);

          $("#n_div1>span").toggleClass('rotate');

        },
        aa(e){
          this.mm = $(e.target).attr("aa");
        }


      },
      mounted(){


      },
    }
</script>

<style scoped>
  #n_div1>.rotate{
    transform:rotateZ(90deg)
  }
#navigation{
  width: 1280px;
  margin: 0 auto;
  height: 50px;
  position: relative;
}
  #n_div1>a{
    display: block;
    float: left;
    width:153px ;
    height: 20px;
    line-height: 20px;
    text-align:center ;
    color: #323333;
    font-size:18px ;
    padding: 15px 0;

  }
#n_div1>span{
  display: block;
  position: absolute;
  width:10px ;
  height: 20px;
  left: 120px;
  top: 15px;
  background: url("../../../static/wangxinyang/shouye02.png") 0px -940px no-repeat;
  transition:1s  all;
  transform-origin:50% 50%;
  transform:rotateZ(0deg)
}
#n_div1>.pitchOn{
    background-color: #f08200;
    color: #fff;
  }
#n_div2{
  position: absolute;
  left: 0;
  top: 50px;
  z-index: 10;
  background: #fff;
}
#n_div2 li{
  display: block;
  width:123px ;
  height: 26px;
  line-height: 26px;
  text-align:center ;
  color: #737373;
  font-size:18px ;
  border-bottom: 1px solid #efeeec;
  padding: 14px 0;
  padding-left: 30px;

}
#n_div2{
  display: none;
}
#n_div2 li>a {
  color: #737373;
  font-size: 16px;
}
#n_div2 li:nth-of-type(1){
  border-top: 4px solid #efeeec;
  background: url("../../../static/wangxinyang/shouye02.png") 0px -160px content-box no-repeat content-box;
}
#n_div2 li:nth-of-type(2){
  background: url("../../../static/wangxinyang/shouye02.png") 0px -190px content-box no-repeat content-box;
}
#n_div2 li:nth-of-type(3){
  background: url("../../../static/wangxinyang/shouye02.png") 0px -220px content-box no-repeat content-box;
}
#n_div2 li:nth-of-type(4){
  background: url("../../../static/wangxinyang/shouye02.png") 0px -250px content-box no-repeat content-box;
}
#n_div2 li:nth-of-type(5){
  background: url("../../../static/wangxinyang/shouye02.png") 0px -280px content-box no-repeat content-box;
}
#n_div2 li:nth-of-type(6){
  background: url("../../../static/wangxinyang/shouye02.png") 0px -970px content-box no-repeat content-box;
}
#n_div2 li:nth-of-type(7){
  background: url("../../../static/wangxinyang/shouye02.png") 0px -310px content-box no-repeat content-box;
}
#n_div2 li:nth-of-type(8){
  background: url("../../../static/wangxinyang/shouye02.png") 0px -340px content-box no-repeat content-box;
}
#n_div2 li:nth-of-type(9){
  /*padding-bottom:  3px solid #efeeec !important;*/
  border-bottom: 2px solid #efeeec;
  background: url("../../../static/wangxinyang/shouye02.png") 0px -370px content-box no-repeat content-box;
}
</style>
