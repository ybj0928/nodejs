const server = require('./server')
const router = require('./router')

server.start(3000, router.route)