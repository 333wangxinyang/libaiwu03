<template>
    <div id="head01">
      <div id="h_div1">
        <span>所在城市:</span>
        <div class="ct f_l" style="padding: 0">

          <div class="ct_now" id="ctname">北京朝阳区</div>

          <div class="ct_swich" id="qiehuan"><span class="ct_nav"></span></div>

          <div class="ct_link">

            <div class="ct_show"><span id="closect" class="f_r" title="关闭窗口">X</span><span class="f_l">城市列表</span></div>

            <a class="ct_links" href="javascript:">全国</a><a class="ct_links" href="javascript:">上海</a><a class="ct_links" href="javascript:">杭州</a><a class="ct_links" href="javascript:">北京</a><a class="ct_links" href="javascript:">深圳</a><a class="ct_links" href="javascript:">广州</a><a class="ct_links" href="javascript:">东莞</a><a class="ct_links" href="javascript:">汕头</a><a class="ct_links" href="javascript:">珠海</a><a class="ct_links" href="javascript:">佛山</a><a class="ct_links" href="javascript:">福州</a><a class="ct_links" href="javascript:">南京</a><a class="ct_links" href="javascript:">苏州</a><a class="ct_links" href="javascript:">武汉</a><span class="ct_links"></span><span class="ct_links"></span><span class="ct_links"></span><span class="ct_links"></span>

          </div>

        </div>

        <div id="h_div2">
          <a href="###">400-800-8820</a>
          <a href="###">我是商家</a>
          <a href="###">我的消息</a>
          <a href="###">我的订单</a>
          <span  :style=" state=='0'?'display:none' :'display:inline-block'">您好 ,<a href="###">17701269859</a><a id="tc" href="###">退出</a></span>
          <a :style=" state!=='0'?'display:none' :'display:inline-block'" id="dl" >注册登录</a>
        </div>


      </div>
    </div>
</template>

<script>
  import Bus from '../../assets/bus'
    export default {
        name: "head01",
data(){
   return{
     state:0,

   }


},
      methods:{
        getValueByKey(key) {
          //获取所有键值对
          var strArr = document.cookie.split(";");
          for (var i = 0; i < strArr.length; i++) {
            var kvArr = strArr[i].split("=");
            if (kvArr[0].trim() == key) {
              return kvArr[1];
            }
          }
        }
      },

      mounted(){

        this.state = this.getValueByKey("state")
console.log(this.getValueByKey("state"))
          $('#tc').click(function () {

            document.cookie = "state=0";
            this.state = this.getValueByKey("state")
            Bus.$emit('change',this.state)
          }.bind(this))

        $('#dl').click(function () {

          document.cookie = "state=1";
          this.state = this.getValueByKey("state")

          Bus.$emit('change',this.state)
        }.bind(this))



        $(document).ready(function(){

          $(function () {

            $('.ct_nav').click(function(){

              $(".ct_link").attr('class','ct_link ct_hovers');

            });

            $('#closect').click(function(){

              $(".ct_link").attr('class','ct_link');

            });

            $('.ct_links').click(function(){

              $(".ct_link").attr('class','ct_link');

              $("#ctname").html($(this).html());

            });

          });

        });
      }
    }
</script>

<style scoped>
  .ct_nav{
    background: url("../../../static/wangxinyang/shouye.png") 10px 6px no-repeat;
    width: 20px;
    height: 16px;
    display: inline-block;

  }
  #h_div1 #ctname{
    margin: 0;
    padding: 0;
    color: #6f6f6f;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    float: left !important;
    width: auto;
    /*display: inline;*/
    letter-spacing: 0px;
  }
#qiehuan{
  float: left !important;
}

#head01{
  width: 100%;
  height: 16px;
  padding: 10px 0;
  background-color: #eeeeee;
  position: relative;
  /*overflow: hidden;*/
}
#h_div1{
  width: 1280px;
  margin: 0 auto;
  height: 16px;
  /*background-color: #fff;*/
}
#h_div1>span{
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #6f6f6f;
  float: left;
  /*display: block;*/
}

  #h_div2{
    width: auto;
    height: 16px;
    float: right;
  }
  #h_div2>a{
    float: right;
    display: block;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #6f6f6f;
    padding:0  15px  ;
    border-left: 1px solid #6f6f6f;
  }
  #h_div2>a:nth-of-type(1){
    background: url("../../../static/wangxinyang/shouye02.png") 10px -20px no-repeat;
    padding-left:30px ;
    padding-right:0px ;
  }
  #h_div2>a:nth-of-type(5){
    border-left: 0px solid #6f6f6f;
    /*display: none;*/
    color: #4b943d;
  }
  #h_div2>span{
    float: right;
    display: block;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #6f6f6f;
  }
  #h_div2>span>a{
    color: #6f6f6f;
    padding:0  10px  ;
  }
  #h_div2>span>a:nth-of-type(1){
    color: #4b943d;
    /*padding:0  5px  ;*/
  }
/*###########*/
.f_l {float:left;}

.f_r {float:right;}

.ct {height:60px;padding-left:10px;text-align:center;}

.ct_now {width:60px;padding-top:20px;font-size:16px;letter-spacing:3px;font-weight:bold;color:#f16800;}

.ct_box {text-align:center;}

.ct_box span {vertical-align:bottom;}

.ct_nav {text-align:center;height:18px;line-height:18px;color:#333;cursor:pointer;overflow:hidden;display:inline-block;}

.ct_hover {color:#f25000;height:18px;line-height:18px;overflow:hidden;}

.ct_link {background:#FFFFFF;border:#f16800 2px solid;width:305px;display:none;z-index:9999;}

.ct_hovers {display:block;position:absolute;}

.ct_links {width:60px;margin-right:1px;height:30px;line-height:30px;font-size:13px;text-align:center;background:#f6f6f6;vertical-align:top;margin-bottom:1px;display:inline-block;}

.ct_show {background:#ccc;height:18px;line-height:18px;padding:5px;cursor:pointer;}
</style>
