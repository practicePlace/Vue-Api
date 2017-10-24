<template>
  <div>
    <ul>
      <li @click="change">
        children
      </li>
    </ul>
    <father v-if="show"></father>
  </div>
</template>

<script>
  import father from './father-child'
  export default {
    name: 'father',
    components: {
      father
    },
    data(){
      return{
        show:false
      }
    },
    methods:{
      change(){
        this.show = !this.show
      }
    }
  }
</script>

<style>
</style>