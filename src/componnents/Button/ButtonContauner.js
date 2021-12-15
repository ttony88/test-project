import React from "react";
import { connect} from 'react-redux'
import Button from "./Button";

mapStateToProps = (state) => {}

const ButtonContainer = connect()(Button)

export default ButtonContainer