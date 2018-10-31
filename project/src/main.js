// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import axios from 'axios'
import VueAxios from 'vue-axios'
// 导入vuex
import Vuex from 'vuex'
//引入vuex封装模块
import store from './store/wode/'


Vue.use(Vuex)
Vue.use(VueAxios, axios);
// require styles
import 'swiper/dist/css/swiper.css'



Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.use(ElementUI);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
