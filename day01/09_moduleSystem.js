// 总结一下js里面的模块系统

// 1.import 和 export 的使用
// 1) import 导入的一定是export出来的，这里的export是不带s的
// 2) export 分为两种情况 第一种是直接export出去 第二种是 export default
    // import {uname} from '...'
    // export const uname = 'ybj'
    // const uname = 'ybj' export {uname}
    // 以上的两种写法都是正确的
    // const uname = 'ybj' export uname 这种写法是错误的
    
    // export default只能使用一次
    // import obj form '...'
    // export default { name: '', age: '', className: ''}
    // const obj = {};  export default obj

// export 出来的时候，import引入时是需要加上大括号的 export default 出来的是不需要加上大括号的

// 可以混合使用 import obj, {name, age} from '...' 注意export default 出来的一定是在export 出来的之前

// node中的模块系统 没有全局作用域 只有模块作用域(文件作用域)
// jquery即可以使用import导入也可以使用require导入
// import jquery from 'jquery'  export default jquery
// const jquery = require('jquery') exports = jquery