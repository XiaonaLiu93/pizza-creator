import React from 'react';
import toFixed from '../../helpers/toFixed';
import './SummaryTopping.css';

export default function SummaryTopping({ chosenTopping }) {
  const { name, price, amount } = chosenTopping;

  return (
    <li className="item">
      <span>{name}</span>
      <button type="button">-</button>
      <span className="item__amount">{amount}</span>
      <button type="button">+</button>
      <span className="item__price">${toFixed(price * amount,2)}</span>
    </li>
  );
}