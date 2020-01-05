// node中的js - 核心模块

// os模块用来获取机器信息的
const os = require('os')

// path 模块用来操作路径的
const path = require('path')

// 获取当前机器的cpu信息
console.log(os.cpus())

// memory 内存 单位字节
console.log(os.totalmem())

console.log(path.extname('c:/a/b/c.txt'))