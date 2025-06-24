<template>
  <form
    class="codesandbox-edit"
    action="https://codesandbox.io/api/v1/sandboxes/define"
    method="POST"
    target="_blank"
  >
    <md-button
      type="submit"
      class="md-icon-button md-dense"
    >
      <md-icon>launch</md-icon>
      <md-tooltip md-theme="default">
        {{ $t('components.code.openInSandbox') }}
      </md-tooltip>
    </md-button>

    <input
      :value="parameters"
      type="hidden"
      name="parameters"
    >
    <input
      type="hidden"
      name="query"
      value="module=App.vue"
    >
  </form>
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { getParameters } from 'codesandbox/lib/api/define';

const { t } = useI18n();

const props = defineProps({
  component: {
    type: Object,
    required: true
  },
  title: {
    type: String,
    default: 'Vue Material Example'
  }
});

const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons">
  <title>CodeSandbox Vue Material</title>
</head>
<body>
  <div id="app"></div>
  <!-- built files will be auto injected -->
</body>
</html>`;

const index = `
import { createApp } from 'vue';
import App from './App.vue';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';

const app = createApp(App);
app.use(VueMaterial);
app.mount('#app');
`;

const vueConfig = `module.exports = {
  runtimeCompiler: true
};
`;

const processedSource = computed(() => {
  if (!props.component?.source) return '';
  return props.component.source
  //   .replace(
  //   /src="\/assets/g,
  //   'src="https://vuematerial.io/assets'
  // );
});

const parameters = computed(() => {
  return getParameters({
    files: {
      'package.json': {
        content: {
          name: `Vue Material - ${props.title}`,
          version: '1.0.0',
          private: true,
          scripts: {
            serve: 'vite',
            build: 'vite build',
            preview: 'vite preview',
            lint: 'eslint . --ext .vue,.js,.jsx,.cjs,.mjs --fix --ignore-path .gitignore'
          },
          dependencies: {
            'vue': '^3.3.0',
            'vue-material': 'latest',
            'core-js': '^3.8.3'
          },
          devDependencies: {
            '@vitejs/plugin-vue': '^4.0.0',
            '@vue/compiler-sfc': '^3.3.0',
            'eslint': '^8.22.0',
            'eslint-plugin-vue': '^9.0.0',
            'vite': '^4.0.0'
          }
        }
      },
      'index.html': {
        content: html.trim()
      },
      'src/App.vue': {
        content: processedSource.value
      },
      'src/main.js': {
        content: index.trim()
      },
      'vite.config.js': {
        content: vueConfig.trim()
      }
    }
  });
});
</script>

<style lang="scss" scoped>
.codesandbox-edit {
  .md-button {
    margin-right: 0;

    .md-icon {
      color: #fff;
    }
  }
}
</style>
