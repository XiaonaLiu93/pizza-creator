import React from 'react';
import './Topping.css';

function setToppingClassName(name, chosenToppings) {
  const activatedToppingClassName = `topping topping--active`;
  const deactivatedToppingClassName = `topping`;

  const isExisted = chosenToppings.find((chosenTopping) => chosenTopping.name === name);

  const toppingClassName = isExisted ? activatedToppingClassName : deactivatedToppingClassName;

  return toppingClassName;
}

function getChosenToppingAmount(name, chosenToppings) {
  const chosenTopping = chosenToppings.find((chosenTopping) => chosenTopping.name === name);
  
  const amount = chosenTopping ? chosenTopping.amount : 0;

  return amount;
}

export default function Topping({ topping, chosenToppings }) {
  const { name, image } = topping;

  return (
    <div className={setToppingClassName(name, chosenToppings)}>
      <img src={image} alt={name}></img>
      <span>{name}</span>
      <button type="button">-</button>
      <span className="topping__amount">{getChosenToppingAmount(name, chosenToppings)}</span>
      <button type="button">+</button>
    </div>
  );
}