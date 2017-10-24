<template>
  <div>
    <ul>
      <li><h3>基础</h3></li>
      <li><router-link :to="'/heightComponent/ChildQuote'">子组件的引用</router-link></li>
      <li><router-link :to="'/heightComponent/AsyncComponent'">异步方式加载组件</router-link></li>
      <li><h3>组件关系</h3></li>
      <li><router-link :to="'/heightComponent/Cycle'">组件递归</router-link><router-view></router-view></li>
      <li><router-link :to="'/heightComponent/FatherChild'">?父子组件相互嵌套</router-link></li>
      <li><h3>组件缓存</h3></li>
      <li><router-link :to="'/heightComponent/StaticCache'">静态缓存</router-link></li>
      <li><router-link :to="'/heightComponent/SportCache'">动态缓存</router-link></li>
      <li><h3>组件插槽</h3></li>
      <li><router-link :to="'/heightComponent/Slot'">单个插槽</router-link></li>
      <li><router-link :to="'/heightComponent/SlotMore'">多个插槽</router-link></li>
      <li><router-link :to="'/heightComponent/SlotScope'">作用域插槽</router-link></li>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {

      }
    }
  }
</script>

<style scoped="scoped">
  ul,li{
    list-style: none;
  }
</style>