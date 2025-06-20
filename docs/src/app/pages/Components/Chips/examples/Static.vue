<template>
  <div>
    <md-chips
      v-model="cities"
      md-static
    />
  </div>
</template>

<script>
export default {
  name: 'Static',
  data: () => ({
    cities: [
      'New York',
      'Amsterdam',
      'Tokyo',
      'Rome'
    ]
  })
}
</script>
