import Button from './src/Button.vue'
import './src/Button.scss'
Button.install = function(Vue) {
  Vue.component(Button.name, Button)
}
export default Button
