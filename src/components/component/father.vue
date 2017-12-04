<template>
  <div>
    <div>参考文档：http://www.jb51.net/article/115624.htm</div>
    <button @click="incrementCounter">{{ counter }}</button>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        counter: 0
      }
    },
    methods: {
      incrementCounter: function () {
        this.counter += 2
        this.$emit('increment')
      }
    },
  }
</script>

<style>
</style>