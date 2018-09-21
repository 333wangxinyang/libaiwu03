<template>
    <div class="content">
      <div class="title">
        <p>换绑手机</p>
      </div>
      <div class="nav1">
          <div>
            <img src="../../../static/LYLimg/juxing11.png" height="42" width="236" />
            <span>1.验证原手机号</span>
          </div>
          <div>
            <img src="../../../static/LYLimg/juxing2.png" height="42" width="236"/>
            <span>2.验证新手机号</span>
          </div>
          <div>
            <img src="../../../static/LYLimg/juxing3.png" height="42" width="236"/>
            <span>3.换绑成功</span>
          </div>
      </div>


      <div class="box">
        <div class="sj">
          <input type="text" placeholder="请输入原手机号" maxlength="11" id="input">
        </div>
        <div class="yanzhengma">
          <input type="text" placeholder="验证码" maxlength="4">
          <canvas id="canvas" width="120" height="38"></canvas>
          <a href="#" id="changeImg">看不清，换一张</a>
        </div>
        <div class="password">
          <input type="password" placeholder="输入密码验证身份" maxlength="20">
        </div>
        <button @click="yanzheng">提交验证</button>
      </div>

      <div class="img">
        <img src="../../../static/LYLimg/xiugaicg.png" height="42" width="233"/>
      </div>

      <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "Huanbangshouji",
      data(){
        return {
          obj:'',
          a:1,
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
            obj.push(txt);
            ctx.fillStyle = randomColor(50,160);  //随机生成字体颜色
            ctx.font = randomNum(25,30)+'px SimHei'; //随机生成字体大小
            var x = 5+i*30;
            var y = randomNum(40,40);
            var deg = randomNum(-15, 15);
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
      },
      methods:{
        yanzheng(){
          var aa = '';
          console.log(this.obj)
          for (var i = 0;i < this.obj.length;i++){
            aa+=this.obj[i];
          }
          console.log(aa)
          var input = document.querySelectorAll('.yanzhengma input')[0]
          var val = input.value.split('');
          console.log(val)
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
            if (val[i] == 'i'){
              val[i] = 'I'
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
          console.log(guolv);

          var sj = document.querySelectorAll('.sj input')[0].value;
          var password = document.querySelectorAll('.password input')[0].value;
          console.log(password);
          if (!(/^1[34578]\d{9}$/.test(sj))){
            alert('手机号格式不正确')
          }else if (guolv != aa){
            alert('验证码错误')
          }else if (password.length < 6){
            alert('密码长度小于六位')
          }else if (this.a == 1) {
            $('#input').val('')
            $('.yanzhengma>input').val('')
            $('.password>input').val('')
            $('#input').attr('placeholder','请输入新手机号');
            $('.nav1>div:eq(0)>img').attr('src','../../../static/LYLimg/juxing1.png');
            $('.nav1>div:eq(1)>img').attr('src','../../../static/LYLimg/juxing22.png');
            $('.nav1>div:eq(2)>img').attr('src','../../../static/LYLimg/juxing3.png');
            $('.nav1>div:eq(0)>span').css('color','black')
            $('.nav1>div:eq(1)>span').css('color','white')
            this.a = 2;

          }else if (this.a == 2){
            $('.img').css('display','block')
            $('.box').css('display','none')
            $('.nav1>div:eq(0)>img').attr('src','../../../static/LYLimg/juxing1.png');
            $('.nav1>div:eq(1)>img').attr('src','../../../static/LYLimg/juxing2.png');
            $('.nav1>div:eq(2)>img').attr('src','../../../static/LYLimg/juxing33.png');
            $('.nav1>div:eq(1)>span').css('color','black')
            $('.nav1>div:eq(2)>span').css('color','white')
          }
        }
      },
    }
</script>

<style scoped>
  .title{
    height: 57px;
    border-bottom: 1px solid #ececec;
  }
  .title>p{
    line-height: 57px;
    margin-left: 20px;
    font-size: 17px;
    color: #666666;
  }
  .nav1{
    overflow: hidden;
    margin-top: 40px;
    margin-left: 40px;
  }
  .nav1>div:nth-of-type(n+2){
    margin-left: -10px;
  }
  .nav1>div{
    float: left;
    position: relative;
  }
  .nav1>div>span{
    height: 25px;
    text-align: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
  .nav1>div:nth-of-type(1)>span{
    color: white;
  }
  .nav1>div:nth-of-type(n+2)>span{
    color: black;
  }


  .box{
    margin-top: 40px;
    margin-left:40px;
  }
  .box input{
    border: solid 1px #d4d4d4;
    background-color: #f9f9f9;
    font-size: 16px;
    text-indent: 10px;
    outline: none;
  }
  .box input::-webkit-input-placeholder{
    color: #999999;
  }
  .sj>input{
    height: 43px;
    width: 305px;
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
  .yanzhengma>input{
    height: 43px;
    width: 113px;
    margin-top:30px;
  }
  .password>input{
    height: 43px;
    width: 305px;
    margin-top:30px;
  }
  .box>button{
    width: 150px;
    height: 50px;
    background-color: #f78327;
    color: white;
    margin-top: 40px;
    font-size: 18px;
    outline: none;
    margin-bottom: 154px;
  }
  .content{
    position: relative;
    margin-top: 0;
    overflow: hidden;
  }
  .img{
    height: 480px;
    display: none;
  }
  .img>img{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 200px;
    margin: auto;
  }
</style>
