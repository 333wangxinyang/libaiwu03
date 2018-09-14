<template>
<div class="box">
  <div class="title">
    <span>您的当前位置：首页 > 全部商品 > 苹果 > 阿克苏</span>
  </div>
  <div class="fdj">
    <div class="preview">
      <div id="vertical" class="bigImg">
        <img src="../../../static/fangdajing/mid/3.jpg" width="400" height="400" alt="" id="midimg" />
        <div style="display:none;" id="winSelector"></div>
      </div>
      <div class="smallImg">
        <div class="scrollbutton smallImgUp disabled"></div>
        <div id="imageMenu">
          <ul>
            <li id="onlickImg"><img src="../../../static/fangdajing/small/3.jpg" width="68" height="68" alt="1"/></li>

            <li><img src="../../../static/fangdajing/small/2.jpg" width="68" height="68" alt="2"/></li>
            <li><img src="../../../static/fangdajing/small/timg (1).jpeg" width="68" height="68" alt="6"/></li>

            <li><img src="../../../static/fangdajing/small/timg.jpeg" width="68" height="68" alt="7"/></li>
          </ul>
        </div>
        <div class="scrollbutton smallImgDown"></div>
      </div>
      <div id="bigView" style="display:none;"><img width="800" height="800" alt="" src=""/></div>
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
      <span class="aa">500g</span>
      <span class="aa aa1">1000g</span>
      <span class="aa aa2">2000g</span>
      <span>请选择规则：</span>
      <span class="bb">500g</span>
      <span class="bb bb1">1000g</span>
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
</div>
</template>

