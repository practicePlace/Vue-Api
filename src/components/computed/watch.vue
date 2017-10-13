<template>
  <div id="watch-example">
    <p> Ask a yes/no question: <input v-model="question"> </p>
    <p>{{ answer }}</p>
    <p>All: 在这个示例中，<b>使用 watch 选项允许我们s执行"异步操作 (访问一个 API)"</b>，限制我们执行该操作的频率，
      并在我们得到最终结果前，设置中间状态。
      这是计算属性无法做到的。</p>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        question: '',
        answer: 'I cannot give you an answer until you ask a question!'
      }
    },
    watch: {
      // 如果 question 发生改变，这个函数就会运行
      question: function (newQuestion) {
        this.answer = 'Waiting for you to stop typing...'
        this.getAnswer()
      }
    },
    methods: {
      getAnswer(){
        console.log(123)
      }
     /* // _.debounce 是一个通过 lodash 限制操作频率的函数。
      // 在这个例子中，我们希望限制访问 yesno.wtf/api 的频率
      // ajax 请求直到用户输入完毕才会发出
      // 学习更多关于 _.debounce function (and its cousin
      // _.throttle)，参考：https://lodash.com/docs#debounce
      getAnswer: _.debounce(function () {
          if (this.question.indexOf('?') === -1) {
            this.answer = 'Questions usually contain a question mark. ;-)'
            return
          }
          this.answer = 'Thinking...'
          var vm = this
          axios.get('https://yesno.wtf/api').then(function (response) {
            vm.answer = _.capitalize(response.data.answer)
          }).catch(function (error) {
            vm.answer = 'Error! Could not reach the API. ' + error
          })
        },
        // 这是我们为用户停止输入等待的毫秒数
        500)*/
    }
  }
</script>
<style>

</style>