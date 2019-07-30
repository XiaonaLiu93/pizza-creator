function renderPizzaCreator() {
  const pizzaCreator = document.createElement('div');
  pizzaCreator.classList.add('pizzaCreator');

  const selectYourSize = renderSelectYourSize();
  const chooseYourToppings = renderChooseYourToppings();
  
  pizzaCreator.append(selectYourSize, chooseYourToppings);

  return pizzaCreator;
}