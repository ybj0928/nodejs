let res = ''

function add (x, y, callback) {
  setTimeout(() => {
    let total = x + y
    callback(total)
  })
}

add(1, 10, (data) => {
  res = data
  console.log(res)
})

console.log(res) // 不会等待