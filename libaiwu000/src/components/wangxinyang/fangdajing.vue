<template>
    <div id="fdj">
       <div id="box">
      <pic-zoom :url="src" :scale="2"></pic-zoom>
       </div>
      <div id="lb">
        <img class="bb" src="../../../static/wangxinyang/left1.png" alt="">
        <img :class="mm==1&&'aa'" src="../../../static/wangxinyang/tcsp01.png" alt="">
        <img :class="mm==2&&'aa'" src="../../../static/wangxinyang/tcsp02.png" alt="">
        <img :class="mm==3&&'aa'" src="../../../static/wangxinyang/tcsp03.png" alt="">
        <img :class="mm==4&&'aa'" src="../../../static/wangxinyang/tcsp04.png" alt="">
        <img class="bb" src="../../../static/wangxinyang/right1.png" alt="">
      </div>
    </div>
</template>
<!--https://segmentfault.com/a/1190000012917213-->
<script>
  import PicZoom from 'vue-piczoom'
    export default {
        name: "fangdajing",
      components: {
        PicZoom
      },
      data(){
        return{
          mm:1,
          src:'../../../static/wangxinyang/tcsp01.png',
        }
      },
      mounted(){

          $("#box").on("mouseenter",function(){
           $('canvas').css({
             left: '600px' ,
            top: '310px',
           })
          });






        $('#lb>img').eq(0).click(function () {
          if(this.mm===1){
            this.mm = 4;
          }else {
            this.mm = this.mm-1;

          }
          this.src = '../../../static/wangxinyang/tcsp0'+this.mm + '.png'
        }.bind(this))
        $('#lb>img').eq(5).click(function () {
          if(this.mm===4){
            this.mm = 1;
          }else {
            this.mm = this.mm+1;
          }
          this.src = '../../../static/wangxinyang/tcsp0'+this.mm + '.png'
        }.bind(this))
        $('#lb>img').eq(1).click(function () {
          this.mm = 1;
          this.src = '../../../static/wangxinyang/tcsp0'+this.mm + '.png'
        }.bind(this))
        $('#lb>img').eq(2).click(function () {
          this.mm = 2;
          this.src = '../../../static/wangxinyang/tcsp0'+this.mm + '.png'
        }.bind(this))
        $('#lb>img').eq(3).click(function () {
          this.mm = 3;
          this.src = '../../../static/wangxinyang/tcsp0'+this.mm + '.png'
        }.bind(this))
        $('#lb>img').eq(4).click(function () {
          this.mm = 4;
          this.src = '../../../static/wangxinyang/tcsp0'+this.mm + '.png'
        }.bind(this))
      }
    }
</script>

<style scoped>
#fdj{
  width: 500px;
  height: 345px;
}
#box{
  width: 500px;
  height: 277px;
  overflow: hidden;
}
pic-zoom{
  width: 500px;
  height: 277px;
}
  #lb{
    width: 500px;
    height: 50px;
    overflow: hidden;
    /*position: absolute;*/
    margin-top: 20px;
    /*bottom: 0;*/
   display: flex;
    justify-content: space-between;
  }
#lb>img{
  width: 86px;
  height: 46px;
  border: 2px solid #dfdfdf;
}
#lb>.bb{
  width: 35px;
  height: 44px;
  padding: 3px 0;
  border: 0px solid #dfdfdf;
}
#lb>.aa{
    width: 86px;
    height: 46px;
    /*border: 1px solid #dfdfdf;*/
    border: 2px solid #f08201;
  }
</style>
