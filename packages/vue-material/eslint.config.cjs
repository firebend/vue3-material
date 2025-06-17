const vue = require('eslint-plugin-vue');
const baseConfig = require('../../eslint.config.cjs');

module.exports = [
  {
    languageOptions: {
      globals: {
        __VUE_MATERIAL_VERSION__: "readonly",
      },
    }
  },
  ...baseConfig,
  ...vue.configs['flat/recommended'],
  {
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: require('@typescript-eslint/parser'),
      },
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx', '**/*.vue'],
    rules: {
      'vue/multi-word-component-names': 'off',
    },
  },
];
