<template>
  <div class="md-layout">
    <div class="md-layout-item" />
    <div class="md-layout-item" />
    <div class="md-layout-item" />
  </div>
</template>

<script>
  export default {
    name: 'LayoutHorizontalColumns'
  }
</script>

<style lang="scss" scoped>
  @import "vue-material/theme/engine";

  .md-layout-item {
    height: 40px;

    &:nth-child(1) {
      background: palette.md-get-palette-color(grey, 300);
    }

    &:nth-child(2) {
      background: palette.md-get-palette-color(grey, 400);
    }

    &:nth-child(3) {
      background: palette.md-get-palette-color(grey, 500);
    }
  }
</style>
