const db = require('../router/db/index')
// 注册新用户
exports.regUser = (req, res) => {
    //  if(err) return console.log(err);
    // 获取通过该接口传递的数据
    const userinfo = req.body;
    // 验证数据是否合法
    if(!userinfo.userName || !userinfo.password) {
        return res.send({ statu : 1, message : "密码或者用户名不能为空！"})
    }
    // 注册sql语句
    // 查询的 uname是作为数组的形式返回
    const sql = "select * from ev_user where userName=?"
    // 运行sql语句
    /* let str2 = 'select * from  ev_user';
    db.query(str2, (err, results) => {
      if(err) return console.log(err.message);
      console.log(results);
    })  */
 
     db.query(sql, userinfo.userName, (err, results)=> {
        // sql语句运行失败
        if(err) { res.send({ statu : 1, message : err.message})}
        // 判断是否存在重复results.length > 0
        if(results.length > 0) {
            res.send({ statu : 1, message : "用户名被占用！"})
        }
    }) 

     
    // res.send("注册功能实现成功");
}
// 登录用户
exports.login = (req, res) => {
    // if(err) return console.log(err);
    // 获取通过该接口传递的数据
    const userinfo = req.body;
    // 验证数据是否合法
    if(!userinfo.uname || !userinfo.password) {
        return res.send({ statu : 1, message : "密码或者用户名不能为空！"})
    }
    res.send("登录功能实现成功");
}