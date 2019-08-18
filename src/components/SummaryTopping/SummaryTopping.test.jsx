import React from 'react';
import sinon from 'sinon';
import { render, fireEvent, cleanup } from '@testing-library/react';
import SummaryTopping from './SummaryTopping';
import toFixed from '../../helpers/toFixed';

describe('render an item', () => {
  const chosenTopping = {
    name: 'bacon',
    price: 0.69,
    amount: 2,
  };

  const { getByTestId } = render(
    <SummaryTopping
      chosenTopping={chosenTopping}
      onAmountDecreased={() => {}}
      onAmountIncreased={() => {}}
    />,
  );

  test('render name, amount, subtotal', () => {
    const { name, price, amount } = chosenTopping;

    expect(getByTestId('item__name').textContent).toBe(name);
    expect(getByTestId('item__amount').textContent).toBe(amount.toString());
    expect(getByTestId('item__subtotal').textContent).toBe(`$${toFixed(price * amount, 2)}`);
  });
});

describe('change amount of toppings', () => {
  const onAmountDecreasedSpy = sinon.spy();
  const onAmountIncreasedSpy = sinon.spy();

  const chosenTopping = {
    name: 'bacon',
    price: 0.69,
    amount: 2,
  };

  let queries;

  beforeEach(() => {
    queries = render(
      <SummaryTopping
        chosenTopping={chosenTopping}
        onAmountDecreased={onAmountDecreasedSpy}
        onAmountIncreased={onAmountIncreasedSpy}
      />,
    );
  });

  afterEach(cleanup);

  test('decrease amount', () => {
    const { getByTestId } = queries;

    fireEvent.click(getByTestId('item__decrease'));
    sinon.assert.calledOnce(onAmountDecreasedSpy);
    sinon.assert.calledWith(onAmountDecreasedSpy, chosenTopping);
  });

  test('increase amount', () => {
    const { getByTestId } = queries;

    fireEvent.click(getByTestId('item__increase'));
    sinon.assert.calledOnce(onAmountIncreasedSpy);
    sinon.assert.calledWith(onAmountIncreasedSpy, chosenTopping);
  });
});
