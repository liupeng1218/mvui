import Demo from './views/demo/demo.vue'
import Form from './views/form/form.vue'
import Table from './views/table/table.vue'
import Tree from './views/tree/tree.vue'

const routes = [
  { path: '/', redirect: '/demo' },
  { path: '/demo', component: Demo, name: 'demo' },
  { path: '/form', component: Form, name: 'form' },
  { path: '/table', component: Table, name: 'table' },
  { path: '/tree', component: Tree, name: 'tree' }
]
const router = new VueRouter({
  routes
})
export { routes, router }
