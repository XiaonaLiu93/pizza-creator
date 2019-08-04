export default function renderSummarySize({ selectedSize }) {
  const { name, price } = selectedSize;

  const summaryItem = document.createElement('li');
  summaryItem.classList.add('item');

  const nameSpan = document.createElement('span');
  nameSpan.classList.add('item__name');
  nameSpan.innerText = `${name} pizza`;

  const priceSpan = document.createElement('span');
  priceSpan.classList.add('item__price')
  priceSpan.innerText = `$${price}`;

  summaryItem.append(nameSpan, priceSpan);
  
  return summaryItem
}