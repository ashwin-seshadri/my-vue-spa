import Vue from 'vue';
import Vuex from 'vuex';
import appService from '../app.service.js';
import postsModule from './posts.js'

Vue.use(Vuex);

const state = {
  isAuthenticated: false
};

const store = new Vuex.Store({
  modules: {
    postsModule
  },
  state,
  getters: {
    isAuthenticated: (state) => {
      return state.isAuthenticated;
    }
  },
  actions:{
    logout(context) {
      context.commit('logout');
    },
    login(context, credentials){
      return new Promise((resolve, reject) => {
        appService.login(credentials)
      .then((data) => {
        context.commit('login', data);
        resolve();
      }).catch(() => reject());
      });
    }
  },
  mutations: {
    login(state, data){
      if(typeof window !== 'undefined'){
        window.localStorage.setItem('token', data.token);
        window.localStorage.setItem('tokenExpiration', data.expiration);
      }
      state.isAuthenticated = true;
    },
    logout(state){
      if(typeof window !== 'undefined'){
        window.localStorage.setItem('token', null);
        window.localStorage.setItem('tokenExpiration', null);
      }
      state.isAuthenticated = false;
    }
  }
});

if(typeof window !== 'undefined'){
  document.addEventListener('DOMContentLoaded', function(event){
    let expiration = window.localStorage.getItem('tokenExpiration');
    var unixTimeStamp = new Date().getTime()/1000;
    if(expiration !== null && parseInt(expiration) - unixTimeStamp > 0){
      store.state.isAuthenticated = true;
    }
  })
}

export default store;
