function render({ state, onSizeClick, onDecreaseButtonClick, onIncreaseButtonClick }) {
  const pizzaCreatoRoot = document.querySelector('.root');
  pizzaCreatoRoot.innerHTML = null;

  const pizzaCreator = document.createElement('div');
  pizzaCreator.classList.add('pizzaCreator');

  const selectYourSize = renderSelectYourSize({ state, onSizeClick });
  const chooseYourToppings = renderChooseYourToppings({ state, onDecreaseButtonClick, onIncreaseButtonClick });
  const summary= renderSummary({ state, onDecreaseButtonClick, onIncreaseButtonClick });
  
  pizzaCreator.append(selectYourSize, chooseYourToppings, summary);

  pizzaCreatoRoot.append(pizzaCreator);

  return pizzaCreatoRoot;
}