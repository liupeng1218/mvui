# Notice

`Notice`系列组件都是进行信息提示或询问，类似于原生的`alert`和`confirm`。如果按照普通组件进行引入控制会非常麻烦和繁琐。可以利用`Vue`的渲染函数 [render](https://cn.vuejs.org/v2/guide/render-function.html)，来实现一个在任何地方可以通过`JS`直接调用和控制的`Notice`

# Message

通过 `Vue` 的 `render` 函数构造基于`Message`组件的 `Vue` 实例，使用 `$mount` 手动挂载实例。组件挂载后，向组件添加 `message` 内容

`$message`调用 => 创建 `Message` 实例，调用实例 `add` 方法 => `Message` 实例暴露实例根组件，获取组件 `add` 方法，添加 `message` 信息

# MessageBox

`MessageBox` 共有三种类型
+ alert：中断操作，确认后继续执行
+ confirm：中断操作，二次确认是否继续进行，确认后继续
+ prompt：中断操作，弹出输入对话框