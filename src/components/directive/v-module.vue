<template>
  <div>
    <p>number</p>
    <input v-model.number="a"/>
    <p>{{a}}</p>
    <button @click=testA>输入后提交数字</button>
    <br><br>
    <p>lazy</p>
    <input v-model.lazy="b"/>
    <p>{{b}}</p>
    <br><br>
    <p>trim</p>
    <input v-model.trim="c"/>
    <p>{{c}}</p>
    <button @click=testC>提交</button>
  </div>
</template>

<script>
  export default{
    data () {
      return {
        a:'123',
        b:'内容是在change事件改变',
        c:'自动过滤首尾空格'
      }
    },
    methods: {
      testA(){
        console.log(this.a)
      },
      testC(){
        console.log(this.c)
      }
    },
    mounted(){
    }
  }
</script>

<style scoped="scoped">
  *{
    margin: 0;
    padding: 0;
  }
</style>