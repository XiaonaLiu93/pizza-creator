import React from 'react';
import { Button } from './style';

export default function SubmitButton({ onSubmitButtonClicked }) {
  return (
    <Button type="submit" onClick={() => onSubmitButtonClicked(true)}>Place Order</Button>
  );
}