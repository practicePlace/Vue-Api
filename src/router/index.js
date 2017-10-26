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
//重点 组件
import Component from '@/components/component/component'

//高级组件
import heightComponent from '@/components/component/heightComponent/height-component'
  //递归组件
import Cycle from '@/components/component/heightComponent/component-cycle'
  //父子组件相互嵌套
import FatherChild  from '@/components/component/heightComponent/father-child'
  //子组件的引用
import ChildQuote from '@/components/component/heightComponent/child-quote'
  //异步组件
import AsyncComponent from '@/components/component/heightComponent/async-component'
  //静态缓存
import StaticCache from '@/components/component/heightComponent/static-cache'
  //动态缓存
import SportCache from '@/components/component/heightComponent/sport-cache'
  //插槽分发---单个
import Slot from '@/components/component/heightComponent/slot'
  //插槽分发---多个
import SlotMore from '@/components/component/heightComponent/slot-more'
  //作用域插槽
import SlotScope from '@/components/component/heightComponent/slot-scope'

//过渡 && 动画
  // 列表过渡
import TransitionList from '@/components/animation/transition-list'
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
    {
      path:'/Component',
      name: 'Component',
      component: Component
    },
    // 高级组件
    {
      path:'/heightComponent',
      name:'heightComponent',
      component: heightComponent,
    },
    // 组件递归
    {
        path: '/heightComponent/Cycle',
        name: 'Cycle',
        component: Cycle
    },
    //组件的父子嵌套
    {
      path:'/heightComponent/FatherChild',
      name: 'FatherChild',
      component: FatherChild
    },
    //子组件的引用
    {
      path:'/heightComponent/ChildQuote',
      name:'ChildQuote',
      component: ChildQuote
    },
    {
      path:'/heightComponent/AsyncComponent',
      name:'AsyncComponent',
      component: AsyncComponent
    },
    {
      path:'/heightComponent/StaticCache',
      name:'StaticCache',
      component: StaticCache
    },
     {
      path:'/heightComponent/SportCache',
      name:'SportCache',
      component: SportCache,
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
    {
      path:'/heightComponent/Slot',
      name:'Slot',
      component: Slot
    },
    {
      path:'/heightComponent/SlotMore',
      name:'SlotMore',
      component: SlotMore
    },
    {
      path:'/heightComponent/SlotScope',
      name:'SlotScope',
      component: SlotScope
    },
    {
      path:'/TransitionList',
      name:'TransitionList',
      component: TransitionList
    }

  ]
})
