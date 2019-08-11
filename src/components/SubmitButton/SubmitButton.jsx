import React from 'react';
import './SubmitButton.css';

export default function SubmitButton({ onSubmitButtonClicked }) {
  return (
    <button type="submit" onClick={() => onSubmitButtonClicked(true)}>Place Order</button>
  );
}