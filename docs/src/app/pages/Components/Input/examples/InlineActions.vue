<template>
  <div>
    <md-field md-clearable>
      <label>Cleareable</label>
      <md-input v-model="initial" />
    </md-field>

    <md-field>
      <label>Password toggle</label>
      <md-input
        v-model="password"
        type="password"
      />
    </md-field>

    <md-field :md-toggle-password="false">
      <label>Password field without toggle</label>
      <md-input
        v-model="password"
        type="password"
      />
    </md-field>
  </div>
</template>

<script>
  export default {
    name: 'InlineActions',
    data: () => ({
      initial: 'Initial Value',
      password: 'mysecurepassword'
    })
  }
</script>

<style lang="scss" scoped>
  .md-field:last-child {
    margin-bottom: 40px;
  }
</style>
