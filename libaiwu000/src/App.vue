<template>
  <div id="app">
    <!--<h01gylbw></h01gylbw>-->
    <!--<h02drzc></h02drzc>-->
    <!--<x01></x01>-->
    <!--<x02></x02>-->
    <head01></head01>
    <!--<h03dr></h03dr>-->
    <!--<h04wjmm></h04wjmm>-->
    <!--<gerenziliao></gerenziliao>-->


    <!--<h05jfdd></h05jfdd>-->
    <!--<h06jfxq></h06jfxq>-->




    <!--<x05></x05>-->
<!--<x01></x01>-->
    <!--<x02></x02>-->
      <!--<x03></x03>-->
    <!--<x04></x04>-->
    <!--<x06></x06>-->
    <!--<x07></x07>-->
    <!--<head01></head01>-->
    <!--<head01></head01>-->
    <!--<seek></seek>-->
    <!--<navigation></navigation>-->
    <router-view/>
  </div>
</template>
<script>
  import X01 from '@/components/wxy/X01'
  import X02 from '@/components/wxy/X02'
  import X03 from '@/components/wxy/X03'
  import X04 from '@/components/wxy/X04'
  import X05 from '@/components/wxy/X05'
  import X06 from '@/components/wxy/X06'
  import head01 from '@/components/wangxinyang/head01'
  import fff from '@/components/wxy/fff'
  import X09 from '@/components/wxy/X09'
  import H02drzc from '@/components/HZH/H02drzc'
  import H01gylbw from '@/components/HZH/H01gylbw'
  import seek from '@/components/wangxinyang/seek'
  import navigation from '@/components/wangxinyang/navigation'
  import H03dr from '@/components/HZH/H03dr'
  import H04wjmm from '@/components/HZH/H04wjmm'
  import Gerenziliao from '@/components/LYL/Gerenziliao'

  import H05jfdd from '@/components/HZH/H05jfdd'
  import H06jfxq from '@/components/HZH/H06jfxq'
export default {
  name: 'App',
  components:{
    head01:head01,
    x01:X01,
    x02:X02,
    x03:X03,
    x04:X04,
    x05:X05,
    x06:X06,
    fff:fff,
    x09:X09,
    seek:seek,
    navigation:navigation,
    h01gylbw:H01gylbw,
    h02drzc:H02drzc,
    h03dr:H03dr,
    h04wjmm:H04wjmm,
    gerenziliao:Gerenziliao,
    h05jfdd:H05jfdd,
    h06jfxq:H06jfxq
  },
}
</script>

<style>

</style>
