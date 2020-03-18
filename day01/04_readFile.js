const fs = require('fs') // 引入fs核心模块


// 第一个参数是error

/**
 * 读取成功 error => null | data => 数据
 * 读取失败 error => 错误对象 | data => undefind
 */
fs.readFile('./helloWorld.txt', (error, data) => {
    console.log(error)
    console.log(data)
    console.log(data.toString())
})