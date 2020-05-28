import Form from './src/Form.vue'
import './src/Form.scss'
Form.install = function(Vue) {
  Vue.component(Form.name, Form)
}
export default Form
