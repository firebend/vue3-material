<template>
  <md-empty-state v-bind="$props" class="md-table-empty-state">
    <slot />
  </md-empty-state>
</template>

<script>
  import MdEmptyStateProps from '../MdEmptyState/MdEmptyStateProps'

  export default {
    name: 'MdTableEmptyState',
    props: MdEmptyStateProps,
    inject: ['MdTable']
  }
</script>

<style lang="scss">
  @use "../MdAnimation/variables";

  .md-table-empty-state {
    padding-left: 24px;
  }
</style>
