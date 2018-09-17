<template>
  <div class="hello">
    <weizhi></weizhi>
    <div id="h_div1">
      <fangdajing></fangdajing>
      <div id="xq">
        <div id="x_div1">
          <p>礼拜五旗舰店</p>
          <p>
            <span>营业时间：全天24小时</span>
            <span>¥62/人</span>
          </p>
          <p>
            18699563265
          </p>
          <p>
            浙江省温岭市人民西路281左侧.
          </p>
          <p>商家公告：</p>
          <p>
            本店有最新优惠活动，本店有最新优惠活动本店有最新优惠活动活动，到店男士享受8这优惠本店19.18有最新优惠活动...
          </p>
        </div>
        <div id="x_div2">
           <p>
             自营商家
           </p>
          <div>
            <span>综合评分:</span>
            <span></span>
            <span></span>
            <span>4.5分</span>
          </div>
          <ul>
            <li>
              <p>描述 </p>
              <p>4.5分</p>
            </li>
            <li>
              <p>商品 </p>
              <p>4.5分</p>
            </li>
            <li>
              <p>服务 </p>
              <p>4.5分</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div id="h_div2">

    </div>
  </div>
</template>

<script>

  import weizhi from '@/components/wangxinyang/weizhi'
  import fangdajing from '@/components/wangxinyang/fangdajing'
export default {
  name: 'HelloWorld',
  components:{
    weizhi:weizhi,
    fangdajing:fangdajing,
  },

}
</script>
<style scoped>
#h_div1{
  width: 1280px;
  margin: 0 auto;
  position: relative;
}
  #xq{
    width: 740px;
    height: 345px;
    position: absolute;
    top: 0;
    right: 0;
    /*background-color: #f00;*/

  }
#x_div1{
  width: 410px;
  height: 345px;
  position: absolute;
  top: 0;
  left: 0;
}
#x_div1>p:nth-of-type(1){
  font-size: 30px;
  line-height: 30px;
  height: 30px;
  color: #333333;
  padding: 20px 0 30px 0;
  border-bottom: 1px solid #e3e3e3;
}
#x_div1>p:nth-of-type(2){
  font-size: 18px;
  line-height: 18px;
  height: 18px;
  background: url("../../static/wangxinyang/jinglingtu03.png")  0 -80px no-repeat;
  text-indent: 20px;
  padding:  20px 0;
}
#x_div1>p:nth-of-type(2)>span:nth-of-type(1){

  font-size: 16px;
  line-height: 18px;
  height: 18px;
  color: #333333;
}
#x_div1>p:nth-of-type(2)>span:nth-of-type(2){
  font-size: 18px;
  line-height: 18px;
  height: 18px;
  color: #f5aa51;
}
#x_div1>p:nth-of-type(3){
  background: url("../../static/wangxinyang/jinglingtu03.png")  0 -160px no-repeat;
  text-indent: 20px;
  font-size: 18px;
  line-height: 18px;
  height: 20px;
  color: #333333;
}
#x_div1>p:nth-of-type(4){
  background: url("../../static/wangxinyang/jinglingtu03.png")  0 -180px no-repeat;
  text-indent: 20px;
  font-size: 18px;
  line-height: 18px;
  height: 20px;
  color: #333333;
  padding: 20px 0;
  border-bottom: 1px solid #e3e3e3;
}
#x_div1>p:nth-of-type(5){
  font-size: 20px;
  line-height: 20px;
  height: 20px;
  color: #333333;
  padding-top: 25px;
}
#x_div1>p:nth-of-type(6){
  font-size: 14px;
  line-height: 30px;
  /*height: 20px;*/
  color: #333333;
  padding-top: 20px;
}
  #x_div2{
    width: 300px;
    height: 345px;
    position: absolute;
    top: 0;
    right: 0;
    background-color: #f4fff2;

  }
#x_div2>p:nth-of-type(1){
  width: 30px;
  height: 65px;
  background: url("../../static/wangxinyang/jinglingtu03.png")  0 0px no-repeat;
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px;
  color: #fff;
  font-size: 14px;
}
#x_div2>div:nth-of-type(1){
  height: 20px;
  position: absolute;
  width: 100%;
  left: 0px;
  padding-left: 30px;
  top: 108px;
}
#x_div2>div:nth-of-type(1)>span:nth-of-type(1){
  height: 20px;
  line-height: 20px;
 font-size: 18px;
  color: #666666;
}

#x_div2>div:nth-of-type(1)>span:nth-of-type(2){
  display: block;
  height: 6px;
  width: 100px;
  position: absolute;
  background-color: #d3d3d3;
  top: 8px;
  left: 115px;
}
#x_div2>div:nth-of-type(1)>span:nth-of-type(3){
  display: block;
  height: 6px;
  width: 80px;
  position: absolute;
  background-color: #f08200;
  top: 8px;
  left: 115px;
}
#x_div2>div:nth-of-type(1)>span:nth-of-type(4){
  position: absolute;
  left:230px;
  height: 20px;
  line-height: 20px;
  font-size: 18px;
  color: #f08200;
}
#x_div2>ul{
  width: 100%;
  display: flex;
  justify-content: space-around;
  position: absolute;
  top: 160px;

}
#x_div2>ul>li{
  padding-right: 30px;
  border-right: 2px dotted #d3d3d3;
}
#x_div2>ul>li>p:nth-of-type(1){
  padding-bottom: 16px;
  font-size: 16px;
  color: #666666;

}
#x_div2>ul>li>p:nth-of-type(2){
  font-size: 16px;
  color: #f08200;
}
#x_div2>ul>li:nth-of-type(3){
  padding-right: 0px;
  border-right: 0px dotted #d3d3d3;
}
</style>
