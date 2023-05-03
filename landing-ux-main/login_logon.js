// 插入数据库模块
 const db = require('./database_login')
// const db = require('./databaseTest')
const bcrypt = require('bcryptjs')
const express = require("express")

// 注册接口
exports.regUser = (req, res) => {
    const userinfo = req.body
// 判断用户名和密码是否为空
   /*  if(!userinfo.username || !userinfo.password) {
        res.cc("密码或者用户名不能为空")
    } */
    console.log(userinfo.password);
const sqlStr = 'select * from ev_user where username=?'
db.query(sqlStr, userinfo.username, (err, results) => {
  if(err) {
      return res.cc(err)
  }
  else if(results.length > 0) {
      return res.cc("用户名已经存在")
  }
})
    console.log(userinfo);
    // res.send('这里是注册接口')
}

// 登录接口
exports.login = (req, res) => {
    const userinfo = req.body
    const sqlStr = 'select * from ev_user where username=?'
        db.query(sqlStr, userinfo.username, (err, results) => {
           if(err) {
               return res.cc(err)
           }  else if(results.length !== 1) {
               return res.cc("不存在该用户请重新输入")
           }
           const compareResult = bcrypt.compareSync(userinfo.password, results[0].password)
           console.log(userinfo.password);
           console.log(results[0].password);
           /*  if(!compareResult) {
            res.cc('密码错误')
           }  */
           if(userinfo.password != results[0].password) {
            res.cc('密码错误')
           }
         })

    // res.send('这里是登录接口')
}
 

 