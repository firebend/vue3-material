<template>
  <thead>
    <tr>
      <md-table-head-selection />
      <md-table-head v-for="(item, index) in MdTable.items" :key="index" v-bind="item" />
    </tr>
  </thead>
</template>

<script>
  import MdTableHead from './MdTableHead.vue'
  import MdTableHeadSelection from './MdTableHeadSelection.vue'

  export default {
    name: 'MdTableThead',
    inject: ['MdTable'],
    components: {
      MdTableHead,
      MdTableHeadSelection
    }
  }
</script>
