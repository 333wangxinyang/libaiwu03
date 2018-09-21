<template>
    <div id="qzy">
      <router-view/>
       <div id="qzy_div1">
         <!--<div id="g_div2">-->
           <div v-for="(aa,index) in arr">
             <p>
               <span>{{aa.spname}}</span>
               <span>规格</span>
               <span>单价</span>
               <span>数量</span>
               <span>金额</span>

             </p>
             <ul>
               <li v-for="(bb,index1) in aa.arr0">

                 <span><img :src="bb.src" alt=""></span>
                 <span>{{bb.name}}</span>
                 <span>{{bb.spgg}}</span>
                 <span>￥{{bb.xj}}</span>
                 <span><button>-</button><span>{{bb.spsl}}</span><button>+</button></span>
                 <span>￥{{(bb.xj*bb.spsl).toFixed(1)}}</span>

               </li>
             </ul>
             <p>
               <span>￥{{arr[index].zj-0 + 5}}</span>
               <span>商品合计 </span>
               <span>￥{{arr[index].zj}}</span>
               <span>商品金额 </span>
               <span>￥5.0</span>
               <span>运费</span>
             </p>
             <div class="fp">
               <p>开票信息</p>
               <p>

                 <span></span>
                 <span>不需要</span>
                 <span></span>
                 <span>个人</span>
                 <span></span>
                 <span>单位</span>
                 <img  src="../../../static/wangxinyang/yuanquan.png" alt="">
                 <img src="../../../static/wangxinyang/yuanquan.png" alt="">
                 <img src="../../../static/wangxinyang/yuanquan.png" alt="">
               </p>
               <p>
                 <span>发票抬头：</span>
                 <input type="text" disabled="disabled">
                 <span>*</span>
                 <span>请填写后认真核对发票信息</span>
               </p>
               <p>添加订单备注</p>
               <input type="text" placeholder="限45个字，请填写有关商品、支付、发票等信息">
             </div>

           </div>

       </div>
      <div id="qzy_div2" >
         <p>次日达·礼拜五专享 </p>
         <p>
           <span >选择送达时间：   2016年9月18日{{time}} </span>
           <span id="dianji"> <img src="../../../static/wangxinyang/rili.png" alt="">点击修改</span>
         </p>
         <div style="display: none">
           <span>取消</span>
           <span>确认</span>
<table  cellspacing="0" cellpadding="10">
  <tr>
    <td>10:00-13:00</td>
    <td>11:00-14:00</td>
    <td>12:00-15:00</td>
    <td>13:00-16:00</td>
    <td>14:00-17:00</td>
  </tr>
  <tr>
    <td>15:00-18:00</td>
    <td>16:00-19:00</td>
    <td>17:00-20:00</td>
    <td>18:00-21:00</td>
    <td>19:00-22:00</td>
  </tr>
</table>
         </div>
      </div>
      <div id="qzy_div3" >
        <span>实付金额：</span>
        <span>￥2977</span>
        <span>订单完成后可获得积分：</span>
        <span>300积分</span>
        <router-link to="/X07" id="tijiao">提交订单</router-link>
      </div>
    </div>
</template>

<script>
    export default {
        name: "qrddzy",
      data(){
        return{
          time:"12:00~3:00 ",

          arr:[
            {spname:'爱果果水果店',
              arr0:[
                {name:'云南蒙自石榴 8个装',guige:'8个装',dj:569,num:1,id:1,src:'../../../static/wangxinyang/gwcwp01.png'},
                {name:'云南蒙自石榴 8个装',guige:'8个装',dj:569,num:1,id:1,src:'../../../static/wangxinyang/gwcwp01.png'},
                {name:'云南蒙自石榴 8个装',guige:'8个装',dj:569,num:1,id:1,src:'../../../static/wangxinyang/gwcwp01.png'},
              ]

            },
            {spname:'爱果果水果店',
              arr0:[
                {name:'云南蒙自石榴 8个装',guige:'8个装',dj:569,num:1,id:1,src:'../../../static/wangxinyang/gwcwp01.png'},
                {name:'云南蒙自石榴 8个装',guige:'8个装',dj:569,num:1,id:1,src:'../../../static/wangxinyang/gwcwp01.png'},
                {name:'云南蒙自石榴 8个装',guige:'8个装',dj:569,num:1,id:1,src:'../../../static/wangxinyang/gwcwp01.png'},
              ]
            },
          ]


        }
      },
      methods:{

      },
      mounted(){

console.log(JSON.parse(this.$route.query.data))

        this.arr = JSON.parse(this.$route.query.data) ;
        // JSON.parse(json字符串)

        $('#tijiao').click(function () {
console.log('aaaaaaaaaaa')
            var idArr = [];
          console.log('aaaaaaaaaaa')
            for(var i in this.arr ){
              for (var k in this.arr[i].arr0){
                idArr.push(this.arr[i].arr0[k].id)
              }
            }
            var ids = JSON.stringify(idArr);
            // console.log(ids)
            axios.get('/api/php/hzhxqw/wxygwc.php?type=5&ids='+ids).then(function (res) {
              console.log(res.data);
            }.bind(this));

        }.bind(this))








        $('#qzy_div1>div>div>p:nth-of-type(2)>img:nth-of-type(1)').click(function () {
          // console.log($(this).parent().children("img"))
          $(this).parent().children("img").css({
            opacity:0,
          })
          $(this).css({
            opacity:1,
          })
          $(this).parent().parent().find("input").eq(0).attr("disabled", "disabled");
        })

          $('#qzy_div1>div>div>p:nth-of-type(2)>img:nth-of-type(n+2)').click(function () {
            // console.log($(this).parent().children("img"))
            $(this).parent().children("img").css({
              opacity:0,
            })
            $(this).css({
              opacity:1,
            })
            $(this).parent().parent().find("input").eq(0).attr("disabled", false);
          })






          var time ;
          $('td').click(function () {
            time = $(this).text()
          })

        $('#qzy_div2>div>span:nth-of-type(2)').click(function () {
          this.time = time;
          $('#qzy_div2>div').slideUp(800)
        }.bind(this))

        $('#qzy_div2>div>span:nth-of-type(1)').click(function () {
         $('#qzy_div2>div').slideUp(800)
        })
        $('#dianji').click(function () {
          $('#qzy_div2>div').slideDown(800)
        })
      }
    }
