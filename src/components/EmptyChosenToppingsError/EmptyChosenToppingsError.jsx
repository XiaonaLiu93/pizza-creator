import React from 'react';
import errorImg from '../../assets/error/error.png';
import './EmptyChosenToppingsError.css';

function setMessageClassName(submitted, chosenToppings) {
  const showMessage = 'message';
  const hideMessage = 'message message--hidden';

  const isEmpty = !chosenToppings.length && submitted;

  if (isEmpty) {
    return showMessage;
  }

  return hideMessage;
}

export default function EmptyChosenToppingsError({ submitted, chosenToppings }) {
  return (
    <section className={setMessageClassName(submitted, chosenToppings)}>
      <img src={errorImg}></img>
      <span>Please choose at least one topping to place order!</span>
    </section>
  );
}