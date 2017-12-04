<template>
  <div>
    <h4>测试computed</h4>
    <div>
      <input type="text" v-model="abc" />
      <span>{{def}}</span>
    </div>
  </div>

</template>

<script>
   export default {
    data () {
       return {
         message: 'hello'
       }
     },
    computed: {
       abc: {
         get () {
           return 'abc'
         },
         set (val) {
           console.log(val)
         }
       },
       def () {
         return 'def'
       }
     },
     watch: {
       abc (val) {
          console.log(val)
       }
     }
  }
</script>

<style>
</style>