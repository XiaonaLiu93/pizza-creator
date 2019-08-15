import React from 'react';
import { Button } from './style';

export default function ResetButton({ onResetButtonClicked }) {
  return (
    <Button type="reset" onClick={onResetButtonClicked}>Reset Order</Button>
  );
}