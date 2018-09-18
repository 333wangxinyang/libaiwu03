<template>
<div class="box">
  <div class="aa" v-for="item in arr">
    <router-link to="">
    <img :src="item.pic" alt="">
    </router-link>
    <span>{{item.title}}</span>
    <span>{{item.title1}}</span>
    <span>  积分：{{item.title2}}</span>
    <span>价值：{{item.title3}}</span>
    <router-link to="/X04">
    <span class="dh">{{item.title4}}</span>
    </router-link>
  </div>
</div>
</template>

<script>
    export default {
        name: "X02",
      data(){
          return {
            arr:[
              {
                pic:'../../../static/wxy1/pt.png',
                title:'新西兰佳沛黄金奇异果',
                title1:'花蜜版的甘甜百吃不厌',
                title2:'500',
                title3:'￥20.0',
                title4:'立即兑换'
              },
              {
                pic:'../../../static/wxy1/cz.png',
                title:'新西兰佳沛黄金奇异果',
                title1:'花蜜版的甘甜百吃不厌',
                title2:'500',
                title3:'￥20.0',
                title4:'立即兑换'
              },
              {
                pic:'../../../static/wxy1/hfs.png',
                title:'新西兰佳沛黄金奇异果',
                title1:'花蜜版的甘甜百吃不厌',
                title2:'500',
                title3:'￥20.0',
                title4:'立即兑换'
              },
              {
                pic:'../../../static/wxy1/mg.png',
                title:'新西兰佳沛黄金奇异果',
                title1:'花蜜版的甘甜百吃不厌',
                title2:'500',
                title3:'￥20.0',
                title4:'立即兑换'
              },
              {
                pic:'../../../static/wxy1/hfs.png',
                title:'新西兰佳沛黄金奇异果',
                title1:'花蜜版的甘甜百吃不厌',
                title2:'500',
                title3:'￥20.0',
                title4:'立即兑换'
              },
              {
                pic:'../../../static/wxy1/mht.png',
                title:'新西兰佳沛黄金奇异果',
                title1:'花蜜版的甘甜百吃不厌',
                title2:'500',
                title3:'￥20.0',
                title4:'立即兑换'
              },
              {
                pic:'../../../static/wxy1/mg.png',
                title:'新西兰佳沛黄金奇异果',
                title1:'花蜜版的甘甜百吃不厌',
                title2:'500',
                title3:'￥20.0',
                title4:'立即兑换'
              },
              {
                pic:'../../../static/wxy1//pt.png',
                title:'新西兰佳沛黄金奇异果',
                title1:'花蜜版的甘甜百吃不厌',
                title2:'500',
                title3:'￥20.0',
                title4:'立即兑换'
              }, {
                pic:'../../../static/wxy1/mg.png',
                title:'新西兰佳沛黄金奇异果',
                title1:'花蜜版的甘甜百吃不厌',
                title2:'500',
                title3:'￥20.0',
                title4:'立即兑换'
              },
              {
                pic:'../../../static/wxy1/hlg.png',
                title:'新西兰佳沛黄金奇异果',
                title1:'花蜜版的甘甜百吃不厌',
                title2:'500',
                title3:'￥20.0',
                title4:'立即兑换'
              },
              {
                pic:'../../../static/wxy1/mht.png',
                title:'新西兰佳沛黄金奇异果',
                title1:'花蜜版的甘甜百吃不厌',
                title2:'500',
                title3:'￥20.0',
                title4:'立即兑换'
              },
              {
                pic:'../../../static/wxy1//hfs.png',
                title:'新西兰佳沛黄金奇异果',
                title1:'花蜜版的甘甜百吃不厌',
                title2:'500',
                title3:'￥20.0',
                title4:'立即兑换'
              }
            ]
          }
      }
    }
</script>

<style scoped>
.box{
  width: 1280px;
  height: 1250px;
  display: flex;
  margin: 50px auto;
  justify-content: center;
  flex-wrap: wrap;
}
  .aa{
    margin: 5px 5px 0 5px;
    width: 24%;
    height: 400px;
    position: relative;
    border: 1px solid #dfdfdf;
    background-color: #ffffff;
  }
  .aa a{
    text-decoration: none;
    color: #666;
  }
  .aa img{
    width: 190px;
    height: 184px;
    position: absolute;
    top: 40px;
    left: 60px;

  }
  .aa>span:nth-of-type(1){
    display: block;
    width: 175px;
    height: 20px;
    /*font-size: 18px;*/
    line-height: 20px;
    position: absolute;
    top: 240px;
    left: 50px;
  }
.aa>span:nth-of-type(2){
  display: block;
  width: 175px;
  height: 20px;
  line-height: 20px;
  position: absolute;
  top: 260px;
  left: 60px;
  font-size: 14px;
}
.aa>span:nth-of-type(3){
  display: block;
  width: 100px;
  height: 20px;
  line-height: 20px;
  position: absolute;
  top: 290px;
  left: 30px;
  color: #f00;
}
.aa>span:nth-of-type(4){
  display: block;
  width: 100px;
  height: 20px;
  line-height: 20px;
  position: absolute;
  top: 290px;
 right: 30px;
}
  .dh{
    width: 150px;
    height: 30px;
    line-height: 30px;
    display: block;
    position: absolute;
    bottom: 40px;
    left: 80px;
    color: white;
    background-color: #f08200;
    border-radius: 15.5px;
    text-align: center;
  }
</style>
