function renderPizzaCreator() {
  const pizzaCreator = document.createElement('div');
  pizzaCreator.classList.add('pizzaCreator');

  const selectYourSize = renderSelectYourSize();
  
  pizzaCreator.append(selectYourSize);

  return pizzaCreator;
}