<template>
  <div class="box1">
    <div class="nav1">
      <p>订单号：150319690000
        <span>下单日期：2015.04.09  18:06:06</span>
        <span>爱果果水果店</span>
        <span>订单状态:</span>
        <span>待评价</span>
      </p>
    </div>
    <div class="content" >
      <div class="content14">
        <div class="content14_1" v-for="item in data">
          <img :src="item.src" height="80" width="80"/>
          <span>{{item.span}}</span>
          <span>{{item.span1}}</span>
          <span>{{item.span2}}{{item.span3}}{{item.span4}}{{item.span5}}</span>
        </div>
      </div>
      <div class="content24">
        <div class="content24_1">
          店铺合计：{{zj}} <br>
          （含运费：¥8.0）
        </div>
      </div>
      <div class="content34">
        <div class="content34_1">
          <p><router-link :to="{name:'Dingdanbianhao',params:{name:this.data}}">查看详情</router-link></p>
          <router-link to="/dingdanpingjia"><button @click="shanchu($event)">评价有好礼哦</button></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Daipingjia",
      data(){
        return {
          data:[
            {src:'../../../static/LYLimg/pingguo.png',span:'云南昭通丑苹果',span1:'6个装',span2:'￥',span3:35.0,span4:' x ',span5:2},
            {src:'../../../static/LYLimg/pingguo.png',span:'云南昭通丑苹果',span1:'6个装',span2:'￥',span3:35.0,span4:' x ',span5:1},
          ],
          zj:0,
        }
      },
      mounted(){
        var aa = document.getElementsByClassName('content14')[0];
        var bb = document.getElementsByClassName('content24')[0];
        var cc = document.getElementsByClassName('content34')[0];
        bb.style.height = aa.offsetHeight + 'px';
        cc.style.height = aa.offsetHeight + 'px';
        // bb.style.lineHeight = aa.offsetHeight + 'px';
        console.log(aa.offsetHeight)
        console.log(bb.style.height)
        var zj = 0;
        for (var i = 0;i < this.data.length;i++){
          zj+=this.data[i].span5 * this.data[i].span3
        }
        this.zj = zj - 8;
      },
      methods:{
        shanchu(event){

        }
      }
    }
</script>

<style scoped>
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
  .content14{
    width: 700px;
    color: #666666;
  }
  .content14>div>img{
    vertical-align: middle;
    margin: 20px;
  }
  .content14>div>span:nth-of-type(2){
    margin-left: 150px;
    color: #999999;
  }
  .content14>div>span:nth-of-type(3){
    margin-left: 108px;
  }
  .content24{
    width: 200px;
    position: relative;
    border-left: solid #f2f2f2 1px;
    position: relative;
  }
  .content24_1{
    width: 200px;
    height: 45px;
    text-align: center;
    color: #666666;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
  }
  .content34{
    width: 181px;
    border-left: solid #f2f2f2 1px;
    position: relative;
  }
  .content34_1{
    width: 181px;
    height: 65px;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    text-align: center;
  }
  .content34_1>p>a{
    color: #3e9444;
    border-bottom: solid 1px #3e9444;
  }
  .content34_1>a>button{
    width: 90px;
    height: 30px;
    background-color: #f78327;
    color: white;
    outline: none;
    border-radius: 5px;
    margin-top: 19px;
  }
</style>
