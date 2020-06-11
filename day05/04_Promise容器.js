const fs = require('fs')

let p1 = new Promise((resolve, reject) => {
  fs.readFile('./files/111.txt', 'utf8', (err, data) => {
    if (err) {
      reject(err)
    } else {
      resolve(data)
    }
  })
})

p1.then(res => {
  console.log(res)
}, err => {
  console.log('发生错误啦：' + err)
})