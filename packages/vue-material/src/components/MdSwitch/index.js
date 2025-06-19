import material from '../../material'
import MdSwitch from './MdSwitch.vue'

export default Vue => {
  material(Vue)
  Vue.component(MdSwitch.name, MdSwitch)
}
