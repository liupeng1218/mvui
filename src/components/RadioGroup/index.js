import RadioGroup from './src/RadioGroup.vue'
import './src/RadioGroup.scss'
RadioGroup.install = function(Vue) {
  Vue.component(RadioGroup.name, RadioGroup)
}
export default RadioGroup
