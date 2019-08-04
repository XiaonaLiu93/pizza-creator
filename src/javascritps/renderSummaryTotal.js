import toFixed from '../helpers/toFixed';

export default function renderSummaryTotal({ selectedSize, chosenToppings }) {
  const summaryTotal = document.createElement('p');
  summaryTotal.classList.add('total');

  const { price: sizeTotal } = selectedSize;

  const toppingTotals = chosenToppings.map((chosenTopping) => {
    const { price: toppingPrice, amount } = chosenTopping;
    return toppingPrice * amount;
  });

  const toppingsTotal = toppingTotals.reduce((accumulator, toppingTotal) => {
    return accumulator + toppingTotal;
  }, 0);

  let total = parseFloat(sizeTotal) + parseFloat(toppingsTotal);

  summaryTotal.innerText = `$${toFixed(total, 2)}`;
  
  return summaryTotal;
}