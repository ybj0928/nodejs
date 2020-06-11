let songs = [
  {name: '青花瓷', id: 1},
  {name: '天黑黑', id: 2},
  {name: '龙卷风', id: 3},
  {name: '东风破', id: 4},
]

Array.prototype.myFind = function (callback) {
  for (let i = 0; i < this.length; i ++) {
    if (callback(this[i], i)) {
      return this[i]
    }
  }
}

Array.prototype.myForeach = function (callback) {
  for(let i = 0; i < this.length; i++) {
    callback(this[i], i)
  }
}

Array.prototype.myFilter = function (callback) {
  let arr = []
  for (let i = 0; i <this.length; i++) {
    if (callback(this[i], i)) {
      arr.push(this[i])
    }
  }
  return arr
}

let song = songs.myFind((item, index) => {
  return item.name === '天黑黑'
})

songs.myForeach((item, index) => {
  console.log(item, index)
})

let newSongs = songs.myFilter((value, index) => {
  return value.id > 2
})

console.log(newSongs)

console.log(song)