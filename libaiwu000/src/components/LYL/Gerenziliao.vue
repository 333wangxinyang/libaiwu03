<template>
    <div class="grzl">
      <div class="grzl1">
        <p>绑定手机</p>
      </div>
      <div class="grzl2">
        <div class="grzl2_1">
          <div>
            <input type="text" placeholder="请输入手机号">
          </div>
          <div>
            <input type="text" placeholder="请输入密码（6-20位号码字符）">
          </div>
          <div>
            <input type="text" placeholder="请再次输入密码确认">
          </div>
          <div>
            <input type="text" placeholder="验证码">
          </div>
          <div>
            <input type="text" placeholder="手机验证码">
          </div>
        </div>
        <div></div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Gerenziliao"
    }
</script>

<style scoped>
    .grzl1{
      height: 57px;
      border-bottom: 1px solid #ececec;
    }
    .grzl1>p{
      line-height: 57px;
      margin-left: 20px;
      font-size: 17px;
      color: #666666;
    }
    .grzl2{
      height: 568px;
      margin: 40px;
    }
    .grzl2_1>div>input{
      height: 42px;
      width: 307px;
      font-size: 15px;
      background-color: #f9f9f9;
      border: solid #d3d3d3 1px;
      margin-bottom: 30px;
      text-indent: 13px;
    }
    .grzl2_1>div>input::-webkit-input-placeholder{
      color: #999999;
    }
    .grzl2_1>div:nth-of-type(4)>input{
      width: 113px;
    }
</style>
