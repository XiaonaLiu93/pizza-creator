import React from 'react';
import { render } from '@testing-library/react';
import Inputs from './Inputs';

test('render inputs', () => {
  const details = {
    name: {
      value: '',
      showError: false,
    },
    email: {
      value: '',
      showError: false,
    },
    confirmEmail: {
      value: '',
      showError: false,
    },
    address: {
      value: '',
      showError: false,
    },
    postcode: {
      value: '',
      showError: false,
    },
    contactNumber: {
      value: '',
      showError: false,
    },
  };

  const { getAllByTestId } = render(
    <Inputs
      details={details}
      submitted={false}
      onInputChanged={() => {}}
    />,
  );

  expect(getAllByTestId('input').length).toBe(6);
});
