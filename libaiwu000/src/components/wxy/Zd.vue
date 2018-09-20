<template>
  <div class="box">
    <router-link to="/Wodezhanghu">
    <span class="sa">我的账户</span>
    </router-link>
    <div class="two">
      <div class="two1">
      <span>操作</span>
      <span>充值金额</span>
      <span>账户余额</span>
      <span>时间</span>
      </div>
      <div class="tw" v-for="item in arr">
        <span>{{item.title}}</span>
        <span>{{item.money}}</span>
        <span>{{item.ye}}</span>
        <span>{{item.time}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Zd",
    data(){
      return{
        arr:[
          {
          title:'充值',
            money:'+¥1000.00元',
            ye:'¥3443.00元',
            time:'2015-04-15 17:21:21'
          }, {
            title:'消费',
            money:'-¥1000.00元',
            ye:'¥3443.03元',
            time:'2015-04-15 17:21:21'
          }, {
            title:'退款',
            money:'+¥1000.00元',
            ye:'¥3443.00元',
            time:'2015-04-15 17:21:21'
          }, {
            title:'消费',
            money:'-¥1000.00元',
            ye:'¥3443.00元',
            time:'2015-04-15 17:21:21'
          }, {
            title:'充值',
            money:'+¥1000.00元',
            ye:'¥3443.00元',
            time:'2015-04-15 17:21:21'
          }, {
            title:'消费',
            money:'-¥1000.00元',
            ye:'¥3443.00元',
            time:'2015-04-15 17:21:21'
          },{
            title:'退款',
            money:'+¥1000.00元',
            ye:'¥3443.00元',
            time:'2015-04-15 17:21:21'
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .box{
    width: 100%;
    height:600px;
    position: relative;
    top: 10px;
  }
  .sa{
    padding-left: 10px;
    display: block;
    width: 100%;
    height: 30px;
    border-bottom: 1px solid  #d9d9d9;
    color: #666;
  }
  .two{
    width: 1050px;
    height: 370px;
    position: absolute;
    top: 50px;
    left:20px;
    border: 1px solid #d9d9d9;
  }
.two1{
  width: 100%;
  height: 30px;
  background-color: #f2f2f2;
  position: relative;
  top: 0;
}
  .two1 span{
    position: absolute;
    top: 6px;
  }
  .two1>span:nth-of-type(1){
    left: 50px;
  }
  .two1>span:nth-of-type(2){
    left: 250px;
  }
  .two1>span:nth-of-type(3){
    left: 550px;
  }
  .two1>span:nth-of-type(4){
    right: 150px;
  }
  .tw{
    position: relative;
    top: 0;
    width: 100%;
    height: 30px;
    border: 1px solid #d9d9d9;
    color: #666666;
  }
  .tw span{
    position: absolute;
    top: 6px;
  }
  .tw>span:nth-of-type(1){
    left: 50px;
  }
  .tw>span:nth-of-type(2){
    left: 250px;
  }
  .tw>span:nth-of-type(3){
    left: 550px;
    color: #f08200;
  }
  .tw>span:nth-of-type(4){
    right: 80px;
  }
</style>
