import React from 'react';
import { render } from '@testing-library/react';
import SummaryTotal from './SummaryTotal';
import toFixed from '../../helpers/toFixed';

test('render total', () => {
  const selectedSize = {
    name: 'large',
    price: 13.99,
  };

  const chosenToppings = [{
    name: 'anchovy',
    price: 0.69,
    amount: 1,
  }, {
    name: 'bacon',
    price: 0.69,
    amount: 3,
  }];

  const total = selectedSize.price + chosenToppings.reduce(
    (accumulator, { price, amount }) => accumulator + parseFloat(price * amount),
    0,
  );

  const { getByTestId } = render(
    <SummaryTotal
      selectedSize={selectedSize}
      chosenToppings={chosenToppings}
    />,
  );

  expect(getByTestId('total').textContent).toBe(`Total: $${toFixed(total, 2)}`);
});
