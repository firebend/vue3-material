<template>
  <div>
    <md-progress-bar
      md-mode="buffer"
      :md-value="amount"
      :md-buffer="buffer"
    />
    <md-progress-bar
      class="md-accent"
      md-mode="buffer"
      :md-value="amount"
      :md-buffer="buffer"
    />
    <div>
      Progress <br>
      <input
        v-model.number="amount"
        type="range"
      > {{ amount }}%
    </div>

    <div>
      Buffer <br>
      <input
        v-model.number="buffer"
        type="range"
      > {{ buffer }}%
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ProgressBarBuffer',
    data: () => ({
      amount: 25,
      buffer: 40
    })
  }
</script>

<style lang="scss" scoped>
  .md-progress-bar {
    margin: 24px;
  }
</style>
