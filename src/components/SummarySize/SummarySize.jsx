import React from 'react';
import './SummarySize.css';

export default function SummarySize({ selectedSize }) {
  const { name, price } = selectedSize;
  return (
    <li className="item">
      <span>{name} Pizza</span>
      <span className="item__price">{`$${price}`}</span>
    </li>
  );
}