<template>
    <div>
      <!--<head01></head01>-->
      <seek></seek>
      <navigation></navigation>
      <router-view/>


      <foot></foot>

    </div>
</template>

<script>
  import head01 from '@/components/wangxinyang/head01'
  import seek from '@/components/wangxinyang/seek'
  import navigation from '@/components/wangxinyang/navigation'
  import foot from '@/components/wangxinyang/foot'
    export default {
        name: "shouye",
      components:{
        head01:head01,
        seek:seek,
        navigation:navigation,
        foot:foot,
      },
      methods:{
       hasKey(key) {
    var strArr = document.cookie.split(";");
    for(var i = 0; i < strArr.length; i++) {
      var kvArr = strArr[i].split("=");
      if(kvArr[0].trim() == key) {
        //相等
        return true;
      }
    }
    //不相等
    return false;
  }
      },
      mounted(){

       if(!this.hasKey("state")){
         document.cookie = "state=0";
       }


      }
    }
</script>

<style scoped>

</style>
