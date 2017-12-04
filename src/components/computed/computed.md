# computed
### 核心： 依赖缓存而改变
基础用法：1.get：依赖缓存，监测data数据的变化；2.set:监测computed数据的变化 。3，关闭cache:每次访问都是最新的而非缓存；

实现用computed代替watch的地方：
* 1.data  => computed
  > data数据改变,computed因改变而改变;而不会用watch; √
  > 监听data的变化

demo

```VUE
<template>
  <div>
    <h4>测试computed</h4>
    <div>
      <input type="text" v-model="message" />
      <span>{{defdata}}</span>
    </div>
    <div>setter</div>

  </div>

</template>

<script>
   export default {
    data () {
       return {
         message: 'hello'
       }
     },
    computed: {
       def () {
         return 'dfd'
       },
       defdata () {
         console.log(this.message) // message被改变的时候，这里会被执行；并重新赋值defdata变量
         return 'dfd' +this.message
       }
     }
  }
</script>
```
* 2.Computed  => data ×
  > computed不能监听computed的变化(注意：即使使用set，也改变不了computed的值，只能改变data;)
  > 监听computd的变化用set/watch

demo computed不能监听computed的变化

```VUE
<template>
  <div>
    <h4>测试computed</h4>
    <div>
      <input type="text" v-model="abc" />
      <span>{{def}}</span>
    </div>
    <div>setter</div>
  </div>

</template>

<script>
   export default {
    data () {
       return {
         message: 'hello'
       }
     },
    computed: {
       abc () {
         return 'abc'
       },
       def () {
         console.log(this.abc)  // 这里不会被执行并重新赋值def变量
         return 'dfd' +this.abc
       }
     }
  }
</script>
```

* 3.computed的get是设置监听data的数据；<br>
    set是设置当computed属性重新赋值后，set里的操作会被调用（注意:只能改变data里面的值而不能改变computed的值）；<br>
```JS
<template>
  <div>
    <h4>测试computed</h4>
    <div>
      <input type="text" v-model="abc" />
      <span>{{def}}</span>
      <p>
        <input type="text" v-model="message" />
        <span>{{defdata}}</span>
      </p>
    </div>
    <div>setter</div>
  </div>

</template>

<script>
   export default {
    data () {
       return {
         message: 'hello'
       }
     },
    computed: {
       abc: {
         get () {
           return 'abc'
         },
         set (val) {
           console.log(val)   // 每次改变abc本身的值的时候，这里都会执行；
           this.def = this.def + val  // 注意：改变不了computed的值   ×
           this.message = this.message + val // 可以改变data的值   √
           console.log(this.def)
         }
       },
       def: {
         get () {
           return 'def'
         }
       },
       defdata () {
         return 'dfd' +this.message
       }
     }
  }
</script>
```
* 4. Cache :true 默认开启计算属性的缓存； 如果需要每次访问都是最新的则关闭缓存false;
demo
```VUE
<template>
  <div>
    <h4>测试computed的缓存</h4>
    <div>{{now}}</div>
  </div>

</template>

<script>
   export default {
    data () {
       return {
         message: 'hello'
       }
     },
    computed: {
      now:{
        get:function(){
          return Date.now() + this.message
        },
        cache: true   // 默认是true
      }
    },
    mounted () {
      for(let i = 0 ;i<3;i++){
        console.log(this.now)  // 当false关闭缓存的时候，每次访问now是都是最新的的。 而为true的时候，则需要依赖的属性改变了才会更新时间；
      }
    }
  }
</script>

<style>
</style>
```

5. watch能用而computed的set不能用的地方；
vuex 接收 的computed ，用set监测不到变化，必须要用watch才可以生效；
v-model 改变的computed，用watch监测不到变化，必须要用set才能监测得到，