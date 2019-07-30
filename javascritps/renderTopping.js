function renderTopping({ topping, chosenToppings, onDecreaseButtonClick, onIncreaseButtonClick }) {
  const TOPPING_ACTIVE_CLASS_NAME = 'topping--active';

  const { name } = topping;

  const toppingDiv = document.createElement('div');
  toppingDiv.classList.add('topping');

  const chosenTopping = chosenToppings.find(({ name: chosenToppingName }) => {
    return chosenToppingName === name;
  });

  function activateTopping(element) {
    element.classList.add(TOPPING_ACTIVE_CLASS_NAME);
  }
  
  if (chosenTopping) {
    activateTopping(toppingDiv);
  }

  const amount = chosenTopping ? chosenTopping.amount : 0;

  const toppingImg = document.createElement('img');
  toppingImg.src = `./assets/toppings/${name}.svg`;
  toppingImg.alt = name;

  const nameSpan = document.createElement('span');
  nameSpan.innerText = name;

  const amountDiv = document.createElement('div');
  amountDiv.classList.add('topping__amount');

  const decreaseButton = document.createElement('button');
  decreaseButton.innerText = '-';
  decreaseButton.type = 'button';
  decreaseButton.onclick = () => onDecreaseButtonClick(name);
  const amountSpan = document.createElement('span');
  amountSpan.innerText = amount;
  const increaseButton = document.createElement('button');
  increaseButton.innerText = '+';
  increaseButton.type = 'button';
  increaseButton.onclick = () => onIncreaseButtonClick(name);

  amountDiv.append(decreaseButton, amountSpan, increaseButton);
  toppingDiv.append(toppingImg, nameSpan, amountDiv);

  return toppingDiv;
}