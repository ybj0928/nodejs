const express = require('express')
const expressArtTemplate = require('express-art-template')
const bodyParser = require('body-parser')
const path = require('path')
const mongoose = require('mongoose')

let app = express()

app.engine('html', expressArtTemplate)
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/public/', express.static('./static/public')) // 开放静态资源
app.set('views', path.join(__dirname, './static/pages')) // 这是模板根目录

// 路由相关
const commentRouter = require('./router/commentRouter')
app.use('/comment', commentRouter)

app.listen(3001, () => {
  console.log('server is running at port 3001 ...')
})

// 连接数据库
mongoose.connect('mongodb://127.0.0.1:27017/songsComment', { useNewUrlParser: true, useUnifiedTopology: true })

let db = mongoose.connection

db.once('open', () => {
  console.log('mongodb be connected successfully ...')
})