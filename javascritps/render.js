function render({ 
  state, 
  onInputChange, 
  onSizeClick, 
  onDecreaseButtonClick, 
  onIncreaseButtonClick, 
  onSubmitButtonClick, 
  onResetButtonClick 
}) {
  const pizzaCreatoRoot = document.querySelector('.root');
  pizzaCreatoRoot.innerHTML = null;

  const pizzaCreator = document.createElement('div');
  pizzaCreator.classList.add('pizzaCreator');

  const errorMessageBox = renderErrorMessageBox();
  const enterYourDetails = renderEnterYourDetails({ state, onInputChange });
  const selectYourSize = renderSelectYourSize({ state, onSizeClick });
  const chooseYourToppings = renderChooseYourToppings({ state, onDecreaseButtonClick, onIncreaseButtonClick });
  const summary= renderSummary({ state, onDecreaseButtonClick, onIncreaseButtonClick });
  const buttons = renderButtons({ onSubmitButtonClick, onResetButtonClick });
  
  pizzaCreator.append(errorMessageBox, enterYourDetails, selectYourSize, chooseYourToppings, summary, buttons);

  pizzaCreatoRoot.append(pizzaCreator);

  return pizzaCreatoRoot;
}