import material from '../../material'
import MdDrawer from './MdDrawer.vue'

export default Vue => {
  material(Vue)
  Vue.component(MdDrawer.name, MdDrawer)
}
