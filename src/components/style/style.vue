<template>
  <div>
    <h2>1.绑定HtmlClass</h2>
    <h3>#对象语法</h3>
    <h4>存入一个对象style里面</h4>
    <div class="static" :class="style">
      <p>动态切换Class</p>
      <button @click=tab>点击切换</button>
    </div>
    <p>all:失去了true/false的变量控制</p>
    <h4>常常与计算属性结合</h4>
    <div :class="classObject">计算</div>
    <button @click=tab2>点击切换</button>
    <p>all:保留了true/false的变量控制</p>
    <!--   --------------------------      -->
    <h3>#数组语法</h3>
     <div :class="[isActive?activeClass:'', error?errorClass:'']">Class渲染为{{activeClass}} {{errorClass}} </div>
    <h3>#用在组件上（待补充）</h3>
    <h2>2.绑定内联样式</h2>
    <h3>#对象语法</h3>
    <div :style="{ color: activeColor, fontSize: fontSize + 'px' }">Style模板</div>
    <div :style="styleObject">Style对象</div>
     <h3>#自动添加前缀</h3>
     <p>当 v-bind:style 使用需要添加浏览器引擎前缀的 CSS 属性时，如 transform，Vue.js 会自动侦测并添加相应的前缀。</p>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        //对象语法
        style: {
          blue: true,
          red: false
        },
        isActive: true,
        error: false,
        //数组语法
        activeClass: 'active',
        errorClass: 'danger',
        //对象语法
        activeColor: 'red',
        fontSize: 30,
        styleObject: {
          color: 'red',
          fontSize: '13px'
         }
      }
    },
    computed: {
      classObject: function () {
        return {
          active: this.isActive,
          danger: this.error
        }
      }
    },
    methods: {
      tab() {
        this.style.blue = !this.style.blue
        this.style.red = !this.style.red
      },
      tab2(){
        this.isActive = !this.isActive
        this.error = !this.error
      }
    }
  }
</script>
<style scoped="scoped">
  .blue,.active{
    color: blue;
  }

  .red,.danger{
    color: red;
  }

</style>