<template>
  <div>
    <span>child（普通传递）:</span><span>{{message}}</span>
    <span>obj(传递一个对象):</span><span>{{obj}}</span>
    <span>change（改变propd正确写法）:</span><span>改变前：{{change}}</span><span>data改变后：{{count}}</span><span>computed改变后：{{counter}}</span>
    <p>all:注意在 JavaScript 中对象和数组是引用类型，指向同一个内存空间，如果 prop 是一个对象或数组，在子组件内部改变它会影响父组件的状态。</p>
  </div>
</template>

<script>
  export default{
    props:['message','obj','change'],
    data(){
      return {
        count: this.change
      }
    },
    computed:{
      counter(){
        return this.change+1
      }
    },
    mounted(){
      // 不能直接改变prop的值，否则会报错； 可以通过赋值局部变量date或者计算属性computed两种方式改变
      // this.change = '改变后'
    }
  }
</script>

<style>
</style>
