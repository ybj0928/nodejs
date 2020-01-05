const data1 = {
  name: 'ybj',
  age: 18,
  class: '初一'
}

// 使用 exports 中的规范是exports是一个空对象，module.exports也是一个空对象
// require该模块的时候是这个exports对象
// exports.student = data1

module.exports = data1