import material from '../../../material'
import MdSelect from './MdSelect.vue'
import MdOption from './MdOption.vue'
import MdOptgroup from './MdOptgroup.vue'

export default Vue => {
  material(Vue)
  Vue.component(MdSelect.name, MdSelect)
  Vue.component(MdOption.name, MdOption)
  Vue.component(MdOptgroup.name, MdOptgroup)
}
