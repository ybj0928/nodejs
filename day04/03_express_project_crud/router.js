// 路由层
const express = require('express')
let { getSongsList, setData, getFormdata, deleteSong } = require('./service')

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

router.get('/form', (req, res) =>{
  let id = req.query.id
  if (id) {
    getFormdata(id, (err, data) => {
      console.log(data)
      if (err) res.status(500).send('server error')
      res.render('add.html', data)
    })
  } else {
    res.render('add.html')
  }
})

router.post('/form', (req, res) => {
  setData(req.body, (err) => {
    if (err) res.status(500).send('server err')
    res.redirect('/')
  })
})

router.get('/delete', (req, res) => {
  let id = req.query.id
  deleteSong(id, (err) => {
    if (err) res.status(500).send('server err')
    res.redirect('/')
  })
})

module.exports = router

