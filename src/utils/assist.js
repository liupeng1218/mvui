/**
 * @description: 向上级查找指定组件
 * @param {context} 上下文
 * @param {componentName} 组件名称
 * @return: 查找到的组件
 */
function findComponentUpward(context, componentName) {
  let parent = context.$parent
  let name = parent.$options.name
  while (parent && (!name || componentName !== name)) {
    parent = parent.$parent
    if (parent) name = parent.$options.name
  }
  return parent
}

/**
 * @description: 向上级查找所有指定组件
 * @param {context} 上下文
 * @param {componentName} 组件名称
 * @return: 查找到的组件
 */
function findComponentsUpward(context, componentName) {
  let components = []
  let parent = context.$parent
  while (parent) {
    let name = parent.$options.name
    if (name === componentName) components.push(parent)
    parent = parent.$parent
  }
  return components
}

/**
 * @description: 向下级查找指定组件
 * @param {context} 上下文
 * @param {componentName} 组件名称
 * @return: 查找到的组件
 */
function findComponentDownward(context, componentName) {
  const children = context.$children
  let child = null
  if (children.length) {
    for (let index = 0; index < children.length; index++) {
      const element = children[index]
      const name = element.$options.name
      if (name === componentName) {
        child = element
        break
      } else {
        child = findComponentDownward(element, componentName)
        if (child) break
      }
    }
  }
  return child
}

/**
 * @description: 向下级查找所有指定组件
 * @param {context} 上下文
 * @param {componentName} 组件名称
 * @return: 查找到的组件
 */
function findComponentsDownward(context, componentName) {
  return context.$children.reduce((components, child) => {
    if (child.$options.name === componentName) components.push(child)
    const foundChilds = findComponentsDownward(child, componentName)
    return components.concat(foundChilds)
  }, [])
}

/**
 * @description: 查找兄弟指定组件
 * @param {context} 上下文
 * @param {componentName} 组件名称
 * @param {excepMe} 是否排除自身
 * @return: 查找到的组件
 */
function findBrothersComponents(context, componentName, excepMe = true) {
  const children = context.$parent.$children
  return children.reduce((components, child) => {
    if (child.$options.name === componentName) {
      if (child._uid !== context._uid || !excepMe) components.push(child)
    }
    return components
  }, [])
}

/**
 * @description: 深度克隆对象
 * @param {data} 克隆数据源
 * @return: 克隆出来的对象
 */
function typeOf(obj) {
  const toString = Object.prototype.toString
  const map = {
    '[object Boolean]': 'boolean',
    '[object Number]': 'number',
    '[object String]': 'string',
    '[object Function]': 'function',
    '[object Array]': 'array',
    '[object Date]': 'date',
    '[object RegExp]': 'regExp',
    '[object Undefined]': 'undefined',
    '[object Null]': 'null',
    '[object Object]': 'object'
  }
  return map[toString.call(obj)]
}
function deepCopy(data) {
  const t = typeOf(data)
  let o
  if (t === 'array') {
    o = []
  } else if (t === 'object') {
    o = {}
  } else {
    return data
  }
  if (t === 'array') {
    for (let i = 0; i < data.length; i++) {
      o.push(deepCopy(data[i]))
    }
  } else if (t === 'object') {
    for (let i in data) {
      o[i] = deepCopy(data[i])
    }
  }
  return o
}
export default {
  findComponentUpward: findComponentUpward,
  findComponentsUpward: findComponentsUpward,
  findComponentDownward: findComponentDownward,
  findComponentsDownward: findComponentsDownward,
  findBrothersComponents: findBrothersComponents,
  deepCopy: deepCopy
}
