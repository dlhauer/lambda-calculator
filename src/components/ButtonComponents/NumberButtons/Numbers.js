import React, {useState} from "react";
import NumberButton from './NumberButton';

//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file

import {numbers} from '../../../data'
// console.log(numbers);

const Numbers = () => {
  const [numberState, setNumberState] = useState(numbers);
  return (
    <div className='numbers-container'>
      {numberState.map( (item, index) => (
        <NumberButton key={index} button={item}/>
      )) }
    </div>
  );
};

export default Numbers;