function render({ state, onInputChange, onSizeClick, onDecreaseButtonClick, onIncreaseButtonClick }) {
  const pizzaCreatoRoot = document.querySelector('.root');
  pizzaCreatoRoot.innerHTML = null;

  const pizzaCreator = document.createElement('div');
  pizzaCreator.classList.add('pizzaCreator');

  const enterYourDetails = renderEnterYourDetails({ state, onInputChange });
  const selectYourSize = renderSelectYourSize({ state, onSizeClick });
  const chooseYourToppings = renderChooseYourToppings({ state, onDecreaseButtonClick, onIncreaseButtonClick });
  const summary= renderSummary({ state, onDecreaseButtonClick, onIncreaseButtonClick });
  
  pizzaCreator.append(enterYourDetails, selectYourSize, chooseYourToppings, summary);

  pizzaCreatoRoot.append(pizzaCreator);

  return pizzaCreatoRoot;
}