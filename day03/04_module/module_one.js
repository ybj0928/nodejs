console.log(exports === module.exports)

let fn = function (x, y) {
  return x + y
}

module.exports.fn = fn

