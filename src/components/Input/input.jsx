import React from 'react';
import PropTypes from 'prop-types';
import { InputError, InputNoError } from './style';
import DetailsPropTypes from '../../propTypes/Details';

export default function Input({
  input, details, submitted, onInputChanged,
}) {
  const { name, label } = input;
  const { value } = details[name];
  const { showError } = details[name];
  const isError = !value && (showError || submitted);
  const InputDiv = isError ? InputError : InputNoError;

  return (
    <InputDiv>
      <label htmlFor={name}>{label}</label>
      <span>{`Please enter your ${label}`}</span>
      <input type="text" name={name} id={name} onChange={({ target: { value: newValue } }) => onInputChanged(name, newValue)} />
    </InputDiv>
  );
}

Input.propTypes = {
  input: PropTypes.shape({
    name: PropTypes.string,
    label: PropTypes.string,
  }).isRequired,
  details: PropTypes.shape(DetailsPropTypes).isRequired,
  submitted: PropTypes.bool.isRequired,
  onInputChanged: PropTypes.func.isRequired,
};
