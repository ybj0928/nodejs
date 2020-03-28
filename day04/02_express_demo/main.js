const express = require('express')

// 启动一个node服务器，相当于原生node中的 http.createServer()
let app = express()

app.get('/', (req, res) => {
  res.send('hello world')
  // res.write('hello ')
  // res.write('world')
  // res.end()
})


app.listen(3000, () => {
  console.log('server is running at por 3000...')
})


// 使用nodemon来自动重启服务器
