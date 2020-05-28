import Checkbox from './src/Checkbox.vue'
import './src/Checkbox.scss'
Checkbox.install = function(Vue) {
  Vue.component(Checkbox.name, Checkbox)
}
export default Checkbox
