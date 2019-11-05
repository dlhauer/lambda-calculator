import React, {useState} from "react";
import SpecialButton from './SpecialButton';

//import any components needed

//Import your array data to from the provided data file
import {specials} from '../../../data';
console.log(specials);

const Specials = () => {
  const [specialState, setSpecialState] = useState(specials);
  return (
    <div>
      {specialState.map( (item, index) => (
        <SpecialButton key={index} button={item}/>
      ))}
    </div>
  );
};

export default Specials;
