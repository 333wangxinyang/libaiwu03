<template>
    <div id="head01">



      <div id="h_div1">
        <span>所在城市:</span>
        <div class="ct f_l" style="padding: 0">

          <div class="ct_now" id="ctname">北京朝阳区</div>

          <div class="ct_swich" id="qiehuan"><span class="ct_nav"></span></div>

          <div class="ct_link">

            <div class="ct_show"><span id="closect" class="f_r" title="关闭窗口">X</span><span class="f_l">城市列表</span></div>

            <a class="ct_links" href="javascript:">全国</a><a class="ct_links" href="javascript:">上海</a><a class="ct_links" href="javascript:">杭州</a><a class="ct_links" href="javascript:">北京</a><a class="ct_links" href="javascript:">深圳</a><a class="ct_links" href="javascript:">广州</a><a class="ct_links" href="javascript:">东莞</a><a class="ct_links" href="javascript:">汕头</a><a class="ct_links" href="javascript:">珠海</a><a class="ct_links" href="javascript:">佛山</a><a class="ct_links" href="javascript:">福州</a><a class="ct_links" href="javascript:">南京</a><a class="ct_links" href="javascript:">苏州</a><a class="ct_links" href="javascript:">武汉</a><span class="ct_links"></span><span class="ct_links"></span><span class="ct_links"></span><span class="ct_links"></span>

          </div>

        </div>

        <div id="h_div2">
          <a href="###">400-800-8820</a>
          <a href="###">我是商家</a>
          <a href="###">我的消息</a>
          <a href="###">我的订单</a>

          <span  :style=" state=='0'?'display:none' :'display:inline-block'">您好 ,<a href="###">{{state}}</a><a id="tc" href="###">退出</a></span>
          <a :style=" state!='0'?'display:none' :'display:inline-block'" id="dl" class="headclick">注册登录</a>
        </div>
      </div>


      <div id="headkong">
      </div>

      <div class="headkong2">
      <div class="hzh03">
        <div class="hzh04">


          <div class="hzh05">
            <span>登录</span>
            <span>
            <a href="">手机验证登录</a>
            <img src="../../../static/hzh/h03-1-w12h16.png" alt="">
          </span>
          </div>

          <span class="hzh06">
            <input type="text" placeholder="请输入手机号" class="hzh07">
            <img src="../../../static/hzh/h02-7-w12.png" alt="">
          </span>
          <div class="hdis11 hzh77"><img src="../../../static/hzh/h02-8-w12.png" alt=""> <span>手机号码不正确,请重新输入</span></div>

          <span class="hzh06">
            <input type="password" placeholder="密码" class="drzcB">
            <img src="../../../static/hzh/h02-7-w12.png" alt="">
          </span>
          <div class="hdis11 drzcBB"><img src="../../../static/hzh/h02-8-w12.png" alt=""> <span>密码长度不符合标准</span></div>

          <span class="hzh06" id="hinput22">
          <input type="text" placeholder="验证码" class="drzcD">
          <img src="../../../static/hzh/h02-7-w12.png" alt="">
          </span>

          <span class="hcanvasA">
            <canvas id="canvas" width="80" height="35"></canvas>
            <a href="#" id="changeImg">看不清换一张</a>
          </span>

          <div class="h03divB">
            <span class="h03clickA">
              <img src="../../../static/hzh/h02-9-w16.png" alt="">
              <p>自动登录</p>
            </span>
            <span><router-link to="/H04wjmm">忘记密码?</router-link></span>
          </div>


          <span class="h02spanB hzcA"><router-link to="">登录</router-link></span>
          <span class="h02spanB h02spanC"><router-link to="/H02drzc">会员注册</router-link></span>

          <span class="h03spanA">提示 : 未注册用户将直接注册成为礼拜五用户</span>

          <div class="h03divC">
            -------- 用合作网站登录 -------
          </div>


          <div class="h03divD">
            <img src="../../../static/hzh/h03-2-w40.png" alt="">
            <img src="../../../static/hzh/h03-3-w40.png" alt="">
          </div>

        </div>
      </div>
      </div>

    </div>
