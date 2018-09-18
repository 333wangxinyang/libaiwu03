<template>
    <div>
      <div class="nav1">
        <p>账户余额 ：<span>¥20.0</span></p>
      </div>
      <div class="money">
        <p>请选择充值金额：</p>
        <span>500元</span>
        <span>1000元</span>
        <span>2000元</span>
      </div>
      <div class="czyl">
        <p>充值有礼</p>
        <img src="../../../static/LYLimg/chengzi.png" height="191" width="357"/>
        <img src="../../../static/LYLimg/chengzi.png" height="191" width="357"/>
      </div>
      <button class="bth">立即充值</button>
    </div>
</template>

<script>
    export default {
        name: "Zhanghuyue",
        mounted(){
          $('.money span').click(function () {
            for (var i = 0;i < $('.money span').length;i++){
              $('.money span').eq(i).css({
                'border':'#d4d4d4 solid 1px',
                'background':'white'
              })
            }
            $(this).css({
              'border':'#5ba23c solid 1px',
              'background':'#f3fff3'
            })

          })
        }
    }
</script>

<style scoped>
  .nav1{
    height: 57px;
    border-bottom: 1px solid #ececec;
  }
  .nav1>p{
    line-height: 57px;
    margin-left: 20px;
    font-size: 17px;
    color: #666666;
  }
  .nav1>p>span{
    color: #f78327;
  }
  .money{
    margin: 40px;
    overflow: hidden;
  }
  .money>span{
    float: left;
    display: block;
    width: 110px;
    height: 32px;
    margin: 20px 37px 0 0;
    border: solid #d4d4d4 1px;
    line-height: 32px;
    text-align: center;
  }
  .czyl>p{
    margin-top: 40px;
    margin-bottom: 20px;
    color: #f78327;
  }
  .czyl{
    margin-left: 40px;
  }
  .czyl>img:nth-of-type(1){
    margin-right:40px;
  }
  .bth{
    width: 150px;
    height: 50px;
    margin: 40px;
    background-color: #f78327;
    font-size: 18px;
    color: white;
    margin-bottom: 82px;
  }
</style>
