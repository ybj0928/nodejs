const express = require('express')

// 创建服务器

let app = express()

app.get('/', (req, res) => {
  console.log(req.query) // 参数
  res.send('你在干什么')
})

app.get('/about', (req, res) => {
  res.send('hello express!')
})

app.use('/node_modules', express.static('./node_modules'))

app.listen(3000, () => {
  console.log('server running at port 3000...')
})