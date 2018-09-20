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
            <tr>
              <th>收货人</th>
              <th>所在区域</th>
              <th>街道地址</th>
              <th>联系电话</th>
              <th>备注</th>
              <th>操作</th>
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

          }
        },
        mounted(){

          var dizhi = this.$route.query.obj;
          console.log(dizhi)

          if (typeof(dizhi) == "object"){
            var jiedao = dizhi[1] + dizhi[2] + dizhi[3]
            var zuoji = dizhi[6] + '-' + dizhi[7];
            var dizhi3 = [];
            dizhi3.push(dizhi[0],jiedao,dizhi[4],dizhi[5],zuoji)
            console.log(dizhi3)

            var content1 = document.getElementsByClassName('content1')
            var content2 = document.getElementsByClassName('content2')
            content2[0].style.display = 'block';
            console.log(content1[0])
            content1[0].style.display = 'none';
            var tr = document.createElement('tr');
            tr.style.height = '45px';
            tr.style.lineHeight = '45px';
            console.log(tr)
            for (var i = 0;i < dizhi3.length+1;i++){
              if (i == 5){
                var th = document.createElement('th');
                var span = document.createElement('span');
                var span1 = document.createElement('span');
                span.style.display = 'inline-block';
                span.style.color = '#3d8e43';
                span.innerHTML = '修改';
                span.className = 'span'
                span.style.lineHeight = '15px'
                span.style.paddingRight = '3px'
                span.style.borderRight = 'solid 2px #999999';
                span1.style.color = '#3d8e43';
                span1.innerHTML = '删除';
                span1.className = 'span1'
                span1.style.paddingLeft = '3px';
                th.appendChild(span);
                th.appendChild(span1);
                tr.appendChild(th)
              }else {
                var th = document.createElement('th');
                th.innerHTML = dizhi3[i]
                tr.appendChild(th)
              }
            }
            var table = document.getElementsByClassName('table')
            table[0].appendChild(tr)
            console.log(table[0])

            var span = document.getElementsByClassName('span')[0]
            console.log(span)
            span.onclick = function () {
              this.$router.push({path:'/tianjiadizhi',query:{obj:dizhi}});
            }.bind(this)
            console.log($('.table tr'))
            $('.span1').click(function () {
              var tr = $(this).parent().parent()[0];
              tr.remove()
              console.log(table,tr)
              console.log($('.table tr'))
              if ($('.table tr').length < 2){
                $('.table').css({
                  'display':'none'
                })
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
    height: 568px;
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
  .content2>table{
    margin-top: 20px;
    width: 95%;
    margin-left: 2.5%;
  }
  .content2>table>tr{
    height: 45px;
    background-color: #f2f2f2;
  }
  .content2>table>tr>th{
    border: 0;
  }
  .content2{
    display: none;
  }
</style>
