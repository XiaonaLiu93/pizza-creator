import React from 'react';
import PropTypes from 'prop-types';
import Title from '../Title';
import SummarySize from '../SummarySize';
import SummaryToppings from '../SummaryToppings';
import SummaryTotal from '../SummaryTotal';
import Items from './style';
import SelectedSizePropTypes from '../../propTypes/SelectedSize';
import ChosenToppingPropTypes from '../../propTypes/ChosenTopping';

export default function Summary({
  selectedSize, chosenToppings, onAmountDecreased, onAmountIncreased,
}) {
  return (
    <section>
      <Title>Order Summary</Title>
      <Items>
        <SummarySize selectedSize={selectedSize} />
        <SummaryToppings
          chosenToppings={chosenToppings}
          onAmountDecreased={onAmountDecreased}
          onAmountIncreased={onAmountIncreased}
        />
      </Items>
      <hr />
      <SummaryTotal selectedSize={selectedSize} chosenToppings={chosenToppings} />
    </section>
  );
}

Summary.propTypes = {
  selectedSize: PropTypes.shape(SelectedSizePropTypes).isRequired,
  chosenToppings: PropTypes.arrayOf(PropTypes.shape(ChosenToppingPropTypes)).isRequired,
  onAmountDecreased: PropTypes.func.isRequired,
  onAmountIncreased: PropTypes.func.isRequired,
};
