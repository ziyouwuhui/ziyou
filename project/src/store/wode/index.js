//导入vue.js核心库
import Vue from 'vue'
//导入vuex模块
import Vuex from 'vuex';
//导入state(相当于data)模块
import state from './state'
//导入getters(相当于computed)模块
import {getters} from './getters'
//导入actions
import actions from './actions'
//导入index
import mutations from './mutations'
//启用vuex
Vue.use(Vuex);

//配置vuex
const store = new Vuex.Store({
  //共享状态
  state,
 
  getters,
 
  mutations,
 
  actions
});
// 导出存储对象
export default store;
