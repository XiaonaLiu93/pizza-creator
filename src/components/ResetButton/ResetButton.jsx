import React from 'react';
import './ResetButton.css';

export default function ResetButton({ onResetButtonClicked }) {
  return (
    <button type="reset" onClick={onResetButtonClicked}>Reset Order</button>
  );
}