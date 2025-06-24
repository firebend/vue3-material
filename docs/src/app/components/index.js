/* Components */
import Vue from 'vue'
import PageContainer from './PageContainer.vue'
import SplashContainer from './SplashContainer.vue'
import LogoVueMaterial from './LogoVueMaterial.vue'
import CodeLoading from './CodeLoading.vue'
import CodeBlock from './CodeBlock.vue'
import CodeExample from './CodeExample.vue'
import CodesandboxEdit from './CodesandboxEdit.vue'
import GridLayout from './GridLayout.vue'
import GridLayoutItem from './GridLayoutItem.vue'
import ApiItem from './ApiItem.vue'
import ApiTable from './ApiTable/ApiTable.vue'
import NoteBlock from './NoteBlock/NoteBlock.vue'

export function install(app) {
  app.component(PageContainer.name, PageContainer)
  app.component(SplashContainer.name, SplashContainer)
  app.component(LogoVueMaterial.name, LogoVueMaterial)
  app.component(CodeLoading.name, CodeLoading)
  app.component("code-block", CodeBlock)
  app.component("code-example", CodeExample)
  app.component(CodesandboxEdit.name, CodesandboxEdit)
  app.component(GridLayout.name, GridLayout)
  app.component(GridLayoutItem.name, GridLayoutItem)
  app.component(ApiItem.name, ApiItem)
  app.component(ApiTable.name, ApiTable)
  app.component(NoteBlock.name, NoteBlock)
}
