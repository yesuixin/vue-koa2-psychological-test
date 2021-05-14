<template>
<div >
<meta name="referrer" content="no-referrer" />
<van-nav-bar :title="地址列表" left-text="返回"  @click-left="$router.go(-1)" right-text=" 点我分享给好友"  @click-right="showShare = true">
 
</van-nav-bar>
<div class="ct">
<div class="vn">
<van-address-list
  v-model="chosenAddressId"
  :list="list"
  :disabled-list="disabledList"
  disabled-text="以下地址超出配送范围"
  default-tag-text="默认"
  @add="onAdd"
  @edit="onEdit"
/>


</div>
<!-- 
   <div>{{item.Name}}</div> -->

</div>
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
<h3>上传食用的照片！</h3>
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
{{name}}
<h3>评分吧</h3>

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
</template>
 
<script>
// import {created}from'../axios/created';
// import {  getMusicList}from'../axiosgetMusicList';
import axios from 'axios';
import url from'@/service_config.js';
export default {
    data(){
        return{
     fileList: [],
      value: '',
     ts:[],
    adname:'',
     typeId:'',
     title:'',
       drawer: false,
   name:'',
     chosenAddressId: '1',
      list: [
        {
          id: '1',
          name: '张三',
          tel: '13000000000',
          address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
          isDefault: true,
        },
        {
          id: '2',
          name: '李四',
          tel: '1310000000',
          address: '浙江省杭州市拱墅区莫干山路 50 号',
        },
      ],
      disabledList: [
        {
          id: '3',
          name: '王五',
          tel: '1320000000',
          address: '浙江省杭州市滨江区江南大道 15 号',
        },
      ],
        }
       

    },

 methods: 
 {      onAdd() {
      Toast('新增地址');
    },
    onEdit(item, index) {
      Toast('编辑地址:' + index);
    },
       draw(name){
     this.name=name,
     this.drawer= true
   }
   ,
   handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      registad(){
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
   tap:this.ts.Name
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
    butiona()
    {

 
   axios({
        url:url.getTstypes,
        method:'get',//每次赋值都根据点击的typesid
        params:{
            typeId:1,
           }

    })
    .then(res=>{
         window.console.log(res);
        this.ts=res.data;

    })
    .catch(err=>{
        window.console.log(err);

    })

},
   butionb()
    {


 
   axios({
        url:url.getTstypes,
        method:'get',//每次赋值都根据点击的typesid
        params:{
            typeId:0,
           }

    })
    .then(res=>{
          window.console.log(res);
        this.ts=res.data;

    })
    .catch(err=>{
        window.console.log(err);

    })
},


   



}}
</script>
<style >
.demo-list-wrap {
  width: 100%;
  max-width: 414px;
  overflow: hidden;
  height: 100%;
}

</style>