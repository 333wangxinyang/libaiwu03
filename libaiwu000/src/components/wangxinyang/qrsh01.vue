<template>
    <div id="qrsh">
      <p>
        收货人信息
      </p>
        <div id="qq_div1">
          <div>
            <p><span>*</span>收货人姓名：</p>
            <p><span>*</span>所在地区：</p>
            <p><span>*</span>详细地址：</p>
            <p><span>*</span>联系电话：</p>
          </div>
          <div>
            <img src="../../../static/LYLimg/xiasanjiao.png" alt="">
            <img src="../../../static/LYLimg/xiasanjiao.png" alt="">
            <img src="../../../static/LYLimg/xiasanjiao.png" alt="">
            <input type="text" placeholder="可以收货人姓名" width="330"><br>
            <select name="city">
              <option value="1" selected>郑州</option>
              <option value="2">洛阳</option>
              <option value="3" >开封</option>
              <option value="4">平顶山</option>
              <option value="5">信阳</option>
            </select>
            <select name="city">
              <option value="1">郑州</option>
              <option value="2">洛阳</option>
              <option value="3" selected>开封</option>
              <option value="4">平顶山</option>
              <option value="5">信阳</option>
            </select>
            <select name="city">
              <option value="1">郑州</option>
              <option value="2">洛阳</option>
              <option value="3" selected>开封</option>
              <option value="4">平顶山</option>
              <option value="5">信阳</option>
            </select><br>
            <input type="text" placeholder="用于接收货物的详细地址 "><br>
            <input type="text" placeholder="推荐使用手机号"><span>或固定电话： </span>
            <input type="text" placeholder="区号"><span>-</span>
            <input type="text" placeholder="电话号码">
            <p><router-link to="/qrdd">确认并设为默认地址</router-link></p>
          </div>





        </div>



    </div>
</template>

<script>
    export default {
        name: "qrsh01"
    }
</script>

<style scoped>
#qrsh{
  width: 1280px;
  margin: 0 auto;
}
#qrsh>p{
  height: 58px;
  border-bottom: 1px solid #e9e9e9;
  border-top: 1px solid #e9e9e9;
  line-height: 58px;
  font-size: 20px;
  color: #666666;
}
#qq_div1{
  overflow: hidden;
  border-bottom: 1px solid #e9e9e9;
  position: relative;
}
  #qq_div1>div:nth-of-type(1){
    width: 120px;
    height: 300px;
  }
#qq_div1>div:nth-of-type(2){
  width: 700px;
  height: 300px;
  position: absolute;
  left: 134px;
  top: 0;
}
#qq_div1>div:nth-of-type(1)>p{
  height: 35px;
  line-height: 35px;
  font-size: 18px;
  color: #414141;
  float: right;
  margin-top: 20px;
}
/**/
#qq_div1>div:nth-of-type(1)>p>span{
  color: #ef7e36;

}
#qq_div1>div:nth-of-type(2)>input,#qq_div1>div:nth-of-type(2)>select{
  height: 35px;
  line-height: 35px;
  font-size: 18px;
  color: #414141;
  text-indent: 10px;
  margin-top: 20px;
  outline: none;
}
#qq_div1>div:nth-of-type(2)>input:nth-of-type(1){
  width: 330px;

}
#qq_div1>div:nth-of-type(2)>input:nth-of-type(2){
  width: 460px;
}
#qq_div1>div:nth-of-type(2)>input:nth-of-type(3){
  width: 150px;
}
#qq_div1>div:nth-of-type(2)>input:nth-of-type(4){
  width: 50px;
}
#qq_div1>div:nth-of-type(2)>input:nth-of-type(5){
  width: 125px;
}

#qq_div1>div:nth-of-type(2)>select{
  width: 140px;
  height: 35px;
  text-indent: 15px;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  border-radius: 0;
  margin-right: 20px;
}
#qq_div1>div:nth-of-type(2)>img{
  position: absolute;

}
#qq_div1>div:nth-of-type(2)>img:nth-of-type(1){
  left: 114px;
  top: 93px;
}
#qq_div1>div:nth-of-type(2)>img:nth-of-type(2){
  left: 273px;
  top: 93px;
}
#qq_div1>div:nth-of-type(2)>img:nth-of-type(3){
  left: 435px;
  top: 93px;
}
#qq_div1>div:nth-of-type(2)>span{
  padding: 0 10px ;
  font-size: 18px;
  line-height: 35px;
}
#qq_div1>div:nth-of-type(2)>p{
  height: 40px;
  width: 260px;
  font-size: 18px;
  line-height: 40px;
  text-align: center;
  color: #FFF;
  margin-top: 20px;
  border-radius: 5px;
  background-color: #f08200;
}
#qq_div1>div:nth-of-type(2)>p>a{
  height: 40px;
  width: 260px;
  font-size: 18px;
  line-height: 40px;
  text-align: center;
  display: block;
  color: #FFF;
  margin-top: 20px;
  border-radius: 5px;
  background-color: #f08200;
}
</style>
