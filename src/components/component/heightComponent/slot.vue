<template>
  <div>
    <div>slot</div>
    <h1>我是父组件的标题</h1>
    <my-component>
      <p>这是一些初始内容</p>
      <p>这是更多的初始内容</p>
    </my-component>
  </div>
</template>

<script>
  export default{
    components:{
      // 父组件传入的整个内容片段将插入到插槽slot所在的 DOM 位置，并替换掉插槽标签本身。
      // slot中的内容只有在宿主元素为空，且没有要插入的内容时才显示备用内容。
      MyComponent: {
        template: `
        <div>
          <h2>我是子组件的标题</h2>
          <slot>
             只有在没有要分发的内容时才会显示。
          </slot>
        </div>
        `
      }
    }
  }
</script>

<style>
</style>