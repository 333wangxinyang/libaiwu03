<template>
    <div>
      <div class="nav1">
        <p>订单评价</p>
      </div>
      <div>
        <div class="body">
          <div class="body_1">
            <a href="###"><img src="static/LYLimg/hongcheng.png" height="260" width="260"/></a>
            <p>珍享 南非进口红心葡萄柚 西柚柚子</p>
          </div>
          <div class="body_2">
            <div class="body_3" id="aa">
              <span>商品评分</span>
              <a href="###"><img src="static/LYLimg/wuxing.png"/></a>
              <a href="###"><img src="static/LYLimg/wuxing.png"/></a>
              <a href="###"><img src="static/LYLimg/wuxing.png"/></a>
              <a href="###"><img src="static/LYLimg/wuxing.png"/></a>
              <a href="###"><img src="static/LYLimg/wuxing.png"/></a>
            </div>
            <span>商品详情</span>
            <textarea placeholder="商品评价，最少10个字，最多50个字"></textarea>
            <div class="body_4">
              <span>晒图片</span>
              <a href="###"><img src="static/LYLimg/shaitu.png"/></a>
              <a href="###"><img src="static/LYLimg/shaitu.png"/></a>
              <a href="###"><img src="static/LYLimg/shaitu.png"/></a>
              <a href="###"><img src="static/LYLimg/shaitu.png"/></a>
            </div>

            <div class="xuantu">
              <div class="xuantu1">
                <div class="box">
                  <img class="imgshow" src="" alt=""/>
                </div>
                <div class="pox">
                  <input class="filed" type="file" accept="image/*"/>
                </div>
              </div>
              <div class="xuantu1">
                <div class="box">
                  <img class="imgshow1" src="" alt=""/>
                </div>
                <div class="pox">
                  <input class="filed1" type="file" accept="image/*"/>
                </div>
              </div>
              <div class="xuantu1">
                <div class="box">
                  <img class="imgshow2" src="" alt=""/>
                </div>
                <div class="pox">
                  <input class="filed2" type="file" accept="image/*"/>
                </div>
              </div>
              <div class="xuantu1">
                <div class="box">
                  <img class="imgshow3" src="" alt=""/>
                </div>
                <div class="pox">
                  <input class="filed3" type="file" accept="image/*"/>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div class="body">
          <div class="body_1">
            <a href="###"><img src="static/LYLimg/huangcheng.png" height="260" width="260"/></a>
            <p>珍享 南非进口红心葡萄柚 西柚柚子</p>
          </div>
          <div class="body_2">
            <div class="body_3" id="bb">
              <span>商品评分</span>
              <a href="###"><img src="static/LYLimg/wuxing.png"/></a>
              <a href="###"><img src="static/LYLimg/wuxing.png"/></a>
              <a href="###"><img src="static/LYLimg/wuxing.png"/></a>
              <a href="###"><img src="static/LYLimg/wuxing.png"/></a>
              <a href="###"><img src="static/LYLimg/wuxing.png"/></a>
            </div>
            <span>商品详情</span>
            <textarea placeholder="商品评价，最少10个字，最多50个字"></textarea>
            <div class="body_4">
              <span>晒图片</span>
              <a href="###"><img src="static/LYLimg/shaitu.png"/></a>
              <a href="###"><img src="static/LYLimg/shaitu.png"/></a>
              <a href="###"><img src="static/LYLimg/shaitu.png"/></a>
              <a href="###"><img src="static/LYLimg/shaitu.png"/></a>
            </div>

            <div class="xuantu">
              <div class="xuantu1">
                <div class="box">
                  <img class="imgshow4" src="" alt=""/>
                </div>
                <div class="pox">
                  <input class="filed4" type="file" accept="image/*"/>
                </div>
              </div>
              <div class="xuantu1">
                <div class="box">
                  <img class="imgshow5" src="" alt=""/>
                </div>
                <div class="pox">
                  <input class="filed5" type="file" accept="image/*"/>
                </div>
              </div>
              <div class="xuantu1">
                <div class="box">
                  <img class="imgshow6" src="" alt=""/>
                </div>
                <div class="pox">
                  <input class="filed6" type="file" accept="image/*"/>
                </div>
              </div>
              <div class="xuantu1">
                <div class="box">
                  <img class="imgshow7" src="" alt=""/>
                </div>
                <div class="pox">
                  <input class="filed7" type="file" accept="image/*"/>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div class="body_5">
          <div class="body_3" id="cc">
            <span>服务态度</span>
            <img src="static/LYLimg/wuxing.png" alt="">
            <img src="static/LYLimg/wuxing.png" alt="">
            <img src="static/LYLimg/wuxing.png" alt="">
            <img src="static/LYLimg/wuxing.png" alt="">
            <img src="static/LYLimg/wuxing.png" alt="">
          </div>
          <div class="body_3" id="dd">
            <span>描述相符</span>
            <img src="static/LYLimg/wuxing.png" alt="">
            <img src="static/LYLimg/wuxing.png" alt="">
            <img src="static/LYLimg/wuxing.png" alt="">
            <img src="static/LYLimg/wuxing.png" alt="">
            <img src="static/LYLimg/wuxing.png" alt="">
          </div>
        </div>
        <div class="body_6">
            <router-link to="/pingjiachenggong"><button @click="submit()">提交评价</button></router-link>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Wodedingdan",
        components:{

        },
      methods:{
        submit(){

        }
      },
      mounted(){
        $('#aa img').click(function () {
          $('#aa img').attr('src','static/LYLimg/wuxing.png')
          for (var i = 0;i < $('#aa img').length;i++){
            if (this == $('#aa img')[i]){
              $('#aa img').eq(i).attr('src','static/LYLimg/wuxing1.png')
              if (i - 1 >= 0){
                $('#aa img').eq(i-1).attr('src','static/LYLimg/wuxing1.png')
              }
              if (i - 2 >= 0){
                $('#aa img').eq(i-2).attr('src','static/LYLimg/wuxing1.png')
              }
              if (i - 3 >= 0){
                $('#aa img').eq(i-3).attr('src','static/LYLimg/wuxing1.png')
              }
              if (i - 4 >= 0){
                $('#aa img').eq(i-4).attr('src','static/LYLimg/wuxing1.png')
              }
            }
          }
        })
        $('#bb img').click(function () {
          $('#bb img').attr('src','static/LYLimg/wuxing.png')
          for (var i = 0;i < $('#bb img').length;i++){
            if (this == $('#bb img')[i]){
              $('#bb img').eq(i).attr('src','static/LYLimg/wuxing1.png')
              if (i - 1 >= 0){
                $('#bb img').eq(i-1).attr('src','static/LYLimg/wuxing1.png')
              }
              if (i - 2 >= 0){
                $('#bb img').eq(i-2).attr('src','static/LYLimg/wuxing1.png')
              }
              if (i - 3 >= 0){
                $('#bb img').eq(i-3).attr('src','static/LYLimg/wuxing1.png')
              }
              if (i - 4 >= 0){
                $('#bb img').eq(i-4).attr('src','static/LYLimg/wuxing1.png')
              }
            }
          }
        })
        $('#cc img').click(function () {
          $('#cc img').attr('src','static/LYLimg/wuxing.png')
          for (var i = 0;i < $('#cc img').length;i++){
            if (this == $('#cc img')[i]){
              $('#cc img').eq(i).attr('src','static/LYLimg/wuxing1.png')
              if (i - 1 >= 0){
                $('#cc img').eq(i-1).attr('src','static/LYLimg/wuxing1.png')
              }
              if (i - 2 >= 0){
                $('#cc img').eq(i-2).attr('src','static/LYLimg/wuxing1.png')
              }
              if (i - 3 >= 0){
                $('#cc img').eq(i-3).attr('src','static/LYLimg/wuxing1.png')
              }
              if (i - 4 >= 0){
                $('#cc img').eq(i-4).attr('src','static/LYLimg/wuxing1.png')
              }
            }
          }
        })
        $('#dd img').click(function () {
          $('#dd img').attr('src','static/LYLimg/wuxing.png')
          for (var i = 0;i < $('#dd img').length;i++){
            if (this == $('#dd img')[i]){
              $('#dd img').eq(i).attr('src','static/LYLimg/wuxing1.png')
              if (i - 1 >= 0){
                $('#dd img').eq(i-1).attr('src','static/LYLimg/wuxing1.png')
              }
              if (i - 2 >= 0){
                $('#dd img').eq(i-2).attr('src','static/LYLimg/wuxing1.png')
              }
              if (i - 3 >= 0){
                $('#dd img').eq(i-3).attr('src','static/LYLimg/wuxing1.png')
              }
              if (i - 4 >= 0){
                $('#dd img').eq(i-4).attr('src','static/LYLimg/wuxing1.png')
              }
            }
          }
        })
        $('.filed').change(function(){
          var file = $('.filed').get(0).files[0];
          var reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload=function(e){
            console.log(e);
            $('.imgshow').get(0).src = e.target.result;
          }
        })
        $('.filed1').change(function(){
          var file = $('.filed1').get(0).files[0];
          var reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload=function(e){
            console.log(e);
            $('.imgshow1').get(0).src = e.target.result;
          }
        })
        $('.filed2').change(function(){
          var file = $('.filed2').get(0).files[0];
          var reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload=function(e){
            console.log(e);
            $('.imgshow2').get(0).src = e.target.result;
          }
        })
        $('.filed3').change(function(){
          //获取input file的files文件数组;
          //$('#filed')获取的是jQuery对象，.get(0)转为原生对象;
          //这边默认只能选一个，但是存放形式仍然是数组，所以取第一个元素使用[0];
          var file = $('.filed3').get(0).files[0];
          //创建用来读取此文件的对象
          var reader = new FileReader();
          //使用该对象读取file文件
          reader.readAsDataURL(file);
          //读取文件成功后执行的方法函数
          reader.onload=function(e){
            //读取成功后返回的一个参数e，整个的一个进度事件
            console.log(e);
            //选择所要显示图片的img，要赋值给img的src就是e中target下result里面
            //的base64编码格式的地址
            $('.imgshow3').get(0).src = e.target.result;
          }
        })
        $('.filed4').change(function(){
          var file = $('.filed4').get(0).files[0];
          var reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload=function(e){
            console.log(e);
            $('.imgshow4').get(0).src = e.target.result;
          }
        })
        $('.filed5').change(function(){
          var file = $('.filed5').get(0).files[0];
          var reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload=function(e){
            console.log(e);
            $('.imgshow5').get(0).src = e.target.result;
          }
        })
        $('.filed6').change(function(){
          var file = $('.filed6').get(0).files[0];
          var reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload=function(e){
            console.log(e);
            $('.imgshow6').get(0).src = e.target.result;
          }
        })
        $('.filed7').change(function(){
          var file = $('.filed7').get(0).files[0];
          var reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload=function(e){
            console.log(e);
            $('.imgshow7').get(0).src = e.target.result;
          }
        })
        $('.filed8').change(function(){
          var file = $('.filed8').get(0).files[0];
          var reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload=function(e){
            console.log(e);
            $('.imgshow8').get(0).src = e.target.result;
          }
        })
      }
    }
