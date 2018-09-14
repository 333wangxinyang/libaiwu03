<template>
    <div id="sylbw">
      <div id="sylbw_div1">
        <span>礼拜五</span>
        <span>Firiday</span>
        <div>
          <span>距离开始</span>
          <span class="time">{{d}}天</span>
          <span class="time">{{h}}</span>
          <span>：</span>
          <span class="time">{{m}}</span>
          <span>：</span>
          <span class="time">{{s}}</span>
          <a href="###">更多></a>
        </div>

      </div>
      <div id="sylbw_div2">
        <div class="swiper-container" id="sss">
          <div class="swiper-wrapper">
            <div class="swiper-slide">


            </div>
            <div class="swiper-slide"></div>
            <div class="swiper-slide"></div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>

        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "shouye01libaiwu",
      data(){
          return{
            d:0,
            h:0,
            m:0,
            s:0,
          }
      },
      methods:{
        aa(){
          var ft = new Date(2018, 8, 30, 0, 0, 0);
          setInterval(function(){
            var now = new Date();

            var fTimes = ft.getTime();
            var nTimes = now.getTime();

            var times = (fTimes - nTimes) / 1000;

            var d = Math.floor(times / (3600 * 24));
            var h = Math.floor(times % (3600 * 24) / 3600);
          var m = Math.floor(times % (3600 * 24) % 3600 / 60);
          var s = Math.floor(times % 60);
         this.d = d;
            this.h = h;
            this.m = m;
            this.s = s;
        }.bind(this), 1000)
        }
      },
      mounted(){
        this.aa()
        var mySwiper = new Swiper ('#sss', {
          direction: 'horizontal',
          loop: true,
          autoplay: {
            disableOnInteraction: false,
          },

          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination',

          },

        })

      },
    }
</script>

<style scoped>
#sylbw{
  width: 1280px;
  margin: 0 auto;
}
#sylbw_div1{
  height: 40px;
  padding: 30px;
  background: #ebffe8;
  border-bottom: 1px solid #498e3d;

}
#sylbw_div1>span:nth-of-type(1){
  display: block;
  float: left;
  color: #69a55f;
  text-indent: 40px;
  height: 42px;
  font-size: 32px;
  line-height: 42px;
  background: url("../../../static/wangxinyang/shouye02.png") 0px -400px no-repeat;
}
#sylbw_div1>span:nth-of-type(2){
  /*display: block;*/
  float: left;
  color: #999999;
  height: 20px;
  font-size: 20px;
  padding-top: 20px;
  padding-left: 20px;
  line-height: 20px;
  vertical-align: bottom;
}
#sylbw_div1>div{
  float: right;
  line-height: 40px;
  font-size: 23px;
  color: #69a55f;
}
  .time{
    padding: 10px 20px;
    background: #f08200;
    color: #ffffff;
    border-radius: 5px;
    margin: 0 5px;
  }
#sylbw_div1>div>span:nth-of-type(4),#sylbw_div1>div>span:nth-of-type(6){
  color: #f08200;
  margin: 0 ;
}
#sylbw_div1>div>a{
  font-size: 20px;
  color: #6f706f;
}


#sylbw_div2{
  height: 545px;
width: 1280px;

}
  #sss{
    width: 100%;
    height: 545px;
  }
</style>
