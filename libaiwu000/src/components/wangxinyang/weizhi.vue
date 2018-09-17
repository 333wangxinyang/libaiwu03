<template>
    <div id="weizhi">
       <p>您的当前位置：{{fy1+fy2+fy3+fy4}}</p>
    </div>
</template>

<script>
    export default {
        name: "weizhi",
      data(){
          return{
            fy1:" 首页  >  ",
            fy2:" 全部商品  > ",
            fy3:" 苹果  > ",
            fy4:" 阿克苏 ",
          }
      }
    }
</script>

<style scoped>
#weizhi{
  width: 1260px !important;
  margin: 20px auto;
  height: 14px;
  padding: 20px 0px 20px 20px;
  background-color: #f4f4f4;
  line-height: 14px;
}
#weizhi>p{
  height: 14px;
  line-height: 14px;
  font-size: 14px;
  color: #666666;
}
</style>
