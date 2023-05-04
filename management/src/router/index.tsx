import React from "react"
import { lazy } from "react"
import Home from "../views/Home"
import { Navigate } from "react-router-dom"
import path from "path/posix"
import Login from "../views/login"
// 懒加载，进入网页时避免渲染不必要的网站(优化点一)
const About = lazy(()=>import("../views/About"))
const Page301 = lazy(()=>import("../views/Page301"))
const Page1 = lazy(()=>import("../views/page1"))
const Page2 = lazy(()=>import("../views/Page2"))
// element元素简写
const withLoadingComponent = (comp:JSX.Element) => (
   <React.Suspense fallback={<div>Loading...</div>}>
      {comp}
   </React.Suspense>
)

const routes = [
    {
      path:"/",
      element:<Navigate to="/page1"/>
    },
    {
      path:"/",
      element:<Home/>,
      children:[
          {
            path:"/page1",
            element: withLoadingComponent(<Page1 />),
          },
          {
            path:"/page2",
            element: withLoadingComponent(<Page2 />),
          },
          {
            path:"/page3/page301",
            element: withLoadingComponent(<Page301 />),
          }
      ]
    },
    // 菜单路由结束
    {
      path:"/login",
      element:<Login />
    },
    // 访问其他路径时跳转到其他页面
    {
      path:"*",
      element:<Navigate to="/page3/page301"/> ,
    },
    
]

export default routes