</template>

<script>
  import Bus from '../../assets/bus'
    export default {
        name: "head01",
data(){
  return{
    state:0,
  }
},
      methods:{
        getValueByKey(key) {
          //获取所有键值对
          var strArr = document.cookie.split(";");
          for (var i = 0; i < strArr.length; i++) {
            var kvArr = strArr[i].split("=");
            if (kvArr[0].trim() == key) {
              return kvArr[1];
            }
          }
        }
      },


      mounted() {

        Bus.$on('aa', function (n) {
          this.state = n;
        }.bind(this))


        this.state = this.getValueByKey("state")
        console.log(this.getValueByKey("state"))
        $('#tc').click(function () {

          document.cookie = "state=0";
          this.state = this.getValueByKey("state")
          Bus.$emit('bb', this.state)

          window.location.href = "/#/shouye01/"

        }.bind(this))





        $(document).ready(function () {

          $(function () {

            $('.ct_nav').click(function () {

              $(".ct_link").attr('class', 'ct_link ct_hovers');

            });

            $('#closect').click(function () {

              $(".ct_link").attr('class', 'ct_link');

            });

            $('.ct_links').click(function () {

              $(".ct_link").attr('class', 'ct_link');

              $("#ctname").html($(this).html());

            });

          });

        });


        //  验证码

        /**生成一个随机数**/
        function randomNum(min, max) {
          return Math.floor(Math.random() * (max - min) + min);
        }

        /**生成一个随机色**/
        function randomColor(min, max) {
          var r = randomNum(min, max);
          var g = randomNum(min, max);
          var b = randomNum(min, max);
          return "rgb(" + r + "," + g + "," + b + ")";
        }

        drawPic();
        document.getElementById("changeImg").onclick = function (e) {
          e.preventDefault();
          drawPic();
        }

        /**绘制验证码图片**/
        function drawPic() {
          var canvas = document.getElementById("canvas");
          var width = canvas.width;
          var height = canvas.height;
          var ctx = canvas.getContext('2d');
          ctx.textBaseline = 'bottom';

          /**绘制背景色**/
          ctx.fillStyle = randomColor(180, 240); //颜色若太深可能导致看不清
          ctx.fillRect(0, 0, width, height);
          /**绘制文字**/
          var str = 'ABCEFGHJKLMNPQRSTWXY123456789';
          for (var i = 0; i < 4; i++) {
            var txt = str[randomNum(0, str.length)];
            ctx.fillStyle = randomColor(50, 160);  //随机生成字体颜色
            ctx.font = randomNum(15, 40) + 'px SimHei'; //随机生成字体大小
            var x = 10 + i * 25;
            var y = randomNum(25, 45);
            var deg = randomNum(-45, 45);
            //修改坐标原点和旋转角度
            ctx.translate(x, y);
            ctx.rotate(deg * Math.PI / 180);
            ctx.fillText(txt, 0, 0);
            //恢复坐标原点和旋转角度
            ctx.rotate(-deg * Math.PI / 180);
            ctx.translate(-x, -y);
          }
          /**绘制干扰线**/
          for (var i = 0; i < 8; i++) {
            ctx.strokeStyle = randomColor(40, 180);
            ctx.beginPath();
            ctx.moveTo(randomNum(0, width), randomNum(0, height));
            ctx.lineTo(randomNum(0, width), randomNum(0, height));
            ctx.stroke();
          }
          /**绘制干扰点**/
          for (var i = 0; i < 100; i++) {
            ctx.fillStyle = randomColor(0, 255);
            ctx.beginPath();
            ctx.arc(randomNum(0, width), randomNum(0, height), 1, 0, 2 * Math.PI);
            ctx.fill();
          }
        };

        //  注册input js效果
        var ha = false;
        var hb = false;
        var h03a = true;

        // 手机号
        $('.hzh07').blur(function () {
          var phone = document.querySelector('.hzh07').value
          if (!(/^1[34578]\d{9}$/.test(phone))) {
            $('.hzh77').css({opacity: 1})
            $('.hzh07').next().css({display: "none"})
            console.log(phone)
            ha = false
          } else {
            $('.hzh77').css({opacity: 0})
            $('.hzh07').next().css({display: "block"})
            ha = true
          }
        })

        //  密码
        $('.drzcB').blur(function () {
          var password1 = document.querySelector('.drzcB').value
          if (password1.length < 6 || password1.length > 20) {
            $('.drzcBB').css({opacity: 1})
            $('.drzcB').next().css({display: "none"})
            hb = false
            console.log(password1)
          } else {
            $('.drzcBB').css({opacity: 0})
            $('.drzcB').next().css({display: "block"})
            hb = true
          }
        })

        // 登录
        $('.hzcA').click(function () {
          var phone1 = document.querySelector('.hzh07').value
          var password1 = document.querySelector('.drzcB').value
          if (ha == true && hb == true) {
            axios.get('/api/php/hzhxqw/drzc2.php?type=2&phone=' + phone1 + '').then((response) => {
              console.log(response.data);
              console.log(response.data[0].id);
              if (response.data == 0) {
                alert('该账户不存在');
              }
              if (response.data[0].password == password1) {

                // alert('登录成功')
                $('#headkong').css({display: "none"})
                $('.headkong2').fadeOut(1000);
                // window.location.href = "/#/shouye01/"
                // document.cookie = "state=" + response.data[0].id;



                document.cookie = "state=" +response.data[0].id;

                Bus.$emit('cc',response.data[0].id)

                alert('登录成功')
                window.location.href = "/#/shouye01/"

              } else {
                alert('密码错误');
              }
            });
          } else {
            alert('信息输入有误,请重新输入');
          }
        })


        //  自动登录换图
        $('.h03clickA').click(function () {
          if (h03a == true) {
            $('.h03clickA>img').attr({src: "../../../static/hzh/h02-10-w16.png"})
            h03a = false
          } else {
            $('.h03clickA>img').attr({src: "../../../static/hzh/h02-9-w16.png"})
            h03a = true
          }
        })


        //  点击登录显示遮罩
        $('.headclick').click(function () {
          $('#headkong').css({display: "block"})
          $('.headkong2').fadeIn(1500);
        })
        $('.headkong2').dblclick(function () {
          $('#headkong').css({display: "none"})
          $('.headkong2').fadeOut(1000);
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
    /*display: inline;*/
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
  /*overflow: hidden;*/
}
#h_div1{
  width: 1280px;
  margin: 0 auto;
  height: 16px;
  /*display: inline-block;*/
  /*background-color: #fff;*/
}
#h_div1>span{
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #6f6f6f;
  float: left;
  /*display: block;*/
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
    padding:0  10px  ;
  }
  #h_div2>span>a:nth-of-type(1){
    color: #4b943d;
    /*padding:0  5px  ;*/
  }
