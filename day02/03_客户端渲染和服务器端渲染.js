/**
 * 客户端渲染: 第一次请求的是一个html架子，通过异步的方式去请求数据再通过客户端去渲染请求回来的样式。
 * 是后来修改的html
 */

 /**
  * 服务器端渲染啊：一次请求 html文件，服务器端已经将数据渲染到html中去了，只要请求一次就返回了渲染之后的html。
  */

// 客户端渲染不利于SEO搜索引擎优化
// 服务器端渲染是可以被爬虫抓取到的，客户端渲染很难被爬虫抓取到
// 所以真正优秀的网站不是纯服务端渲染也不是纯客户端渲染，而是两者结合起来的，按需使用


// 如何区分: 点击浏览器 查看网页源代码，发现页面中的数据内容直接可以发现，那么这个就是服务器端渲染，如果发现没有的话，那么是通过ajax请求的客户端渲染。