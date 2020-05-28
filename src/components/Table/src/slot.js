export default {
  functional: true,
  inject: ['tableRoot'],
  props: {
    row: Object,
    columns: Object,
    index: Number
  },
  render(h, ctx) {
    
    console.log(ctx.injections.tableRoot.$scopedSlots)
    // <div><slot :name="ctx.props.columns.slot" :row="ctx.props.row" :columns="ctx.props.columns" :index="ctx.props.index"></slot></div>
    return h(
      'div',
      ctx.injections.tableRoot.$scopedSlots[ctx.props.columns.slot]({
        row: ctx.props.row,
        columns: ctx.props.columns,
        index: ctx.props.index
      })
    )
  }
}