<script>
    export default {
        name: "X04",
      data(){
        return {
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
      mounted(){

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

        $(document).ready(function(){

          // 图片上下滚动

          var count = $("#imageMenu li").length - 4; /* 显示 6 个 li标签内容 */

          var interval = $("#imageMenu li:first").width();

          var curIndex = 0;



          $('.scrollbutton').click(function(){

            if( $(this).hasClass('disabled') ) return false;



            if ($(this).hasClass('smallImgUp')) --curIndex;

            else ++curIndex;



            $('.scrollbutton').removeClass('disabled');

            if (curIndex == 0) $('.smallImgUp').addClass('disabled');

            if (curIndex == count-1) $('.smallImgDown').addClass('disabled');



            $("#imageMenu ul").stop(false, true).animate({"marginLeft" : -curIndex*interval + "px"}, 600);

          });

          // 解决 ie6 select框 问题

          $.fn.decorateIframe = function(options) {

            if ($.browser.msie && $.browser.version < 4) {

              var opts = $.extend({}, $.fn.decorateIframe.defaults, options);

              $(this).each(function() {

                var $myThis = $(this);

                //创建一个IFRAME

                var divIframe = $("<iframe />");

                divIframe.attr("id", opts.iframeId);

                divIframe.css("position", "absolute");

                divIframe.css("display", "none");

                divIframe.css("display", "block");

                divIframe.css("z-index", opts.iframeZIndex);

                divIframe.css("border");

                divIframe.css("top", "0");

                divIframe.css("left", "0");

                if (opts.width == 0) {

                  divIframe.css("width", $myThis.width() + parseInt($myThis.css("padding")) * 2 + "px");

                }

                if (opts.height == 0) {

                  divIframe.css("height", $myThis.height() + parseInt($myThis.css("padding")) * 2 + "px");

                }

                divIframe.css("filter", "mask(color=#fff)");

                $myThis.append(divIframe);

              });

            }

          }

          $.fn.decorateIframe.defaults = {

            iframeId: "decorateIframe1",

            iframeZIndex: -1,

            width: 0,

            height: 0

          }

          //放大镜视窗

          $("#bigView").decorateIframe();

          //点击到中图

          var midChangeHandler = null;



          $("#imageMenu li img").bind("click", function(){

            if ($(this).attr("id") != "onlickImg") {

              midChange($(this).attr("src").replace("small", "mid"));

              $("#imageMenu li").removeAttr("id");

              $(this).parent().attr("id", "onlickImg");

            }

          }).bind("mouseover", function(){

            if ($(this).attr("id") != "onlickImg") {

              window.clearTimeout(midChangeHandler);

              midChange($(this).attr("src").replace("small", "mid"));

              $(this).css({ "border": "3px solid #959595" });

            }

          }).bind("mouseout", function(){

            if($(this).attr("id") != "onlickImg"){

              $(this).removeAttr("style");

              midChangeHandler = window.setTimeout(function(){

                midChange($("#onlickImg img").attr("src").replace("small", "mid"));

              }, 1000);

            }

          });

          function midChange(src) {

            $("#midimg").attr("src", src).load(function() {

              changeViewImg();

            });

          }

          //大视窗看图

          function mouseover(e) {

            if ($("#winSelector").css("display") == "none") {

              $("#winSelector,#bigView").show();

            }

            $("#winSelector").css(fixedPosition(e));

            e.stopPropagation();

          }

          function mouseOut(e) {

            if ($("#winSelector").css("display") != "none") {

              $("#winSelector,#bigView").hide();

            }

            e.stopPropagation();

          }

          $("#midimg").mouseover(mouseover); //中图事件

          $("#midimg,#winSelector").mousemove(mouseover).mouseout(mouseOut); //选择器事件



          var $divWidth = $("#winSelector").width(); //选择器宽度

          var $divHeight = $("#winSelector").height(); //选择器高度

          var $imgWidth = $("#midimg").width(); //中图宽度

          var $imgHeight = $("#midimg").height(); //中图高度

          var $viewImgWidth = $viewImgHeight ;  //IE加载后才能得到 大图宽度 大图高度 大图视窗高度
          var  $viewImgHeight = $height ;
          var $height = null;



          function changeViewImg() {

            $("#bigView img").attr("src", $("#midimg").attr("src").replace("mid", "big"));

          }

          changeViewImg();

          $("#bigView").scrollLeft(0).scrollTop(0);

          function fixedPosition(e) {

            if (e == null) {

              return;

            }

            var $imgLeft = $("#midimg").offset().left; //中图左边距

            var $imgTop = $("#midimg").offset().top; //中图上边距

           var  X = e.pageX - $imgLeft - $divWidth / 2; //selector顶点坐标 X

            var Y = e.pageY - $imgTop - $divHeight / 2; //selector顶点坐标 Y

            var  X = X < 0 ? 0 : X;

            var  Y = Y < 0 ? 0 : Y;

            X = X + $divWidth > $imgWidth ? $imgWidth - $divWidth : X;

            Y = Y + $divHeight > $imgHeight ? $imgHeight - $divHeight : Y;



            if ($viewImgWidth == null) {

              $viewImgWidth = $("#bigView img").outerWidth();

              $viewImgHeight = $("#bigView img").height();

              if ($viewImgWidth < 200 || $viewImgHeight < 200) {

                $viewImgWidth = $viewImgHeight;
                $viewImgHeight = 600;

              }

              $height = $divHeight * $viewImgHeight / $imgHeight;

              $("#bigView").width($divWidth * $viewImgWidth / $imgWidth);

              $("#bigView").height($height);

            }

            var scrollX = X * $viewImgWidth / $imgWidth;

            var scrollY = Y * $viewImgHeight / $imgHeight;

            $("#bigView img").css({ "left": scrollX * -1, "top": scrollY * -1 });

            $("#bigView").css({ "top": -5, "left": $(".preview").offset().left + $(".preview").width() + 15 });



            return { left: X, top: Y };

          }

        });
      }
    }
</script>

<style scoped>
.box{
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
body{font:12px/18px "宋体",arial,sans-serif;color:#585858;}

body,div,p,span,form,iframe,table,td,th,input,textarea,button,label,ul,ol,li,dl,dt,dd,h1,h2,h3,h4,h5,h6{margin:0;padding:0;}

h1,h2,h3,h4,h5,h6{font-size:100%; }

ul,ol,li,dl{list-style-type:none;}

em,i,dfn,cite,strong,small{font-style:normal;}

img{border:0;}

fieldset,button,input,select,option{vertical-align:middle;font:12px/18px "宋体",arial,sans-serif;}

table{border-collapse:collapse;border-spacing:0}

textarea{resize:none}

/* color */

a:link,a:visited{color:#575757;text-decoration:none;}

a:hover{color:#ef4165;text-decoration:none;}

a:active{color:#1d7400;}
/* clearfix */
.clearfix:after{ visibility:hidden; display:block; font-size:0; content:" "; clear:both; height:0;}
*html .clearfix{ zoom:1;}
.preview{width:500px; height:500px;position: relative;
  top: 30px;
}
/* smallImg */
.smallImg{position:relative; height:52px; margin-top:25px; background-color:#F1F0F0; padding:6px 5px; width:290px; overflow:hidden;float:left;}
.scrollbutton{width:14px; height:50px; overflow:hidden; position:relative; float:left; cursor:pointer; }
/*.scrollbutton.smallImgUp , .scrollbutton.smallImgUp.disabled{background:url(../../../static/fangdajing/images/d_08.png) no-repeat;}*/

/*.scrollbutton.smallImgDown , .scrollbutton.smallImgDown.disabled{background:url(../../../static/fangdajing/images/d_09.png) no-repeat; margin-left:375px; margin-top:-50px;}*/
#imageMenu {height:50px; width:360px; overflow:hidden; margin-left:0; float:left;}
#imageMenu li {height:55px; width:55px; overflow:hidden; float:left; text-align:center;margin: 0 5px 0 5px;
  }
#imageMenu li img{width:55px; height:55px;cursor:pointer;position: absolute;
  top: 5px;}
#imageMenu li#onlickImg img, #imageMenu li:hover img{ width:50px; height:50px; border:2px solid #959595;}
/* bigImg */
.bigImg{position:relative; float:left; width:300px; height:300px; overflow:hidden;}
.bigImg #midimg{width:400px; height:400px;}
.bigImg #winSelector{width:235px; height:210px;}
#winSelector{position:absolute; cursor:crosshair; filter:alpha(opacity=15); -moz-opacity:0.15; opacity:0.15; background-color:#000; border:1px solid #fff;}
/* bigView */
#bigView{position:absolute;
  top: -80px;
  left:-100px;overflow: hidden; z-index:999;width: 600px;height: 600px}
#bigView img{position:absolute; }
  .fdj{
    width: 1280px;
    position: relative;
    top: 0;
    /*border: 1px solid #f00;*/
    margin: 0 auto;
    height: 430px;
  }
  .right{
    width: 860px;
height: 380px;
    position: absolute;
    top: 30px;
    right: 90px;
    /*border: 2px solid black;*/
  }
  .right>span:nth-of-type(1){
    position: absolute;
    top: 10px;
    left: 10px;
  }
  .tt{
width: 750px;
    height: 140px;
    border-top: 1px solid #666;
    border-bottom: 1px solid #666;
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
    color: #666;
  }
.right>span:nth-of-type(2){
  position: absolute;
  bottom: 160px;
  left: 20px;
  color: #f00;
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
  .aa{
    display: block;
    position: absolute;
    bottom: 130px;
    left: 120px;
    width: 50px;
    height: 20px;
    border: 1px solid #666;
  }
  .bb{
    display: block;
    position: absolute;
    bottom: 90px;
    left: 120px;
    width: 50px;
    height: 20px;
    border: 1px solid #666;
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
  border:1px solid #666;
  text-align: center;
}
  .cc>button{
    width: 40px;
    height: 25px;
  }
.cc>button:nth-of-type(1){
  position: absolute;
  left: 0;
}
  .cc>button:nth-of-type(2){
    position: absolute;
    right: 0;
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
.xq{
  position: relative;
  top: 0;
  width: 1280px;
height: 30px;
  background-color: #666;
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
  top: 0;
  border-left: 1px solid #666;
  border-right: 1px solid #666;
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
    border: 1px solid #666;
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
  top: 0;
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
