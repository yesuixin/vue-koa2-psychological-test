<template>

<div>
<el-page-header @back="goBack" content=" 心理测试员页面">
</el-page-header>

  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="添加文章" name="first">
         <van-cell-group>

  <van-field
    v-model="name"
    required
    clearable
    label="名字"
    right-icon="question-o"
    placeholder="请输入名字"
    @click-right-icon="$toast('question')"
  />
  <!-- <van-field
    v-model="img"
    required
    clearable
    label="照片"
    right-icon="question-o"
    placeholder="请输入内容"

  /> -->
添加封面
  <el-upload
  class="avatar-uploader"
  action="https://jsonplaceholder.typicode.com/posts/"
  :show-file-list="false"
  :on-success="handleAvatarSuccess"
  :before-upload="beforeAvatarUpload">
  <img v-if="img" :src="img" class="avatar">
  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
</el-upload>

 <van-field
    v-model="company"
    rows="5"
    maxlength="50"
      type="textarea"
    required
    clearable
    label="内容"
    right-icon="question-o"
    placeholder="请输入内容"

  />

 <van-field
    v-model="city"
    required
    clearable
    label="作者"
    right-icon="question-o"
    placeholder="请输入作者"

  />

 <van-field
    v-model="type"
    required
    clearable
    label="类型"
    right-icon="question-o"
    placeholder="请输入类型"

  />

</van-cell-group>
 <van-button color="linear-gradient(to right, #4bb0ff, #6149f6)"  @click="registHandler">添加</van-button>
      <!-- <van-button type='primary' @click="registHandler" size='large'>注册</van-button> -->
     

    </el-tab-pane>

    <el-tab-pane label="删除测试题" name="second">
       <el-table
     :data=tests
       height="800"
      style="width: 100%"
       v-for="item in tests" :key="item._id"
      >
     
      <el-table-column
        prop="typeId"
        label="题号"
        >
      </el-table-column>
      <el-table-column
        prop="typeName"
        label="题目"
        width="180">
      </el-table-column>
       
         <el-table-column
      fixed="right"
      label="操作"
      width="80">
      <template >
       <el-button
        
          type="text"
          size="small">
        删除
        </el-button>

      </template>
    </el-table-column>
    </el-table>
    </el-tab-pane>

<el-tab-pane label="新增题目" name="fourth">
          <van-cell-group>

  <van-field
    v-model="tihao"
    required
    clearable
    label="题号"
    right-icon="question-o"
    placeholder="请输入题号"
    @click-right-icon="$toast('question')"
  />
 <van-field
    v-model="testName"
    required
    clearable
    label="题目"
    right-icon="question-o"
    placeholder="请输入内容"

  />
 <van-cell-group>

  <van-field
    v-model="tihao"
    required
    clearable
    label="选项a"
    right-icon="question-o"
    placeholder="请输入选项"
    @click-right-icon="$toast('question')"
  />
 <van-field
    v-model="testName"
    required
    clearable
    label="a分值"
    right-icon="question-o"
    placeholder="请输入分值"

  />

    <van-field
    v-model="tihao"
    required
    clearable
    label="选项b"
    right-icon="question-o"
    placeholder="请输入选项"
    @click-right-icon="$toast('question')"
  />
 <van-field
    v-model="testName"
    required
    clearable
    label="b分值"
    right-icon="question-o"
    placeholder="请输入分值"

  />
    <van-field
    v-model="tihao"
    required
    clearable
    label="选项c"
    right-icon="question-o"
    placeholder="请输入选项"
    @click-right-icon="$toast('question')"
  />
 <van-field
    v-model="testName"
    required
    clearable
    label="c分值"
    right-icon="question-o"
    placeholder="请输入分值"

  />
    <van-field
    v-model="tihao"
    required
    clearable
    label="选项d"
    right-icon="question-o"
    placeholder="请输入选项"
    @click-right-icon="$toast('question')"
  />
 <van-field
    v-model="testName"
    required
    clearable
    label="d分值"
    right-icon="question-o"
    placeholder="请输入分值"

  />
  

</van-cell-group>
</van-cell-group>
<van-button color="linear-gradient(to right, #4bb0ff, #6149f6)"  @click="registHandler">添加</van-button>
</el-tab-pane>
<!-- <el-tab-pane label="添加选项" name="fourth"> -->
   


  </el-tabs>

   


</div>
</template>

<script>
// import {loginHandle}from'../axios/loginHandel';
// import {registHandler}from'../axios/registHandler'
import axios from 'axios';
import url from'@/service_config.js';
//  import { mapMutations,mapActions } from 'vuex';
// import { mapActions }from'vuex';//mapaction=映射，相当于用里面的方法
export default {
 data(){
     return{
         name:'',
   img:'',
   price:'',
   company:'',
   city:'',
   type:'',
   tests:[],
    //  registUsername:'',
    //  registPassword:''
     }
 }, 
created(){
     axios({
         url:url.getTesttyss,
         method:'get'

         })
     .then(res=>{
         
         window.console.log(res);
         this.tests=res.data;
     })
     .catch(err=>{
          window.console.log(err);
     })
 },
methods: {
      handleAvatarSuccess(res, file) {
        this.img = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
    ,
   

 registHandler(){
    axios({
     url:url.increasest,
     method:'post',//后端地址和方法
       //  headers:{'token': window.localStorage.getItem['token']},
     data:{
         name:this.name,
   
   img:this.img,
   price:this.price,
   company:this.company,
   city:this.city,
   type:this.type
        
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
, 


}}
</script>


<style lang="scss">
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
</style>