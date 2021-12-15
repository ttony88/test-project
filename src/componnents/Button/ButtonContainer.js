import { connect } from "react-redux";
import Button from "./Button";
import { stateChange } from '../../redux/store'

let mapDispatchToProps = (dispatch) => {
    return {
        contentChange: () => {dispatch(stateChange())}
    }
}

const ButtonContainer = connect(null, mapDispatchToProps)(Button)

export default ButtonContainer