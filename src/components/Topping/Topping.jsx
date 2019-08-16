import React from 'react';
import PropTypes from 'prop-types';
import { ToppingActivated, ToppingDeactivated } from './style';
import ChosenToppingPropTypes from '../../propTypes/ChosenTopping';

function getChosenToppingAmount(name, chosenToppings) {
  const newChosenTopping = chosenToppings.find((chosenTopping) => chosenTopping.name === name);

  const amount = newChosenTopping ? newChosenTopping.amount : 0;

  return amount;
}

export default function Topping({
  topping, chosenToppings, onAmountDecreased, onAmountIncreased,
}) {
  const { name, image } = topping;
  const isExisted = chosenToppings.find((chosenTopping) => chosenTopping.name === name);
  const ToppingDiv = isExisted ? ToppingActivated : ToppingDeactivated;

  return (
    <ToppingDiv>
      <img src={image} alt={name} />
      <span>{name}</span>
      <button type="button" onClick={() => onAmountDecreased(topping)}>-</button>
      <span>{getChosenToppingAmount(name, chosenToppings)}</span>
      <button type="button" onClick={() => onAmountIncreased(topping)}>+</button>
    </ToppingDiv>
  );
}

Topping.propTypes = {
  topping: PropTypes.PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
  }).isRequired,
  chosenToppings: PropTypes.arrayOf(PropTypes.shape(ChosenToppingPropTypes)).isRequired,
  onAmountDecreased: PropTypes.func.isRequired,
  onAmountIncreased: PropTypes.func.isRequired,
};
