import React from 'react';
import sinon from 'sinon';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Topping from './Topping';

describe('render a topping', () => {
  let queries;

  const topping = {
    name: 'anchovy',
    price: 0.69,
    image: 'image.svg',
  };

  const chosenToppings = [{
    name: 'anchovy',
    price: 0.69,
    amount: 1,
  }];

  beforeEach(() => {
    queries = render(
      <Topping
        topping={topping}
        chosenToppings={chosenToppings}
        onAmountDecreased={() => {}}
        onAmountIncreased={() => {}}
      />,
    );
  });

  afterEach(cleanup);

  test('render name', () => {
    const { name } = topping;
    const { getByTestId } = queries;

    expect(getByTestId('topping__name').textContent).toBe(name);
  });

  test('render image', () => {
    const { name, image } = topping;
    const { getByTestId } = queries;

    expect(getByTestId('topping__img').src).toBe(`http://localhost/${image}`);
    expect(getByTestId('topping__img').alt).toBe(name);
  });

  test('render amount', () => {
    const { name } = topping;
    const { getByTestId } = queries;
    const newChosenTopping = chosenToppings.find((chosenTopping) => chosenTopping.name === name);
    const amount = newChosenTopping ? newChosenTopping.amount : 0;

    expect(getByTestId('topping__amount').textContent).toBe(amount.toString());
  });
});

describe('change amount of toppings', () => {
  let queries;

  const topping = {
    name: 'anchovy',
    price: 0.69,
    image: 'image.svg',
  };

  const onAmountDecreasedSpy = sinon.spy();
  const onAmountIncreasedSpy = sinon.spy();

  beforeEach(() => {
    queries = render(
      <Topping
        topping={topping}
        chosenToppings={[]}
        onAmountDecreased={onAmountDecreasedSpy}
        onAmountIncreased={onAmountIncreasedSpy}
      />,
    );
  });

  afterEach(cleanup);

  test('decrease amount', () => {
    const { getByTestId } = queries;

    fireEvent.click(getByTestId('amount__decrease'));
    sinon.assert.calledOnce(onAmountDecreasedSpy);
    sinon.assert.calledWith(onAmountDecreasedSpy, topping);
  });

  test('increase amount', () => {
    const { getByTestId } = queries;

    fireEvent.click(getByTestId('amount__increase'));
    sinon.assert.calledOnce(onAmountIncreasedSpy);
    sinon.assert.calledWith(onAmountIncreasedSpy, topping);
  });
});
