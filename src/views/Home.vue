<template>
<div > 

<van-nav-bar title="首页">
</van-nav-bar>


    <van-swipe :autoplay="3000" >
  <van-swipe-item v-for="(image, index) in images" :key="index"  >
    <img v-lazy="image" :src="image" width="414px"/>
  </van-swipe-item>
</van-swipe>

 <div class="container-water-fall water-content">
    <waterfall :col="col"
               :data="data"
               @loadmore="loadmore">
      <template>
        <div class="cell-item"
             v-for="(item,index) in data"
             :key="index">
          <img  @click="gocomment(item._id)"
              v-if="item.img"
               :src="item.img"
               alt="加载错误">
          <div class="item-body">
            <div class="van-multi-ellipsis--l2">{{item.title}}</div>
<van-tag plain type="warning">{{item.tap}}</van-tag>

       <div class="item-footer">
                  <div class="avatar" :style="{backgroundImage : `url(${item.avatar})` }"></div>
                        <div class="name">{{item.user}}</div>

                       
                 <vue-star animate="animated bounceIn" color="#F05654" class="star" >
                  <van-icon slot="icon" name="like"  color="#F56C6C"  />

                 </vue-star>
                        
          </div>

          </div>
        </div>
      </template>
    </waterfall>
    <loading :show="loading" />
  </div>


</div>

</template>

<script>
import axios from 'axios';
import url from'@/service_config.js';
import{ mapState}from'vuex';
import loading from "@/components/load";
export default {
  props: {
    title: String
  },
  components: {
    loading
  },
 data() {
    return {
      images: [  
         require("../assets/img/1.jpg") ,
     require("../assets/img/2.jpeg") ,
       
      
              
              
                //   require("../assets/img/e.gif") ,
        

    ],
       data: [],
      col: 2,
      loading: false,
      gitHubData: {},
      originData: []
    }
  },
   created(){
  
     axios({
         url:url.getAd,
         method:'get',

         })
     .then(res=>{
         
         window.console.log(res);
         this.data=res.data;
     })
     .catch(err=>{
          window.console.log(err);
     })
 },
 
 computed: {
    itemWidth() {
      return 133 * 0.5 * (document.documentElement.clientWidth / 375);
    },
    gutterWidth() {
      return 10 * 0.5 * (document.documentElement.clientWidth / 375);
    }
  }, 
    methods: {
    // toGitHub() {
    //   window.open(
    //     "https://github.com/Rise-Devin/vue-waterfall2/blob/master/README.md",
    //     "_blank"
    //   );
    // },
    gocomment(id){
    console.log(id);
    this.$router.push({
        path:"/comment",
       query :{
            id:id
        }
    })
},

    reset() {
      this.data = [];
    },
 
    switchCol(col) {
      this.col = col;
    },
 
    loadmore() {
      console.log(9999)
      this.loading = true;
      setTimeout(() => {
        this.data = this.data.concat(this.originData, this.originData);
        this.loading = false;
      }, 1000);
    }
  },
    mounted() {
    console.log('cascadeShow')
 
    this.data = this.originData;
  }
  
}
</script>

<style  lang="scss" scoped>
.container-water-fall {
  // padding: 0 28px;
  box-sizing: border-box;
  &.water-content {
    margin: 0 15px;
  }
 
 
 
  .cell-item {
     border: 6px solid rgb(253, 253, 253);
    width: 100%;
    background: #ffffff;
    overflow: hidden;
    box-sizing: border-box;
    border-radius: 10px;
    margin-top: 10px;
    img {
      // border-radius: 12px 12px 0 0;
      width: 100%;
      height: auto;
      display: block;
    }
    .item-body {
      //  border: 6px solid #F0F0F0;
      padding: 22px;
     
      .item-desc {
        font-size: 15px;
        color: #333333;
        line-height: 15px;
        font-weight: bold;
      }
   .item-footer {
        margin-top: 22px;
        position: relative;
        display: flex;
        align-items: center;
  
     
      }
       .avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background-repeat: no-repeat;
          background-size: contain;
        }
        .name {
          max-width: 150px;
          margin-left: 10px;
          font-size: 14px;
          color: #999999;
        }
        .star{
          margin-left: 50px;
        }
    }
  }
}
.githubdata {
  float: right;
  margin-right: 90px;
  img {
    width: 14px;
    // height: 16px;
  }
}
</style>
