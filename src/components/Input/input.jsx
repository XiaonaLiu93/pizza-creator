import React from 'react';
import './input.css';

export default function Input({ input }) {
  const { name, label } = input;
  
  return (
    <div className="input">
      <label htmlFor={name}>{label}</label>
      <span></span>
      <input type="text" name={name} id={name}></input>
    </div>
  );
}