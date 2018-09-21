<template>
    <div id="gwc">
      <div id="g_div1" :style="arr.length !== 0 ? 'display: none':'display: inline-block'" >
        <img   src="../../../static/wangxinyang/gwckk.png" alt="">
        <span>您的购物车是空的</span>
        <router-link to="/">去首页看看</router-link>
      </div>
      <p>购物车</p>
     <div id="g_div2">
        <div v-for="(aa,index) in arr">
          <p>
            <span></span>
            <img @click="qx(index,$event)"  src="../../../static/wangxinyang/gwcxuanzhong.png" alt="">
            <span>{{aa.spname}}</span>
            <span>规格</span>
            <span>单价</span>
            <span>数量</span>
            <span>金额</span>
            <span>操作</span>
          </p>
          <ul>
            <li v-for="(bb,index1) in aa.arr0">
              <span></span>
              <img @click="gx(index,index1)" :style="bb.bol?'opacity:1':'opacity:0'" src="../../../static/wangxinyang/gwcxuanzhong.png" alt="">
              <span><img :src="bb.src" alt=""></span>
              <span>{{bb.name}}</span>
              <span>{{bb.spgg}}</span>
              <span>￥{{bb.xj}}</span>
              <span><button @click="jian(bb.id)">-</button><span>{{bb.spsl}}</span><button @click="jia(bb.id)">+</button></span>
              <span>￥{{(bb.xj*bb.spsl).toFixed(1)}}</span>
              <!--n=num.toFixed(2)-->
              <span @click="sc(bb.id)">删除</span>
            </li>
          </ul>
          <p>
            <span>￥{{arr1[index].zj}}</span>
            <span>商品金额 </span>
          </p>
        </div>

     </div>
      <div id="g_div3">
        <span @click="quanxuan">全选</span>
        <span @click="plsc">批量删除</span>
        <span>商品总计：</span>
        <span>￥{{zz}}</span>
        <router-link  :to="{path: '/qrddzy', query:{data:JSON.stringify(arr1)}}"  >立即购买</router-link>
      </div>
      <!--{path: '/qrddzy', quer: {data:555}}-->
    </div>
</template>

