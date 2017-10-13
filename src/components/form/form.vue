<template>
  <div>
      <h2>基础用法</h2>
      <h3>#文本</h3>
        <input v-model="message" placeholder="edit me">
        <p>Message is: {{ message }}</p>
      <h3>#多行文本</h3>
      <textarea v-model="message" placeholder="add multiple lines"></textarea>
       <br>
      <span>Multiline message is:</span>
        <p style="white-space: pre-line;">{{ message }}</p>
      <!--复选框-->
      <h3>#复选框</h3>
      <p>单个勾选框</p>
        <input type="checkbox" id="checkbox" v-model="checked">
        <label for="checkbox">{{ checked }}</label>
      <p>多个勾选框</p>
        <div id='example-3'>
          <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
          <label for="jack">Jack</label>
          <input type="checkbox" id="john" value="John" v-model="checkedNames">
          <label for="john">John</label>
          <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
          <label for="mike">Mike</label>
          <br>
          <span>Checked names: {{ checkedNames }}</span>
        </div>
      <!--单选按钮-->
      <h3>单选按钮</h3>
        <div id="example-4">
          <input type="radio" id="one" value="One" v-model="picked">
          <label for="one">One</label>
          <br>
          <input type="radio" id="two" value="Two" v-model="picked">
          <label for="two">Two</label>
          <br>
          <span>Picked: {{ picked }}</span>
        </div>
      <!--选择列表-->
      <h3>选择列表</h3>
      <p>单选列表</p>
      <div id="example-5">
        <select v-model="selected">
          <option disabled value="">请选择</option>
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </select>
        <span>Selected: {{ selected }}</span>
        <textarea name="" id="" cols="30" rows="10">
                   如果 v-model 表达初始的值不匹配任何的选项，'<select>' 元素就会以”未选中”的状态渲染。在 iOS 中，
                   这会使用户无法选择第一个选项，因为这样的情况下，iOS 不会引发 change 事件。
                   因此，像以上提供 disabled 选项是建议的做法。
        </textarea>
      </div>
      <p>多选列表 (绑定到一个数组)：</p>
      <select v-model="selected2">
          <option v-for="option in options" v-bind:value="option.value">
            {{ option.text }}
          </option>
      </select>
      <span>Selected: {{ selected2 }}</span>
     <h2>值绑定?</h2>
      <input type="radio" v-model="picked2">
      <a href="https://cn.vuejs.org/v2/guide/components.html#使用自定义事件的表单输入组件" target="_blank">其他：自定义 input 类型</a>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        message:'',
        checked:true,
        checkedNames: [],
        picked:'',
        selected: '',
        selected2: 'A',
        options: [
          { text: 'One', value: 'A' },
          { text: 'Two', value: 'B' },
          { text: 'Three', value: 'C' }
        ],
        picked2:''
      }
    },
    mounted(){
      console.log(this.picked2)
    }
  }
</script>

<style>
</style>