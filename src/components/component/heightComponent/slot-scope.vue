<template>
  <div>
    <div>作用域插槽 </div>
    <div class="parent">
      <child>
        <template scope="props">
          <p>hello from parent</p>
          <p>{{ props.text }}</p>
        </template>
      </child>
    </div>
    <div> !用作一个 (能被传递数据的) 可重用模板，来代替已经渲染好的元素。<b>常用于 “列表渲染”</b></div>
   <!-- <my-awesome-list :items="items">
      <li
        slot="item"
        scope="props"
        class="my-fancy-item">
        {{ props.text }}
        </li>
    </my-awesome-list>-->
  </div>
</template>

<script>
  export default{
    data(){
      return {
        items:[{1:1},{2:2}]
      }
    },
    components: {
      child:{
        template:`
        <div class="child">
          <slot text="hello from child"></slot>
        </div>
        `
      }
     /* ,
      MyAwesomeList: {
        template: `
        <ul>
          <slot name="item"
            v-for="item in items"
            :text="item.text">
          </slot>
        /ul>
        `
      }*/
    }
  }
</script>

<style>
</style>