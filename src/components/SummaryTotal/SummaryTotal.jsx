import React from 'react';
import toFixed from '../../helpers/toFixed';
import './SummaryTotal.css';

export default function SummaryTotal({ selectedSize, chosenToppings }) {
  const { price: selectedSizePrice } = selectedSize;

  const chosenToppingsTotal = chosenToppings.reduce((accumulator, { price, amount }) => {
    return accumulator + parseFloat(price * amount);
  }, 0);

  let total = parseFloat(selectedSizePrice) + parseFloat(chosenToppingsTotal);

  return (
    <p className="total">Total: ${toFixed(total,2)}</p>
  );
}