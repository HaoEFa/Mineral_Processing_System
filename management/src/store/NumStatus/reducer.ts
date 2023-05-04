import handleNum from "./index";

// 管理仓库数据
let reducer = (state = { ...handleNum.state }, 
    action:{ type:string, val:number}) => {
    // dispatch({type:"add"})方法调用一次reducer组件就触发一次
    let newState = JSON.parse(JSON.stringify(state))
    // switch(action.type) {
    //     case handleNum.add1:
    //         handleNum.actions[handleNum.add1](newState, action)
    //        break;  
    //     case handleNum.add2:
    //         handleNum.actions[handleNum.add2](newState, action)
    //        break; 
    //     default:
    //        break;  
    // }
    // 以下是上诉 switch的简化写法
    for(let key in handleNum.actionNames) {
        if(action.type === handleNum.actionNames[key]) {
            handleNum.actions[handleNum.actionNames[key]](newState, action)
        }
    }
    return newState
    }


export default reducer