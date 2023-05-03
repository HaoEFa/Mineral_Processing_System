const express = require("express")
const { redirect } = require("express/lib/response")
var router = express.Router()
// 路由模块保证对应关系即可
const router_hanler = require("../router_hanler/user")  
router.post('/reguser', router_hanler.regUser)
// 登录页面
router.post('/login', router_hanler.login)
  
module.exports = router;

 