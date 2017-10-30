<template>
  <div>
    <div class="demo">
      <button v-on:click="show = !show">
              基本过渡
      </button>
      <transition name="fade">
         <p v-if="show">hello</p>
      </transition>
    </div>
    <div id="example-1">
      <button @click="show1 = !show1">
                常见过渡1
      </button>
      <transition name="slide-fade">
       <p v-if="show1">hello</p>
      </transition>
    </div>
  </div>
</template>

<script>
  export default {
    // 参考 https://cn.vuejs.org/v2/guide/transitions.html
    data () {
      return {
        show: true,
        show1: true
      }
    }
  }
</script>

<style scoped="scoped">

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
  opacity: 0
}
/*常见过渡 1 */
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>