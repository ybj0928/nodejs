// http 模块职责就是编写服务器的
// 三步

// 1.加载核心模块 http模块
const http = require('http')
// 2.使用http.createServer() 创建一个web服务器，返回一个server实例
let server = http.createServer()
    /**
     *  服务器功能 （提供数据的服务，无论是图片，文件还是什么都是属于数据服务）
     * 接受请求
     * 处理请求
     * 提供反馈
    **/
server.on('request', (request, response) => {
    console.log(request, response)
})
// 3.启动服务，设置端口号
server.listen(3000, () => {
    console.log('server is start...')
})