import React from 'react';
import pizzaImg from '../../assets/size/pizza.png';
import { SizeActivated, SizeDeactivated } from './style';

export default function Size({ size, selectedSize, onSizeSelected }) {
  const { name, inch } = size;
  const isEqual = name === selectedSize.name;
  const SizeContainer = isEqual ? SizeActivated : SizeDeactivated;
  
  return (
    <SizeContainer name={name} onClick={() => onSizeSelected(size)}>
      <img src={pizzaImg} alt={name}></img>
      <span>{`${name}(${inch}\")`}</span>
    </SizeContainer>
  );
}