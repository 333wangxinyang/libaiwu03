<template>
  <div>
    <div class="h02div1">
      <div class="h02div3">
        <a href="/#/shouye01/"><img src="../../../static/hzh/h02-2-w370h67.png" alt=""></a>
        <img src="../../../static/hzh/h02-3-w1h38.png" alt="">
        <p>找回密码</p>
      </div>
      <div class="h02div2">
        <img src="../../../static/hzh/h02-4-w492h223.png" alt="">
        <img src="../../../static/hzh/h02-5-w474h203.png" alt="">
        <p>礼拜五会员</p>
        <div class="h02div4">
          <span>免</span>
          <span>费</span>
          <span>注</span>
          <span>册</span>
        </div>
      </div>

      <div class="hdrzc hzh04">
        <div class="hdrzc2">

          <h1>重置密码</h1>

          <span class="hinput1">
            <input type="text" placeholder="请输入手机号" class="drzc1">
            <img src="../../../static/hzh/h02-7-w12.png" alt="">
          </span>
          <div class="hdis1 drzc11"><img src="../../../static/hzh/h02-8-w12.png" alt=""> <span>手机号码不正确,请重新输入</span></div>

          <span class="hinput1" id="hinput2">
          <input type="text" placeholder="验证码" class="drzc4">
          <img src="../../../static/hzh/h02-7-w12.png" alt="">
          </span>

          <span class="hcanvas1">
            <canvas id="canvas" width="80" height="35"></canvas>
            <a href="#" id="changeImg">看不清换一张</a>
          </span>

          <span class="hinput1">
            <input type="password" placeholder="请输入密码(6-20位号码字符)" class="drzc2">
            <img src="../../../static/hzh/h02-7-w12.png" alt="">
          </span>
          <div class="hdis1 drzc22"><img src="../../../static/hzh/h02-8-w12.png" alt=""> <span>密码长度不符合标准</span></div>

          <span class="hinput1">
          <input type="password" placeholder="请再次输入密码确认" class="drzc3">
          <img src="../../../static/hzh/h02-7-w12.png" alt="">
          </span>
          <div class="hdis1 drzc33"><img src="../../../static/hzh/h02-8-w12.png" alt=""> <span>两次输入的密码不同</span></div>



          <span class="hinput1">
            <input type="text" placeholder="手机验证码" class="h04yzm2">
            <button class="h04yzm">获取验证码</button>
          </span>

          <span class="h04span1"><a href="###">提交</a></span>

        </div>
      </div>

    </div>

    <div class="h02img1"></div>

    <div id="foot">
      <div id="foot_div1">
        <ul>
          <li>优鲜保障</li>
          <li>全程监控</li>
          <li>礼拜五特惠</li>
          <li>基地直供</li>
          <li>准时送达</li>
        </ul>
      </div>
      <div id="foot_div2">
        <div>
          <img src="../../../static/wangxinyang/logoxiao01.png" alt="">
          <img src="../../../static/wangxinyang/erweima.png" alt="">
          <img src="../../../static/wangxinyang/erweima.png" alt="">
          <span>服务时间：08：-22:00</span>
          <span>400-800-8820</span>
          <span>礼拜五官方微信</span>
          <span>礼拜五APP</span>
          <ul id="ulBox">
            <li>
              <ul>
                <li>关于礼拜五 </li>
                <li><a href="###">新用户注册 </a> </li>
                <li><a href="###">在线下单</a></li>
                <li><a href="###">支付方式</a></li>
              </ul>
            </li>
            <li>
              <ul>
                <li>关于礼拜五 </li>
                <li><a href="###">新用户注册 </a> </li>
                <li><a href="###">在线下单</a></li>
                <li><a href="###">支付方式</a></li>
              </ul>
            </li>
            <li>
              <ul>
                <li>关于礼拜五 </li>
                <li><a href="###">新用户注册 </a> </li>
                <li><a href="###">在线下单</a></li>
                <li><a href="###">支付方式</a></li>
              </ul>
            </li>
            <li>
              <ul>
                <li>关于礼拜五 </li>
                <li><a href="###">新用户注册 </a> </li>
                <li><a href="###">在线下单</a></li>
                <li><a href="###">支付方式</a></li>
              </ul>
            </li>
          </ul>

        </div>

      </div>
      <p>版权所有 © 礼拜五  保留所有权利 | 沪ICP备12042163 </p>
      <p>礼拜五  纵享品质 </p>
    </div>

  </div>
