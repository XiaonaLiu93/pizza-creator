import React from 'react';
import Inputs from '../Inputs';
import Sizes from '../Sizes';
import Toppings from '../Toppings';
import Summary from '../Summary';
import SubmitButton from '../SubmitButton';
import './PizzaCreator.css';

export default function PizzaCreator() {
  const selectedSize = {
    name: 'large',
    price: '13.99',
    inch: '13',
  };

  const chosenToppings = [{
    name: 'bacon',
    price: '0.69',
    amount: 2,
  }, {
    name: 'tomato',
    price: '0.69',
    amount: 3,
  }];

  return (
    <div className="pizza-creator">
      <Inputs />
      <Sizes selectedSize={selectedSize} />
      <Toppings chosenToppings={chosenToppings} />
      <Summary selectedSize={selectedSize} chosenToppings={chosenToppings} />
      <SubmitButton />
    </div>
  );
}