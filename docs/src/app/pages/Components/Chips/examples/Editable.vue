<template>
  <div>
    <md-chips
      v-model="fruits"
      md-placeholder="Add fruit..."
    />
  </div>
</template>

<script>
export default {
  name: 'Editable',
  data: () => ({
    fruits: [
      'Orange',
      'Apple',
      'Pineapple'
    ]
  })
}
</script>
