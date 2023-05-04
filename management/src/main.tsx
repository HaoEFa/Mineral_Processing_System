import React from 'react'
import ReactDOM from 'react-dom/client'
import "reset-css"

// import App from './App'


// ui框架样式

// 全局样式
import '@/assets/styles/global.scss'
import App from './App'
import Router from "./router"
import {  BrowserRouter } from "react-router-dom"
// redux状态管理
import { Provider } from "react-redux"
import store from "@/store"
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // 设置传入仓库
   <Provider store={store}>
{/*   组件写法  
      <Router/> */}
      {/* 路由表写法 */}
      <BrowserRouter>
         <App />
      </BrowserRouter>
   </Provider>
)
