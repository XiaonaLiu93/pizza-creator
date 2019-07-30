function renderChooseYourToppings({ state }) {
  const chooseYourToppings = document.createElement('div');

  const chooseYourToppingsTitle = renderTitle({ title: 'Choose your toppings' });
  const chooseYourToppingsContent = renderToppings({ state });

  chooseYourToppings.append(chooseYourToppingsTitle, chooseYourToppingsContent);
  
  return chooseYourToppings;
}