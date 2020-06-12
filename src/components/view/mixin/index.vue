<template>
  <div>
    <h1>mix in </h1>
    <p>当我们想在组件之间共享相同的属性时，可以将公共属性提取到一个单独的模块中：mixin</p>
    <p>{{myLocalDataProperty}} or {{mySharedDataProperty}}</p>
    <p><b>注意：优先级排序： 组件数据 > 混入数据； 组件生命周期 迟于 混入的生命周期</b></p>
  </div>
</template>

<script>
import MyMixin from './mixin.js'
export default {
  mixins: [MyMixin],
  data () {
    return {
      myLocalDataProperty: 'myLocalDataProperty'
    }
  },
  computed: {},
  created () {
    this.myLocalMethod()
    this.mySharedMethod()
  },
  methods: {
    myLocalMethod () {
      console.log('myLocalMethod', this.myLocalDataProperty)
    }
  }
}
</script>
<style scoped>
</style>
