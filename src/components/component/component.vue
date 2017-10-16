<template>
  <div>
    <h2>字符串模板方式引入组件</h2>
    <h2>table模板</h2>
    <table>
      <tr is="my-row"></tr>
    </table>
    <h2>通信</h2>
    <p>父子组件：<b>prop</b> 向下传递，<b>事件</b>向上传递</p>
    <h5>基础用法1 父子传递     改变prop(data/computed)</h5>
    <child :message="'123'" :obj="obj" :change="change"></child>
    <h5>基础用法2 prop验证(仅作用于开发使用)</h5>
    <p>prop验证，prop的形式必须是对象，而不是字符串与数组</p>
    <verify :height="'dfa'"></verify>
    <h5>基础用法3 子父传递 自定义事件</h5>
    <span>每次触发子组件的同时触发父组件：{{total}}</span>
    <father v-on:increment="incrementTotal"></father>
  </div>
</template>

<script>
  import myRow from './table'
  import child from './child'
  import verify from './verify'
  import father from './father'
  export default{
    components:{
      myRow,
      child,
      verify,
      father
    },
    props:{
      height:Number
    },
    data(){
      return {
        obj:{
          arr:1,
          newarr:2
        },
        change: '0',
        total: 0
      }
    },
    methods :{
      incrementTotal: function () {
        this.total += 1
      }
    }
  }
</script>

<style>
</style>