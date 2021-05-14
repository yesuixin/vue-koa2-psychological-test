<template>
    <div class="gg">
<div>
<el-card class="box-card"  :body-style="{ padding: '40px' }"  >
  <!-- <div v-for="o in 4" :key="o" class="text item">
  1  {{'列表内容 ' + o }}
  </div> -->
 


			


						
<div>
							<li v-for="(item,index) in titel" :key="index">{{item.typeName}}</li>
</div>
					
			

				
<table>
						<tr v-for="(item,index) in list" :key="index">

							<td ><input type="checkbox" v-model="selectList" :id="item.id" :value="index" name="selectList"></td>

							<td>{{ item.name }}</td>
						</tr>
						<tr>
							<!-- <td colspan="5" style="text-align: right;">合计：￥ {{ totalPrice }} 元</td> -->
						</tr>
				
				</table>
   <van-count-down :time="time" />
    <el-button type="primary" round @click="increaseScore(totalPrice)">下一题</el-button>
</el-card>
</div>
</div>

</template>

<script>
import axios from 'axios';
import url from'@/service_config.js';
export default {
  
 data() {
    return { time:   15 * 1000,
     list: [
    
          ],
          titel:[],
          selectList: [],
        
					checked: false
      
    }
  },
   created(){
  
     axios({
         url:url.getproducte,
         method:'get',

         })
     .then(res=>{
          
         window.console.log(res);
         this.list=res.data;
     })
     .catch(err=>{
          window.console.log(err);
     })

 },
 mounted(){
//第二个标题
       axios({
         url:url.getTesttysfine,
         method:'get',

         })
     .then(res=>{
          
         window.console.log(res);
         this.titel=res.data;
     })
     .catch(err=>{
          window.console.log(err);
     })  
 },

computed: {
					totalPrice: function() {
						var total = 0;
						for(var i = 0, len = this.selectList.length; i < len; i++) {
							var index = this.selectList[i];
							var item = this.list[index];
							if(item) {
								total += item.price ;
							} else {
								continue;
							}

						}
						return total.toString().replace(/\B(?=(\d{3})+$)/g, ',');
					}
				},
				methods: {
        
        
increaseScore(totalPrice){
    axios({
     url:url.increaseScore,
     method:'post',//后端地址和方法
       //  headers:{'token': window.localStorage.getItem['token']},
     data:{
       number:this.totalPrice ,
     percentNum:0
     }
     }) 
    
  .then(res=>{  
  
  if(res.data.code==200){
this.$router.push({name:'yanzhen'})
     window.console.log("添加成功");
 
  }else{
     this.$toast('注册失败')
     window.console.log(res);
    
  }
 })
 .catch(err=>{
  window.console.log(err);
 })
 }
        
				}
  
}
</script>

<style lang="scss" scoped>
.gg{
 background-image:linear-gradient(top,#dbe6f6,#c5796d);
 width: 400px;
 height: 800px;
 }


 .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    
 position:absolute;
top:15%;
left:15%;
   
      height: 400px;
    width: 280px;
  }
</style>