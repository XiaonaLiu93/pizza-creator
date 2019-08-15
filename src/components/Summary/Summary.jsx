import React from 'react';
import Title from '../Title';
import SummarySize from '../SummarySize';
import SummaryToppings from '../SummaryToppings';
import SummaryTotal from '../SummaryTotal';
import { Items } from './style';

export default function Summary({ selectedSize, chosenToppings, onAmountDecreased, onAmountIncreased }) {
  return (
    <section>
      <Title>Order Summary</Title>
      <Items>
        <SummarySize selectedSize={selectedSize} />
        <SummaryToppings 
          chosenToppings={chosenToppings}
          onAmountDecreased={onAmountDecreased}
          onAmountIncreased={onAmountIncreased}
        />
      </Items>
      <hr></hr>
      <SummaryTotal selectedSize={selectedSize} chosenToppings={chosenToppings} />
    </section>
  );
}