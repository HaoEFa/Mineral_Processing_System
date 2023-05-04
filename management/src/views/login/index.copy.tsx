import { ChangeEvent, useEffect, useState } from "react"
import { Input, Space, Button, message } from 'antd';
import styles from "./login.module.scss"
import initLoginBg from "./init.ts"
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import './login.less'
import { useNavigate } from "react-router-dom"
import { CaptchaAPI, LoginAPI } from "@/request/api"
import React from 'react';
import 'antd/dist/antd.css'
const view = ()=>{
  let navigateTo = useNavigate();
  // 加载完这个组件之后，加载背景
  useEffect(()=>{
    initLoginBg();
    window.onresize = function(){initLoginBg()};
    getCaptchaImg();
  },[]);
  // 获取用户输入的信息
  const [usernameVal,setUsernameVal] = useState(""); // 定义用户输入用户名这个变量
  const [passwordVal,setPasswordVal] = useState(""); // 定义用户输入密码这个变量
  const [captchaVal,setCaptchaVal] = useState(""); // 定义用户输入验证码这个变量
  // 定义一个变量保存验证码图片信息
  const [captchaImg,setCaptchaImg] = useState(""); 

  const usernameChange = (e:ChangeEvent<HTMLInputElement>)=>{
    // 获取用户输入的用户名
    // console.log(e.target.value);
    // 修改usernameVal这个变量为用户输入的那个值。 以后拿到usernameVal这个变量就相当于拿到用户输入的信息。
    setUsernameVal(e.target.value);
  }
  const passwordChange = (e:ChangeEvent<HTMLInputElement>)=>{
    setPasswordVal(e.target.value);
  }
  const captchaChange = (e:ChangeEvent<HTMLInputElement>)=>{
    setCaptchaVal(e.target.value);
  }
  // 点击登录按钮的事件函数
  const gotoLogin = async ()=>{
    console.log("用户输入的用户名，密码，验证码分别是：",usernameVal,passwordVal,captchaVal);
    // 验证是否有空值
    if(!usernameVal.trim() || !passwordVal.trim()|| !captchaVal.trim()){
      message.warning("请完整输入信息！")
      return
    }
    // 发起登录请求
    let loginAPIRes = await LoginAPI({
      username:usernameVal,
      password:passwordVal,
      code:captchaVal,   
      uuid:localStorage.getItem("uuid") as string    
    })

    console.log(loginAPIRes);
    if(loginAPIRes.code===200){
      // 1、提示登录成功
      message.success("登录成功！")
      // 2、保存token
      localStorage.setItem("management-token",loginAPIRes.token)
      // 3、跳转到/page1
      navigateTo("/page1")
      // 4、删除本地保存中的uuid
      localStorage.removeItem("uuid")
    }

  }

  // 点击验证码图片盒子的事件函数
  const getCaptchaImg = async ()=>{
    // 做验证码的请求
    // CaptchaAPI().then((res)=>{
    //   console.log(res);
    // })
    let captchaAPIRes = await CaptchaAPI();
    console.log(captchaAPIRes);
    if(captchaAPIRes.code===200){
      // 1、把图片数据显示在img上面
      setCaptchaImg("data:image/gif;base64,"+captchaAPIRes.img)
      // 2、本地保存uuid，给登录的时候用
      localStorage.setItem("uuid",captchaAPIRes.uuid)
    }
    
    
  }


  return (
    <div className={styles.loginPage}>
      {/* 存放背景 */}
      <canvas id="canvas" style={{display:"block"}}></canvas>
      {/* 登录盒子 */}
      <div className={styles.loginBox+ " loginbox"}>
          {/* 标题部分 */}
          <div className={styles.title}>
              <h1>前端&nbsp;·&nbsp;通用后台系统</h1>
              <p>Strive Everyday</p>
          </div>
          {/* 表单部分 */}
          <div className="form">
            <Space direction="vertical" size="large" style={{ display: 'flex' }}>
              <Input placeholder="用户名" onChange={usernameChange}/>
              <Input.Password placeholder="密码" onChange={passwordChange}/>
              {/* 验证码盒子 */}
              <div className="captchaBox">
                <Input placeholder="验证码" onChange={captchaChange}/>
                <div className="captchaImg" onClick={getCaptchaImg}>
                  <img height="38px" src={captchaImg} alt="" />
                </div>
              </div>
              <Button type="primary" className="loginBtn" block onClick={gotoLogin}>登录</Button>
            </Space>
          </div>
      </div>
    </div>
  )
}
export default view