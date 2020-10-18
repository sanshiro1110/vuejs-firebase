import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';

Vue.config.productionTip = false;

axios.defaults.baseURL = "https://firestore.googleapis.com/v1/projects/vuejs-http2-8053c/databases/(default)/documents";

axios.interceptors.request.use(
  config => {
    return config;
  },
);
// axios.interseptors.response.use();

new Vue({
  render: h => h(App),
}).$mount('#app')
