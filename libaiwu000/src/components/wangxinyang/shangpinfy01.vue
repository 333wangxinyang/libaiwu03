<template>
  <div id="tc">
    <div id="kk">
      <img src="../../../static/wangxinyang/sskong.png" alt="">
    </div>
    <weizhi></weizhi>
    <div id="t_div2">
      <span>排序：</span>
      <span class="span1">销量</span>
      <span class="span1">价格
        <img :src="src1?'../../../static/wangxinyang/ssj03.png':'../../../static/wangxinyang/ssj01.png'" alt="">
        <img :src="src2?'../../../static/wangxinyang/xsj03.png':'../../../static/wangxinyang/xsj01.png'" alt=""></span>
      <span class="span1">评分最高</span>


      <span class="span2">次日达</span>
      <span class="span2">全国</span>
      <span>筛选：</span>
    </div>
    <div id="t_div3">
      <ul v-for="(aa,index) in arr" v-if="aa.bol">
        <li v-for="(bb,index01) in aa.arr1">
          <a href="###" @click="spxq(bb.id)" >
            <img :src="bb.src" alt="">
            <p>{{bb.name}}</p>
            <p>{{bb.spgg}}</p>
            <span>￥{{bb.xj}}</span>
            <span>￥{{bb.yj}}</span>
            <a  href="###"></a>
            <a class="gwc" @click="gwc(bb.id)" href="###"></a>
          </a>
        </li>
      </ul>


    </div>
    <div class="box">
      <div id="pagination2" class="page fl"></div>
    </div>
  </div>

</template>

