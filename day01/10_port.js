// web服务器开发

/**
 * ip地址是用来定位服务器的
 * 端口号是用来定位应用程序的
 * 一切需要联网通信的软件都需要一个端口号
 * 端口号的范围是0-65536
 * 在计算机中有一些默认的端口号最好不要使用 如: 80
 * 开发过程中使用一些没有用过的简单的好用的即可 如: 3000, 5000等
 */

const http = require('http')

let server = http.createServer()

server.on('request', (request, response) => {
  // 可以获取对应访问服务器的客户端，对其响应什么内容
  console.log('客户端的地址是:' + request.socket.remoteAddress)
  console.log('客户端的端口号是:' + request.socket.remotePort)
  console.log()
  if (request.url === '/message') {
    let json = [{
      cname: '苹果',
      ename: 'apple'
    }, {
      cname: '香蕉',
      ename: 'banana'
    }, {
      cname: '橙子',
      ename: 'orange'
    }, {
      cname: '西瓜',
      ename: 'watermelon'
    }]
    response.end(JSON.stringify(json))
  }
})

server.listen(3000, () => {
  console.log('server is started...')
})