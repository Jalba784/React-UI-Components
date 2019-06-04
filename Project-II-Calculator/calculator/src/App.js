import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton.js';
import ActionButton from './components/ButtonComponents/ActionButton.js';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay.js';

const App = () => {
  return (
    <div className='calcWrap'>
        <div className='displayRow'>
            <CalculatorDisplay className='calcDisp' text='0'/>
        </div>
        <div className='clearRow'>
            <ActionButton className='clear' text='clear'/>
            <NumberButton className='redBtn' text='/'/>
        </div>
        <div className='thirdRow'>
            <NumberButton className='whiteBtn' text='7'/>
            <NumberButton className='whiteBtn' text='8'/>
            <NumberButton className='whiteBtn' text='9'/>
            <NumberButton className='redBtn' text='X'/>
        </div>
        <div className='fourthRow'>
            <NumberButton className='whiteBtn' text='4'/>
            <NumberButton className='whiteBtn' text='5'/>
            <NumberButton className='whiteBtn' text='6'/>
            <NumberButton className='redBtn' text='-'/>
        </div>
        <div className='fifthRow'>
            <NumberButton className='whiteBtn' text='1'/>
            <NumberButton className='whiteBtn' text='2'/>
            <NumberButton className='whiteBtn' text='3'/>
            <NumberButton className='redBtn' text='+'/>
        </div>
        <div className='lastRow'>
            <ActionButton className='zero' text='0'/>
            <NumberButton className='redBtn' text='='/>
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
