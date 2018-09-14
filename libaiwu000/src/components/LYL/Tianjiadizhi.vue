<template>
  <div>
    <div class="nav1">
      <p>添加新地址</p>
    </div>
    <div class="body">
      <div class="body1">
        <span>* </span>
        <span>收货人姓名：</span>
        <input type="text">
      </div>
      <div class="body2">
        <span>*</span>
        <span>所在地区:</span>
        <div class="body2_1">
          <select name="" id="">
            <option value="">北京</option>
          </select>
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Tianjiadizhi"
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
    height: 567px;
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
    box-shadow: 2px 2px 3px 2px #ccc;
    position: relative;
  }
  select{
    background-color: white;
    border: none;
    outline: none;
    width: 100%;
    height: 40px;
    line-height: 40px;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    padding-left: 60px;
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
</style>
