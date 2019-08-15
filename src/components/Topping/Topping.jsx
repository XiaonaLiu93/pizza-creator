import React from 'react';
import { ToppingActivated, ToppingDeactivated } from './style';

function getChosenToppingAmount(name, chosenToppings) {
  const chosenTopping = chosenToppings.find((chosenTopping) => chosenTopping.name === name);
  
  const amount = chosenTopping ? chosenTopping.amount : 0;

  return amount;
}

export default function Topping({ topping, chosenToppings, onAmountDecreased, onAmountIncreased }) {
  const { name, image } = topping;
  const isExisted = chosenToppings.find((chosenTopping) => chosenTopping.name === name);
  const ToppingDiv = isExisted ? ToppingActivated : ToppingDeactivated;

  return (
    <ToppingDiv>
      <img src={image} alt={name}></img>
      <span>{name}</span>
      <button type="button" onClick={() => onAmountDecreased(topping)}>-</button>
      <span>{getChosenToppingAmount(name, chosenToppings)}</span>
      <button type="button" onClick={() => onAmountIncreased(topping)}>+</button>
    </ToppingDiv>
  );
}