</template>

<script>
  export default {
    name: "H04wjmm",
    mounted(){

    }
    ,
    mounted(){
      $(document).ready(function(){

        $(function () {

          $('.ct_nav').click(function(){

            $(".ct_link").attr('class','ct_link ct_hovers');

          });

          $('#closect').click(function(){

            $(".ct_link").attr('class','ct_link');

          });

          $('.ct_links').click(function(){

            $(".ct_link").attr('class','ct_link');

            $("#ctname").html($(this).html());

          });

        });

      });

      //  验证码

      /**生成一个随机数**/
      function randomNum(min,max){
        return Math.floor( Math.random()*(max-min)+min);
      }
      /**生成一个随机色**/
      function randomColor(min,max){
        var r = randomNum(min,max);
        var g = randomNum(min,max);
        var b = randomNum(min,max);
        return "rgb("+r+","+g+","+b+")";
      }
      drawPic();
      document.getElementById("changeImg").onclick = function(e){
        e.preventDefault();
        drawPic();
      }

      /**绘制验证码图片**/
      function drawPic(){
        var canvas=document.getElementById("canvas");
        var width=canvas.width;
        var height=canvas.height;
        var ctx = canvas.getContext('2d');
        ctx.textBaseline = 'bottom';

        /**绘制背景色**/
        ctx.fillStyle = randomColor(180,240); //颜色若太深可能导致看不清
        ctx.fillRect(0,0,width,height);
        /**绘制文字**/
        var str = 'ABCEFGHJKLMNPQRSTWXY123456789';
        for(var i=0; i<4; i++){
          var txt = str[randomNum(0,str.length)];
          ctx.fillStyle = randomColor(50,160);  //随机生成字体颜色
          ctx.font = randomNum(15,40)+'px SimHei'; //随机生成字体大小
          var x = 10+i*25;
          var y = randomNum(25,45);
          var deg = randomNum(-45, 45);
          //修改坐标原点和旋转角度
          ctx.translate(x,y);
          ctx.rotate(deg*Math.PI/180);
          ctx.fillText(txt, 0,0);
          //恢复坐标原点和旋转角度
          ctx.rotate(-deg*Math.PI/180);
          ctx.translate(-x,-y);
        }
        /**绘制干扰线**/
        for(var i=0; i<8; i++){
          ctx.strokeStyle = randomColor(40,180);
          ctx.beginPath();
          ctx.moveTo( randomNum(0,width), randomNum(0,height) );
          ctx.lineTo( randomNum(0,width), randomNum(0,height) );
          ctx.stroke();
        }
        /**绘制干扰点**/
        for(var i=0; i<100; i++){
          ctx.fillStyle = randomColor(0,255);
          ctx.beginPath();
          ctx.arc(randomNum(0,width),randomNum(0,height), 1, 0, 2*Math.PI);
          ctx.fill();
        }
      };

      //  注册input js效果
      var ha = false;
      var hb = false;
      var hc = false;
      // 手机号
      $('.drzc1').blur(function () {
        var phone = document.querySelector('.drzc1').value
        if(!(/^1[34578]\d{9}$/.test(phone))){
          $('.drzc11').css({opacity:1})
          $('.drzc1').next().css({display:"none"})
          console.log(phone)
          ha = false
        }else {
          $('.drzc11').css({opacity:0})
          $('.drzc1').next().css({display:"block"})
          ha = true
        }
      })

      //  密码
      $('.drzc2').blur(function () {
        var password1 = document.querySelector('.drzc2').value
        if(password1.length < 6 || password1.length > 20){
          $('.drzc22').css({opacity:1})
          $('.drzc2').next().css({display:"none"})
          hb = false
          console.log(password1)
        }else {
          $('.drzc22').css({opacity:0})
          $('.drzc2').next().css({display:"block"})
          hb = true
        }
      })

      //  密码确认
      $('.drzc3').blur(function () {
        var passWord = document.querySelector('.drzc3').value
        var password2 = document.querySelector('.drzc2').value
        if (!( passWord == password2 )){
          $('.drzc33').css({opacity:1})
          $('.drzc3').next().css({display:"none"})
          hc = false
        } else {
          $('.drzc33').css({opacity:0})
          $('.drzc3').next().css({display:"block"})
          hc = true
        }
      })

      // 修改密码
      $('.h04span1').click(function () {
        var phone1 = document.querySelector('.drzc1').value
        var password1 = document.querySelector('.drzc2').value
        if (ha == true && hb == true && hc == true){
          axios.get('/api/php/hzhxqw/drzc2.php?type=3&phone='+phone1+'&password='+password1).then((response) => {
            console.log(response.data);
            if(response.data==0){
              alert('该账户不存在');
            }if(response.data==1){
              alert('密码修改成功')
            }
          });
        }else {
          alert('信息输入有误,请重新输入');
        }
      })


    //  获取验证码

      //产生随机数函数
      function RndNum(n){
        var rnd="";
        for(var i=0;i<n;i++)
          rnd+=Math.floor(Math.random()*10);
        return rnd;
      }

      $(".h04yzm").click(function () {
        var count = 10;
        $(".h04yzm").html(count);
        $(".h04yzm").css({backgroundColor:"rgb(128,128,128)"})
        $('.h04yzm2').val(RndNum(5));

        var timer = null;
        timer = setInterval(function () {
          if (count > 0) {
            count = count - 1;
            $(".h04yzm").html(count);
            $(".h04yzm").attr('disabled','disabled')
          }else {
            clearInterval(timer);
            $(".h04yzm").css({backgroundColor:'rgb(61,142,67)'})
            $(".h04yzm").html('获取验证码');
            $(".h04yzm").removeAttr('disabled');

          }
        }, 1000);
      })



    }

  }
