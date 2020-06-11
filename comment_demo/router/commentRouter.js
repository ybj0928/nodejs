const router = require('express').Router()
const { getCommentList } = require('../service/commentServece')

router.get('/', (req, res, next) => {
  getCommentList((data) => {
    res.render('index.html', {commentList: data})
  })
})

router.get('/comment', (req, res, next) => {
  console.log(123)
  res.render('comment.html')
})

module.exports = router