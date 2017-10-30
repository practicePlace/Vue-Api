<template>
  <div>
    <!--原理-->
    <div>Object.defineProperty</div>
    <textarea name="" id="" cols="30" rows="10">
      Object.defineProperty 是 ES5 中一个无法 shim 的特性，在IE8以下无法在原生对象上使用，否则会报错，这也就是为什么 Vue 不支持 IE8 以及更低版本浏览器的原因。
    </textarea>
    <div> <b>对象的添加/删除必须在data属性上更改(通过this.$set)</b></div>
    <span style="font-size: 14px;">
          每一个组件都有对应的watch监听实例上的data,一旦data更新就会触发视图层的更新；
          所以<b>属性必须在 data 对象上存在才能让 Vue 转换它(可以通过this.$set设置)，这样才能让它是响应的；</b>
    <!--应用-->
    <h3>应用：1.检测变化的注意事项（对象/数组）；2.声明响应式属性（prop响应变化的方法）；3.异步更新队列（Dome层与数据层保持一致同步的方法）</h3>
      <h4>检测变化的注意事项</h4>
      <ul>
      	<li v-for="msg in objTest">{{msg.a}}</li>
      </ul>
      <h4>异步更新队列（如果你想在 DOM 状态更新后做点什么）</h4>
      <p class="aysn">{{aysn}}</p>
    </span>
  </div>
</template>

<script>
  export default {
    data(){
       return{
          objTest:[
            {
              a:1
            },{
              a:2
            }
          ],
          aysn: '没有更新'
       }
    },
    mounted(){
      // --------------------原理-------------------------
      // 为对象添加属性或者方法，也可以用Object.defineProperty定义
      // 语法：  Object.defineProperty(obj, prop, descriptor)
      var obj = {}
      var initValue = 'hello';
      // 对象添加新属性
      Object.defineProperty(obj, 'newKey', {
        get:function (){
            //当获取值的时候触发的函数
            console.log('get:')
            return initValue
        },
        set:function (value){
            //当设置值的时候触发的函数,设置的新值通过参数value拿到
            console.log('set')
            value = initValue
        }
      })
      console.log(obj)
      console.log(obj.newKey)
      // 参考：https://segmentfault.com/a/1190000007434923

      // -------------------检测变化注意事项--------------
      this.objTest[0].a = 4
      // -------------------声明响应式属性----------------
      // -------------------异步更新队列------------------
      this.aysn = "更新完成"
        console.log('打印Dom上的数据', this.$el.querySelector('.aysn').innerText) //console.log() =>没有更新
      // 异步执行Dom更新
      this.$nextTick(()=>{
          console.log('打印Dom上的数据', this.$el.querySelector('.aysn').innerText) //console.log() =>更新完成
      })
    }
  }
</script>

<style>
</style>