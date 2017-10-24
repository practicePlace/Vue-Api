<template>
  <div>
    <example></example>
  </div>
</template>

<script>
  export default {
    components: {
      // webpack 2 + ES2015 的异步组件的写法
     Example:()=>import('./child-quote')
    }
  }
</script>

<style>
</style>