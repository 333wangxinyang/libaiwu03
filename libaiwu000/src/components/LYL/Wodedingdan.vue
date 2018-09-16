<template>
    <div>
      <div class="nav1">
        <p>我的订单</p>
      </div>
      <div class="nav">
        <ul class="ul">
          <li><a href="###">全部</a></li>
          <li><router-link to="/daifukuan">待付款</router-link></li>
          <li><a href="###">待发货</a></li>
          <li><a href="###">待收货</a></li>
          <li><a href="###">待评价</a></li>
          <li><a href="###">退款/售后</a> </li>
          <li><a href="###">已完成/关闭</a></li>
          <li><a href="###">订单回收站</a></li>
        </ul>
      </div>
      <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "Wodedingdan",
        mounted(){
          $('.ul li a').click(function () {
            for (var i = 0;i < $('.ul li a').length;i++){
              $('.ul li a')[i].style.color = '#666666';
              $('.ul li a')[i].style.borderBottom = '0';
            }
            $(this)[0].style.color = '#3e9444';
            $(this)[0].style.borderBottom = 'solid 2px #3e9444 '
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
  .nav>ul{
    width: 87.1%;
    display: flex;
    justify-content: space-around;
    margin: 20px;
  }
  .nav>ul>li:nth-of-type(1){
    padding: 5px 15px;
    background-color: #f78327;
    margin-right: 16px;

  }
  .nav>ul>li:nth-of-type(1)>a{
    color:white;
  }
  .nav>ul>li:nth-of-type(n+2){
    margin-top: 9px;
    height: 18px;
    line-height: 18px;
    padding: 0 30px;
    border-left: 2px solid #999999;
  }
  .nav>ul>li:nth-of-type(n+2)>a{
    color: #666666;
  }
  .nav>ul>li:nth-of-type(8){
    border-left: 0;
  }
  .nav>ul>li:nth-of-type(8)>a{
    color: #3e9444;
  }
  .nav>ul>li{
    padding: 0 30px;
  }
</style>
