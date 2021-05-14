<template>
<div>
    
    <el-page-header @back="$router.go(-1)" content="用户列表">
</el-page-header>
 <el-tabs  >
    <el-tab-pane label="用户管理" name="first"><div class="ct">

  <el-input v-model="dele" placeholder="请输入内容" style="height:50px;width:300px"></el-input>
 <!-- <van-field
    v-model="dele"
    required
    clearable
    label="删除"
    right-icon="question-o"
    placeholder="请输入要删除的学生/老师的名字"
    @click-right-icon="$toast('名字')"
  /> -->
  <van-button color="linear-gradient(to right, #4bb0ff, #6149f6)"  @click="delect()">删除</van-button>
  <!-- <van-button type='primary' @click="delect" size='large'>删除</van-button> -->


    <van-row>

        
        <van-col span="6" class="v">
            <ul>
                <!-- 给她办个方法，点击传入它的item和要展示的id和内容 -->
                <li @click="bution(index)" :class="{active:active==index}" v-for="(item,index) in types" :key="index">
                    {{item.typeName}}
                </li>
            </ul>

        </van-col>
          <el-table
     :data=users
       height="500"
      style="width: 70%"
       v-for="item in users" :key="item._id"
      >
     
      <el-table-column
        prop="userName"
        label="姓名"
        width="80">
      </el-table-column>
      <el-table-column
        prop="password"
        label="密码"
        width="140">
      </el-table-column>
   

        
         <el-table-column
      fixed="right"
      label="操作"
      width="120">
      <template >
        <el-button
         @click="unpdata(item)"
          type="text"
          size="small">
          编辑
        </el-button>

         <el-button
          @click="del(item)"
          type="text"
          size="small">
        删除
        </el-button>

      </template>
    </el-table-column>
    </el-table>
      
    </van-row>

</div>
</el-tab-pane>
    <el-tab-pane label="新增用户" name="second">
        

    <van-cell-group>

 <van-field
    v-model="type"
    required
    clearable
    label="类型"
    right-icon="question-o"
    placeholder="请输入类型用户/测试员"
    @click-right-icon="$toast('学生请输入1，老师输入0')"
  />


  <van-field
    v-model="registUsername"
    required
    clearable
    label="用户名"
    right-icon="question-o"
    placeholder="请输入用户名"
    @click-right-icon="$toast('question')"
  />
<form>
  <van-field
    v-model="registPassword"
    type="password"
    label="密码"
    placeholder="请输入密码"
    required
    autocomplete=‘new-password’
  />
</form>
</van-cell-group>
 <van-button color="linear-gradient(to right, #4bb0ff, #6149f6)"  @click="registHandler">注册</van-button>
      <!-- <van-button type='primary' @click="registHandler" size='large'>注册</van-button> -->

    </el-tab-pane>
    <el-tab-pane label="添加广告" name="third">
       <van-cell-group>

  <van-field
    v-model="adname"
    required
    clearable
    label="广告内容"
    right-icon="question-o"
    placeholder="请输入广告内容"
    @click-right-icon="$toast('question')"
  />

  <el-upload
  class="avatar-uploader"
  action="https://jsonplaceholder.typicode.com/posts/"
  :show-file-list="false"
  :on-success="handleAvatarSuccess"
  :before-upload="beforeAvatarUpload">
  <img v-if="img" :src="img" class="avatar">
  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
</el-upload>

     </van-cell-group>
     <van-button color="linear-gradient(to right, #4bb0ff, #6149f6)"  @click="registad">添加</van-button>
    </el-tab-pane>
  </el-tabs>


  <van-popup
            :title="titleMap[dialogStatus]"
            v-model="show"
            position="top"
            :style="{ height: '20%' }">
            <van-field
                v-model="name"
                type="text"
                label="用户名"
                placeholder="用户名"
                required
            />
            <van-field
                v-model="password"
                type="password"
                label="密码"
                placeholder="密码"
                required
            />
            <van-button type="primary" size="large" style="margin-top:10px;" @click="add()"  :disabled="btnDisabled" >修改</van-button>
            </van-popup>


