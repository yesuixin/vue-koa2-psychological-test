<template>
<div class="mabi"> 
<van-nav-bar title="我的" left-text="退出"  right-text="编辑地址" @click-left="exit"  @click-right="$router.push('test')"  >

</van-nav-bar>
<!-- <van-nav-bar title="我的" ></van-nav-bar> -->
<!-- <el-button @click="drawer = true" type="primary" icon="el-icon-user" style="margin-left: 16px;">
  点我打开
</el-button> -->

<el-drawer
   size=80%
  title="我是标题"
  :visible.sync="drawer"
  :with-header="false"
 
>
  <span >
    
<van-tabs>
<van-tab color="blue">登陆
   <van-cell-group>
  <van-field
    v-model="loginUsername"
    required
    clearable
    label="用户名"
    right-icon="question-o"
    placeholder="请输入用户名"
    @click-right-icon="$toast('question')"
  />
<form>
  <van-field
    v-model="loginPassword"
    type="password"
    label="密码"
    placeholder="请输入密码"
    required
    autocomplete=‘new-password’
  />
</form>

<div >
 <slide-verify 
    ref="slideblock"
    
    @again="onAgain"
    @fulfilled="onFulfilled"
    @success="onSuccess"
    @fail="onFail"
    @refresh="onRefresh"
    :accuracy="accuracy"
    :slider-text="text"

></slide-verify>
 
<div>{{msg}}</div>

<!-- <button @click="handleClick">在父组件可以点我刷新哦</button> -->
<input type="button" value="刷新" @click="created()">
<div v-show="isShow">
 你真快！只花了<div v-show="isShow" ref="startTimer"></div>
</div>
</div>
</van-cell-group>
 <van-button color="linear-gradient(to right, #4bb0ff, #6149f6)"  @click="loginHandle">登陆</van-button>
      <!-- <van-button type='primary' size='large' @click="loginHandle">登陆</van-button> -->
     <!-- <van-button color="linear-gradient(to right, #4bb0ff, #6149f6)" @click="exit">注销</van-button> -->

</van-tab>

<van-tab >注册
    <van-cell-group>



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
     
</van-tab>
</van-tabs>


  
  </span>
</el-drawer>
   

 





 <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
        
         <el-button type="text" @click="drawer= true">{{weiuserName}}</el-button>
 
 <el-card class="bod">
        <el-avatar circle style="width: 80px; height: 80px" :src="poto">未登陆</el-avatar>

 <h2 class="minzi"> {{name}}</h2>
     </el-card>
 
 




        </div>
        
      </div>
    </nav>
<van-tabs v-model="active" class="icon2">
  <van-tab title="收藏">
    <mu-grid-list class="gridlist-demo">
     
        <mu-grid-tile v-for="(item,index) in productlist" :key="index">
          <img :src="item.img"  @click="goDetail(item)" >
          <span slot="title">{{item.tap}}</span>
        
          <mu-button slot="action" icon>
            <vue-star animate="animated bounceIn" color="#F05654" class="star" >
       
        
                   <van-icon class="star" slot="icon" name="like"  color="#F56C6C"    />

                 </vue-star>
          </mu-button>
        </mu-grid-tile>
      </mu-grid-list>
  </van-tab>
  <van-tab title="关注的人">
   <van-empty description="你还没关注任何人哦" />
    </van-tab>

</van-tabs> 

<!-- <div class="link-top"></div>
<div class="link-bo"></div>
<div class="link-le"></div>
<div class="link-ri"></div>
<div >
<van-icon class="wel" name="checked" color="rgb(255, 255, 255)" >welcome</van-icon></div>

<van-icon name="phone-o" class="icon3" size="50px" color="#606c88" @click="$router.push('/yanzhen')"/>
<van-icon name="setting-o" class="icon4" size="50px" color="#606c88"/>
<van-icon name="clock-o" class="icon5" size="50px" color="#606c88"/>
<van-icon name="chat-o" class="icon6" size="50px" color="#606c88"/>
<van-icon name="good-job-o" class="icon7" size="50px" color="#606c88"/> -->
<!-- <div id="navbar" class="collapse navbar-collapse">
          <van-button color="linear-gradient(to right, #4bb0ff, #6149f6)" @click="exit">注销</van-button>

          <ul class="nav navbar-nav">
         
            <li><router-link to="/about">关于</router-link></li>
          
          </ul>
        </div> -->


</div>

</template>

<script>
// import {loginHandle}from'../axios/loginHandel';
// import {registHandler}from'../axios/registHandler'
import axios from 'axios';
import url from'@/service_config.js';
 import { mapMutations,mapActions } from 'vuex';
