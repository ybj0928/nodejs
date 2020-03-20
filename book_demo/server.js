const http = require('http')
const url = require('url')

let start = function (port, route) {
  let server = http.createServer()

  server.on('request', (request, response) => {
    let pathname = url.parse(request.url, true).pathname
    route(pathname)
    response.writeHeader(200, {'Content-Type': 'text/plain;charset=UTF-8'})
    response.write('你好世界')
    response.end()
  })

  server.listen(port, () => {
    console.log('server is running at 3000 port...')
  })
}

module.exports = {
  start
}


