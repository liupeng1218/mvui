import Table from './src/Table.vue'
import './src/Table.scss'
Table.install = function(Vue) {
  Vue.component(Table.name, Table)
}
export default Table
