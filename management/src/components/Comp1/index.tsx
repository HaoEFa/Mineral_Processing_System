import styles from "./comp1.module.scss"
//  scss模块化引入
const Comp = () => {
    return(
        <div className={styles.box}>
              <p>这是Comp1里的内容</p>
        </div>
    )
}

export default Comp