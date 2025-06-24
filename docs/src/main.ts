/* Third Party */
import 'regenerator-runtime/runtime'
import { createApp } from 'vue'
import VueMaterial from 'vue-material'
import VueGitHubButtons from 'vue-github-buttons'
import VueToc from 'vue-toc'
// import VueGtag from 'vue-gtag'

import 'vue-github-buttons/dist/vue-github-buttons.css'

/* App */
import App from './app/App.vue'
import { i18n, router } from './app/config'
import store from './app/store'
import './app/banner'
import {install as installComponents} from './app/components'

import { sync } from 'vuex-router-sync'

// Synchronize Vuex store and router (if still needed, ensure vuex-router-sync works with Vue 3)
sync(store, router)

document.addEventListener('DOMContentLoaded', () => {
  const app = createApp(App)
  // Use dependencies and plugins
  app.use(router)
  app.use(store)
  app.use(i18n)
  app.use(VueMaterial)
  app.use(VueGitHubButtons)
  // app.use(VueGtag, {
  //   config: { id: 'UA-85823257-1' }
  // })

  // Register global component (vue-toc)
  app.component('VueToc', VueToc)
  installComponents(app)

  // Mount the app
  router.isReady().then(() => {
    app.mount('#docs')
  })
})
