const path = require('path')

let file_path = 'E:/study/nodejs/day06/01_nodejs-path.js'

console.log(path.dirname(file_path)) // 返回目录名
// return E:/study/nodejs/day06

console.log(path.extname(file_path)) // 返回扩展名
// return .js

console.log(path.basename(file_path, '.js')) // 返回文件名
// return 01_nodejs-path

console.log(path.isAbsolute(file_path)) // 是否是绝对路径
// /node/1.js  - true
// node/1.js   - false
// ./node/1.js - false
// return true

console.log(path.join('E:/study/nodejs/day06', '2.js')) // 将所有给定的 path 片段连接到一起（使用平台特定的分隔符作为定界符），然后规范化生成的路径。
// return E:/study/nodejs/day06/2.js

console.log(path.parse(file_path)) // 返回一个对象，其属性表示 path 的有效元素
// return {
//   root: 'E:/',
//   dir: 'E:/study/nodejs/day06',
//   base: '01_nodejs-path.js',
//   ext: '.js',
//   name: '01_nodejs-path'
// }

console.log(path.resolve('./ee', './name', '/6.js')) // 将路径或路径片段解析为绝对路径