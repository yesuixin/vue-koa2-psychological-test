<template>
<div class="back">
<meta name="referrer" content="no-referrer" />


<div class="ct">
<div class="vn">
       <ul>
                <!-- <! 给她办个方法，点击传入它的item和要展示的id和内容 -->
                <li @click="bution(index)" :class="{active:active==index}" v-for="(item,index) in types" :key="index">
                    {{item.typeName}} 
               
            </li>
            </ul> 
</div>

    <van-row class="mm">



            
  <el-carousel :interval="5000" arrow="always" height="500px" >
    <el-carousel-item v-for="(item,index) in musiclists" :key="index">
   
        

<el-row>
  <el-col>
    <el-card :body-style="{ padding: '40px' }"  >
          <!-- <vue-star animate="animated bounceIn" color="#F05654" >
                  <van-icon slot="icon" name="like" @click="addlike(item)" />

                 </vue-star> -->
     <img @click="goDetail(item._id)"  style="width: 230px; height: 300px" :src="item.img" alt="">
      <div style="padding: 4px;" >
        <span>{{item.name}}
             <!-- <vue-star animate="animated bounceIn" color="#F05654" >
                  <van-icon slot="icon" name="like"  color="#F56C6C"  @click="addlike(item)" />

                 </vue-star> -->
        </span>
        <div class="bottom clearfix">
         
       
<el-collapse  >
  <el-collapse-item title="内容" name="1">
    <div>{{item.name}}</div>
<!-- <div @click="goDetail(item._id)">详细</div>
      -->
      <!-- <a @click="goDetail(item._id)">详细</a> -->
      <!-- <van-icon  >详细</van-icon> -->
  </el-collapse-item>
 
</el-collapse>

 </div>
      </div>
    </el-card>
  </el-col>
</el-row>


    </el-carousel-item>
  </el-carousel>


      
    </van-row>

</div>
</div>
</template>
 
<script>
// import {created}from'../axios/created';
// import {  getMusicList}from'../axiosgetMusicList';
import axios from 'axios';
import url from'@/service_config.js';
export default {
    data(){
        return{
     active:0,
     types:[],
     musiclists:[],
     typeId:1,
    
   
        }
       

    },
 created(){
  
     axios({
         url:url.getTypes,
         method:'get',

         })
     .then(res=>{
         
         window.console.log(res);
         this.types=res.data;
     })
     .catch(err=>{
          window.console.log(err);
     })
 },
 
 methods: 
 {
    bution(typeId)
    {
 this.active = typeId
 this.typeId=typeId
 
 this.getMusicList() //每次点都调用一下
window.console.log(typeId)
},

addlike(item){
  
window.console.log(item._id);
   axios({ 
        url:url.addwant,
        method:'post',
        data:{
            productId:item._id
            }
        })

    .then(res=>{
        window.console.log(res);
        
    })
},

   getMusicList(){
    axios({
        url:url.getmusic,
        method:'get',//每次赋值都根据点击的typesid
        params:{
            typeId:this.typeId,
           }

    })
    .then(res=>{
         //   window.console.log(res);
        this.musiclists=res.data;

    })
    .catch(err=>{
        window.console.log(err);

    })
}
   ,

goDetail(id){
    console.log(id);
    this.$router.push({
        name:'detail',
        params:{
            id:id
        }
    })
}

}}
</script>
<style lang='scss'>
.back{
	 background-image:url("../assets/img/back.jpg" );
}
.mm{
  
    height:550px; 
    margin:30px auto; 
    width:300px; 
}
.vn{
    
    // background-color:  rgb(102, 186, 189);
    ul {
        height: 70px;
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    // border: 1px solid #e7e7e7;
    // background-color: #f3f3f3;
}

// li {
//     float: left ;
   
// }

// li a {
//     display: block;
//     // color: #666;
//     text-align: center;
//     padding: 14px 16px;
//     text-decoration: none;
// }

// li a:hover:not(.active) {
//     background-color: #ddd;
// }

// li a.active {
//     color: white;

// }
    li{
       
        height: 50px;
        line-height: 50px;
        font-size: 20px;
        font-family: "STHeiti";
         color: rgb(255, 255, 255);
        padding: 14px;
        text-align: center;
        float: left ;

    }
    .active{
      
          color: rgb(255, 255, 255);
        // background-color: rgb(66, 184, 117);
        // text-decoration:underline;
        text-decoration:blink; 
         padding-bottom: 50px;
        border-bottom: 2px solid rgb(255, 255, 255);
        
    }

}
.t{
    position: fixed;
    top:150px;
   
    bottom: 2px;
    right: 0;
    overflow-y: scroll;
}
.content{
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 20px;

}
.contentit{
    width: 25%;
    padding: 0 20px;
    text-align: center;
    img{
        width: 10rem;
        height: 10rem;
    }
     
} 

</style>