// 数据层
const fs = require('fs')

// 获取所有歌曲接口
exports.getSongsList = (callback) => {
  fs.readFile('./db.json', 'utf8', (err, data) => {
    if (err) callback(err)
    callback(err, JSON.parse(data).songs)
  })
}