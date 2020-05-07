import Vue from 'vue'
import Router from 'vue-router'
// Vue 路由
import VueRouter from './vue-router'
Vue.use(Router)
export default new Router({
  routes: [
    ...VueRouter //扩展运算符
  ]
})
