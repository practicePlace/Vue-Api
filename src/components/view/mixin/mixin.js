export default {
  data: () => ({
    mySharedDataProperty: 'mySharedDataProperty'
  }),
  methods: {
    mySharedMethod () {
      console.log('mySharedMethod', this.mySharedDataProperty)
    }
  }
}

