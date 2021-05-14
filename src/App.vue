<!--
 * @,@Author: ,: your name
 * @,@Date: ,: 2019-11-26 17:05:48
 * @,@LastEditTime: ,: 2020-10-28 22:28:49
 * @,@LastEditors: ,: your name
 * @,@Description: ,: In User Settings Edit
 * @,@FilePath: ,: \musicst\src\App.vue
 -->
<template>
  <div id="app">
    <router-view></router-view>
    <van-tabbar v-model="active">
    <van-tabbar-item icon="wap-home-o" size=240px to="/">首页</van-tabbar-item>
     <van-tabbar-item icon="goods-collect-o"  size=240px to="musiclist">商品</van-tabbar-item>
      <van-tabbar-item icon="star-o"  size=240px to="wait">购物车</van-tabbar-item>

            <van-tabbar-item icon="friends-o"  size=240px to="profile">我的</van-tabbar-item>
         
          
    </van-tabbar>
    
   <!-- <ul class="footer-bar"
     <li class="footer-bar-item">
       <router-link to="/">首页</router-link></li>
     <li class="footer-bar-item">
       <router-link to="comment">评论</router-link></li>
     <li class="footer-bar-item">
       <router-link to="profile">我的</router-link></li>
   </ul> -->
  </div>
</template>

<script>
// import About from'./admin/components/About.vue'
// import Customers from'./admin/components/Customers.vue'

export default {
   data() {
    return {
      active: 0
    }
  },
  name: 'app',
  components: {
    // Customers: Customers,
    // About: About
  }
}
</script>

<style >
#app {
  
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */

}
.footer-bar{
  display: flex;
  background: darkcyan;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 100px;}
  .footer-bar-item{
    flex-grow: 1;
    text-align: center;
  }


</style>
