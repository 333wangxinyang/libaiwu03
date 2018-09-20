<template>
<div class="box">
  <div class="title">
    <img src="../../../static/wxy1/x-logo.png" alt="">
    <span>确认兑换信息</span>
  </div>
  <div class="then">
    <span>收货人信息</span>
    <router-link to="/tianjiadizhi">
      <span class="one4">使用新地址</span>
    </router-link>
    <div class="one" v-for="item in arr">
      <img src="../../../static/wxy1/x-wzf.png" alt="" class="one2">
      <span>{{item.title}}</span>
      <span>{{item.tel}}</span>
      <span class="one3">{{item.title1}}</span>
      <span class="ww">{{item.title4}}</span>
      <router-link to="">
      <span class="aa">{{item.title2}}</span>
      </router-link>
      <span class="bb">{{item.title3}}</span>
    </div>
    <div class="dz">
      <span class="zk">展开地址</span>
      <img src="../../../static/wxy1/x-down.png" alt="" class="zk1">
      <span class="sq">收起地址</span>
      <img src="../../../static/wxy1/x-up.png" alt="" class="sq1">
    </div>
  </div>
  <div class="xx">
    <span>商品信息</span>
    <div class="xx1">
      <div class="nr">
        <span>商品</span>
        <span>规格</span>
        <span>数量</span>
        <span>金额</span>
      </div>
      <div class="cp" v-for="(item,b) in arr2">
        <img :src="item.pic" alt="">
        <span>{{item.title}}</span>
        <span>{{item.gg}}</span>
<span class="cc"><button @click="bb(b)">-</button>{{item.num}}<button @click="aa(b)">+</button></span>
        <span>{{item.num*60}}积分</span>
      </div>
    </div>
    <div class="cp2">
      <span>添加订单备注</span>
      <input type="text" placeholder="限45个字，请填写有关商品、支付、发票等信息">
    </div>

<div class="cp3">
  <span>应付积分:</span>
  <span>确认兑换</span>
</div>







  </div>

</div>
</template>

<script>
    export default {
        name: "X03",
      mounted(){

        $('.bb').click(function () {
          $(this).parent().css({display:'none'});
        });




          var a=true;
          $('.one2').click(function () {
            if (a==true){
           $(this).attr({src:'../../../static/wxy1/x-zf.png'});
            $(this).nextAll().eq(2).css({display:'block'});
              $(this).nextAll().eq(3).css({display:'none'});
            a=false;
            }else {
              $(this).attr({src:'../../../static/wxy1/x-wzf.png'});
              $(this).nextAll().eq(2).css({display:'none'});
              $(this).nextAll().eq(3).css({display:'block'});
              a=true;
            }
          });
          $('.zk').click(function () {
            $('.one').css({display:'block'});
            $('.zk').css({display:'none'});
            $('.zk1').css({display:'none'});
            $('.sq').css({display:'block'});
            $('.sq1').css({display:'block'});
          });
        $('.sq').click(function () {
          $('.one').css({display:'none'});
          $('.zk').css({display:'block'});
          $('.zk1').css({display:'block'});
          $('.sq').css({display:'none'});
          $('.sq1').css({display:'none'});
        });
      },
      data(){
          return {
            arr:[
              {
                pic:'../../../static/wxy1/x-zf.png',
                pic1:'../../../static/wxy1/x-wzf.png',
                title:'但小兵 北京 北京市  昌平区  天通苑明第一城4号楼101',
                tel:'固定电话：010-21541589',
                title1:'默认地址',
                title4:'设置为默认地址',
                title2:'修改',
                title3:'删除'

              },{
                title:'但小兵 北京 北京市  昌平区  天通苑明第一城4号楼101',
                tel:'固定电话：010-21541589',
                title1:'默认地址',
                title4:'设置为默认地址',
                title2:'修改',
                title3:'删除'

              },{
                title:'但小兵 北京 北京市  昌平区  天通苑明第一城4号楼101',
                tel:'固定电话：010-21541589',
                title1:'默认地址',
                title4:'设置为默认地址',
                title2:'修改',
                title3:'删除'

              }
            ],
            arr2:[
              {
                pic:'../../../static/wxy1/x-bzl.png',
                title:'云南蒙自石榴 8个装',
                gg:'8个装',
                num:0,
                money:'60积分'
              },
              {
                pic:'../../../static/wxy1/x-bzl.png',
                title:'云南蒙自石榴 8个装',
                gg:'8个装',
                num:0,
                money:'60积分'
              },{
                pic:'../../../static/wxy1/x-bzl.png',
                title:'云南蒙自石榴 8个装',
                gg:'8个装',
                num:0,
                money:'60积分'
              },{
                pic:'../../../static/wxy1/x-bzl.png',
                title:'福建琯溪白心蜜柚（大果）2个装',
                gg:'8个装',
                num:0,
                money:'60积分'
              }
            ]
          }

      },
      methods: {
        aa(i) {
          this.arr2[i].num++;
        }
      }
    }
</script>

