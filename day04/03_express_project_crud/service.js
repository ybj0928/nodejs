const fs = require('fs')

exports.getSongsList = (callback) => {
  fs.readFile('./db.json', 'utf8', (err, data) => {
    if (err) callback(err)
    callback(err, JSON.parse(data).songs)
  })
}

exports.getFormdata = (id, callback) => {
  fs.readFile('./db.json', 'utf8', (err, data) => {
    if (err) callback(err)
    let resArr = JSON.parse(data).songs
    let item = resArr.find(value => {
      return parseFloat(value.id) === parseFloat(id)
    })
    callback(err, item)
  })
}

// 新增和编辑
exports.setData = (params, callback) => {
  console.log(params)
  fs.readFile('./db.json', 'utf8', (err, data) => {
    let resArr = JSON.parse(data).songs
    if (err) callback(err)
    if (params.id) { // 编辑
      let i = resArr.findIndex(value => {
        return parseFloat(value.id) === parseFloat(params.id)
      })
      params.ptime = Date.now()
      resArr.splice(i, 1, params)
    } else { //新增
      delete params.id
      resArr.push(Object.assign({id: parseFloat(resArr[resArr.length-1].id) + 1, ptime: Date.now()}, params))
    }
    let str =  JSON.stringify({songs: resArr})
    fs.writeFile('./db.json', str, err => {
      callback(err)
    })
  })
}

// 删除
exports.deleteSong =  (id, callback) => {
  fs.readFile('./db.json', 'utf8', (err, data) => {
    if (err) callback(err)
    let resArr = JSON.parse(data).songs
    let i = resArr.findIndex(value => {
      return parseFloat(value.id) === parseFloat(id)
    })
    resArr.splice(i, 1)
    let str =  JSON.stringify({songs: resArr})
    fs.writeFile('./db.json', str, err => {
      callback(err)
    })
  })
}