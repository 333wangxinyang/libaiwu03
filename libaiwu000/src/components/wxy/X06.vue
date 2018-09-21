<template>
<div class="box">
  <div class="title">
    <router-link to="/">
    <img src="../../../static/wxy1/logo1.png" alt="">
    </router-link>
    <a href="###">
      <span :class="mm==1&&'bb'" >我的购物车  > </span>
    </a>
    <a href="###">
      <span :class="mm==2&&'bb'" >确认订单信息  > </span>
    </a>
    <a href="###">
      <span :class="mm==3&&'bb'" >订单提交成功</span>
    </a>

  </div>
  <router-view/>
</div>



</template>

<script>
  import X07 from '@/components/wxy/X07'
  import X08 from '@/components/wxy/X08'
  import Bus from '../../assets/bus'
    export default {
        name: "X06",
      data(){
        return{
          mm : 1,
        }
      },
      components:{
          x07:'X07',
        x08:'X08',

      },
      mounted(){
        // localStorage.mm = 1;

        Bus.$on('mm',function (n) {
          this.mm = n ;
        }.bind(this))



      }

    }
</script>

<style scoped>
.box{
  width: 1280px;
  position: relative;
  top: 0;
  margin: 0 auto;
}
  .title{
    width: 1280px;
    height: 133px;
    position: relative;
    top: 0;
    border-bottom: 1px solid #e4e4e4;
  }
  .title img{
    width: 360px;
    height: 60px;
    position: absolute;
    top: 40px;
    left: 200px;
  }
  .title a{
    color: #333333;
  }
  .title span{
    position: absolute;
    top: 70px;
  }
.title>a:nth-of-type(2)>span{
  right: 380px!important;
  /*color: #f08200;*/
}
.title>a:nth-of-type(3)>span{
  right: 250px !important;
}
.title>a:nth-of-type(4)>span{
  right: 130px;
}

.title .bb{
    color: #f08200 !important;
  }
</style>
