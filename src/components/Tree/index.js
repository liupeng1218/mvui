import Tree from './src/Tree.vue'
import './src/Tree.scss'
Tree.install = function(Vue) {
  Vue.component(Tree.name, Tree)
}
export default Tree
