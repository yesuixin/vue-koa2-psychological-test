<template>

<div class="tt"> 
    
<van-nav-bar title="订单页面">
</van-nav-bar>
   <!-- <el-card class="box-card">
    <div class="line-chart">
       <h2>你最近的平均得分为{{cc}}</h2>
       <span v-text="aaa(cc)"></span>
      <br/>
       
      <ul>
        <li v-for="(item,index) in dataListArr" :key="index" :class="item.number>0?'':'position-top'">
          <div class="box" :style="{height:item.number*50+10+'px'}">
            <span class="num">{{item.number}}0</span>
          </div>
        </li>
      </ul>
     
    </div>  
    </el-card> -->
   <div v-for="(item,index) in dataListArr" :key="index" >

    
     </div>
    </div>
</template>
<script >
import axios from 'axios';
import url from'@/service_config.js';
export default {
  name: 'test',
  data(){
    return {
      dataListArr:[],
        // a:[]
    }
  },
  methods:{
    aaa(cc){
      if(15<cc<30){
        return'你属于轻度焦虑状态，生活中你有时会感到焦虑，但是正常情况下你都能自我调控，不会让焦虑情绪影响自己对事物的判断和对生活的感知，你对家庭和事业有自己的掌握，不会轻易受到摆布。'
      }else{
        return'生活中的你，几乎没有焦虑情绪，你的心态平和稳定。面对问题不会慌乱不堪、毫无头绪的担忧，而是镇定自若、有条有理的解决，能够以乐观的心态和自信的态度面对一切。'
      }
    }
  },
     
  created(){
    let maxIndex=0,maxNegative=0,maxPositive=0;
    this.dataListArr.forEach(function(v,i){
      if (Math.abs(v.number)<=Math.abs(v.number)){
        maxIndex=i;
      }
      if((v.number>0)&&(v.number>maxPositive)){
        maxPositive=v.number;
      }
      if((v.number<0)&&(v.number<maxNegative)){
        maxNegative=v.number;
      }
    });
    this.$nextTick(function () {
      document.querySelector('.line-chart').style.marginTop=-(maxPositive-maxNegative)/20+'rem';
    })
    let maxnumber=Math.abs(this.dataListArr[maxIndex].number);
    setTimeout(function(){
      this.dataListArr.forEach(function(value,index){
          value.percentNum=Math.abs(value.number)/maxnumber;
      });
      console.log(this.dataListArr);
    }.bind(this),0)

  },
 
  
  mounted() {
       axios({
         url:url.getScore,
         method:'get',

         })
     .then(res=>{
          
         window.console.log(res);
         this.dataListArr=res.data;
    
     })
     .catch(err=>{
          window.console.log(err);
     })
  },
    computed:{
      cc: function(){
          var sum = 0;
          var len=this.dataListArr.length;
         

          for(var i= 0 ;i< len; i++) {

var item = this.dataListArr[i];
					if(item) {
                sum+= item.number;	}
                 else {
						continue;
				}

          }
          return sum*10/len;
      }
  },
  // computed: {
	// 				totalPrice: function() {
	// 					var total = 0;
	// 					for(var i = 0, len = this.selectList.length; i < len; i++) {
	// 						var index = this.selectList[i];
	// 						var item = this.list[index];
	// 						if(item) {
	// 							total += item.price ;
	// 						} else {
	// 							continue;
	// 						}

	// 					}
	// 					return total.toString().replace(/\B(?=(\d{3})+$)/g, ',');
	// 				}
	// 			},


}
</script>
<style lang="scss" scoped>
// $red: #f22323 !default;
// $green: #00a000 !default;
// $borderColor: #262626 !default;
// body{
//   background: #0d0d0d;
// }
.tt{
	background-image:url("../assets/img/22.png" );
	  width: 400px;
 height: 800px;
}
 .box-card {
    
 position:absolute;
top:15%;
left:7%;
   
      height: 450px;
    width: 350px;
  }
.line-chart{
  position:absolute;
  top:60%;
  left:0;
  right:0;
  height: 0.05rem;
  background:#0cd391;
  border-bottom: 1px solid #bd34cf;
  transform: translateY(-50%);
  ul{
    display: flex;
    justify-content: space-between;
    margin: 0 4rem;
    li{
      text-align: center;
      list-style: none;
      .box{
        position: absolute;
        bottom:0;
        width: 2.5rem;
        height: 0;
         background: -webkit-linear-gradient(top,#c4e0e5, #4ca1af);
        text-align: center;
        transform: translateX(-50%);
        transition:  height 1s;
        .num{
          position: absolute;
          top:-1.4rem;
          left:0;
          right: 0;
          display: inline-block;
          color:  #8e4bfa;
          font-weight: 500;
          font-size: 1.2rem;
          line-height: 1;
        }
      }
      &.position-top{
        .box{

          top:0;
          background: -webkit-gradient(to left, #777dff 0px, #f154ff 200px, #f0357c 400px);
          .num{
            color: #d3d614;
          }
        }
      }}}}
    
  
</style>