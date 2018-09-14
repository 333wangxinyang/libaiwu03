<template>
    <div class="grzl">
      <div class="grzl1">
        <p>绑定手机</p>
      </div>
      <div class="grzl2">
        <div class="grzl2_1">
          <div>
            <input type="text" onkeyup="value=value.replace(/[^\d]/g,'')" placeholder="请输入手机号" maxlength="11">
          </div>
          <div>
            <input type="password" placeholder="请输入密码（6-20位号码字符" maxlength="20" >
          </div>
          <div>
            <input type="password" placeholder="请再次输入密码确认" maxlength="20">
          </div>
          <div class="yanzhengma">
            <input type="text" placeholder="验证码" maxlength="4">
            <canvas id="canvas" width="120" height="40"></canvas>
            <a href="#" id="changeImg">看不清，换一张</a>
          </div>
          <div class="sjyanzhengma">
            <input type="text" placeholder="手机验证码" maxlength="6">
            <button>获取验证码</button>
          </div>
          <div class="bangding">
            <button @click="panduan()">点击绑定</button>
          </div>
        </div>
        <div class="chenggong">
          <img src="../../../static/LYLimg/bdcg.png" height="184" width="454"/>
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
        },
        methods:{
          panduan(){
            var input = document.getElementsByTagName('input')
            var str = '';
            for (var i = 0;i < this.obj.length;i++){
              str+= this.obj[i];
            }
            console.log(str)
            var val = input[3].value.split('');
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
            if (input[0].value == '' || input[1].value == '' || input[2].value == '' || input[3].value == '' || input[4].value == ''){
              alert('请补全信息');
            }else if (guolv != str) {
              alert('验证码错误')
            }else if (input[1].value != input[2].value){
              alert('密码不相同');
            }else {
              $('.chenggong').animate({
                opacity:'1',
                top:'70px',
              })
            }



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
      height: 568px;
      margin: 40px;
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
      background-color: #e8e8e8;
      color: #a9a9a9;
      position: absolute;
      left: 216px;
      top: 5.5px;
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
      right: 50px;
      opacity: 0;
    }
</style>