</script>

<style scoped>
  #qzy_div2>div>table{
    border: 1px solid #8c8c8c;
    position: absolute;
    top: 30px;
    left: 20px;
  }
  #qzy_div2>div>span:nth-of-type(1){
    width: 90px;
    height: 30px;
    display: block;
    position: absolute;
    background-color: #999999;
    left: 170px;
    line-height: 30px;
    text-align: center;
    top: 115px;
    color: #fff;
    border-radius: 5px;
  }
  #qzy_div2>div>span:nth-of-type(2){
    border-radius: 5px;
    width: 90px;
    height: 30px;
    display: block;
    position: absolute;
    background-color: #f08200;
    left: 290px;
    top: 115px;
    line-height: 30px;
    text-align: center;
    color: #fff;
  }
  #qzy_div2>div>table td:hover{
    color: #ff5757;
  }

  #qzy_div2>div>table td{
    text-align: center;
    width: 100px;
    height: 30px;

    background-color: #fff;
    color: #8c8c8c;
    border: 1px solid #8c8c8c;
  }

  #qzy_div2>div{
    position: relative;
    height: 170px;
    margin-left: 130px;
    margin-bottom: 20px;
    background:url("../../../static/wangxinyang/rilibeijing.png") 0 0 no-repeat;
  }
  #qzy_div3{
    height: 228px;
    border-top: 1px solid #e9e9e9;
    border-bottom: 1px solid #e9e9e9;
    position: relative;
  }
  #qzy_div3>span{
    position: absolute;
  }
  #qzy_div3>span:nth-of-type(1){
    top: 30px;
    right: 90px;
    /*color: ff5757;*/
    font-size: 18px;
  }
  #qzy_div3>span:nth-of-type(2){
    top: 30px;
    font-size: 20px;
    right: 0px;
    color: #ff5757;
  }

  #qzy_div3>span:nth-of-type(3){
    top: 82px;
    right: 90px;
    /*color: ff5757;*/
    font-size: 16px;
  }
  #qzy_div3>span:nth-of-type(4){
    top: 82px;
    font-size: 16px;
    right: 0px;
    color: #f08200;
  }
  #qzy_div3>a{
    top: 140px;
    border-radius: 5px;
    display: block;
    height: 50px;
    width: 150px;
    line-height: 50px;
    position: absolute;
    text-align: center;
    font-size: 16px;
    right: 0px;
    background: #f08200;
    color: #fff;
  }
  #qzy_div2>p:nth-of-type(1){
    height: 60px  ;
    font-size: 20px;
    line-height: 60px;
    color: #498e3d;
  }
  #qzy_div2>p:nth-of-type(2){
     height: 26px  ;
    font-size: 16px;
    line-height: 26px;
  }
  #qzy_div2>p:nth-of-type(2)>span:nth-of-type(2){
    color: #498e3d;

    padding-left: 20px;
  }

  #qzy_div1>div>div>p:nth-of-type(4){
    height: 60px;
   font-size: 20px;
    line-height: 60px;
    color: #666666;
  }
  #qzy_div1>div>div>input{
    height: 35px;
    width: 630px;
    font-size: 14px;
   text-indent: 10px;
    color: #666666;
    margin-bottom: 20px;
  }
  #qzy_div1>div>div>p:nth-of-type(3)>input{
   height: 35px;
    width: 370px;
  }
  #qzy_div1>div>div>p:nth-of-type(3)>span:nth-of-type(2){
   color: #f08200;
  }
  #qzy_div1>div>div>p:nth-of-type(3){
    position: relative;
    font-size: 14px;
    height: 35px;
    line-height: 35px;
    color: #666666;
    padding: 20px 0 ;
    border-bottom: 1px solid #e9e9e9;
  }
  #qzy_div1>div>div>p:nth-of-type(1){
    height: 60px;
    font-size: 20px;
    line-height: 60px;
    border-top: 1px solid #e9e9e9;
    color: #666666;
  }
  #qzy_div1>div>div>p:nth-of-type(2){
    position: relative;
    font-size: 14px;
    height: 16px;
    line-height: 16px;
    color: #666666;
  }
  #qzy_div1>div>div>p:nth-of-type(2)>span:nth-of-type(2n+1){
    display: inline-block;
    width: 14px;
    height: 14px;
    border: 1px solid #666666;
    border-radius: 50%;
   position: absolute;
  }
  #qzy_div1>div>div>p:nth-of-type(2)>span:nth-of-type(3){
    left: 80px;
  }
  #qzy_div1>div>div>p:nth-of-type(2)>span:nth-of-type(5){
    left: 140px;
  }
  #qzy_div1>div>div>p:nth-of-type(2)>span:nth-of-type(2n){

    margin-left: 30px;
  }
  #qzy_div1>div>div>p:nth-of-type(2)>img{
    position: absolute;
    width: 16px;
    height: 16px;
    z-index: 2;
    opacity: 0;
  }
  #qzy_div1>div>div>p:nth-of-type(2)>img:nth-of-type(1){
    left: 0px;
    opacity: 1;
  }
  #qzy_div1>div>div>p:nth-of-type(2)>img:nth-of-type(2){
    left: 80px;
  }
  #qzy_div1>div>div>p:nth-of-type(2)>img:nth-of-type(3){
    left: 140px;

  }

  #qzy{
    width: 1280px;
    margin: 0 auto;
  }
  #qzy_div1>div>div{
    border-bottom: 1px solid #e9e9e9;
    padding-bottom: 20px;
  }
  #qzy_div1>div>p:nth-of-type(1){
    height: 20px;
    padding: 15px 0;
    background-color: #f2f2f2;
    position: relative;
    color: #333333;
    font-size: 18px;
    line-height: 20px;
  }
  #qzy_div1>div>p:nth-of-type(2){
    height: 20px;
    padding: 30px ;
    /*background-color: #f2f2f2;*/
    border-bottom: 1px solid #e9e9e9;
    position: relative;
    color: #333333;
    font-size: 20px;
    line-height: 20px;
  }
  #qzy_div1>div>p:nth-of-type(2)>span{
    float: right;
  }
  #qzy_div1>div>p:nth-of-type(2)>span:nth-of-type(2n+1){
    float: right;
    color: #ff5757;
    font-size: 24px;
    padding: 0  20px;
  }




  #qzy_div1>div>p:nth-of-type(1)>span:nth-of-type(1){
    position: absolute;
    left: 60px;
  }
  #qzy_div1>div>p:nth-of-type(1)>span:nth-of-type(2){
    position: absolute;
    left: 470px;
  }
  #qzy_div1>div>p:nth-of-type(1)>span:nth-of-type(3){
    position: absolute;
    left: 650px;
  }
  #qzy_div1>div>p:nth-of-type(1)>span:nth-of-type(4){
    position: absolute;
    left: 830px;
  }
  #qzy_div1>div>p:nth-of-type(1)>span:nth-of-type(5){
    position: absolute;
    left: 1010px;
  }


  #qzy_div1>div>ul>li{
    height: 120px;
    border-bottom: 1px solid #e9e9e9;
    position: relative;
    color: #666666;
    font-size: 18px;

  }



  #qzy_div1>div>ul>li>span:nth-of-type(1){
    height: 80px;
    width: 80px;
    display: block;
    position: absolute;
    border: 1px solid #d3d3d3;
    top:20px ;
    left: 57px;
  }
  #qzy_div1>div>ul>li>span:nth-of-type(1)>img{
    width: 100% ;
    height: 100% ;
  }
  #qzy_div1>div>ul>li>span:nth-of-type(2){
    position: absolute;
    top:52px ;
    left: 156px;
  }
  #qzy_div1>div>ul>li>span:nth-of-type(3){
    position: absolute;
    top:52px ;
    left: 470px;
  }
  #qzy_div1>div>ul>li>span:nth-of-type(4){
    position: absolute;
    top:52px ;
    left: 644px;
  }
  #qzy_div1>div>ul>li>span:nth-of-type(5){
    position: absolute;
    top:52px ;
    border: 1px solid #d3d3d3;
    left: 795px;
  }
  #qzy_div1>div>ul>li>span:nth-of-type(5)>button{
    width: 28px;
    font-size: 18px;
    border: 1px solid #d3d3d3;
    height:28px ;

  }
  #qzy_div1>div>ul>li>span:nth-of-type(5)>span{

    line-height: 26px;
    padding:  0 20px;

  }

  #qzy_div1>div>ul>li>span:nth-of-type(6){
    position: absolute;
    top:52px ;
    left: 1005px;
  }

</style>
