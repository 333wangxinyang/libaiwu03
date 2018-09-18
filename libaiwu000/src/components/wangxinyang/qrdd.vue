<template>
    <div id="qrdd">
      <div id="q_div1">
        <span>收货人信息</span>
        <span><router-link to="/qrsh01">使用新地址</router-link></span>
      </div>
      <div id="q_div2">
        <ul>
          <li v-for="(aa,index) in arr">
            <span></span>
            <img @click="dizhi(aa.id)" src="../../../static/wangxinyang/yuanquan.png" :style="aa.moren?'opacity:1':'opacity:0'" alt="">
            <span>但小兵 北京 北京市 昌平区 天通苑明天第一城4号楼101 固定电话010-21541589</span>
            <span :style="aa.moren?'display:inline':'display:none'">默认地址</span>
            <span @click="dizhi(aa.id)" :style="aa.moren?'display:none':'display:inline'">设为默认地址</span>
            <span>修改</span>
            <span>删除</span>
          </li>
        </ul>
        <p>
          <span id="zz" @click="zhuankai()">展开其他地址<img src="../../../static/wangxinyang/xia.png" alt=""></span>
          <span id="ss" style="display: none" @click="shouqi()">收起地址<img src="../../../static/wangxinyang/shang.png" alt=""></span>
        </p>
      </div>


    </div>
</template>

<script>
    export default {
        name: "qrdd",
      data(){
          return{
            arr:[
              {
             name:'',sheng:'',shi:'',qu:'',xiangxi:'',phoneType:'',moren:true,id:1
            },
              {
                name:'',sheng:'',shi:'',qu:'',xiangxi:'',phoneType:'',moren:false,id:2
              },
              {
                name:'',sheng:'',shi:'',qu:'',xiangxi:'',phoneType:'',moren:false,id:3
              },
              {
                name:'',sheng:'',shi:'',qu:'',xiangxi:'',phoneType:'',moren:false,id:4
              },

            ]

          }
      },
      methods:{
        dizhi(id){
          console.log(111)
          for(var i in this.arr){
            if(this.arr[i].id === id){
              this.arr[i].moren = true;
            }else {
              this.arr[i].moren = false;
            }
          }
        },
        zhuankai(){
          var aa = this.arr.length*50
            $("#q_div2>ul").animate({
              height:aa,
            },800,function () {
              $('#zz').css({
                display:'none',
              })
              $('#ss').css({
                display:'inline',
              })

            })
        },
        shouqi(){
          $("#q_div2>ul").animate({
            height:50,
          },800,function () {
            $('#ss').css({
              display:'none',
            })
            $('#zz').css({
              display:'inline',
            })

          })
        }


      }
    }
</script>

<style scoped>
 #qrdd{
   width: 1280px;
   margin: 0 auto;
 }
#q_div1{
  height: 60px;
position: relative;
}
 #q_div1>span:nth-of-type(1){
   height: 20px;
   top: 20px;
   position: absolute;
   color: #666666;
 }
 #q_div1>span:nth-of-type(2)>a{ color: #fff;}
 #q_div1>span:nth-of-type(2){
   line-height: 30px;
   font-size: 16px;
   display: block;
   height: 30px;
   width: 90px;
   text-align: center;
   position: absolute;
   top: 15px;
   border-radius: 3px;
   right: 0;
   background-color: #f08200;
   color: #fff;
 }
 #q_div2>ul{
   overflow: hidden;
   height: 50px;
 }
  #q_div2>ul>li{
    height: 38px;
    padding: 0 20px;
    background-color: #f4fff2;
    position: relative;
    border: 1px solid #e5e5e5;
    margin-bottom: 10px;
    line-height: 38px;
    text-indent: 20px;
    color: #666666;
  }
 #q_div2>p{
   height: 38px;
   padding-bottom: 20px;
   border-bottom:1px solid #e5e5e5 ;
   line-height: 38px;
   color: #498e3d;
 }
 #q_div2>ul>li>span:nth-of-type(1){
   position: absolute;
display: block;
   width: 14px;
   height:14px ;
   border-radius: 50%;
   border: 1px solid #cecece;
   top: 10px;
   left: 18px;
   background: #fff;
 }
 #q_div2>ul>li>img{
   position: absolute;
   width: 16px;
   height:16px ;
   top: 10px;
   left: 18px;
 }
 #q_div2>ul>li>span:nth-of-type(3){
  color: #b1b4b1;
   font-size: 14px;
   text-indent: 15px;
 }
 #q_div2>ul>li>span:nth-of-type(4){
   position: absolute;
   left: 1050px;
   color: #f1a341;
   font-size: 14px;
   text-indent: 0px;
 }
 #q_div2>ul>li>span:nth-of-type(5){
   position: absolute;
   left: 1180px;
   color: #498e3d;
   font-size: 14px;
   text-indent: 0px;
 }
 #q_div2>ul>li>span:nth-of-type(6){
   position: absolute;
   left: 1230px;
   color: #498e3d;
   text-indent: 0px;
   font-size: 14px;
 }
</style>
