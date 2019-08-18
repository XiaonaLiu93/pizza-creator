import React from 'react';
import PropTypes from 'prop-types';
import toFixed from '../../helpers/toFixed';
import { Item, ItemAmount, ItemPrice } from './style';
import ChosenToppingPropTypes from '../../propTypes/ChosenTopping';

export default function SummaryTopping({ chosenTopping, onAmountDecreased, onAmountIncreased }) {
  const { name, price, amount } = chosenTopping;

  return (
    <Item data-testid="item">
      <span data-testid="item__name">{name}</span>
      <button data-testid="item__decrease" type="button" onClick={() => onAmountDecreased(chosenTopping)}>-</button>
      <ItemAmount data-testid="item__amount">{amount}</ItemAmount>
      <button data-testid="item__increase" type="button" onClick={() => onAmountIncreased(chosenTopping)}>+</button>
      <ItemPrice data-testid="item__subtotal">{`$${toFixed(price * amount, 2)}`}</ItemPrice>
    </Item>
  );
}

SummaryTopping.propTypes = {
  chosenTopping: PropTypes.shape(ChosenToppingPropTypes).isRequired,
  onAmountDecreased: PropTypes.func.isRequired,
  onAmountIncreased: PropTypes.func.isRequired,
};
