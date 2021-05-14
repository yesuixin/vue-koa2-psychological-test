<template>
<div>
<van-nav-bar title="关于" left-text="返回" @click-left="$router.go(-1)" ></van-nav-bar>
<p>已登陆退出点击下面</p>
<van-button color="linear-gradient(to right, #4bb0ff, #6149f6)" @click="exit">注销</van-button>
</div>
</template>
 
<script>
 import { mapMutations} from 'vuex';
export default {
  name:'about',
  methods: {
     ...mapMutations(['delToken']),//退出登录的方法
        exit:function(){
          this.delToken({token:''});
           this.$toast('用户已退出')
          this.$router.push('/profile');},
  },
}
</script>
<style lang='scss'>
</style>