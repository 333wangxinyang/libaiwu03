<template>
    <div class="parent">
      <div class="nav1">
        <p>我的积分</p>
      </div>
      <div class="jifen">
        <span>当前积分 : </span>
        <span>240分</span>
      </div>
      <div class="xiangqing" v-for="item in data">
        <span>{{item.span1}}</span>
        <span>{{item.span2}}</span>
        <span>{{item.span3}}</span>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Wodejifen",
        data(){
          return {
            data:[
              {span1:'积分日期',span2:'变动',span3:'来源'},
              {span1:'2015-04-05 16:20:10',span2:'+10',span3:'消费赠送'},
              {span1:'2015-04-05 16:20:10',span2:'+10',span3:'消费赠送'},
              {span1:'2015-04-05 16:20:10',span2:'+10',span3:'商城兑换'},
              {span1:'2015-04-05 16:20:10',span2:'+100',span3:'消费赠送'},
              {span1:'2015-04-05 16:20:10',span2:'+10',span3:'活动'},
              {span1:'2015-04-05 16:20:10',span2:'+10',span3:'消费赠送'},
              {span1:'2015-04-05 16:20:10',span2:'+99',span3:'消费赠送'},
              {span1:'2015-04-05 16:20:10',span2:'+10',span3:'商城兑换'},
              {span1:'2015-04-05 16:20:10',span2:'+20',span3:'消费赠送'},
              {span1:'2015-04-05 16:20:10',span2:'+10',span3:'商城兑换'},

            ]
          }
        },
        mounted(){
          $('.xiangqing').click(function () {
            for (var i = 0;i < $('.xiangqing').length;i++){
              $('.xiangqing').eq(i).css('background','white')
              $('.xiangqing').eq(0).css('background','#f2f2f2')
            }
            if ($(this)[0] == $('.xiangqing').eq(0)[0]){
                console.log(111)
            } else{
              $(this).css('background','#f3fff3')
            }

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
  .jifen{
    margin:20px;
    font-size: 16px;
  }
  .jifen>span:nth-of-type(2){
    color: #f78327;
  }
  .parent>div:nth-of-type(3){
    background-color: #f2f2f2;
  }
  .xiangqing{
    width: 100%;
    height: 46px;
    border-bottom: solid 1px #f6f6f6;
  }
  .xiangqing>span{
    width: 250px;
    height: 46px;
    line-height: 46px;
    text-align: center;
  }
  .xiangqing>span:nth-of-type(1){
    float: left;
  }
  .xiangqing>span:nth-of-type(2){
    float: left;
    margin-left: 200px;
  }
  .xiangqing>span:nth-of-type(3){
    float: right;
  }
</style>
