<template>

<div class="det"> 

<van-nav-bar title="详细" left-text="返回"    @click-left="$router.go(-1)"  >
  <template #right>
     <el-button type="text" @click="drawer = true" style="margin-left: 16px;">
  有话想对你说..
</el-button>
  </template>
</van-nav-bar>


<mu-card  class="car" style="width: 100%; max-width: 360px; margin: 0 auto;">

  <mu-card-media :title="detail.name" sub-title="新作">
       <img :src="detail.img" alt="" >
  </mu-card-media>

  <mu-card-text>
    {{detail.city}}
  </mu-card-text>
   <mu-card-text>
       <table>
<!-- 多选 -->
              <el-checkbox-group   v-model="selectList">
             <el-checkbox-button class="checkbox" v-for="(item,index) in list" :key="index"
             
             :label="item._id"
            
              name="selectList">{{ item.name }}</el-checkbox-button>
             
                 </el-checkbox-group>

                 <el-progress type="dashboard" :percentage="percentage" :color="colors" ></el-progress>
                 <div>
                   成活度
  <el-button-group >
    <el-button icon="el-icon-minus" @click="decrease"></el-button>
    
    <el-button icon="el-icon-plus" @click="increase"></el-button>
  </el-button-group>
</div>
<!-- 糖分 -->


						<tr>
							<td colspan="5" style="text-align: right;">价格合计：￥ {{ totalPrice }} 元</td></tr>
            <tr> <!--  <td colspan="5" style="text-align: right;">卡路里合计： {{ totalcalories }} 卡</td> -->
						</tr>
				
				</table>
  </mu-card-text>
  <mu-card-actions>
    <van-button color="linear-gradient(to right,#dbe6f6,#c5796d)"  @click="adddindan(detail)"
  >加入购物车</van-button>
    
    <!-- <mu-button id="zt_btn" @click="doZT">暂停</mu-button>
       <mu-button  @click="translate(detail)">翻译</mu-button> -->
        <!-- <div id='transl'>
 </div> -->
<!-- <input type="button" id="tts_btn" @click="doTTS(detail)" value="播放">
  <input type="button" id="zt_btn" @click="doZT" value="暂停"> -->
   <!-- <div id="wrapp">
 
    </div> -->
  </mu-card-actions>
</mu-card>



<el-drawer
  title="我是标题"
  size="320px"
  :visible.sync="drawer"
  :with-header="false">
  <span>  
    
      <van-cell-group>
        <van-nav-bar
  title="对当前商品评价"

  left-arrow

/>

 <van-field
  v-model="title" 
  label="标题" 
  placeholder="好听的标题会有更多人看到哦" />

<van-field
  v-model="adname"
  rows="2"
  autosize
  label="留言"
  type="textarea"
  maxlength="50"
  placeholder="请写下你的留言和好看的照片我们会展示到首页让更多人看到"
  show-word-limit
/>
<h3>上传{{detail.name}}的照片！</h3>
<el-upload
  class="upload-demo"
  action="https://jsonplaceholder.typicode.com/posts/"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :file-list="fileList"
  list-type="picture">
  <el-button size="small" type="primary">点击上传</el-button>
  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>

<h3>对{{detail.name}}评分吧</h3>

<van-rate
  v-model="value"
  :size="25"
  color="#FF7043"
  icon="like"
  void-icon="like-o"
  void-color="#eee"
/>
     </van-cell-group> 
   <van-button color="linear-gradient(to right,#dbe6f6,#c5796d)" @click="registad">添加</van-button></span>
</el-drawer>
   
    

  


</div>

    <!-- <div>

<van-nav-bar title="文章" left-text="返回" @click-left="$router.go(-1)" right-text="加入收藏" @click-right="add"></van-nav-bar>
      <img :src="detail.img" alt="" class="detailtupian">
      <div class="detail">
           <p class="minzi">{{detail.name}}</p>
          <p class="minzi"> 作者：{{detail.city}}</p>
           <p class="minzi">内容：{{detail.company}}</p>

      </div>
      

    </div> -->

</template>

