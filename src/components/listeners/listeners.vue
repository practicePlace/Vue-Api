<template>
  <div class="listeners">
    <h1>listeners</h1>
    <span>tableValue: {{tableValue}}</span>
    <Grid :info="info" @listenersFunc="tableFunc"></Grid>
  </div>
</template>

<script>
import Grid from './components/grid.vue'

export default {
  name: 'listeners',
  components: {
    Grid
  },
  data () {
    return {
      info: 'listeners-info',
      tableValue: ''
    }
  },
  methods: {
    tableFunc (value) {
      console.log('tableFunc', value)
      this.tableValue = value
    }
  }
}
</script>

<style scoped>

</style>
