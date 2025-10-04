import React from 'react';
import BotButton from 'react-bootstrap/Button'; 
import './Button.css';

const Button = ({ label, onClick }) => {
  return (
    <button onClick={onClick} className='custom-button'>{label}</button>
  );
};

export default Button;
