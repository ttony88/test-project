import React from 'react'
import styles from './InputNewValue.module.css'

let newNewValueElement = React.createRef()

const InputNewValue = (props) => {

let addNewValue = () => {
    let text = newNewValueElement.current.value
    props.addNewValue(text)
}

    return <div className={styles.new_value}>
                <span>Новое значение</span>
                <input onChange={addNewValue} ref={newNewValueElement} value={props.textNewValue}/>
            </div>
}
export default InputNewValue