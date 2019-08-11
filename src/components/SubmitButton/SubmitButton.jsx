import React from 'react';
import './SubmitButton.css';

export default function SubmitButton({ onSubmitButtonClicked }) {
  return (
    <section className='buttons'>
      <button type="submit" onClick={() => onSubmitButtonClicked(true)}>Place Order</button>
    </section>
  );
}