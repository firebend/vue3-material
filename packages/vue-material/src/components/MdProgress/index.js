import material from '../../material'
import MdProgressBar from './MdProgressBar/MdProgressBar.vue'
import MdProgressSpinner from './MdProgressSpinner/MdProgressSpinner.vue'

export default Vue => {
  material(Vue)
  Vue.component(MdProgressBar.name, MdProgressBar)
  Vue.component(MdProgressSpinner.name, MdProgressSpinner)
}
