import { combineReducers, createStore, compose, applyMiddleware } from "redux"
import reduxThunk from "redux-thunk"
import handleArr from "./ArrStatus/reducer"
import handleNum from "./NumStatus/reducer"

// 组合各个模块的reducer
const reducers = combineReducers({
    handleArr,
    handleNum
})
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()属性为了让浏览器正常使用redux
// const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// 引入redux-thunk插件之后，插件写法改为如下写法：
// 判断是否有__REDUX_DEVTOOLS_EXTENSION__COMPOSE__这个模块
let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__({}):compose

// 把仓库数据，浏览器redux-dev-tools,还有reduxThunk插件关联在store中
const store = createStore(reducers, composeEnhancers(applyMiddleware(reduxThunk)))
export default store