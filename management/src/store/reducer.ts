import handleNum from "./NumStatus";

// 管理仓库数据

// const defaultState = {
//     // num:NumStatus.state.num 引入模块reducer中的num数据
//     // 一下是上一步结构写法
//     ...handleNum.state,
    
// }
// // 修改的数据传递至action,然后进行修改
// let reducer = (state = defaultState, action:{type:string,
// val:number}) => {
//     // dispatch({type:"add"})方法调用一次reducer组件就触发一次
//     let newState = JSON.parse(JSON.stringify(state))
//     switch(action.type) {
//         case handleNum.add1:
//         // (非封装写法)  newState.num++;
//            handleNum.actions[handleNum.add1](newState, action)
//            break;
//         case handleNum.add2:
//         //   (非封装写法) newState.num += action.val;
//            handleNum.actions[handleNum.add2](newState, action) 
//            break;  
//         default:
//            break;  
//     }
//     return newState
// }
// export default reducer