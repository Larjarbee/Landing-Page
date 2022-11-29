import React from 'react';

const Button = (props) => {
  return (
    <button className=' px-5 py-2 my-2 bg-GrayishBlue bg-gradient-to-r from-LimeGreen text-White rounded-full hover:opacity-80'>
      {props.children}
    </button>
  );
};

export default Button;
