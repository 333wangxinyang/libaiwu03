<template>
    <div class="grzl">
      <div class="grzl1">
        <p>修改密码</p>
      </div>


      <div class="hdrzc">
        <div class="hdrzc2">

          <span class="hinput1">
            <input type="text" placeholder="请输入手机号" class="drzc1">
            <img src="../../../static/hzh/h02-7-w12.png" alt="">
          </span>
          <div class="hdis1 drzc11"><img src="../../../static/hzh/h02-8-w12.png" alt=""> <span>手机号码不正确,请重新输入</span></div>

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

          <span class="hinput1" id="hinput2">
          <input type="text" placeholder="验证码" class="drzc4">
          <img src="../../../static/hzh/h02-7-w12.png" alt="">
          </span>

          <span class="hcanvas1">
            <canvas id="canvas" width="80" height="35"></canvas>
            <a href="#" id="changeImg">看不清换一张</a>
          </span>

          <span class="hinput1">
            <input type="text" placeholder="手机验证码" class="h04yzm2">
            <button class="h04yzm">获取验证码</button>
          </span>


          <!--<div class="h02img2">-->
            <!--<img src="../../../static/hzh/h02-10-w16.png" alt="">-->
            <!--<span>我已阅读并同意 《礼拜五用户协议》</span>-->
          <!--</div>-->
          <!--<span class="h02span2 hzc1"><a href="###">注册</a></span>-->
          <!--<span class="h02span2 h02span3"><a href="###">登录</a></span>-->

          <span class="h04span1"><a href="###">提交</a></span>
        </div>
      </div>


      <div class="h04div5">
        <div>
        <img src="../../../static/hzh/h04-1-w42.png" alt="">
        <p>恭喜您修改成功</p>
        </div>
      </div>

    </div>
</template>

