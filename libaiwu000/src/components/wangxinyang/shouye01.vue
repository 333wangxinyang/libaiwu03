<template>
    <div>
      <swiper></swiper>
      <ul id="ul01">
        <li>
          <span>热卖</span>
          <p>内蒙古草原 </p>
          <p>羔羊羊精肉</p>
          <img src="../../../static/wangxinyang/shouyea01.png" alt="">
        </li>
        <li>
          <span>新品</span>
          <p>新鲜草莓 </p>
          <p>留住新鲜</p>
          <img src="../../../static/wangxinyang/shouyea02.png" alt="">
        </li>
        <li>
          <span>热卖</span>
          <p>内蒙古草原 </p>
          <p>羔羊羊精肉</p>
          <img src="../../../static/wangxinyang/shouyea03.png" alt="">
        </li>
        <li>
          <span>新品</span>
          <p>新鲜草莓 </p>
          <p>留住新鲜</p>
          <img src="../../../static/wangxinyang/shouyea04.png" alt="">
        </li>
      </ul>
    </div>
</template>

<script>
  import swiper from '@/components/wangxinyang/swiper'
    export default {
        name: "shouye01",
      components:{
        swiper:swiper,
      },
    }
</script>

<style scoped>
#ul01{
  width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 20px 0;

}
#ul01>li{
width: 300px;
  height: 140px;
  background-color: #f2f2f2;
  overflow: hidden;
  position: relative;
}
#ul01>li:nth-of-type(2n+1)>span{
  display: block;
  padding-top: 80px;
  width: 100px;
  height: 20px;
  background-color: #498e3d;
  text-align: center;
  font-size: 14px;
  line-height: 20px;
  color: #fff;
 transform: rotate(-45deg) translateX(-0px) translateY(-80px);
}
#ul01>li:nth-of-type(2n+2)>span{
  display: block;
  padding-top: 80px;
  width: 100px;
  height: 20px;
  background-color: #f08200;
  text-align: center;
  font-size: 14px;
  line-height: 20px;
  color: #fff;
  transform: rotate(-45deg) translateX(-0px) translateY(-80px);
}
#ul01>li:nth-of-type(2n+2)>p{
  position: absolute;
  top: 40px;
  left: 30px;
  font-size: 20px;
  line-height: 20px;
  color: #333333;
}
#ul01>li:nth-of-type(2n+2)>p:nth-of-type(2){
  top: 80px;
  font-size: 16px;
}
#ul01>li:nth-of-type(2n+1)>p{
  position: absolute;
  top: 40px;
  left: 30px;
  font-size: 20px;
  line-height: 20px;
  color: #333333;
}
#ul01>li:nth-of-type(2n+1)>p:nth-of-type(2){
  top: 80px;
  /*font-size: 16px;*/
}
#ul01>li>img{
position: absolute;
  top: 20px;
  left: 150px;
}
</style>
