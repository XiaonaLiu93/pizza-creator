import React from 'react';
import errorImg from '../../assets/error/error.png';
import { ErrorShown, ErrorHidden} from './style';

export default function EmptyChosenToppingsError({ submitted, chosenToppings }) {
  const isEmpty = !chosenToppings.length && submitted;
  const EmptyChosenToppingsErrorSection = isEmpty ? ErrorShown : ErrorHidden;

  return (
    <EmptyChosenToppingsErrorSection chosenToppings={chosenToppings}>
      <img src={errorImg}></img>
      <span>Please choose at least one topping to place order!</span>
    </EmptyChosenToppingsErrorSection>
  );
}