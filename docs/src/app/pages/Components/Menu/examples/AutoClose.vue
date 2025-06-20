<template>
  <div>
    <div>
      <md-checkbox
        v-model="closeOnClick"
        :value="true"
      >
        closeOnClick
      </md-checkbox>
      <md-checkbox
        v-model="closeOnSelect"
        :value="true"
      >
        closeOnSelect
      </md-checkbox>
    </div>
    <div>
      <md-menu
        md-direction="bottom-end"
        :md-close-on-click="closeOnClick"
        :md-close-on-select="closeOnSelect"
      >
        <md-button md-menu-trigger>
          Bottom End
        </md-button>

        <md-menu-content>
          <md-menu-item
            disabled
            @click="data = 'click disabled'"
          >
            Disabled
          </md-menu-item>
          <md-menu-item @click="data = 'click 1'">
            Click Event 1
          </md-menu-item>
          <md-menu-item @click="data = 'click 2'">
            Click Event 2
          </md-menu-item>
          <md-menu-item>Plain text</md-menu-item>
        </md-menu-content>
      </md-menu>
    </div>
    <div>{{ data }}</div>
  </div>
</template>

<script>
  export default {
    name: 'AutoClose',

    data () {
      return {
        data: '',
        closeOnClick: false,
        closeOnSelect: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  .md-menu {
    margin: 24px;
  }
</style>
