import React from 'react'
import styles from './InputPath.module.css'

let newPathElement = React.createRef()



const InputPath = (props) => {

let addTextPath = () => {
    let text = newPathElement.current.value
    props.addTextPath(text)
}

    return <div className={styles.path}>
                <span>Путь</span>
                <input onChange={addTextPath} ref={newPathElement} value={props.textPath} />
             </div>
}
export default InputPath