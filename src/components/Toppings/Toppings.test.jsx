import React from 'react';
import { render } from '@testing-library/react';
import Toppings from './Toppings';

test('render all toppings', () => {
  const { getAllByTestId } = render(
    <Toppings
      chosenToppings={[]}
      onAmountDecreased={() => {}}
      onAmountIncreased={() => {}}
    />,
  );

  expect(getAllByTestId('topping').length).toBe(12);
});
