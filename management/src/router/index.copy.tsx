// 组件形式写法
import App from "../App"
import About from "../views/About"
import Home from "../views/Home"
import { BrowserRouter,Routes,Route,Navigate } from "react-router-dom"
// 箭头函数简写，没有render
const basRouter = () => (
    <BrowserRouter>
       <Routes>
            <Route path="/" element={<App/>}>
                {/* 路由重定向 */}
                    <Route path="/" element={<Navigate to="/about"/>} ></Route>
                    <Route path="/home" element={<Home/>}></Route>
                    <Route path="/about" element={<About/>}></Route>
            </Route>
       </Routes>
    </BrowserRouter>
)

export default basRouter