import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton.js';
import ActionButton from './components/ButtonComponents/ActionButton.js';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay.js';

const App = () => {
  return (
    <div className='calc-wrap'>
        <CalculatorDisplay/>
        <div>
            <ActionButton className='clear' text='clear'/>
            <NumberButton className='red-btn' text='/'/>
        </div>
        <div>
            <NumberButton className='white-btn' text='7'/>
            <NumberButton className='white-btn' text='8'/>
            <NumberButton className='white-btn' text='9'/>
            <NumberButton className='red-btn' text='X'/>
        </div>
        <div>
            <NumberButton className='white-btn' text='4'/>
            <NumberButton className='white-btn' text='5'/>
            <NumberButton className='white-btn' text='6'/>
            <NumberButton className='red-btn' text='-'/>
        </div>
        <div>
            <NumberButton className='white-btn' text='1'/>
            <NumberButton className='white-btn' text='2'/>
            <NumberButton className='white-btn' text='3'/>
            <NumberButton className='red-btn' text='+'/>
        </div>
        <div>
            <ActionButton className='clear' text='0'/>
            <NumberButton className='red-btn' text='='/>
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
