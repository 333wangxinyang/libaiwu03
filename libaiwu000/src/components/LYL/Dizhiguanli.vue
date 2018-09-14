<template>
    <div>
      <div class="grzl1">
        <p>地址管理</p>
        <button><router-link to="/tianjiadizhi">添加新地址</router-link></button>
      </div>
      <div class="content">
        <div>
          <img src="../../../static/LYLimg/pen.png" height="31" width="31"/>
          <span>暂无收货地址，请点击</span>
          <button><router-link to="/tianjiadizhi">添加新地址</router-link></button>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Dizhiguanli"
    }
</script>

<style scoped>
  .grzl1{
    height: 57px;
    border-bottom: 1px solid #ececec;
    position: relative;
  }
  .grzl1>p{
    display: inline;
    line-height: 57px;
    margin-left: 20px;
    font-size: 17px;
    color: #666666;
  }
  .grzl1>button{
    height: 30px;
    width: 90px;
    display: block;
    background-color: #3d8e43;
    font-size: 14px;
    color: white;
    border-radius: 5px;
    line-height: 30px;
    text-align: center;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 20px;
    margin: auto;
  }
  .content{
    height: 567px;
    position: relative;
  }
  .content>div{
    width: 334px;
    height: 50px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
  .content>div>img{
    vertical-align: middle;
  }
  .content>div>button{
    height: 30px;
    width: 90px;
    background-color: #3d8e43;
    font-size: 14px;
    color: white;
    border-radius: 5px;
    line-height: 30px;
    text-align: center;
  }
  button>a{
    color: white;
  }
  .content>div>span{
    color: #999999;
    line-height: 50px;
    margin: 0 10px;
  }
</style>
