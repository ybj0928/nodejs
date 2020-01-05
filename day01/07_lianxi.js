const http = require('http')

let server = http.createServer()

server.on('request', (request, response) => {
    switch (request.url) {
        case '/':
            response.write('index')
            break
        case '/login':
            response.write('login')
            break
        case '/register':
            response.write('register')
            break
        case '/hahaha':
            response.write('hahaha')
            break
        default:
            response.end('404')
    }
    response.end()
})

server.listen(3001, () => {
    console.log('server is starting...')
})