import React from 'react';
import { render } from '@testing-library/react';
import Sizes from './Sizes';

test('render sizes', () => {
  const { getAllByTestId } = render(<Sizes selectedSize={{}} onSizeSelected={() => {}} />);

  expect(getAllByTestId('size').length).toBe(3);
});
