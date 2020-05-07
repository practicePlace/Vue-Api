<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>基础用法</h2>
    <ul>
      <li><router-link :to="'/Directive'">指令</router-link></li>
      <li><router-link :to="'/Computed'">计算属性</router-link></li>
      <li><router-link :to="'/Watch'">观察属性</router-link></li>
      <li><router-link :to="'/Style'">Class与Style的绑定</router-link></li>
      <li><router-link :to="'/Event'">事件处理</router-link></li>
      <li><router-link :to="'/Form'">表单输入绑定</router-link></li>
      <br>
      <li><router-link :to="'/List'">列表渲染</router-link></li>
      <li><router-link :to="'/Component'">组件</router-link></li>
      <li><router-link :to="'/heightComponent'">高级组件用法</router-link></li>
      <li><router-link :to="'/TransitionList'">过渡  动画</router-link></li>
      <li><router-link :to="'/Prototype'">深入响应式原理</router-link></li>
    </ul>
    <h2>学习</h2>
    <li><router-link :to="'/jike'">极客时间-Vue的讲解</router-link></li>
    <h2>常见的几种应用场景</h2>
    <ul>
      <li><router-link :to="'/Directive'">异步执行Dom更新</router-link></li>

    </ul>
    <h2>生态圈</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
