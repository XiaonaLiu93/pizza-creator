import React from 'react';
import toFixed from '../../helpers/toFixed';
import { Total } from './style';

export default function SummaryTotal({ selectedSize, chosenToppings }) {
  const { price: selectedSizePrice } = selectedSize;

  const chosenToppingsTotal = chosenToppings.reduce((accumulator, { price, amount }) => {
    return accumulator + parseFloat(price * amount);
  }, 0);

  let total = parseFloat(selectedSizePrice) + parseFloat(chosenToppingsTotal);

  return (
    <Total>Total: ${toFixed(total,2)}</Total>
  );
}