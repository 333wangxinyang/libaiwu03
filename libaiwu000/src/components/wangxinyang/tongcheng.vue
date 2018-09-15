<template>
  <div id="tc">
    <swiper></swiper>
    <remai></remai>
    <div id="t_div1">
      <span>分类：</span>
      <a href="###" >全部</a>
      <a href="###" >餐饮</a>
      <a href="###" >酒店</a>
      <a href="###" >休闲</a>
      <a href="###" >电影</a>
      <a href="###" >汽车装饰</a>
      <a href="###" >家政服务</a>
    </div>
    <div id="t_div2">
      <span>评分最高</span>
      <span>价格
        <img :src="src1?'../../../static/wangxinyang/ssj03.png':'../../../static/wangxinyang/ssj01.png'" alt="">
        <img :src="src2?'../../../static/wangxinyang/xsj03.png':'../../../static/wangxinyang/xsj01.png'" alt=""></span>
      <span>销量</span>
    </div>
    <div id="t_div3">
      <ul>
        <li>
          <img src="../../../static/wangxinyang/tcsp01.png" alt="">
          <p>阳澄湖大闸蟹</p>
          <span>
            <img src="../../../static/wangxinyang/xxa.png" alt="">
          </span>
          <span>
            <img src="../../../static/wangxinyang/XXL.png" alt="">
          </span>
          <span>￥62/人</span>
          <p>浙江省台州市温岭市人民西路2号</p>
        </li>
        <li>
          <img src="../../../static/wangxinyang/tcsp02.png" alt="">
        </li>
        <li>
          <img src="../../../static/wangxinyang/tcsp03.png" alt="">
        </li>
        <li>
          <img src="../../../static/wangxinyang/tcsp04.png" alt="">
        </li>
      </ul>


    </div>

  </div>

</template>

<script>
  import swiper from '@/components/wangxinyang/swiper'
  import remai from '@/components/wangxinyang/remai'
    export default {
        name: "tongcheng",
      components:{
        swiper:swiper,
        remai:remai,



      },
      data(){
        return{
          src1:true,
          src2:false,
          arr:[
            [],
            [],
            []
          ],
        }
      },
      mounted(){
          $('#t_div1>a').click(function () {
            $('#t_div1>a').css({
              'background-color': '#fff',
              'color': '#b2b2b2',
            })
            $(this).css({
              'background-color': '#498e3d',
              'color': '#fff',
            })

          })
        $('#t_div2>span').click(function () {
          $('#t_div2>span').css({

            'border': '2px solid #e7e7e7',
            'color': ' #333333',
          })
          $(this).css({
            'border': '2px solid #498e3d',
            'color': '#498e3d',
          })

        })
        $('#t_div2>span>img:nth-of-type(1)').click(function () {
          this.src1 = true;
          this.src2 = false;
        }.bind(this))
        $('#t_div2>span>img:nth-of-type(2)').click(function () {
          this.src2 = true;
          this.src1 = false;
        }.bind(this))
      }
    }
</script>

<style scoped>
  #t_div1{
    width: 1280px;
    margin: 0 auto;
    padding-bottom: 15px;
    border-bottom: 1px solid #e7e7e7;

  }
  #t_div1>a{
    font-size: 20px;
    color: #b2b2b2;
    line-height: 26px;
    padding: 0 20px;
    margin-right: 25px;
    /*background-color: #498e3d;*/
  }
  #t_div1>span:nth-of-type(1){
    font-size: 20px;
    color: #b2b2b2;
    line-height: 26px;
    margin-right: 25px;
    padding: 0 ;
  }
  #t_div1>a:nth-of-type(1){
    background-color: #498e3d;
    color: #fff;
  }

#t_div2{
  width: 1280px;
  margin: 0 auto;
  padding: 22px;
  height: 25px ;
}
  #t_div2>span{
float: right;
    margin-left: 35px;
    line-height: 23px;
    font-size: 18px;
    border: 2px solid #e7e7e7;
    color: #333333;
    padding: 0 15px;
  }
  #t_div2>span:nth-of-type(2){
    position: relative;
    border: 2px solid #498e3d;
    color: #498e3d;
  }
  #t_div2>span:nth-of-type(2)>img:nth-of-type(1){
    position: absolute;
    top: 5px;
    right: 15px;
  }
  #t_div3{
    width: 1280px;
    margin: 0 auto;

  }
  #t_div3>ul{
    overflow: hidden;
  }
  #t_div3>ul>li{
    width: 305px;
    height: 300px;
    margin: 0 20px 20px 0;
    float: left;
    background-color: #f8f6f7;
    position: relative;

  }
  #t_div3>ul>li:nth-of-type(4n){
    width: 305px;
    height: 300px;
    margin: 0 0px 20px 0;
    float: left;
    background-color: #f8f6f7;

  }
  #t_div3>ul>li>p:nth-of-type(1){
    width: 100%;
    padding: 18px 0;
    line-height: 24px;
    text-align: center;
    font-size: 24px;
  }
  #t_div3>ul>li>p:nth-of-type(2){
    width: 100%;
    /*padding: 20px 0;*/
    line-height: 20px;
    text-align: center;
    font-size: 16px;
    color: #787878;
    position: absolute;
    bottom: 20px;
  }
  #t_div3>ul>li>span:nth-of-type(1){
    position: absolute;
    left: 55px;
    bottom: 50px;
  }
  #t_div3>ul>li>span:nth-of-type(2){
    position: absolute;
    left: 53px;
    bottom: 49px;
  }
  #t_div3>ul>li>span:nth-of-type(3){
    position: absolute;
    left: 190px;
    line-height: 25px;
    font-size: 16px;
    color: #ec6a17;
    bottom: 49px;
  }
</style>
