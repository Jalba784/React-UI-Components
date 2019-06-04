import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton.js';
import ActionButton from './components/ButtonComponents/ActionButton.js';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay.js';

const App = () => {
  return (
    <div className='calcWrap'>
        <div className='displayRow'>
            <CalculatorDisplay buttonStyle='longDisplay' text='0'/>
        </div>
        <div className='clearRow'>
            <ActionButton buttonStyle='longBtns' text='clear'/>
            <NumberButton buttonStyle='redBtn' text='/'/>
        </div>
        <div className='thirdRow'>
            <NumberButton buttonStyle='whiteBtn' text='7'/>
            <NumberButton buttonStyle='whiteBtn' text='8'/>
            <NumberButton buttonStyle='whiteBtn' text='9'/>
            <NumberButton buttonStyle='redBtn' text='X'/>
        </div>
        <div className='fourthRow'>
            <NumberButton buttonStyle='whiteBtn' text='4'/>
            <NumberButton buttonStyle='whiteBtn' text='5'/>
            <NumberButton buttonStyle='whiteBtn' text='6'/>
            <NumberButton buttonStyle='redBtn' text='-'/>
        </div>
        <div className='fifthRow'>
            <NumberButton buttonStyle='whiteBtn' text='1'/>
            <NumberButton buttonStyle='whiteBtn' text='2'/>
            <NumberButton buttonStyle='whiteBtn' text='3'/>
            <NumberButton buttonStyle='redBtn' text='+'/>
        </div>
        <div className='lastRow'>
            <ActionButton buttonStyle='longBtns' text='0'/>
            <NumberButton buttonStyle='redBtn' text='='/>
        </div>


      {/*<h3>Welcome to React Calculator</h3>*/}
      {/*<p>*/}
      {/*  We have given you a starter project. You'll want to build out your*/}
      {/*  components in their respective files, remove this code and replace it*/}
      {/*  with the proper components.*/}
      {/*</p>*/}
      {/*<p>*/}
      {/*  <strong>*/}
      {/*    Don't forget to `default export` your components and import them here*/}
      {/*    inside of this file in order to make them work.*/}
      {/*  </strong>*/}
      {/*</p>*/}
    </div>
  );
};

export default App;
