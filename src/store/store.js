
import Vue from 'vue';
import Vuex from 'vuex';
 
Vue.use(Vuex);
 
export default new Vuex.Store({
  state: {
    userName:'未登录',
    //
    token: localStorage.getItem('token') ? localStorage.getItem('token') : '',
  },


  mutations: {
    changeLogin(state,ststus){
      state.userName=ststus;
    },

    //
    setToken (state,token) {
      state.token =token;
      localStorage.setItem("token",token.token);     //存储token
    },
    delToken (state) {
      state.token = '';
      localStorage.removeItem("token");  
      localStorage.removeItem("name");  
      localStorage.removeItem("poto");  
      //删除token
    }
  },
  actions:{
    loginAction({commit},user){
      commit('changeLogin',user)
    }

  }

})
