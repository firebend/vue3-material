import material from '../../material'
import MdSubheader from './MdSubheader.vue'

export default Vue => {
  material(Vue)
  Vue.component(MdSubheader.name, MdSubheader)
}
