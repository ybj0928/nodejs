let a = 'a'
let b = 'b'
let c = 'c'
let d = 'd'
export { a }
export { b }
export { c }
export default { d }
a = 100
b = 10
c = 200
d = 345
setTimeout(() => {
  a = 'aaaa'
}, 1000)

// export default 导出的是后面紧跟的值，可以是一个对象或者一个变量
// export 不可以导出一个已经定义好的变量，如果想要导出的话，需要在export后面加上{}, 这里不是声明一个对象，import的还是这个变量的值，不是对象