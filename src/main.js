import Vue from 'vue'

import App from './App.vue'
import router from './router'

 import axios from 'axios'
import store from './store/store'
import './assets/font_1750047_k36768boelp/iconfont.css'



//请求拦截器
axios.interceptors.request.use( config => {
//判断是否存在token，如果存在将每个页面的header都添加token
if (store.state.token){
config.headers.common[ 'Authorization' ]=store.state.token //此处的XX-Token要根据登录接口中请求头的名字来写
}
return config;
}, error => {
// 请求错误
return Promise .reject(error);
});
//respone拦截器
axios.interceptors.response.use(
response => {
return response;
},
error => { //默认除了2XX之外都为错误
if (error.response){
switch (error.response.status){
case 401 :
this .$store.commit( 'delToken' );
router.replace({ //跳转到登录页面
path: '/profile' ,
query : { redirect : router.currentRoute.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
});
}
}
return Promise .reject(error.response);
}
);


//导入vue-resource
import vueResource from 'vue-resource'
//使用resource
Vue.use(vueResource)

Vue.config.productionTip = false

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import VueStar from 'vue-star'
Vue.component('VueStar', VueStar)


import SlideVerify from 'vue-monoplasty-slide-verify';
Vue.use(SlideVerify);

import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';

Vue.use(MuseUI);

import waterfall from 'vue-waterfall2'
Vue.use(waterfall)

import Vant from 'vant';
import 'vant/lib/index.css';
import { SubmitBar,Card ,ShareSheet,Empty,Panel,AddressEdit,  NoticeBar,Rate,Picker,Popup, Search,CountDown,List,Row,Col,Icon ,Button,NavBar,Tab,CellGroup,Field,Swipe,Lazyload,Divider,Image,Toast} from 'vant';
Vue.use(CellGroup);
Vue.use(SubmitBar);
Vue.use(Card );
Vue.use(ShareSheet);
Vue.use(Empty);
Vue.use(Panel);
Vue.use(AddressEdit);
Vue.use( NoticeBar);
Vue.use(Rate);
Vue.use(Picker);
Vue.use(Search);
Vue.use(Popup);
Vue.use(Toast);
Vue.use(CountDown);
Vue.use(Icon);
Vue.use(Field);
Vue.use(NavBar);
Vue.use(Button);
Vue.use(Tab);
Vue.use(Swipe);
Vue.use(Lazyload);
Vue.use(Divider);
Vue.use(Image);
Vue.use(Row);
Vue.use(Col);
Vue.use(List);
Vue.use(Vant);


new Vue({
  router,
   store,
  render: h => h(App),
}).$mount('#app')
