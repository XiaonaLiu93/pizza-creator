import renderSummaryTopping from './renderSummaryTopping';

export default function renderSummaryToppings({ chosenToppings, onDecreaseButtonClick, onIncreaseButtonClick }) {
  const summaryToppings = chosenToppings.map((chosenTopping) => {
    return renderSummaryTopping({ chosenTopping, onDecreaseButtonClick, onIncreaseButtonClick });
  });

  return summaryToppings;
}