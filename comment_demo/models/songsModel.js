const mongoose = require('mongoose')

let Schema = mongoose.Schema

let songsCommentSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  singer: {
    type: String,
    required: true
  },
  publicDate: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  }
})

var SongsCommentModel = mongoose.model("song" , songsCommentSchema)

module.exports = SongsCommentModel