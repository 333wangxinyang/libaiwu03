<template>
    <div class="box">
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


      <div class="box1">
        <div class="nav2">
          <p>爱果果水果店
            <span>规格</span>
            <span>单价</span>
            <span>数量</span>
            <span>金额</span>
          </p>
        </div>
        <div class="body">
          <div class="body1_1" v-for="item in data">
            <img :src="item.src" height="80" width="80"/>
            <span>{{item.span}}</span>
            <span>{{item.span1}}</span>
            <span>{{item.span2}}{{item.span3}}</span>
            <span>{{item.span5}}</span>
            <span>{{item.span5*item.span3}}</span>
          </div>
          <div class="body2_1">
            <p>实付金额 : <span>¥</span><span>{{zj}}</span></p>
            <p>(含运费8元)</p>
          </div>
          <div class="btn">
            <input type="submit" value="取消订单">
            <input type="submit" value="立即支付">
          </div>
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
            zj:0
          }
        },
        mounted(){
          this.data = this.$route.params.name
          console.log(this.data)
          if (this.data == undefined){
            var aa = document.getElementsByClassName('box1')[0];
            aa.style.display = 'none';
          }else {
            var zj = 0;
            for (var i = 0;i < this.data.length;i++){
              zj+=this.data[i].span5 * this.data[i].span3
            }
            this.zj = zj - 8;
            console.log(this.zj)
          }

        }
    }
</script>

<style scoped>
  .box{
    width: 100%;
  }
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
  .nav1>p>span:nth-of-type(2)>a{
    color: white;
  }
  .nav1>p>span:nth-of-type(3)>a{
    color: white;
  }
  .nav1>p>span:nth-of-type(2){
    margin-left:230px;
    background-color: #3d8e43;
    padding: 5px 10px;
    border-radius: 4px;
  }
  .nav1>p>span:nth-of-type(3){
    margin-left: 50px;
    background-color: #999999;
    padding: 5px 10px;
    border-radius: 4px;
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



  .box1{
    margin: 0 20px;
    margin-top:20px ;
  }
  .nav2{
    height: 50px;
    border-bottom: 1px solid #ececec;
    background-color: #f2f2f2;
  }
  .nav2>p{
    line-height: 50px;
    margin-left: 20px;
    font-size: 17px;
    color: black;
  }
  .nav2>p>span:nth-of-type(1){
    margin-left: 275px;
    color: black;
  }
  .nav2>p>span:nth-of-type(2){
    margin-left: 130px;
  }
  .nav2>p>span:nth-of-type(3){
    margin-left: 160px;
    color: black;
  }
  .nav2>p>span:nth-of-type(4){
    margin-left: 100px;
  }
  .body{
    overflow: hidden;
  }
  .body>div{
    float: left;
  }
  .body1_1{
    width: 100%;
    border: solid #e9e9e9 1px;
    box-sizing: border-box;
  }
  .body1_1>img{
    vertical-align: middle;
    margin: 20px;
  }
  .body1_1>span:nth-of-type(2){
    margin-left: 150px;
    color: #999999;
  }
  .body1_1>span:nth-of-type(3){
    margin-left: 125px;
    color: #999999;
  }
  .body1_1>span:nth-of-type(4){
    margin-left: 175px;
    color: #999999;
  }
  .body1_1>span:nth-of-type(5){
    margin-left: 120px;
    color: #999999;
  }
  .body2_1{
    width: 100%;
  }
  .body2_1>p:nth-of-type(1){
    width: 100%;
    text-align: right;
    color: #666666;
    margin: 40px 0 0 0;
  }
  .body2_1>p:nth-of-type(2){
    width: 100%;
    text-align: right;
    color: #666666;
    margin: 0 0 40px 0;
  }
  .body2_1>p>span{
    font-size: 20px;
    color: red;
  }
  .btn{
    width: 100%;
  }
  .btn>input:nth-of-type(2){
    background-color: #999999;
    margin-right: 40px;
  }
  .btn>input:nth-of-type(1){
    background-color: #f78327;
  }
  .btn>input{
    -webkit-appearance: button;
    float: right;
    width: 150px;
    height: 50px;
    outline: none;
    font-size: 18px;
    color: white;
    border-radius: 5px;
    margin-bottom: 40px;
  }
</style>
