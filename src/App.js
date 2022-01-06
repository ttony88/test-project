import React from 'react';
import './App.css';
import ButtonContainer from './componnents/Button/ButtonContainer';
import ContentContainer from './componnents/Content/ContentContainer';
import InputNewValueContainer from './componnents/InputNewValue/InputNewValueContainer';
import InputPathContainer from './componnents/InputPath/InputPathContainer';

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