</div>
</template>
 
<script>
import axios from 'axios';
import url from'@/service_config.js';
export default {
    data(){
        return{
          adname:'',
           img:'',
          dele:'',
     active:0,
     types:[],
   
     typeId:1,
   
   type:'',
    registUsername:'',
     registPassword:'',

        show:false,
            btnDisabled:false,
            name:'',
            userName:'',
            password:'',
            loading:false,
            stationId:'',
            // btnName:'新      增',
            id:'',
            users:[],
            dialogStatus:'',
            titleMap: {
                // add:'新增',
                edit:'编辑'
            }

        }
       

    },
 created(){
     axios({
         url:url.getTstypes,
         method:'get'

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
    registad(){
    axios({
     url:url.increaseAd,
     method:'post',
     data:{
         name:this.name,
   img:this.img,
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
  //点击按钮执行 打开弹出框
        unpdata(item){
             this.id=item._id;
           
            this.show=true,
            this.dialogStatus='edit'
            this.name=item.userName;
            this.password=item.password;
        },
        
        //点击按钮执行
        add(){
           
                this.updateInfo();
            },
          
      //修改用户
        updateInfo(){
           axios({
         url:url.getTstypes,
         method:'post',

        
           data:{
                userName:this.name,
                password:this.password,
                _id:this.id
            }})
        
         .then( (res)=> {
           if(res.data.code==200){
                 this.$toast.success('修改成功');
                 this.show=false;
                 this.initData();
             }
        })
        .catch( (error)=> {
            console.log(error);
        });
        },
        //删除
        del(item){
            console.log(item.userName);
             axios({
           url:url.del,
           methods:'get',
            params:{
                 name:item.userName
              }
           
       }) 
     
       
         .then( (res)=> {
             if(res.data.code==200){
                 this.$toast.success('删除成功');
                 this.initData();
             }
        })
        .catch( (error)=> {
            console.log(error);
        });
        },
       //biede

     registHandler(){
    axios({
     url:url.registUser,
     method:'post',//后端地址和方法
       //  headers:{'token': window.localStorage.getItem['token']},
     data:{
       type:this.type,
         userName:this.registUsername,
         password:this.registPassword
     }
     })
     
  .then(res=>{
  
  if(res.data.code==200){
  
   this.$toast('注册成功')
 
  }else{
     this.$toast('注册失败')
     window.console.log(res);
    
  }
 })
 .catch(err=>{
  window.console.log(err);
 })
 }
, 
delect(){
   axios({
    url:url.delectuser,
    method:'get',//后端地址和方法
    data:{
        dele:this.dele,
      
    }
    }) 
   
 .then(res=>{
      
 if(res.data.code==200){
  this.$toast('删除成功');
  this.$router.go(0);
  // this.loginAction(res.data.userInfo);

 }
  
  

})
.catch(err=>{
 window.console.log(err);
})
}
,



    bution(typeId)
    {
 this.active = typeId
 this.typeId=typeId
 
 this.getMusicList() //每次点都调用一下
window.console.log(typeId)
},


   getMusicList(){
       axios({
           url:url.getuser,
           method:'get',//每次赋值都根据点击的typesid
           params:{
               typeId:this.typeId,
              }

       })
       .then(res=>{
            //   window.console.log(res);
           this.users=res.data;

       })
       .catch(err=>{
           window.console.log(err);

       })
   }
}}
</script>
<style lang='scss'>
.v{
    background-color:  rgb(221, 230, 233);
    li{
        height: 80px;
       
        line-height: 100px;
        border-bottom: 5px solid rgb(245, 235, 237);
        padding: 5px;
        text-align: center;


    }
    .active{
        background-color: rgb(255, 255, 255)
    }


}
.contentiti{
  
    // width: 50%;
    padding: 0 20px;
    text-align: center;
 
}
.t{
    top:200px;
   
}
</style>