import Message from './src/Message.vue'
import './src/Message.scss'

// msg 实例 唯一性
let messageInstance

// 生成 msg 的 Vue 实例，手动挂载，暴露 msg 组件的add，remove方法
Message.newInstance = properties => {
  const props = properties || {}
  const Instance = new Vue({
    data: props,
    render(h) {
      return h(Message, {
        props: props
      })
    }
  })
  const component = Instance.$mount()
  document.body.appendChild(component.$el)
  const message = Instance.$children[0]

  return {
    add(noticeProps) {
      message.add(noticeProps)
    },
    remove(name) {
      message.remove(name)
    }
  }
}

// 获取唯一的 msg 实例
function getMessageInstace() {
  messageInstance = messageInstance || Message.newInstance()
  return messageInstance
}

// 暴露对外方法，获取实例，添加数据，显示信息
function notice({ duration = 1500, content = '', type = 'info' }) {
  // 创建 notice 容器实例
  let instance = getMessageInstace()
  // notice 容器 添加数据
  instance.add({
    content,
    duration,
    type
  })
}

export default {
  name: 'Message',
  info(options) {
    return notice(options)
  }
}
