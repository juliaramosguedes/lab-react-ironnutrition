import React from 'react';

const Button = ({ type, onclick, children, styles = '' }) => {
  return (
    <button type={type} className={`button ${styles}`} onClick={() => onclick()}>{children}</button>
  );
};

export default Button;
