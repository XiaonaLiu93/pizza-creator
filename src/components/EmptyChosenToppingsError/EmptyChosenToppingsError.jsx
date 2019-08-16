import React from 'react';
import PropTypes from 'prop-types';
import errorImg from '../../assets/error/error.png';
import { ErrorShown, ErrorHidden } from './style';
import ChosenToppingPropTypes from '../../propTypes/ChosenTopping';

export default function EmptyChosenToppingsError({ submitted, chosenToppings }) {
  const isEmpty = !chosenToppings.length && submitted;
  const EmptyChosenToppingsErrorSection = isEmpty ? ErrorShown : ErrorHidden;

  return (
    <EmptyChosenToppingsErrorSection chosenToppings={chosenToppings}>
      <img src={errorImg} alt="error" />
      <span>Please choose at least one topping to place order!</span>
    </EmptyChosenToppingsErrorSection>
  );
}

EmptyChosenToppingsError.propTypes = {
  submitted: PropTypes.bool.isRequired,
  chosenToppings: PropTypes.arrayOf(PropTypes.shape(ChosenToppingPropTypes)).isRequired,
};