<script>
  import swiper from '@/components/wangxinyang/swiper'
  import remai from '@/components/wangxinyang/remai'
  import weizhi from '@/components/wangxinyang/weizhi'
  import Bus from '../../assets/bus'


  export default {
    name: "shangpinfy01",
    components:{
      swiper:swiper,
      remai:remai,
      weizhi:weizhi



    },
    data(){
      return{
        src1:true,
        src2:false,
        arr:[
          // {bol:true,arr1:[
          //     {name:'新西兰佳沛黄金奇异果',src:'../../../static/wangxinyang/sg01.png',jg:'28.80',guige:'6个装'},
          //     {name:'新西兰佳沛黄金奇异果',src:'../../../static/wangxinyang/sg02.png',jg:'28.80',guige:'6个装'},
          //     {name:'新西兰佳沛黄金奇异果',src:'../../../static/wangxinyang/sg03.png',jg:'28.80',guige:'6个装'},
          //     {name:'新西兰佳沛黄金奇异果',src:'../../../static/wangxinyang/sg04.png',jg:'28.80',guige:'6个装'},
          //     {name:'新西兰佳沛黄金奇异果',src:'../../../static/wangxinyang/sg01.png',jg:'28.80',guige:'6个装'},
          //     {name:'新西兰佳沛黄金奇异果',src:'../../../static/wangxinyang/sg02.png',jg:'28.80',guige:'6个装'},
          //     {name:'新西兰佳沛黄金奇异果',src:'../../../static/wangxinyang/sg03.png',jg:'28.80',guige:'6个装'},
          //     {name:'新西兰佳沛黄金奇异果',src:'../../../static/wangxinyang/sg04.png',jg:'28.80',guige:'6个装'},
          //     {name:'新西兰佳沛黄金奇异果',src:'../../../static/wangxinyang/sg01.png',jg:'28.80',guige:'6个装'},
          //     {name:'新西兰佳沛黄金奇异果',src:'../../../static/wangxinyang/sg02.png',jg:'28.80',guige:'6个装'},
          //     {name:'新西兰佳沛黄金奇异果',src:'../../../static/wangxinyang/sg03.png',jg:'28.80',guige:'6个装'},
          //     {name:'新西兰佳沛黄金奇异果',src:'../../../static/wangxinyang/sg04.png',jg:'28.80',guige:'6个装'},
          //
          //   ]},
          // {bol:false,arr1:[
          //     {name:'新西兰佳沛黄金奇异果',src:'../../../static/wangxinyang/sg01.png',jg:'28.80',guige:'6个装'},
          //     {name:'新西兰佳沛黄金奇异果',src:'../../../static/wangxinyang/sg02.png',jg:'28.80',guige:'6个装'},
          //     {name:'新西兰佳沛黄金奇异果',src:'../../../static/wangxinyang/sg03.png',jg:'28.80',guige:'6个装'},
          //     {name:'新西兰佳沛黄金奇异果',src:'../../../static/wangxinyang/sg04.png',jg:'28.80',guige:'6个装'},
          //     {name:'新西兰佳沛黄金奇异果',src:'../../../static/wangxinyang/sg01.png',jg:'28.80',guige:'6个装'},
          //     {name:'新西兰佳沛黄金奇异果',src:'../../../static/wangxinyang/sg02.png',jg:'28.80',guige:'6个装'},
          //     {name:'新西兰佳沛黄金奇异果',src:'../../../static/wangxinyang/sg03.png',jg:'28.80',guige:'6个装'},
          //     {name:'新西兰佳沛黄金奇异果',src:'../../../static/wangxinyang/sg04.png',jg:'28.80',guige:'6个装'},
          //     {name:'新西兰佳沛黄金奇异果',src:'../../../static/wangxinyang/sg01.png',jg:'28.80',guige:'6个装'},
          //     {name:'新西兰佳沛黄金奇异果',src:'../../../static/wangxinyang/sg02.png',jg:'28.80',guige:'6个装'},
          //     {name:'新西兰佳沛黄金奇异果',src:'../../../static/wangxinyang/sg03.png',jg:'28.80',guige:'6个装'},
          //     {name:'新西兰佳沛黄金奇异果',src:'../../../static/wangxinyang/sg04.png',jg:'28.80',guige:'6个装'},
          //   ]},
          // {bol:false,arr1:[
          //     {name:'新西兰佳沛黄金奇异果',src:'../../../static/wangxinyang/sg01.png',jg:'28.80',guige:'6个装'},
          //     {name:'新西兰佳沛黄金奇异果',src:'../../../static/wangxinyang/sg02.png',jg:'28.80',guige:'6个装'},
          //     {name:'新西兰佳沛黄金奇异果',src:'../../../static/wangxinyang/sg03.png',jg:'28.80',guige:'6个装'},
          //     {name:'新西兰佳沛黄金奇异果',src:'../../../static/wangxinyang/sg04.png',jg:'28.80',guige:'6个装'},
          //     {name:'新西兰佳沛黄金奇异果',src:'../../../static/wangxinyang/sg01.png',jg:'28.80',guige:'6个装'},
          //     {name:'新西兰佳沛黄金奇异果',src:'../../../static/wangxinyang/sg02.png',jg:'28.80',guige:'6个装'},
          //
          //   ]},
        ],
      }
    },
methods:{
     spxq(id){
       this.$router.push({path:'X09',query:{id:id}});
       localStorage.id1 = id;


     }





},


    created(){
      //在vue实例创建完成之后执行
      console.log('created创建之前')



    },
    mounted(){


      var val1 = localStorage.str;
      Bus.$on("tt",function (val) {

        axios.get('/api/php/hzhxqw/seek.php?type=1&str='+val).then(function (res) {

          this.arr = [];
          var obj = { bol:true,arr1:[]};

          for(var i in res.data){

            if(obj.arr1.length === 8){

              this.arr.push(obj);
              obj = { bol:false,arr1:[]};
            }else {
              obj.arr1.push(res.data[i])

            }
            if(i == res.data.length-1){
              this.arr.push(obj);
            }
          }


          var ys = this.arr.length;
          //  分页
          $("#pagination2").pagination({
            currentPage: 1,
            totalPage: ys,
            isShow: false,
            count: 5,
            prevPageText: "<",
            nextPageText: ">",
            callback: function(current) {
              // alert(current);
              // console.log(this.arr)
              for(var i in this.arr){
                this.arr[i].bol = false;
              }
              //
              this.arr[current-1].bol = true

            }.bind(this)
          });

          console.log(this.arr)
        }.bind(this));
      }.bind(this))
      axios.get('/api/php/hzhxqw/seek.php?type=1&str='+val1).then(function (res) {

          this.arr = [];
          var obj = { bol:true,arr1:[]};

          for(var i in res.data){

            if(obj.arr1.length === 8){

              this.arr.push(obj);
              obj = { bol:false,arr1:[]};
            }else {
              obj.arr1.push(res.data[i])

            }
            if(i == res.data.length-1){
              this.arr.push(obj);
            }
          }


          var ys = this.arr.length;
          //  分页
          $("#pagination2").pagination({
            currentPage: 1,
            totalPage: ys,
            isShow: false,
            count: 5,
            prevPageText: "<",
            nextPageText: ">",
            callback: function(current) {
              // alert(current);
              // console.log(this.arr)
              for(var i in this.arr){
                this.arr[i].bol = false;
              }
              //
              this.arr[current-1].bol = true

            }.bind(this)
          });

          console.log(this.arr)
        }.bind(this));


      // }.bind(this))






      $('#t_div1>a').click(function () {
        $('#t_div1>a').css({
          'background-color': '#fff',
          'color': '#b2b2b2',
        })
        $(this).css({
          'background-color': '#498e3d',
          'color': '#fff',
        })

      })
      $('#t_div2>.span1').click(function () {
        $('#t_div2>.span1').css({

          'border': '2px solid #e7e7e7',
          'color': ' #333333',
        })
        $(this).css({
          'border': '2px solid #498e3d',
          'color': '#498e3d',
        })

      })
      $('#t_div2>.span2').click(function () {
        $('#t_div2>.span2').css({

          'border': '2px solid #e7e7e7',
          'color': ' #333333',
        })
        $(this).css({
          'border': '2px solid #498e3d',
          'color': '#498e3d',
        })

      })
      $('#t_div2>span>img:nth-of-type(1)').click(function () {
        this.src1 = true;
        this.src2 = false;
      }.bind(this))
      $('#t_div2>span>img:nth-of-type(2)').click(function () {
        this.src2 = true;
        this.src1 = false;
      }.bind(this))



    }
  }