import{ mapState}from'vuex';
// import { mapActions }from'vuex';//mapaction=映射，相当于用里面的方法
export default {
  name:'about',
 data(){
     return{
    drawer: false,
       type:'',
      //  weiuserName:'',
     loginUsername:'',
     loginPassword:'',
     registUsername:'',
     registPassword:'',
    name:localStorage.name ,
    poto:localStorage.poto ,
       img:'',
        isShow:false,
            msg: '',
            text: '向右滑',
            // 精确度小，可允许的误差范围小；为1时，则表示滑块要与凹槽完全重叠，才能验证成功。默认值为5
            accuracy: 1,
            timer: "",
    content: "",
    hour: 0,
    minutes: 0,
    seconds: 0,
      productlist:[],

     docked: false,
      open: false,
      position: 'left',
     }
 },

    created(){
         
            axios({
                url:url.getwant,
                method: 'get',
                  params:{
            user:this.name
         
        }
            })
            .then(res=>{
               for(let item of res.data){
                   this.productlist.push(item.productId)

               }
            window.console.log(res);

            })
            .catch(err=>{
                window.console.log(err)
            })

        },

  computed:
  mapState({
    weiuserName:state=>state.userName
  }),
 

methods: {
   goDetail(item){
   
    this.$router.push({
        name:'detail',
        params:{
            id:item.tapid,
            select:item.ptapid
        }
    })
},

      ...mapMutations(['setToken']),
      ...mapActions(['loginAction']),
     
        ...mapMutations(['delToken']),//退出登录的方法
        exit:function(){
          this.delToken({token:''});
           this.$toast('用户已退出')
          this.$router.push('/profile');},
      //   ...mapMutations(['delToken']),//退出登录的方法
      //   exit:function(){
      //     this.delToken({token:''});
      //     this.$router.push('/profile');},
  // ...mapActions(['']),//映射，用loginaction方法

//上传头像
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
   created () {
    this.timer = setInterval(this.startTimer, 1000);
    },
        startTimer () {
    this.seconds += 1;
    if (this.seconds >= 60) {
    this.seconds = 0;
    this.minute = this.minute + 1;
    }
    
    if (this.minute >= 60) {
    this.minute = 0;
    this.hour = this.hour + 1;
    }
    this.$refs.startTimer.innerHTML = (this.minutes < 10 ? '0' + this.minutes : this.minutes) + ':' + (this.seconds < 10 ? '0' + this.seconds : this.seconds);
    },

        onSuccess(){
            console.log('验证通过');
             clearInterval(this.timer);
            this.msg = 'ok'
            this.isShow = !this.isShow;
            window.console.log(this.timer)
        },
        onFail(){
            console.log('验证不通过');
            this.msg = ''
        },
        onRefresh(){
            console.log('点击了刷新小图标');
            this.msg = ''
        },
        onFulfilled() {
            console.log('刷新成功啦！');
        },
        onAgain() {
            console.log('检测到非人为操作的哦！');
            this.msg = 'try again';
            // 刷新
            this.$refs.slideblock.reset();
        },
        handleClick() {
        	// 父组件直接可以调用刷新方法
            this.$refs.slideblock.reset();
        },

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

loginHandle(){

  
    axios({
       url:url.loginUser,
       method:'post',//后端地址和方法
    //headers:{'token': window.localStorage.getItem['token']},
       data:{
           userName:this.loginUsername,
           password:this.loginPassword
       }
    }).then(res=>{
        
    if(res.data.code==200){
   
   this.setToken({token: res.data.token});  
     //store中的为token赋值方法
     this.loginAction(res.data.userName);
     //
    //  if(this.loginUsername=="a"){  this.$router.go("/about");}
     this.$router.go(-1)
     this.$toast('登陆成功'+this.loginUsername+'欢迎你');
    localStorage.setItem("name",this.loginUsername);  
     localStorage.setItem("poto","https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1709216491,2536617744&fm=26&gp=0.jpg");
     window.console.log(res.data.token); 
    

   
    }
    if(res.data.code==500){
     this.$toast('密码错误重新输入');
     window.console.log(res);
     
   
   
    }
   //  if(res.data.code==203){
   //     this.$toast('用户名不存在');
    
   //  }
   if(res.data.code==501){
      window.console.log(res);
     this.$toast('用户不存在，先浏览');
     // this.loginAction(res.data.userInfo);
     this.$router.push('/');
   
    }
   }).catch(err=>{
    window.console.log(err);
   })}



}}
</script>


<style lang="scss">

.link-top {
   position:absolute;
  top:55%;//75
left: 10%;
            width: 314px;
            height: 1px;
            border-top: solid #ACC0D8 1px;
        }
.link-bo {
   position:absolute;
  top:70%;//75
left: 10%;
            width: 314px;
            height: 1px;
            border-top: solid #ACC0D8 1px;
        }
 .link-ri {
   position:absolute;
  top:40%;//75
left: 33%;
            // width: 15px;
            height: 45%;
            border-right: solid #ACC0D8 1px;
        }
         .link-le {
   position:absolute;
  top:40%;//75
left: 63%;
            // width: 15px;
            height: 45%;
            border-right: solid #ACC0D8 1px;
        }

.minzi{
  position:absolute;
  top:48%;
left: 48%;
  font-size: 26px;
    font-family: "Bradley Hand ITC";
         color: rgb(255, 255, 255);
}
.wel{
    position:absolute;
  top:115px;//75
left: -25%;
}
.mabi{

	  width: 414px;
 height: 736px;
}
.bod {
    	  background-image:url("../assets/img/agback.jpg" );
 position:absolute;
top:10%;
left:7%;
   
      height: 170px;
    width: 350px;
  }
  .icon1  {
    
position:absolute;
top:220px;
left:30px;
  
}
  .icon2  {
    
position:absolute;
top:200px;

  
}
  .icon3  {
    
position:absolute;
top:220px;
left:160px;
  
}
  .icon4  {
    
position:absolute;
top:340px;
left:-120px;
  
}
  .icon5  {
    
position:absolute;
top:340px;
left:-60px;
  
}
  .icon6  {
    
position:absolute;
top:340px;
left:10px;
  
}
  .icon7  {
    
position:absolute;
top:450px;
left:-270px;
  
}
//   .icon8  {
    
// position:absolute;
// top:40px;
// left:90px;
  
// }


</style>