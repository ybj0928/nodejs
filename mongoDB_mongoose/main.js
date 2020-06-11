const mongoose = require('mongoose')

// 连接数据库
mongoose.connect('mongodb://127.0.0.1/mongoose_test', { useUnifiedTopology: true })

const db = mongoose.connection // 数据库连接对象
// 监听第一次连接触发的事件
db.once('open', () => {
  console.log('数据库连接成功...')
})

// 监听断开数据库触发的事件
db.once('close', () => {
  console.log('数据库断开...')
})

// 断开数据库
mongoose.disconnect()