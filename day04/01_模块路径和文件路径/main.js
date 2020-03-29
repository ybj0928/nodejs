// let obj = require('modules.js')

// console.log(obj)

const fs = require('fs')

fs.readFile('/modules.js', (err, data) => {
  if (err) throw err
  console.log(data.toString())
})