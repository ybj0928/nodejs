const fs = require('fs')


let promiseReadFile = (filepath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filepath, 'utf8', (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

promiseReadFile('./files/1.txt').then(res => {
  console.log(res)
  return promiseReadFile('./files/2.txt')
}).then(res => {
  console.log(res)
  return promiseReadFile('./files/3.txt')
}).then(res => {
  console.log(res)
}).catch(err => {
  console.log('出错啦！' + err)
})