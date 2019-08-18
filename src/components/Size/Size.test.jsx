import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import sinon from 'sinon';
import Size from './Size';

describe('render a size', () => {
  let queries;

  const size = {
    name: 'large',
    price: 13.99,
    inch: 13,
  };

  const selectedSize = {
    name: 'large',
    price: 13.99,
  };

  const onSizeSelectedSpy = sinon.spy();

  beforeEach(() => {
    queries = render(
      <Size
        size={size}
        selectedSize={selectedSize}
        onSizeSelected={onSizeSelectedSpy}
      />,
    );
  });

  afterEach(cleanup);

  test('render size details', () => {
    const { getByTestId } = queries;
    const { name, inch } = size;

    expect(getByTestId('size__details').textContent).toBe(`${name}(${inch}")`);
  });

  test('render size image', () => {
    const { getByTestId } = queries;
    const { name } = size;

    expect(getByTestId('size__image').alt).toBe(name);
  });

  test('select size', () => {
    const { getByTestId } = queries;

    fireEvent.click(getByTestId('size'));
    sinon.assert.calledWith(onSizeSelectedSpy, size);
  });

  test('render isEqual', () => {
    const isEqual = size.name === selectedSize.name;

    expect(typeof isEqual).toBe('boolean');
  });
});
