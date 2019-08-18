import React from 'react';
import { render, cleanup } from '@testing-library/react';
import EmptyChosenToppingsError from './EmptyChosenToppingsError';

describe('render error', () => {
  let queries;

  const submitted = false;

  const chosenToppings = [{
    name: 'bacon',
    price: 0.69,
    amount: 2,
  }];

  beforeEach(() => {
    queries = render(
      <EmptyChosenToppingsError
        submitted={submitted}
        chosenToppings={chosenToppings}
      />,
    );
  });

  afterEach(cleanup);

  test('render message', () => {
    const { getByTestId } = queries;
    const message = 'Please choose at least one topping to place order!';

    expect(getByTestId('error__image').alt).toBe('error');
    expect(getByTestId('error__message').textContent).toBe(message);
  });

  test('get isEmpty', () => {
    const isEmpty = !chosenToppings.length && submitted;

    expect(typeof isEmpty).toBe('boolean');
  });
});
