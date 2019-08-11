import React from 'react';
import Title from '../Title';
import SummarySize from '../SummarySize';
import SummaryToppings from '../SummaryToppings';
import SummaryTotal from '../SummaryTotal';

export default function Summary({ selectedSize, chosenToppings, onAmountDecreased, onAmountIncreased }) {
  return (
    <section>
      <Title>Order Summary</Title>
      <div className="items">
        <SummarySize selectedSize={selectedSize} />
        <SummaryToppings 
          chosenToppings={chosenToppings}
          onAmountDecreased={onAmountDecreased}
          onAmountIncreased={onAmountIncreased}
        />
        <hr></hr>
        <SummaryTotal selectedSize={selectedSize} chosenToppings={chosenToppings} />
      </div>
    </section>
  );
}