</script>

<style scoped>

  .ct_nav{
    background: url("../../../static/wangxinyang/shouye.png") 10px 6px no-repeat;
    width: 20px;
    height: 16px;
    display: inline-block;
  }
  #h_div1 #ctname{
    margin: 0;
    padding: 0;
    color: #6f6f6f;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    float: left !important;
    width: auto;
    letter-spacing: 0px;
  }
  #qiehuan{
    float: left !important;
  }

  #head01{
    width: 100%;
    height: 16px;
    padding: 10px 0;
    background-color: #eeeeee;
    position: relative;
  }
  #h_div1{
    width: 1280px;
    margin: 0 auto;
    height: 16px;
  }
  #h_div1>span{
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #6f6f6f;
    float: left;
  }

  #h_div2{
    width: auto;
    height: 16px;
    float: right;
  }
  #h_div2>a{
    float: right;
    display: block;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #6f6f6f;
    padding:0  15px  ;
    border-left: 1px solid #6f6f6f;
  }
  #h_div2>a:nth-of-type(1){
    background: url("../../../static/wangxinyang/shouye02.png") 10px -20px no-repeat;
    padding-left:30px ;
    padding-right:0px ;
  }
  #h_div2>a:nth-of-type(5){
    border-left: 0px solid #6f6f6f;
    display: none;
    color: #4b943d;
  }
  #h_div2>span{
    float: right;
    display: block;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #6f6f6f;
  }
  #h_div2>span>a{
    color: #6f6f6f;
    padding:0 10px  ;
  }
  #h_div2>span>a:nth-of-type(1){
    color: #4b943d;
  }

  .f_l {float:left;}

  .f_r {float:right;}

  .ct {height:60px;margin-left:10px;text-align:center;}

  .ct_now {width:60px;padding-top:20px;font-size:16px;letter-spacing:3px;font-weight:bold;color:#f16800;}

  .ct_box {text-align:center;}

  .ct_box span {vertical-align:bottom;}

  .ct_nav {text-align:center;height:18px;line-height:18px;color:#333;cursor:pointer;overflow:hidden;display:inline-block;}

  .ct_hover {color:#f25000;height:18px;line-height:18px;overflow:hidden;}

  .ct_link {background:#FFFFFF;border:#f16800 2px solid;width:305px;display:none;z-index:9999;}

  .ct_hovers {display:block;position:absolute;}

  .ct_links {width:60px;margin-right:1px;height:30px;line-height:30px;font-size:13px;text-align:center;background:#f6f6f6;vertical-align:top;margin-bottom:1px;display:inline-block;}

  .ct_show {background:#ccc;height:18px;line-height:18px;padding:5px;cursor:pointer;}

  .h02img1{
    width: 100%;
    height: 500px;
    background: url(../../../static/hzh/h02-6-w1920h500.png) no-repeat;
    background-size:cover;
    position: absolute;
    top: 165px;
  }
  .h02div1{
    width: 1280px;
    height: 630px;
    margin: 0 auto;
    position: relative;
  }
  .h02div3{
    width: 100%;
    height: 130px;
    line-height: 130px;
    position: absolute;
    left: 0;
    top: 0;
    overflow: hidden;
  }
  .h02div3>a>img{
    width: 370px;
    height: 67px;
    margin-top:25px;
  }
  .h02div3>img{
    width: 1px;
    height: 38px;
    margin-left:60px;
  }
  .h02div3>p{
    position: absolute;
    left: 470px;
    top: 8px;
    color:#999;
  }
  .h02div2{
    width: 492px;
    height: 223px;
    position: absolute;
    left: 222px;
    top: 270px;
    z-index: 9;
  }
  .h02div2>img:nth-of-type(2){
    position: absolute;
    left: 9px;
    top: 10.5px;
  }
  .h02div2>p{
    font-size: 45px;
    color:white;
    position: absolute;
    left: 133.5px;
    top: 40px;
    font-weight: bold;
  }
  .h02div4{
    width: 340px;
    height: 40%;
    font-size: 45px;
    color:white;
    position: absolute;
    left: 76px;
    top: 120px;
    display: flex;
    justify-content: space-between;
    font-weight: bold;
  }
  .hdrzc{
    width: 388px;
    height: 498px;
    border-top: 1px solid #999;
    border-bottom: 1px solid #999;
    background-color:white;
    position: absolute;
    right: 0;
    bottom: 1px;
    z-index: 9;

  }
  .hdrzc2{
    width: 312px;
    height: 444px;
    margin: auto;
    margin-top: 30px;
  }
  .hinput1>input{
    width: 100%;
    height: 40px;
    line-height: 40px;
    border: 1px solid #999;
    text-indent: 15px;
    font-size: 20px;
    background-color:rgb(242,242,242);
  }
  .hinput1>input::-webkit-input-placeholder{
    color:#aab2bd;
  }
  .hinput1{
    display: inline-block;
    width: 100%;
    height: 40px;
    line-height: 40px;
    position: relative;
  }
  .hinput1>img{
    position: absolute;
    right: 10px;
    top: 15px;
    display: none;
  }
  #hinput2{
    width: 112px;
    margin-bottom: 30px;
  }
  #hinput2>img{
    right: 5px;
  }
  .hdis1{
    margin-top: 7px;
    margin-bottom: 7px;
    color:red;
    font-size:14px;
    opacity: 0;
  }
  .hcanvas1{
    display: inline-block;
    width: 260px;
    height: 35px;
    line-height: 35px;
    position: absolute;
    left:170px ;
    top:166px;
  }
  .hcanvas1>a{
    color:rgb(252,192,132);
    font-size: 16px;
    position: absolute;
    left: 90px;
  }
  .hinput1>button{
    display: inline-block;
    width: 102px;
    height: 33px;
    line-height: 33px;
    text-align: center;
    background-color:rgb(61,142,67);
    font-size: 15px;
    color:white;
    position: absolute;
    right: 5px;
    top: 4.4px;
  }

  .h02span2>a{
    color:white;
  }
 h1{
   margin-bottom: 15px;
   color:#888;
 }
  .h04span1{
    display: inline-block;
    width: 100%;
    height: 45px;
    border-radius:5px;
    background-color:rgb(247,131,39);
    font-size: 24px;
    line-height: 45px;
    text-align: center;
    margin-top: 18px;
  }
  .h04span1>a{
    color:white;
  }


  #foot>p:nth-of-type(1){
    font-size: 12px;
    width: 100%;
    text-align: center;
    color: #666666;
  }
  #foot>p:nth-of-type(2){
    font-size: 12px;
    width: 100%;
    text-align: center;
    color: #f08200;
    padding-bottom: 20px;
  }
  #foot_div1{
    width: 100% ;
    border: 1px solid #dddddd;
    /*margin-top:40px ;*/
  }
  #foot_div1>ul{
    width: 1280px;
    margin: auto;
    height: 45px;
    padding: 30px;
    display: flex;
    justify-content: space-between;
  }
  #foot_div1>ul>li{
    width: 210px;
    height: 45px;
    line-height: 45px;
    font-size: 24px;
    text-align: center;
    border-right: 1px solid #dddddd;
    padding-left: 45px;
    text-indent: 50px;
    background: url("../../../static/wangxinyang/shouye02.png") 0px -690px content-box no-repeat content-box;
    color: #333333;
  }
  #foot_div1>ul>li:nth-of-type(2){
    background: url("../../../static/wangxinyang/shouye02.png") 0px -740px content-box no-repeat content-box;
  }
  #foot_div1>ul>li:nth-of-type(3){
    background: url("../../../static/wangxinyang/shouye02.png") 0px -790px content-box no-repeat content-box;
  }
  #foot_div1>ul>li:nth-of-type(4){
    background: url("../../../static/wangxinyang/shouye02.png") 0px -840px content-box no-repeat content-box;
  }
  #foot_div1>ul>li:nth-of-type(5){
    border-right: 0px solid #dddddd;
    background: url("../../../static/wangxinyang/shouye02.png") 0px -890px content-box no-repeat content-box;
  }
  #foot_div2{
    width: 100%;
    height: 200px;
    margin: 20px 0;
    border-bottom: 1px solid  #dddddd;
  }
  #foot_div2>div{
    width: 1220px;
    padding: 0 30px;
    margin:  0 auto;
    position: relative;
  }
  #foot_div2>div>img:nth-of-type(1){
    position: absolute;
    top: 0;
  }
  #foot_div2>div>img:nth-of-type(2){
    position: absolute;
    top: 0;
    left: 440px;
  }
  #foot_div2>div>img:nth-of-type(3){
    position: absolute;
    top: 0;
    left: 610px;
  }
  #foot_div2>div>span:nth-of-type(1){
    position: absolute;
    top: 140px;
    left: 40px;
    font-size:16px ;
    color: #666666;
  }
  #foot_div2>div>span:nth-of-type(2){
    position: absolute;
    top: 140px;
    color: #f08200;
    font-size: 16px;
    line-height: 22px;
    text-indent: 20px;
    background: url("../../../static/wangxinyang/shouye02.png") 0px -18px content-box no-repeat content-box;
    left: 245px;
  }
  #foot_div2>div>span:nth-of-type(3){
    position: absolute;
    top: 160px;
    left: 450px;
    font-size:16px ;
    color: #666666;
  }
  #foot_div2>div>span:nth-of-type(4){
    position: absolute;
    top: 160px;
    left: 640px;
    font-size:16px ;
    color: #666666;
  }
  #ulBox{
    width: 536px;
    position: absolute;
    right: 0;
    top: 0;
    display: flex;
    justify-content: space-around;
  }
  #ulBox ul>li:nth-of-type(1){
    font-size:18px ;
    color: #666666;
    padding:13px 0 ;
  }
  #ulBox ul>li>a{
    font-size:14px ;
    color: #cccccc;
    line-height: 30px;
  }
</style>
