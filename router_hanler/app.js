const express = require("express")
const userRouter = require("../router/user.js")
const app = express()
// 解决跨域问题
const cors = require('cors')
app.use(cors())
// 解析数据
app.use(express.urlencoded({ extended : false}))
app.use(express.json()) 
// 挂在路由
app.use('/api', userRouter)

app.listen(7080, () => {
    console.log("https://127.0.0.1");
})