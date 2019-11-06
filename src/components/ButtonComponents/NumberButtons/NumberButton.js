import React from "react";

const NumberButton = (props) => {
  return (
    <button onClick={ () => {
      props.set(props.total + props.button)
      // if (props.total[0] === '0') {
      //   props.set(props.total.shift());
      //   console.log('hi');
      // }
    }}
      className='calc-button number-button'>{props.button}</button>
  );
};

export default NumberButton;
