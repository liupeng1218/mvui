import Input from './src/Input.vue'
import './src/Input.scss'
Input.install = function(Vue) {
  Vue.component(Input.name, Input)
}
export default Input
