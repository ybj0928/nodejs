const fs = require('fs')
const path = require('path')
const { uname } = require('./test') // 不是相对于node的启动目录

// 在nodejs中文件操作中的路径是相对于node启动的目录的，所以node中操作文件的一律使用path核心模块来处理成动态绝对路径
//   path.join(__dirname, '文件名')
//   path.resolve(__dirname, '文件名')
// 模块的路径不是相对于node启动的目录，不受影响，使用相对路径即可

console.log(uname)

fs.readFile(path.resolve(__dirname, 'a.txt'), 'utf8', (err, data) => {
  if (err) {
    throw new Error(err)
  } else {
    console.log(data)
  }
})