<style scoped>
.box{
  width: 100%;
  height: 100%;
}
  .title{
    width: 100%;
    height:125px;
    position: relative;
    border-bottom: 1px solid #dfdfdf;
  }
  .title img{
    width: 415px;
    height: 68px;
    position: absolute;
    top: 20px;
    left: 50px;
  }

  .title span{
    display: block;
    width: 200px;
    height: 30px;
    position: absolute;
    top: 50px;
    left: 600px;
    border-left: 1px solid #dfdfdf;
    text-align: center;
    line-height: 30px;
    color: #666;
  }
  .then{
    width:1280px;
    margin: 0 auto;
    position: relative;
    top: 5px;
  }
  .then>span:nth-of-type(1){
    font-size: 20px;
  }
  .one4{
    position: absolute;
    top: 5px;
    right: 20px;
    display: block;
    width: 100px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background-color: #f08200;
    color: #ffff;
  }
  .one{
    margin-top: 10px;
    width: 100%;
    height: 40px;
    position: relative;
    background-color: #f4fff2;
    padding-top: 15px;
  }
  .one2{
    position: absolute;
    top: 18px;
    left: 5px;
  }
.one>span:nth-of-type(1){
  position: absolute;
  left: 20px;
}
.one>span:nth-of-type(2){
  position: absolute;
  left: 400px;
}
.one>span:nth-of-type(3){
  font-size: 12px;
  position: absolute;
  left:600px;
  top: 17px;
  display: none;
}
  .one>span:nth-of-type(4){
    display: block;
    position: absolute;
    right: 300px;
    top: 15px;
    color: #f19b30;
  }
  .aa{
    display: block;
    position: absolute;
    right: 200px;
    top: 15px;
    color: #666;
  }
.bb{
  display: block;
  position: absolute;
  right: 100px;
  top: 15px;
  color: #666;
}
  .dz{
    width: 200px;
    height: 30px;
    position: relative;
    top: 0;
  }
  .dz>span:nth-of-type(1){
    font-size: 14px;
    width: 80px;
    height: 30px;
    line-height: 30px;
    position: absolute;
    left: 30px;
    display: none;
  }
  .dz>img:nth-of-type(1){
    position: absolute;
    top: 10px;
    left: 90px;
    display: none;
  }
.dz>span:nth-of-type(2){
  font-size: 14px;
  display: block;
  width: 80px;
  height: 30px;
  line-height: 30px;
  position: absolute;
  left: 30px;
}
.dz>img:nth-of-type(2){
  position: absolute;
  top: 10px;
  left: 90px;
}
  .xx{
    position: relative;
    top: 10px;
    width: 1280px;
    margin: 20px auto;
  }
  .xx>span:nth-of-type(1){
    font-size: 20px;
  }
  .xx1{
    width: 99%;
    margin-top: 10px;
    border: 1px solid #dfdfdf;
  }
.nr{
  width: 100%;
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;
}
.nr span{
  width: 25%;
  display: block;
  font-size: 20px;
  margin-left: 100px;
}
  .cp{
    width: 100%;
    height:120px;
    position: relative;
    top: 0;
    border-bottom: 1px solid #dfdfdf;
  }
  .cp>img{
    width: 90px;
    height: 90px;
    position: absolute;
    top: 10px;
    left: 80px;
  }
  .cp>span:nth-of-type(1){
    display: block;
    position: absolute;
    left: 180px;
    top: 50px;
  }
  .cp>span:nth-of-type(2){
    display: block;
    position: absolute;
    left: 500px;
    top: 50px;
  }
  .cc{
    display: block;
    position: absolute;
    right: 300px;
    top: 50px;
    width: 100px;
    height: 30px;
    line-height: 30px;
    border: 1px solid #dfdfdf;
    font-size: 20px;
    text-align: center;
  }
.cc button{
  width: 30px;
  height: 30px;
  font-size: 18px;
  text-align: center;
  line-height: 20px;

}

  .cc>button:nth-of-type(1){
    position: absolute;
    left: 0;
  }
.cc>button:nth-of-type(2){
  position: absolute;
  right: 0;
}
  .cp>span:nth-of-type(4){
    display: block;
    position: absolute;
    right: 50px;
    top: 50px;
  }
  .cp2{
    width: 1280px;
    height: 100px;
    position: relative;
    top: 10px;
    border-top: 1px solid #dfdfdf;
    border-bottom: 1px solid #dfdfdf;
  }
  .cp2 span{
    color: #666;
    position: absolute;
    top: 10px;
    left: 10px;
  }
  .cp2 input{
    width: 630px;
    height: 34px;
    font-size: 18px;
    position: absolute;
    top:40px;
  }
  .cp3{
    width: 100%;
    height: 100px;
    position: relative;
    top: 10px;
  }
  .cp3>span:nth-of-type(1){
    display: block;
    position: absolute;
    right: 100px;
    top: 10px;
  }
.cp3>span:nth-of-type(2){
  display: block;
  position: absolute;
  right: 80px;
  top: 50px;
  width: 100px;
  height: 30px;
  line-height: 30px;
  background-color: #f08200;
  text-align: center;
}
</style>
