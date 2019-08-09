import React from 'react';
import pizzaImg from '../../assets/size/pizza.png';
import './Size.css';

function setSizeClassName(name, selectedSize) {
  const activatedSizeClassName = `sizes__${name} size size--active`;
  const deactivatedSizeClassName = `sizes__${name} size`;

  const sizeClassName = name === selectedSize.name ? activatedSizeClassName : deactivatedSizeClassName;

  return sizeClassName;
}

export default function Size({ size, selectedSize }) {
  const { name, inch } = size;
  
  return (
    <div className={setSizeClassName(name, selectedSize)}>
      <img src={pizzaImg} alt={name}></img>
      <span>{`${name}(${inch}\")`}</span>
    </div>
  );
}