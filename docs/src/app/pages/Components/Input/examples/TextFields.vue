<template>
  <div>
    <md-field>
      <label>Initial Value</label>
      <md-input v-model="initial" />
    </md-field>

    <md-field>
      <label>Initial Value (Read Only)</label>
      <md-input
        v-model="initial"
        readonly
      />
    </md-field>

    <md-field>
      <label>Type here!</label>
      <md-input v-model="type" />
      <span class="md-helper-text">Helper text</span>
    </md-field>

    <md-field>
      <label>With label</label>
      <md-input
        v-model="withLabel"
        placeholder="A nice placeholder"
      />
    </md-field>

    <md-field md-inline>
      <label>Inline</label>
      <md-input v-model="inline" />
    </md-field>

    <md-field>
      <label>Number</label>
      <md-input
        v-model="number"
        type="number"
      />
    </md-field>

    <md-field>
      <label>Textarea</label>
      <md-textarea v-model="textarea" />
    </md-field>

    <md-field>
      <label>Textarea with Autogrow</label>
      <md-textarea
        v-model="autogrow"
        md-autogrow
      />
    </md-field>

    <md-field>
      <label>Disabled</label>
      <md-input
        v-model="disabled"
        disabled
      />
    </md-field>
  </div>
</template>

<script>
  export default {
    name: 'TextFields',
    data: () => ({
      initial: 'Initial Value',
      type: null,
      withLabel: null,
      inline: null,
      number: null,
      textarea: null,
      autogrow: null,
      disabled: null
    })
  }
</script>
