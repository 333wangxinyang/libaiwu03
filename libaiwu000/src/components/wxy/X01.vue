<template>
<div class="box">
  <div class="center">
    <img src="../../../static/wxy1/x-four.png" alt="">
    <img src="../../../static/wxy1/x-ycheng.png" alt="">
    <img src="../../../static/wxy1/x-bc.png" alt="">
   <p>您要查看的网址可能已被删除、名称已被更改、或者暂时不可用</p>
    <router-link to="">
    <span @click="aa" class="span1">返回上一页面</span>
    </router-link>
    <router-link to="/">
      <span class="span2">返回网站首页</span>
    </router-link>
  </div>

</div>
</template>

<script>
    export default {
        name: "X01",
      methods:{
          aa(){
            history.back();
          }
      }
    }
</script>

<style scoped>
.box{
  width: 100%;
  height: 100%;
}
  .center{
    width: 1280px;
    height: 500px;
    margin: 100px auto;
    position: relative;
  }
  .center>img:nth-of-type(1){
    width: 600px;
    height: 150px;
    margin-left: 250px;
  }
.center>img:nth-of-type(2){
  width: 150px;
  height: 150px;
  position: absolute;
  top: 0;
  left: 470px;
}
.center>img:nth-of-type(3){
  width: 800px;
  height: 50px;
  margin-left: 250px;
  position: absolute;
  top: 200px;
  left: 0;
}
  .center p{
    position: absolute;
    bottom: 150px;
    left:250px;
    display: block;
    width: 900px;
    font-size: 30px;
    color: #666;
    height: 50px;
    line-height: 50px;
  }
  .center a{
    text-decoration: none;
    color: white;
  }
  a span{
    width: 170px;
    height: 50px;
    line-height: 50px;
    display: block;
    text-align: center;
  }
  .span1{
    position: absolute;
    bottom: 100px;
    left: 400px;
    background-color: #f08200;
  }
  .span2{
    background-color: #498e3d;
    position: absolute;
    bottom: 100px;
    right: 400px;
  }
</style>
