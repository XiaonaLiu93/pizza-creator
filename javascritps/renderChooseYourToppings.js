function renderChooseYourToppings() {
  const chooseYourToppings = document.createElement('div');

  const chooseYourToppingsTitle = renderTitle({ title: 'Choose your toppings' });
  const chooseYourToppingsContent = renderToppings();

  chooseYourToppings.append(chooseYourToppingsTitle, chooseYourToppingsContent);
  
  return chooseYourToppings;
}