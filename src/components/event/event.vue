<template>
  <div>
    <div>
     <h2>事件修饰符</h2>
    <button @click="warn('Form cannot be submitted yet.', $event)">
      Submit
    </button>
    <button @click.once="warn('Form cannot be submitted yet.', $event)">
      Submit（只提交一次/事件修饰符）
    </button>
    <a href="https://cn.vuejs.org/v2/guide/events.html" target="_blank">更多事件修饰符请点此</a>
    </div>
    <div>
      <h2>键值修饰符</h2>
      <input v-on:keyup.enter="submit"/>
      <!-- 缩写语法 -->
      <input @keyup.enter="submit" placeholder="缩写语法">
      <a href="https://cn.vuejs.org/v2/guide/events.html" target="_blank">更多键值修饰符请点此</a>
      <a href="https://cn.vuejs.org/v2/api/#keyCodes" target="_blank">对象自定义键值修饰符别名</a>
    </div>
    <div>
      <h2>修饰键</h2>
      <!-- Ctrl + Click -->
      <div @click.ctrl="doSomething">Ctrl + Click</div>
    </div>
  </div>
</template>
<script>
  export default {
    methods: {
      warn: function (message, event) {
        // $event 现在我们可以访问原生事件对象
          if (event) event.preventDefault()
          alert(message)
      },
      submit(){
        console.log('只有在 keyCode 是enter 时调用 vm.submit()' )
      },
      doSomething(){
        console.log(123)
      }
    }
  }
</script>
<style>

</style>