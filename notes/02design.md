# 设计思想

`Vue` 组件都是由 `props`，`slot`，`event` 这三部分组成。

#### props

定义可配置属性，使用对象写法，来定义类型，默认值，校验规则等

#### slot

分发组件内容，多个插槽时使用具名插槽

#### event

在组件内部定义事件后，在对应事件钩子内通过`$emit`触发自定义事件，最后在父级通过监听自定义事件触发

# 组件通信

### 内置方法

1. `ref`：给元素或组件注册引⽤信息
2. `$parent/$children`：访问⽗ / ⼦实例
3. `provide/inject`：依赖注入

### 其他方法

1. `event bus`：使用一个空 `Vue` 实例来当做事件总线。注意巴士的 `on` 需要在组件的 `created` 周期内声明监听，否则可能发生监听不到对应事件情况。在 `beforeDestory` 周期内需要先 `off` 解除监听
2. `$dispatch/$broadcast`：这2个方法是`Vue`1.X时期的API，可以向上级派发和下级广播，官方在2.X都放弃了，给出的原因是*基于组件树结构的事件流⽅式有时让⼈难以理解*。在组件库中，组件树往往不会过于复杂，在没有`vuex`等工具下，可以自行实现使用
3. 