</script>

<style scoped>
  #tc{
    width: 1280px;
    margin: 0 auto;
    position: relative;
  }
  #kk{
    width: 1280px;
    position: absolute;
    z-index: 5;
    top: 0;
    left: 0;
    display: none;
  }

  body {
    font-family: "微软雅黑";
    /*background: #eee;*/
  }

  button {
    display: inline-block;
    padding: 6px 12px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    border: 1px solid transparent;
    border-radius: 4px;
    border-color: #498e3d;
    color: #fff;
    background-color: #498e3d;
    margin: 20px 20px 0 0;
  }

  .box {
    width: 1280px;
    margin: 0px auto ;
    height: 34px;
    /*position: relative;*/
  }

  .page {
    width: 1280px;

  }
  .info {
    width: 200px;
    height: 34px;
    line-height: 34px;
  }

  .fl {
    float: left;
  }
  #box .ui-pagination-container .ui-pagination-page-item.active {
    background: #498e3d !important;
    border-color: #498e3d !important;
    color: #fff;
    cursor: default;
  }


  #t_div2{
    width: 1258px;
    margin: 0 auto;
    padding: 22px 0px 22px 22px;
    height: 25px ;
  }
  #t_div2>span{
    /*float: right;*/
    margin-left: 35px;
    line-height: 23px;
    font-size: 18px;
    border: 2px solid #e7e7e7;
    color: #333333;
    padding: 0 15px;
  }
  #t_div2>span:nth-of-type(1){
    border: 0 solid #e7e7e7;
  }
  #t_div2>span:nth-of-type(2){
    border: 2px solid #498e3d;
    color: #498e3d;
  }
  #t_div2>span:nth-of-type(3){
    position: relative;
  }
  #t_div2>span:nth-of-type(n+5){
    float: right;
  }
  #t_div2>span:nth-of-type(7){
    border: 0 solid #e7e7e7;
  }
  #t_div2>span:nth-of-type(3)>img:nth-of-type(1){
    position: absolute;
    top: 5px;
    right: 15px;
  }
  #t_div3{
    width: 1280px;
    margin: 0 auto;

  }
  #t_div3>ul{
    overflow: hidden;
  }
  #t_div3>ul>li{
    width: 303px;
    height: 428px;
    border: 1px solid #ececec;
    background: #FFF;
    margin: 0 20px 20px 0;
    float: left;
    overflow: hidden;
    position: relative;
  }
  #t_div3>ul>li:nth-of-type(4n){
    margin: 0 0px 20px 0;
  }
  #t_div3>ul>li>a{
    width: 303px;
    height: 428px;
    display: block;
    /*border: 1px solid #ececec;*/
    /*background: #FFF;*/
    position: relative;
  }
  #t_div3>ul>li>a>img{
    position: absolute;
    /*left: 40px;*/
    /*top: 30px;*/
  }
  #t_div3>ul>li>a>p:nth-of-type(1){
    font-size: 18px;
    position: absolute;
    left: 20px;
    top: 315px;
    width: 100%;
    color: #333333;
  }
  #t_div3>ul>li>a>p:nth-of-type(2){
    font-size: 18px;
    position: absolute;

    top: 345px;
    left: 20px;

    color: #838383;
  }
  #t_div3>ul>li>a>span:nth-of-type(1){
    font-size: 20px;
    position: absolute;
    /*text-align: center;*/
    bottom: 30px;
    left: 20px;
    color: #f08200;
  }
  #t_div3>ul>li>a>span:nth-of-type(2){
    font-size: 16px;
    position: absolute;
    bottom: 30px;
    left: 125px;
    color: #7a7a7a;
    text-decoration:line-through;
  }
  #t_div3>ul>li>a>a{
    display: block;
    height: 30px;
    width: 37px;
    position: absolute;
    bottom: 30px;
    right: 20px;

    background: url("../../../static/wangxinyang/shouye02.png") 0px -500px no-repeat;
  }
  #t_div3>ul>li>a>a:nth-of-type(1) {
    display: none;
  }
  #t_div3>ul>li>a>a:nth-of-type(2):hover {

    animation-name:shake;
    animation-duration:1s;
    /*animation-iteration-count:infinite;*/
  }
</style>