<script>

  import  axios from  'axios'
    export default {
        name: "gwc",
      data(){
          return{
            zz:0,
            bol01:true,
            bol02:true,
            arr1:[],
            arr:[
              // {spname:'爱果果水果店',
              //   arr0:[
              //     {bol:false,name:'云南蒙自石榴 8个装',spgg:'8个装',xj:569,spsl:1,id:1,src:'../../../static/wangxinyang/gwcwp01.png'},
              //     {bol:false,name:'云南蒙自石榴 8个装',spgg:'8个装',xj:569,spsl:1,id:1,src:'../../../static/wangxinyang/gwcwp01.png'},
              //     {bol:true,name:'云南蒙自石榴 8个装',spgg:'8个装',xj:569,spsl:1,id:1,src:'../../../static/wangxinyang/gwcwp01.png'},
              //   ]
              //
              // },
              // {spname:'爱果果水果店',
              //   arr0:[
              //     {bol:false,name:'云南蒙自石榴 8个装',spgg:'8个装',xj:569,spsl:1,id:1,src:'../../../static/wangxinyang/gwcwp01.png'},
              //     {bol:false,name:'云南蒙自石榴 8个装',spgg:'8个装',xj:569,spsl:1,id:1,src:'../../../static/wangxinyang/gwcwp01.png'},
              //     {bol:false,name:'云南蒙自石榴 8个装',spgg:'8个装',xj:569,spsl:1,id:1,src:'../../../static/wangxinyang/gwcwp01.png'},
              //   ]
              // },
            ]


          }
      },
      methods:{
        jian(id){
          axios.get('/api/php/hzhxqw/wxygwc.php?type=3&id='+id).then(function (res) {
            console.log(res.data) ;
            this.bb(res)
          }.bind(this));


        },
        jia(id){
          axios.get('/api/php/hzhxqw/wxygwc.php?type=2&id='+id).then(function (res) {
            console.log(res.data) ;

            this.bb(res)


          }.bind(this));


        },
        sc(id){
          axios.get('/api/php/hzhxqw/wxygwc.php?type=4&id='+id).then(function (res) {
            console.log(res.data) ;
            this.bb(res)
          }.bind(this));

        },
        quanxuan(){
          if(this.bol02) {
            for (var i in this.arr) {
              for (var k in this.arr[i].arr0) {
                this.arr[i].arr0[k].bol = true;

              }

            }

          }else {
            for (var i in this.arr) {
              for (var k in this.arr[i].arr0) {
                this.arr[i].arr0[k].bol = false;
              }
            }
          }
          this.bol02 = !this.bol02;

          this.aa()
        },
        plsc(){
          var idArr = [];

          for(var i in this.arr1 ){
            for (var k in this.arr1[i].arr0){
              idArr.push(this.arr1[i].arr0[k].id)
            }
          }
          var ids = JSON.stringify(idArr);
          console.log(ids)
          axios.get('/api/php/hzhxqw/wxygwc.php?type=5&ids='+ids).then(function (res) {
            console.log(res.data);
            this.bb(res)
          }.bind(this));

        },




          aa(){
            this.arr1 = [];
            for(var i in this.arr){

              var  obj = {spname:this.arr[i].spname,arr0:[],zj:0, }

              for(var k in this.arr[i].arr0){

                if(this.arr[i].arr0[k].bol ===true){
                 var  aa = obj.zj + this.arr[i].arr0[k].xj*this.arr[i].arr0[k].spsl ;
                  obj.zj = aa
                  obj.arr0.push(this.arr[i].arr0[k])
                }
              }
              this.arr1.push(obj)
            }

            this.zz = 0;
            for(var i in this.arr1){

              this.arr1[i].zj = this.arr1[i].zj.toFixed(1)

              this.zz = (this.arr1[i].zj-0) +(this.zz-0);


            }
            this.zz = this.zz.toFixed(1)
          },

        //处理返回数据
        bb(res){
          for(var i in res.data){
            res.data[i].bol = true;
          }

          this.arr = [];
          for(var i in res.data){

            if(this.arr.length === 0){
              var  obj = {spname:res.data[i].shop,arr0:[]};
              obj.arr0.push(res.data[i]);
              this.arr.push(obj)
            }else {
              var bol = true;
              for(var k in this.arr){
                if(res.data[i].shop === this.arr[k].spname){
                  this.arr[k].arr0.push(res.data[i]);
                  bol =false;
                  break;
                }
              }
              if(bol){
                var  obj = {spname:res.data[i].shop,arr0:[]};
                obj.arr0.push(res.data[i]);
                this.arr.push(obj)
              }
            }
          }

          this.aa();



        },




        gx(index,index1){
          this.arr[index].arr0[index1].bol = !this.arr[index].arr0[index1].bol;
          this.aa();
        },
        qx(index,v){
          if(this.bol01){
            for(var i in this.arr[index].arr0 ){
              this.arr[index].arr0[i].bol = true;
            }
            v.target.style.opacity = '1';

          }else {
            for(var i in this.arr[index].arr0 ){
              this.arr[index].arr0[i].bol = false;
            }
            v.target.style.opacity = '0';
          }

          this.bol01 = !this.bol01;

          this.aa();
        }
      },
      mounted(){


        axios.get('/api/php/hzhxqw/wxygwc.php?type=1').then(function (res) {
          // this.bb(res)
          for(var i in res.data){
            res.data[i].bol = true;
          }

          this.arr = [];
          for(var i in res.data){

            if(this.arr.length === 0){
              var  obj = {spname:res.data[i].shop,arr0:[]};
              obj.arr0.push(res.data[i]);
              this.arr.push(obj)
            }else {
              var bol = true;
              for(var k in this.arr){
                if(res.data[i].shop === this.arr[k].spname){
                  this.arr[k].arr0.push(res.data[i]);
                  bol =false;
                  break;
                }
              }
              if(bol){
                var  obj = {spname:res.data[i].shop,arr0:[]};
                obj.arr0.push(res.data[i]);
                this.arr.push(obj)
              }
            }
          }

          this.aa();

        }.bind(this));






      },
      beforeCreate(){

        console.log('beforeCreate创建之前')




      }


    }
</script>

<style scoped>
  #g_div3{
    height: 130px;
    position: relative;
  }
  #g_div3>span:nth-of-type(1){
    position: absolute;
    font-size: 16px;
    color: #619d57;
    top: 60px;
    left: 20px;

  }
  #g_div3>span:nth-of-type(2){
    position: absolute;
    font-size: 16px;
    color: #619d57;
    top: 60px;
    left: 95px;
  }
  #g_div3>span:nth-of-type(3){
    position: absolute;
    font-size: 20px;
    color: #666666;
    bottom: 50px;
    left: 930px;
  }

  #g_div3>span:nth-of-type(4){
    position: absolute;
    font-size: 22px;
    color: #ff5757;
    bottom: 50px;
    left: 1023px;
  }
  #g_div3>a{
    position: absolute;
    font-size: 20px;
    display: block;
    height: 50px;
    width: 150px;
    line-height: 50px;
    text-align: center;
    border-radius: 5px;
    background-color: #f08200;
    color: #fff;
    bottom: 40px;
    right: 0px;
  }
