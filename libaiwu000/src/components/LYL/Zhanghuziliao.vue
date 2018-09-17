<template>
    <div>
      <div class="nav1">
        <p>个人资料</p>
      </div>
      <div class="body">
        <div class="body1">
          <span>当前头像:</span>
          <div class="xuantu1">
            <div class="box">
              <img class="imgshow" src="" alt=""/>
            </div>
            <div class="pox">
              <input class="filed" type="file" accept="image/*"/>
            </div>
          </div>
          <span>修改</span>
        </div>
        <div class="body2">
          <span>昵称 :</span>
          <input type="text">
        </div>
        <div class="body3">
          <span>性别 :</span>
          <input type="radio" name="aa" id="g1">
          <span><label for="g1">男</label></span>
          <input type="radio" name="aa" id="g2">
          <span><label for="g2">女</label></span>
        </div>
        <div class="body4">
          <span>生日 :</span>
          <div class="body4_1">
            <select>
              <option value="2000">2000</option>
              <option value="1999">1999</option>
              <option value="1998">1998</option>
              <option value="1997">1997</option>
              <option value="1996">1996</option>
              <option value="1995">1995</option>
            </select>
          </div>
          <span>年</span>
          <div class="body4_1">
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
          </div>
          <span>月</span>
          <div class="body4_1">
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
          </div>
          <span>日</span>
        </div>
        <div class="body5">
          <span>手机 :</span>
          <input type="text">
          <span>更换手机</span>
        </div>
        <div class="body5">
          <button>确认提交</button>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Zhanghuziliao",
        mounted(){
          $('.filed').change(function(){
            var file = $('.filed').get(0).files[0];
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload=function(e){
              console.log(e);
              $('.imgshow').get(0).src = e.target.result;
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
    margin-top: 40px;
    margin-left: 40px;
  }
  .body1{
    overflow: hidden;
  }
  .body1>span{
    float: left;
    line-height: 60px;
  }
  .body1>span:nth-of-type(2){
    margin-left: 15px;
    color: #4c9b50;
  }
  .xuantu1{
    width: 60px;
    height: 60px;
    margin-left: 5px;
    position: relative;
    float: left;
  }
  .box{
    width: 60px;
    height: 60px;
    border-radius:50%;
    overflow: hidden;
    background-image: url("../../../static/LYLimg/touxiang.png");
    background-size:100% 100%;
  }
  .box>img{
    width: 60px;
    height: 60px;
  }
  .pox{
    width: 50px;
    height: 20px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 65px;
    margin: auto;
    overflow: hidden;
  }
  .pox>input{
    outline: none;
    opacity: 0;
  }
  .body2{
    margin-top: 20px;
  }
  .body2>span{
    margin-left: 37px;
    margin-right: 10px;
  }
  .body2>input{
    height: 33px;
    width: 170px;
    text-indent: 10px;
    font-size: 18px;
    outline: none;
    background: #f4f4f4;
    border: solid 1px #d3d3d3;
  }
  .body3{
    margin-top: 20px;
  }

  .body3>span:nth-of-type(1){
    margin-left: 37px;
    margin-right: 10px;
  }
  .body3>span:nth-of-type(2){
    margin-right: 20px;
  }
  .body4{
    overflow: hidden;
    margin-top: 20px;
  }
  .body4>*{
    float: left;
    line-height: 33px;
  }
  .body4>span:nth-of-type(1){
    margin-left: 37px;
    margin-right: 10px;
  }
  .body4>span:nth-of-type(2){
    margin-left: 10px;
    margin-right: 37px;
  }
  .body4>span:nth-of-type(3){
    margin-left: 10px;
    margin-right: 37px;
  }
  .body4>span:nth-of-type(4){
    margin-left: 10px;
  }
  select{
    background-color: white;
    border: solid 1px #d3d3d3;
    border-radius: 0;
    outline: none;
    width: 100%;
    height: 33px;
    text-align: center;
    line-height: 33px;
    font-size: 16px;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    padding-left: 20px;
  }
  .body4_1:after{
    content: "";
    width: 14px;
    height: 8px;
    background: url('../../../static/LYLimg/xiasanjiao.png') no-repeat center;
    position: absolute;
    right: 15px;
    top: 35%;
    pointer-events: none;
  }
  .body4_1{
    width: 140px;
    height: 33px;
    border-radius: 5px;
    /*阴影*/
    /*box-shadow: 2px 2px 3px 2px #ccc;*/
    position: relative;
  }
  .body5{
    margin-top: 20px;
  }
  .body5>input{
    height: 33px;
    width: 170px;
    margin: 0;
    background-color: #f4f4f4;
    border: solid 1px #d3d3d3;
    outline: none;
    font-size: 18px;
    text-indent: 10px;
  }
  .body5>span:nth-of-type(1){
    margin-left: 37px;
    margin-right: 5px;
  }
  .body5>span:nth-of-type(2){
    margin-left: 25px;
    color: #3e9444;
  }
  .body5>button{
    width: 150px;
    height: 50px;
    background-color: #f78327;
    font-size: 18px;
    color: white;
    margin-left: 90px;
    margin-top: 40px;
    margin-bottom: 152px;
  }
</style>
