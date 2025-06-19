import material from '../../material'
import MdImage from './MdImage.vue'

export default Vue => {
  material(Vue)
  Vue.component(MdImage.name, MdImage)
}
