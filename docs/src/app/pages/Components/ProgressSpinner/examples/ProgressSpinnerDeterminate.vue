<template>
  <div>
    <md-progress-spinner
      md-mode="determinate"
      :md-value="amount"
    />
    <md-progress-spinner
      class="md-accent"
      md-mode="determinate"
      :md-value="amount"
    />
    <div>
      <input
        v-model.number="amount"
        type="range"
      > {{ amount }}%
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ProgressSpinnerDeterminate',
    data: () => ({
      amount: 20
    })
  }
</script>

<style lang="scss" scoped>
  .md-progress-spinner {
    margin: 24px;
  }
</style>
