import { connect } from "react-redux";
import InputNewValue from './InputNewValue'
import { textNewValueChange } from '../../redux/store'

let mapStateToProps = (state) => {
    return {
        textNewValue: state.textNewValue
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addNewValue: (text) => {dispatch(textNewValueChange(text))}
    }
}
const InputNewValueContainer = connect(mapStateToProps, mapDispatchToProps)(InputNewValue)

export default InputNewValueContainer