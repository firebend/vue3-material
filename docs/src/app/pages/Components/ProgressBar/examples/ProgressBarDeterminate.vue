<template>
  <div>
    <md-progress-bar
      md-mode="determinate"
      :md-value="amount"
    />
    <md-progress-bar
      class="md-accent"
      md-mode="determinate"
      :md-value="amount"
    />
    <input
      v-model.number="amount"
      type="range"
    > {{ amount }}%
  </div>
</template>

<script>
  export default {
    name: 'ProgressBarDeterminate',
    data: () => ({
      amount: 0
    })
  }
</script>

<style lang="scss" scoped>
  .md-progress-bar {
    margin: 24px;
  }
</style>
