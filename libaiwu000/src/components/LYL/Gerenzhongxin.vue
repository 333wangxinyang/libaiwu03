<template>
    <div class="content">
      <!--导航栏-->
      <div class="nav">
        <div class="nav1">
          <p>个人中心</p>
        </div>
        <div class="nav2">
          <ul>
            <li class="max"><a href="###">交易管理<span>></span></a></li>
            <li><router-link to="/wodezhanghu">我的账户</router-link></li>
            <li><router-link to="/wodedingdan">我的订单</router-link></li>
            <li><router-link to="/wodejifen">我的积分</router-link></li>
            <li><a href="###">积分订单</a></li>
            <li><a href="###">我的钱包</a></li>
            <li class="max"><a href="###">会员资料<span>></span></a></li>
            <li><router-link to="/zhanghuziliao">个人资料</router-link></li>
            <li><router-link to="/dizhiguanli">地址管理</router-link></li>
            <li><router-link to="/wodeshoucang">我的收藏</router-link></li>
            <li><router-link to="/Liulan">最近浏览</router-link></li>
            <li><router-link to="/gerenziliao">修改密码</router-link></li>
            <li class="max"><a href="###">站内信<span>></span></a></li>
            <li><router-link to="/wodexiaoxi1">我的消息</router-link></li>
            <li><router-link to="/Yjfh">意见反馈</router-link></li>
          </ul>
        </div>
      </div>
      <div class="body">
          <router-view></router-view>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Gerenzhongxin",
        data(){
          return {

          }
        },
        mounted(){
          $('.nav2 ul li a').click(function () {
            console.log($('.nav2 ul li a')[0])
            for (var i = 0;i < $('.nav2 ul li a').length;i++){
              if(this!=$('.nav2 ul li a')[0] || this!=$('.nav2 ul li a')[6] || this!=$('.nav2 ul li a')[12]){
                $('.nav2 ul li a')[0].style.color = '#666666';
                $('.nav2 ul li a')[6].style.color = '#666666';
                $('.nav2 ul li a')[12].style.color = '#666666';
              }
              $('.nav2 ul li a')[i].style.borderBottom = '0';
              $('.nav2 ul li a')[i].style.color = '#999999';
            }
            this.style.borderBottom = '#63a365 solid 1px';
            this.style.color = '#63a365'
          })
        }
    }
</script>

<style scoped>
  .content{
    width: 1280px;
    margin: auto;
    overflow: hidden;
    margin-top: 40px;
  }
  /*导航栏*/
  .nav{
    width: 170px;
    height: 625px;
    float: left;
    border: solid #ececec 1px;
  }
  .body{
    width: 1087px;
    min-height: 625px;
    float: right;
    border: solid #ececec 1px;
  }
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
  .nav2{
    height: 567px;
    overflow: hidden;
  }
  .nav2>ul{
    margin: 20px 0;
    height: 527px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .nav2>ul>li>a{
    display: inline;
    margin-left: 20px;
    font-size: 15px;
    color: #999999;
  }
  .nav2>ul>li{
    display: inline;
  }
  .nav2>ul>li>a>span{
    float: right;
    margin-right: 48px;
  }
  .nav2>ul>.max>a{
    font-size: 18px;
    color:#666666;
  }
  .nav2>ul>.max>a>span{
    font-size: 16px;
  }
</style>
