function renderSummaryContent({ state, onDecreaseButtonClick, onIncreaseButtonClick }) {
  const { selectedSize, chosenToppings } = state;

  const summaryList = document.createElement('ul');
  summaryList.classList.add('items');

  const summarySize = renderSummarySize({ selectedSize });
  const summaryToppings = renderSummaryToppings({ chosenToppings, onDecreaseButtonClick, onIncreaseButtonClick });
  
  const hr = document.createElement('hr');

  const summaryTotal = renderSummaryTotal({ selectedSize, chosenToppings });

  summaryList.prepend(summarySize, ...summaryToppings, hr, summaryTotal);

  return summaryList;
}