import React from "react"
import { lazy } from "react"
import Home from "../views/Home"
import { Navigate } from "react-router-dom"
// 懒加载，进入网页时避免渲染不必要的网站
const About = lazy(()=>import("../views/About"))
const User = lazy(()=>import("../views/Page301"))

// element元素简写
const withLoadingComponent = (comp:JSX.Element) => (
   <React.Suspense fallback={<div>Loading...</div>}>
      {comp}
   </React.Suspense>
)

const routes = [
    {
      path:"/",
      element:<Navigate to="/home"/>
    },
    {
      path:"/home",
      element: <Home />  
    },
    {
       path:"/about",
       element:withLoadingComponent(<About />)
    },
    {
      path:"/user",
      element:withLoadingComponent(<User />)
   }
]

export default routes