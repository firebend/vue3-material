import material from '../../material'
import MdBottomBar from './MdBottomBar.vue'
import MdBottomBarItem from './MdBottomBarItem.vue'

export default Vue => {
  material(Vue)
  Vue.component(MdBottomBar.name, MdBottomBar)
  Vue.component(MdBottomBarItem.name, MdBottomBarItem)
}
