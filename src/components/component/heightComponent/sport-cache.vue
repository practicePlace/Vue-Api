<template>
  <div>
    <p>动态缓存</p>
      <input placeholder="输入框"></input>
  </div>
</template>

<script>
</script>

<style>
  /*一/*/
  /*keep-alive  只能包换一个节点 当有v-for或者多个节点时候，都不会执行;*/
   /*在app.vue文件里面加  <keep-alive><router-view/></keep-alive>*/
  /*2.1.0后提供了include/exclude两个属性 可以针对性缓存相应的组件*/
  /*参考网址：https://segmentfault.com/a/1190000008123035*/
  /*二*/
  /*指定页面跳转才启动缓存：
  * B页面跳转到A，A页面需要缓存
  * C页面跳转到A，A页面不需要被缓存
  * http://www.cnblogs.com/sysuhanyf/p/7454530.html*/
 /*三*/
/* 两个钩子 ：activated 和 deactivated*/
/*使用<keep-alive>会将数据保留在内存中，
 * 如果要在每次进入页面的时候获取最新的数据，
 * 需要在activated阶段获取数据，
 * 承担原来created钩子中获取数据的任务。
activated: function () {
    this.data = '';
}
* */
</style>