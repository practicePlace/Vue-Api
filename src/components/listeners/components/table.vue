<template>
  <div class="table">
    <h3>table</h3>
    <!-- <Cell v-bind="$attrs"></Cell> -->
    <button @click="handleClick">点我触发listeners事件</button>
  </div>
</template>

<script>
// import Cell from './cell.vue';
export default {
  name: "Table",
  mixins: [],
  // components: {Cell},
  data() {
    return {};
  },
  computed: {},
  inheritAttrs: true,
  created() {
    console.log('table', this.$attrs)
  },
  methods: {
    handleClick () {
      this.$emit('listenersFunc', 'fromTable')
    }
  },
};
</script>

<style scoped>
</style>
