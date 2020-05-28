import CheckboxGroup from './src/CheckboxGroup.vue'
import './src/CheckboxGroup.scss'
CheckboxGroup.install = function(Vue) {
  Vue.component(CheckboxGroup.name, CheckboxGroup)
}
export default CheckboxGroup
