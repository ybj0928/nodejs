const http = require('http')
const fs = require('fs')
const template = require('art-template')

let server = http.createServer()

server.on('request', (req, res) => {

  let url = req.url
  const rootDir = 'D:/dream/nodeJS/day02/htdocs'

  // 读取文件目录
  function readdir (url) {
    let dirList = fs.readdirSync(url)
    let result
    if (dirList.length) {
      let arr = []
      dirList.forEach(value => {
        let stat = fs.lstatSync(url + '/' + value)
        if (stat.isDirectory()) {
          arr.push({name: value, type: 0, img: '/folder.gif'})
        } else {
          if (value === 'index.html') {
            arr = fs.readFileSync(url + '/' + value)
          } else {
            arr.push({name: value, type: 1, img: '/text.gif'})
          }
        }
      })
      result = arr
    } else {
      result = []
    }
    return result
  }
  

  if (url === '/') {
    fs.readFile(rootDir + '/index.html', (err, data) => {
      if (err) { 
        if (!Array.isArray(readdir(rootDir))) return res.end(readdir(rootDir))
        fs.readFile('D:/dream/nodeJS/day02/Apache/dir.html', (err, data) => {
          if (err) throw new Error('读取文件失败')
          let html = template.render(String(data), {value: readdir(rootDir)})
          res.end(html)
        })
      } else {
        res.end(data)
      }
    })
  } else {
    fs.lstat(rootDir + url, (err, stat) => {
      if (err) {
        fs.readFile('D:/dream/nodeJS/day02/Apache/notFount.html', (err, data) => {
          if (err) throw new Error('文件读取失败')
          res.end(data)
        })
      } else if (stat.isDirectory()) {
        if (!Array.isArray(readdir(rootDir + url))) return res.end(readdir(rootDir + url))
        fs.readFile('D:/dream/nodeJS/day02/Apache/dir.html', (err, data) => {
          if (err) throw new Error('读取文件失败')
          let html = template.render(String(data), {value: readdir(rootDir + url)})
          res.end(html)
        })
      } else {
        fs.readFile(rootDir + url, (err, data) => {
          if (err) throw new Error('文件读取失败')
          res.end(data)
        })
      }
    })
  }
})

server.listen(3000, () => {
  console.log('server is running...')
})