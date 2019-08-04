function renderToppings({ state, onDecreaseButtonClick, onIncreaseButtonClick }) {
  const toppingsDiv = document.createElement('div');
  toppingsDiv.classList.add('toppings');

  const { toppings, chosenToppings } = state;
  const toppingDivs = toppings.map((topping) => {
    return renderTopping({ topping, chosenToppings, onDecreaseButtonClick, onIncreaseButtonClick });
  });

  toppingsDiv.append(...toppingDivs);

  return toppingsDiv;
}