<template>
  <div class="api-item">
    <h3>{{ title }}</h3>

    <slot />

    <div class="api-item-navigation">
      <md-button
        v-for="slot in slots"
        :key="slot"
        :class="{ 'md-primary': currentSlot === slot }"
        @click="currentSlot = slot"
      >
        {{ capitalize(dashToSpace(slot)) }}
      </md-button>
    </div>

    <div
      v-for="slot in filteredSlots"
      :key="slot"
      class="api-item-content"
    >
      <slot :name="slot" />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ApiItem',
    props: {
      title: String
    },
    data: () => ({
      currentSlot: null
    }),
    computed: {
      slots () {
        return Object.keys(this.$slots).filter(slot => slot !== 'default')
      },
      filteredSlots () {
        return this.slots.filter(slot => slot === this.currentSlot)
      }
    },
    created () {
      this.currentSlot = this.slots[0]
    },
    methods: {
      capitalize (input) {
        return input.replace(/(?:^|\s)\S/g, transformed => transformed.toUpperCase())
      },
      dashToSpace (input) {
        return input.replace(/-/g, ' ')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .md-button {
    min-width: 56px;
    margin: 4px 0;

    + .md-button {
      margin-left: 4px;
    }
  }
</style>
