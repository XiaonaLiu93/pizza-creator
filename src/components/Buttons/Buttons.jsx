import React from 'react';
import SubmitButton from '../SubmitButton';
import ResetButton from '../ResetButton';
import './Buttons.css';

export default function Buttons({ onSubmitButtonClicked, onResetButtonClicked }) {
  return (
    <section className='buttons'>
      <SubmitButton onSubmitButtonClicked={onSubmitButtonClicked}/>
      <ResetButton onResetButtonClicked={onResetButtonClicked}/>
    </section>
  );
}