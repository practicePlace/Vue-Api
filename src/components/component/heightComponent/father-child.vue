<template>
  <div>
  <p>
    <span>{{ folder.name }}</span>
    <child/>
  </p>
  </div>
</template>

<script>
  import child from './father-child-two'
  export default{
    components: {
      child
    },
    data(){
      return {
        folder:{name:'father',children:'child'}
      }
    }
  }
</script>

<style>
</style>