#gwc{
  width: 1280px;
  margin: 0 auto;
}
#gwc>p{
  width: 1280px;
  height:30px ;
  line-height:30px ;
  text-indent:40px ;
  color: #666666;
  padding:   20px 0;
  font-size:20px ;
  background: url("../../../static/wangxinyang/shouye02.png") 0 -500px content-box no-repeat content-box;
}
#g_div2>div>p:nth-of-type(1){
  height: 20px;
  padding: 15px 0;
  background-color: #f2f2f2;
  position: relative;
  color: #333333;
  font-size: 18px;
  line-height: 20px;
}
#g_div2>div>p:nth-of-type(2){
  height: 20px;
  padding: 30px ;
  /*background-color: #f2f2f2;*/
  border-bottom: 1px solid #e9e9e9;
  position: relative;
  color: #333333;
  font-size: 20px;
  line-height: 20px;
}
#g_div2>div>p:nth-of-type(2)>span{
  float: right;
}
#g_div2>div>p:nth-of-type(2)>span:nth-of-type(1){
  float: right;
  color: #ff5757;
  font-size: 24px;
  padding-left: 20px;
}



#g_div2>div>p:nth-of-type(1)>span:nth-of-type(1){
  height: 18px;
  width: 18px;
  display: block;
  position: absolute;
  border: 1px solid #d3d3d3;
  top:15px ;
  left: 20px;
}
#g_div2>div>p:nth-of-type(1)>img:nth-of-type(1){
  height: 20px;
  width: 20px;
  display: block;
  position: absolute;
  top:15px ;
  left: 20px;
  opacity: 0;
}
#g_div2>div>p:nth-of-type(1)>span:nth-of-type(2){
  position: absolute;
  left: 60px;
}
#g_div2>div>p:nth-of-type(1)>span:nth-of-type(3){
  position: absolute;
  left: 470px;
}
#g_div2>div>p:nth-of-type(1)>span:nth-of-type(4){
  position: absolute;
  left: 650px;
}
#g_div2>div>p:nth-of-type(1)>span:nth-of-type(5){
  position: absolute;
  left: 830px;
}
#g_div2>div>p:nth-of-type(1)>span:nth-of-type(6){
  position: absolute;
  left: 1010px;
}

#g_div2>div>p:nth-of-type(1)>span:nth-of-type(7){
  position: absolute;
  left: 1190px;
}
#g_div2>div>ul>li{
height: 120px;
  border-bottom: 1px solid #e9e9e9;
position: relative;
  color: #666666;
  font-size: 18px;

}


#g_div2>div>ul>li>span:nth-of-type(1){
  height: 18px;
  width: 18px;
  display: block;
  position: absolute;
  border: 1px solid #d3d3d3;
  top:50px ;
  left: 20px;
}
#g_div2>div>ul>li>img:nth-of-type(1){
  height: 20px;
  width: 20px;
  position: absolute;
  top:50px ;
  left: 20px;
  /*opacity: 0;*/
}
#g_div2>div>ul>li>span:nth-of-type(2){
  height: 80px;
  width: 80px;
  display: block;
  position: absolute;
  border: 1px solid #d3d3d3;
  top:20px ;
  left: 57px;
}
#g_div2>div>ul>li>span:nth-of-type(2)>img{
  width: 100% ;
  height: 100% ;
}
#g_div2>div>ul>li>span:nth-of-type(3){
  position: absolute;
  top:52px ;
  left: 156px;
}
#g_div2>div>ul>li>span:nth-of-type(4){
  position: absolute;
  top:52px ;
  left: 470px;
}
#g_div2>div>ul>li>span:nth-of-type(5){
  position: absolute;
  top:52px ;
  left: 644px;

}
#g_div2>div>ul>li>span:nth-of-type(6){
   position: absolute;
  top:52px ;
  border: 1px solid #d3d3d3;
  left: 795px;
}
#g_div2>div>ul>li>span:nth-of-type(6)>button{
  width: 28px;
  font-size: 18px;
  border: 1px solid #d3d3d3;
  height:28px ;

}
#g_div2>div>ul>li>span:nth-of-type(6)>span{

  line-height: 26px;
  padding:  0 20px;

}

#g_div2>div>ul>li>span:nth-of-type(7){
  position: absolute;
  top:52px ;
  left: 1005px;
}
#g_div2>div>ul>li>span:nth-of-type(8){
  position: absolute;
  top:52px ;
  left: 1190px;
  color: #498e3d;
}

 #g_div1{
   /*display: none;*/
   width: 1280px;
   height: 490px;
   position: absolute;
   /*top: 100px;*/
   background: #FFF;
   z-index: 10;
 }
#g_div1>img{
 position: absolute;
  left: 500px;
  top: 173px;
}
#g_div1>span{
  position: absolute;
  font-size: 24px;
  color: #666666;
  left: 660px;
  top: 190px;
}
#g_div1>a{
  position: absolute;
  display: block;
  width:170px ;
  height:45px ;
  line-height: 45px;
  font-size: 20px;
  color: #FFF;
  background-color: #ec6a17;
  top: 247px;
  left: 660px;
  text-align: center;
  border-radius: 5px;
}

</style>
