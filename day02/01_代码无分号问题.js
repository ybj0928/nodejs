// 根据JavaScript标准，代码不建议使用分号，但是这样会出现一些问题

/**
 * 当代码采用无分号的风格时，以 ( , [, ` 开头的代码可能会出现问题
 * 示例如下
 */
function say () {
  console.log('i am saying')
}

say()

;(function () {
  console.log('你在干什么！')
})()

;['a', 'b'].forEach(value => {
  console.log(value)
})

;`杨鞭骥`.slice(1)

// 总结：当使用代码无分号的风格时候，遇到(, [, ` 开头的代码时都需要在前面加上一个; 分号。也有其他的方法比如加上!, ~, &也是可以的，但是不建议使用