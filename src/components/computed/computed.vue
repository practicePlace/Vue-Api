<template>
  <div>
      <h3>计算属性的缓存</h3>
     <p>Original message:{{message.split('').reverse().join('')}}</p>
     <p>1.Computed reversed message:{{reversedMessage}}</p>
     <p>2.Reversed message: "{{ reversedMessage2() }}"</p>
     <p>3.{{now}}</p>
     <p>all: 1.建立响应式依赖 2.计算属性有缓存，这是优于用方法调用过滤的地方 3.cache:false关闭缓存，对于非响应式依赖</p>
     <h3>计算属性VS被观察的属性?</h3>
     <p>{{firstName}}</p>
     <p>{{lastName}}</p>
     <p>watchName : {{fullName}}</p>
     <p>computedName ： {{computedName}}</p>
     <p>all：
            当你有一些数据需要随着其它数据变动而变动时，你很容易滥用 watch
            通常更好的想法是使用计算属性而不是命令式的 watch 回调
     </p>
     <h3>计算属性的setter</h3>
     <p>setName :{{setName}} </p>
     <p>all:set可以设置 反依赖的改变    // 必须要手动调用一次setName，set才会被调用；</p>
     <h3>常见问题</h3>
     <p>当包含该计算属性的节点被移除后，get将不再执行</p>
  </div>
</template>

<script>
  export default{
    data () {
      return {
        message: "Hello",
        firstName: 'For',
        lastName: 'Bar',
        fullName: 'Foo Bar'
      }
    },
    computed: {
      reversedMessage(){
        // 计算属性：依赖message变化而变化  依赖没变化就不会重新渲染；
        return this.message.split('').reverse().join('')
      },
      computedName(){
        return this.firstName + ' ' +this.lastName
      },
      now:{
        get:function(){
          return Date.now()+this.fullName
        },
        cache: false
      },
      setName:{
        //getter
        get:function(){
          return this.firstName + ' ' + this.lastName
        },
        //setter  反依赖改变；
        set:function(newValue){
          var names = newValue.split(' ')
          this.firstName = 123
          this.lastName = names[names.length - 1]
        }
      }
    },
    methods: {
      reversedMessage2(){
        // 表达式调用    每次都会重新调用；
        return this.message.split('').reverse().join('')
      }
    },
    watch: {
      firstName: function (val) {
        this.fullName = val + ' ' + this.lastName
      },
      lastName: function (val) {
        this.fullName = this.firstName + ' ' + val
      }
    },
    mounted(){
      // 必须要手动调用一次，set才会被调用；
      this.setName = 'John Doe'
      for(let i = 0 ;i<3;i++){
        console.log(this.now)
      }

    }
  }
</script>

<style>
</style>