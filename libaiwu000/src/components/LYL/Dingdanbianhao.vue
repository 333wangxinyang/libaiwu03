<template>
    <div>
      <div class="nav1">
        <p>订单编号：15041305000006958388 <span>订单状态：<span>待付款</span></span> <span><a href="###">立即支付</a></span> <span><a href="###">取消订单</a></span>   </p>
      </div>
      <div class="content">
        <p>支付方式<span></span></p>
        <p>支付宝<span></span></p>
        <p>支付流水号<span></span></p>
        <p>下单时间<span></span></p>
        <p>支付时间<span></span></p>
        <p>发货时间<span></span></p>
        <p>收货时间<span></span></p>
        <p>取消时间<span></span></p>
        <p>申请退款时间<span></span></p>
        <p>退款原因<span></span></p>
        <p>退款时间<span></span></p>
        <p>订单备注<span></span></p>
      </div>
      <div class="content1">
        <div>
          <p>收货人信息</p>
        </div>
        <div class="content2">
          <p>收货人姓名<span></span></p>
          <p>地址<span></span></p>
          <p>联系方式<span></span></p>
        </div>
      </div>
      <div class="content1">
        <div>
          <p>发票信息</p>
        </div>
        <div class="content2">
          <p>发票抬头<span></span></p>
          <p>发票内容<span></span></p>
        </div>
      </div>
      <div class="content1">
        <div>
          <p>物流信息</p>
        </div>
        <div class="content2">
          <p>联系人<span></span></p>
          <p>联系方式<span></span></p>
        </div>
      </div>
      <div class="content1">
        <div>
          <p>卖家信息</p>
        </div>
        <div class="content2">
          <p>店铺之名<span></span></p>
          <p>真实姓名<span></span></p>
          <p>联系电话<span></span></p>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Dingdanbianhao",
        data(){
          return {
            data:[],
          }
        },
        mounted(){
          this.data = this.$route.params.name
          console.log(this.data)
        }
    }
</script>

<style scoped>
  .nav1{
    height: 57px;
    border-bottom: 1px solid #ececec;
    position: relative;
  }
  .nav1>p{
    line-height: 57px;
    margin-left: 20px;
    font-size: 17px;
    color: #666666;
  }
  .nav1>p>span:nth-of-type(1){
    margin-left: 155px;
  }
  .nav1>p>span:nth-of-type(1)>span{
    color: #f78327;
  }
  .nav1>p>span:nth-of-type(n+2)>a{
    color: white;
  }
  .nav1>p>span:nth-of-type(n+2){
    display: inline-block;
    width: 90px;
    height: 30px;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    border-radius:4px;
    line-height: 30px;
    text-align: center;
  }
  .nav1>p>span:nth-of-type(2){
    right: 150px;
    background-color: #3d8e43;
  }
  .nav1>p>span:nth-of-type(3){
    background-color: #999999;
    right: 20px;
  }
  .content{
    margin:20px ;
    padding: 20px;
    border: solid #f2f2f2 1px;
    background-color: #f9f9f9;
    line-height: 35px;
    color: #666666;
    font-size: 15px;
    margin-bottom: 0;
  }
  .content1>div:nth-of-type(1){
    color: #666666;
    font-size: 15px;
    line-height: 55px;
    text-indent: 20px;
    color: #3d8e43;
  }
  .content2{
    margin: 0 20px ;
    padding: 20px 0;
    border: solid #f2f2f2 1px;
    background-color: #f9f9f9;
    line-height: 35px;
    color: #666666;
    font-size: 15px;
    text-indent: 20px;
  }
</style>
