const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
// 创建一个服务器
let app = express()
// express 中的静态资源服务
// 第一个参数是路由，那么请求公开目录(第二个参数中的路径)下的资源的时候需要写成 ip地址 + 端口号 + 第一个参数 + 公开目录下的资源文件 即可
// 第一个参数可以省略，省略相当于第一个参数是 '/'
app.use('/public/', express.static('./public')) // 开发public目录
// view engine setup
app.engine('html', require('express-art-template'))
app.set('views', path.join(__dirname, './view'));

// 配置body-parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


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

// routes
app.get('/', function (req, res) {
    res.render('index.html', {
      commentList: commentList
    })
})

app.get('/comment', function (req, res) {
  res.render('comment.html')
})

app.post('/comment', (req, res) => {
  let params = req.body
  commentList.unshift({
    comment: params.comment,
    cname: params.cname,
    date: '2020-02-02 12:20:30'
  })
  res.redirect('/')
})

app.listen(3000, () => {
  console.log('server is running at port 3000...')
})