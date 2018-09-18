<template>
    <div id="gwc">
      <div id="g_div1">
        <img src="../../../static/wangxinyang/gwckk.png" alt="">
        <span>您的购物车是空的</span>
        <router-link to="/">去首页看看</router-link>
      </div>
      <p>购物车</p>
     <div id="g_div2">
        <div v-for="(aa,index) in arr">
          <p>
            <span></span>
            <img src="../../../static/wangxinyang/gwcxuanzhong.png" alt="">
            <span>{{aa.spname}}</span>
            <span>规格</span>
            <span>单价</span>
            <span>数量</span>
            <span>金额</span>
            <span>操作</span>
          </p>
          <ul>
            <li v-for="(bb,index1) in aa.arr0">
              <span></span>
              <img src="../../../static/wangxinyang/gwcxuanzhong.png" alt="">
              <span><img :src="bb.src" alt=""></span>
              <span>{{bb.name}}</span>
              <span>{{bb.guige}}</span>
              <span>￥{{bb.dj}}</span>
              <span><button>-</button><span>{{bb.num}}</span><button>+</button></span>
              <span>￥{{bb.dj*bb.num}}</span>
              <span @click="get(bb.id)">删除</span>
            </li>
          </ul>
          <p>
            <span>￥108.0</span>
            <span>商品金额 </span>
          </p>
        </div>

     </div>
      <div id="g_div3">
        <span>全选</span>
        <span>批量删除</span>
        <span>商品总计：</span>
        <span>￥2977</span>
        <a href="###">立即购买</a>
      </div>

    </div>
</template>

<script>
    export default {
        name: "gwc",
      data(){
          return{

            arr:[
              {spname:'爱果果水果店',
                arr0:[
                  {name:'云南蒙自石榴 8个装',guige:'8个装',dj:569,num:1,id:1,src:'../../../static/wangxinyang/gwcwp01.png'},
                  {name:'云南蒙自石榴 8个装',guige:'8个装',dj:569,num:1,id:1,src:'../../../static/wangxinyang/gwcwp01.png'},
                  {name:'云南蒙自石榴 8个装',guige:'8个装',dj:569,num:1,id:1,src:'../../../static/wangxinyang/gwcwp01.png'},
                ]

              },
              {spname:'爱果果水果店',
                arr0:[
                  {name:'云南蒙自石榴 8个装',guige:'8个装',dj:569,num:1,id:1,src:'../../../static/wangxinyang/gwcwp01.png'},
                  {name:'云南蒙自石榴 8个装',guige:'8个装',dj:569,num:1,id:1,src:'../../../static/wangxinyang/gwcwp01.png'},
                  {name:'云南蒙自石榴 8个装',guige:'8个装',dj:569,num:1,id:1,src:'../../../static/wangxinyang/gwcwp01.png'},
                ]
              },
            ]


          }
      }
    }
</script>

<style scoped>
  #g_div3{
    height: 130px;
    position: relative;
  }
  #g_div3>span:nth-of-type(1){
    position: absolute;
    font-size: 16px;
    color: #619d57;
    top: 60px;
    left: 20px;

  }
  #g_div3>span:nth-of-type(2){
    position: absolute;
    font-size: 16px;
    color: #619d57;
    top: 60px;
    left: 95px;
  }
  #g_div3>span:nth-of-type(3){
    position: absolute;
    font-size: 20px;
    color: #666666;
    bottom: 50px;
    left: 930px;
  }

  #g_div3>span:nth-of-type(4){
    position: absolute;
    font-size: 22px;
    color: #ff5757;
    bottom: 50px;
    left: 1023px;
  }
  #g_div3>a{
    position: absolute;
    font-size: 20px;
    display: block;
    height: 50px;
    width: 150px;
    line-height: 50px;
    text-align: center;
    border-radius: 5px;
    background-color: #f08200;
    color: #fff;
    bottom: 40px;
    right: 0px;
  }
#gwc{
  width: 1280px;
  margin: 0 auto;
}
#gwc>p{
  width: 1280px;
  height:30px ;
  line-height:30px ;
  text-indent:40px ;
  color: #666666;
  padding:   20px 0;
  font-size:20px ;
  background: url("../../../static/wangxinyang/shouye02.png") 0 -500px content-box no-repeat content-box;
}
#g_div2>div>p:nth-of-type(1){
  height: 20px;
  padding: 15px 0;
  background-color: #f2f2f2;
  position: relative;
  color: #333333;
  font-size: 18px;
  line-height: 20px;
}
#g_div2>div>p:nth-of-type(2){
  height: 20px;
  padding: 30px ;
  /*background-color: #f2f2f2;*/
  border-bottom: 1px solid #e9e9e9;
  position: relative;
  color: #333333;
  font-size: 20px;
  line-height: 20px;
}
#g_div2>div>p:nth-of-type(2)>span{
  float: right;
}
#g_div2>div>p:nth-of-type(2)>span:nth-of-type(1){
  float: right;
  color: #ff5757;
  font-size: 24px;
  padding-left: 20px;
}



