import Vue from 'vue'
import Router from'vue-router'
import VueResource from 'vue-resource'
import Home from'./views/Home.vue'
import Musiclist from'./views/Musiclist.vue'
import Comment from'./views/Comment.vue'
import Wait from'./views/Wait.vue'
import Detail from'./views/Detail.vue'
import Profile from'./views/Profile.vue'
import test from'./views/test.vue'
import yanzhen from'./views/yanzhen.vue'

import One from'./test/one.vue'
// import Two from'./test/two.vue'
// import Three from'./test/three.vue'
// import Four from'./test/four.vue'
// import Fine from'./test/fine.vue'




import About from'./admin/components/About.vue'
// import Customers from'./admin/components/Customers.vue'
// import denlucustomers from'./admin/components/denlucustomers.vue'
// import tester from'./admin/components/tester.vue'
import denlutester from'./admin/components/denlutester.vue'
import { Toast } from 'vant'


Vue.use(Router)
Vue.use(VueResource)
 
 const   routes=[
        {
            path:'/',
            name:'home',
            component:Home,
            // meta: {
            //     requireAuth: true, // 判断是否需要登录
            //    },
            // meta:{
            //  //当有这个字段的时候，我们就认为这个路由页面是要有登录权限的
            // },
        },{
            path:'/musiclist',
            name:'musiclist',
            // meta: {auth: true},
            component:Musiclist
        },{
            path:'/detail',
            name:'detail',
            component:Detail
        },
        {
          path:'/yanzhen',
          name:'yanzhen',
          component:yanzhen
      },
      
        {
            path:'/wait',
            name:'wait',
            component:Wait
        }

        ,{
          path:'/one',
          name:'one',
          component:One
    },
//         path:'/two',
//         name:'two',
//         component:Two
//     },{
//       path:'/three',
//       name:'three',
//       component:Three
//   },{
//     path:'/four',
//     name:'four',
//     component:Four
// },{
//   path:'/fine',
//   name:'fine',
//   component:Fine
// },
      

        {
            path:'/profile',
            name:'profile',
            component:Profile},
            {
              path:'/test',
              name:'test',
              component:test},
            // {
            //   path:'/denlucustomers',
            //   name:'denlucustomers',
            //   component:denlucustomers},
              {
                path:'/denlutester',
                name:'denlutester',
                component:denlutester},
            // {
            //     path:'/customers',
            //     name:'customers',
            //     component:Customers},
                {
                  path:'/comment',
                  name:'comment',
                  component:Comment},
                {
                    path:'/about',
                    name:'about',
                    component:About},

                   
            
          
        
    ]



//实例化路由
var router=new Router({
    mode:'history',
    base:__dirname,
    routes:routes
})

  
router.beforeEach((to, from, next) => {
    if (to.path === '/profile') {    //若要跳转的页面是登录界面
     next();     //直接跳转
      window.console.log('要跳转到的页面');
    }
    else if (to.path === '/wait'){   //若要跳转的页面是个人界面
      let token = localStorage.getItem('token');    //获取本地存储的token值
      if (token===null||token===''){    //若token为空则验证不成功，跳转到登录页面
        next('/profile');
        Toast.fail('用户未登录')
        window.console.log('若token为空则验证不成功');
      }
      else{           //不为空则验证成功
        next();
        window.console.log('//不为空则验证成功');
      }
    }
    else{
   next();
      this.$router.push('/profile');
      window.console.log('不是登陆页面');
    }
  });
 
  
//暴露路由
export default router;