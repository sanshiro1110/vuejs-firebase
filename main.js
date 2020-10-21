import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';
import router from './router';
import store from './store/index';

Vue.config.productionTip = false;

axios.defaults.baseURL = "https://firestore.googleapis.com/v1/projects/vuejs-http2-8053c/databases/(default)/documents";

//0
// const interceptorsRequest =
axios.interceptors.request.use(
  config => {
    // console.log('interceptors request');
    //thenに繋げたかったらこれでいいけど
    return config;
  },
  error => {
    //catchに繋げたかったらPromise.reject()
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  config => {
    // console.log('interceptors response');
    //thenに繋げたかったらこれでいいけど
    return config;
  },
  error => {
    //catchに繋げたかったらPromise.reject()
    return Promise.reject(error);
  }
);

// axios.interceptors.request.eject(interceptorsRequest);

//最初に描画される時にautoLoginが実行される。
store.dispatch('autoLogin');
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