#g_div2>div>p:nth-of-type(1)>span:nth-of-type(1){
  height: 18px;
  width: 18px;
  display: block;
  position: absolute;
  border: 1px solid #d3d3d3;
  top:15px ;
  left: 20px;
}
#g_div2>div>p:nth-of-type(1)>img:nth-of-type(1){
  height: 20px;
  width: 20px;
  display: block;
  position: absolute;
  top:15px ;
  left: 20px;
  opacity: 0;
}
#g_div2>div>p:nth-of-type(1)>span:nth-of-type(2){
  position: absolute;
  left: 60px;
}
#g_div2>div>p:nth-of-type(1)>span:nth-of-type(3){
  position: absolute;
  left: 470px;
}
#g_div2>div>p:nth-of-type(1)>span:nth-of-type(4){
  position: absolute;
  left: 650px;
}
#g_div2>div>p:nth-of-type(1)>span:nth-of-type(5){
  position: absolute;
  left: 830px;
}
#g_div2>div>p:nth-of-type(1)>span:nth-of-type(6){
  position: absolute;
  left: 1010px;
}

#g_div2>div>p:nth-of-type(1)>span:nth-of-type(7){
  position: absolute;
  left: 1190px;
}
#g_div2>div>ul>li{
height: 120px;
  border-bottom: 1px solid #e9e9e9;
position: relative;
  color: #666666;
  font-size: 18px;

}


#g_div2>div>ul>li>span:nth-of-type(1){
  height: 18px;
  width: 18px;
  display: block;
  position: absolute;
  border: 1px solid #d3d3d3;
  top:50px ;
  left: 20px;
}
#g_div2>div>ul>li>img:nth-of-type(1){
  height: 20px;
  width: 20px;
  position: absolute;
  top:50px ;
  left: 20px;
  /*opacity: 0;*/
}
#g_div2>div>ul>li>span:nth-of-type(2){
  height: 80px;
  width: 80px;
  display: block;
  position: absolute;
  border: 1px solid #d3d3d3;
  top:20px ;
  left: 57px;
}
#g_div2>div>ul>li>span:nth-of-type(2)>img{
  width: 100% ;
  height: 100% ;
}
#g_div2>div>ul>li>span:nth-of-type(3){
  position: absolute;
  top:52px ;
  left: 156px;
}
#g_div2>div>ul>li>span:nth-of-type(4){
  position: absolute;
  top:52px ;
  left: 470px;
}
#g_div2>div>ul>li>span:nth-of-type(5){
  position: absolute;
  top:52px ;
  left: 644px;
}
#g_div2>div>ul>li>span:nth-of-type(6){
   position: absolute;
  top:52px ;
  border: 1px solid #d3d3d3;
  left: 795px;
}
#g_div2>div>ul>li>span:nth-of-type(6)>button{
  width: 28px;
  font-size: 18px;
  border: 1px solid #d3d3d3;
  height:28px ;

}
#g_div2>div>ul>li>span:nth-of-type(6)>span{

  line-height: 26px;
  padding:  0 20px;

}

#g_div2>div>ul>li>span:nth-of-type(7){
  position: absolute;
  top:52px ;
  left: 1005px;
}
#g_div2>div>ul>li>span:nth-of-type(8){
  position: absolute;
  top:52px ;
  left: 1190px;
  color: #498e3d;
}

 #g_div1{
   display: none;
   width: 1280px;
   height: 490px;
   position: relative;
 }
#g_div1>img{
 position: absolute;
  left: 500px;
  top: 173px;
}
#g_div1>span{
  position: absolute;
  font-size: 24px;
  color: #666666;
  left: 660px;
  top: 190px;
}
#g_div1>a{
  position: absolute;
  display: block;
  width:170px ;
  height:45px ;
  line-height: 45px;
  font-size: 20px;
  color: #FFF;
  background-color: #ec6a17;
  top: 247px;
  left: 660px;
  text-align: center;
  border-radius: 5px;
}

</style>
