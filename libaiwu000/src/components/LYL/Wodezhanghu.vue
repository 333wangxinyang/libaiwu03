<template>
    <div>
      <div class="grzl1">
        <p>充值卡兑换</p>
        <button> <router-link to="/Zd">查看账单</router-link></button>
      </div>
      <div class="body">
        <input type="text" onkeyup="value=value.replace(/[^\d]/g,'')" placeholder="请输入充值卡兑换码进行充值" maxlength="11"><br>
        <button @click="submit()">充值</button>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Wodezhanghu",
        methods:{
          submit(){
            var input = document.querySelectorAll('.body input')[0].value-0
            if (!(/^1[34578]\d{9}$/.test(input))){
              alert('手机格式错误')
            }else{
              this.$router.push({path:'/zhanghuyue'});
            }
          }
        }
    }
</script>

<style scoped>
  a{
    color: #ffffff;
  }
  .grzl1{
    height: 57px;
    border-bottom: 1px solid #ececec;
    position: relative;
  }
  .grzl1>p{
    display: inline;
    line-height: 57px;
    margin-left: 20px;
    font-size: 17px;
    color: #666666;
  }
  .grzl1>button{
    height: 30px;
    width: 90px;
    display: block;
    background-color: #3d8e43;
    font-size: 14px;
    color: white;
    border-radius: 5px;
    line-height: 30px;
    text-align: center;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 20px;
    margin: auto;
  }
  .body{
    height: 567px;
  }
  .body>input{
    width: 476px;
    height: 53px;
    font-size: 20px;
    text-indent: 20px;
    margin: 50px 30px;
  }
  .body>button{
    height: 50px;
    width: 150px;
    font-size: 20px;
    background-color: #f78327;
    color: white;
    border-radius:5px ;
    margin: 50px 30px;
  }
</style>
