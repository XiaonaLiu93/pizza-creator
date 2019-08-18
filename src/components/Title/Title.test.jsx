import React from 'react';
import { render } from '@testing-library/react';
import Title from './Title';

test('render title', () => {
  const children = 'Title';
  const { getByTestId } = render(<Title>{children}</Title>);

  expect(getByTestId('title').textContent).toBe(children);
});
