import toFixed from '../helpers/toFixed';

export default function renderSummaryTopping({ chosenTopping, onDecreaseButtonClick, onIncreaseButtonClick }) {
  const { name, price, amount } = chosenTopping;

  const summaryItem = document.createElement('li');
  summaryItem.classList.add('item');

  const nameSpan = document.createElement('span');
  nameSpan.classList.add('item__name');
  nameSpan.innerText = name;

  const minusButton = document.createElement('button');
  minusButton.classList.add('item__button__minus');
  minusButton.innerText = '-';
  minusButton.onclick = () => onDecreaseButtonClick(name);

  const amountNumSpan = document.createElement('span');
  amountNumSpan.classList.add('item__amount');
  amountNumSpan.innerText = amount;

  const addButton = document.createElement('button');
  addButton.classList.add('item__button__add');
  addButton.innerText = '+';
  addButton.onclick = () => onIncreaseButtonClick(name);

  const priceSpan = document.createElement('span');
  priceSpan.classList.add('item__price')
  priceSpan.innerText = `$${toFixed(price * amount, 2)}`;

  summaryItem.append(nameSpan, minusButton, amountNumSpan, addButton, priceSpan);

  return summaryItem;
}