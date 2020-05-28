export default {
  functional: true,
  props: {
    row: Object,
    columns: Object,
    index: Number,
    render: Function
  },
  render(h, ctx) {
    const params = {
      row: ctx.props.row,
      columns: ctx.props.columns,
      index: ctx.props.index
    }
    return ctx.props.render(h, params)
  }
}
