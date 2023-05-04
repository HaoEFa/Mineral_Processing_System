import { RootStateOrAny, useDispatch, useSelector } from "react-redux"
import numStatus from "@/store/NumStatus/index"
const View = () => {
    // 对num的操作
    // useSelector获取仓库数据
    const dispatch = useDispatch()
    const { num } = useSelector((state:any) => (
        {
        // 适用于未对reducer进行每个模块单独书写的模式 
        //  num:state.num
        num:state.handleNum.num
        }
    ))
// 修改仓库数据
 const changeNum = () => {
    //  type:"add"作为记号（每种名称固定含义），{type:"add"}，val(值，自己设置)
    // dispatch({type:"add"})方法调用一次reducer组件就触发一次
    // 每次加10
    //  dispatch({type:"add2", val:10})
    //  每次加一
    dispatch({type:"add1"})
 }
// 修改仓库数据的异步操作
const changeNum2 = () => {
    // dispatch((dis:Function) => {
    //     setTimeout(() => {
    //         dis({type:"add3"})
    //     }, 2000)
    // })
    dispatch(numStatus.asyncActions.asyncAdd1)
}

//  修改sarr数据
 const changeArr = () => {
    dispatch({type:"sarrpushone", val:101})
 }
//  对sarr的操作(获取sarr数据)
const { sarr } = useSelector((state:RootStateOrAny) => (
    { 
        sarr:state.handleArr.sarr
    }
))
    return(
        <div className='user'>
              <p>这是Page1组件</p>
              <p>{ num }</p>
              <button onClick={changeNum}>按钮</button>
              <button onClick={changeNum2}>异步按钮</button>
              <p>{ sarr }</p>
              <button onClick={changeArr}>按钮</button>
        </div>
    )
}

export default View