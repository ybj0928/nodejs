// 路由层
const express = require('express')
let { getSongsList } = require('./service')

// 创建一个路由容器
let router = express.Router()

router.get('/', (req, res) => {
  getSongsList((err, data) => {
    if (err) res.status(500).send('server error')
    res.render('index.html', {
      songs: data
    })
  })
})

router.get('/add', (req, res) =>{
  res.render('add.html')
})

router.post('/add', (req, res) => {

})

module.exports = router

