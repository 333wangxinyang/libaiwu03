<template>
  <div>
    <div class="nav1">
      <p>添加新地址</p>
    </div>
    <div class="body">
      <div class="body1">
        <span>*&nbsp</span>
        <span>收货人姓名 ：</span>
        <input type="text">
      </div>
      <div class="body2">
        <span>*&nbsp</span>
        <span>所在地区 :</span>
        <div class="body2_1">
          <select name="" class="select1">
            <option value="北京">北京</option>
            <option value="河南">河南</option>
            <option value="上海">上海</option>
            <option value="广州">广州</option>
            <option value="深圳">深圳</option>
          </select>
        </div>
        <div class="body2_1">
          <select name="" class="select2">
            <option value="北京">北京</option>
            <option value="河南">河南</option>
            <option value="上海">上海</option>
            <option value="广州">广州</option>
            <option value="深圳">深圳</option>
          </select>
        </div>
        <div class="body2_1">
          <select name="" class="select3">
            <option value="北京">北京</option>
            <option value="河南">河南</option>
            <option value="上海">上海</option>
            <option value="广州">广州</option>
            <option value="深圳">深圳</option>
          </select>
        </div>
      </div>
      <div class="body3">
        <span>*</span>
        <span>详细地址:</span>
        <input type="text">
      </div>
      <div class="body4">
        <span>*</span>
        <span>联系电话:</span>
        <input type="text" maxlength="11" onkeyup="value=value.replace(/[^\d]/g,'')">
        <span>或固定电话：</span>
        <input type="text" maxlength="4" onkeyup="value=value.replace(/[^\d]/g,'')">
        <span>-</span>
        <input type="text" maxlength="6" onkeyup="value=value.replace(/[^\d]/g,'')">
      </div>
      <div class="body5">
        <input type="radio">
        <span>设为常用地址</span><br/>
        <button  @click="tijiao">保存</button>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "Tianjiadizhi",
      data(){
        return {
          obj:[]
        }
      },
      methods:{
        tijiao(){
          var input1 = document.querySelectorAll('.body1 input')[0].value
          var input2 = document.querySelectorAll('.select1')[0]
          var input2_1 = input2.selectedIndex;
          var input2_2 = input2.options[input2_1].value;
          var input3 = document.querySelectorAll('.select2')[0]
          var input3_1 = input3.selectedIndex;
          var input3_2 = input3.options[input3_1].value;
          var input4 = document.querySelectorAll('.select3')[0]
          var input4_1 = input4.selectedIndex;
          var input4_2 = input4.options[input4_1].value;
          var input5 = document.querySelectorAll('.body3 input')[0].value
          var input6 = document.querySelectorAll('.body4 input')[0].value
          var input7 = document.querySelectorAll('.body4 input')[1].value
          var input8 = document.querySelectorAll('.body4 input')[2].value
          console.log(input1)
          var a = [];
          var dizhi = input2_2 + input3_2 + input4_2;
          console.log(dizhi)
          a.push(input1,dizhi,input5,input6,input7,input8);
          this.obj = a;
          console.log(this.obj)
            if (this.obj[0] == '' || this.obj[1] == '' || this.obj[2] == '' || this.obj[3] == '' || this.obj[4] == '' || this.obj[5] == '' || this.obj[6] == ''){
                alert('请补全信息')
            } else {
              this.$router.push({path:'/dizhiguanli',query:{obj:this.obj}});
            }
        }
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
    height: 568px;
    overflow: hidden;
  }
  .body1{
    margin-left: 32px;
    margin-top: 40px;
  }
  .body1>span:nth-of-type(1){
    color: #f78327;
  }
  .body1>input{
    width: 330px;
    height: 35px;
  }
  .body2_1{
    width: 140px;
    height: 35px;
    border-radius: 5px;
    /*阴影*/
    /*box-shadow: 2px 2px 3px 2px #ccc;*/
    position: relative;
  }
  select{
    background-color: white;
    border: solid 1px #d3d3d3;
    border-radius: 0;
    outline: none;
    width: 100%;
    height: 40px;
    text-align: center;
    line-height: 40px;
    font-size: 16px;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    padding-left: 20px;
  }
  .body2_1:after{
    content: "";
    width: 14px;
    height: 8px;
    background: url('../../../static/LYLimg/xiasanjiao.png') no-repeat center;
    position: absolute;
    right: 20px;
    top: 45%;
    pointer-events: none;
  }
  .body2{
    margin-left: 48px;
    margin-top: 20px;
    line-height: 40px;
    overflow: hidden;
  }
  .body2>div{
    margin-left: 20px;
  }
  .body2>*{
    float: left;
  }
  .body2>span:nth-of-type(1){
    color: #f78327;
  }
  .body3{
    margin-left: 48px;
    margin-top: 20px;
    line-height: 40px;
  }
  .body3>span:nth-of-type(1){
    color: #f78327;
  }
  .body3>input{
    width: 455px;
    height: 35px;
    margin-left: 20px;
  }
  .body4{
    margin-left: 48px;
    margin-top: 20px;
    line-height: 40px;
  }
  .body4>span:nth-of-type(1){
    color: #f78327;
  }
  .body4>input{
    height: 40px;
  }
  .body4>input:nth-of-type(1){
    margin-left: 20px;
    width: 150px;
  }
  .body4>input:nth-of-type(2){
    width: 48px;
  }
  .body4>input:nth-of-type(3){
    width: 122px;
  }
  .body input{
    font-size: 16px;
    text-indent: 10px;
  }
  .body5>input{
    margin-left: 160px;
    margin-top: 20px;
  }
  .body5>button{
    outline: none;
    margin-left: 160px;
    margin-top: 20px;
    width: 150px;
    line-height: 50px;
    background-color: #f78327;
    font-size: 20px;
    color: white;
    border-radius: 5px;
  }
</style>
