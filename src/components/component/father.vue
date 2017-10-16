<template>
  <div>
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
        this.counter += 1
        this.$emit('increment')
      }
    },
  }
</script>

<style>
</style>