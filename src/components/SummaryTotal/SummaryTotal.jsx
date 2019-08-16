import React from 'react';
import PropTypes from 'prop-types';
import toFixed from '../../helpers/toFixed';
import Total from './style';
import SelectedSizePropTypes from '../../propTypes/SelectedSize';
import ChosenToppingPropTypes from '../../propTypes/ChosenTopping';

export default function SummaryTotal({ selectedSize, chosenToppings }) {
  const { price: selectedSizePrice } = selectedSize;

  const chosenToppingsTotal = chosenToppings.reduce(
    (accumulator, { price, amount }) => accumulator + parseFloat(price * amount),
    0,
  );

  const total = parseFloat(selectedSizePrice) + parseFloat(chosenToppingsTotal);

  return (
    <Total>{`Total: $${toFixed(total, 2)}`}</Total>
  );
}

SummaryTotal.propTypes = {
  selectedSize: PropTypes.shape(SelectedSizePropTypes).isRequired,
  chosenToppings: PropTypes.arrayOf(PropTypes.shape(ChosenToppingPropTypes)).isRequired,
};
