const SongsCommentModel = require('../models/songsModel')

let getCommentList = (callback) => {
  SongsCommentModel.find({}, (err, data) => {
    if (err) throw new Error(err)
    callback(data)
  })
}

module.exports = {
  getCommentList
}