# Table

`Table` 组件的核心功能在于自定义模板，自定义模板可以使用 `render` 函数配合函数组件完成，也可以使用`slot`插槽完成

#### render

在定义`columns`时，直接定义`render`输赢，配合函数组件，利用`createElement`构造自定义内容

#### slot

`$scopedSlots` 会返回包含所有作用域插槽`Vnode`函数的对象，使用对应的插槽函数，可以构造一个`slot`

```js
props: ['message'],
render: function (createElement) {
  // `<div><slot :text="message"></slot></div>`
  return createElement('div', [
    this.$scopedSlots.default({
      text: this.message
    })
  ])
}
```
