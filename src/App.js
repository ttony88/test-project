import React from 'react';
import './App.css';
import ButtonContainer from './componnents/Button/ButtonContainer';
import ContentContainer from './componnents/Content/ContentContainer';
import InputNewValueContainer from './componnents/InputNewValue/InputNewValueContainer';
import InputPathContainer from './componnents/InputPath/InputPathContainer';


/*let apply = () => {
  props.onStateCange()
}

let onTextPathChange = () => {
  text = newPathElement.current.value
  props.onTextPathChange(text)
}

let onTextNewValueChange = () => {
  text = newNewValueElement.current.value
  props.onTextNewValueChange(text)
}*/

const App = (props) => {
  return (
    <div className='app_wrapper'>
      <InputPathContainer />
      <InputNewValueContainer />
      <ButtonContainer />
      <ContentContainer />  
    </div>
  );
}

export default App;
