import * as MdComponents from './components'
import {App} from "vue";
import material from "./material";

export default {
  // version: __VUE_MATERIAL_VERSION__,
  install: (app: App) => {
    material(app);

    Object.values(MdComponents).forEach((MdComponent) => {
      app.use(MdComponent)
    })
  }
}
