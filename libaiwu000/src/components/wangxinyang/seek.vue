<template>
    <div id="seek">
      <img src="../../../static/wangxinyang/logo.png" alt="">
      <div id="s_div1">
        <div>
          <input id="input01" @input="aa($event)" type="text">
          <router-link id="tt" to="/sousuo"></router-link>
          <router-link id="grzx" :to="state==0?'/H03dr':'/grzx'">个人中心</router-link>
          <router-link id="gg" to="/gwc">购物车</router-link>
          <!--<router-link to="/grzx">购物车</router-link>-->
          <!--<a href="###"></a>-->
          <a href="###">{{xiaoxi}}</a>
        </div>
        <div>
          <a href="###">热门：</a>
          <a href="###">奇异果</a>
          <a href="###">牛排</a>
          <a href="###">山竹</a>
          <a href="###">牛油果</a>
        </div>
      </div>
    </div>
</template>

<script>
  import Bus from '../../assets/bus'
    export default {
        name: "seek",
      data(){
        return{
          tt:'###',
          state:0,
          xiaoxi:0,
        }
      },

      methods :{

          gg(){
            localStorage.xinxi = 0;
          },
          aa(v){
             if($(v.target).val() !== '' ){
               this.tt = $(v.target).val();
             }
          },
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

console.log(document.cookie)

        localStorage.xinxi = 0;

        Bus.$on('xx',function (n) {
          this.xiaoxi = n ;
        }.bind(this))




        this.state = this.getValueByKey("state")

        Bus.$on('aa',function (n) {
          this.state = n ;
        }.bind(this))


        Bus.$on('bb',function (n) {
          this.state = n ;
        }.bind(this))
        Bus.$on('cc',function (n) {
          this.state = n ;
        }.bind(this))

        $('#tt').click(function () {
          if($('#input01').val() === '' ){
                alert('内容不能为空')
              }

          Bus.$emit('tt',$('#input01').val())

          localStorage.str = $('#input01').val();

        })
        $('#grzx').click(function () {
          Bus.$emit('change',8)
        })


      }
    }
</script>

<style scoped>
  #seek{
    width: 1280px;
    height: 105px;
    padding-top: 25px;
    margin: 0 auto;
    position: relative;

  }
  #seek>img{
    display: block;
    position: absolute;
    left: 0;

  }
  #s_div1{
    width: 810px;
    position: absolute;
    right: 0;
    padding-top: 25px;
    height: 80px;
  }

  #s_div1>div>input{
    width: 458px;
    position: absolute;
    left: 0;
    height: 36px;
    border: 2px solid #4b943d;
    border-right: 40px solid #4b943d;
  }
  #s_div1>div:nth-of-type(1)>a:nth-of-type(1) {
    display: block;
    position: absolute;
    left: 470px;
    background: url("../../../static/wangxinyang/shouye02.png") 0px -40px no-repeat;
    width: 20px;
    top: 35px;
    height: 20px;
  }
  #s_div1>div:nth-of-type(1)>a:nth-of-type(2) {
    display: block;
    position: absolute;
    right: 145px;
    padding: 10px 20px;
    /*padding-left: 40px;*/
    border: 1px solid #e5e5e5;
    background: url("../../../static/wangxinyang/shouye02.png") 20px -60px padding-box no-repeat content-box;
    width: 83px;
    font-size: 14px;
    color: #707070;
    text-indent: 25px;
    height: 18px;
  }
  #s_div1>div:nth-of-type(1)>a:nth-of-type(3) {
    display: block;
    position: absolute;
    right: 0px;
    padding: 10px 20px;
    /*padding-left: 40px;*/
    border: 1px solid #e5e5e5;
    background: url("../../../static/wangxinyang/shouye02.png") 0px -90px content-box no-repeat content-box;
    width: 83px;
    font-size: 14px;
    color: #707070;
    text-indent: 30px;
    height: 18px;
  }
  #s_div1>div:nth-of-type(1)>a:nth-of-type(4) {
    display: block;
    position: absolute;
    right: 60px;
    top: 15px;
    /*padding: 10px 20px;*/
    /*padding-left: 40px;*/
    /*border: 1px solid #e5e5e5;*/
    background: url("../../../static/wangxinyang/shouye02.png") 0px -110px content-box no-repeat content-box;
    width: 25px;
    font-size: 14px;
    color: #fff;
    text-align: center;
    line-height: 22px;
    height: 25px;

  }
  #s_div1>div:nth-of-type(2) {
    position: absolute;
    top: 65px;
  }
  #s_div1>div:nth-of-type(2)>a {
   float: left;
    font-size: 14px;
    color: #707070;
    text-align: center;
    line-height: 22px;
    padding: 0 10px;
    height: 25px;
  }
  #s_div1>div:nth-of-type(2)>a:nth-of-type(1) {
    padding: 0 ;
  }
</style>
