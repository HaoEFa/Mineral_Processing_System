const express = require("express")
 const router = require("./router")
const app = express()
// 跨域问题
const cors = require('cors')
app.use(cors())

// 解析数据模块
app.use(express.urlencoded({ extended : false}))
app.use(express.json())  

// 获取用户信息模块
// const userinfo = require('./33_userinfo')
// app.use('/my', userinfo)
// 数据响应,中间件
app.use(function (req, res, next) {
    res.cc = function(err, status = 1) {
        res.send({
            status,
            // 判断是否为一个错误实例对象,不是的话就输出字符串错误
            message : err instanceof Error ? err.message : err,
        })
    }
    next()
})     

// 路由模块

app.use('/api/register', router.reguser)

app.use('/api/login', router.login)

// 定义全局错误模块
app.use((err, req, res, next) => {
         
        
         next() 
})
// 监听
app.listen(8002, function () {
    console.log("http://127.0.0.1");
})