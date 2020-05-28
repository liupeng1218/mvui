import Button from './components/Button/index.js'

import Form from './components/Form/index.js'
import FormItem from './components/FormItem/index.js'
import Input from './components/Input/index.js'
import Checkbox from './components/Checkbox/index.js'
import CheckboxGroup from './components/CheckboxGroup/index.js'
import Radio from './components/Radio/index.js'
import RadioGroup from './components/RadioGroup/index.js'

import Table from './components/Table/index.js'

import Tree from './components/Tree/index.js'

import Message from './components/Message/index.js'

// 注册组件
const components = [Button, Form, FormItem, Input, Checkbox, CheckboxGroup, Radio, RadioGroup, Table, Tree, Message]

const install = function(Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

// 绑定 notice 组件

Vue.prototype.$msg = Message

export default {
  version: '0.0.1',
  install,
  ...components
}
