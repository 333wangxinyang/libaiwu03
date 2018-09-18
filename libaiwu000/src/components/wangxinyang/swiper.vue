<template>
  <div id="box">
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide"><router-link style="display:block;width: 100%;height: 100%" to="/zhuanti"></router-link></div>
      <div class="swiper-slide"><router-link style="display:block;width: 100%;height: 100%" to="/zhuanti"></router-link></div>
      <div class="swiper-slide"><router-link style="display:block;width: 100%;height: 100%" to="/zhuanti"></router-link></div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

  </div>

  </div>
</template>

<script>
    export default {
        name: "swiper",
      mounted(){
        var mySwiper = new Swiper ('.swiper-container', {
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
      }
    }
</script>

<style scoped>
#box{
  width: 100%;
}
.swiper-container{
  width: 100%;
  height: 500px;

}
swiper-slide>a{
  display: block;
  width: 100%;
  height: 100%;
}
.swiper-slide:nth-of-type(1){
  background: url("../../../static/wangxinyang/lb01.png") 0px 0px/cover no-repeat;
}
  .swiper-slide:nth-of-type(2){
    background: url("../../../static/wangxinyang/lb01.png") 0px 0px/cover no-repeat;
  }
.swiper-slide:nth-of-type(3){
  background: url("../../../static/wangxinyang/lb01.png") 0px 0px/cover no-repeat;
}
.swiper-slide:nth-of-type(4){
  background: url("../../../static/wangxinyang/lb01.png") 0px 0px no-repeat;
}
.swiper-slide:nth-of-type(5){
  background: url("../../../static/wangxinyang/lb01.png") 0px 0px no-repeat;
}
</style>
