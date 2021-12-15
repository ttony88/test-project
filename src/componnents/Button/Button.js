import React from "react";
import styles from './Button.module.css'

const Button = (props) => {

    let contentChange = () => {
        props.contentChange()
    }
    return <div className={styles.button}>
                <button onClick={contentChange}>Применить</button>
           </div>
}
export default Button