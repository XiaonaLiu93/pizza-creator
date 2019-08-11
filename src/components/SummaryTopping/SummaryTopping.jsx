import React from 'react';
import toFixed from '../../helpers/toFixed';
import './SummaryTopping.css';

export default function SummaryTopping({ chosenTopping, onAmountDecreased, onAmountIncreased }) {
  const { name, price, amount } = chosenTopping;

  return (
    <li className="item">
      <span>{name}</span>
      <button type="button" onClick={() => onAmountDecreased(chosenTopping)}>-</button>
      <span className="item__amount">{amount}</span>
      <button type="button" onClick={() => onAmountIncreased(chosenTopping)}>+</button>
      <span className="item__price">${toFixed(price * amount,2)}</span>
    </li>
  );
}