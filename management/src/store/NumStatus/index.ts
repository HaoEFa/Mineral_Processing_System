const store = {
    state:{
      num:20
    },
    actions:{
      add1(newState:{num:number}, 
        action:{type:string}) {
          // action里只放同步方法
          // setTimeout(() => {
          //   newState.num++;
          // }, 1000)
          newState.num++;
      },
      add2(newState:{num:number}, 
        action:{type:string, val:number}) {
          newState.num += action.val;
      },
      add3(newState:{num:number}, 
        action:{type:string, val:number}) {
          newState.num += 100;
      },
    },
    asyncActions: { // 只放异步
      asyncAdd1(dispatch:Function) {
        setTimeout(() => {
          dispatch({ type:"add1" })
        }, 1000)
      }
    },
    // 名字统一管理
    
    // actionNames:{
    //   add1:"add1",
    //   add2:"add2"
    // }
    // 自动生成actionNames
    actionNames: {}    
}
    let actionNames = {}
    for(let key in store.actions) {
      actionNames[key] = key
    }
    store.actionNames = actionNames;
export default store