import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
//指令
import Directive from '@/components/Directive/directive'
import Vmodel from '@/components/Directive/v-module'
//计算属性
import Computed from '@/components/computed/computed'
//观察属性
import Watch from '@/components/computed/watch'
//Class与Style的绑定
import Style from '@/components/style/style'
//事件处理
import Event from '@/components/event/event'
//表单输入绑定
import Form from '@/components/form/form'
//重点： 列表渲染
import List from '@/components/list/list'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/Directive',
      name: 'Directive',
      component: Directive,
      children:[{
        path: 'Vmodel',
        component: Vmodel
      }]
    },
    {
      path:'/Computed',
      name:'Computed',
      component: Computed
    },
    {
      path:'/Watch',
      name:'Watch',
      component: Watch
    },
    {
      path:'/Style',
      name:'Style',
      component: Style
    },
    {
      path:'/Event',
      name: 'Event',
      component: Event
    },
    {
      path:'/Form',
      name: 'Form',
      component: Form
    },
    {
      path:'/List',
      name: 'List',
      component: List
    },
  ]
})
