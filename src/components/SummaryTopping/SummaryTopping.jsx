import React from 'react';
import PropTypes from 'prop-types';
import toFixed from '../../helpers/toFixed';
import { Item, ItemAmount, ItemPrice } from './style';
import ChosenToppingPropTypes from '../../propTypes/ChosenTopping';

export default function SummaryTopping({ chosenTopping, onAmountDecreased, onAmountIncreased }) {
  const { name, price, amount } = chosenTopping;

  return (
    <Item>
      <span>{name}</span>
      <button type="button" onClick={() => onAmountDecreased(chosenTopping)}>-</button>
      <ItemAmount>{amount}</ItemAmount>
      <button type="button" onClick={() => onAmountIncreased(chosenTopping)}>+</button>
      <ItemPrice>{`$${toFixed(price * amount, 2)}`}</ItemPrice>
    </Item>
  );
}

SummaryTopping.propTypes = {
  chosenTopping: PropTypes.shape(ChosenToppingPropTypes).isRequired,
  onAmountDecreased: PropTypes.func.isRequired,
  onAmountIncreased: PropTypes.func.isRequired,
};