</script>

<style scoped>
  .nav1{
    height: 57px;
    border-bottom: 1px solid #ececec;
  }
  .nav1>p{
    line-height: 57px;
    margin-left: 20px;
    font-size: 17px;
    color: #666666;
  }
  .body{
    margin:26px 20px 0;
    border-bottom: #dedede dashed 1px;
    overflow: hidden;
  }
  .body_1{
    float: left;
  }
  .body_1>p{
    color: #666666;
    margin-left:5px ;
    margin-top: 20px;
  }
  .body_2{
    float: left;
    margin-left: 80px;
    position: relative;
  }
  .body_3 img{
    vertical-align: middle;
    margin-bottom: 5px;
  }
  .body_3>span:nth-of-type(1){
    margin-right: 13px;
  }
  .body_2>span:nth-of-type(1){
    float: left;
    margin-top: 30px;
  }
  textarea{
    width: 585px;
    height: 135px;
    margin-top: 32px;
    margin-left: 20px;
    outline: none;
    text-indent: 10px;
    padding-top: 10px;
    font-size: 15px;
    resize:none;
  }
  .body_4>span{
    float: left;
    margin: 30px 20px 0 16px;
  }
  .body_4 img{
    margin-top: 30px;
    margin-bottom: 50px;
  }
  .body_5{
    margin-top: 54px;
    padding: 0 250px;
    display:flex;
    justify-content: space-around;
  }
  .body_6>a>button{
    display: block;
    width: 150px;
    height: 50px;
    margin: auto;
    background-color: #f78327;
    color: white;
    font-size: 20px;
    margin-top: 50px;
    margin-bottom: 40px;
  }
  #aa img,#bb img,#cc img,#dd img{
    width: 20px;
  }
  .xuantu{
    position: absolute;
    bottom: 54px;
    left: 79px;
    display: flex;
  }
  .xuantu1{
    width: 61px;
    height: 61px;
    margin-left: 5px;
  }
  .box{
    width: 59px;
    height: 59px;
    position: absolute;
    top: 0;
  }
  .box>img{
    width: 100%;
    height: 100%;
  }
  .pox{
    width: 60px;
    height: 24px;
    position: absolute;
    top: 0;
  }
  .pox>input{
    width: 60px;
    height: 60px;
    outline: none;
    position: absolute;
    border: 0;
    top: 0;
    opacity: 0;
  }

</style>
