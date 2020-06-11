const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1/mongoose_test', { useUnifiedTopology: true, useNewUrlParser: true })

const db = mongoose.connection

db.once('open', () => { console.log('数据库连接成功了...') })

// 定制集合约束
let Schema = mongoose.Schema
let singerSchema = new Schema({
  name: String,
  age: Number,
  gender: {
    type: String,
    default: 'male'
  },
  magnum_opus: String
})

// 创建模型
let singerModel = mongoose.model('singer', singerSchema)

singerModel.create({
  name: '孙燕姿',
  age: 18,
  gender: 'female',
  magnum_opus: '相信'
}, (err) => {
  if (!err) {
    console.log('插入文档成功')
  }
})
