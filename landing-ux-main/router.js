const db = require('./database_login')
// const db = require('./databaseTest')
const bcrypt = require('bcryptjs')
const express = require("express")

// 注册接口
exports.reguser = (req, res) => {
    const userinfo = req.body
    console.log(userinfo);
    
// 判断用户名和密码是否为空
   /*  if(!userinfo.username || !userinfo.password) {
        res.cc("密码或者用户名不能为空")
    } */

const sqlStr = 'select * from ev_user where username=?'
db.query(sqlStr, userinfo.username, (err, results) => {
    let str1 = 'insert into ev_user (username, password) values(?, ?)';
  if(err) {
      return res.cc(err)
  }
  else if(results.length > 0) {
      return res.send({
        status : 100,
        msg : "post请求"
        })
  }  else if(results.length == 0) {    // 插入数据
    db.query(str1, [userinfo.username, userinfo.password], (err, results) => {
        if(err) return console.log(err.message);
        if(results.affectedRow === 1) { console.log("插入成功");}
        res.send({
        status : 200,
        msg : "注册请求"
        })
    })

  }
     
})
//    
    // res.send('这里是注册接口')
}


// 登录接口
exports.login = (req, res) => {
    const userinfo = req.body
    const sqlStr = 'select * from ev_user where username=?'
    console.log(userinfo);
        db.query(sqlStr, userinfo.username, (err, results) => {
           if(err) {
               return res.cc(err)
           }  else if(results.length !== 1) {
               return res.cc("不存在该用户请重新输入")
           }
           const compareResult = bcrypt.compareSync(userinfo.password, results[0].password)
        //    console.log(userinfo.password);
        //    console.log(results[0].password);
           /*  if(!compareResult) {
            res.cc('密码错误')
           }  */
           if(userinfo.password != results[0].password) {
            res.cc('密码错误')
           }  else if(userinfo.password == results[0].password) {
            res.send({
                status : 200,
                msg : "post请求"
                })
           }
         })

    // res.send('这里是登录接口')
}