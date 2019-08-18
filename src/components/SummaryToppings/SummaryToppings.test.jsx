import React from 'react';
import { render } from '@testing-library/react';
import SummaryToppings from './SummaryToppings';

test('render topping items in summary', () => {
  const chosenToppings = [{
    name: 'anchovy',
    price: 0.69,
    amount: 1,
  }, {
    name: 'bacon',
    price: 0.69,
    amount: 3,
  }];

  const { getAllByTestId } = render(
    <SummaryToppings
      chosenToppings={chosenToppings}
      onAmountDecreased={() => {}}
      onAmountIncreased={() => {}}
    />,
  );

  expect(getAllByTestId('item').length).toBe(chosenToppings.length);
});
