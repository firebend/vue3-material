<template>
  <div class="md-layout-vertical md-gutter">
    <div class="md-layout-item" />
    <div class="md-layout-item" />
    <div class="md-layout-item" />
  </div>
</template>

<script>
  export default {
    name: 'LayoutVertical'
  }
</script>

<style lang="scss" scoped>
  @import "vue-material/theme/engine";

  .md-layout-vertical {
    height: 480px;
  }

  .md-layout-item {
    background: palette.md-get-palette-color(blue, 200);
  }
</style>
