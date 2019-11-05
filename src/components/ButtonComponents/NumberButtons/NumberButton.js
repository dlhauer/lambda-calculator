import React from "react";

const NumberButton = (props) => {
  return (
    <button className='calc-button number-button'>{props.button}</button>
  );
};

export default NumberButton;
