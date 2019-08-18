import React from 'react';
import { render } from '@testing-library/react';
import Buttons from './Buttons';

test('render buttons', () => {
  const { getAllByTestId } = render(
    <Buttons
      onSubmitButtonClicked={() => {}}
      onResetButtonClicked={() => {}}
    />,
  );

  expect(getAllByTestId('button').length).toBe(2);
});
