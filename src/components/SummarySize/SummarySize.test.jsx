import React from 'react';
import { render } from '@testing-library/react';
import SummarySize from './SummarySize';

test('render size in summary', () => {
  const selectedSize = {
    name: 'large',
    price: 13.99,
  };

  const { getByTestId } = render(<SummarySize selectedSize={selectedSize} />);

  const { name, price } = selectedSize;

  expect(getByTestId('size__name').textContent).toBe(`${name} Pizza`);
  expect(getByTestId('size__price').textContent).toBe(`$${price}`);
});
