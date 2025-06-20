<template>
  <div>
    <md-chip
      v-for="chip in primary"
      :key="chip"
      class="md-primary"
    >
      {{ chip }}
    </md-chip>
    <md-chip
      v-for="chip in accent"
      :key="chip"
      class="md-accent"
      md-clickable
    >
      {{ chip }}
    </md-chip>
  </div>
</template>

<script>
export default {
  name: 'Themed',
  data: () => ({
    primary: [
      'Orange',
      'Apple',
      'Pineapple'
    ],
    accent: [
      'Cat',
      'Dog',
      'Rabbit'
    ]
  })
}
</script>

<style lang="scss" scoped>
  .md-chips {
    margin-bottom: 24px;
  }

  small {
    font-weight: 500;
  }
</style>
