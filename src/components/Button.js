import React from 'react';

const Button = ({ clearHandler }) => {
  return <button onClick={() => clearHandler()}>Clear All</button>;
};

export default Button;
