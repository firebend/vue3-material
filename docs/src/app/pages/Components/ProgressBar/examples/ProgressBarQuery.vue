<template>
  <div>
    <md-progress-bar md-mode="query" />
    <md-progress-bar
      class="md-accent"
      md-mode="query"
    />
  </div>
</template>

<script>
  export default {
    name: 'ProgressBarQuery'
  }
</script>

<style lang="scss" scoped>
  .md-progress-bar {
    margin: 24px;
  }
</style>
