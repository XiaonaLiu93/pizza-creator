import React from 'react';
import SummaryTopping from '../SummaryTopping';

export default function SummaryToppings({ chosenToppings, onAmountDecreased, onAmountIncreased }) {
  return (
    chosenToppings.map((chosenTopping) =>
      <SummaryTopping 
        key={chosenTopping.name} 
        chosenTopping={chosenTopping} 
        onAmountDecreased={onAmountDecreased}
        onAmountIncreased={onAmountIncreased}
      />)
  );
}