<script>
    export default {
        name: "Gerenziliao",
        data(){
          return {
            obj:[],
          }
        },
        mounted(){
          var obj = [];
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
          //var f = v => v;等同于下面函数

          //var f = function(v) {
          // return v;
          //};
          //箭头函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
          //写法 函数名 = 参数 => 执行函数体
          document.getElementById("changeImg").onclick = e => {
            e.preventDefault();
            drawPic();
            this.obj = obj;
            console.log(this.obj)
          };

          drawPic();
          this.obj = obj;
          console.log(this.obj)
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
            var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789';

           obj = [];
            for(var i=0; i<4; i++){
              var txt = str[randomNum(0,str.length)];
              obj.push(txt)
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
            // console.log(this.obj)
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
          }

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

          // 注册
          $('.hzc1').click(function () {
            var phone1 = document.querySelector('.drzc1').value
            var password1 = document.querySelector('.drzc3').value
            if (ha == true && hb == true && hc == true){
              axios.get('/api/php/hzhxqw/drzc2.PHP?type=1&phone='+phone1+'&password='+password1).then((response) => {
              // axios.get('/api/php/hzhxqw/drzc2.php?type=1&phone='+phone1+'&password='+password1).then((response) => {
                console.log(response.data);
                if(response.data==0){
                  alert('注册成功');
                }else{
                  alert('该账号已存在');
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
          // 修改密码
          $('.h04span1').click(function () {
            var phone1 = document.querySelector('.drzc1').value
            var password1 = document.querySelector('.drzc2').value
            if (ha == true && hb == true && hc == true){
              axios.get('/api/PHP/hzhxqw/drzc2.php?type=3&phone='+phone1+'&password='+password1).then((response) => {
              // axios.get('/api/php/hzhxqw/drzc2.php?type=3&phone='+phone1+'&password='+password1).then((response) => {
                console.log(response.data);
                if(response.data==0){
                  alert('该账户不存在');
                }if(response.data==1){
                  // alert('密码修改成功')
                  $('.h04div5').fadeIn(1500);
                  $('.h04div5').fadeOut(2000);
                }
              });
            }else {
              alert('信息输入有误,请重新输入');
            }
          })



        },
        methods:{
          panduan(){
            var input = document.querySelectorAll('.grzl2_1 div input')
            console.log(input)
            var str = '';
            for (var i = 0;i < this.obj.length;i++){
              str+= this.obj[i];
            }
            console.log(str)
            var val = input[3].value.split('');
            console.log(val+'11111')
            for (var i = 0;i < val.length;i++){
              if (val[i] == 'a'){
                val[i] = 'A'
              }
              if (val[i] == 'b'){
                val[i] = 'B'
              }
              if (val[i] == 'c'){
                val[i] = 'C'
              }
              if (val[i] == 'd'){
                val[i] = 'D'
              }
              if (val[i] == 'e'){
                val[i] = 'E'
              }
              if (val[i] == 'f'){
                val[i] = 'F'
              }
              if (val[i] == 'g'){
                val[i] = 'G'
              }
              if (val[i] == 'h'){
                val[i] = 'H'
              }
              if (val[i] == 'j'){
                val[i] = 'J'
              }
              if (val[i] == 'k'){
                val[i] = 'K'
              }
              if (val[i] == 'l'){
                val[i] = 'L'
              }
              if (val[i] == 'm'){
                val[i] = 'M'
              }
              if (val[i] == 'n'){
                val[i] = 'N'
              }
              if (val[i] == 'o'){
                val[i] = 'O'
              }
              if (val[i] == 'p'){
                val[i] = 'P'
              }
              if (val[i] == 'q'){
                val[i] = 'Q'
              }
              if (val[i] == 'r'){
                val[i] = 'R'
              }
              if (val[i] == 's'){
                val[i] = 'S'
              }
              if (val[i] == 't'){
                val[i] = 'T'
              }
              if (val[i] == 'u'){
                val[i] = 'U'
              }
              if (val[i] == 'v'){
                val[i] = 'V'
              }
              if (val[i] == 'w'){
                val[i] = 'W'
              }
              if (val[i] == 'x'){
                val[i] = 'X'
              }
              if (val[i] == 'y'){
                val[i] = 'Y'
              }
              if (val[i] == 'z'){
                val[i] = 'Z'
              }
            }
            var guolv = '';
            for (var i = 0;i < val.length;i++){
              guolv += val[i]
            }
            console.log(guolv)

            var bth = document.querySelectorAll('.shoujihao>input')[0].value
            var mima = document.querySelectorAll('.mima>input')[0].value
            var mima1 = document.querySelectorAll('.mima>input')[1].value
            var yzm = document.querySelectorAll('.sjyanzhengma>input')[0].value
            console.log(bth)
            if (bth.length < 11){
              alert('手机号格式不正确')
            }else if(mima.length < 6){
              alert('密码不能小于6位');
            }else if (mima != mima1){
              alert('密码不相同');
            }else if (guolv != str){
              alert('验证码错误')
            }else if(yzm.length < 6){
              alert('手机验证码错误')
            }else {
              $('.chenggong').animate({
                opacity:'1',
                top:'70px',
              })
            }
          },
          hqyzm(){
            var yzm = document.querySelectorAll('.sjyanzhengma>input')[0]
            var a = '';
            for (var i = 0;i < 6;i++){
              a+= Math.floor(Math.random()*10);
            }
            yzm.value = a;
            console.log(a)
          }
        }
    }
</script>

<style scoped>
    .grzl1{
      height: 57px;
      border-bottom: 1px solid #ececec;
    }
    .grzl1>p{
      line-height: 57px;
      margin-left: 20px;
      font-size: 17px;
      color: #666666;
    }
    .grzl2{
      height: 528px;
      margin: 40px 0 0 40px;
      position: relative;
    }
    .grzl2_1>div>input{
      height: 42px;
      width: 307px;
      font-size: 15px;
      background-color: #f9f9f9;
      border: solid #d3d3d3 1px;
      margin-bottom: 30px;
      text-indent: 13px;

    }
    .grzl2_1>div>input::-webkit-input-placeholder{
      color: #999999;
    }
    .grzl2_1>div:nth-of-type(4)>input{
      width: 113px;
    }
    .yanzhengma>canvas{
      vertical-align: middle;
      width: 80px;
      height: 38px;
      margin-left: 10px;
    }
    .yanzhengma>a{
      font-size: 13px;
      color: #f78327;
    }
    .sjyanzhengma{
      position: relative;
    }
    .sjyanzhengma>button{
      padding: 6px 12px;
      background-color: #3d8e43;
      color: white;
      position: absolute;
      left: 216px;
      top: 5.5px;
      outline: none;
    }
    .bangding>button{
      padding: 12px 27px;
      background-color: #f78327;
      color: white;
      border-radius: 5px;
    }
    .chenggong{
      position: absolute;
      top: 50px;
      right: 100px;
      opacity: 0;
    }








    .hdrzc{
      width: 388px;
      height: 498px;
      background-color:white;
      position: relative;
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
      border: 1px solid #d3d3d3;
      text-indent: 15px;
      font-size: 18px;
      background-color:#f9f9f9;
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
      top:225px;
    }
    .hcanvas1>a{
      color:rgb(77,156,80);
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
    .h02img2{
      margin-top: 15px;
      margin-bottom: 15px;
    }
    .h02span2{
      display: inline-block;
      width: 135px;
      height: 46px;
      line-height: 46px;
      text-align: center;
      background-color:rgb(247,131,39);
      border-radius: 10px;
      font-size:25px;
    }
    .h02span2>a{
      color:white;
    }
    .h02span3{
      float: right;
      background-color:rgb(61,142,67);
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
    .h04div5{
      width: 455px;
      height: 185px;
      background-color:rgb(217,217,217);
      position: absolute;
      left: 700px;
      top: 450px;
      border-radius: 20px;
      display: none;
    }
    .h04div5>div{
      width: 230px;
      height: 50px;
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      margin: auto;
    }
    .h04div5>div>p{
      color: rgb(247,131,39);
      font-size: 24px;
      position: absolute;
      right: 0;
      top: 7px;
    }
</style>
