/// <reference types='vitest' />
import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import {nxViteTsPaths} from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import {nxCopyAssetsPlugin} from '@nx/vite/plugins/nx-copy-assets.plugin';
import path = require('path');
import componentExamplePlugin from './plugins/component-example-plugin';

export default defineConfig(() => ({
  root: __dirname,
  cacheDir: '../node_modules/.vite/docs',
  server: {
    port: 4200,
    host: 'localhost',
  },
  preview: {
    port: 4300,
    host: 'localhost',
  },
  resolve: {
    alias: {
      vue: '@vue/compat',
      'vue-material': path.resolve(__dirname, '../packages/vue-material/src'),
      '@': path.resolve(__dirname, 'src/app'),
    },
  },
  plugins: [
    vue({
      template: {
        compilerOptions: {
          compatConfig: {
            MODE: 2
          }
        }
      },
    }),
    componentExamplePlugin,
    nxViteTsPaths(),
    nxCopyAssetsPlugin(['*.md'])
  ],
  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },
  build: {
    outDir: '../dist/docs',
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // TODO fix deprecations
        silenceDeprecations: ['legacy-js-api', 'new-global', 'import', 'bogus-combinators'],
      },
    },
  },
}));
