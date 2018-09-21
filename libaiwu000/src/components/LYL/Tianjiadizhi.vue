<template>
  <div>
    <div class="nav1">
      <p>添加新地址</p>
    </div>
    <div class="body">
      <div class="body1">
        <span>*&nbsp</span>
        <span>收货人姓名 ：</span>
        <input type="text">
      </div>
      <div class="body2">
        <span>*&nbsp</span>
        <span>所在地区 :</span>

        <Sanjiliandong class="Sanjiliandong"></Sanjiliandong>
      </div>
      <div class="body3">
        <span>*</span>
        <span>详细地址:</span>
        <input type="text">
      </div>
      <div class="body4">
        <span>*</span>
        <span>联系电话:</span>
        <input type="text" maxlength="11" onkeyup="value=value.replace(/[^\d]/g,'')">
        <span>或固定电话：</span>
        <input type="text" maxlength="4" onkeyup="value=value.replace(/[^\d]/g,'')">
        <span>-</span>
        <input type="text" maxlength="6" onkeyup="value=value.replace(/[^\d]/g,'')">
      </div>
      <div class="body5">
        <input type="radio" id="aa">
        <span><label for="aa">设为常用地址</label></span><br/>
        <button  @click="tijiao">保存</button>
      </div>
    </div>
  </div>
</template>

<script>
  import Sanjiliandong from '@/components/LYL/Sanjiliandong'
    export default {
      name: "Tianjiadizhi",
      components:{
        Sanjiliandong:Sanjiliandong
      },
      data(){
        return {
          obj:[]
        }
      },
      methods:{
        tijiao(){
          var input1 = document.querySelectorAll('.body1 input')[0].value
          var input2 = document.querySelectorAll('.Sanjiliandong input')[0].value
          var input3 = document.querySelectorAll('.Sanjiliandong input')[1].value
          var input4 = document.querySelectorAll('.Sanjiliandong input')[2].value
          var input5 = document.querySelectorAll('.body3 input')[0].value
          var input6 = document.querySelectorAll('.body4 input')[0].value
          var input7 = document.querySelectorAll('.body4 input')[1].value
          var input8 = document.querySelectorAll('.body4 input')[2].value
          console.log(input2,input3,input4)
          var a = [];
          a.push(input1,input2,input3,input4,input5,input6,input7,input8);
          this.obj = a;
          console.log(this.obj)
          var obj = this.$route.query.obj;
          var type = this.$route.query.type;
          console.log(obj,type)
          if(this.obj[0] == '' || this.obj[1] == '' || this.obj[2] == '' || this.obj[3] == '' || this.obj[4] == '' || this.obj[5] == '' || this.obj[6] == '' || this.obj[7] == ''){
            alert('请补全信息')
          }else if (type == 1){
            var id = obj.id;
            console.log(id)
            var name = document.querySelectorAll('.body1 input')[0].value;
            var sheng = document.querySelectorAll('.Sanjiliandong input')[0].value;
            var shi = document.querySelectorAll('.Sanjiliandong input')[1].value;
            var xian = document.querySelectorAll('.Sanjiliandong input')[2].value;
            var xxdz = document.querySelectorAll('.body3 input')[0].value;
            var phone = document.querySelectorAll('.body4 input')[0].value;
            var gddh1 = document.querySelectorAll('.body4 input')[1].value;
            var gddh2 = document.querySelectorAll('.body4 input')[2].value;
            this.axios.get('api/PHP/hzhxqw/xiugai4.php?'+'id='+id+'&name='+name+'&sheng='+sheng+'&shi='+shi+'&xian='+xian+'&xxdz='+xxdz+'&phone='+phone+'&gddh1='+gddh1+'&gddh2='+gddh2).then((res)=>{
              console.log(res.data)
              this.$router.push({path:'/dizhiguanli',query:{obj:this.obj}});
            })
          }else {
              this.axios.get('api/PHP/hzhxqw/add5.php?'+'input1='+this.obj[0]+'&'+'input2='+this.obj[1]+'&'+'input3='+this.obj[2]+'&'+'input4='+this.obj[3]+'&'+'input5='+this.obj[4]+'&'+'input6='+this.obj[5]+'&'+'input7='+this.obj[6]+'&'+'input8='+this.obj[7]).then((res)=>{
                this.obj = res.data
                console.log(this.obj)
                this.$router.push({path:'/dizhiguanli',query:{obj:this.obj}});
              })

            }
        }
      },
      mounted(){

        var obj = this.$route.query.obj;
        var type = this.$route.query.type;
        // console.log(obj[0])
        if (type == 1){
          document.querySelectorAll('.body1 input')[0].value = obj.name;
          document.querySelectorAll('.Sanjiliandong input')[0].value = obj.sheng;
          document.querySelectorAll('.Sanjiliandong input')[1].value = obj.shi;
          document.querySelectorAll('.Sanjiliandong input')[2].value = obj.xian;
          document.querySelectorAll('.body3 input')[0].value = obj.xxdz;
          document.querySelectorAll('.body4 input')[0].value = obj.phone;
          document.querySelectorAll('.body4 input')[1].value = obj.gddh1;
          document.querySelectorAll('.body4 input')[2].value = obj.gddh2;
        }
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
  .body{
    height: 568px;
    overflow: hidden;
  }
  .body1{
    margin-left: 32px;
    margin-top: 40px;
  }
  .body1>span:nth-of-type(1){
    color: #f78327;
  }
  .body1>input{
    width: 330px;
    height: 35px;
  }
  .body2_1{
    width: 140px;
    height: 35px;
    border-radius: 5px;
    /*阴影*/
    /*box-shadow: 2px 2px 3px 2px #ccc;*/
    position: relative;
  }
  select{
    background-color: white;
    border: solid 1px #d3d3d3;
    border-radius: 0;
    outline: none;
    width: 100%;
    height: 40px;
    text-align: center;
    line-height: 40px;
    font-size: 16px;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    padding-left: 20px;
  }
  .body2_1:after{
    content: "";
    width: 14px;
    height: 8px;
    background: url('../../../static/LYLimg/xiasanjiao.png') no-repeat center;
    position: absolute;
    right: 20px;
    top: 45%;
    pointer-events: none;
  }
  .body2{
    margin-left: 48px;
    margin-top: 20px;
    line-height: 40px;
    overflow: hidden;
  }
  .body2>div{
    margin-left: 20px;
  }
  .body2>*{
    float: left;
  }
  .body2>span:nth-of-type(1){
    color: #f78327;
  }
  .body3{
    margin-left: 48px;
    margin-top: 20px;
    line-height: 40px;
  }
  .body3>span:nth-of-type(1){
    color: #f78327;
  }
  .body3>input{
    width: 455px;
    height: 35px;
    margin-left: 20px;
  }
  .body4{
    margin-left: 48px;
    margin-top: 20px;
    line-height: 40px;
  }
  .body4>span:nth-of-type(1){
    color: #f78327;
  }
  .body4>input{
    height: 40px;
  }
  .body4>input:nth-of-type(1){
    margin-left: 20px;
    width: 150px;
  }
  .body4>input:nth-of-type(2){
    width: 48px;
  }
  .body4>input:nth-of-type(3){
    width: 122px;
  }
  .body input{
    font-size: 16px;
    text-indent: 10px;
  }
  .body5>input{
    margin-left: 160px;
    margin-top: 20px;
  }
  .body5>button{
    outline: none;
    margin-left: 160px;
    margin-top: 20px;
    width: 150px;
    line-height: 50px;
    background-color: #f78327;
    font-size: 20px;
    color: white;
    border-radius: 5px;
  }
</style>
