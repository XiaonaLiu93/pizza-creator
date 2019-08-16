import React from 'react';
import PropTypes from 'prop-types';
import SummaryTopping from '../SummaryTopping';
import ChosenToppingPropTypes from '../../propTypes/ChosenTopping';

export default function SummaryToppings({ chosenToppings, onAmountDecreased, onAmountIncreased }) {
  return (
    chosenToppings.map((chosenTopping) => (
      <SummaryTopping
        key={chosenTopping.name}
        chosenTopping={chosenTopping}
        onAmountDecreased={onAmountDecreased}
        onAmountIncreased={onAmountIncreased}
      />
    ))
  );
}

SummaryToppings.propTypes = {
  chosenToppings: PropTypes.arrayOf(PropTypes.shape(ChosenToppingPropTypes)).isRequired,
  onAmountDecreased: PropTypes.func.isRequired,
  onAmountIncreased: PropTypes.func.isRequired,
};
