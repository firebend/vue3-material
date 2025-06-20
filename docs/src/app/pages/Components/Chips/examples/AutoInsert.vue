<template>
  <div>
    <md-chips
      v-model="emails"
      class="md-primary"
      md-placeholder="Enter a email"
      :md-auto-insert="true"
    >
      <label>Recipients</label>
    </md-chips>
  </div>
</template>

<script>
export default {
  name: 'AutoInsert',
  data: () => ({
    emails: [
      'John.Smith@example.com',
    ]
  })
}
</script>
