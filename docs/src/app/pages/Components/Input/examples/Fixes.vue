<template>
  <div>
    <md-field>
      <label>Prefix</label>
      <span class="md-prefix">$</span>
      <md-input v-model="initial" />
    </md-field>

    <md-field>
      <label>Suffix</label>
      <md-input v-model="empty" />
      <span class="md-suffix">@gmail.com</span>
    </md-field>
  </div>
</template>

<script>
  export default {
    name: 'Fixes',
    data: () => ({
      initial: 0,
      empty: ''
    })
  }
</script>

<style lang="scss" scoped>
  .md-field:last-child {
    margin-bottom: 40px;
  }
</style>
