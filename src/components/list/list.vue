<template>
  <div id="list">
    <!--数组-->
    <h2>数组</h2>
    <ul id="example-2">
      <li v-for="(item, index) in items" :key="index">
        {{ parentMessage }} - {{ index }} - {{ item.message }}
      </li>
    </ul>
    <!--对象-->
    <h2>对象</h2>
    <ul id="v-for-object" class="demo">
        <li v-for="(value, key, index) in object" :key="index">
                  索引{{index}} {{key}}: {{ value }}
        </li>
    </ul>
    <!--注意事项-->
    <h2 class="notic">1.数组更改检测注意事项</h2>
    <p>//改变数组中单个索引后的值，并不会触发视图层更新； 用变异方法/set解决</p>
    <h2>2.对象更改检测注意事项（只针对根级别的响应）</h2>
    <p>Vue 不能检测对象属性的添加或删除</p>
    <h2>3.显示过滤/排序结果(将v-for的数据过滤)</h2>
    <!--用在计算属性是不可行的 method 方法 -->
    <ul>
      <li v-for="n in even(numbers)">{{ n }}</li>
    </ul>
     <h2>降序排序功能</h2>
     <ul>
       <li v-for="n in evenNumbers">{{n}}</li>
     </ul>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        parentMessage: 'Parent',
        items: [{
          message: 'Foo'
        }, {
          message: 'Bar'
        }],
        object: {
          firstName: 'John',
          lastName: 'Doe',
          age: 30
        },
        numbers: [ 2, 5, 4, 1, 3 ]
      }
    },
    computed: {
      evenNumbers: function () {
        return this.numbers.sort()
      }
    },
    methods:{
      even: function (numbers) {
          return numbers.filter(function (number) {
            return number % 2 === 0
        })
      },
      sortNumber(a,b){
        return a - b
      }
    },
    mounted(){
      //改变数组中单个索引后的值，并不会触发视图层更新； 用变异方法/set解决
      let change = {'message':'splice/set'}
    // this.items[0] = change
    // this.items.splice(0, 1, change)
      this.$set(this.items, 0, change)
      console.log(this.items)


      //Vue不能检测对象属性的添加或删除 ,全局可以检测到；
      this.object.add = 'add'
      //console.log('排序',this.numbers.sort())
      //注意：sort没什么问题， 但是reserve却又问题。
    }
  }
</script>
<style scoped="scoped">
  *{
    margin: 0;
    padding: 0;
  }
  ul,li{
    list-style: none;
  }
  .notic{
    margin-top: 100px;
  }
</style>