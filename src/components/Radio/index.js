import Radio from './src/Radio.vue'
import './src/Radio.scss'
Radio.install = function(Vue) {
  Vue.component(Radio.name, Radio)
}
export default Radio
