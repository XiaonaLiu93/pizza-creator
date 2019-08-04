function renderChooseYourToppings({ state, onDecreaseButtonClick, onIncreaseButtonClick}) {
  const chooseYourToppings = document.createElement('div');

  const chooseYourToppingsTitle = renderTitle({ title: 'Choose your toppings' });
  const chooseYourToppingsContent = renderToppings({ state, onDecreaseButtonClick, onIncreaseButtonClick });

  chooseYourToppings.append(chooseYourToppingsTitle, chooseYourToppingsContent);
  
  return chooseYourToppings;
}