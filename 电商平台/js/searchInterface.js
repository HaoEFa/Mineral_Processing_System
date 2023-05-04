// 导入 express 模块
const express = require('express')

// 创建 express 的服务器实例
const app = express()

// 配置解析表单数据的中间件
app.use(express.urlencoded({ extended: false }))

// 必须在配置 cors 中间件之前，配置 JSONP 的接口
app.get('/api/jsonp', (req, res) => {
  // 定义 JSONP 接口具体的实现过程
  // 1. 得到函数的名称
  const funcName = req.query.callback
  console.log(funcName);
  // 2. 定义要发送到客户端的数据对象
  const data = { name: 'zs', age: 11 }
  // 3. 拼接处一个函数的调用
  const scriptStr = `${funcName}(${JSON.stringify(data)})`
  // 4. 把拼接的字符串，响应给客户端
  res.send(scriptStr)
})

// 导入中间件
const cors = require('cors')
app.use(cors())

// 导入路由模块
const router = require('./router')
// 把路由模块，注册到 app 上
app.use('/api', router)

// 调用 app.listen 方法，指定端口号并启动 web 服务器
app.listen(3000, () => {
  console.log('127.0.0.1:3000')
})