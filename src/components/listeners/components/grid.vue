<template>
  <div class="grid">
    <h2>grid</h2>
    <!-- 
      v-on="$listeners" 将父组件方法传入内部组件
      v-bind = $attrs 将父组件数据传入内部组件
     -->
    <Table v-on="$listeners" v-bind="$attrs"></Table>
  </div>
</template>

<script>
import Table from "./table";

export default {
  components: {
    Table,
  },
  data() {
    return {};
  },
  inheritAttrs: false,
  created() {
    console.log('$attrs', this.$attrs)
  }
};
</script>

<style scoped>
</style>

