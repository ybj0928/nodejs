const fs = require('fs')

fs.writeFile('./data.txt', '杨鞭骥', error => {
    if (error) {
        console.log(error)
        console.log('写入文件失败了')
    } else {
        console.log('写入文件成功了')
    }
})