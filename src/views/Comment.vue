<template>
<div > 

<van-nav-bar :title="detail.title" left-text="返回"  @click-left="$router.go(-1)" right-text=" 点我分享给好友"  @click-right="showShare = true">
 
</van-nav-bar>

<van-share-sheet
  v-model="showShare"
  title="立即分享给好友"
  :options="options"
  @select="onSelect"
/>

<mu-card style="width: 100%; max-width: 414px; margin: 0 auto;">
  <mu-card-header :title="detail.user" sub-title="关注我留意更多">
    <mu-avatar slot="avatar">
      <img :src="detail.avatar">
    </mu-avatar>

<van-button type="default" @click="add">关注</van-button>
  </mu-card-header>
  <mu-card-media :title="detail.title"  sub-title="Image Sub Title">
        
  <!-- <van-swipe-item v-for="(image, index) in images" :key="index" height="100px" >
    <img v-lazy="image" :src="image" width="414px"/>
  </van-swipe-item> -->
  <img :src="detail.img" alt="" width="414px">
 
  </mu-card-media>

  <mu-card-title  :sub-title="detail.createDate"></mu-card-title>
  
  <mu-card-text>
   {{detail.context}}
  
  </mu-card-text>
  <van-tag plain type="warning" size="large" class="tag">#{{detail.tap}}#</van-tag>
 <van-tag color="#ad0000" plain>{{detail.ptap}}</van-tag>
</mu-card>
 
     <!-- <img :src="detail.img" alt="" width="414px">
<h3>{{detail.title}}</h3>
<p>{{detail.context}}</p>
<p></p>
    <mu-sub-header>今{{detail.createDate}}天</mu-sub-header> -->

<van-field
  v-model="adname"
  rows="2"
  autosize
  label="留言"
  type="textarea"
  maxlength="50"
  placeholder="请写下你的留言和好看的照片我们会展示到首页让更多人看到"
  show-word-limit
>
  <template #button>
    <van-button color="#4bb0ff" icon="orders-o" plain @click="registad">留言</van-button>
&nbsp;
     <van-button color="#c5796d" icon="star-o"  plain @click="add">收藏</van-button>
  </template>
</van-field>
 



 <mu-list textline="three-line" v-for="(item,index) in comment" :key=index>



    <mu-list-item avatar :ripple="false" button>
      <mu-list-item-action>
        <mu-avatar>
          <el-avatar circle :size="60" :src="item.img">未登陆</el-avatar>
        </mu-avatar>
      </mu-list-item-action>
      <mu-list-item-content>
        <mu-list-item-title>{{ item.Name }}</mu-list-item-title>
            <mu-list-item-action>
     <vue-star animate="animated bounceIn" color="#F05654" class="star" >
                  <van-icon class="star" slot="icon" name="like"  color="#F56C6C"    />

                 </vue-star>
      </mu-list-item-action>
        <mu-list-item-sub-title>
          <span style="color: rgba(0, 0, 0, .87)">{{ item.text }}</span><br/>
          {{ item.createDate}}
        </mu-list-item-sub-title>
      
      </mu-list-item-content>
    </mu-list-item>
    <mu-divider></mu-divider>
  
  </mu-list>


           <!-- <table>

            	<ul v-for="(item,index) in comment" :key=index>

							<li>   <el-avatar circle style="width: 80px; height: 80px" :src="item.img">未登陆</el-avatar>
</li>
                            <li>{{ item.Name }}</li>
							<li>{{ item.text }}</li>
                            <li>{{item.createDate}}</li>
                            <li>  <vue-star animate="animated bounceIn" color="#F05654" class="star" >
                  <van-icon slot="icon" name="like"  color="#F56C6C"  />

                 </vue-star></li>
         

						</ul></table> -->

<!-- 
<van-goods-action>
  <van-goods-action-icon icon="chat-o" text="客服" />
  <van-goods-action-icon icon="shop-o" text="店铺" />
  <van-goods-action-button color="#be99ff" type="warning" text="加入购物车" />
  <van-goods-action-button color="#7232dd" type="danger" text="立即购买" />
</van-goods-action> -->
</div>


</template>

<script>
import axios from 'axios';
import url from'@/service_config.js';

export default {
 
 data() {
    return {
         detail:{},
     adname:'',
     comment:[],
        showShare: false,
      options: [
        { name: '微信', icon: 'wechat' },
        { name: '微博', icon: 'weibo' },
        { name: '复制链接', icon: 'link' },
        { name: '分享海报', icon: 'poster' },
        { name: '二维码', icon: 'qrcode' },
      ],
        
    }
  },
      created(){
window.console.log(window.localStorage.getItem('name'))
    window.console.log(this.$route.query.id)
     axios({
        url: url.getAdComment,
        method:'get',
         params:{
            id:this.$route.query.id,
         
        }

    })
    .then(res=>{
        window.console.log(res)
       this.detail=res.data;
  
//
 axios({
        url: url.getComment,
        method:'get',
        params:{
            id:this.$route.query.id,
         
        }

    })
    .then(res=>{
        window.console.log(res)
       this.comment=res.data;

       
    })
 

       
    })
 

},
 

    methods: {

 add(){
               
    axios({ 
        url:url.addwant,
        method:'post',
        data:{
            productId:this.$route.query.id,
            user:window.localStorage.getItem('name')
            }
        })

    .then(res=>{
        window.console.log(res);
      
    })
 },
         onSelect(option) {
      Toast(option.name);
      this.showShare = false;
    },
   registad(){
    axios({
     url:url.increaseComment,
     method:'post',
     data:{
   text:this.adname,
typeid:this.$route.query.id,
img:window.localStorage.getItem('poto'),
Name:window.localStorage.getItem('name')

  }
     })
     
  .then(res=>{
  
  if(res.data.code==200){
  
   this.$toast('添加成功');
axios({
        url: url.getComment,
        method:'get',
       params:{
            id:this.$route.query.id,
         
        }

    })
    .then(res=>{
        window.console.log(res)
       this.comment=res.data;

       
    })
  }else{
     this.$toast('添加失败')
     window.console.log(res);
    
  }
 })
 .catch(err=>{
  window.console.log(err);
 })
 },

  },

  
}
</script>

<style  lang="scss" scoped>
.star{
  font-size: 35px;
}

</style>