/*###########*/
.f_l {float:left;}

.f_r {float:right;}

.ct {height:60px;padding-left:10px;text-align:center;}

.ct_now {width:60px;padding-top:20px;font-size:16px;letter-spacing:3px;font-weight:bold;color:#f16800;}

.ct_box {text-align:center;}

.ct_box span {vertical-align:bottom;}

.ct_nav {text-align:center;height:18px;line-height:18px;color:#333;cursor:pointer;overflow:hidden;display:inline-block;}

.ct_hover {color:#f25000;height:18px;line-height:18px;overflow:hidden;}

.ct_link {background:#FFFFFF;border:#f16800 2px solid;width:305px;display:none;z-index:9999;}

.ct_hovers {display:block;position:absolute;}

.ct_links {width:60px;margin-right:1px;height:30px;line-height:30px;font-size:13px;text-align:center;background:#f6f6f6;vertical-align:top;margin-bottom:1px;display:inline-block;}

.ct_show {background:#ccc;height:18px;line-height:18px;padding:5px;cursor:pointer;}



  .hzh03{
    width: 388px;
    height: 498px;
    background-color:white;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    z-index: 99;
    display: inline-block;
    border: 2px solid #999;
  }
  .hzh04{
    width: 312px;
    height: 444px;
    margin: auto;
    margin-top: 30px;
  }
  .hzh06>input{
    width: 100%;
    height: 40px;
    line-height: 40px;
    border: 1px solid #999;
    text-indent: 15px;
    font-size: 20px;
    background-color:rgb(242,242,242);
  }
  .hzh06>input::-webkit-input-placeholder{
    color:#aab2bd;
  }
  .hzh06{
    display: inline-block;
    width: 100%;
    height: 40px;
    line-height: 40px;
    position: relative;
  }
  .hzh06>img{
    position: absolute;
    right: 10px;
    top: 15px;
    display: none;
  }
  #hinput22{
    width: 112px;
    margin-bottom: 30px;
  }
  #hinput22>img{
    right: 5px;
  }
  .hdis11{
    margin-top: 5px;
    margin-bottom: 5px;
    color:red;
    font-size:14px;
    opacity: 0;
  }
  .hcanvasA{
    display: inline-block;
    width: 190px;
    height: 35px;
    line-height: 35px;
    position: absolute;
    left:170px ;
    top:231px;
  }
  .hcanvasA>a{
    color:rgb(252,192,132);
    font-size: 16px;
    position: absolute;
    left: 90px;
  }
  .hzh06>span{
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

  .h02spanB{
    display: inline-block;
    width: 135px;
    height: 46px;
    line-height: 46px;
    text-align: center;
    background-color:rgb(247,131,39);
    border-radius: 10px;
    font-size:25px;
  }
  .h02spanB>a{
    color:white;
  }
  .h02spanC{
    float: right;
    background-color:rgb(61,142,67);
  }
  .hzh05{
    position: relative;
    margin-bottom: 12px;
  }
  .hzh05>span:nth-of-type(1){
    font-size: 32px;
    color: #555;
  }
  .hzh05>span:nth-of-type(2){
    position: absolute;
    right: 0;
    bottom: 6px;
  }
  .hzh05>span:nth-of-type(2)>a{
    color: #4b943d;
    font-size: 19px;
  }
  .h03divB{
    width: 100%;
    height: 30px;
    line-height: 30px;
    position: relative;
    overflow: hidden;
    margin-top: -17px;
    margin-bottom: 10px;
  }
  .h03divB>span{
    display: inline-block;
    width: 35%;
    height: 100%;
    line-height: 30px;
    position: relative;
  }
  .h03divB>span:nth-of-type(1)>img{
    position: absolute;
    top: 7.3px;
    left: 0;
  }
  .h03divB>span:nth-of-type(1)>p{
    margin-left: 25px;
    color: #888;
    font-size: 17px;
  }
  .h03divB>span:nth-of-type(2){
    position: absolute;
    right: -28px;
    text-decoration:underline;
  }
  .h03divB>span:nth-of-type(2)>a{
    color: rgb(252,192,132);
    font-size: 18px;
  }
  .h03spanA{
    display: inline-block;
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    color: #999;
  }
  .h03divC{
    height: 30px;
    font-size: 18px;
    line-height: 30px;
    color: #777;
  }
  .h03divD{
    width: 100px;
    display: flex;
    justify-content: space-between;
    margin-left: 106px;
    margin-top: 5px;
  }
  #headkong{
    width: 100%;
    height: 100%;
    background-color:rgb(127,127,127);
    opacity: 0.3;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 88;
    display: none;
  }
  .headkong2{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 89;
    display: none;
  }
</style>
