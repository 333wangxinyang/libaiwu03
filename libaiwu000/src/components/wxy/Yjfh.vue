<template>
<div class="box">
    <span>意见反馈</span>
  <textarea class="two" placeholder="请输入您的意见将期待与您共同成长"></textarea>
  <router-link to="">
  <span class="aa">取消</span>
  </router-link>
  <router-link to="">
  <span class="aa1">确定</span>
  </router-link>
</div>
</template>

<script>
    export default {
        name: "Yjfh"
    }
</script>

<style scoped>
.box{
  width: 100%;
  height:600px;
  position: relative;
  top: 10px;
}
  .box>span:nth-of-type(1){
    padding-left: 10px;
    display: block;
    width: 100%;
    height: 30px;
    border-bottom: 1px solid  #d9d9d9;
  }
  .two{
    width: 900px;
    height: 370px;
    position: absolute;
    top: 80px;
    left: 100px;
    border: 1px solid #d9d9d9;
    outline: none;
    text-indent: 10px;
    font-size: 18px;
    padding: 10px 0;
    resize: none;
  }
  .two>p{
    position: absolute;
    top: 10px;
    left: 10px;
    color:#adadad ;
  }
  .aa{
    display: block;
    width: 100px;
    height: 30px;
    position: absolute;
    top: 500px;
    left: 360px;
    background-color: #999999;
    text-align: center;
    line-height: 30px;
    color: #ffffff;
  }
  .aa1{
    background-color: #f08200;
    right: 360px;
    display: block;
    width: 100px;
    height: 30px;
    position: absolute;
    top: 500px;
    text-align: center;
    line-height: 30px;
    color: #ffffff;
  }
</style>
