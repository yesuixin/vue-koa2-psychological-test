<template>
  <div class="login">
      <h1>管理员管理登陆</h1>
    <div class="input-wrap">
        ad：<el-input v-model="name"  style="height:50px;width:300px" placeholder="请输入内容"></el-input>

        <span v-if="error.name" class="err-msg">{{error.name}}</span>
    </div>
    <div class="input-wrap">
       ps： <el-input placeholder="请输入密码"  style="height:50px;width:300px" v-model="pwd" show-password></el-input>
        <!-- <input type="password" v-model="pwd"/> -->
        <span v-if="error.pwd" class="err-msg">{{error.pwd}}</span>
    </div>
    <div class="input-wrap">
         <van-button color="linear-gradient(to right, #4bb0ff, #6149f6)" style="height:50px;width:300px" @click="$router.push('/customers')">
           提交</van-button>
            
      
    </div>
  </div>
</template>

<script>
export default {
  data() {
      return {
          name: '',
          pwd : '',
          error : {
              name: '',
              pwd : ''
          }
      }
  },

  methods : {
      check(name,pwd) {
          if(!name) {
              this.error.name = '请输入姓名'
              return false
          }
          if(!pwd){
              this.error.pwd = '请输入密码'
              return false
          }
      },
   
  }
}
</script>

<style scoped lang="scss">
.login {

 width: 100%;
 height: 500px;
    margin: 5% auto;
    
}
</style>