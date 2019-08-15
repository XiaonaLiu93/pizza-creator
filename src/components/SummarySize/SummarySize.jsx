import React from 'react';
import { Item, ItemPrice } from './style';

export default function SummarySize({ selectedSize }) {
  const { name, price } = selectedSize;
  return (
    <Item>
      <span>{name} Pizza</span>
      <ItemPrice>{`$${price}`}</ItemPrice>
    </Item>
  );
}