<template>
    <div>
      <div class="title">
        <p>换绑手机</p>
      </div>
      <div class="nav">
        <div>
          <img src="../../../static/LYLimg/juxing1.png" height="42" width="236"/>
          <span><router-link to="/yuanshouji">1.验证原手机号</router-link></span>
        </div>
        <div>
          <img src="../../../static/LYLimg/juxing2.png" height="42" width="236"/>
          <span><router-link to="/xinshouji">2.验证新手机号</router-link></span>
        </div>
        <div>
          <img src="../../../static/LYLimg/juxing3.png" height="42" width="236"/>
          <span><router-link to="/huanbangchenggong">3.换绑成功</router-link></span>
        </div>
      </div>
      <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "Huanbangshouji"
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
  .nav{
    overflow: hidden;
    margin-top: 40px;
    margin-left: 40px;
  }
  .nav>div:nth-of-type(n+2){
    margin-left: -10px;
  }
  .nav>div{
    float: left;
    position: relative;
  }
  .nav>div>span{
    height: 25px;
    text-align: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
  .nav>div:nth-of-type(1)>span>a{
    color: white;
  }
  .nav>div:nth-of-type(n+2)>span>a{
    color: black;
  }
</style>
