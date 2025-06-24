export default {
  computed: {
    examples () {
      console.log(this.$options.examples)
      if (!this.$options.examples) {
        console.error('No examples found')
      }
      return this.$options.examples
    }
  }
}
