import { connect } from "react-redux";
import ImputPath from './InputPath'
import { textPathChange } from '../../redux/store'

let mapStateToProps = (state) => {
    return {
        textPath: state.textPath
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addTextPath: (text) => {dispatch(textPathChange(text))}
    }
}

const ImputPathContainer = connect(mapStateToProps, mapDispatchToProps)(ImputPath)

export default ImputPathContainer