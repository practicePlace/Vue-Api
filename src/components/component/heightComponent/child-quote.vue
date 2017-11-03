<template>
  <div id="parent">
    <ggg  ref="profile"></ggg>
    <div ref="dom"> 节点引用</div>
  </div>
</template>

<script>
  export default{
    components:{
      ggg: {
        template: `<p>子组件</p>`,
        data(){
          return {
            obj: 'children'
          }
        }
      }
    },
    mounted(){
      // 访问子组件实例
      var child = this.$refs.profile
      console.log('组件引用,指向该实例', child)
      var dom =this.$refs.dom
      console.log('指向该节点', dom)
      console.log('$refs的注册集合对象', this.$refs)
    }
  }
</script>
<!--注意事项-->
当 ref 和 v-for 一起使用时，获取到的引用会是一个数组，包含和循环数据源对应的子组件。
$refs 只在组件渲染完成后才填充，并且它是非响应式的。它仅仅是一个直接操作子组件的应急方案——应当避免在模板或计算属性中使用 $refs。
<style>
</style>