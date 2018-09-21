<template>
    <div>
      <div class="grzl1">
        <p>地址管理</p>
        <button><router-link to="/tianjiadizhi">添加新地址</router-link></button>
      </div>
      <div class="content">
        <div class="content1">
          <img src="static/LYLimg/pen.png"/>
          <span>暂无收货地址，请点击</span>
          <button><router-link to="/tianjiadizhi">添加新地址</router-link></button>
        </div>
        <div class="content2">
          <table class="table">
            <tr class="tr">
              <th>收货人</th>
              <th>所在区域</th>
              <th>街道地址</th>
              <th>联系电话</th>
              <th>座机</th>
              <th>操作</th>
            </tr>
            <tr v-for="(item,index) in data">
              <th>{{item.name}}</th>
              <th>{{item.sheng}}{{item.shi}}{{item.xian}}</th>
              <th>{{item.xxdz}}</th>
              <th>{{item.phone}}</th>
              <th>{{item.gddh1}}-{{item.gddh2}}</th>
              <th>
                <span @click='xiugai($event,index)' class="xiugai">修改</span>
                <span @click='shanchu($event,index)' class="shanchu">删除</span>
              </th>
            </tr>
          </table>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Dizhiguanli",
        data(){
          return {
            data:[],
            dizhi:[],
            height:'',
          }
        },
        mounted(){

          var dizhi = this.$route.query.obj;
          this.dizhi = dizhi;
          console.log(this.dizhi)
          this.axios.get('api/PHP/hzhxqw/chaxun.php').then((response)=>{
            console.log(response.data);
            this.data=response.data;
            console.log(this.data.length)
            if (this.data.length == 0){
              $('.content1').css('display','block')
              $('.content2').css('display','none')
            } else {
              $('.content1').css('display','none')
            }
          })
          console.log($('.aa'))
          },
          methods:{
            xiugai(event,index){
              var dizhi = this.data[index]
              console.log(dizhi)
              this.$router.push({path:'/tianjiadizhi',query:{obj:dizhi,type:1}});
            },
            shanchu(event,index){
              var id = this.data[index].id
              this.axios.get('api/PHP/hzhxqw/delete.php?id='+id).then((response)=>{
                this.data = response.data;
                if (this.data.length == 0){
                  $('.content1').css('display','block')
                  $('.content2').css('display','none')
                } else {
                  $('.content1').css('display','none')
                }
              })
            }
          }
    }
</script>

<style scoped>
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
  .content{
    width: 100%;
    min-height: 548px;
    position: relative;
  }
  .content1{
    width: 334px;
    height: 50px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
  .content>div>img{
    vertical-align: middle;
  }
  .content>div>button{
    height: 30px;
    width: 90px;
    background-color: #3d8e43;
    font-size: 14px;
    color: white;
    border-radius: 5px;
    line-height: 30px;
    text-align: center;
  }
  button>a{
    color: white;
  }
  .content>div>span{
    color: #999999;
    line-height: 50px;
    margin: 0 10px;
  }
  .content2{
    width: 100%;
  }
  .table{
    /*display: block;*/
    /*height: 45px !important;*/
    margin-top: 20px;
    width: 95%;
    margin-left: 2.5%;
  }
  .table>tr{
    height: 45px;
  }
  .table>tr:nth-of-type(1){
    height: 45px;
    background-color: #f2f2f2;
  }
  .table>tr>th{
    height: 45px;
    border: 0;
  }



  .xiugai{
    display:inline-block;
    color: #3d8e43;
    line-height: 15px;
    padding-right: 3px;
    border-right: solid 2px #999999 ;
  }
  .shanchu{
    color: #3d8e43;
    padding-left: 3px;
  }
</style>
