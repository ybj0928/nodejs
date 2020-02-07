const http = require('http')
const fs = require('fs')
const url = require('url')
const template = require('art-template')

let server = http.createServer()

let commentList = [{
  comment: '今天下起了雨',
  cname: '杨鞭骥',
  date: '2020-02-02 12:20:30'
}, {
  comment: '不必在乎我是谁',
  cname: '张敏',
  date: '2020-02-02 12:20:30'
}, {
  comment: '怎么了',
  cname: '杨欢',
  date: '2020-02-02 12:20:30'
}, {
  comment: '不好意思我又忘了你哪位',
  cname: '马云',
  date: '2020-02-02 12:20:30'
}]

server.on('request', (request, resposne) => {
  let pathObj = url.parse(request.url, true)
  let pathname = pathObj.pathname
  if (pathname === '/' || pathname === '/index') {
    fs.readFile('./index.html', (err, data) => {
      if (err) throw new Error('读取文件失败')
      let str = template.render(data.toString(), {commentList: commentList})
      resposne.end(str)
    })
  }
})

server.listen(3000, () => {
  console.log('server is running...')
})