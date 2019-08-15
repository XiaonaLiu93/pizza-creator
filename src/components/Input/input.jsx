import React from 'react';
import { InputError, InputNoError } from './style';

export default function Input({ input, details, submitted, onInputChanged }) {
  const { name, label } = input;
  const value  = details[name].value;
  const showError = details[name].showError;
  const isError = !value && (showError || submitted);
  const InputDiv = isError ? InputError: InputNoError;

  return (
    <InputDiv>
      <label htmlFor={name}>{label}</label>
      <span>Please enter your {label}</span>
      <input type="text" name={name} id={name} onChange={({ target:{ value } }) => {
        onInputChanged(name, value, );
      }}></input>
    </InputDiv>
  );
}