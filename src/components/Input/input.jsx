import React from 'react';
import './input.css';

function setInputClassName(value, showError, submitted) {
  const errorInputClassName = "input input--error";
  const noErrorInputClassName = "input";

  const isError = !value && (showError || submitted);

  if (isError) {
    return errorInputClassName;
  }

  return noErrorInputClassName;
}

export default function Input({ input, details, submitted, onInputChanged }) {
  const { name, label } = input;
  const value  = details[name].value;
  const showError = details[name].showError;
  
  return (
    <div className={setInputClassName(value, showError, submitted)}>
      <label htmlFor={name}>{label}</label>
      <span></span>
      <input type="text" name={name} id={name} onChange={({ target:{ value } }) => {
        onInputChanged(name, value, );
      }}></input>
    </div>
  );
}