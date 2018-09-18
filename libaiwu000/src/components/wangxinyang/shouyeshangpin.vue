<template>
    <div id="sysp">

      <div class="sysp_div1" v-for="(aa,index) in arrLb" >
        <div class="aa">
        <span>{{aa.title}}</span>
        <span>{{aa.jianjie}}</span>
        <a href="###">更多></a>
        </div>
       <ul>
        <li v-for="(bb,index01) in aa.arr0">
          <router-link to="/spxq/id">
          <img :src="bb.src" alt="">
          <p>{{bb.name}}</p>
          <p>{{bb.guige}}</p>
          <span>￥{{bb.jg}}</span>
          <span>￥{{bb.jg}}</span>
          <a  href="###"></a>
            <a class="gwc" href="###"></a>
          </router-link>
        </li>
       </ul>
      </div>

    </div>
</template>

<script>
    export default {
        name: "shouyeshangpin",
      data(){
        return{
          arrLb:[{title:'新鲜水果',jianjie:'采自新疆优质水果生产基地，品质一流 ', arr0:[
              {name:'新西兰佳沛黄金奇异果',src:'../../../static/wangxinyang/sg01.png',jg:'28.80',guige:'6个装'},
              {name:'新西兰佳沛黄金奇异果',src:'../../../static/wangxinyang/sg02.png',jg:'28.80',guige:'6个装'},
              {name:'新西兰佳沛黄金奇异果',src:'../../../static/wangxinyang/sg03.png',jg:'28.80',guige:'6个装'},
              {name:'新西兰佳沛黄金奇异果',src:'../../../static/wangxinyang/sg04.png',jg:'28.80',guige:'6个装'},
            ]},
            {title:'新鲜水果',jianjie:'采自新疆优质水果生产基地，品质一流 ', arr0:[
                {name:'新西兰佳沛黄金奇异果',src:'../../../static/wangxinyang/hx01.png',jg:'28.80',guige:'6个装'},
                {name:'新西兰佳沛黄金奇异果',src:'../../../static/wangxinyang/hx02.png',jg:'28.80',guige:'6个装'},
                {name:'新西兰佳沛黄金奇异果',src:'../../../static/wangxinyang/hx03.png',jg:'28.80',guige:'6个装'},
                {name:'新西兰佳沛黄金奇异果',src:'../../../static/wangxinyang/hx04.png',jg:'28.80',guige:'6个装'},
              ]},
            {title:'新鲜水果',jianjie:'采自新疆优质水果生产基地，品质一流 ', arr0:[
                {name:'新西兰佳沛黄金奇异果',src:'../../../static/wangxinyang/sg01.png',jg:'28.80',guige:'6个装'},
                {name:'新西兰佳沛黄金奇异果',src:'../../../static/wangxinyang/sg02.png',jg:'28.80',guige:'6个装'},
                {name:'新西兰佳沛黄金奇异果',src:'../../../static/wangxinyang/sg03.png',jg:'28.80',guige:'6个装'},
                {name:'新西兰佳沛黄金奇异果',src:'../../../static/wangxinyang/sg04.png',jg:'28.80',guige:'6个装'},
              ]},
            {title:'新鲜水果',jianjie:'采自新疆优质水果生产基地，品质一流 ', arr0:[
                {name:'新西兰佳沛黄金奇异果',src:'../../../static/wangxinyang/hx01.png',jg:'28.80',guige:'6个装'},
                {name:'新西兰佳沛黄金奇异果',src:'../../../static/wangxinyang/hx02.png',jg:'28.80',guige:'6个装'},
                {name:'新西兰佳沛黄金奇异果',src:'../../../static/wangxinyang/hx03.png',jg:'28.80',guige:'6个装'},
                {name:'新西兰佳沛黄金奇异果',src:'../../../static/wangxinyang/hx04.png',jg:'28.80',guige:'6个装'},
              ]}],

        }
      },
      mounted(){



      }
    }
</script>

<style scoped>
  #sysp{
    width: 1280px;
    margin: 0 auto;
  }
  .aa{
    height: 40px;
    padding: 30px;
    background: #ebffe8;
    border-bottom: 1px solid #498e3d;

  }
  .aa>span:nth-of-type(1){
    display: block;
    float: left;
    color: #69a55f;
    text-indent: 45px;
    height: 42px;
    font-size: 32px;
    line-height: 42px;
    /*background: url("../../../static/wangxinyang/shouye02.png") 0px -400px no-repeat;*/
  }
  #sysp>div:nth-of-type(1)>div>span:nth-of-type(1){
    background: url("../../../static/wangxinyang/shouye02.png") 0px -450px no-repeat;
  }
  #sysp>div:nth-of-type(2)>div>span:nth-of-type(1){
    background: url("../../../static/wangxinyang/shouye02.png") 0px -540px no-repeat;
  }
  #sysp>div:nth-of-type(3)>div>span:nth-of-type(1){
    background: url("../../../static/wangxinyang/shouye02.png") 0px -590px no-repeat;
  }
  #sysp>div:nth-of-type(4)>div>span:nth-of-type(1){
    background: url("../../../static/wangxinyang/shouye02.png") 0px -640px no-repeat;
  }
  .aa>span:nth-of-type(2){
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
  .aa>a{
    font-size: 20px;
    color: #6f706f;
    float: right;
    line-height: 40px;
  }

 ul{
    margin:20px 0 ;
    width: 1280px;
    display: flex;
    justify-content: space-between;
    height: 430px;
  }
ul>li{
    width: 303px;
    height: 428px;
  border: 1px solid #ececec;
    background: #FFF;
    position: relative;
  }
  ul>li>a{
    width: 303px;
    height: 428px;
    display: block;
    /*border: 1px solid #ececec;*/
    /*background: #FFF;*/
    position: relative;
  }
 ul>li>a>img{
    position: absolute;
  }
ul>li>a>p:nth-of-type(1){
    font-size: 18px;
    position: absolute;
    left: 20px;
    top: 315px;
    width: 100%;
    color: #333333;
  }
 ul>li>a>p:nth-of-type(2){
    font-size: 18px;
    position: absolute;

    top: 345px;
   left: 20px;

    color: #838383;
  }
 ul>li>a>span:nth-of-type(1){
    font-size: 20px;
    position: absolute;
    /*text-align: center;*/
    bottom: 30px;
    left: 20px;
    color: #f08200;
  }
    ul>li>a>span:nth-of-type(2){
    font-size: 16px;
    position: absolute;
    bottom: 30px;
    left: 125px;
    color: #7a7a7a;
      text-decoration:line-through;
  }
  ul>li>a>a{
    display: block;
    height: 30px;
    width: 37px;
    position: absolute;
    bottom: 30px;
    right: 20px;

    background: url("../../../static/wangxinyang/shouye02.png") 0px -500px no-repeat;
  }
  ul>li>a>a:nth-of-type(1) {
    display: none;
  }
  ul>li>a>a:nth-of-type(2):hover {

    animation-name:shake;
    animation-duration:1s;
    /*animation-iteration-count:infinite;*/
  }
</style>
