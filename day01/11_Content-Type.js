const http = require('http')
const fs = require('fs')

let server = http.createServer()

server.on('request', (req, res) => {
  // 当服务器发送响应的时候 响应内容的编码格式是utf-8
  // 而浏览器接受到响应的时候如果没有告诉浏览器怎么解析响应的时候，浏览器会默认按照当前操作系统的编码格式解析
  // 中文操作系统的编码格式是GBK，所以导致了乱码的出现
  // 此时响应头里面的Content-Type横空出世
  if (req.url === '/') {
    fs.readFile('./files/index.html', (err, data) => {
      if (err) throw new Error('读取文件是失败' + err)
      res.setHeader('Content-Type', 'text/html;charset=utf-8')
      res.end(data)
    })
  } else if (req.url === '/timg.jpg') {
    fs.readFile('./files/timg.jpg', (err, data) => {
      if (err) throw new Error('读取文件是失败' + err)
      res.setHeader('Content-Type', 'image/jpeg')
      res.end(data)
    })
  } else if (req.url === '/msg') {
    res.setHeader('Content-Type', 'text/plain;charset=utf-8')
    res.end('hello 世界')
  }
})

server.listen(5000, () => {
  console.log('server is running...')
})