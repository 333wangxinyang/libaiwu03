<template>
    <div class="body1">
      <div class="nav1">
        <p>订单号：150319690000
          <span>下单日期：2015.04.09  18:06:06</span>
          <span>爱果果水果店</span>
          <span>订单状态:</span>
          <span>待付款</span>
        </p>
      </div>
      <div class="content">
        <div class="content1">
          <div class="content1_1" v-for="item in data">
            <img :src="item.src" height="80" width="80"/>
            <span>{{item.span}}</span>
            <span>{{item.span1}}</span>
            <span>{{item.span2}}</span>
          </div>
        </div>
        <div class="content2">
          <div class="content2_1">
            店铺合计：￥105.0 <br>
          （含运费：¥8.0）
          </div>
        </div>
        <div class="content3">
          <div class="content3_1">
            <p><router-link :to="{name:'Dingdanbianhao',params:{name:this.data}}">查看详情</router-link></p>
            <button @click="shanchu($event)">删除订单</button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Daifukuan",
        mounted(){
          var aa = document.getElementsByClassName('content1')[0];
          var bb = document.getElementsByClassName('content2')[0];
          var cc = document.getElementsByClassName('content3')[0];
          bb.style.height = aa.offsetHeight + 'px';
          cc.style.height = aa.offsetHeight + 'px';
          // bb.style.lineHeight = aa.offsetHeight + 'px';
          console.log(aa.offsetHeight)
          console.log(bb.style.height)
        },
        data(){
          return {
            data:[
              {src:'../../../static/LYLimg/pingguo.png',span:'云南昭通丑苹果',span1:'6个装',span2:'￥35.0 x 1'},
              {src:'../../../static/LYLimg/pingguo.png',span:'云南昭通丑苹果',span1:'6个装',span2:'￥35.0 x 1'},
              {src:'../../../static/LYLimg/pingguo.png',span:'云南昭通丑苹果',span1:'6个装',span2:'￥35.0 x 1'}
            ]
          }
        },
        methods:{
          shanchu(event){
            var parent = document.getElementsByClassName('body1')[0]
            console.log(parent)
            console.log(event.path[4])
            parent.remove(event.path[4])
          }
        }
    }
</script>

<style scoped>
  .body{
    margin: 0 20px;
  }
  .nav1{
    height: 50px;
    border-bottom: 1px solid #ececec;
    background-color: #f2f2f2;
  }
  .nav1>p{
    line-height: 50px;
    margin-left: 20px;
    font-size: 17px;
    color: black;
  }
  .nav1>p>span:nth-of-type(1){
    margin-left: 50px;
    color: black;
   }
  .nav1>p>span:nth-of-type(2){
    margin-left: 22px;
    color: #3e9444;
  }
  .nav1>p>span:nth-of-type(3){
    margin-left: 260px;
    color: black;
  }
  .nav1>p>span:nth-of-type(4){
    color: #f78327;
  }
  .content{
    overflow: hidden;
  }
  .content>div{
    float: left;
  }
  .content1{
    width: 700px;
    border: solid 1px #f2f2f2;
    color: #666666;
  }
  .content1>div>img{
    vertical-align: middle;
    margin: 20px;
  }
  .content1>div>span:nth-of-type(2){
    margin-left: 150px;
    color: #999999;
  }
  .content1>div>span:nth-of-type(3){
    margin-left: 108px;
  }
  .content2{
    width: 200px;
    position: relative;
    border: solid #f2f2f2 1px;
    position: relative;
  }
  .content2_1{
    width: 200px;
    height: 45px;
    text-align: center;
    color: #666666;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
  }
  .content3{
    width: 141px;
    border: solid #f2f2f2 1px;
    position: relative;
  }
  .content3_1{
    width: 141px;
    height: 65px;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    text-align: center;
  }
  .content3_1>p>a{
    color: #3e9444;
    border-bottom: solid 1px #3e9444;
  }
  .content3_1>button{
    width: 90px;
    height: 30px;
    background-color: #f78327;
    color: white;
    outline: none;
    border-radius: 5px;
    margin-top: 19px;
  }
</style>
