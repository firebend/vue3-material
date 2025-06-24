<template>
  <div
    class="api-table"
    :class="$mdActiveTheme"
  >
    <table>
      <tr>
        <th
          v-for="heading in headings"
          :key="heading"
        >
          {{ heading }}
        </th>
      </tr>

      <tr
        v-for="{ offset, name, type, options, usage, description, defaults, value, example } in props"
        :key="name"
      >
        <td
          class="prop"
          :class="{ offset }"
        >
          <span
            class="prop-name"
            v-html="name"
          />
          <small
            v-if="type"
            class="prop-type"
          >{{ type }}</small>
        </td>

        <td
          v-if="description"
          class="description"
          v-html="description"
        />
        <td
          v-if="options"
          class="slot-options"
        >
          <p
            v-for="({ name, description }, index) in options"
            :key="index"
            class="option"
          >
            <code>{{ name }}: </code>
            <span v-html="description" />
          </p>

          <div
            v-if="usage"
            class="usage"
          >
            <strong>Usage: </strong>
            <p><code>{{ usage }}</code></p>
          </div>
        </td>
        <td v-if="defaults || value || example">
          <code v-html="defaults || value || example" />
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
  import MdComponent from 'vue-material/core/MdComponent'

  export default MdComponent({
    name: 'ApiTable',
    props: {
      props: Array,
      headings: Array
    }
  })
</script>

<style lang="scss" scoped>
  @use "vue-material/components/MdAnimation/variables";
  @use "vue-material/theme/palette";
  @use "sass:color";

  $bg-color: palette.md-get-palette-color(grey, 200);
  $border-color: color.adjust($bg-color, $lightness: -3%);

  .api-table {
    padding-bottom: 16px;
  }

  table {
    width: 100%;
    table-layout: auto;
    border-collapse: collapse;
    border-spacing: 0;
    font-size: 13px;
    line-height: 18px;
  }

  tr:first-child {
    font-weight: 500;
  }

  td,
  th {
    padding: 8px 16px;
    border: 1px solid;
    text-align: left;
    vertical-align: middle;
  }

  th {
    height: 40px;
    line-height: 23px;

    &:first-child {
      width: 22%;
    }

    &:nth-child(2) ~ &:last-child {
      width: 17%;
    }
  }

  td.offset {
    padding-left: 32px;
  }

  .prop {
    vertical-align: top;
  }

  .prop-name {
    display: block;
    text-transform: lowercase;
  }

  .prop-type {
    color: palette.md-get-palette-color(grey, 600);
    text-transform: capitalize;
  }

  .slot-options {
    width: 40%;
  }

  code {
    color: palette.md-get-palette-color(red, A200);
    font-family: 'Roboto Mono', monospace;

    :deep(span) {
      color: palette.md-get-palette-color(blue, A200);
    }
  }

  .description,
  .prop-name {
    :deep(code) {
      color: palette.md-get-palette-color(red, A200);
      font-family: 'Roboto Mono', monospace;
    }
  }
</style>