<script>
// import {cr}from'../axios/cr';
// import {add}from'../axios/add';
import axios from 'axios';
import url from'@/service_config.js';
    export default {

        data(){
            
            return{
           fileList: [],
                 adname:'',
                 title:'',
      Price:'',
                list:[],
                selectList: [],
                detail:{},
           
              dd: '',
              drawer: false,
         value: '',
         
           percentage: 10,
        colors: [
          {color: '#f56c6c', percentage: 100},
          {color: '#e6a23c', percentage: 80},
          {color: '#5cb87a', percentage: 20},
          {color: '#1989fa', percentage: 60},
          {color: '#6f7ad3', percentage: 40}
        ]
            }
        },


     created(){
    window.console.log(this.$route.params.id)
     axios({
        url: url.getDetail,
        method:'get',
        params:{
            id:this.$route.params.id,
         
        }

    })
    .then(res=>{
        window.console.log(res)
       this.detail=res.data;
  this.dd=res.data.type;
window.console.log('ok'+this.dd)
        axios({
         url:url.getproducta,
         method:'get',
params: { 
        producttype:this.dd
}
     
         })
     .then(res=>{
        
         window.console.log(res);
         this.list=res.data;

if(this.$route.params.select !== null && this.$route.params.select !== undefined) {
   this.selectList.push(this.$route.params.select)
}

  
	


     })
     .catch(err=>{
          window.console.log(err);
     })
    })
 

},
// mounted(){
   
//       window.console.log('?'+this.dd)
//         axios({
//          url:url.getproducta,
//          method:'get',
// params: { 
//         producttype:this.dd
// }
     
//          })
//      .then(res=>{
        
//          window.console.log(res);
//          this.list=res.data;
//      })
//      .catch(err=>{
//           window.console.log(err);
//      })
// },
computed: {
  totalPrice:  function() {
  
    let totalPrice = this.selectList.reduce( (cur,id )=>{
      let price = this.list.find(item=>item._id===id).price
      return cur +=price
    },0)
    return Number( totalPrice+this.detail.price)


  },
  	totalcalories: function() {
     
         let totalcalories = this.selectList.reduce(  (cur,id)=>{
      let calories = this.list.find(item=>item._id===id).calories
      return cur +=calories
    },0)
    return Number( totalcalories+this.detail.calories)

    }
					// totalPrice: function() {
					// 	var total = 0;
					// 	for(var i = 0, len = this.selectList.length; i < len; i++) {
					// 		var index = this.selectList[i];
					// 		var item = this.list[index];
					// 		if(item) {
          //                       total += item.price ;
                              
					// 		} else {
					// 			continue;
					// 		}

					// 	}
					// 	  return Number(total+this.detail.price)
					// },
          // 		totalcalories: function() {
					// 	var total = 0;
					// 	for(var i = 0, len = this.selectList.length; i < len; i++) {
					// 		var index = this.selectList[i];
					// 		var item = this.list[index];
					// 		if(item) {
          //                       total += item.calories ;
                              
					// 		} else {
					// 			continue;
					// 		}

					// 	}
          //   // return total.toString().replace(/\B(?=(\d{3})+$)/g, ',');
          //   return Number(total+this.detail.calories)
          // }
          
				},
        methods: {
       handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
   increase() {
        this.percentage += 10;
        if (this.percentage > 100) {
          this.percentage = 100;
        }
      },
      decrease() {
        this.percentage -= 10;
        if (this.percentage < 0) {
          this.percentage = 0;
        }
      },

  // handleRemove(file, fileList) {
  //       console.log(file, fileList);
  //     },
  //     handlePreview(file) {
  //       console.log(file);
  //     },

             adddindan(detail){
                var pric=Number(this.detail.price)+Number(this.totalPrice)
           let result=this.selectList.map(i=>this.list[i].name)
                     
                 window.console.log(pric);
             window.console.log(result);
  
    axios({
     url:url.increaseTesttys,
     method:'post',//后端地址和方法
       //  headers:{'token': window.localStorage.getItem['token']},
     data:{
     
   count:1 ,
   img:this.detail.img,
   typeId:this.totalPrice,

 peiliaoName:String(result),

 typeName:this.detail.name
        
     }
     })
    
  .then(res=>{
  
  if(res.data.code==200){
  
   this.$toast('添加成功')
 
  }else{
     this.$toast('添加失败')
     window.console.log(res);
    
  }
 })
 .catch(err=>{
  window.console.log(err);
 })
 }
,   registad(){
    axios({
     url:url.increaseAd,
     method:'post',
     data:{
    title:this.title,
    context:this.adname,
   swiperData:this. fileList,
   user:window.localStorage.getItem('name'),
   avatar:window.localStorage.getItem('poto'),
   value:this.value,
   tap:this.detail.name
  }
     })
    
  .then(res=>{
  
  if(res.data.code==200){
  
   this.$toast('添加成功')
 
  }else{
     this.$toast('添加失败')
     window.console.log(res);
    
  }
 })
 .catch(err=>{
  window.console.log(err);
 })
 },
//            add(){
               
//     axios({ 
//         url:url.addwant,
//         method:'post',
//         data:{
//             productId:this.$route.params.id
//             }
//         })

//     .then(res=>{
//         window.console.log(res);
//         this.$router.push('/wait');
//     })
 

// } ,
//   translate(detail){
     
    
//      var text=this.detail.city;
//        window.console.log(text) 
   
//    this.$http.get('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20170721T082515Z.54cf3dc583f679db.f4a96182281281d8b5dfe24b4e88298e2133f219&lang=en'
//    +'&text='+text)
//    .then((response)=>{
//     window.console.log(response.body.text[0]) 
//     //翻译结果
//     var transl = document.getElementById('transl');
//    transl.innerHTML = response.body.text[0]; 
//     //将翻译结果赋给文本框，传给子组件

    
//    })
//   }
//  ,

//    doTTS(detail) {
//         var ttsDiv = document.getElementById('wrapp');
//         var ttsText = this.detail.city;
//         // 这样就可实现播放内容的替换了
//         var a= '<audio id="wrapp_aud" autoplay="autoplay">';
//         var b= '<source src="http://tts.baidu.com/text2audio?lan=zh&ie=UTF-8&spd=10&text='+ttsText+'" type="audio/mpeg">';
//         var c= '</audio>';
//         ttsDiv.innerHTML = a + b + c;
//         var ttsAudio = document.getElementById('wrapp_aud');
//         ttsAudio.play();
//       },
//          doZT() {
//         var ttsAudio = document.getElementById('wrapp_aud');
//         ttsAudio.pause();
//       }
// }
        }

    }
</script>

<style lang="scss" scoped>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
.checkbox{
  margin: 5px;
}
.detailtupian{
    width: 20%;

}
.detailtupian{
    width: 20rem;
}
.det{
  background-attachment:fixed;
	 background-image:url("../assets/img/back.jpg" );
	  width: 414px;
 height: 1050px;
}
.car{
	position:absolute;
top:0%;
left:5.8%;
   
}
</style>