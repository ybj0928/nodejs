# 模块路径中的 `/` 和 文件路径中的 `/`

##  1. 模块路径中的`/`

  自定义模块路径

  - `/demo.js` 
    - 在系统根目录寻找
  - `./demo.js`
    - 当前目录寻找
  - `demo.js`
    - 直接报错 `Cannot find module 'modules.js'`

##  2. 文件路径中的`/`

  - `/demo.js` 
    - 在系统根目录寻找
  - `./demo.js`
    - 当前目录寻找
  - `demo.js`
    - 当前目录中寻找
