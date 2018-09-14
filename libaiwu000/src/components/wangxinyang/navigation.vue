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
        <ul id="n_ul01">
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
      <div id="n_div3">
        <div v-for="(aa,index) in arr1">
          <p>{{aa.name}}</p>
          <ul>
            <li v-for="(aa1,index1) in aa.arr0"><a href="###">{{aa1}}</a></li>
          </ul>
        </div>


      </div>
    </div>
</template>

<script>
    export default {
        name: "navigation",
      data(){
        return{
          mm:1,
          arr1:[{name:'应季鲜果',arr0:['草莓','草莓','草莓','草莓','草莓','草莓','草莓','草莓',]},
            {name:'应季鲜果',arr0:['草莓','草莓','草莓','草莓','草莓','草莓','草莓','草莓',]},
            {name:'应季鲜果',arr0:['草莓','草莓','草莓','草莓','草莓','草莓','草莓','草莓',]},
            {name:'应季鲜果',arr0:['草莓','草莓','草莓','草莓','草莓','草莓','草莓','草莓',]},
            {name:'应季鲜果',arr0:['草莓','草莓','草莓','草莓','草莓','草莓','草莓','草莓',]},
            {name:'应季鲜果',arr0:['草莓','草莓','草莓','草莓','草莓','草莓','草莓','草莓',]}],

        }
      },
      methods:{
        celan(){
          $("#n_div2").slideToggle(1000);

          $("#n_div1>span").toggleClass('rotate');
          $("#n_div3").slideUp(1000);
          $('#n_ul01>li>a').css({
            backgroundImage:"url('../../../static/wangxinyang/jingliang02.png')",

          })
          $('#n_ul01>li').css("background-color", "#fff")
        },
        aa(e){
          this.mm = $(e.target).attr("aa");

        }


      },
      mounted(){
$('#n_ul01>li>a').click(function () {
  $('#n_ul01>li>a').css({
    backgroundImage:"url('../../../static/wangxinyang/jingliang02.png')",

  })
  $(this).css({
    backgroundImage:"url('../../../static/wangxinyang/jingling01.png')",
  })
  $('#n_ul01>li').css("background-color", "#fff")
  $(this).parent().css("background-color", "#ebffe7")
  // $("#n_div3").slideToggle(1000);
  $("#n_div3").css('display','none');
  $("#n_div3").slideDown(1000);
  // $("#n_div3").slideUp(1000);

})


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
  #n_div3{
    position: absolute;
    left: 153px;
    top: 50px;
    z-index: 10;
    width: 460px;
    height: 500px;
    background: #ebffe7;
    display: none;
  }
#n_div3>div{
  width: 380px;
  height: 50px;
  padding:20px 40px 0 40px ;
}
  #n_div3>div>p{
    font-size: 20px;
    color: #498e3d;
    float: left;
  }
  #n_div3>div>ul{
    width: 280px;
    float: right;
  }
  #n_div3>div>ul>li{
    width: 70px;
    box-sizing:border-box;
    font-size: 18px;
    height: 18px;
    border-right: 2px solid #000000;
    line-height: 18px;
    text-align: center;
    margin-bottom: 10px;
    float: left;
  }
  #n_div3>div>ul>li>a{
   color: #3f413f;
  }
  #n_div3>div>ul>li>a:hover{
    color: #f00;
  }
#n_div2 li{
  display: block;
  width:123px ;
  height: 26px;
  line-height: 26px;
  text-align:center ;
  color: #737373;
  font-size:18px ;
  border-bottom: 1.5px solid #efeeec;
  padding: 14px 0;
  padding-left: 30px;

}
#n_div2{
  display: none;
}
#n_div2 li>a {
  color: #737373;
  font-size: 16px;
  display: block;
  width:123px ;
  height: 26px;
  line-height: 26px;
  text-align:center ;

}
  #n_ul01>li:nth-of-type(1)>a{
  /*border-top: 4px solid #efeeec;*/
  background: url("../../../static/wangxinyang/jingliang02.png") 0px 0px content-box no-repeat content-box;
}
  #n_ul01>li:nth-of-type(2)>a{
  background: url("../../../static/wangxinyang/jingliang02.png") 0px -56px content-box no-repeat content-box;
}
  #n_ul01>li:nth-of-type(3)>a{
  background: url("../../../static/wangxinyang/jingliang02.png") 0px -112px content-box no-repeat content-box;
}
  #n_ul01>li:nth-of-type(4)>a{
  background: url("../../../static/wangxinyang/jingliang02.png") 0px -168px content-box no-repeat content-box;
}
  #n_ul01>li:nth-of-type(5)>a{
  background: url("../../../static/wangxinyang/jingliang02.png") 0px -224px content-box no-repeat content-box;
}
  #n_ul01>li:nth-of-type(6)>a{
  background: url("../../../static/wangxinyang/jingliang02.png") 0px -280px content-box no-repeat content-box;
}
  #n_ul01>li:nth-of-type(7)>a{
  background: url("../../../static/wangxinyang/jingliang02.png") 0px -337px content-box no-repeat content-box;
}
  #n_ul01>li:nth-of-type(8)>a{
  background: url("../../../static/wangxinyang/jingliang02.png") 0px -393px content-box no-repeat content-box;
}
#n_ul01>li:nth-of-type(9)>a{
  /*padding-bottom:  3px solid #efeeec !important;*/
  /*border-bottom: 2px solid #efeeec;*/
  background: url("../../../static/wangxinyang/jingliang02.png") 0px -443px content-box no-repeat content-box;
}
</style>
