import FormItem from './src/FormItem.vue'
import './src/FormItem.scss'
FormItem.install = function(Vue) {
  Vue.component(FormItem.name, FormItem)
}
export default FormItem
