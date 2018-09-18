<template>
    <div class="parent">
      <div class="nav1">
        <p>我的消息</p>
      </div>
      <div class="content">
        <span>标题</span>
        <span>发送时间</span>
        <span>状态</span>
        <span>操作</span>
      </div>
      <div class="content" v-for="(item,index) in data">
        <span>{{item.span1}}</span>
        <span>{{item.span2}}{{item.span3}}{{item.span4}}{{item.span5}}{{item.span6}}{{item.span7}}</span>
        <span>{{item.bol ? '未查看' : '查看'}}</span>
        <span class="caozuo">
          <span @click="chakan(index)"><router-link to="/wodexiaoxi">查看</router-link></span>
          <span @click="shanchu($event)"><router-link to="">删除</router-link></span>
        </span>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Wodexiaoxi1",
        data(){
          return {
            a:1,
            data:[
              {span1:'您的货物已发货您的货物已发货您的货物已发货',span2:2018,span3:'年',span4:10,span5:'月',span6:1,span7:'号',bol:true},
              {span1:'您的货物已发货您的货物已发货您的货物已发货',span2:2018,span3:'年',span4:10,span5:'月',span6:2,span7:'号',bol:true},
              {span1:'您的货物已发货您的货物已发货您的货物已发货',span2:2018,span3:'年',span4:10,span5:'月',span6:3,span7:'号',bol:true},
              {span1:'您的货物已发货您的货物已发货您的货物已发货',span2:2018,span3:'年',span4:10,span5:'月',span6:4,span7:'号',bol:true},
              {span1:'您的货物已发货您的货物已发货您的货物已发货',span2:2018,span3:'年',span4:10,span5:'月',span6:5,span7:'号',bol:true},
              {span1:'您的货物已发货您的货物已发货您的货物已发货',span2:2018,span3:'年',span4:10,span5:'月',span6:6,span7:'号',bol:true},
            ],
          }
        },
        methods:{
          shanchu(even){
            even.path[3].style.display = 'none'
            console.log(even.path[3])
          },
          chakan(index){
            this.data[index].bol = false;
            console.log(this.data[index].bol)
          }
        }
    }
</script>

<style scoped>
  .parent>div:nth-of-type(2){
    background-color: #f2f2f2;
  }
  .nav1{
    height: 57px;
    border-bottom: 1px solid #ececec;
    margin-bottom: 20px;
  }
  .nav1>p{
    line-height: 57px;
    margin-left: 20px;
    font-size: 17px;
    color: #666666;
  }
  .content{
    height: 47px;
    line-height: 47px;
  }
  .content>span{
    display: inline-block;
    text-align: center;
  }
  .content>span:nth-of-type(1){
    width: 410px;
  }
  .content>span:nth-of-type(2){
    width: 260px;
  }
  .content>span:nth-of-type(3){
    width: 180px;
  }
  .content>span:nth-of-type(4){
    width: 180px;
  }
  .caozuo>span:nth-of-type(1){
    display: inline-block;
    border-right: solid #666666 2px;
    padding-right: 6px;
    line-height: 15px;
  }
  .caozuo>span>a{
    color: #59a25a;
  }
</style>
